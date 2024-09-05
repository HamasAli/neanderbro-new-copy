import React from "react";
import { content } from "../../data";
import StyledH4Heading from "../../common/components/styledH4Heading/StyledH4Heading";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import CustomH2Heading from "../../common/components/customH2Heading/CustomH2Heading";

export default function PrivacyPolicySection() {
  const privacyContent = content.privacyPolicy;
  return (
    <div className="py-36 flex flex-col gap-4 items-center">
      <div className="text-center mb-8 2xl:mt-12">
        <CustomH2Heading
          fontColor={"outlined-green-text"}
          content={"Privacy Policy"}
          customColor={"outlined-green-text"}
          privacyText={["Privacy Policy"]}
        />
      </div>

      <div className="flex flex-col gap-10 w-[90%] sm:w-[80%] lg:w-2/4">
        {privacyContent.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 leading-7">
            <StyledH4Heading fontColor={"text-white"} content={item.head} />
            {!item?.para[index]?.length > 0 ? (
              <ul className="ml-5">
                {item?.para?.map((item, index) => (
                  <li key={index} className="list-disc text-white">
                    <StyledMdText
                      fontColor={"text-white"}
                      content={item.list}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <StyledMdText fontColor={"text-white"} content={item.para} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
