import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-center p-4">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <Image src="/logo.png" alt="logo-image" width={50} height={50} />
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="text-pink-600 text-2xl font-bold">
              EFB Bangla Media
            </Link>
            <span className="text-xs text-neutral-500">{date}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 text-sm">
          <button className="btn btn-soft btn-secondary text-black hover:text-white">
            সাইন ইন
          </button>

          <button className="btn btn-secondary hover:bg-pink-200/25 hover:text-black hover:border-none">
            সাইন আপ
          </button>
        </div>
      </div>

      <NavLinks />
    </header>
  );
};

export default Navbar;
