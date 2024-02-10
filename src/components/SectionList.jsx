import Card from "./Card.jsx";

const SectionList = ({ title, data, handleBookmark }) => {
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white lg:text-[32px]"}>{title}</h1>
      <div className={"grid grid-cols-2 gap-x-4 lg:grid-cols-4 lg:gap-y-[32px]"}>
        {data &&
          data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
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
