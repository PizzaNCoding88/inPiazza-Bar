import Image from "next/image";
import React from "react";

const MenuModal = (props) => {
  const { src, status } = props;
  return (
    <>
      <div
        className="lg:py-8 lg:absolute lg:flex lg:items-center lg:justify-center lg:top-0  lg:left-0 lg:right-0 lg:bg-slate-600 z-50"
        onClick={() => {
          status();
        }}
      >
        <div className="lg:h-[90%] lg:w-1/2">
          <Image src={src} alt="modal-pic" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </>
  );
};

export default MenuModal;
