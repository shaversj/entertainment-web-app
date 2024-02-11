import Card from "./Card.jsx";
import useDrag from "./useDrag.jsx";
import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const TrendingList = ({ data, handleBookmark }) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = useState("");
  const handleItemClick = (itemId) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  return (
    <div className={"-mr-4 space-y-[16px] lg:-mr-0 lg:space-y-[25px]"}>
      <h1 className={"text-[20px] font-extralight text-white lg:text-[32px]"}>Trending</h1>
      <div onMouseLeave={dragStop} className={""}>
        <ScrollMenu LeftArrow={"A"} RightArrow={"B"} onWheel={onWheel} onMouseDown={() => dragStart} onMouseUp={() => dragStop} onMouseMove={handleDrag}>
          {data.map((item) => (
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
              isTendingSection={true}
              handleBookmark={handleBookmark}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default TrendingList;
