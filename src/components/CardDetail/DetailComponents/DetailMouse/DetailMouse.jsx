import React from "react";

export default function DetailMouse({ details }) {
  const {
    description,
    connectivity,
    rgb,
    sensitivity,
    buttons,
    clicks,
    sizes,
    weight,
  } = details;
  return (
    <>
      <span>
        <b>Descripción: </b>
        {description}
      </span>

      <span>
        <b>Conectividad:</b>
        <ul>
          {connectivity?.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </span>

      <span>
        <b>Luces:</b> {rgb}
      </span>
      <span>
        <b>{`Sensibilidad (DPI): `}</b>
        {sensitivity}
      </span>
      <span>
        <b>Botónes programables: </b>
        {buttons}
      </span>
      <span>
        <b>Clicks:</b> {clicks}
      </span>

      <span>
        <b>Dimensiones:</b>
        <ul>
          {Object.entries(sizes).map(
            ([key, value], el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>

      <span>
        <b>Peso:</b> {weight}
      </span>
    </>
  );
}
