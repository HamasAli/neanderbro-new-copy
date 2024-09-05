import React from "react";
import Button from "../button/Button";
import { useStakingStateContext } from "../../context/StakingContract";
import { useFeeData } from "wagmi";
import { Success } from "../toast/Success";
import { Error } from "../toast/Error";
import { useStateContext1 } from "../../context";
import { useStakingStateContextV1 } from "../../context/StakingV1Contract";

const EmergencyModal = ({ isOpen, setIsOpen, id, wallet, stakingV1 }) => {
  const { Emergency } = useStakingStateContext();
  const { EmergencyV1 } = useStakingStateContextV1();
  const { setMetaMaskLoader, setApiState } = useStateContext1();
  const { data } = useFeeData();

  const handleEUnstake = async () => {
    setIsOpen(false);
    try {
      setMetaMaskLoader(true);
      let response;
      if (stakingV1) {
        response = await EmergencyV1(id, wallet, data?.formatted?.gasPrice);
      } else {
        response = await Emergency(id, wallet, data?.formatted?.gasPrice);
      }
      if (response.status === true) {
        Success({ message1: "Successfully Unstaked", autoClose: true });
        setApiState((prevApiState) => !prevApiState);
        setMetaMaskLoader(false);
      }
      return response;
    } catch (error) {
      Error({ message: "Failed to unstake" });
      setMetaMaskLoader(false);
      return error;
    } finally {
      setMetaMaskLoader(false);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed w-[100%] bg-black backdrop-blur-sm bg-opacity-[50%]  inset-0 flex items-center justify-center z-50">
          <div className=" bg-[#000F1F] border border-blue relative gap-3 p-8 flex flex-col justify-center items-center rounded-xl shadow-md w-[80%] lg:w-1/3">
            <div className="flex justify-center items-center ">
              <h2 className="xl:text-2xl text-xl text-red-700 font-bold">
                Warning!!
              </h2>

              <button onClick={closeModal}>
                <svg
                  className="fill-current text-gray-600 absolute top-4 right-5 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M20.9458 11.0533C20.8218 10.9283 20.6744 10.8292 20.5119 10.7615C20.3494 10.6938 20.1751 10.6589 19.9991 10.6589C19.8231 10.6589 19.6488 10.6938 19.4864 10.7615C19.3239 10.8292 19.1764 10.9283 19.0525 11.0533L15.9991 14.12L12.9458 11.0533C12.6947 10.8022 12.3542 10.6612 11.9991 10.6612C11.6441 10.6612 11.3035 10.8022 11.0525 11.0533C10.8014 11.3044 10.6603 11.6449 10.6603 12C10.6603 12.3551 10.8014 12.6956 11.0525 12.9467L14.1191 16L11.0525 19.0533C10.9275 19.1773 10.8283 19.3247 10.7606 19.4872C10.6929 19.6497 10.6581 19.824 10.6581 20C10.6581 20.176 10.6929 20.3503 10.7606 20.5128C10.8283 20.6752 10.9275 20.8227 11.0525 20.9467C11.1764 21.0716 11.3239 21.1708 11.4864 21.2385C11.6488 21.3062 11.8231 21.341 11.9991 21.341C12.1751 21.341 12.3494 21.3062 12.5119 21.2385C12.6744 21.1708 12.8218 21.0716 12.9458 20.9467L15.9991 17.88L19.0525 20.9467C19.1764 21.0716 19.3239 21.1708 19.4864 21.2385C19.6488 21.3062 19.8231 21.341 19.9991 21.341C20.1751 21.341 20.3494 21.3062 20.5119 21.2385C20.6744 21.1708 20.8218 21.0716 20.9458 20.9467C21.0708 20.8227 21.17 20.6752 21.2377 20.5128C21.3053 20.3503 21.3402 20.176 21.3402 20C21.3402 19.824 21.3053 19.6497 21.2377 19.4872C21.17 19.3247 21.0708 19.1773 20.9458 19.0533L17.8791 16L20.9458 12.9467C21.0708 12.8227 21.17 12.6752 21.2377 12.5128C21.3053 12.3503 21.3402 12.176 21.3402 12C21.3402 11.824 21.3053 11.6497 21.2377 11.4872C21.17 11.3247 21.0708 11.1773 20.9458 11.0533ZM25.4258 6.57332C24.1958 5.29985 22.7246 4.28409 21.0979 3.5853C19.4711 2.88651 17.7215 2.5187 15.9511 2.50331C14.1808 2.48793 12.425 2.82528 10.7864 3.49569C9.14779 4.16611 7.6591 5.15615 6.4072 6.40805C5.15529 7.65995 4.16525 9.14865 3.49484 10.7873C2.82443 12.4259 2.48707 14.1816 2.50246 15.952C2.51784 17.7224 2.88566 19.472 3.58444 21.0987C4.28323 22.7254 5.29899 24.1967 6.57246 25.4267C7.80242 26.7001 9.27368 27.7159 10.9004 28.4147C12.5271 29.1135 14.2767 29.4813 16.0471 29.4967C17.8175 29.512 19.5732 29.1747 21.2118 28.5043C22.8505 27.8339 24.3392 26.8438 25.5911 25.5919C26.843 24.34 27.833 22.8513 28.5034 21.2127C29.1738 19.5741 29.5112 17.8184 29.4958 16.048C29.4804 14.2776 29.1126 12.528 28.4138 10.9013C27.715 9.27454 26.6993 7.80327 25.4258 6.57332ZM23.5458 23.5466C21.8018 25.2925 19.5065 26.3798 17.0509 26.6231C14.5952 26.8664 12.1311 26.2507 10.0785 24.881C8.02585 23.5113 6.51161 21.4723 5.79376 19.1113C5.07591 16.7503 5.19887 14.2135 6.14168 11.933C7.08449 9.65255 8.78883 7.76951 10.9643 6.60473C13.1398 5.43995 15.6519 5.06549 18.0725 5.54515C20.4931 6.02481 22.6725 7.32891 24.2395 9.23527C25.8064 11.1416 26.6639 13.5323 26.6658 16C26.6706 17.4017 26.3973 18.7904 25.8617 20.0858C25.3262 21.3812 24.539 22.5575 23.5458 23.5466Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <p className="text-white text-sm lg:text-md m-2">
              If you unstake your Neanderbros NFTs you will not recieve any
              reward. Are you sure you want to unstake?
            </p>
            <div className="flex flex-col gap-3 justify-center items-center w-[70%] md:w-[50%]">
              <Button
                onClick={handleEUnstake}
                variant={"border-red-700 text-red-600"}
                children={"Unstake"}
              />

              <Button
                onClick={closeModal}
                variant={"bg-yellow border-yellow text-black "}
                children={"Cancel"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyModal;
