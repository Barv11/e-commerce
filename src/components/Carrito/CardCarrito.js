import React from "react";
import s from "./CardCarrito.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardCarrito({
  name,
  img,
  cost,
  id,
  deleteCartProduct,
}) {
  const [cantidad, setCantidad] = useState(1);

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

    const handleCantidad = (e) => {
      setProducts([
        ...products,
      ]);
      setCantidad(e.target.value);
    };

//   localStorage.setItem("products", JSON.stringify(products));

  return (
    <div className={s.container}>
      <Link id={s.link} to={"/detail/" + id}>
        <div className={s.imgContainer}>
          <img src={img} />
          <h3>{name}</h3>
        </div>
      </Link>
      <div className={s.textContainer}>
        <h3>{`$${cost}`}</h3>
        <input
          onChange={(e) => handleCantidad(e)}
          type="number"
          min="1"
          max="3"
          placeholder={cantidad}
        />
        <h3>{`$${cost * 1}`}</h3>
        <div className={s.trashCan} onClick={() => deleteCartProduct(id)}>
          <i class="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
