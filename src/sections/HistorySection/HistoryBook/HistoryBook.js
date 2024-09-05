import { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { content } from "../../../data";
import BookCover from "../BookCover/BookCover";
import StyledSmText from "../../../common/components/styledSmText/StyledSmText";
import StyledH5Heading from "../../../common/components/styledH5Heading/StyledH5Heading";
import StyledXsText from "../../../common/components/styledXsText/StyledXsText";
import StyledH4Heading from "../../../common/components/styledH4Heading/StyledH4Heading";
import Button from "../../../components/button/Button";
import useScreenWidth from "../../../Hooks/useScreenWidth";

// Define an array of objects representing your list data
const listData = [
  { id: 1, text: "RockBro: Grolmbr" },
  { id: 2, text: "BirdBro: Wyverion" },
  { id: 3, text: "MerBro: Aegos" },
  {
    id: 4,
    text: "ZombieGal (secret identity is invader from another continent): Heran",
  },
  { id: 5, text: "ShamanGal Chief: Gamar" },
];

const imageSources = [
  "/assets/6 history/shaman bros.webp",
  "/assets/6 history/zombie bros.webp",
  "/assets/6 history/mer bros.webp",
  "/assets/6 history/bird bros.webp",
  "/assets/6 history/rock bros.webp",
];

const HistoryBook = () => {
  const [pageNum, setPageNum] = useState(null);
  const page1 = content.page1;
  const page2 = content.page2;
  const page3 = content.page3;
  const page5 = content.page5;
  const page11 = content.page11;
  const page13 = content.page13;
  const book = useRef();

  const screenWidth = useScreenWidth();
  const isMobileView = screenWidth <= 768;
  const handlePreviousPage = () => {
    if (book.current) {
      book.current.pageFlip().flipPrev();
      setPageNum(book.current.pageFlip().getCurrentPageIndex() - 2);
    }
  };
  const handleNextPage = () => {
    if (book.current) {
      book.current.pageFlip().flipNext();
      setPageNum(book.current.pageFlip().getCurrentPageIndex() + 2);
    }
  };
  const onFlip = useCallback((e) => {
    setPageNum(book?.current?.pageFlip().getCurrentPageIndex());
    if (isMobileView) {
      setPageNum(book?.current?.pageFlip().getCurrentPageIndex() + 1);
    }
  }, []);


  return (
    <div className=" flex w-[100%] justify-center">
      <div className="flex flex-col w-[100%] items-center justify-center pb-20 overflow-hidden">
        <HTMLFlipBook
          width={isMobileView ? screenWidth * 0.9 : 580}
          height={650}
          // size={"stretch"}
          ref={book}
          maxShadowOpacity={1}
          usePortrait={true}
          autoSize={true}
          mobileScrollSupport={true}
          useMouseEvents={!isMobileView}
          drawShadow={true}
          onFlip={onFlip}
        >
          {/* welcome page front */}
          <div className="demoPage bg-[#144272] md:rounded-tl-2xl md:rounded-bl-2xl rounded-2xl overflow-hidden ">
            <div className="bg-[#144272] md:rounded-tl-2xl md:rounded-bl-2xl rounded-2xl">
              <img
                alt="book cover"
                src="/assets/6 history/book-cover.png"
                className="h-[690px] w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-2xl items-center justify-center w-[100%] md:rounded-tr-2xl md:rounded-br-2xl overflow-hidden">
            <BookCover />
          </div>
          {/* Book page 1 */}
          <div className="demoPage flex flex-col bg-white rounded-2xl items-center justify-center w-[100%] p-6  md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar ">
            <div className="flex flex-col w-[100%] justify-center items-center">
              <img alt="book page 1" src="/assets/6 history/page 1.webp" />
            </div>
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"Ancient History"}
              py="py-1"
            />
            {page1.map((content, index) => (
              <StyledSmText
                key={index}
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={content}
                py="py-1"
              />
            ))}
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"01"}
              />
            </div>
          </div>
          {/* page 2  */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6 rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar ">
            {page2.map((content, index) => (
              <StyledSmText
                key={index}
                fontColor={"text-black"}
                content={content}
                lineHeigh="leading-6"
                py="py-1"
              />
            ))}
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"02"}
              />
            </div>
          </div>
          {/* page 3  */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6 md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar">
            <StyledSmText
              fontColor={"text-black"}
              content={
                "was the merest of peninsulas attached to Az’kalon, Paleos. Clearly, there was a miscalculation, yet they remained undaunted and set about to explore the territory of which so much legend was concerned. The unassuming plainness of the land deceived them of its true importance. These NeanderBros were completely unaware that their arrival would prove to be the watershed moment of the whole history of their people. "
              }
              lineHeigh="leading-6"
            />
            <div className="flex flex-col w-[100%] justify-center items-center">
              <img
                alt="book page 1"
                src="/assets/6 history/page 3.webp"
                className="py-4"
              />
            </div>
            {page3.map((content, index) => (
              <StyledSmText
                key={index}
                fontColor={"text-black"}
                content={content}
                lineHeigh="leading-6"
                py="py-1"
              />
            ))}
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"03"}
              />
            </div>
          </div>
          {/* page 4  */}
          <div className="flex flex-col bg-white rounded-2xl items-center justify-center w-[100%] p-6 rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar">
            <StyledSmText
              fontColor={"text-black"}
              content={
                "control over their own development instead of having to leave it to chance. As they traveled to different lands, ones not under the power of their Ancient One, they discovered their magic was ineffective, but they were not content to remain under his protection, so technology was developed by the NeanderGals as a substitute for magic to enable colonization of overseas territories"
              }
              lineHeigh="leading-6"
            />
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"Current Times"}
              py="py-2"
            />
            <div className="flex flex-col w-[100%] justify-center items-center py-2">
              <img alt="book page 1" src="/assets/6 history/page 4.webp" />
            </div>
            <StyledSmText
              fontColor={"text-black"}
              content={
                "When the Outcast NeanderBros landed on the southernmost peninsula of Az’Kalon, Paleos, they spread out to bring the land under their power, but no challengers were met. There seemed to be no descendants of the NeanderBros who remained on the mainland. There were a variety of different dinos throughout the land. A few were best avoided entirely for their size and viciousness, while some were"
              }
              lineHeigh="leading-6"
            />
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"04"}
              />
            </div>
          </div>
          {/* page 5 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6 md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar ">
            {page5.map((content, index) => (
              <StyledSmText
                key={index}
                fontColor={"text-black"}
                content={content}
                lineHeigh="leading-6"
              />
            ))}
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"ShamanBros: "}
              py="py-1"
            />
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`Mainland NeanderBros whose technology is linked to the magic of the Ancient One and in harmony with the flora and fauna of the mainland. The ShamanBros have forgotten that magic is the root of their technology due to the depth of the harmony they established between themselves and Az’Kalon. They don’t think in terms of supernatural versus natural. In their conception, it’s all one, but they`}
            />
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"05"}
              />
            </div>
          </div>
          {/* page 6  */}
          <div className=" flex flex-col bg-white   rounded-2xl items-center justify-center w-[100%] p-6 rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar ">
            <div className="flex flex-col md:flex-row w-[100] justify-between ">
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={`remember this magic-technology fusion as only technology because the ZombieBros ransacked and then burned down the libraries of Az’Kalon during the Civil War. The ShamanBros’ objective is to piece back together Az’Kalon as repentance for their part in the Civil War. Officially, imperial expansion has been abandoned.  
                ShamanBros are bonded with mammals and birds. They do not experiment on them.
                `}
              />
              <img
                className="px-2 py-2"
                alt="book page 1"
                src="/assets/6 history/shaman bros.webp"
              />
            </div>
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"ZombieBros: "}
              py="py-2"
            />
            <div className="flex flex-col md:flex-row w-[100%] justify-between">
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={`Mainland NeanderBros whose technology is linked to the manipulation of death. They use magic to further the development of technology that will empower them to transcend death. The price of this dark technology is the very lives of the Ancient One and Az’Kalon. The ZombieBros do draw a distinction between magic and technology. This distinction is necessitated by their goal, which requires the exploitation of magic by`}
              />
              <img
                alt="book page 1"
                src="/assets/6 history/zombie bros.webp"
                className="px-2 py-2"
              />
            </div>
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`and for technology, but, also, they stole the majority, and destroyed what they couldn’t, of texts the NeanderBros wrote concerning magic. The ZombieBros could very easily destroy even the World-God if their evolution isn’t disrupted.  
                ZombieBros experiment on reptiles, insects, and arachnids because of their`}
            />
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"06"}
              />
            </div>
          </div>
          {/* page 7 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-5  md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar">
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={` greater physical resilience, but birds and mammals have a higher resistance to the dark power of the ZombieBros.`}
            />
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"MerBros: "}
              // py="py-1"
            />
            <div className="flex  flex-col md:flex-row w-[100%] justify-between">
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={`Descended from the Outcast NeanderBros. They settled the northern portion of Paleos where most of the lakes and rivers are. In their evolution, they have taken on some physical traits of mermaids. They are most in tune with freshwater and spend half of their lives in it. Saltwater to them is like a second language, and brackish water is equivalent to slang. As a people, they are the easiest to get along with, but, when finally enraged, they are the most`}
              />
              <img
                alt="book page 1"
                src="/assets/6 history/mer bros.webp"
                className="px-2"
              />
            </div>
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`fearsome. They are vulnerable and weak if they spend lots of time out of water and are sensitive to dry, hot environments.`}
            />
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"BirdBros:  "}
              // py="py-1"
            />
            <div className="flex flex-col md:flex-row w-[100%] justify-between">
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={`Descended from the Outcast NeanderBros. They settled the western portion of Paleos where the greatest forests are. In their evolution, they have taken on some physical traits of birds of prey. They can glide for substantial distances but require high places from which to jump. They are sensitive to changes in weather, even the barest of signs. As a people, they’re a bit arrogant to outsiders at first, but`}
              />
              <img
                alt="book page 1"
                src="/assets/6 history/bird bros.webp"
                className="px-2 py-1"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"07"}
              />
            </div>
          </div>
          {/* page 8  */}
          <div className=" flex flex-col bg-white   rounded-2xl items-center justify-center w-[100%] p-6 rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar ">
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`their pride makes them susceptible to flattery, so they become fast friends to anyone who speaks highly of them.`}
            />

            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"RockBros: "}
              py="py-2"
            />
            <div className="flex  flex-col md:flex-row w-[100%] justify-between">
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={`Descended from the Outcast NeanderBros. They settled the central portion of Paleos where the highest mountain ranges are. They have evolved to survive in the hardiest of environments, so they tend to be gruff towards others, and their loyalty is hard-won due to their high sense of honor, but, when earned, they are the most steadfast. They can feel tremors in the earth so well they can identify what animal or vehicle it might be.`}
              />
              <img
                alt="book page 1"
                src="/assets/6 history/rock bros.webp"
                className="px-2 py-2"
              />
            </div>
            <hr className="mt-4 text-[#E9E9EB]" />
            <div className="flex flex-col justify-center  items-center py-2">
              <StyledH4Heading
                fontColor={"text-[#144272]"}
                content={"The First Arc "}
              />
            </div>
            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"The Portal Device "}
            />
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`The origin of the portal device, the history of which is mostly lost to all NeanderBros, is actually from off the NeanderBro continent. The ancient NeanderGal elite had minimal contact with other peoples. These outsiders showed up and taught them portal technology, but these outsiders secretly desired to conquer the NeanderBro people. These outsiders give other peoples portal devices as a way of transporting forces into their most sensitive and `}
            />
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"08"}
              />
            </div>
          </div>
          {/* page 9 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6  md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar">
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`valuable territories. Fortunately, the NeanderGals were able to take advantage of the outsiders. They saw through their veneer of diplomacy and dismantled their technology, preventing the conquest and allowing them to learn about the operation of portal devices. The NeanderBros never used this technology because of its unpredictability and saw its use as leading inevitably to making them just as vicious as the outsiders who unwittingly gave it to them. The portal device they acquired was split into six pieces and sent far away from the capital to the southernment most peninsula: Paleos. Once there, they were sent to different regions of the peninsula. That way the device could be quickly assembled if the need should arise.`}
            />

            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"What the Arc Achieves "}
            />
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`Expands the world of NeanderBros through the introduction of portal technology. The portal device was split six ways: each tribe has a piece and the ZombieBros have one piece.  The ZombieBros used their ancient texts to mostly decipher the piece they have, so they only know they need five more for activation. In their experiments on it and attempts at deciphering its hieroglyphs, they caused it to issue a signal. The piece took on a dull purple luminescence at all times. The ZombieBros, in their research, discovered that the other pieces most likely give off the same light and energy, so they augmented and trained their beasts to follow the “scent” of the portal pieces. Hence, why the tribes are experiencing more invasions than before and why the ZombieGal will be useful to them–she’s got experience dealing with the ZombieBros’ beasts. The more pieces the heroes bring together the more the number and ferocity of the monsters increases.`}
            />
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"09"}
              />
            </div>
          </div>
          {/* page 10  */}
          <div className=" flex flex-col bg-white   rounded-2xl items-center justify-center w-[100%] p-6 rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar ">
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`their pride makes them susceptible to flattery, so they become fast friends to anyone who speaks highly of them.`}
            />

            <div className="flex flex-col">
              <StyledH5Heading
                fontColor={"text-[#144272]"}
                content={"Cast of Characters: "}
              />
              <ul className="list-disc px-6">
                {listData.map((item) => (
                  <li key={item.id} className="">
                    <StyledSmText fontColor="text-black" content={item.text} />
                  </li>
                ))}
              </ul>
              {/* all characters  */}
              <div className="hidden md:flex flex-row gap-1 py-4 ">
                {imageSources.map((src, index) => (
                  <img
                    key={index}
                    alt={`book page ${index + 1}`}
                    src={src}
                    style={{ width: "91px", height: "91px" }}
                  />
                ))}
              </div>

              <StyledH5Heading
                fontColor={"text-[#144272]"}
                content={"The Background: "}
              />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={`Ever since the Outcast NeanderBros settled the southernmost peninsula of Az’Kalon, Paleos, the north-east has been avoided. The original party of Outcast Neanderbros who traveled to that territory never returned. As the different tribes evolved, each attempted another expedition, and all of them failed to return; however, there were beasts which had always dominated the Tyron-Gar ( which means “Land of Terrors”), and they have begun to invade the rest of Paleos in vast numbers. Never before have such hordes invaded the Tyr-Elan ( which means “Land of Brothers”). The tribes of Paleos have encountered isolated beasts that wandered in from Tyron-Gar, but, now, the familiar invaders have taken on new, monstrous qualities.`}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"10"}
              />
            </div>
          </div>
          {/* page 11 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6 md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar">
            {page11.map((content, index) => (
              <StyledSmText
                key={index}
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={content}
              />
            ))}
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"11"}
              />
            </div>
          </div>
          {/* page 12 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6  rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar">
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`knew, and all they could translate was the ****number “6”****. Judging how the piece they had was incomplete, they assumed there were five more like it, but the Elder PaleoGals did not know what might occur should all the pieces be reunited. They commanded messenger-birds be sent to the other peoples of Paleos detailing the discoveries made and that the PaleoBro tribe would be sendinging two representatives to collect a warrior from every tribe of Paleos to hunt down all six pieces and perhaps at last solve the mystery of evil surrounding the northeast.  Zindar and Tibaran set out to the territory of their closest neighbor and best ally, the Central Mountains of the RockBros.`}
            />

            <StyledH5Heading
              fontColor={"text-[#144272]"}
              content={"The Plot: "}
            />
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`Ever since the Outcast NeanderBros settled the southernmost peninsula of Az’Kalon, Paleos, the north-east has been avoided. The original party of Outcast Neanderbros who traveled to that territory never returned. As the different tribes evolved, each attempted another expedition, and all of them failed to return; however, there were beasts which had always dominated the Tyron-Gar ( which means “Land of Terrors”), and they have begun to invade the rest of Paleos in vast numbers. Never before have such hordes invaded the Tyr-Elan ( which means “Land of Brothers”). The tribes of Paleos have encountered isolated beasts that wandered in from Tyron-Gar, but, now, the familiar invaders have taken on new, monstrous qualities. `}
            />
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`An accidental discovery made by two members of the PaleoBro people would alter the destiny of all Az’Kalon. Zindar and Tibaran earned fame in their tribe by discovering a piece of the portal-device. They were trying to determine the nature of the beasts invading from the north and were tracking a pack of smaller`}
            />
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"12"}
              />
            </div>
          </div>
          {/* page 13 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6 md:rounded-tl-lg md:rounded-bl-lg overflow-auto lg:no-scrollbar">
            {page13.map((content, index) => (
              <StyledSmText
                key={index}
                fontColor={"text-black"}
                content={content}
                lineHeigh="leading-6"
              />
            ))}
            <div className="flex flex-col justify-center items-center">
              <hr className="mt-4 text-[#E9E9EB] w-[80%] " />
              <StyledSmText
                fontColor={"text-black"}
                lineHeigh="leading-6"
                content={"13"}
              />
            </div>
          </div>
          {/* page 14 */}
          <div className=" flex flex-col bg-white   rounded-2xl  items-center justify-center w-[100%] p-6 rounded-tr-lg rounded-br-lg overflow-auto lg:no-scrollbar">
            <StyledSmText
              fontColor={"text-black"}
              lineHeigh="leading-6"
              content={`Paleos detailing the discoveries made and that the PaleoBro tribe would be sendinging two representatives to collect a warrior from every tribe of Paleos to hunt down all six pieces and perhaps at last solve the mystery of evil surrounding the northeast.  Zindar and Tibaran set out to the territory of their closest neighbor and best ally, the Central Mountains of the RockBros.`}
            />
            <img
              alt="book page 1"
              src="/assets/6 history/end.webp"
              className="py-8"
            />
            <div className="flex flex-row gap-6 justify-center items-center w-[100%]">
              <hr className="mt-4 text-[#E9E9EB] w-[20%] md:w-[30%]" />
              <StyledH5Heading
                fontColor={"text-[#144272]"}
                content={"The End "}
              />
              <hr className="mt-4 text-[#E9E9EB] w-[20%]  md:w-[30%]" />
            </div>
          </div>
        </HTMLFlipBook>

        <div className="flex  flex-col md:flex-row w-[50%] md:w-[40%] lg:w-[25%] items-center justify-center py-6 gap-4">
          <Button
            variant={"text-yellow bg-outline "}
            onClick={handlePreviousPage}
            disabled={pageNum === null || pageNum <= 1}
          >
            Previous page
          </Button>
          <Button
            variant={"text-dark bg-yellow "}
            onClick={handleNextPage}
            disabled={pageNum === 16 && !null}
          >
            Next page
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HistoryBook;
