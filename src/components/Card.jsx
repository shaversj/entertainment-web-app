const Card = ({ id, title, thumbnail, year, category, rating, isBookmarked, isTrending, isTendingSection, handleBookmark, handleDragClick }) => {
  const iconBookmarkEmpty = (
    <svg id={"emptyBookmark "} className={"h-[14px] w-[11.67px]"} viewBox={"0 0 12 14"} xmlns="http://www.w3.org/2000/svg">
      <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none" />
    </svg>
  );

  const iconBookMarkFull = (
    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
        fill="#FFF"
      />
    </svg>
  );

  const iconMovie = (
    <svg id={"trendingMovieIcon"} className={"ml-[8px] inline"} width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
        fill="#FFF"
        opacity=".75"
      />
    </svg>
  );

  const oval = (
    <svg className={"ml-[8px]"} width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
    </svg>
  );

  return (
    <>
      {isTendingSection ? (
        <div id={"trending_card"} className={"md:h-[230px] md:w-[470px] h-[140px] w-[240px]"}>
          <picture>
            <source srcSet={thumbnail.trending.large} media="(min-width: 768px)" />
            <img className={"rounded-lg"} src={thumbnail.trending.small} alt={"Movie thumbnail"} />
          </picture>
          <button
            aria-label={"Button to bookmark trending show"}
            onClick={() => handleBookmark(id)}
            id={"trending_card_bookmark"}
            className={"md:mt-[16px] md:mr-[24px] mr-[8px] mt-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#566074]"}
          >
            {isBookmarked ? iconBookMarkFull : iconBookmarkEmpty}
          </button>

          <div id={"card_trending_text"} className={"md:pb-6 pb-4 pl-4"}>
            <ul className={"md:text-[15px] flex list-image-none space-x-[2px] text-[12px] font-extralight text-project-text-color"}>
              <li>{year}</li>
              <li className={"flex items-center"}>
                {oval}
                {iconMovie}
                <span className={"pl-[6px]"}>{category}</span>
              </li>
              <li className={"flex items-center"}>
                {oval}
                <span className={"pl-[8px]"}>{rating}</span>
              </li>
            </ul>
            <div className={"pt-[4px]"}>
              <h2 className={"md:text-[24px] text-[15px] font-light leading-none text-white"}>{title}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className={"md:w-[220px] md:h-[192px] h-[154px] w-[164px] lg:h-[226px] lg:w-[280px]"}>
          <div id={"card"}>
            <picture>
              <source srcSet={thumbnail.regular.large} media="(min-width: 1440px)" />
              <source srcSet={thumbnail.regular.medium} media="(min-width: 768px)" />
              <img className={"rounded-lg"} src={thumbnail.regular.small} alt={"Movie thumbnail"} />
            </picture>
            <button
              aria-label={"Button to bookmark show"}
              onClick={() => handleBookmark(id)}
              id={"card_bookmark"}
              className={"md:mr-[16px] md:mt-[16px] mr-[8px] mt-[8px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#566074]"}
            >
              {isBookmarked ? iconBookMarkFull : iconBookmarkEmpty}
            </button>
          </div>

          <div className={"pt-[8px]"}>
            <ul className={"md:text-[13px] flex list-image-none space-x-[2px] text-[12px] font-extralight text-project-text-color"}>
              <li>{year}</li>
              <li className={"flex items-center"}>
                {oval}
                {iconMovie}
                <span className={"pl-[6px] "}>{category}</span>
              </li>
              <li className={"flex items-center"}>
                {oval}
                <span className={"pl-[8px]"}>{rating}</span>
              </li>
            </ul>
            <div className={"pt-[4px]"}>
              <h2 className={"md:text-[18px] text-[15px] font-light leading-none text-white"}>{title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
