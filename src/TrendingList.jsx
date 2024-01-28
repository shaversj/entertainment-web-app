import TrendingCard from "./TrendingCard.jsx";

const TrendingList = () => {
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white"}>Trending</h1>
      <TrendingCard />
    </div>
  );
};

export default TrendingList;
