import React from "react";
import { content } from "../../../data";
import Tribes from "../../../components/tribe/Tribe";

const TribeSection = () => {
  const tribe = content.tribe;

  return (
    <div className="flex justify-center">
      <div className="flex lg:flex-row items-center md:justify-between  flex-col md:py-6 py-[28%] 2xl:py-16  gap-10 md:gap-4 w-[100%] md:w-[80%] ">
        {tribe.map((item, index) => (
          <div key={index} className='w-[80%] flex-wrap'
            style={{
              backgroundImage: index === 1 ? "url('/assets/2 Collection/blue.png')" : "url('/assets/2 Collection/yellow.png')",
              backgroundPosition: index === 1 ? 'top right ' : 'bottom left',
              backgroundRepeat: 'no-repeat'
            }}>
            <Tribes
              gif={item.url}
              border={"border-blue"}
              headColor={"text-blue"}
              heading={item.head}
              text={item.para}
              imageSize={
                index === 1
                  ? "lg:w-[75%] w-[350px]  -left-16 -top-40 xl:-top-48 2xl:-top-68 "
                  : "lg:w-[35%] w-[150px] left-4 -top-12 2xl:-top-28"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TribeSection;
