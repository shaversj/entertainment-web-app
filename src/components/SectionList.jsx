import Card from "./Card.jsx";

const SectionList = ({ title, data, handleBookmark, titleFilter = "" }) => {
  let searchResultHeading = "Found " + data.length + " results for '" + titleFilter + "'";
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white"}>{titleFilter ? searchResultHeading : title}</h1>
      <div className={"grid grid-cols-2 gap-x-4"}>
        {data &&
          data.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              thumbnail={item.thumbnail}
              year={item.year}
              category={item.category}
              rating={item.rating}
              isBookmarked={item.isBookmarked}
              isTrending={item.isTrending}
              isTendingSection={false}
              handleBookmark={handleBookmark}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionList;
