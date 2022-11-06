import React from "react";

export default function DetailMother({ details }) {
  const { connectivity, Socket, energy, Sound, Memory, Dimensions } = details;

  const mother = {
    type: "mother",
    brand: "AMD",
    name: "Mother Asrock X570 Phantom Gaming 4 AM4 PCIe Gen4",
    cost: 36800,
    img: [
      "https://cdn.pixabay.com/photo/2017/06/24/14/13/buenos-aires-2437858_960_720.jpg",
    ],
    details: {
      connectivity: {
        "Cantidad De Slot Pci-e 16X": 2,
        "Cantidad De Slot Pci-e 1X": 2,
        "Tecnologia Multi Gpu": "Crossfire",
        "Puertos Sata": 8,
        "Salida Vga": 0,
        "Salida HDMI": 1,
        "Salida Dvi": 0,
        "Salidas Display Ports": 1,
        "Cantidad de Slot M.2 Totales": 2,
        "Placa Wifi Integrada": "No",
        "Placa de Red": "Gigabit LAN 10/100/1000 Mb/s",
        "Puerto Ps/2": "No",
        "Puertos Usb 2.0 Traseros": 4,
        "Puertos Usb 3.0 Traseros": 2,
        "Puertos Usb 3.1 Traseros": 0,
        "Puertos Usb 3.2 Traseros": 0,
        "Puertos Usb Type-c": 0,
        "Cantidad De Slot Pci-e 4X": 0,
        "Cantidad De Slot M.2 Sata": 0,
        "Cantidad De Slot M.2 Nvme": 2,
      },
      Socket: [
        "AM4 APU 2th Gen",
        "AM4 Ryzen 3th Gen",
        "AM4 APU 3th Gen",
        "AM4 Ryzen 4th Gen",
        "AM4 Ryzen 2th Gen",
        "AM4 APU 5000",
      ],
      energy: {
        "Watts Máximos Para Cpu": 105,
        "Conectos Cpu 4Pines": 1,
        "Conector Cpu 4Pines Plus": 1,
        "Conector 24Pines": 1,
        Consumo: "35w",
        ProcesadorIntegrado: "No",
      },
      Sound: {
        "Placa De Sonido": "7.1 Realtek ALC 1200",
      },
      Memory: {
        Ddr4: 4,
      },
      Dimensions: "ATX",
    },
  };
  return (
    <>
      <span>
        <b>Conectividad:</b>
        <ul>
          {Object.entries(mother.details.connectivity).map(
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
          {Object.entries(mother.details.energy).map(
            ([key, value], el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Sonido: </b>
        <ul>
          {Object.entries(mother.details.Sound).map(
            ([key, value], el) => (
              <li key={el}>{key + ": " + value}</li>
            )
          )}
        </ul>
      </span>
      <span>
        <b>Memoría: </b>
        <ul>
          {Object.entries(mother.details.Memory).map(
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
