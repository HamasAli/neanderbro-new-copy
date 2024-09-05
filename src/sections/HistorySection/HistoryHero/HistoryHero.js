import StyledMdText from "../../../common/components/styledMdText/StyledMdText";
import { content } from "../../../data";
const HistoryHero = () => {
  const historyDrops = content.historyDrops;

  return (
    <div className=" flex flex-col w-[100%] items-center justify-center mt-32 md:mb-5 xl:relative">
      <div className="flex flex-col w-[80%] items-center justify-center gap-8">
        {/* hero heading section  */}
        <div className="flex flex-col w-[100%] md:w-[70%] xl:w-[63%] justify-center py-8 lg:mt-14 text-center">
          <p
            className={`text-white text-2xl md:text-3xl font-bold leading-tight font-montserrat mb-4`}
          >
            The Journey Of
            <span className="text-yellow font-montserrat"> Struggle </span>
            To
            <span className="text-yellow font-montserrat"> Success </span>
          </p>
          <StyledMdText
            fontColor={"text-white"}
            content={
              "Read Our Historical Journey With Great Dedication And Struggle. From The Beginning To Present, And We Are Not Done Yet."
            }
          />
        </div>
      </div>
      {/* hero drops sections  */}
      <div className="flex flex-col justify-center items-center w-[100%]">
        <div className="flex flex-row justify-center items-end gap-1 md:gap-3 w-[90%] md:w-[100%] md:mt-[-6rem] lg:mt-[-8rem] xl:mt-[-10rem] 2xl:mt-[-10rem]">
          <img
            src={"/assets/6 history/nft card.png"}
            alt="NFT Cards"
            className="md:block hidden" // Show on md and above
          />
          <img
            src={"/assets/6 history/mobile hero.png"}
            alt="NFT Cards"
            className="md:hidden block" // Show below md
          />
        </div>
      </div>
    </div>
  );
};
export default HistoryHero;
