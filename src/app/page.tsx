import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  return (
    <main>
      <Marquee />

      <div className="grid grid-cols-3 mt-6">
        {/* main news */}
        <div className="col-span-3 lg:col-span-2">
          <MainNews news={mainNews} />
        </div>

        {/* most news */}
        <div className="col-span-3 lg:col-span-1"></div>
      </div>
    </main>
  );
};

export default HomePage;
