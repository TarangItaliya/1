import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      let error = {};
      if (!email) error.email = "Email is required.";
      if (!password) error.password = "Password is required.";
      if (!firstName) error.firstName = "First Name is required.";
      if (!lastName) error.lastName = "Last Name is required.";
      return setError({ ...error });
    }
  };

  return (
    <div className="sub_login py-5 rounded-2 px-5 mt-4">
      <div className="d-flex justify-content-center">
        <div>
          <div className="sign_text d-flex justify-content-center fs-1">
            Sign Up
          </div>
          <div className="log_text d-flex justify-content-center">
            Please fill in this create your account.
          </div>
          <form action="submit">
            <div className="d-flex justify-content-between mt-5">
              <div className="main_email ">
                <div className="text_email fw-semibold mb-1"> First Name</div>
                <i class="fa-solid fa-user position-absolute z-3 ms-3  text-secondary align-midddle user_icon"></i>
                <input
                  type="text"
                  name="first_name"
                  className="position-relative w-100 ps-5  text-black rounded border-0"
                  placeholder="First Name"
                  id="id_first_name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if(!e.target.value){
                        setError({...error, firstName: "First Name is required."})
                    }
                    else{
                        setError({...error, firstName: ""})
                    }
                  }}
                />
                <p className="text-danger error fw-medium">{error.firstName}</p>
              </div>
              <div className="main_email  ">
                <div className="text_email fw-semibold mb-1"> Last Name</div>
                <i class="fa-solid fa-user position-absolute z-3 ms-3  text-secondary align-midddle user_icon"></i>
                <input
                  type="text"
                  name="last_name"
                  className="position-relative w-100  ps-5 text-black rounded border-0"
                  placeholder="Last Name"
                  id="id_last_name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if(!e.target.value){
                        setError({...error, lastName: "First Name is required."})
                    }
                    else{
                        setError({...error, lastName: ""})
                    }
                  }}
                />
                <p className="text-danger error fw-medium">{error.lastName}</p>

              </div>
            </div>
            <div className="main_email mt-2">
              <div className="text_email fw-semibold mb-1"> EMAIL</div>
              <i class="fa-solid fa-envelope position-absolute z-3 ms-3  text-secondary  user_icon"></i>
              <input
                type="email"
                name="email"
                className="position-relative px-5 text-black rounded border-0"
                placeholder="e.g.john_Doe@gmail.com"
                id="id_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!e.target.value) {
                    setError({ ...error, email: "Email is required" });
                  } else {
                    setError({ ...error, email: "" });
                  }
                }}
              />
              <p className="text-danger error fw-medium">{error.email}</p>
            </div>
            <div className="main_email mt-4">
              <div className="text_email fw-semibold mb-1"> PASSWORD</div>
              <i class="fa-solid fa-lock position-absolute z-3 ms-3 text-secondary align-midddle user_icon"></i>
              <input
                type="password"
                name="password"
                className="position-relative px-5 text-black rounded border-0"
                placeholder="Password"
                id="id_password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!e.target.value) {
                    setError({ ...error, password: "Password is required" });
                  } else {
                    setError({ ...error, password: "" });
                  }
                }}
              />
              <p className="text-danger error fw-medium">{error.password}</p>
            </div>
            <input
              className="mt-4 ms-1"
              type="checkbox"
              id="accept"
              name=""
              value=""
            />
            <label className="ms-2  terms_conditions" for="accept">
              {" "}
              I agree with{" "}
            </label>{" "}
            <label className=" terms_conditions text-primary fw-medium">
              terms & condiations.
            </label>
            <div className="main_login_button mt-5 mb-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="fw-semibold text-white  w-100 fw-regular rounded"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
