import Card from "./Card.jsx";

const TrendingList = ({ data, handleBookmark }) => {
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white"}>Trending</h1>
      <Card
        title={data[0].title}
        thumbnail={data[0].thumbnail}
        year={data[0].year}
        category={data[0].category}
        rating={data[0].rating}
        isBookmarked={data[0].isBookmarked}
        isTrending={data[0].isTrending}
        handleBookmark={handleBookmark}
      />
    </div>
  );
};

export default TrendingList;
