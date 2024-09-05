import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";

const GameSection = () => {
  const { unityProvider, isLoaded, unload } = useUnityContext({
    loaderUrl: "gamebuild/V0.2.loader.js",
    dataUrl: "gamebuild/V0.2.data",
    frameworkUrl: "gamebuild/V0.2.framework.js",
    codeUrl: "gamebuild/V0.2.wasm",
  });

  const gameDivRef = useRef();
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (gameDivRef.current && !gameDivRef.current.contains(event.target)) {
        // Clicked outside the game, handle the click
        handleClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick]);

  async function handleClick() {
    await unload();
  }
  
  function handlePlay() {
    setReloadKey((prevKey) => prevKey + 1);
  }

  return (
    <div className=" flex w-[100%] justify-center">
      {!isLoaded && <Loader />}
      <div ref={gameDivRef} className="relative flex flex-col mt-32 2xl:mt-44 mb-6 w-[80%]">
        <div onClick={handlePlay} className="absolute w-[2%] top-1 right-1 md:top-2 md:right-2">
          <img className="cursor-pointer" src="/assets/8 game/reload.svg" alt="Reload" />
        </div>
        <Unity key={reloadKey} unityProvider={unityProvider} />
      </div>
    </div>
  );
};
export default GameSection;