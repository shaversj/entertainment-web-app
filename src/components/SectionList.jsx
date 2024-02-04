import Card from "./Card.jsx";
import { useState } from "react";

const SectionList = ({ title, data, handleBookmark, titleFilter = "" }) => {
  const filteredData = data.filter((item) => (titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase())) || (titleFilter === "" && !item.isTrending));
  let searchResultHeading = "Found " + filteredData.length + " results for '" + titleFilter + "'";
  return (
    <div className={"space-y-[16px]"}>
      <h1 className={"text-[20px] font-extralight text-white"}>{titleFilter ? searchResultHeading : title}</h1>
      <div className={"grid grid-cols-2 gap-x-4"}>
        {filteredData &&
          filteredData.map((item) => (
            <Card
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
