import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebookIco from "../../../public/assets/icons/facebook.png";
import instagramIco from "../../../public/assets/icons/instagram.png";
import locationIco from "../../../public/assets/icons/location.png";
import phoneIco from "../../../public/assets/icons/phone.png";
import "./Footer.css";
import Logo from "../../../public/assets/logo.webp";

const Footer = () => {
  const facebook = "https://www.facebook.com/inpiazzareal";
  const instagram =
    "https://www.instagram.com/inpiazzareal?fbclid=IwAR3s_4nw5A2M_wNTpEhTgQqY5T-UJaExnIo7c5PkK-Ja5OnFifUIwB5Jqxk";
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_left-part-desktop">
            <div className="h-20 w-20">
              <Image src={Logo} alt="logo" className="rounded-full" />
            </div>
            <p className="text-sm xl:text-[1rem]">
              Copyright © 2023 - In Piazza
            </p>
          </div>
          <div className="footer_content">
            <div className="footer_content_social">
              <Link href={facebook}>
                <Image alt="facebook" src={facebookIco} className="h-14 w-14" />
              </Link>
              <Link href={instagram}>
                <Image
                  alt="instagram"
                  src={instagramIco}
                  className="h-14 w-14"
                />
              </Link>
            </div>
            <div className="footer_content_directions-address">
              <div className="flex justify-center">
                <Image
                  alt="location"
                  src={locationIco}
                  className="h-6 w-6 mr-1"
                />
                <p className="footer_address-phone">
                  Via Posidonia, 409, Salerno, Italy, 84129
                </p>
              </div>
              <div className="flex justify-center">
                <Image alt="location" src={phoneIco} className="h-6 w-6 mr-1" />
                <p className="footer_address-phone">+39 089 935 5030</p>
              </div>
            </div>
            <div className="footer_content_policy-copyright">
              <p className="md:hidden border-none">
                Copyright © 2023 - In Piazza
              </p>
              <Link href="/privacy-policy">
                <p className=" inline">Policy sulla Privacy</p>
              </Link>
              <Link target="_blank" href="http://www.umbertonardiello.com">
                <p className="inline">Website by Umberto Nardiello</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
