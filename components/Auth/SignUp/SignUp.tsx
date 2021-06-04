import * as React from "react";
import styles from "../auth.module.css";

export interface SignUpProps {
  setFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setFormStatus }) => {
  return (
    <div className={styles.signInForm}>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Repeat Password" />
      <button className={styles.loginBtn}>SignUp</button>
      <button
        onClick={() => setFormStatus(true)}
        className={styles.createNewAcc}
      >
        Log In
      </button>{" "}
    </div>
  );
};

export default SignUp;
