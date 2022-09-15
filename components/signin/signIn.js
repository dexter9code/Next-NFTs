import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./singIn.module.css";

const SignIn = function (props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      const valueString = result.error ? result.error : `Something gone wrong`;
      toast.error(valueString);
      return;
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
    router.back();
  };

  return (
    <>
      <Toaster position="top-center" />
      <section className={styles.full__container}>
        <div className={styles.background_cover}></div>
        <main className={styles.container}>
          <div className={styles.session}>
            <div className={styles.left}></div>
            <form onSubmit={onSubmitHandler}>
              <h4>
                We are <span>Next-NFTs</span>
              </h4>
              <p>Welcome back! login and Find a master piece</p>
              <div className={styles.floating_label}>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                />
                <label htmlFor="email">Email:</label>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="2500"
                    viewBox="1 1 600 600"
                  >
                    <g transform="matrix(6.66667 0 0 6.66667 -5.667 -6408.081)">
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="-110.934"
                        y1="1129.751"
                        x2="-110.35"
                        y2="1720.099"
                        gradientTransform="matrix(1 0 0 -1 156.89 2180.75)"
                      >
                        <stop offset="0" stopColor="#70efff" />
                        <stop offset="1" stopColor="#5770ff" />
                      </linearGradient>
                      <path
                        d="M21.653 961.362h48.695a20.608 20.608 0 0 1 20.653 20.653v48.695a20.608 20.608 0 0 1-20.653 20.653H21.653A20.608 20.608 0 0 1 1 1030.71v-48.695a20.608 20.608 0 0 1 20.653-20.653z"
                        fill="url(#a)"
                      />
                      <path
                        className={styles.st1}
                        d="M20.719 986.956c-.474 0-.921.082-1.344.25l8.469 8.719 8.563 8.875.156.188.25.25.25.25.5.531 7.344 7.531c.122.076.477.404.754.543.357.178.743.343 1.141.357.43.015.869-.108 1.256-.296.29-.141.419-.343.755-.603l8.5-8.781 8.594-8.844 8.281-8.531a3.635 3.635 0 0 0-1.75-.438H20.719zm-2.594 1.062c-.903.856-1.469 2.142-1.469 3.594v28.625c0 1.175.377 2.243 1 3.062l1.187-1.125 8.844-8.594 7.844-7.594-.156-.187-8.594-8.844-8.594-8.875-.062-.062zm57.188.282l-8.375 8.656-8.563 8.844-.156.156 8.156 7.906 8.844 8.594.531.5c.476-.764.75-1.705.75-2.719v-28.625c0-1.294-.448-2.468-1.187-3.312zm-38.782 18.718l-7.812 7.594-8.875 8.594-1.125 1.094c.593.382 1.268.625 2 .625h51.719c.88 0 1.678-.338 2.344-.875l-.562-.562-8.875-8.594-8.156-7.875-7.344 7.562c-.397.264-.663.556-1.051.735-.625.289-1.309.533-1.997.523-.69-.011-1.367-.281-1.986-.585-.311-.153-.477-.305-.841-.61l-7.439-7.626z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className={styles.floating_label}>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                />
                <label htmlFor="password">Password:</label>
                <div className={styles.icon}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 86.5 122.88"
                  >
                    <defs></defs>
                    <title>unlocked</title>
                    <path
                      className="cls-1"
                      d="M5.54,53.25H81a5.57,5.57,0,0,1,5.54,5.54v58.55A5.56,5.56,0,0,1,81,122.88H5.54A5.55,5.55,0,0,1,0,117.34V58.79a5.56,5.56,0,0,1,5.54-5.54Z"
                    />
                    <path
                      className="cls-2"
                      d="M38.7,91.82l-6,15.66H53.77L48.23,91.6a10.9,10.9,0,1,0-9.53.22Z"
                    />
                    <path
                      className="cls-2"
                      d="M66.69,34.16a25.17,25.17,0,0,0-6.94-16.49,22.56,22.56,0,0,0-33,0,25.22,25.22,0,0,0-7,17.52V53.25H9.29V35.19A35.76,35.76,0,0,1,19.2,10.42a33,33,0,0,1,48.09,0,35.69,35.69,0,0,1,9.9,23.74Z"
                    />
                  </svg>
                </div>
              </div>
              <button type="submit">Log in</button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default SignIn;
