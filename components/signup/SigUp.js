/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import styles from "./signup.module.css";

const Signup = function (props) {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = userNameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !password ||
      !confirmPassword
    ) {
      console.log("error in input field");
      toast.error(`Input field`);
      return;
    }

    if (password !== confirmPassword) {
      console.log("error in password");
      toast.error(`Password Miss-match`);
      return;
    }

    const reqBody = { name, email, password, confirmPassword };

    const res = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();

    if (data.status === "Error") {
      return console.log("error");
    }

    toast.success(`Account Created`);
    emailRef.current.value = "";
    userNameRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";

    console.log(data);
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className={styles.align}>
        <div className={`${styles.grid} ${styles.align__item}`}>
          <div className={styles.register}>
            <img
              src="/assets/logo/NEXT NFTs-1_trans.png"
              alt="logo-image"
              className={styles.site__logo}
            />
            <h2>SIGN UP</h2>
            <form onSubmit={onSubmitHandler} className={styles.form}>
              <div className={styles.form__field}>
                <input type="text" placeholder="username" ref={userNameRef} />
              </div>
              <div className={styles.form__field}>
                <input type="email" placeholder="@example.com" ref={emailRef} />
              </div>
              <div className={styles.form__field}>
                <input
                  type="password"
                  placeholder="password"
                  ref={passwordRef}
                />
              </div>
              <div className={styles.form__field}>
                <input
                  type="password"
                  placeholder="confirmPassword"
                  ref={confirmPasswordRef}
                />
              </div>
              <div className={styles.form__field}>
                <button>SIGN UP</button>
              </div>
            </form>
            <p>
              Already have an accout? <Link href={`/signin`}>Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
