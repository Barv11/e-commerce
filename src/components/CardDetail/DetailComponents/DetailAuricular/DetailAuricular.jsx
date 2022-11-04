import React from "react";

export default function DetailAuricular({details}) {
    const { audio, color, conexion, microfono, TipoDeAudio } = details
  return (
    <>
      <span>
        <b>Audio: </b>
        {audio}
      </span>
      <span>
        <b>Color: </b>
        <ul>
              {color?.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
      </span>
      <span>
        <b>Conectividad: </b>
        {conexion}
      </span>
      <span>
        <b>Micrófono: </b>
        {microfono}
      </span>
      <span>
        <b>Tipo de Audio: </b>
        {TipoDeAudio}
      </span>
    </>
  );
}
