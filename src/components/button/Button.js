import React from "react";
import { Tooltip } from 'react-tooltip'
const Button = ({ to, children, variant, onClick, disabled, tooltip }) => {
  return (
    <>
      <button
        to={to}
        disabled={disabled}
        data-tooltip-id="my-tooltip" data-tooltip-content={tooltip}

        className={`w-[100%] hover:scale-[0.99] shadow-xl hover:duration-200 ${variant} text-sm md:text-md p-[12px] rounded-md font-medium md:font-bold border ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
      {tooltip && <Tooltip id="my-tooltip" />}
    </>

  );
};

export default Button;
