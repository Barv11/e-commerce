import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../Modals/useModal";
import Modal from "../../Modals/Modal";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import s from "./CardRemovedProducts.module.css";
import { getDeleteProducts, restoreProduct } from "../../../redux/actions";

export default function CardRemovedProducts({ id, name, type, brand, cost }) {
  const dispatch = useDispatch();
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const capType = type[0].toUpperCase() + type.slice(1);



  const handlerRestore = () => {
    dispatch(restoreProduct(id));
    setTimeout(() => {
      dispatch(getDeleteProducts());
    }, 1000);
    openModal1();
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
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h1 className={s.modalTitle}>
          Producto Restaurado <ThumbUpAltRoundedIcon />
        </h1>
      </Modal>
    </div>
  );
}
