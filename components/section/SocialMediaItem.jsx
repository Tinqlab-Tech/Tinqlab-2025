import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function SocialMediaItem({ color, position }) {
  return (
    <section
      className={` flex items-center justify-start gap-8 text-white my-[20px]`}
    >
      <a
        href="https://x.com/korsgy"
        target="_blank"
        rel="noopener"
        className=" h-6 w-6"
      >
        <FaXTwitter className="w-[18px] hover:scale-125 text-white" />
      </a>
      <a
        href="https://www.linkedin.com/company/korsgy"
        target="_blank"
        rel="noopener"
        className="h-6 w-6"
      >
        <FaLinkedinIn className="w-[18px] hover:scale-12 text-white" />
      </a>
      <a
        href="https://facebook.com/korsgy"
        target="_blank"
        rel="noopener"
        className="  h-6 w-6 "
      >
        <FaFacebookF className="w-[10px] hover:scale-125 text-white" />
      </a>
    </section>
  );
}
