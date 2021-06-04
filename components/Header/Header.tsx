import * as React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import styles from "./header.module.css";
export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const iconStyles = {
    color: "#b9b9b9",
    fontSize: "2rem",
    cursor: "pointer",
    backgroundColor: "none",
    padding: "0.425rem",
    borderRadius: "0.25rem",
    marginBottom: "0.25rem",
  };

  return (
    <div
      className={
        styles.headerContainer +
        " sm: w-full fixed bottom-0 md: lg:relative max-w-screen-xl bg-brand-primary h-12 flex flex-row justify-between px-2"
      }
    >
      <div
        className={
          styles.HeaderLeftSide + " w-12 h-12 flex justify-center items-center"
        }
      >
        <div
          className={
            styles.brandIconContainer +
            " w-12 h-12 flex justify-center items-center"
          }
        >
          <Image
            src="/assets/icons/brandicon.svg"
            alt="BrandIcon"
            width={"25rem"}
            height={"25rem"}
          />
        </div>
      </div>
      <div
        className={
          styles.menuContainer +
          " w-full md:w-2/4 h-12 rounded-b-xl bg-brand-secondary flex flex-row justify-between items-center lg:w-2/4 "
        }
      >
        <AiOutlineHome style={iconStyles} />
        <BsBell style={iconStyles} />
        <MdChatBubbleOutline style={iconStyles} />
        <BsBookmarks style={iconStyles} />
      </div>
      <div className="h-12 flex justify-center items-center">
        <div
          className={
            styles.profileImageContainer +
            "h-10 flex justify-center items-center"
          }
        >
          <p className={styles.userName}>chwasiq0569</p>
          <img
            className={styles.placeholderImage}
            src="/assets/icons/l60Hf.png"
            alt="User Placeholder Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
