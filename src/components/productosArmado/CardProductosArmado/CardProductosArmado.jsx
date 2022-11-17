import React from "react";
import s from "./CardProductosArmado.module.css";
function CardProductosArmado({
  id,
  name,
  brand,
  img,
  details,
  type,
  cost,
  handleAdded,
}) {
  return (
    <div className={s.container}>
      <div className={s.contimg}>
        <img src={img} alt="name" className={s.image} />
      </div>
      <span className={s.name}>{name}</span>
      <span className={s.brand}>{brand}</span>
      <span className={s.brand}>${cost}</span>
      <button id={s.addBtn} onClick={handleAdded} value={id}>
        Add
      </button>
    </div>
  );
}

export default CardProductosArmado;
