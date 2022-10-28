import React from "react";

export default function DetailProcesador({ details }) {
  const {
    Modelo,
    Socket,
    Núcleos,
    Frecuencia,
    Proceso_De_Fabricación,
    Gpu,
    Hilos,
    Frecuencia_Turbo,
  } = details;
  return (
    <>
      <span>
        <b>Modelo: </b>
        {Modelo}
      </span>
      <span>
        <b>Enchufe: </b>
        {Socket}
      </span>
      <span>
        <b>Núcleos: </b>
        {Núcleos}
      </span>
      <span>
        <b>Frecuencia: </b>
        {Frecuencia}
      </span>
      <span>
        <b>Proceso de Fabricación: </b>
        {Proceso_De_Fabricación}
      </span>
      <span>
        <b>GPU: </b>
        {Gpu}
      </span>
      <span>
        <b>Hilos: </b>
        {Hilos}
      </span>
      <span>
        <b>Frecuencia Turbo: </b>
        {Frecuencia_Turbo}
      </span>
    </>
  );
}
