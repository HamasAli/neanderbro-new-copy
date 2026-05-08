import React, { useState, useEffect, useRef, useCallback } from "react";

const SPOTIFY_URL =
  "https://open.spotify.com/album/3Sgtxbt5zCAmPBq6FymjYs?si=cqulGV8jSNW4Pm7WZoodqQ";

const TRACKS = [
  { src: "/assets/music/1. Az Kalon Rise.mp3",      name: "Az Kalon Rise" },
  { src: "/assets/music/2-4000-Strong.mp3",          name: "4000 Strong" },
  { src: "/assets/music/3-NeanderBros-March.mp3",    name: "NeanderBros March" },
  { src: "/assets/music/4. Stone Hut Dreams.mp3",    name: "Stone Hut Dreams" },
  { src: "/assets/music/5-Mint-Season-Call.mp3",     name: "Mint Season Call" },
  { src: "/assets/music/6-Four-Tribes.mp3",          name: "Four Tribes" },
  { src: "/assets/music/7-Ancient-One.mp3",          name: "Ancient One" },
  { src: "/assets/music/8. Dino Hunt.mp3",           name: "Dino Hunt" },
  { src: "/assets/music/9. ZombieBros Rise.mp3",     name: "ZombieBros Rise" },
  { src: "/assets/music/10-AzKalon-Grove.mp3",       name: "AzKalon Grove" },
  { src: "/assets/music/11. Six Fragments Open.mp3", name: "Six Fragments Open" },
  { src: "/assets/music/12-NeanderGame.mp3",         name: "NeanderGame" },
  { src: "/assets/music/13. Built Different.mp3",    name: "Built Different" },
  { src: "/assets/music/14-Stone-to-Stars.mp3",      name: "Stone to Stars" },
];

const pickRandom = (current, total) => {
  if (total <= 1) return 0;
  let next;
  do {
    next = Math.floor(Math.random() * total);
  } while (next === current);
  return next;
};

const fmt = (s) => {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

const MusicPlayer = () => {
  const audioRef       = useRef(null);
  const currentIdxRef  = useRef(null);

  const [isPlaying, setIsPlaying]         = useState(false);
  const [trackIndex, setTrackIndex]       = useState(null);
  const [trackHistory, setTrackHistory]   = useState([]);
  const [currentTime, setCurrentTime]     = useState(0);
  const [duration, setDuration]           = useState(0);
  const [volume, setVolume]               = useState(1);
  const [isMutedMobile, setIsMutedMobile] = useState(false);
  const [hintVisible, setHintVisible]     = useState(false);
  const [slideIn, setSlideIn]             = useState(false);

  // Mount
  useEffect(() => {
    if (TRACKS.length === 0) return;

    const idx = Math.floor(Math.random() * TRACKS.length);
    currentIdxRef.current = idx;
    setTrackIndex(idx);

    const audio = new Audio(TRACKS[idx].src);
    audio.volume  = 1;
    audio.preload = "none";
    audioRef.current = audio;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onMetadata   = () => setDuration(audio.duration);
    const onPlay       = () => setIsPlaying(true);
    const onPause      = () => setIsPlaying(false);
    const onEnded      = () => {
      const next = pickRandom(currentIdxRef.current, TRACKS.length);
      setTrackHistory((h) => [...h, currentIdxRef.current]);
      currentIdxRef.current = next;
      setTrackIndex(next);
      setCurrentTime(0);
      setDuration(0);
      audio.src = TRACKS[next].src;
      audio.load();
      audio.play().catch(() => {});
    };

    audio.addEventListener("timeupdate",     onTimeUpdate);
    audio.addEventListener("loadedmetadata", onMetadata);
    audio.addEventListener("play",           onPlay);
    audio.addEventListener("pause",          onPause);
    audio.addEventListener("ended",          onEnded);

    // Slide-in entrance
    const slideTimer = setTimeout(() => setSlideIn(true), 80);

    // First-visit hint
    if (!localStorage.getItem("nb_music_hint")) {
      setHintVisible(true);
    }

    return () => {
      clearTimeout(slideTimer);
      audio.removeEventListener("timeupdate",     onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onMetadata);
      audio.removeEventListener("play",           onPlay);
      audio.removeEventListener("pause",          onPause);
      audio.removeEventListener("ended",          onEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Volume sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const doSwitch = useCallback((idx) => {
    if (!audioRef.current) return;
    const wasPlaying = !audioRef.current.paused;
    currentIdxRef.current = idx;
    setTrackIndex(idx);
    setCurrentTime(0);
    setDuration(0);
    audioRef.current.pause();
    audioRef.current.src = TRACKS[idx].src;
    audioRef.current.load();
    if (wasPlaying) audioRef.current.play().catch(() => {});
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current || TRACKS.length === 0) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
      if (!localStorage.getItem("nb_music_hint")) {
        localStorage.setItem("nb_music_hint", "1");
        setHintVisible(false);
      }
    }
  };

  const handleSkipForward = () => {
    if (currentIdxRef.current === null || TRACKS.length === 0) return;
    const next = pickRandom(currentIdxRef.current, TRACKS.length);
    setTrackHistory((h) => [...h, currentIdxRef.current]);
    doSwitch(next);
  };

  const handleSkipBackward = () => {
    if (!audioRef.current) return;
    if (currentTime > 3) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    if (trackHistory.length > 0) {
      const prev = trackHistory[trackHistory.length - 1];
      setTrackHistory((h) => h.slice(0, -1));
      doSwitch(prev);
    }
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const t = Number(e.target.value);
    audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const handleMobileMute = () => {
    if (!audioRef.current) return;
    const next = !isMutedMobile;
    audioRef.current.muted = next;
    setIsMutedMobile(next);
  };

  if (TRACKS.length === 0) return null;

  const progressPct  = duration > 0 ? (currentTime / duration) * 100 : 0;
  const trackName    = trackIndex !== null ? (TRACKS[trackIndex]?.name ?? "") : "";
  const seekBg       = `linear-gradient(to right, #ffc107 ${progressPct}%, rgba(255,255,255,0.12) ${progressPct}%)`;
  const volBg        = `linear-gradient(to right, #ffc107 ${volume * 100}%, rgba(255,255,255,0.12) ${volume * 100}%)`;

  return (
    /* Outer: centres horizontally with flex, animates vertical entry */
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div
        className="pointer-events-auto w-full max-w-[620px] transition-transform duration-500 ease-out"
        style={{ transform: slideIn ? "translateY(0)" : "translateY(calc(100% + 1.5rem))" }}
      >
        {/* Floating card */}
        <div
          className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.8)]"
          style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.07)" }}
        >

          {/* Top row: controls · track info · volume · spotify */}
          <div className="flex items-center gap-4 px-5 pt-4 pb-2">

            {/* Playback controls */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleSkipBackward}
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                </svg>
              </button>

              {/* Primary play/pause — filled yellow circle */}
              <div className="relative flex-shrink-0">
                {hintVisible && (
                  <span className="absolute inset-0 rounded-full bg-yellow animate-ping opacity-50 pointer-events-none" />
                )}
                <button
                  onClick={handlePlayPause}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-105 active:scale-95 relative z-10"
                  style={{ background: "#ffc107" }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#111">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#111">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              <button
                onClick={handleSkipForward}
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* Track info */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate leading-tight">{trackName}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-white/25 text-xs">NeanderBros</p>
                {SPOTIFY_URL && (
                  <a
                    href={SPOTIFY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#1DB954] hover:opacity-80 transition-opacity"
                    title="Listen on Spotify"
                    aria-label="Listen on Spotify"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    <span className="text-[11px] font-medium">Spotify</span>
                  </a>
                )}
              </div>
            </div>

            {/* Volume — desktop */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/25">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
              <input
                type="range" min={0} max={1} step={0.01} value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-16 accent-yellow cursor-pointer"
                style={{ height: "3px", background: volBg }}
              />
            </div>

            {/* Mobile mute */}
            <button
              onClick={handleMobileMute}
              className="md:hidden text-white/30 hover:text-white transition-colors flex-shrink-0"
              aria-label={isMutedMobile ? "Unmute" : "Mute"}
            >
              {isMutedMobile ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              )}
            </button>

          </div>

          {/* Seek row */}
          <div className="flex items-center gap-3 px-5 pb-4">
            <span className="text-white/20 text-[10px] w-7 text-right flex-shrink-0 tabular-nums">
              {fmt(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 accent-yellow cursor-pointer"
              style={{ height: "3px", background: seekBg }}
            />
            <span className="text-white/20 text-[10px] w-7 flex-shrink-0 tabular-nums">
              {fmt(duration)}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
