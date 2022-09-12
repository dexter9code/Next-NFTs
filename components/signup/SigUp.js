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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.site__logo}
              width="56"
              height="84"
              viewBox="77.7 214.9 274.7 412"
            >
              <defs>
                <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#8ceabb" />
                  <stop offset="100%" stopColor="#378f7b" />
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
              />
            </svg>
            <h2>Sign Up</h2>
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
                <button>Sign up</button>
              </div>
            </form>
            <p>
              Already have an accout? <a href="#">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
