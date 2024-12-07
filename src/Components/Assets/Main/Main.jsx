import React, { useState } from "react";
import "./Main.css";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleRegisterLink = () => {
    setIsLogin(false);
  };

  const handleLoginLink = () => {
    setIsLogin(true);
  };

  return (
    <div className="wrapper">
      {isLogin && (
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
              <RiLockPasswordFill className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={handleRegisterLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
      {!isLogin && (
        <div className="form-box register">
          <form>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
              <RiLockPasswordFill className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Age" />
            </div>
            <div className="input-box">
              <input
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
              />
              <IoMdPhonePortrait className="icon" />
            </div>
            <div className="input-box">
              <select className="dropdown">
                <option value="">Your Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="input-box">
              <select className="dropdown">
                <option value="">
                  -- Select Your University or Institute --
                </option>
                <optgroup label="State Universities">
                  <option value="Colombo">University of Colombo</option>
                  <option value="Peradeniya">University of Peradeniya</option>
                  <option value="Kelaniya">University of Kelaniya</option>
                  <option value="Moratuwa">University of Moratuwa</option>
                  <option value="Jaffna">University of Jaffna</option>
                  <option value="Sri Jayewardenepura">
                    University of Sri Jayewardenepura
                  </option>
                  <option value="Ruhuna">University of Ruhuna</option>
                  <option value="Eastern">Eastern University, Sri Lanka</option>
                  <option value="South Eastern">
                    South Eastern University of Sri Lanka
                  </option>
                  <option value="Wayamba">
                    Wayamba University of Sri Lanka
                  </option>
                </optgroup>
                <optgroup label="Professional Institutes">
                  <option value="IESL">
                    Institute of Engineers Sri Lanka (IESL)
                  </option>
                  <option value="CIMA">
                    Chartered Institute of Management Accountants (CIMA)
                  </option>
                  <option value="CA">
                    Institute of Chartered Accountants of Sri Lanka (CA Sri
                    Lanka)
                  </option>
                  <option value="SLIIT">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </option>
                  <option value="NIBM">
                    National Institute of Business Management (NIBM)
                  </option>
                  <option value="BCAS">BCAS Campus</option>
                  <option value="APIIT">
                    Asia Pacific Institute of Information Technology (APIIT)
                  </option>
                </optgroup>
              </select>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={handleLoginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
