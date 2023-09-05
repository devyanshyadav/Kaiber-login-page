import React, { useState } from "react";
import "animate.css";

const App = () => {
  const [formIn, setformIn] = useState({
    email: "",
    password: "",
  });
  const formInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setformIn((prev) => {
      if (name == "email") {
        return {
          email: value,
          password: prev.password,
        };
      } else {
        return {
          email: prev.email,
          password: value,
        };
      }
    });
  };

  const [formOut, setformOut] = useState({
    email: "",
    password: "",
  });

  const [style, setStyle] = useState({
    display: "none",
    color: "",
    txt: "",
  });
  const formOutput = () => {
    setformOut(() => {
      return {
        email: formIn.email,
        password: formIn.password,
      };
    });

    if (
      formIn.email == "example@gmail.com" &&
      formIn.password == "developerZone"
    ) {
      setStyle(() => {
        return {
          display: "block",
          color: "#25ab61",
          txt: " Login Successfully",
        };
      });
    } else {
      setStyle(() => {
        return {
          display: "block",
          color: "red",
          txt: "Incorrect Details",
        };
      });
    }
    setTimeout(() => {
      setStyle(() => {
        return {
          display: "none",
        };
      });
    }, 2000);
  };

  return (
    <>
      <section className="formSection">
        <div className="imgDiv">
          <img src="https://kaiber.ai/images/8efc3d7b7027c26ee43eea2696966107-logo.png" />
          <span>BETA</span>
        </div>
        <div className="inputFields">
          <span>
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              onChange={formInput}
            />
          </span>
          <span>
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={formInput}
            />
            <p className="forgetPass">Forgot Password?</p>
          </span>
        </div>
        <div className="buttonsDiv">
          <button onClick={formOutput}>Login</button>
          <button>Sign Up</button>
          <span>or</span>
          <button>
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            Sign In With Google
          </button>
        </div>
      </section>
      <div
        className="msgToUser animate__animated animate__bounceInRight"
        style={{
          display: style.display,
          borderColor: style.color,
          color: style.color,
        }}
      >
        {style.txt}
      </div>
    </>
  );
};

export default App;
