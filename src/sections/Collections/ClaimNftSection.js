import StyledH3Heading from "../../common/components/styledH3Heading/StyledH3Heading";
import StyledH1Heading from "../../common/components/styledH1Heading/StyledH1Heading";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
const ClaimNftSection = () => {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center ">
      {/* parent for side spacing  */}
      <div className="flex flex-col w-[90%] lg:w-[80%] 2xl:w-[60%] justify-center items-center gap-8  mt-[3rem] md:mt-[5rem] 2xl:mt-[8rem] py-12">
        <div className="flex flex-row w-[100%] justify-between items-center gap-4 ">
          {/* left img  */}
          <div className="hidden lg:flex w-[100%]">
            <img
              src="/assets/10 claim nft/hero 2.png"
              className="h-[223px] mb-[20rem]"
            />
          </div>

          {/* text content  */}
          <div className="flex flex-col items-center">
            <StyledH1Heading fontColor={"text-yellow"} content={"Claim"} />
            <StyledH1Heading fontColor={"text-white"} content={"Your NFT’S"} />
            <div className="flex flex-col text-start gap-4 py-4 md:py-2 justify-center items-start">
              <StyledMdText
                fontColor={"text-white"}
                content={"Bro and Gal Holders,"}
              />
              <StyledMdText
                fontColor={"text-white"}
                content={`The NeanderBro and NeanderGal smart contracts were built with Thirdweb and as referenced in the Thirdweb blog below they have identified a vulnerability.  We have successfully locked the old smart contracts and have successfully migrated to the new smart contracts as directed by Thirdweb and have effectively removed any vulnerabilities from our new smart contracts.  A snapshot was made once the old contract was locked and everyone's holdings were documented.  All these steps have been completed exactly to Thirdweb's requirements and using their approved migration tools.  Everyone is safe and no issues were noted after talking with Thirdweb.  We fixed it in time which is great news.
                `}
              />

              <p className="font-normal text-white ">
                Below are Thirdwebs built claim pages for holders to claim their
                NFTs for only the cost of gas. Please be mindful and watch when
                gwei gas is its lowest. I would recommend waiting until it's
                below 10 or even below 20 to ensure gas is its lowest possible
                cost to you to claim. Use this site to monitor how much POL gwei
                is at:{" "}
                <Link
                  to="https://etherscan.io/gastracker"
                  className="text-yellow underline"
                  target="_blank"
                >
                  Etherscan Gastracker
                </Link>{" "}
                This claim page will remain up for some time to allow you all
                ample time to claim and get the lowest cost possible to claim
                back your Bros and Gals.
              </p>
              <StyledMdText
                fontColor={"text-white"}
                content={`We are doing the best we can with the cards we have been dealt here with this unfortunate event at Thirdweb. Onward and upward! I’m confident the future is VERY bright here at NeanderBros and would love to experience this journey with all you Bros and Gals for years to come.`}
              />
              <StyledMdText
                fontColor={"text-white"}
                content={`Ooga Booga 
                `}
              />
              <p className="font-normal text-white ">
                Pj Krypto <br />
                NeanderBros Owner
              </p>

              <p className="font-normal text-white ">
                For reference:
                <br />
                <Link
                  to="https://blog.thirdweb.com/security-vulnerability/ "
                  className="text-yellow  hover:underline"
                  target="_blank"
                >
                  Thirdweb’s Official Blog Post
                </Link>
              </p>
              <div className="flex flex-col md:flex-row justify-between gap-2 w-[100%] md:w-[57%] items-center  "></div>
            </div>
          </div>
          {/* right img  */}
          <div className="hidden lg:flex w-[100%] ">
            <img
              src="/assets/10 claim nft/hero 1.webp"
              className="h-[160px] w-[130px] mb-[22rem] 2xl:ml-[6rem] "
              style={{
                transform: "rotate(10deg)",
              }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-[80%] gap-20 md:w-[40%] lg:w-[100%]">
          <Link to="https://mitigate.thirdweb.com/1/0x3dB032ef2e0b62261665f757D98E1379e5806163/claim">
            <Button variant={"text-white bg-outline "}>
              Claim NeanderBros
            </Button>
          </Link>
          <Link to="https://mitigate.thirdweb.com/1/0x3301457C2e75b3ce7E12F2dfCdfa22FAb18CbF6B/claim">
            <Button variant={"text-white bg-outline "}>
              Claim NeanderGals
            </Button>
          </Link>
        </div>

        {/* showing for mobile and tab view  */}
        <div className="flex lg:hidden flex-col">
          <div className="flex w-[100%] ">
            <img
              src="/assets/10 claim nft/hero 1.webp"
              className="h-[160px] w-[130px] mb-14 ml-8 "
              style={{
                transform: "rotate(10deg)",
              }}
            />{" "}
          </div>
          <div className="flex w-[100%] ">
            <img src="/assets/10 claim nft/hero 2.png" className="h-[223px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClaimNftSection;
