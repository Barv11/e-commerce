import React from "react";

export default function DetailTeclado({ details }) {
  const {
    RGB,
    color,
    connectivity,
    tipo_de_teclado,
    tipo_de_mecanismo,
    dimensions,
  } = details;
  return (
    <>
      <span>
        <b>Luces: </b>
        {RGB? ' Yes' : ' No'}
      </span>
      <span>
        <b>Color: </b>
        {color}
      </span>
      <span>
        <b>Conectividad: </b>
        {connectivity}
      </span>
      <span>
        <b>Tipo de teclado: </b>
        {tipo_de_teclado}
      </span>
      <span>
        <b>Tipo de mecanismo: </b>
        {tipo_de_mecanismo}
      </span>
      <span>
        <b>Dimensiones: </b>
        <ul>
          {Object.entries(dimensions).map(
            ([key, value]) => (
              <li>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
    </>
  );
}
