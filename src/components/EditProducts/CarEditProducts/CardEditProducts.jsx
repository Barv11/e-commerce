import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearProducts, deleteProduct, editDiscount, editStock } from "../../../redux/actions";
import s from "./CardEditProdducts.module.css";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useModal } from '../../Modals/useModal';
import Modal from '../../Modals/Modal';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';


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
}) {
  const dispatch = useDispatch();

  const capType = type[0].toUpperCase() + type.slice(1);

  const [descuento, setDescuento] = useState(discount);
  const [stockProd, setStockProd] = useState(stock);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  const handlerDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(clearProducts());
  };

  const handleDiscountSubmit = (id) => {
    dispatch(editDiscount(id, descuento));
    openModal1();
  };

  const handleStockSubmit = (id) => {
    dispatch(editStock(id, stockProd));
    openModal2();
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
          }
        }
        >
          <CheckRoundedIcon />
        </button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h1 className={s.modalTitle}>Descuento aplicado con éxito! <ThumbUpAltRoundedIcon/></h1>
          <p className={s.modalSubtitle}>{name} ahora tiene un {descuento}% de descuento.</p>
        </Modal>
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
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          <h1 className={s.modalTitle}>Stock modificado con éxito! <ThumbUpAltRoundedIcon/></h1>
          <p className={s.modalSubtitle}>El stock de {name} es ahora de {stockProd} unidades.</p>
        </Modal>
      </div>
    </div>
  );
}
