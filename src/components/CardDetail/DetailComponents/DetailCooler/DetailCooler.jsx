import React from 'react'

export default function DetailCooler({details}) {
    const {fans, RGB, consumo, tdp, disipasión, dimensions, compatibilidad} = details
    // nivel de ruido
  return (
    <>
      <span>
        <b>Fans: </b>
        {fans}
      </span>
      <span>
        <b>Nidel de Ruido: </b>
        {details["nivel de ruido"]}
      </span>
      <span>
        <b>Luces: </b>
        {RGB?"Yes":"none"}
      </span>
      <span>
        <b>Consumo: </b>
        {consumo}
      </span>
      <span>
        <b>{"Potencia de diseño térmico (TPD)"}: </b>
        {tdp}
      </span>
      <span>
        <b>Disipación: </b>
        {disipasión}
      </span>
      <span>
        <b>Compatibilidad: </b>
        <ul>
              {compatibilidad?.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
      </span>
      <span>
        <b>Dimensiones: </b>
        <ul>
            <li>Altura: {dimensions.altura}</li>
            <li>Tamaño del cooler: {dimensions.tamaño_coolers}</li>
        </ul>
      </span>
    </>

  )
}
