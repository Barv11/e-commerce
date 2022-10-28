import React from "react";
import s from "./Especificaciones.module.css";

export default function Especificaciones({ detail }) {
  const {
    description,
    connectivity,
    rgb,
    sensitivity,
    buttons,
    clicks,
    sizes,
    weight,
  } = detail;

  

  return (
    <div className={s.wrap}>
      <div className={s.line}>
        <h2 className={s.title}>Especificaciones</h2>
      </div>
      <div className={s.container}>
        {description ? (
          <span>
            <b>Descripción: </b>
            {description}
          </span>
        ) : null}
        {connectivity ? (
          <span>
            <b>Conectividad:</b>
            <ul>
              {connectivity?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </span>
        ) : null}
        {rgb ? (
          <span>
            <b>Luces:</b> {rgb}
          </span>
        ) : null}
        {sensitivity ? (
          <span>
            <b>{`Sensibilidad (DPI):`}</b>
            {sensitivity}
          </span>
        ) : null}
        {buttons ? (
          <span>
            <b>Botónes programables:</b> {buttons}
          </span>
        ) : null}
        {clicks ? (
          <span>
            <b>Clicks:</b> {clicks}
          </span>
        ) : null}
        {sizes ? (
          <span>
            <b>Dimensiones:</b>
            <ul>
              {sizes?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </span>
        ) : null}
        {weight ? (
          <span>
            <b>Peso:</b> {weight}
          </span>
        ) : null}
      </div>
    </div>
  );
}
