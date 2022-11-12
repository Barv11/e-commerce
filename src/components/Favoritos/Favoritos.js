import React from "react";
import s from "./Favoritos.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import {
  getAllFavoritos,
  deleteFavorito,
  deleteAllFavorito,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CardFavorito from "./CardFavorito";
import { Link } from "react-router-dom";

export default function Favoritos() {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos);
  const userFound = useSelector((state) => state.userFound);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (user.logged) {
      dispatch(getAllFavoritos(userFound?.id));
    }
  }, [dispatch, userFound]);

  useEffect(() => {
    setFavs(favoritos);
  }, [favoritos]);

  const deleteFavProd = (productId) => {
    if (user.logged) {
      dispatch(deleteFavorito(productId, userFound?.id));
      setFavs((oldProducts) => oldProducts.filter((p) => p.id !== productId));
    }
  };

  const deleteFavs = () => {
    if (user.logged) {
      dispatch(deleteAllFavorito(userFound?.id));
      setFavs([]);
    }
  };

  return (
    <div className={s.mainContainer}>
      <Navbar />
      <div className={s.container}>
        <div className={s.textContainer}>
          <h4>Producto</h4>
          <div className={s.text}>
            <h4>Precio</h4>
            <h3>Marca</h3>
          </div>
        </div>
        {user.logged ? (
          favs.length ? (
            favs.map((el) => (
              <CardFavorito
                id={el.id}
                name={el.name}
                cost={el.cost}
                brand={el.brand}
                img={el.img}
                discount={el.discount}
                deleteFav={deleteFavProd}
              />
            ))
          ) : (
            <p id={s.p}>No existen Productos Favoritos</p>
          )
        ) : (
          <p id={s.p}>You Have to Login</p>
        )}
      </div>
      <div className={s.elseContainer}>
        <div className={s.clearCarritoContainer}>
          <Link to="/products">
            <button>
              <i class="uil uil-angle-left-b"></i>Seguir Comprando
            </button>
          </Link>
          <button id={s.borrarCarrito} onClick={() => deleteFavs()}>
            Borrar Favoritos
          </button>
        </div>
        {/* <div className={s.checkOutContainer}>
          <h3>
            {user.logged
              ? `$${totalDbProductsValue}`
              : `$${totalProductsValue}`}
          </h3>
          {user.logged ? (
            <Paybutton cartItem={dbProducts} />
          ) : (
            <Paybutton cartItem={products} />
          )}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
