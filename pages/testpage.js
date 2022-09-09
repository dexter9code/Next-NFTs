import { useRef } from "react";

const TestPage = function () {
  const emailRef = useRef();
  const nameRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;

    const res = await fetch(`/api/testpoint`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type={"text"} ref={nameRef} />
        <br />
        <input type={"email"} ref={emailRef} />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default TestPage;
