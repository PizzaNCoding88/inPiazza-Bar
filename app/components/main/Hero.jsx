import React from "react";
import Button from "../button/Button";
import downIcon from "../../../public/assets/icons/down-icon.png";
import Image from "next/image";
import bgImage from "../../../public/assets/hero1.webp";

const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="h-full w-full z-10">
          <Image alt="test" src={bgImage} className="section_background" />
        </div>
        <div className="section_fadedbg"></div>

        <div className="section_hero-header">
          <h1 className="section_hero-header_h1">In piazza</h1>
          <p className="section_hero-header_p">Aperichic Bar</p>
        </div>
        <div className="section_hero_cta">
          <Button text="Menu" link="/menu" style="primary" linkstyle="cta" />
          <Button
            text="Contattaci"
            link="#contacts"
            style="secondary"
            linkstyle="cta"
          />
        </div>
        <div className="section_arrows">
          <a href="#next-section">
            <Image
              src={downIcon}
              alt="double down arrow icon"
              className="h-6 w-6 animate-bounce"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
