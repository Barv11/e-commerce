import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getAllProductos,
  clearProducts,
  deleteProduct,
  editDiscount,
  editStock,
} from "../../../redux/actions";
import s from "./CardEditProdducts.module.css";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useModal } from "../../Modals/useModal";
import Modal from "../../Modals/Modal";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

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
  const userFound = useSelector((state) => state.userFound);

  const capType = type[0].toUpperCase() + type.slice(1);

  const [descuentoProd, setDescuentoProd] = useState(discount);
  const [stockProd, setStockProd] = useState(stock);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
console.log(descuentoProd, stockProd)
  const handlerDelete = () => {
    dispatch(deleteProduct(id));
    setType("defect");
    setPage(1);
    setTimeout(() => {
      dispatch(getAllProductos());
    }, 1000);
    openModal3();
  };

  const handleDiscountSubmit = () => {
    dispatch(editDiscount(id, descuentoProd));
    openModal1();
  };

  const handleStockSubmit = () => {
    dispatch(editStock(id, stockProd));
    openModal2();
  };

  const handleChange = (e) => {
    setDescuentoProd(e.target.value);
  };

  const handleChangeStock = (e) => {
    setStockProd(e.target.value);
  };

  return (
    <div key={id} className={s.container}>
      <span className={s.text}>{capType}</span>
      <NavLink to={"/detail/" + id} className={s.text}>
        {name}
      </NavLink>
      <span className={s.text}>{brand}</span>
      <span className={s.text}>{cost}</span>

      <NavLink to={"/edit/product/" + id} className={s.link}>
        <span className={s.edit}>
          Editar <i className="uil uil-edit"></i>
        </span>
      </NavLink>
      <span className={s.delete} onClick={handlerDelete}>
        <i class="uil uil-trash-alt"></i>
      </span>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        {userFound.role !== "superAdmin" ? (
          <>
            <h1 className={s.modalTitle}>
              No tienes los permisos suficientes <ThumbUpAltRoundedIcon />
            </h1>
          </>
        ) : (
          <>
            <h1 className={s.modalTitle}>
              ¡Producto Eliminado! <ThumbUpAltRoundedIcon />
            </h1>
            <p className={s.modalSubtitle}>
              El producto ha sido eliminado, puedes restaurarlo desde la
              papelera.
            </p>
          </>
        )}
      </Modal>
      <div key={id} className={s.discountContainer}>
        %{" "}
        <input
          id={s.inputDis}
          type="number"
          onChange={handleChange}
          value={descuentoProd}
        />
        <button
          onClick={handleDiscountSubmit}
        >
          <CheckRoundedIcon />
        </button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          {userFound.role !== "superAdmin" ? (
            <>
              <h1 className={s.modalTitle}>
                No tienes los permisos suficientes <ThumbUpAltRoundedIcon />
              </h1>
            </>
          ) : (
            <>
              <h1 className={s.modalTitle}>
                Descuento aplicado con éxito! <ThumbUpAltRoundedIcon />
              </h1>
              <p className={s.modalSubtitle}>
                {name} ahora tiene un {descuentoProd}% de descuento.
              </p>
            </>
          )}
        </Modal>
      </div>
      <div className={s.stock}>
        <input
          id={s.inputDis}
          type="number"
          onChange={handleChangeStock}
          value={stockProd}
        />{" "}
        uds.
        <button
          onClick={handleStockSubmit}
        >
          <CheckRoundedIcon />
        </button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
          {userFound.role !== "superAdmin" && userFound.role !== "admin" ? (
            <>
              <h1 className={s.modalTitle}>
                No tienes los permisos suficientes <ThumbUpAltRoundedIcon />
              </h1>
            </>
          ) : (
            <>
              <h1 className={s.modalTitle}>
                Stock modificado con éxito! <ThumbUpAltRoundedIcon />
              </h1>
              <p className={s.modalSubtitle}>
                El stock de {name} es ahora de {stockProd} unidades.
              </p>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}
