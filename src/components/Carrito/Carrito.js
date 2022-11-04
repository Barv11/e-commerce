import React from "react";
import s from "./Carrito.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CardCarrito from "./CardCarrito";
import { useState } from "react";
import { Link } from "react-router-dom";
import Paybutton from "../PayButton/Paybutton";

export default function Carrito() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const [quantity, setQuantity] = useState(1);

  const handleCartQuantity = (id, quantity) => {
    let finalProducts = [
      ...products.map((el, index) => {
        if (el.id === id) {
          products[index].quantity = Number(quantity);
        }
        return el;
      }),
    ];
    setProducts(finalProducts);
    setQuantity(quantity);
  };

  localStorage.setItem("products", JSON.stringify(products));

  const deleteCartProduct = (id) => {
    setProducts((oldProducts) => oldProducts.filter((p) => p.id !== id));
  };

  const deleteCart = () => {
    setProducts([]);
    localStorage.setItem("products", JSON.stringify([]));
  };

  const totalProductsValue = products.reduce((acc, p) => {
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
        {products.length ? (
          products.map((p) => (
            <CardCarrito
              id={p.id}
              name={p.name}
              img={p.img}
              cost={p.cost}
              deleteCartProduct={deleteCartProduct}
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
          <h3>{`$${totalProductsValue}`}</h3>
          <Paybutton cartItem={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
