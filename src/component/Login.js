import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");

  const handleSubmit = () => {
    if(email === "" || password === "")
    {
      let error = {};
      if(!email) error.email = "Email is required.";
      if(!password) error.password = "Password is required.";
      return setError({...error})
    }
  }

  return (
    <>
      <div className="sub_login py-5 rounded-2 px-5 mt-4">
        <div className="d-flex justify-content-center">
          <div>
            <div className="sign_text d-flex justify-content-center fs-1">
              Log In
            </div>
            <div className="log_text d-flex justify-content-center">
              Log in to your account to continue.
            </div>
            <form action="submit">
              <div className="main_email mt-5">
                <div className="text_email fw-semibold mb-1"> EMAIL</div>
                <i className="fa-solid fa-user position-absolute z-3 ms-3  text-secondary align-midddle user_icon"></i>
                <input
                  type="email"
                  name="email"
                  className="position-relative px-5 text-black rounded border-0"
                  placeholder="e.g.john_Doe@gmail.com"
                  id="id_email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if(!e.target.value){
                      setError({...error,email:"Email is required"});
                    }
                    else{
                      setError({...error, email: ""})
                    }
                  }}
                />
              <p className="text-danger error fw-medium">{error.email}</p>
              </div>
              <div className="main_email mt-5">
                <div className="text_email fw-semibold mb-1"> PASSWORD</div>
                <i className="fa-solid fa-lock position-absolute z-3 ms-3 text-secondary align-midddle user_icon"></i>
                <input
                  type="password"
                  name="password"
                  className="position-relative px-5 text-black rounded border-0"
                  placeholder="Password"
                  id="id_password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if(!e.target.value){
                      setError({...error,password:"Password is required"});
                    }
                    else{
                      setError({...error, password: ""})
                    }
                  }}
                />
              <p className="text-danger error fw-medium">{error.password}</p>

              </div>

              <div className="main_login_button mt-5 mb-3">
                {/* <Link to=""> */}
                <button type="button" onClick={handleSubmit} className="fw-semibold text-white  w-100 fw-regular rounded mt-4">
                  Log In
                </button>
                {/* </Link> */}
              </div>
              <div className="or_text">
                <div className="text-center mb-2">Or</div>
              </div>
              <div className="sign_up_text">
                <Link to="/signUp">  
                <div className="text-center ">Sign Up</div>
                </Link>
              </div>
              <div className="forget_pass d-flex justify-content-center mt-4 ">
                Forgot Password ?
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
