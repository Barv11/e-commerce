import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Login.module.css";
import validate from "./validator";
import LoginGoogle from "../loginGoogle/loginGoogle";
import { userLogin, userLogout } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

export default function Login() {
  const [passEye, setPassEye] = useState(false);
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const loginAccess = useSelector((state) => state.loginAccess);
  const [loading, setLoading] = useState(false);

  const toggleEye = () => {
    setPassEye(!passEye);
  };

  const [input, setInput] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const [click, setClick] = useState({
    username: false,
    email: false,
    pass: false,
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

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length && input.pass !== "") {
      dispatch(userLogin(input));
      if (!loginAccess.data) {
        setLoginError(true);
      }
    } else {
      setClick({
        username: true,
        email: true,
        pass: true,
      });
    }
  };
  useEffect(() => {
    if (loginAccess.data) {
      navigate("/");
      dispatch(userLogout());
    }
  }, [loginAccess]);

  console.log(error);

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

  return (
    <div className={s.container}>
      <div className={s.formMainContainer}>
        <div className={s.formContainer}>
          <div className={s.forms}>
            <div className={s.formLogin}>
              <span className={s.title}>Login</span>
              <form action="#">
                <div className={s.inputField}>
                  <input
                    type="text"
                    value={input.username}
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Username"
                    onClick={handleClick}
                    required
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.username && error.username && (
                    <p className={s.error}>{error.username}</p>
                  )}
                </div>
                <p className={s.Or}>Or</p>
                <div id={s.id} className={s.inputField}>
                  <input
                    type="text"
                    value={input.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    onClick={handleClick}
                    required
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.email && error.email && (
                    <p className={s.error}>{error.email}</p>
                  )}
                </div>
                <div className={s.line}></div>
                <div className={s.inputField}>
                  <i
                    id={s.eye}
                    class={!passEye ? "uil uil-eye-slash" : "uil uil-eye"}
                    onClick={toggleEye}
                  ></i>
                  <input
                    type={!passEye && "password"}
                    placeholder="Password"
                    name="pass"
                    onChange={handleInputChange}
                    onClick={handleClick}
                    value={input.pass}
                    required
                  />
                  <i class="uil uil-lock"></i>
                  {click.pass && error.pass && (
                    <p className={s.error}>{error.pass}</p>
                  )}
                </div>
                <div className={s.checkboxText}>
                  <div className={s.checkboxContent}>
                    <input type="checkbox" id="logCheck" />
                    <label for="logCheck" className="text">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className={s.text}>
                    Forgot password?
                  </a>
                </div>

                <div className={s.loginButton}>
                  <button onClick={handleSubmit}>
                    {loading ? <Loader /> : "Login Now"}
                  </button>
                </div>
                {loginError && (
                  <p className={s.loginError}>Email o Contraseña incorrectos</p>
                )}
              </form>
              <div className={s.googleBtn}>
                <p id={s.googleOr}>Sign in With Google</p>
                <LoginGoogle />
              </div>
              <div className={s.loginSignup}>
                <span className="text">
                  Not a member? <Link to="/register">SignUp Now</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
