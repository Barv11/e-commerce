import React from 'react'

export default function DetailSolido({details}) {
    const {type, capacity, bus, size, lectura, escritura} = details
  return (
    <>
        <span>
        <b>Tipo: </b>
        {type}
      </span>
      <span>
        <b>Capacidad: </b>
        {capacity}
      </span>
      <span>
        <b>Bus: </b>
        {bus}
      </span>
      <span>
        <b>Tamaño: </b>
        {size}
      </span>
      <span>
        <b>Lectura: </b>
        {lectura}
      </span>
      <span>
        <b>Escritura: </b>
        {escritura}
      </span>
    </>
  )
}
