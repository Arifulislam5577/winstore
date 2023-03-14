import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <ul className="flex items-center space-x-5">
      <li>
        <a href="/facebook">
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            height="22"
            width="11"
          />
        </a>
      </li>

      <li>
        <a href="/twitter">
          <Image
            src="/icons/twitter.svg"
            alt="twitter"
            height="18"
            width="22"
          />
        </a>
      </li>

      <li>
        <a href="/linkedin">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin"
            height="22"
            width="22"
          />
        </a>
      </li>

      <li>
        <a href="/instragram">
          <Image
            src="/icons/instrgram.svg"
            alt="instragram"
            height="22"
            width="22"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
