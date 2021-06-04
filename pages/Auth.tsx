import * as React from "react";
import SignIn from "../components/Auth/SignIn/SignIn";
import SignUp from "../components/Auth/SignUp/SignUp";
import styles from "../styles/authpage.module.css";

export interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  const [formStatus, setFormStatus] = React.useState(true);

  return (
    <div className={styles.authPageContainer}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <img src="/assets/icons/brandicon.svg" alt="brand icon" />
          <h1>Velvet</h1>
        </div>
      </div>
      <div className={styles.rightSide}>
        {formStatus ? (
          <SignIn setFormStatus={setFormStatus} />
        ) : (
          <SignUp setFormStatus={setFormStatus} />
        )}
      </div>
    </div>
  );
};

export default Auth;
