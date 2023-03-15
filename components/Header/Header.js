import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SocialMedia from "../Shared/SocialMedia";

const Header = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);
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

  const location = router.pathname;
  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  showNav &&
    window.addEventListener("scroll", () => {
      setShowNav(false);
    });

  return (
    <header className="z-20">
      <div className="bg-primaryLight lg:py-1 py-2">
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

            <form className="items-center hidden lg:flex">
              <select className="p-2 h-10 bg-white text-grayDark text-xs capitalize rounded-l-md border-r-2 focus:outline-none">
                <option defaultValue>All Categories</option>
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
            <div className="text-xs text-white hidden lg:block">
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
              <li className="lg:hidden">
                <button onClick={() => setShowNav(!showNav)}>
                  <Image
                    src="/icons/hamburger.svg"
                    alt="hamburger"
                    height="20"
                    width="20"
                    className="mt-2"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primaryDark py-2 hidden lg:block">
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

      <div
        className={`fixed lg:hidden py-10 h-full md:w-1/2 w-full  bg-white top-0 right-0 ${
          showNav ? "translate-x-0" : "translate-x-full"
        } duration-300 transition-all`}
      >
        <div className="container">
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={() => setShowNav(!showNav)}
              className="flex items-center text-sm text-grayDark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </button>

            <button className="text-grayDark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          <div className="my-2">
            <h2 className="font-bold text-sm pb-2 border-b text-dark">
              Quick Links
            </h2>

            <ul className="text-sm text-grayDeep space-y-2 mt-3">
              {links?.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-2">
            <h2 className="font-bold text-sm pb-2 border-b text-dark">
              Browse by category
            </h2>

            <ul className="text-sm text-grayDeep space-y-2 mt-3 capitalize">
              <li>
                <Link href="/">All Categories</Link>
              </li>
              <li>
                <Link href="/">electronics</Link>
              </li>
              <li>
                <Link href="/">jewelery</Link>
              </li>
              <li>
                <Link href="/">men clothing</Link>
              </li>
              <li>
                <Link href="/">women clothing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
