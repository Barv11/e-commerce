import React from "react";
import { useDispatch } from "react-redux";
import s from "./CardRemovedProducts.module.css";
import { getDeleteProducts, restoreProduct } from "../../../redux/actions";

export default function CardRemovedProducts({ id, name, type, brand, cost }) {
  const dispatch = useDispatch();
  const capType = type[0].toUpperCase() + type.slice(1);

  const handlerRestore = () => {
    dispatch(restoreProduct(id));
    setTimeout(() => {
      dispatch(getDeleteProducts());
    }, 1000);
  };

  return (
    <div key={id} className={s.container}>
      <span className={s.text}>{capType}</span>
      <span className={s.text}>{name}</span>
      <span className={s.text}>{brand}</span>
      <span className={s.text}>{cost}</span>
      <span className={s.restore} onClick={handlerRestore}>
        Restablecer <i class="uil uil-history"></i>
      </span>
    </div>
  );
}
