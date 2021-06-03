import * as React from "react";
import styles from "../styles/auth.module.css";

export interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  return (
    <div className={styles.authPageContainer}>
      <div className={styles.leftSide}>Velvet</div>
      <div className={styles.rightSide}>
        {/* <div className={styles.signInForm}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className={styles.loginBtn}>Log In</button>
          <p className={styles.forgerPassword}>Forget Password?</p>
          <button className={styles.createNewAcc}>
            Create New Account
          </button>{" "}
        </div> */}
        <div className={styles.signInForm}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <button className={styles.loginBtn}>SignUp</button>
          <p className={styles.forgerPassword}>Forget Password?</p>
          <button className={styles.createNewAcc}>Log In</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Auth;
