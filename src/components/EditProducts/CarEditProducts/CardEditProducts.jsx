import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearProducts, deleteProduct } from "../../../redux/actions";
import s from "./CardEditProdducts.module.css";
import { editDiscount, editStock } from "../../../redux/actions";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default function CardEditProducts(props) {
  const dispatch = useDispatch();
  const { id, img, name, type, brand, cost, details, discount, stock } = props.product;

  const capType = type[0].toUpperCase() + type.slice(1);

  const [descuento, setDescuento] = useState(discount)
  const [stockProd, setStockProd] = useState(stock)
  console.log(discount)
  console.log(stock)

  const handlerDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(clearProducts());
  };

  const handleDiscountSubmit = (id) => {
    dispatch(editDiscount(id, descuento));
  }

  const handleStockSubmit = (id) => {
    dispatch(editStock(id, stockProd));
  }

  const handleChange = (e) => {
    setDescuento(e.target.value);
  }

  const handleChangeStock = (e) => {
    setStockProd(e.target.value)
  }

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
        <input id={s.inputDis} type="number"
               onChange={(e) => {handleChange(e)}}
               value={descuento}
               placeholder={discount}
              />
        <button onClick={() => {handleDiscountSubmit(id, descuento)}}><CheckRoundedIcon/></button>
      </div>
      <div>
      <input id={s.inputDis} type="number"
               onChange={(e) => {handleChangeStock(e)}}
               value={stockProd}
               placeholder={stock}
              />
        <button onClick={() => {handleStockSubmit(id, stockProd)}}><CheckRoundedIcon/></button>
      </div>
    </div>
  );
}
