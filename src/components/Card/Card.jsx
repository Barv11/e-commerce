import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card() {
  return (
    <div className={s.card}>
      <img
        src="https://coolboxpe.vtexassets.com/arquivos/ids/187720-800-auto?v=637623174160400000&width=800&height=auto&aspect=true"
        alt="name"
        className={s.img}
      />
      <h3 className={s.name}>Nombre</h3>
      <p className={s.cost}>$299.99</p>
      <Link to={"/product/id"} className={s.detail}>
        <span>Ver más</span>
      </Link>
    </div>
  );
}
