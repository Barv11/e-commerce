import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWelcome } from "../../redux/actions";
import s from "./Welcome.module.css";

export default function Welcome() {
  const dispatch = useDispatch();
  const userFound = useSelector((state) => state.userFound);

  return (
    <div className={s.container}>
      <i class="uil uil-times" onClick={() => dispatch(setWelcome(false))}></i>
      <h1 className={s.title}>
        ¡Bienvenido {`${userFound?.firstName} ${userFound?.lastName}`}!
      </h1>
      <p className={s.text}>
        Comienza a explorar nuestra variedad de componentes, además de poder
        armar tu propia PC con componentes compatibles entre ellos.
      </p>
    </div>
  );
}
