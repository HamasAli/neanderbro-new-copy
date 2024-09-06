import React from "react";
import { content } from "../../data";
import { Link } from "react-router-dom";
import StyledH3Heading from "../../common/components/styledH3Heading/StyledH3Heading";

const SocialCommunity = () => {
  const footer = content.footerSvg;
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[65%] pb-6">
      <div className="flex justify-center bg-white rounded-md bg-opacity-10">
        <div className="flex flex-col gap-2 py-10">
          <div>
            <StyledH3Heading
              fontColor={"text-white"}
              content={"Join Our Community"}
            />
          </div>
          <div className="flex justify-center gap-2 md:scale-150">
            {footer.map((item, index) => (
              <Link
                className="border border-transparent hover:border-blue rounded-2xl"
                key={index}
                to={item?.link}
                target="_blank"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCommunity;
