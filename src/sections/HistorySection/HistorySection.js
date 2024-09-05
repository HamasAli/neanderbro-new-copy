import HistoryBook from "./HistoryBook/HistoryBook";
import HistoryHero from "./HistoryHero/HistoryHero";

const HistorySection = () => {
  return (
    <div className=" flex flex-col w-[100%] justify-center gap-10">
      <HistoryHero />
      <HistoryBook />
    </div>
  );
};
export default HistorySection;
