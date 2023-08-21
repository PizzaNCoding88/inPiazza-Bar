import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebookIco from "../../../public/assets/icons/facebook.png";
import instagramIco from "../../../public/assets/icons/instagram.png";
import locationIco from "../../../public/assets/icons/location.png";
import phoneIco from "../../../public/assets/icons/phone.png";

const Footer = () => {
  const facebook = "https://www.facebook.com/inpiazzareal";
  const instagram =
    "https://www.instagram.com/inpiazzareal?fbclid=IwAR3s_4nw5A2M_wNTpEhTgQqY5T-UJaExnIo7c5PkK-Ja5OnFifUIwB5Jqxk";
  return (
    <>
      <footer className="bg-footerBg bg-cover py-8 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 blur-2xl bg-slate-900 bg-opacity-50 z-0"></div>
        <div className="grid grid-cols-1 grid-rows-custom h-full w-[90%] mx-auto gap-5">
          <div className="flex gap-8 justify-center z-10">
            <Link href={facebook}>
              <Image alt="facebook" src={facebookIco} className="h-14 w-14" />
            </Link>
            <Link href={instagram}>
              <Image alt="instagram" src={instagramIco} className="h-14 w-14" />
            </Link>
          </div>
          <div className="z-10 flex flex-col gap-4">
            <div className="flex justify-center items-center">
              <Image
                alt="location"
                src={locationIco}
                className="h-6 w-6 mr-1"
              />
              <p className="text-tertiary text-center font-antic">
                Via Posidonia, 409, Salerno, Italy, 84129
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image alt="location" src={phoneIco} className="h-6 w-6 mr-1" />
              <p className="text-tertiary text-center font-antic">
                +39 089 935 5030
              </p>
            </div>
          </div>
          <div className="z-10 flex flex-col justify-between gap-4 text-tertiary text-center font-antic">
            <p>Copyright © 2023 - In Piazza</p>
            <Link href="/privacy-policy">
              <p className="border-b-[1px] border-b-solid border-b-tertiary pb-1 inline">
                Policy sulla Privacy
              </p>
            </Link>
            <Link target="_blank" href="http://www.umbertonardiello.com">
              <p>Made by Umberto Nardiello</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
