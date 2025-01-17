import React from "react";
import styles from "./LoginButton.module.scss";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { doSocialLogin } from "../../../actions/index";

const LoginButton = () => {
  return (
    <div style={{ padding: "0px" }}>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
        action={doSocialLogin}
      >
        <button
          className={styles.button_design}
          type="submit"
          name="action"
          value="google"
        >
          Sign In With <FcGoogle style={{ fontSize: "25px" }} />
        </button>
        <button
          className={styles.button_design}
          type="submit"
          name="action"
          value="facebook"
        >
          Sign In With{" "}
          <BsFacebook style={{ fontSize: "25px", color: "blue" }} />
        </button>
      </form>
    </div>
  );
};

export default LoginButton;
