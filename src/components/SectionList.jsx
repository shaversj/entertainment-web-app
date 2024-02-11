import Card from "./Card.jsx";

const SectionList = ({ title, data, handleBookmark }) => {
  return (
    <div className={"space-y-[16px] lg:space-y-[32px]"}>
      <h1 className={"md:text-[32px] text-[20px] font-extralight text-white"}>{title}</h1>
      <div className={"md:grid-cols-3 md:gap-x-[29px] md:gap-y-[24px] grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4 lg:gap-x-[10px] lg:gap-y-[32px]"}>
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
