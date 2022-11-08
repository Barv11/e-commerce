import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearProducts, deleteProduct } from "../../../redux/actions";
import s from "./CardEditProdducts.module.css";

export default function CardEditProducts(props) {
  const dispatch = useDispatch();
  const { id, img, name, type, brand, cost, details } = props.product;

  const capType = type[0].toUpperCase() + type.slice(1);

  const handlerDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(clearProducts());
  };

  return (
    <div key={id} className={s.container}>
      <span className={s.text}>{capType}</span>
      <span className={s.text}>{name}</span>
      <span className={s.text}>{brand}</span>
      <span className={s.text}>{cost}</span>

      <NavLink to={"/edit/" + id} className={s.link}>
        <span className={s.edit}>
          Editar <i className="uil uil-edit"></i>
        </span>
      </NavLink>
      <span className={s.delete} onClick={handlerDelete}>
        <i class="uil uil-trash-alt"></i>
      </span>
    </div>
  );
}
