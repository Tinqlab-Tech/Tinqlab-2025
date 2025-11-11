import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

export default function SocialMediaItem({ color, position }) {
  return (
    <section
      className={`my-[20px] flex items-center justify-start gap-8 text-white`}
    >
      <a
        href="https://x.com/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaXTwitter
          size={50}
          className="rounded-[10px] bg-[#BDBDBD] p-2 text-darkestBlue transition-all duration-300 hover:scale-125"
        />
      </a>
      <a
        href="https://linkedin.com/company/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=""
      >
        <FaLinkedinIn
          size={50}
          className="rounded-[10px] bg-[#BDBDBD] p-2 text-darkestBlue transition-all duration-300 hover:scale-125"
        />
      </a>
      <a
        href="https://www.facebook.com/people/Tinqlab/100064552795813/"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaFacebookF
          size={50}
          className="rounded-[10px] bg-[#BDBDBD] p-2 text-darkestBlue transition-all duration-300 hover:scale-125"
        />
      </a>
      <a
        href="https://www.instagram.com/tinqlab/"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaInstagram
          size={50}
          className="rounded-[10px] bg-[#BDBDBD] p-2 text-darkestBlue transition-all duration-300 hover:scale-125"
        />
      </a>
    </section>
  );
}
