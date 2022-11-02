import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Register.module.css";
import validate from "./validator";
import {userRegister} from '../../redux/actions'
import { useDispatch , useSelector} from 'react-redux';


export default function Register() {

  const dispatch = useDispatch()
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    date_of_birth: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
    address: "",
  });

  

  const [click, setClick] = useState({
    username: false,
    email: false,
    password: false,
    date_of_birth: false,
    first_name: false,
    last_name: false,
    city: false,
    phone_number: false,
  });

  const [error, setError] = useState({});

  const handleClick = (e) => {
    if (!click[`${e.target.name}`]) {
      setClick({
        ...click,
        [e.target.name]: !click[`${e.target.name}`],
      });
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length && input.username !== "") {
      dispatch(userRegister(input));
      setInput({
        username: "",
        email: "",
        password: "",
        date_of_birth: "",
        phone_number: "",
        first_name: "",
        last_name: "",
        city: "",
        zip_code: "",
        address: "",
      })
      console.log("register");
    } else {
      setClick({
        username: true,
        email: true,
        password: true,
        date_of_birth: true,
        first_name: true,
        last_name: true,
        city: true,
        phone_number: true,
      });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.registerFormMainContainer}>
        <div className={s.formContainer}>
          <div className={s.forms}>
            <div className={s.formLogin}>
              <span className={s.title}>Registration</span>
              <form action="#">
                <div className={s.inputField}>
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    required
                    name="username"
                    value={input.username}
                    onClick={handleClick}
                  />
                  {click.username && error.username && (
                    <p className={s.error}>{error.username}</p>
                  )}
                  <i class="uil uil-user"></i>
                </div>
                <div className={s.inputField}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoCapitalize="off"
                    required
                    value={input.email}
                    onClick={handleClick}
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.email && error.email && (
                    <p className={s.error}>{error.email}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    placeholder="Password"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-lock"></i>
                  {click.password && error.password && (
                    <p className={s.error}>{error.password}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <p id={s.dateOfBirth}>Date of Birth</p>
                  <input
                    type="date"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    onClick={handleClick}
                    required
                    name="date_of_birth"
                    value={input.date_of_birth}
                  />
                  <i class="uil uil-user"></i>
                  {click.date_of_birth && error.date_of_birth && (
                    <p className={s.error}>{error.date_of_birth}</p>
                  )}
                </div>

                {/* Phone and PIN numbers */}
                <div className={s.line}></div>

                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      name="first_name"
                      value={input.first_name}
                      onClick={handleClick}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-user"></i>
                    {click.first_name && error.first_name && (
                      <p className={s.error}>{error.first_name}</p>
                    )}
                  </div>
                  <div className={s.lastnameContainer}>
                    <input
                      id="lastname"
                      type="text"
                      name="last_name"
                      value={input.last_name}
                      placeholder="Last Name"
                      onClick={handleClick}
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.last_name && error.last_name && (
                      <p className={s.error}>{error.last_name}</p>
                    )}
                  </div>
                </div>

                <div className={s.inputField}>
                  <input
                    type="text"
                    name="phone_number"
                    value={input.phone_number}
                    placeholder="Phone Number"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-mobile-android" />
                  {click.phone_number && error.phone_number && (
                    <p className={s.error}>{error.phone_number}</p>
                  )}
                </div>
                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      name="city"
                      onClick={handleClick}
                      value={input.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-map "></i>
                    {click.city && error.city && (
                      <p className={s.error}>{error.city}</p>
                    )}
                  </div>
                  <div className={s.lastnameContainer}>
                    <p id={s.dateOfBirth}>Optional</p>
                    <input
                      id="lastname"
                      type="text"
                      name="zip_code"
                      value={input.zip_code}
                      onClick={handleClick}
                      placeholder="Zip Code"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.zip_code && error.zip_code && (
                      <p className={s.error}>{error.zip_code}</p>
                    )}
                  </div>
                </div>

                <div className={s.inputField}>
                  <p id={s.dateOfBirth}>Optional</p>
                  <input
                    type="text"
                    name="address"
                    value={input.address}
                    onClick={handleClick}
                    placeholder="Address"
                    autoCapitalize="off"
                    onChange={handleInputChange}
                    required
                  />
                  <i class="uil uil-map-marker"></i>
                  {click.address && error.address && (
                    <p className={s.error}>{error.address}</p>
                  )}
                </div>
                {/* Button */}

                <div className={s.loginButton}>
                  <button onClick={handleSubmit}>Create Account</button>
                </div>
                {/* <div className={s.googleBtn}>
                  <p id={s.googleOr}>Sign in With Google</p>
                  <LoginGoogle />
                </div> */}
              </form>
              <div className={s.loginSignup}>
                <span className="text">
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
