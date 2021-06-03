import * as React from "react";
import styles from "./createpostfield.module.css";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { RiSendPlane2Line } from "react-icons/ri";

export interface CreatePostFieldProps {}

const CreatePostField: React.FC<CreatePostFieldProps> = () => {
  return (
    <div className={"flex justify-center " + styles.createPostFieldContainer}>
      <div className={"flex justify-center items-center " + styles.profileImg}>
        <Image
          className={styles.userImg + " rounded-full"}
          src="/assets/icons/l60Hf.png"
          alt="BrandIcon"
          width={"45%"}
          height={"45%"}
        />
      </div>
      <div className={styles.inputField}>
        <textarea placeholder="Create you Post..." />
      </div>
      <div
        className={
          "flex justify-between items-center " + styles.postIconsContainer
        }
      >
        <IoImageOutline style={{ fontSize: "1.25rem", color: "#b9b9b9" }} />
        <GrEmoji style={{ fontSize: "1.25rem", color: "#b9b9b9" }} />
        <RiSendPlane2Line style={{ fontSize: "1.25rem", color: "#b9b9b9" }} />
      </div>
    </div>
  );
};

export default CreatePostField;
