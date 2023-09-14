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
              <Link href={facebook} target="_blank">
                <Image alt="facebook" src={facebookIco} className="h-14 w-14" />
              </Link>
              <Link href={instagram} target="_blank">
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
        {/* <div className="footer_container_large-screens">
          <div className="footer_left-part-desktop">
            <div className="h-16 w-16">
              <Image src={Logo} alt="logo" className="rounded-full" />
            </div>
            <p className="text-sm  1440:text-xl">
              Copyright © 2023 - In Piazza
            </p>
          </div>
          <div className="footer_content">
            <div className="footer_content_left-side">
              <Link href={facebook} target="_blank">
                <Image
                  alt="facebook"
                  src={facebookIco}
                  className="h-[2.9rem] w-[2.9rem] 1440:h-[3.4rem] 1440:w-[3.4rem]"
                />
              </Link>
              <div className="flex items-center gap-2">
                <Image
                  alt="location"
                  src={locationIco}
                  className="h-5 w-5 1440:h-6 1440:w-6 "
                />
                <p className="footer_address-phone">
                  Via Posidonia, 409, Salerno, Italy, 84129
                </p>
              </div>
              <Link href="/privacy-policy">
                <p className="inline md:text-sm font-antic lg:text-base 1440:text-xl">
                  Policy sulla Privacy
                </p>
              </Link>
            </div>
            <div className="footer_content_right-side">
              <Link href={instagram} target="_blank">
                <Image
                  alt="instagram"
                  src={instagramIco}
                  className="h-12 w-12 1440:h-14 1440:w-14"
                />
              </Link>
              <div className="flex items-center gap-2">
                <Image
                  alt="location"
                  src={phoneIco}
                  className="h-5 w-5 mr-1 1440:h-6 1440:w-6"
                />
                <p className="footer_address-phone">+39 089 935 5030</p>
              </div>
              <Link target="_blank" href="http://www.umbertonardiello.com">
                <p className="inline text-sm lg:text-base 1440:text-xl font-antic">
                  Website by Umberto Nardiello
                </p>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="hidden md:flex justify-around bg-slate-900 bg-opacity-60 gap-0">
          <div className="px-4 py-6 lg:py-8">
            <div className="flex justify-center gap-4 mb-4">
              <Link href={instagram} target="_blank">
                <Image
                  alt="instagram"
                  src={instagramIco}
                  className="h-10 w-10 1440:h-10 1440:w-10"
                />
              </Link>
              <Link href={facebook} target="_blank">
                <Image
                  alt="facebook"
                  src={facebookIco}
                  className="h-10 w-10 1440:h-10 1440:w-10"
                />
              </Link>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                alt="location"
                src={locationIco}
                className="h-5 w-5 1440:h-6 1440:w-6 "
              />
              <p className="footer_address-phone">
                Via Posidonia, 409, Salerno, Italy, 84129
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Image
                alt="location"
                src={phoneIco}
                className="h-5 w-5 mr-1 1440:h-6 1440:w-6"
              />
              <Link href="tel:+39 089 935 5030">
                <p className="footer_address-phone">+39 089 935 5030</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="px-12">
              <Image
                src={Logo}
                alt="logo"
                className="rounded-full h-16 w-16 lg:h-20 lg:w-20"
              />
            </div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <Link href="/privacy-policy">
              <p className="font-antic text-sm lg:text-base 1440:text-xl">
                Policy sulla Privacy
              </p>
            </Link>
            <p className="text-sm lg:text-base 1440:text-xl">
              Copyright © 2023 - In Piazza
            </p>
            <Link target="_blank" href="http://www.umbertonardiello.com">
              <p className="inline text-sm lg:text-base 1440:text-xl font-antic">
                Website by Umberto Nardiello
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
