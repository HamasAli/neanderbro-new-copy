import React, { useLayoutEffect, useRef } from "react";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP plugin Register
gsap.registerPlugin(ScrollTrigger);

const Dinasour = () => {
  const dinasourRef = useRef();
  const bgRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        dinasourRef.current,
        {
          x: "0%",
        },
        {
          duration: 1,
          x: "-300%",
          ease: "power2.out",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top+=10% bottom-=20%",
            toggleActions: "play none none reverse",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
              // Check if scrolling in reverse
              const isScrollingReverse = self.direction === -1;

              // Adjust the rotation based on the scroll direction
              gsap.to(dinasourRef.current, {
                rotationY: isScrollingReverse ? 180 : 0,
                ease: "none",
              });
            },
            repeat: -1,
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={bgRef} className="relative mb-[-17%] 2xl:mb-[-8%] flex justify-center  ">
      <div className="">
        <img src="/assets/1 Homepage/how-to-mint.png" alt="Mountain" />
        <div
          ref={dinasourRef}
          className="absolute w-[30%] top-[10%] right-[5%] md:w-[15%] md:top-[21%]  2xl:top-[16%] md:right-[18%]"
        >
          <img src="/assets/1 Homepage/Trike left.GIF" alt="Dinasour" />
        </div>
      </div>
    </div>
  );
};

export default Dinasour;
