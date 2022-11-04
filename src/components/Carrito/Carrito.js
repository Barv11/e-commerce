import React, { useEffect } from "react";
import s from "./Carrito.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CardCarrito from "./CardCarrito";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartProduct,
  addCartProduct,
  deleteCartProduct,
} from "../../redux/actions";
import Paybutton from "../PayButton/Paybutton";

export default function Carrito() {
  const dispatch = useDispatch();
  const userFound = useSelector((state) => state.userFound);
  const cartProducts = useSelector((state) => state.cartProducts.data?.carts);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  const [loading, setLoading] = useState(true);

  const [dbProducts, setDbProducts] = useState([]);

  localStorage.setItem("products", JSON.stringify(products));

  // useEffect(() => {
  //   if (user.logged) {
  //     dispatch(addCartProduct(userFound.id, products));
  //     dispatch(getCartProduct(userFound.id));
  //     setProducts([]);
  //     setProducts(cartProducts);
  //   }
  // }, []);

  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const fn = async () => {
      await dispatch(getCartProduct(userFound.id));
      if (user.logged) {
        if (cartProducts?.length < 1) {
          await dispatch(addCartProduct(userFound.id, products));
          await dispatch(getCartProduct(userFound.id));
          setProducts([]);
        } else {
          await dispatch(getCartProduct(userFound.id));
          setProducts([]);
        }
      }
    };
    fn();
    setLoading(false);
  }, [userFound, dispatch, addCartProduct]);

  localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    setDbProducts(cartProducts);
  }, [cartProducts]);

  const handleCartQuantity = (id, quantity) => {
    if (user.logged) {
      let finalProducts = [
        ...dbProducts.map((el, index) => {
          if (el.id === id) {
            dbProducts[index].quantity = Number(quantity);
          }
          return el;
        }),
      ];
      setDbProducts(finalProducts);
    } else {
      let finalProducts = [
        ...products.map((el, index) => {
          if (el.id === id) {
            products[index].quantity = Number(quantity);
          }
          return el;
        }),
      ];
      setProducts(finalProducts);
    }
  };

  const deleteCartProd = (id) => {
    if (user.logged) {
      dispatch(deleteCartProduct(id));
      setDbProducts((oldProducts) => oldProducts.filter((p) => p.id !== id));
    }
    setProducts((oldProducts) => oldProducts.filter((p) => p.id !== id));
  };

  const deleteCart = () => {
    if (user.logged) {
      dbProducts.map((p) => {
        deleteCartProd(p.id);
      });
    } else {
      setProducts([]);
    }
  };

  const totalProductsValue = products?.reduce((acc, p) => {
    return acc + p.cost * p.quantity;
  }, 0);

  const totalDbProductsValue = dbProducts?.reduce((acc, p) => {
    return acc + p.cost * p.quantity;
  }, 0);

  return (
    <div className={s.mainContainer}>
      <Navbar />
      <div className={s.container}>
        <div className={s.textContainer}>
          <h4>Producto</h4>
          <div className={s.text}>
            <h4>Precio</h4>
            <h4>Cantidad</h4>
            <h4>Sub Total</h4>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : user.logged ? (
          dbProducts?.length ? (
            dbProducts.map((p) => (
              <CardCarrito
                key={p.id}
                id={p.id}
                name={p.name}
                img={p.img}
                cost={p.cost}
                deleteCartProd={deleteCartProd}
                handleCartQuantity={handleCartQuantity}
                quantity={p.quantity}
              />
            ))
          ) : (
            <p id={s.p}>No hay items en el Carrito</p>
          )
        ) : products.length ? (
          products?.map((p) => (
            <CardCarrito
              key={p.id}
              id={p.id}
              name={p.name}
              img={p.img}
              cost={p.cost}
              deleteCartProd={deleteCartProd}
              handleCartQuantity={handleCartQuantity}
              quantity={p.quantity}
            />
          ))
        ) : (
          <p id={s.p}>No hay items en el Carrito</p>
        )}
      </div>
      <div className={s.elseContainer}>
        <div className={s.clearCarritoContainer}>
          <Link to="/products">
            <button>
              <i class="uil uil-angle-left-b"></i>Seguir Comprando
            </button>
          </Link>
          <button id={s.borrarCarrito} onClick={() => deleteCart()}>
            Borrar Carrito
          </button>
        </div>
        <div className={s.checkOutContainer}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
