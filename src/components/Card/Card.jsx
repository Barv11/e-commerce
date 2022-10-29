import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card({component}) {

  const {id, name, brand, img, cost} = component

  return (
    <div className={s.card}>
      <img
        src={img[0]}
        alt={name}
        className={s.img}
      />
      <h3 className={s.name}>{name}</h3>
      <p className={s.cost}>{`$${cost}`}</p>
      <Link to={"/product/"+id} className={s.detail}>
        <span>Ver más</span>
      </Link>
    </div>
  );
}
