import { useEffect, useState } from "react";
import { content } from "../../data";
import Button from "../button/Button";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const header = content.menuItems.header;
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
    setNavShow(false);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="w-8 h-8 py-1 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-[100vh] w-[80vw] transform bg-[#144272] ${navShow ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ transition: "all 0.5s cubic-bezier(.68,-0.55,.27,1.55)" }}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="w-8 h-8 mt-5 mr-5 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#D1D1D1" />
              <path
                d="M21.6372 19.9289C22.1209 20.4131 22.1209 21.1662 21.6372 21.6503C21.3954 21.8924 21.0998 22 20.7774 22C20.4549 22 20.1593 21.8924 19.9175 21.6503L15 16.7281L10.0825 21.6503C9.84069 21.8924 9.54511 22 9.22265 22C8.90019 22 8.60461 21.8924 8.36276 21.6503C7.87908 21.1662 7.87908 20.4131 8.36276 19.9289L13.2802 15.0067L8.36276 10.0845C7.87908 9.60039 7.87908 8.84726 8.36276 8.36311C8.84645 7.87896 9.59885 7.87896 10.0825 8.36311L15 13.2853L19.9175 8.36311C20.4012 7.87896 21.1536 7.87896 21.6372 8.36311C22.1209 8.84726 22.1209 9.60039 21.6372 10.0845L16.7198 15.0067L21.6372 19.9289Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`fixed mt-6 h-full items-start gap-6 flex w-full px-8 flex-col`}
        >
          {header.map((item, index) => (
            <Link
              className={`text-white text-md hover:text-yellow ${path === item.link ? "text-yellow font-semibold" : ""
                }`}
              key={index}
              to={item.link}
            >
              {item.menu}
            </Link>
          ))}

          <div className="w-[100%]">
            <Link to="/mint">
              <img src="/assets/mint-now.png" alt="logo" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
