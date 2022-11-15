import React from "react";
import { Link } from "react-router-dom";
import { CardProductosArmado } from "../../../components";
import s from "../ContainerProductosArmado/ContainerProductos.module.css";

function ContainerProductos({ items, title, handleAdded }) {
  return (
    <div className={s.container}>
      <h2>{`${title} :`}</h2>
      <div className={s.globalContainer}>
        {items?.map((e) => {
          return (
            // <Link to={"/detail/" + e.id}>
            <CardProductosArmado
              key={e.id}
              id={e.id}
              img={e.img[0]}
              name={e.name}
              brand={e.brand}
              cost={e.cost}
              type={e.type}
              handleAdded={handleAdded}
            />
            // </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContainerProductos;
