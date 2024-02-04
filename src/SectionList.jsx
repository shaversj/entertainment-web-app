import Card from "./Card.jsx";

const SectionList = ({ title, data, handleBookmark }) => {
  const filteredList = data.filter((item) => !item.isTrending);
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white"}>{title}</h1>
      <div className={"grid grid-cols-2 gap-x-4"}>
        {filteredList &&
          filteredList.map((item) => (
            <Card
              title={item.title}
              thumbnail={item.thumbnail}
              year={item.year}
              category={item.category}
              rating={item.rating}
              isBookmarked={item.isBookmarked}
              isTrending={item.isTrending}
              handleBookmark={handleBookmark}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionList;
