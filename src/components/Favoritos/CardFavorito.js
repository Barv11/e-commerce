import React from "react";
import s from "./CardFavorito.module.css";
import { Link } from "react-router-dom";

export default function CardFavorito({
  deleteFav,
  discount,
  img,
  id,
  name,
  cost,
  brand,
}) {
  const discountCost = (discount * cost) / 100;

  return (
    <div className={s.container}>
      <Link id={s.link} to={"/detail/" + id}>
        <div className={s.imgContainer}>
          <img src={img[0]} />
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
        <h3>{brand}</h3>
        <div className={s.trashCan} onClick={() => deleteFav(id)}>
          <i class="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
