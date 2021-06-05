import React from "react";
import styles from "./header.module.css";
// import LogoImg from "/assets/icons/brandicon.svg";
import { AiFillHome } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <img src="/assets/icons/brandicon.svg" alt="Logo" />
        </div>
      </div>
      <div className={styles.middleSide}>
        <div className={styles.iconsContainer}>
          <AiFillHome className={styles.middle_iconStyles} />
          <IoMdVideocam className={styles.middle_iconStyles} />
          <MdBookmark className={styles.middle_iconStyles} />
          <RiMessage2Fill className={styles.middle_iconStyles} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.iconsContainer}>
          <MdNotifications className={styles.end_iconStyles} />
          <IoMdArrowDropdownCircle className={styles.end_iconStyles} />
        </div>
      </div>
    </div>
  );
};

export default Header;
