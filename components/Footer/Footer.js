import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../Shared/SocialMedia";

const Footer = () => {
  const links = [
    {
      title: "Trending",
      pages: [
        { id: 1, title: "Installments", path: "/" },
        { id: 2, title: "Electronics", path: "/" },
        { id: 3, title: "Grocery", path: "/" },
        { id: 4, title: "Health & Beauty", path: "/" },
        { id: 5, title: "Home Appliances", path: "/" },
        { id: 6, title: "Mobile Accessories", path: "/" },
      ],
    },

    {
      title: "Information",
      pages: [
        { id: 1, title: "About Us", path: "/" },
        { id: 2, title: "Contact Us", path: "/" },
        { id: 3, title: "FaQs", path: "/" },
        { id: 4, title: "Shipping & Return", path: "/" },
        { id: 5, title: "Privacy policy", path: "/" },
        { id: 6, title: "Terms & Conditions", path: "/" },
      ],
    },
    {
      title: "Customer Care",
      pages: [
        { id: 1, title: "My Account", path: "/" },
        { id: 2, title: "Track Your Order", path: "/" },
        { id: 3, title: "Recently Viewed", path: "/" },
        { id: 4, title: "Wishlist", path: "/" },
        { id: 5, title: "Compare", path: "/" },
        { id: 6, title: "Become a Vendor", path: "/" },
      ],
    },
  ];
  return (
    <footer>
      <div className="footer-top bg-grayDeep py-10">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 items-start justify-between">
            <div className="lg:col-span-1 w-full ">
              <div>
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="winstore"
                    height="48"
                    width="132"
                  />
                </Link>

                <div className="mt-3">
                  <p className="text-lg text-secondaryDeep mb-2">
                    Got questions? Call us 24/7!
                  </p>
                  <p className="text-sm text-white">03 111 666 144</p>
                  <p className="text-sm text-white">0317 1777015.</p>
                </div>

                <div className="my-3 text-white text-sm">
                  <p className="text-base text-secondaryDeep">Contact info</p>
                  <p>info@winstore.pk</p>
                </div>

                <SocialMedia />
              </div>
            </div>

            {links.map((info) => (
              <div key={info.title} className="lg:col-span-1 w-full lg:px-10">
                <h3 className="text-xl text-secondaryDeep mb-4 ">
                  {info.title}
                </h3>

                <ul className="text-sm text-white space-y-2">
                  {info.pages.map((page) => (
                    <li key={page.id}>
                      <Link href={page.path}>{page.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:col-span-4 w-full flex items-center gap-3 lg:justify-end justify-center lg:pr-20">
              <Image
                src="/images/VISA.png"
                alt="VISA"
                height="59"
                width="84"
                className="bg-white h-10 object-contain"
              />
              <Image
                src="/images/MASTER.png"
                alt="MASTER"
                height="59"
                width="84"
                className="bg-white h-10 object-contain"
              />
              <Image
                src="/images/cash.png"
                alt="cash"
                height="59"
                width="84"
                className="bg-white h-10 object-contain"
              />
              <Image
                src="/images/VISA.png"
                alt="VISA"
                height="59"
                width="84"
                className="bg-white h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
