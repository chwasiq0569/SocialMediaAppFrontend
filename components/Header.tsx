import * as React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import Image from "next/image";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const iconStyles = {
    color: "#ccffff",
    fontSize: "2rem",
    cursor: "pointer",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "0.425rem",
    borderRadius: "0.25rem",
    marginBottom: "0.25rem",
  };

  const brandIconStyle = {};

  return (
    <div className="sm: w-full md:bg-gray-800 fixed bottom-0 lg:relative max-w-screen-xl bg-brand-primary h-12 flex flex-row justify-between px-2">
      <div className="xsm: hidden md:block w-12 h-12 flex justify-center items-center">
        <div className="w-12 h-12 flex justify-center items-center">
          <Image
            src="/assets/icons/brandicon.svg"
            alt="BrandIcon"
            width={"25rem"}
            height={"25rem"}
          />
        </div>
      </div>
      <div className="sm: w-full md:w-2/4  h-12 rounded-b-2xl flex flex-row justify-between items-center px-14">
        <AiOutlineHome style={iconStyles} />
        <BsBell style={iconStyles} />
        <MdChatBubbleOutline style={iconStyles} />
        <BsBookmarks style={iconStyles} />
      </div>
      <div className="h-12 flex justify-center items-center">
        <div className="w-10 h-10 flex justify-center items-center">
          <Image
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="User Placeholder Image"
            width={"100%"}
            height={"98%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
