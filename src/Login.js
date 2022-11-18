import React, { useRef, useState } from "react";
import "./index.css";

export default function LogIn() {
  const [msg, setMsg] = useState("");
  const nameRef = useRef();
  const passRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    if (
      nameRef.current.value === "admin" &&
      passRef.current.value === "admin"
    ) {
      setMsg("login sucessfully");
    } else {
      setMsg("login failed!");
    }
  };

  return (
    <div>
      <form class="login">
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          required
          ref={nameRef}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          required
          ref={passRef}
        />
        <button type="submit" onClick={handleClick}>Login</button>
      </form>
      <div className="message" >
      <i>{msg}</i>
      </div>
    </div>
  );
}

