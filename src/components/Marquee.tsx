import Link from "next/link";
import MarqueeText from "react-marquee-text";

interface HeadlineNews {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlineNews: HeadlineNews[] = data.data;

  console.log(headlineNews);

  return (
    <div className="text-white bg-pink-400">
      <div className="flex items-center">
        <div className="bg-pink-700 py-1.5 px-4">সর্বশেষ</div>
        <MarqueeText direction="right" duration={10}>
          {headlineNews.map((h) => (
            <Link href="/" key={h.id}>
              <span className="mx-4">•</span>
              {h.title}
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
