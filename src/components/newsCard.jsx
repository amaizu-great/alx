import { Book1 } from "iconsax-react";
import formatDate from "../functions/formatDate";

export const LoadingState = () => {
  return (
    <div className="flex flex-col gap-4 border border-gray-100 rounded p-3 py-5 w-full text-[12px] transition-all duration-300 md:p-5 md:py-10">
      <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
        <div className="min-h-14 min-w-14 min-size-14 rounded-full skeleton "></div>

        <div className="flex flex-col justify-around gap-2">
          <h2 className="w-full h-3 skeleton min-w-50 rounded sm:min-w-70"></h2>
          <p className="w-full h-3 skeleton max-w-30 rounded sm:min-w-50"></p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="w-full h-3 skeleton min-w-50 rounded sm:min-w-70"></h2>
        <p className="w-full h-3 skeleton max-w-20 rounded"></p>
      </div>

      <div className="w-full min-h-40 h-full rounded skeleton"></div>
    </div>
  );
};

//prettier-ignore
const NewsCard = ({ id, path , title, author, urlToImage, description, publishedAt }) => { 

  const newDate = formatDate(publishedAt)

  const bgStyle = {
    backgroundImage: `url(${urlToImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }

  return (
    <a href={`/news/${path}/${id}`} className="flex flex-col gap-4 w-full border border-gray-100 rounded p-3 py-5 text-[12px] transition-all duration-300 md:p-5 md:py-10">
      <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
        <div className="profile min-h-14 min-w-14 rounded-full"></div>

        <div className="flex flex-col justify-around">
          <h2 className="text-[14px] font-normal author md:text-[16px]">{author}</h2>
          <p>Published: {newDate}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-[18px] ">{title}</h2>

        <div className="flex gap-2 items-center">
          <Book1 size="20" color="#6a7282 "/>
          <p>10 mins read</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 h-full">
        <p className="description">{description}</p>
        <div style={bgStyle} className="w-full min-h-80 h-full rounded"></div>
      </div>
    </a>
  );
};

export default NewsCard;
