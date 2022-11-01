import React from "react";
// import MenuProducts from "../MenuProducts";
import { Link, NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import pcLogo from "../../assets/pc-logo.png";
import usuarioLogo from "../../assets/user-login-icon.png";

export default function Navbar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (input) => {
    navigate("/products");
    dispatch(searchProductByName(input));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

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
          <svg
            onClick={() => handleSearch(input)}
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id={s.searchBtn}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
        <div className={s.containerChild}>
          <div className={s.user}>
            <Link to={"/login"}>
              <img src={usuarioLogo} alt="usuario" className={s.userimg} />
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <span className={s.userTxt}>Usuario</span>
            </Link>
          </div>
          <Link to="/carrito">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
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
        <NavLink
          to={"/create"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          Crear Producto
        </NavLink>
      </div>
    </nav>
  );
}
