import React from "react";

export default function DetailGabinete({ details }) {
  const {
    dimensions,
    weight,
    cooling,
    color,
    material,
    RGB,
    connectivity,
  } = details;
  // structure type
  console.log(details)
  return (
    <>
      <span>
        <b>Material: </b>
        {material}
      </span>
      <span>
        <b>Luces: </b>
        {RGB ? "Yes" : "none"}
      </span>
      <span>
        <b>Estructura: </b>
        {details["structure type"]}
      </span>
      <span>
        <b>Conectividad: </b>
        <ul>
          <li>
            Disk:
            <ul>
              <li>{"HDD: " + connectivity.disk.hdd}</li>
              <li>{"SSD: " + connectivity.disk.ssd}</li>
              <li>{"Size: " + connectivity.disk.size_inch}</li>
            </ul>
          </li>
        </ul>
      </span>
      <span>
        <b>Enfriamiento: </b>
        <ul>
          <li>{"Front fans num: " + cooling.front_fans_num}</li>
          <li>
            {"Front fans dimension: "}
            <ul>
              {cooling.front_fans_dimension_mm?.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </li>
          <li>{"Back fans num: " + cooling.back_fans_num}</li>
          <li>
            {"Back fans num: "}
            <ul>
              {cooling.back_fans_dimension_mm?.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </li>
        </ul>
      </span>
      <span>
        <b>Color: </b>
        {color}
      </span>
      <span>
        <b>Fuente de Alimentación: </b>
        {connectivity.power_supply_type}
      </span>
      <span>
        <b>Tipo de Mother: </b>
        {connectivity.mother_types}
      </span>
      <span>
        <b>Máxima longitud PSU: </b>
        {connectivity.max_length_psu}
      </span>
      <span>
        <b>Máxima longitud GPU: </b>
        {connectivity.max_length_gpu}
      </span>
      <span>
        <b>Peso: </b>
        {weight}
      </span>
      <span>
        <b>Dimensiones: </b>
        {dimensions}
      </span>
    </>
  );
}
