import * as React from "react";
import styles from "../auth.module.css";

export interface SignInProps {
  setFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ setFormStatus }) => {
  return (
    <div className={styles.signInForm}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className={styles.loginBtn}>Log In</button>
      <p className={styles.forgetPassword}>Forget Password?</p>
      <button
        onClick={() => setFormStatus(false)}
        className={styles.createNewAcc}
      >
        Create New Account
      </button>{" "}
    </div>
  );
};

export default SignIn;
