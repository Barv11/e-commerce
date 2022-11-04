import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./ProductCard.module.css";

export default function ProductCard(props) {

  const [cartState, setCartState] = useState(false)

  return (
    <div className={s.container}>
      <div className={s.cart} onClick={() => props.cart(props)}>
        <i class="uil uil-shopping-cart"></i>
      </div>
      <div className={s.imgContainer}>
        <img src={props.img} alt={props.name} />
      </div>
      <p id={s.nombre}>{props.name}</p>
      <p id={s.precio}>{`$${props.cost}`}</p>
      <NavLink to={"/detail/" + props.id} className={s.button}>
        Ver más
      </NavLink>
    </div>
  );
}
