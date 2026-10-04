interface MainNews {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
  firstPublished: string;
}

import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }: { news: MainNews[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* first news */}
      <div className="card bg-base-100 w-96 shadow-sm border border-pink-100 hover:border-pink-500">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt="Shoes"
            width={600}
            height={600}
          />
        </figure>
        <div className="card-body">
          <p className="text-pink-500 font-bold text-xs">
            {firstNews.category}
          </p>
          <h2 className="card-title font-bold">{firstNews.title}</h2>
          <p className="text-gray-600">{firstNews.description}</p>
          <span className="text-gray-400 text-[10px] font-normal">
            {firstNews.firstPublished}
          </span>
        </div>
      </div>

      {/* other news */}
      <div>
        {otherNews.slice(0, 4).map((on) => (
          <div key={on.id} className="card text-sm py-4 border border-pink-200">
            <div className="text-pink-500 font-bold text-xs">
              {firstNews.category}
            </div>
            <Link href="/">{on.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
