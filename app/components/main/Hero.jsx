import React from "react";
import Button from "../button/Button";
import downIcon from "../../../public/assets/icons/down-icon.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* old bg image to be reviewed */}

      {/* <section className="h-[100dvh] bg-hero bg-240% bg-no-repeat bg-semiCenter mix-blend-normal -z-10"> */}
      <section className="section">
        {/* <div className="h-full w-full z-10">
          <Image
            alt="test"
            src={bgImage}
            className="h-full w-full object-cover opacity-50"
          />
        </div> */}

        {/* old overlay for the background - to be reviewed */}
        {/* <div className="h-full w-full absolute bg-slate-500 bg-opacity-5 z-0"></div> */}
        <div className="section_fadedbg z-50"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full bg-customGrey bg-opacity-60 w-4/5 text-center py-10 z-10 rounded-tr-md rounded-bl-md rounded-tl-[3rem] rounded-br-[3rem]">
          <h1 className="font-americana uppercase text-5xl drop-shadow-heroShadow text-primary stroke">
            In piazza
          </h1>
          <p className="text-3xl mt-3 font-neon drop-shadow-heroShadow text-primary stroke1 ">
            Aperichic Bar
          </p>
        </div>
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-4/5 gap-10 px-12">
          <Button text="Menu" link="/" style="primary" />
          <Button text="Contattaci" link="/" style="secondary" />
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <Image
            src={downIcon}
            alt="double down arrow icon"
            className="h-6 w-6 animate-bounce"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
