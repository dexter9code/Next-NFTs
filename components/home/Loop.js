import styles from "./loop.module.css";
import { useRef } from "react";
import Button1 from "./../common/Buttons/Button1";
import toast, { Toaster } from "react-hot-toast";

const Loop = function (props) {
  const emailRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email || !email.includes("@")) {
      return;
    }

    const res = await fetch(`/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      return toast.error(`Email already Subscribed`);
    }
    await res.json();
    toast(`Thank you`, {
      icon: "🙌",
    });
    emailRef.current.value = "";
  };

  return (
    <>
      <Toaster position="top-right" />
      <section className={styles.container}>
        <div className={styles.newsletter}>
          <h1>Never miss a drop</h1>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating Next-NFT.
          </p>
          <form onSubmit={submitHandler}>
            <div className={styles.control}>
              <input
                type={"email"}
                placeholder="@example.com"
                id="email"
                ref={emailRef}
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <Button1 title={"Explore"} subTitle={`let'go`} location={"/allNfts"} />
      </section>
    </>
  );
};

export default Loop;
