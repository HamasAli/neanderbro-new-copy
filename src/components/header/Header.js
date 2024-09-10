import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { Link, NavLink } from "react-router-dom";
import { content } from "../../data";
import MobileNav from "../mobileNav/MobileNav";
import { usePath } from "../../context/PathContext";

const Header = () => {
  const { path } = usePath();
  const header = content.menuItems.header;
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const show = prevScrollPos > currentScrollPos || currentScrollPos < 200;
      setPrevScrollPos(currentScrollPos);
      setShowNavbar(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed w-[100vw] max-w-[1440px] transition duration-500 transform backdrop-blur-sm z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-[100px]"
      }`}
    >
      <div className="flex bg-white bg-opacity-10 rounded-lg items-center justify-between py-1.5 px-3 w-[90%] md:w-[85%] xl:w-[80%] mx-auto 2xl:ml-[710px] mt-5 ">
        <div className="flex items-center gap-5 w-[100%]">
          <div className="w-[60%] md:w-[30%] lg:w-[20%] cursor-pointer">
            <Link to="/">
              <img
                className="md:w-[116px] md:h-[50px]"
                src="/assets/2 Collection/logo-bros.webp"
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:justify-center lg:gap-3 xl:gap-6 w-[100%]">
            {header.map((item, index) => (
              <NavLink
                className={`font-medium text-white font-montserrat hover:scale-[0.99] lg:text-sm xl:text-md  shadow-xl hover:text-yellow ${
                  path === item.link ? "text-yellow font-semibold" : ""
                }`}
                key={index}
                to={item.link}
                exact="true"
              >
                {item.menu}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex justify-end w-[60%] md:w-[30%] lg:w-[120px]">
          <Link to="/mint" className="duration-300 hover:scale-95">
            <img src="/assets/mint-now.png" alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
