import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  clearProducts,
  deleteProduct,
  getAllProductos,
} from "../../../redux/actions";
import s from "./CardEditProdducts.module.css";
import { editDiscount, editStock } from "../../../redux/actions";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useEffect } from "react";

export default function CardEditProducts({
  id,
  img,
  name,
  type,
  brand,
  cost,
  details,
  discount,
  stock,
  setType,
  setPage,
}) {
  const dispatch = useDispatch();

  const capType = type[0].toUpperCase() + type.slice(1);

  const [descuento, setDescuento] = useState(discount);
  const [stockProd, setStockProd] = useState(stock);

  const handlerDelete = () => {
    dispatch(deleteProduct(id));
    setType("defect");
    setPage(1);
    setTimeout(() => {
      dispatch(getAllProductos());
    }, 1000);
  };

  const handleDiscountSubmit = (id) => {
    dispatch(editDiscount(id, descuento));
    alert("Descuento Modificado con Exito.");
  };

  const handleStockSubmit = (id) => {
    dispatch(editStock(id, stockProd));
    alert("Stock Modificado con Exito.");
  };

  const handleChange = (e) => {
    setDescuento(e.target.value);
  };

  const handleChangeStock = (e) => {
    setStockProd(e.target.value);
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
      <div key={id} className={s.discountContainer}>
        <input
          id={s.inputDis}
          type="number"
          onChange={(e) => {
            handleChange(e);
          }}
          value={descuento}
        />
        <button
          onClick={() => {
            handleDiscountSubmit(id, descuento);
          }}
        >
          <CheckRoundedIcon />
        </button>
      </div>
      <div>
        <input
          id={s.inputDis}
          type="number"
          onChange={(e) => {
            handleChangeStock(e);
          }}
          value={stockProd}
        />
        <button
          onClick={() => {
            handleStockSubmit(id, stockProd);
          }}
        >
          <CheckRoundedIcon />
        </button>
      </div>
    </div>
  );
}
