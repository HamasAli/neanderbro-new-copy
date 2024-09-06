import React from "react";
import { Link, NavLink } from "react-router-dom";
import { content } from "../../data";
import Copyrights from "../copyrights/Copyrights";
import { usePath } from "../../context/PathContext";

const Footer = () => {
  const header = content.menuItems.header;
  const footer = content.footerSvg;
  const { path } = usePath();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-white bg-opacity-10 rounded-lg py-2 w-[90%] md:w-[80%] max-w-[100vw] mx-auto px-5">
        <div className="flex lg:flex-row flex-col items-center justify-center md:justify-between">
          <div className="lg:w-[15%] cursor-pointer">
            <Link to={"/"}>
              <img src="/assets/2 Collection/logo-bros.webp" alt="logo" />
            </Link>
          </div>
          <div className="flex flex-col gap-5 my-4 text-center md:gap-4 lg:gap-3 xl:gap-4 lg:flex-row lg:my-0">
            {header.map((item, index) => (
              <NavLink
                className={`font-medium shadow-xl text-white hover:scale-[0.99] font-montserrat text-[15px] lg:text-[10px] xl:text-[15px] hover:text-yellow active:text-yellow active:font-semibold ${
                  path === item.link ? "text-yellow font-semibold" : ""
                }`}
                key={index}
                to={item.link}
              >
                {item.menu}
              </NavLink>
            ))}
          </div>
          <div className="flex justify-center w-[60%] md:w-[30%] lg:w-[120px]">
            <Link to="/mint" className="duration-300 hover:scale-95">
              <img src="/assets/mint-now.png" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-2 lg:gap-1 xl:gap-2 md:scale-110 mt-5 lg:mt-0">
          {footer.map((item, index) => (
            <Link
              className="hover:border-blue border border-[#192735] rounded-2xl"
              key={index}
              to={item.link}
              target="_blank"
            >
              {item?.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Copyrights />
      </div>
    </div>
  );
};

export default Footer;
