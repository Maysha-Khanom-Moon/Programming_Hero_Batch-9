import { useEffect, useRef } from "react";


function RefForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  /**
   * value: can't change
   * defaultValue: can change.
   */

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input ref={nameRef} type="text" name="name" placeholder="Name" />
        <br />
        <input
          ref={emailRef}
          defaultValue={"moon@me.com"}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RefForm
