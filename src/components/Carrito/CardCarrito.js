import React from "react";
import s from "./CardCarrito.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardCarrito({
  name,
  img,
  cost,
  id,
  deleteCartProd,
  handleCartQuantity,
  quantity,
  discount,
}) {
  const [cantidad, setCantidad] = useState(quantity);


  const discountCost = (discount * cost) / 100;

  const handleCantidad = (e) => {
    handleCartQuantity(id, e.target.value);
    setCantidad(e.target.value);
  };

  return (
    <div className={s.container}>
      <Link id={s.link} to={"/detail/" + id}>
        <div className={s.imgContainer}>
          <img src={img} alt={name} />
          <h3>{name}</h3>
        </div>
      </Link>
      <div className={s.textContainer}>
        {discount === 0 ? (
          <h3>{`$${cost}`}</h3>
        ) : (
          <div className={s.costContainer}>
            <h5>{`$${cost}`}</h5>
            <h3>{`$${cost - discountCost}`}</h3>
          </div>
        )}

        <input
          onChange={(e) => handleCantidad(e)}
          type="number"
          min="1"
          max="3"
          value={quantity}
        />
        <h3>
          {discount === 0
            ? `$${cost * quantity}`
            : `$${(cost - discountCost) * quantity}`}
        </h3>
        <div className={s.trashCan} onClick={() => deleteCartProd(id)}>
          <i class="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
