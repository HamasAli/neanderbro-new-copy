import React from "react";
import Button from "../../../components/button/Button";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";

const utilityCards = [
  {
    number: "01",
    title: "Playable Avatar",
    subtitle: "Now Live",
    body: "Step into TCG World as a custom NeanderBros-inspired avatar. Your Bro is no longer just held — it's played.",
    live: true,
  },
  {
    number: "02",
    title: "Stone Hut HQ",
    subtitle: "Coming Soon",
    body: "Our tribe's central hub inside TCG World — a gathering place for holders to explore and connect.",
    live: false,
  },
  {
    number: "03",
    title: "Guild Events",
    subtitle: "In the Works",
    body: "Competitions, quests, and NFT-powered unlockables built exclusively for NeanderBros holders.",
    live: false,
  },
];

const comingFeatures = [
  { label: "Guild Events", detail: "Compete as a tribe. Win as a family." },
  { label: "Quest Experiences", detail: "Explore, discover, and earn inside the world." },
  { label: "NFT Unlockables", detail: "Your NFT opens doors others can't." },
  { label: "Metaverse Expansion", detail: "More worlds. More utility. More NeanderBros." },
];

const TCGWorldSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[85%] md:w-[80%] mx-auto py-20 flex flex-col gap-16">

        {/* Hero */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-bold tracking-widest uppercase text-black bg-yellow px-4 py-1 rounded-full">
            Authorized Guild
          </span>
          <StyledH3Heading fontColor="text-yellow" content="NeanderBros x TCG World" />
          <p className="text-white text-md max-w-2xl">
            NeanderBros is an authorized guild inside TCG World — an immersive open-world metaverse
            where your NFT becomes a playable, interactive identity inside the game.
          </p>
        </div>

        {/* Utility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {utilityCards.map((card) => (
            <div
              key={card.number}
              className={`relative flex flex-col gap-4 p-6 rounded-xl overflow-hidden border-t-2 ${
                card.live ? "border-yellow bg-yellow bg-opacity-[0.07]" : "border-white border-opacity-20 bg-white bg-opacity-[0.03]"
              }`}
            >
              {/* Large background number */}
              <span
                className="absolute top-3 right-4 text-[5rem] font-black leading-none select-none pointer-events-none"
                style={{ color: card.live ? "rgba(255,193,7,0.08)" : "rgba(255,255,255,0.04)" }}
              >
                {card.number}
              </span>

              <div className="flex flex-col gap-1 relative z-10">
                <span
                  className={`text-xs font-bold tracking-widest uppercase w-fit px-2 py-[2px] rounded ${
                    card.live
                      ? "bg-yellow text-black"
                      : "bg-white bg-opacity-10 text-white text-opacity-50"
                  }`}
                >
                  {card.subtitle}
                </span>
                <p className="text-white font-bold text-lg mt-2">{card.title}</p>
              </div>
              <p className="text-white text-sm opacity-70 relative z-10 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Video 1 — Avatar Showcase */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <StyledH5Heading fontColor="text-yellow" content="Playable NeanderBros Avatar — Now Live" />
            <p className="text-white text-sm opacity-70">
              Explore the world, interact with other players, and represent the tribe with a character
              built around the NeanderBros brand.
            </p>
          </div>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/_PmiviTPUgg"
              title="NeanderBros Avatar Showcase"
              loading="lazy"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        {/* Video 2 — Tutorial */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <StyledH5Heading fontColor="text-yellow" content="How To Use Your NeanderBros Avatar" />
            <p className="text-white text-sm opacity-70">
              Watch the step-by-step tutorial to get your NeanderBros avatar set up and running
              inside TCG World in minutes.
            </p>
          </div>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/sBhr-PNn4BQ"
              title="NeanderBros Avatar Tutorial"
              loading="lazy"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        {/* Community Events — hype block */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold tracking-widest uppercase text-yellow opacity-60">
              What's Coming
            </span>
            <StyledH5Heading fontColor="text-white" content="Community Events & Future Utility" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comingFeatures.map((item, i) => (
              <div
                key={item.label}
                className="group flex flex-col gap-1 border-l-2 border-yellow border-opacity-40 pl-4 py-1 hover:border-opacity-100 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-yellow text-xs font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white font-bold text-md">{item.label}</p>
                </div>
                <p className="text-white text-sm opacity-50 pl-6">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-yellow text-sm font-semibold opacity-70 mt-2">
            More is coming — and early holders will be first in line.
          </p>
        </div>

        {/* CTA Strip */}
        <div className="flex flex-col items-center gap-6 border border-yellow border-opacity-30 rounded-2xl px-8 py-10 bg-yellow bg-opacity-5 text-center">
          <StyledH5Heading fontColor="text-yellow" content="Join Us in TCG World" />
          <p className="text-white text-sm max-w-lg opacity-80">
            Create your profile, enter the world, and start exploring with the tribe. Early holders
            will be first to experience upcoming features and in-world events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tcg.world/register" target="_blank" rel="noopener noreferrer">
              <Button variant="text-dark border-yellow bg-yellow">
                Create Your TCG World Profile
              </Button>
            </a>
            <a href="https://tcg.world" target="_blank" rel="noopener noreferrer">
              <Button variant="text-yellow border-yellow bg-transparent">
                Learn More About TCG World
              </Button>
            </a>
          </div>
          <p className="text-white text-sm italic opacity-50">
            From the wild lands of Az'Kalon to the metaverse of TCG World — the tribe is evolving.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TCGWorldSection;
