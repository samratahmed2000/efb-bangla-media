import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-2">
      {filteredNavs.map((n, i) => (
        <Link className="hover:text-pink-600" href={n.slug} key={i}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
