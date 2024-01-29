import Card from "./Card.jsx";

const SectionList = ({ title, data, handleBookmark }) => {
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white"}>{title}</h1>
      <Card
        title={data[5].title}
        thumbnail={data[5].thumbnail}
        year={data[5].year}
        category={data[5].category}
        rating={data[5].rating}
        isBookmarked={data[5].isBookmarked}
        isTrending={data[5].isTrending}
        handleBookmark={handleBookmark}
      />
    </div>
  );
};

export default SectionList;
