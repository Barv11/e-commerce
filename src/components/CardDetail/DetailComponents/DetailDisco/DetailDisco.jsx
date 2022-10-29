import React from 'react'

export default function DetailDisco({details}) {
    const {type, capacity, frequency, bus, bufer, size} = details
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
        <b>Frecuencia: </b>
        {frequency}
      </span>
      <span>
        <b>Bus: </b>
        {bus}
      </span>
      <span>
        <b>Búfer: </b>
        {bufer}
      </span>
      <span>
        <b>Tamaño: </b>
        {size}
      </span>
    </>
  )
}
