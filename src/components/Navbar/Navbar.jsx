import React, { useEffect } from "react";
// import MenuProducts from "../MenuProducts";
import { Link, NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProductByName,
  getUser,
  clearCartProduct,
  saveToken
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import pcLogo from "../../assets/pc-logo.png";
import usuarioLogo from "../../assets/user-login-icon.png";

export default function Navbar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userFound = useSelector((state) => state.userFound);

  const signOut = () => {
    dispatch(clearCartProduct());
    saveToken(null)
        setUser(
      JSON.parse(
        JSON.stringify({
          logged: false,
          token: "",
        })
      )
    );
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  localStorage.setItem("user", JSON.stringify(user));

  const handleSearch = (input) => {
    navigate("/products");
    dispatch(searchProductByName(input));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (user.logged) {
      dispatch(getUser(user.token));
    }
  }, [dispatch]);

  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <Link to="/">
          <img src={pcLogo} alt="logo" className={s.logo} />
        </Link>
        <h1 className={s.mainTitle}>Gamer Tech</h1>
        <form className={s.form} onSubmit={() => handleSearch(input)}>
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder="Buscador"
          />
          <i className="uil uil-search"></i>
        </form>
        <div className={s.containerChild}>
          <div className={s.user}>
            {user.logged && (
              <span
                style={{ textDecoration: "none" }}
                onClick={() => signOut()}
                className={s.userTxt}
              >
                Sign Out
              </span>
            )}

            {user.logged ? (
              <Link to={"/profile"}>
                <img src={usuarioLogo} alt="usuario" className={s.userimg} />
              </Link>
            ) : (
              <Link to={"/login"}>
                <img src={usuarioLogo} alt="usuario" className={s.userimg} />
              </Link>
            )}
            {user.logged ? (
              <Link style={{ textDecoration: "none" }} to={"/profile"}>
                <span className={s.userTxt}>{userFound?.userName}</span>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <span className={s.userTxt}>Log In</span>
              </Link>
            )}
          </div>
          <Link to="/carrito">
          <i class="uil uil-shopping-cart"></i>
          </Link>
        </div>
      </div>
      <div className={s.links}>
        <NavLink
          end
          to={"/"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          Productos
        </NavLink>
      </div>
    </nav>
  );
}
