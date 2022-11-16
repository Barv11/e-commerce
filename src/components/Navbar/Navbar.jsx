import React, { useEffect } from "react";
// import MenuProducts from "../MenuProducts";
import { Link, NavLink, useNavigate } from "react-router-dom";
import s from "./Navbar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  clearCartProduct,
  saveToken,
  getCartProduct,
  addCartProduct,
  clearUser,
} from "../../redux/actions";
import pcLogo from "../../assets/pc-logo.png";
import usuarioLogo from "../../assets/user-login-icon.png";

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const cartProducts = useSelector((state) => state.cartProducts.data?.carts);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  localStorage.setItem("user", JSON.stringify(user));

  const userFound = useSelector((state) => state.userFound);
  const signOut = () => {
    dispatch(clearCartProduct());
    saveToken(null);
    setUser(
      JSON.parse(
        JSON.stringify({
          logged: false,
          token: "",
        })
      )
    );
    dispatch(clearUser())
    setTimeout(() => {
      navigate("/")
    }, 500);
  };


  useEffect(() => {
    setNumber(
      user.logged ? (cartProducts ? cartProducts.length : 0) : products.length
    );
  }, [cartProducts, products]);

  useEffect(() => {
    if (user.logged) {
      dispatch(getUser(user.token));
    }
  }, [dispatch]);
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <Link to="/" className={s.link}>
          <img src={pcLogo} alt="logo" className={s.logo} />
          <h1 className={s.mainTitle}>Gamer Tech</h1>
        </Link>
        <div className={s.containerChild}>
          {user.logged ? (
            <Link className={s.link} to={"/profile"}>
              {/* <img src={usuarioLogo} alt="usuario" className={s.userimg} /> */}
              <span className={s.userTxt}>{userFound?.userName}</span>
            </Link>
          ) : (
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <span className={s.userTxt}>
                Iniciar Sesión<i class="uil uil-sign-in-alt"></i>
              </span>
            </Link>
          )}
          {user.logged && (
            <span className={s.userTxt} onClick={signOut}>
              Cerrar Sesión<i class="uil uil-sign-out-alt"></i>
            </span>
          )}
          <Link style={{ textDecoration: "none" }} to="/carrito">
            <span data-foo={number} className={`${s.userTxt} ${s.carrito}`}>
              Carrito<i class="uil uil-shopping-cart"></i>
            </span>
          </Link>
        </div>
      </div>
      <div className={s.links}>
        <NavLink
          end
          to={"/"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          Inicio
        </NavLink>
        <NavLink
          to={"/products"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          Productos
        </NavLink>
        <NavLink
          to={"/armado"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          Arma tu PC
        </NavLink>
        <NavLink
          to={"/about"}
          className={(navData) => (navData.isActive ? s.activeChild : s.child)}
        >
          nosotros
        </NavLink>
        <div className={s.favoritesBtn}>
          <NavLink
            to={"/favoritos"}
            className={(navData) =>
              navData.isActive ? s.activeChild : s.child
            }
          >
            ❤
          </NavLink>
        </div>
        { userFound?.role && (userFound?.role === "admin" || userFound?.role === 'superAdmin') ? (
          <NavLink
            to={"/admin"}
            className={(navData) =>
              navData.isActive ? s.activeChild : s.child
            }
          >
            administración
          </NavLink>
        ) : null}
      </div>
    </nav>
  );
}
