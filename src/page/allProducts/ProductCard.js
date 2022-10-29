import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ProductCard.module.css";

export default function ProductCard(props) {
  return (
    <div className={s.container}>
      <img src={props.img} alt={props.name} />
      <p id={s.nombre}>{props.name}</p>
      <p id={s.precio}>{`$${props.cost}`}</p>
      <NavLink to={'/detail/'+props.id} className={s.button}>Ver más</NavLink>
    </div>
  );
}
