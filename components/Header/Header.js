import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMedia from "../Shared/SocialMedia";

const Header = () => {
  const links = [
    {
      id: 2,
      title: "Home",
      path: "/",
    },
    {
      id: 3,
      title: "Easy Monthly Installments",
      path: "/",
    },
    {
      id: 4,
      title: "Shop by Brands",
      path: "/",
    },
    {
      id: 5,
      title: "Become a Vendor",
      path: "/",
    },
  ];
  return (
    <header className="">
      <div className="bg-primaryLight py-1">
        <div className="container flex items-center justify-between">
          <div className="flex items-center justify-between gap-5">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="WinStore"
                width="135"
                height="48"
              />
            </Link>

            <form className="flex items-center">
              <select className="p-2 h-10 bg-white text-grayDark text-xs capitalize rounded-l-md border-r-2 focus:outline-none">
                <option selected>All Categories</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men clothing</option>
                <option value="women's clothing">women clothing</option>
              </select>

              <div className="flex items-center ">
                <input
                  type="search"
                  placeholder="Search for products"
                  className="p-2 h-10 text-sm focus:outline-none placeholder:text-xs placeholder:text-grayLight w-72"
                />
                <button className="h-10 p-2 rounded-r-md bg-grayDark">
                  <Image
                    src="/icons/search.svg"
                    alt="Search"
                    height="24"
                    width="24"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-between gap-8">
            <div className="text-xs text-white">
              <p>Call Us Now</p>
              <a href="tel:+011 5827918" className="flex items-center gap-1">
                <Image
                  src="/icons/headphone.svg"
                  alt="Headphone"
                  height="17"
                  width="19"
                />

                <span>+011 5827918</span>
              </a>

              <Link href="/" className="text-sm">
                Sign In
              </Link>
            </div>

            <ul className="flex items-center gap-5">
              <li>
                <Link href="/">
                  <Image
                    src="/icons/user.svg"
                    alt="Headphone"
                    height="24"
                    width="24"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/icons/wishlist.svg"
                    alt="wishlist"
                    height="24"
                    width="24"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/icons/cart.svg"
                    alt="cart"
                    height="59"
                    width="44"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primaryDark py-2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-white flex items-center gap-2 text-base">
              <Image
                src="/icons/hamburger.svg"
                alt="hamburger"
                height="12"
                width="13"
              />
              <p>Brouse By Category</p>
            </div>

            <ul className="flex items-center gap-5 text-sm text-white">
              {links?.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <SocialMedia />
        </div>
      </div>
    </header>
  );
};

export default Header;
