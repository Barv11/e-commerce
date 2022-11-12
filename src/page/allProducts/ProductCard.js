import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./ProductCard.module.css";
import { useModal } from '../../components/Modals/useModal';
import Modal from '../../components/Modals/Modal';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';


export default function ProductCard(props) {
  // const [cartState, setCartState] = useState(false);

  const dis = props.discount;

  const discountCost = (dis * props.cost) / 100;
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div className={s.container}>
      {dis > 0 ? (
        <span className={s.discount}>
          <div className={s.disNum}>{`${dis}% OFF!`}</div>
        </span>
      ) : null}
      {/* <div className={s.cart} onClick={() => props.cart(props)}>
        <i class="uil uil-shopping-cart"></i>
      </div> */}
      <div className={s.imgContainer}>
        <img src={props.img} alt={props.name} />
      </div>
      <p id={s.nombre}>{props.name}</p>
      <p id={dis > 0 ? s.disPrice : s.precio}>{`$${props.cost}`}</p>
      {dis > 0 ? <p id={s.disCost}>{`$${props.cost - discountCost}`}</p> : null}
      <NavLink to={"/detail/" + props.id} className={s.button}>
        Ver más
      </NavLink>
      <div className={s.cart2} onClick={() => props.cart(props)}>
        <span className={s.add}>Add to cart</span>
        <i className="uil uil-shopping-cart"></i>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <h1 className={s.modalTitle}>Producto agregado a tu carrito <ThumbUpAltRoundedIcon/></h1>
              <p className={s.modalSubtitle}>Agregaste el producto a tu carrito exitosamente!</p>
          </Modal>
      </div>
    </div>
  );
}
