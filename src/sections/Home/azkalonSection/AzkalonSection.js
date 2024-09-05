//Imports
import React, { useLayoutEffect, useRef } from "react";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
import StyledMdText from "../../../common/components/styledMdText/StyledMdText";
//GSAP Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP plugin Register
gsap.registerPlugin(ScrollTrigger);

const AzkalonSection = () => {
  const imgBox = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  //LayoutEffect for GSAP
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        img1.current,
        {
          rotateZ: "-50deg",
          scale: 1,
          x: "-20%",
          y: "50%",
        },
        {
          duration: 1,
          y: "0%",
          x: "0",
          rotateZ: "0deg",
          ease: "power2.out",
          scale: 1.5,
          scrollTrigger: {
            trigger: imgBox.current,
            start: "top bottom-=30%",
            toggleActions: "play none none reverse",
            // markers: true,
            scrub: true,
            repeat: -1,
          },
        }
      );

      gsap.fromTo(
        img2.current,
        {
          rotateZ: "50deg",
          scale: 1,
          x: "20%",
          y: "50%",
        },
        {
          duration: 1,
          x: "0",
          y: "0%",
          rotateZ: "0deg",
          ease: "power2.out",
          scale: 1.5,
          scrollTrigger: {
            trigger: imgBox.current,
            start: "top bottom-=30%",
            toggleActions: "play none none reverse",
            // markers: true,
            scrub: true,
            repeat: -1,
          },
        }
      );

      gsap.fromTo(
        img3.current,
        {
          rotateZ: "-30deg",
          scale: 1,
          y: "100%",
        },
        {
          duration: 1,
          rotateZ: "0deg",
          y: "30%",
          ease: "power2.out",
          scale: 1.5,
          scrollTrigger: {
            trigger: imgBox.current,
            start: "top bottom-=30%",
            toggleActions: "play none none reverse",
            // markers: true,
            scrub: true,
            repeat: -1,
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="flex justify-center">
      {/*Main Parent Section*/}
      <div
        ref={imgBox}
        className="flex w-[85%] md:w-[80%] xl:w-[75%] flex-col justify-between py-20 lg:flex-row"
      >
        {/*Left Section*/}
        <div className="flex flex-col lg:w-[50%] xl:pl-16 md:py-10 lg:py-20">
          <div className="">
            <StyledH3Heading fontColor={"text-yellow"} content={"Az'Kalon"} />
          </div>
          <div className="">
            <StyledMdText
              fontColor={"text-gray"}
              content={
                "The NeanderBros are an intelligent species of caveman looking beings inhabiting the dinosaur ridden land of Az'Kalon. Although the NeanderBros were at first human looking beings (HumanBros), generations of expanding across, and inhabiting different regions of Az'Kalon have resulted in the evolution of 3 other races: MerBros, RockBros, and BirdBros. There is very little communication between the 4 tribes, but each tribe is aware of the existence of the other three Tribes."
              }
            />
          </div>
        </div>
        {/*Right Section*/}
        <div className="lg:w-[50%] relative mb-[15rem] md:mb-[30rem] ml-[20%] md:ml-32 mt-[15%] md:mt-20 lg:mt-0 lg:ml-40">
          {/*Div for Image#1*/}
          <div ref={img1} className="w-[50%] absolute -left-5 xl:left-10 top-5">
            <img src="/assets/2 Collection/Group 99.webp" alt="NFT Card#1" />
          </div>
          {/*Div for Image#2*/}
          <div
            ref={img2}
            className="w-[50%] absolute left-24 md:left-40 lg:left-20 xl:left-40"
          >
            <img src="/assets/2 Collection/Group 93.webp" alt="NFT Card#2" />
          </div>
          {/*Div for Image#3*/}
          <div
            ref={img3}
            className="w-[50%] absolute left-8 md:left-24 top-16 lg:left-5 xl:left-24 lg:top-32"
          >
            <img src="/assets/2 Collection/Group 101.webp" alt="NFT Card#3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AzkalonSection;
