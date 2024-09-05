import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Ensure this file exists and contains your Tailwind CSS classes
import img from "../../img/1x1.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [prevIndex, setPrevIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(3);
  const mainRef = useRef();

  function slider() {
    if (mainRef.current) {
      const element = mainRef.current;
      var e = element,
        a = e.querySelector(".slider_top"),
        n = e.querySelector(".slider_content"),
        i = 2,
        r = setInterval(function () {
          i++;
          i = sliderDo(a, n, i);
        }, 4000);

      e.querySelector(".slider_nav .prev").addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          clearInterval(r);
          i--;
          i = sliderDo(a, n, i);
          r = setInterval(function () {
            i++;
            i = sliderDo(a, n, i);
          }, 6000);
        }
      );

      e.querySelector(".slider_nav .next").addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          clearInterval(r);
          i++;
          i = sliderDo(a, n, i);
          r = setInterval(function () {
            i++;
            i = sliderDo(a, n, i);
          }, 6000);
        }
      );

      e.querySelectorAll(".slider_top li").forEach(function (li) {
        li.addEventListener("click", function (event) {
          var s = li.className;
          if (s === "next") {
            event.stopPropagation();
            event.preventDefault();
            i++;
          } else if (s === "prev") {
            event.stopPropagation();
            event.preventDefault();
            i--;
          }

          clearInterval(r);
          i = sliderDo(a, n, i);
          r = setInterval(function () {
            i++;
            i = sliderDo(a, n, i);
          }, 6000);
        });
      });
    }
  }

  const sliderDo = function (t, e, a) {
    var n = t.querySelectorAll("li")?.length;
    a > n && (a -= n);
    var o = a - 1,
      i = a - 2,
      r = a + 1,
      s = a + 2;
    return (
      o > n && (o -= n),
      i > n && (i -= n),
      r > n && (r -= n),
      s > n && (s -= n),
      o < 1 && (o += n),
      i < 1 && (i += n),
      a < 1 && (a += n),
      r < 1 && (r += n),
      s < 1 && (s += n),
      t
        .querySelectorAll("li")
        .forEach((elem) =>
          elem.classList.remove("prev", "prev2", "active", "next", "next2")
        ),
      t.querySelector('li[data-index="' + i + '"]').classList.add("prev2"),
      t.querySelector('li[data-index="' + o + '"]').classList.add("prev"),
      t.querySelector('li[data-index="' + a + '"]').classList.add("active"),
      t.querySelector('li[data-index="' + r + '"]').classList.add("next"),
      t.querySelector('li[data-index="' + s + '"]').classList.add("next2"),
      a
    );
  };

  function BgImg() {
    if (mainRef.current) {
      mainRef.current
        .querySelectorAll("*[data-bg-img]")
        .forEach(function (element) {
          var e = element,
            a = e.getAttribute("data-bg-img"),
            n = e.dataset.bgImg;

          if (a !== undefined) {
            e.style.backgroundImage = `url('${n}')`;
          }
        });
    }
  }

  const init = () => {
    BgImg();
    slider();
  };

  useEffect(() => {
    init();
  }, []);

  const handlePrevClick = () => {
    const { prev2, prev1, index } = sliderDo(currentIndex);
    setCurrentIndex(prev1);
    setPrevIndex(prev2);
    setNextIndex(index);
  };

  const handleNextClick = () => {
    const { next1, next2 } = sliderDo(currentIndex);
    setCurrentIndex(next1);
    setPrevIndex(currentIndex);
    setNextIndex(next2);
  };

  return (
    <>
      <div
        ref={mainRef}
        id="home"
        className="fn_cs_slider max-w-[100vw]  md:ml-[18%] lg:ml-0 "
        data-responsive="on"
      >
        <div className="slider_top">
          <img src={img} alt="" />
          <ul>
            <li className="prev" data-index="1">
              <div className="item">
                <img src={img} alt="" />
                <div className="item_in">
                  <div
                    className="img"
                    data-bg-img="/assets/1 Homepage/carousal-image1.webp"
                  ></div>
                </div>
              </div>
            </li>
            <li className="active" data-index="2">
              <div className="item">
                <img src={img} alt="" />
                <div className="item_in">
                  <div
                    className="img"
                    data-bg-img="/assets/1 Homepage/carousal-image2.webp"
                  ></div>
                </div>
              </div>
            </li>
            <li className="next" data-index="3">
              <div className="item ">
                <img src={img} alt="" />

                <div className="item_in">
                  <div
                    className="img"
                    data-bg-img="/assets/1 Homepage/carousal-image3.webp"
                  ></div>
                </div>
              </div>
            </li>
            <li className="next2" data-index="4">
              <div className="item">
                <img src={img} alt="" />
                <div className="item_in">
                  <div
                    className="img"
                    data-bg-img="/assets/1 Homepage/carousal-free.webp"
                  ></div>
                </div>
              </div>
            </li>
            <li className="prev2" data-index="5">
              <div className="item">
                <img src={img} alt="" />
                <div className="item_in">
                  <div
                    className="img"
                    data-bg-img="/assets/1 Homepage/carousal-image4.webp"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="slider_nav md:mr-[18%] lg:mr-0">
          <a href="#" className="prev">
            <span className="circle"></span>
            <span className="icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_78_2344)">
                  <path
                    d="M15 30C6.71573 30 1.28227e-07 23.2843 -5.96007e-07 15C-1.32024e-06 6.71573 6.71573 2.03558e-06 15 1.31134e-06C23.2843 5.87108e-07 30 6.71573 30 15C30 23.2843 23.2843 30 15 30Z"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M17.2116 8.46838L18.0696 9.30838L12.4824 14.9964L18.0696 20.6916L17.2116 21.5304L10.7988 14.9976L17.2116 8.46838Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_78_2344">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="matrix(-1 8.74228e-08 8.74228e-08 1 30 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="circle"></span>
          </a>
          <a href="#" className="next">
            <span className="circle"></span>
            <span className="icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_78_2348)">
                  <path
                    d="M15 -1.90735e-06C23.2843 -1.90735e-06 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 -1.90735e-06 15 -1.90735e-06Z"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M12.7884 21.5316L11.9304 20.6916L17.5176 15.0036L11.9304 9.30842L12.7884 8.46961L19.2012 15.0024L12.7884 21.5316Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_78_2348">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 30)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="circle"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Carousel;
