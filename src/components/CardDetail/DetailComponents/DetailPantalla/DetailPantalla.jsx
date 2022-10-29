import React from "react";

export default function DetailPantalla({ details }) {
  const {
    tiempoDeRespuesta,
    tipoDePanel,
    resolution,
    iluminacion,
    consumo,
    connectivity,
    RGB,
    peso,
    frequency,
    pulgadas,
  } = details;
  return (
    <>
      <span>
        <b>Tiempo de respuesta: </b>
        {tiempoDeRespuesta}
      </span>
      <span>
        <b>Tipo de panel: </b>
        {tipoDePanel}
      </span>
      <span>
        <b>Resolución: </b>
        {resolution}
      </span>
      <span>
        <b>Iluminación: </b>
        {iluminacion}
      </span>
      <span>
        <b>Consumo: </b>
        {consumo}
      </span>
      <span>
        <b>Conectividad: </b>
        {connectivity}
      </span>
      <span>
        <b>Luces RGB: </b>
        {RGB}
      </span>
      <span>
        <b>Peso: </b>
        {peso}
      </span>
      <span>
        <b>Frecuencia: </b>
        {frequency}
      </span>
      <span>
        <b>Pulgadas: </b>
        {pulgadas}
      </span>
    </>
  );
}
