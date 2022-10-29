import React from "react";

export default function DetailRam({ details }) {
  const {
    type,
    format,
    frequency,
    capacity,
    latency,
    voltage,
    RGB,
    disipador,
  } = details;
  return (
    <>
      <span>
        <b>Tipo: </b>
        {type}
      </span>
      <span>
        <b>Formato: </b>
        {format}
      </span>
      <span>
        <b>Frecuencia: </b>
        {frequency}
      </span>
      <span>
        <b>Capacidad: </b>
        {capacity}
      </span>
      <span>
        <b>Latencia: </b>
        <ul>
          {Object.entries(latency).map(
            ([key, value]) => (
              <li>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Voltage: </b>
        {voltage}
      </span>
      <span>
        <b>Luces: </b>
        {RGB? 'Yes' : 'No'}
      </span>
      <span>
        <b>Disipador: </b>
        {disipador? 'Yes' : 'No'}
      </span>
    </>
  );
}
