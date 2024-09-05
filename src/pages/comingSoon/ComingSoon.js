import React from "react";

const styles = {
  backgroundImage: "url('/assets/9 roadmap comingsoon/background image.png')",
};

const ComingSoon = () => {
  return (
    <div
      className=" mx-auto flex flex-col items-center justify-center relative h-[100vh] bg-no-repeat	bg-cover bg-center max-w-[100%]"
      style={styles}
    >
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-bold md:text-2xl text-white">Staking</h3>
        <h1 className="text-2xl font-bold md:text-5xl text-yellow">
          Coming Soon
        </h1>
      </div>
      <div>
        <img src="/assets/loader/loading1.gif" alt="#" />
      </div>
    </div>
  );
};

export default ComingSoon;
