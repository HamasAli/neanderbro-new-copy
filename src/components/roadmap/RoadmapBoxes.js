import React, { useLayoutEffect, useRef } from "react";
import StyledH3Heading from "../../common/components/styledH3Heading/StyledH3Heading";
import StyledH4Heading from "../../common/components/styledH4Heading/StyledH4Heading";
import { content } from "../../data";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const RoadmapBoxes = () => {
  const nBrosRef = useRef();
  const bgRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        nBrosRef.current,
        {
          y: "150px",
        },
        {
          duration: 10,
          y: "1200px",
          ease: "power2.out",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top center-=25%",
            toggleActions: "play none none reverse",
            scrub: 0.1,
            repeat: -1,
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div
      style={{
        background: `url('/assets/5 roadmap/Left side.png') left, url('/assets/5 roadmap/right side.png') right`,
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center gap-10 overflow-hidden"
    >
      <StyledH3Heading fontColor={"text-white"} content={"RoadMap"} />

      <div
        ref={bgRef}
        className="w-[95%] md:w-[80%] max-w-[100vw] flex flex-col lg:flex-row justify-between text-white gap-10 mb-16"
      >
        <div className="lg:w-[45%] flex flex-col gap-10">
          {/* Card-1 */}
          <div className="bg-[#192735] border-2 rounded-2xl border-blue p-4 md:p-6 lg:hidden flex-col justify-center relative flex ">
            <StyledH4Heading fontColor={"text-blue"} content={"2022/2023"} />

            {/* Box Content */}
            <div>
              <ul className="list-none">
                {content.neanderBrosList.map((item, index) => (
                  <li key={index} className="flex relative pl-7">
                    <img
                      src={"/assets/5 roadmap/checkmark.svg"}
                      alt="CheckMark"
                      className="mr-2 absolute left-1 top-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#192735] border-2 rounded-2xl border-yellow p-6 lg:mt-80">
            <StyledH4Heading fontColor={"text-yellow"} content={"2024"} />
            {/* Box Content */}
            <div>
              <ul className="list-disc pl-6 pr-4 space-y-1">
                {content.neanderBrosList1?.map((items, index) => (
                  <li
                    key={index}
                    className={
                      index === 0 || index === 6 || index === 8
                        ? "list-none"
                        : ""
                    }
                  >
                    <div
                      className={`flex ${
                        index === 0 || index === 6 || index === 8
                          ? "items-start ml-shift-left"
                          : ""
                      }`}
                    >
                      {index === 0 || index === 6 || index === 8 ? (
                        <img
                          src={"/assets/5 roadmap/checkmark.svg"}
                          alt="CheckMark"
                          className="mr-2 mt-1"
                        />
                      ) : null}
                      {items}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Right-Side*/}
          <div className="bg-[#192735] lg:w-[45%] border-2 rounded-2xl border-blue p-4 h-[50%] flex-col justify-center  lg:mt-[80%] lg:hidden flex ">
            <StyledH4Heading fontColor={"text-blue"} content={"2025"} />

            {/* Box Content */}
            <div>
              <ul className="list-disc pl-6 pr-4">
                {content.neanderBrosList2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Card-2 */}
          <div className="bg-[#192735] w-full border-2 rounded-2xl border-yellow p-6 lg:mt-[60%] 2xl:mt-[35%]">
            <StyledH4Heading
              fontColor={"text-yellow"}
              content={"2026 and beyond"}
            />

            {/* Box Content */}
            <div>
              <ul className="list-disc pl-6 pr-4">
                {content.neanderBrosList3.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* hr  */}

        <ol
          style={{
            border: "1px solid white",
            height: "auto",
            position: "relative",

            justifyContent: "center",
          }}
          className="hidden lg:flex"
        >
          <li className="bg-blue w-4 h-4 rounded-full absolute top-[-1px]" />
          <li className="bg-blue w-4 h-4 rounded-full absolute top-[50%]" />
          <li className="bg-blue w-4 h-4 rounded-full absolute bottom-16" />
        </ol>
        {/* Card Right-Side*/}
        <div className="lg:w-[45%] relative">
          {/* Card 1 and gsap section */}
          <div
            ref={nBrosRef}
            className=" absolute w-[40%] top-[50%] left-[2%] lg:w-[25%] lg:top-[0%]  2xl:top-[-18%] lg:left-[-23%]"
          >
            <img
              src="/assets/9 roadmap comingsoon/Plain_Human_2 1.png"
              alt="roadmap man"
            />
          </div>
          <div className="bg-[#192735] border-2 rounded-2xl border-blue p-6 hidden lg:flex-col justify-center relative lg:flex ">
            <StyledH4Heading fontColor={"text-blue"} content={"2022/2023"} />

            {/* Box Content */}
            <div>
              <ul className="list-none">
                {content.neanderBrosList.map((item, index) => (
                  <li key={index} className="flex relative pl-7">
                    <img
                      src={"/assets/5 roadmap/checkmark.svg"}
                      alt="CheckMark"
                      className="mr-2 absolute left-1 top-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#192735] border-2 rounded-2xl border-blue p-6 flex-col justify-center lg:mt-[105%] 2xl:mt-[55%] hidden lg:flex ">
            <StyledH4Heading fontColor={"text-blue"} content={"2025"} />

            {/* Box Content */}
            <div>
              <ul className="list-disc pl-6 pr-4">
                {content.neanderBrosList2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapBoxes;
