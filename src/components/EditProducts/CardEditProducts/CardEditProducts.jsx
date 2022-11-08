import React from "react";
import { NavLink } from "react-router-dom";
import s from './CardEditProdducts.module.css'

export default function CardEditProducts(props) {
  const { id, img, name, type, brand, cost, details } = props.product;

  const capType = type[0].toUpperCase() + type.slice(1);

  return (
    <div key={id} className={s.container}>
      <span className={s.text}>{capType}</span>
      <span className={s.text}>{name}</span>
      <span className={s.text}>{brand}</span>
      <span className={s.text}>{cost}</span>
      
      <NavLink to={"/edit/"+id} className={s.link}><span className={s.edit}>Editar <i className="uil uil-edit"></i></span></NavLink>
      <NavLink to={"/detail/"+id} className={s.link}><span className={s.detail}>Detalle...</span></NavLink>
    </div>
  );
}
