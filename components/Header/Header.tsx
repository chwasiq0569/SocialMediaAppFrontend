import React from "react";
import styles from "./header.module.css";
// import LogoImg from "/assets/icons/brandicon.svg";
import { AiFillHome } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const isMobilePhone = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <img src="/assets/icons/brandicon.svg" alt="Logo" />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.mainIconsContainer}>
          <AiFillHome className={styles.middle_iconStyles} />
          <RiMessage2Fill className={styles.middle_iconStyles} />
          <MdBookmark className={styles.middle_iconStyles} />
          {isMobilePhone ? (
            <MdNotifications className={styles.end_iconStyles} />
          ) : (
            <IoMdVideocam
              className={styles.middle_iconStyles + " " + styles.hideOnMobiles}
            />
          )}
          {isMobilePhone ? (
            <IoMdArrowDropdownCircle className={styles.end_iconStyles} />
          ) : null}
        </div>
        <div className={styles.rightIconsContainer}>
          <div className={styles.right_iconsContainer}>
            <MdNotifications className={styles.end_iconStyles} />
            <IoMdArrowDropdownCircle className={styles.end_iconStyles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
