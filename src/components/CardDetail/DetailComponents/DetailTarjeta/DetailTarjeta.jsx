import React from "react";

export default function DetailTarjeta({ details }) {
  const {
    tipo,
    chipsetGpu,
    CaracteristicasEspeciales,
    dimensiones,
    conectividad,
    consumo,
    wattsRecomendados,
    CantidadPcieDe6Pines,
    CantidadPcieDe8Pines,
    backplate,
    BlockVgaWaterCooling,
    cantidadCooler,
    velocidadMemoria,
    tipoDeMemoria,
    CapasidadDeMemoria,
    interfaceDeMemoria,
    VelosidadCoreTurbo,
    tipoDeProcesos,
    CantidadDeProcesos,
  } = details;
  return (
    <>
      <span>
        <b>Tipo: </b>
        {tipo}
      </span>
      <span>
        <b>Chipset GPU: </b>
        {chipsetGpu}
      </span>
      <span>
        <b>Características: </b>
        {CaracteristicasEspeciales}
      </span>
      <span>
        <b>Dimensiones: </b>
        {dimensiones}
      </span>
      <span>
        <b>Conectividad: </b>
        {conectividad}
      </span>
      <span>
        <b>Consumo: </b>
        {consumo}
      </span>
      <span>
        <b>Watts Recomendados: </b>
        {wattsRecomendados}
      </span>
      <span>
        <b>Cantidad PCIE de 6 pines : </b>
        {CantidadPcieDe6Pines}
      </span>
      <span>
        <b>Cantidad PCIE de 8 pines : </b>
        {CantidadPcieDe8Pines}
      </span>
      <span>
        <b>Backplate: </b>
        {backplate}
      </span>
      <span>
        <b>Block VGA Water Cooling: </b>
        {BlockVgaWaterCooling}
      </span>
      <span>
        <b>Cantidad de Coolers: </b>
        {cantidadCooler}
      </span>
      <span>
        <b>Velocidad de Memoria: </b>
        {velocidadMemoria}
      </span>
      <span>
        <b>Tipo de Memoria: </b>
        {tipoDeMemoria}
      </span>
      <span>
        <b>Capacidad de Memoria: </b>
        {CapasidadDeMemoria}
      </span>
      <span>
        <b>Interface de Memoria: </b>
        {interfaceDeMemoria}
      </span>
      <span>
        <b>Velocidad de Memoria: </b>
        {velocidadMemoria}
      </span>
      <span>
        <b>Velocidad Core Turbo: </b>
        {VelosidadCoreTurbo}
      </span>
      <span>
        <b>Tipo de Procesos: </b>
        {tipoDeProcesos}
      </span>
      <span>
        <b>Cantidad de Procesos: </b>
        {CantidadDeProcesos}
      </span>
    </>
  );
}
