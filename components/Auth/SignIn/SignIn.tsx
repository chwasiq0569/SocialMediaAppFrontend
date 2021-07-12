import * as React from "react";
import styles from "../auth.module.css";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";
import LoaderProgress from "../../LoaderProgress/LoaderProgress";

export interface SignInProps {
  setFormStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ setFormStatus }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const loginUser = () => {
    setLoading(true);
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === 1) {
          console.log(res);
          router.replace("/Home");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.signInForm}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {loading ? (
        <LoaderProgress />
      ) : (
        <>
          <button className={styles.loginBtn} onClick={loginUser}>
            Log In
          </button>
          <p className={styles.forgetPassword}>Forget Password?</p>
          <button
            onClick={() => setFormStatus(false)}
            className={styles.createNewAcc}
          >
            Create New Account
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default SignIn;
