import React from "react";

export default function DetailMother({ details }) {
  const { connectivity, Socket, energy, Sound, Memory, Dimensions } = details;

  return (
    <>
      <span>
        <b>Conectividad:</b>
        <ul>
          {Object.entries(connectivity).map(
            ([key, value] , el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Enchufe: </b>
        <ul>
          {Socket?.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </span>
      <span>
        <b>Energía: </b>
        <ul>
          {Object.entries(energy).map(
            ([key, value], el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Sonido: </b>
        <ul>
          {Object.entries(Sound).map(
            ([key, value], el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Memoría: </b>
        <ul>
          {Object.entries(Memory).map(
            ([key, value], el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Dimensiones: </b>
        {Dimensions}
      </span>
    </>
  );
}
