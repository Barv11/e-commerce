import React from "react";
import s from "./CardDetail.module.css";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import Especificaciones from "./Especificaciones/Especificaciones";

export default function CardDetail() {
  // const { id } = useParams();
  const mouse = {
    id: 1,
    type: "mouse",
    name: "Razer Basilisk V3 Pro - White",
    brand: "Razer",
    img: [
      "https://assets3.razerzone.com/44O6McFXZ2BebT0jtPdPWaiyLec=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhee%2Fh4b%2F9446067077150%2F221015-basilisk-v3-pro-white-1500x1000-1.jpg",
      "https://assets3.razerzone.com/KxHkBDMKOYjGh-L6w9Xggz47OmA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh48%2Fh49%2F9446067109918%2F221015-basilisk-v3-pro-white-1500x1000-2.jpg",
      "https://assets3.razerzone.com/J9B7ilNcVk0sCfcXyXnvDlSlHT8=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh59%2Fh97%2F9446066946078%2F221015-basilisk-v3-pro-white-1500x1000-4.jpg",
      "https://assets3.razerzone.com/HF1HzPEp_mGFkERMZRsSgPZ68rs=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh97%2F9446066978846%2F221015-basilisk-v3-pro-white-1500x1000-3.jpg",
    ],
    details: {
      description:
        "Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel",
      connectivity: [
        "Razer™ HyperSpeed Wireless",
        "Bluetooth",
        "Wired – Speedflex Cable USB Type C",
      ],
      rgb: "Razer Chroma™ RGB",
      sensitivity: 30000,
      buttons: 11,
      clicks: "90-million",
      sizes: [
        "Length: 130 mm / 5.11 in",
        "Width: 75.4 mm / 2.96 in",
        "Height: 42.5 mm / 1.67 in",
      ],
      weight: "112 g / 3.95 oz (Excluding cable)",
    },
    cost: 160,
  };

  const pantalla = {
    id: 1,
    type: "pantalla",
    name: "Monitor LG LED 19'' 19M38A-B VGA",
    brand: "LG",
    cost: 35.82,
    details: {
      tiempoDeRespuesta: "5ms",
      tipoDePanel: "TN",
      resolution: "1920x1080",
      iluminacion: "LED",
      consumo: "21 w",
      connectivity: "HDMI",
      RGB: "No",
      peso: "1.9 kg",
      frequency: "60 hz",
      pulgadas: 19,
    },
    img: [
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666919760/PANTALLAS/compragamer_Imganen_general_8685_Monitor_LG_LED_19___19M38A-B_VGA_7cb9fb0f-grn_uk0ttw.jpg",
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666919765/PANTALLAS/compragamer_Imganen_general_8684_Monitor_LG_LED_19___19M38A-B_VGA_2d36dd47-grn_mhjwwy.jpg",
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666919769/PANTALLAS/compragamer_Imganen_general_5166_Monitor_LG_LED_19___19M38A-B_VGA_cfc62b71-grn_kaqsey.jpg",
    ],
  };

  const tarjeta = {
    id: 1,
    type: "tarjeta",
    name: "Placa de Video GeForce MSI G210 1GB DDR3 Low Profile",
    brand: "GeForce",
    cost: 8.4,

    details: {
      tipo: "pcie",
      chipsetGpu: "G 210",
      CaracteristicasEspeciales: "No",
      dimensiones: "69 mm x 145 mm, 1.0 slots",
      conectividad: "VGA, HDMI",
      consumo: "20 W",
      wattsRecomendados: "250 W",
      CantidadPcieDe6Pines: "0",
      CantidadPcieDe8Pines: "0",
      backplate: "No",
      BlockVgaWaterCooling: "No",
      cantidadCooler: "1",
      velocidadMemoria: "1000 MHZ",
      tipoDeMemoria: "GDDR3",
      CapasidadDeMemoria: "1GB",
      interfaceDeMemoria: "64 bits",
      VelosidadCoreTurbo: "589 MHZ",
      tipoDeProcesos: "CUDA",
      CantidadDeProcesos: "0",
    },
    img: [
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666917841/TARJETAS%20DE%20VIDEO/compragamer_Imganen_general_34241_Placa_de_Video_Zotac_GeForce_GTX_1630_4GB_GDDR6_8d21f82b-grn_t4yrcx.jpg",
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666917842/TARJETAS%20DE%20VIDEO/compragamer_Imganen_general_34242_Placa_de_Video_Zotac_GeForce_GTX_1630_4GB_GDDR6_edc10230-grn_fycuuq.jpg",
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666917842/TARJETAS%20DE%20VIDEO/compragamer_Imganen_general_34242_Placa_de_Video_Zotac_GeForce_GTX_1630_4GB_GDDR6_edc10230-grn_fycuuq.jpg",
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666917844/TARJETAS%20DE%20VIDEO/compragamer_Imganen_general_34243_Placa_de_Video_Zotac_GeForce_GTX_1630_4GB_GDDR6_d425f258-grn_jf4l0r.jpg",
    ],
  };

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
        "Procesador Integrado": "No",
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

  const procesador = {
    id: 1,
    type: "procesador",
    brand: "Intel",
    name: "Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake",
    details: {
      Modelo: "Core i5 10400F",
      Socket: "1200 Comet Lake",
      Núcleos: 6,
      Frecuencia: "2900.00 mhz",
      Proceso_De_Fabricación: "14 nm",
      Gpu: "NO Posee Gráficos Integrados",
      Hilos: 12,
      Frecuencia_Turbo: "4300 mhz",
    },
    cost: 30600,
    img: ["asd", "asd"],
  };

  const disco = {
    type: "disco",
    name: "Western Digital Blue 500 GB",
    brand: "Western Digital",
    img: [
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666915076/RAM/f197bc5632d204c0357fa2ce116bedaa_zpdrbl.png",
    ],
    details: {
      type: "HDD",
      capacity: "500 GB",
      frequency: "5400rpm",
      bus: "SATA 3 (6.0 Gb/s)",
      bufer: "128 MB",
      size: 2.5,
    },
    cost: 9099,
  };

  const ram = {
    type: "ram",
    name: "Kingston KVR26N19S6/4",
    brand: "Kingston",
    img: [
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666916553/RAM%20REAL/9489707c4b77297ac0cdc268cf25e087_u8bqpo.png",
    ],
    details: {
      type: "DDR4",
      format: "DIMM",
      frequency: "2666 MHz",
      capacity: "4GB",
      latency: {
        "Latencia Cl (CAS)": 19,
        "Latencia Trcd": 19,
        "Latencia Trp": 19,
        "Latencia Tras": "no info",
      },
      voltage: "1.20 V",
      RGB: false,
      disipador: false,
    },
    cost: 5039,
  };

  const solido = {
    type: "solido",
    name: "Hikvision C100 120 GB",
    brand: "Hikvision",
    img: [
      "https://res.cloudinary.com/dglta8xrk/image/upload/v1666916919/DISCOS%20SOLIDOS/79cd6edbe3260a0316b12a81b5e566bb_y4gjbc.png",
    ],
    details: {
      type: "SSD",
      capacity: "120 GB",
      bus: "SATA 3 (6.0 Gb/s)",
      size: 2.5,
      lectura: "550 MB/s",
      escritura: "435 MB/s",
    },
    cost: 4230,
  };

  const fuente = {
    type: "fuente",
    brand: "Thermaltake",
    name: "Fuente 500W Thermaltake TR2",
    model: "TR2-500NL2NC",
    details: {
      Watts: "500",
      format: "ATX 12V V2.3",
      color: "Black",
      "operating temperature": "5°C to 40°C",
      "input voltage": "230 Vac",
      "cooling systems": "120mm Fan: 1800 R.P.M. ± 10%",
    },
    img: [
      "https://www.thermaltake.com/media/catalog/product/cache/6af153fd0a0c509bdfcdfb60a394dd9c/db/imgs/pdt/angle/PS-TRS-0500NPCW-2_fae7762aa3ea48dfbae5f512b29ddc9e.jpg",
      "https://www.thermaltake.com/media/catalog/product/cache/6af153fd0a0c509bdfcdfb60a394dd9c/db/imgs/pdt/gallery/PS-TRS-0500NPCW-2_c76f25921baa4d199641a5b6b73acfbe.jpg",
      "https://www.thermaltake.com/media/catalog/product/cache/6af153fd0a0c509bdfcdfb60a394dd9c/db/imgs/pdt/gallery/PS-TRS-0500NPCW-2_1b3178d846cd44b8b02ffd314e2729b2.jpg",
      "https://www.thermaltake.com/media/catalog/product/cache/6af153fd0a0c509bdfcdfb60a394dd9c/db/imgs/pdt/gallery/PS-TRS-0500NPCW-2_b57da6da21ff40fca053db74a1594972.jpg",
    ],
    cost: 10151,
  };

  const teclado = {
    type: "teclado",
    name: "Teclado Nisuta NSKBG35 35 Teclas Macro RGB",
    brand: "Nisuta",
    img: [
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19724_Teclado_Nisuta_NSKBG35_35_Teclas_Macro_RGB_3764baa7-grn.jpg",
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19725_Teclado_Nisuta_NSKBG35_35_Teclas_Macro_RGB_68c6844e-grn.jpg",
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19726_Teclado_Nisuta_NSKBG35_35_Teclas_Macro_RGB_5b2e3733-grn.jpg",
    ],
    details: {
      RGB: true,
      color: "Negro",
      connectivity: "Puerto Usb",
      tipo_de_teclado: "De Mano",
      tipo_de_mecanismo: "Membrana",
      dimensions: {
        ancho: "230 mm",
        profundidad: "173 mm",
        alto: "37 mm",
      },
    },
    cost: "3.130",
  };

  const gabinete = {
    type: "gabinete",
    brand: "CORSAIR",
    name: "Gabinete Corsair Icue 5000D Rgb Mid-Tow C Temp Atx Bco CC-9011209-WW",
    details: {
      dimensions: "52 cm x 24.5 cm x 52 cm",
      weight: "13.8 kg",
      cooling: {
        front_fans_num: 2,
        front_fans_dimension_mm: [120, 140],
        back_fans_num: 1,
        back_fans_dimension_mm: [120],
      },
      color: "blanco",
      material: "Plástico, Acero, Vidrio templado",
      RGB: true,
      "structure type": "Mid Tower",
      connectivity: {
        disk: {
          hdd: 2,
          ssd: 3,
          size_inch: "2.5,3.5",
        },
        power_supply_type: "ATX",
        mother_types: "ATX, MATX, ITX",
        max_length_psu: "22.5 cm",
        max_length_gpu: "42 cm",
      },
    },
    cost: 25052.98,
    img: [
      "https://res.cloudinary.com/dhadvdeca/image/upload/v1666666156/pc/corsair1_yoar7e.jpg",
      "https://res.cloudinary.com/dhadvdeca/image/upload/v1666666160/pc/corsair2_vqzfmt.jpg",
      "https://res.cloudinary.com/dhadvdeca/image/upload/v1666666164/pc/corsair3_cojo66.jpg",
      "https://res.cloudinary.com/dhadvdeca/image/upload/v1666666168/pc/corsair4_zvfofh.jpg",
      "https://res.cloudinary.com/dhadvdeca/image/upload/v1666666172/pc/corsair5_d9xbmt.jpg",
    ],
  };

  const cooler = {
    type: "cooler",
    name: "Cooler CPU Deepcool ICE EDGE Mini FS V2",
    brand: "Deepcool",
    img: [
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33262_Cooler_CPU_Deepcool_ICE_EDGE_Mini_FS_V2_739bfbdf-grn.jpg",
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33263_Cooler_CPU_Deepcool_ICE_EDGE_Mini_FS_V2_076b1c5d-grn.jpg",
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33264_Cooler_CPU_Deepcool_ICE_EDGE_Mini_FS_V2_155499a5-grn.jpg",
    ],

    details: {
      fans: 1,
      RGB: false,
      "nivel de ruido": "25 dba",
      consumo: "5W",
      tdp: "105W",
      disipasión: "Aire",
      dimensions: {
        altura: "112 mm",
        tamaño_coolers: "80 mm",
      },
      compatibilidad: [
        "1200 Comet Lake,AM4",
        "Ryzen 4th Gen,AM4",
        "Ryzen 3th Gen,AM4",
        "Ryzen 2th Gen,AM4",
        "Ryzen 1th Gen,AM4 APU",
        "5000,AM4 APU 3th",
      ],
    },
    cost: "2.750",
  };

  const { name, brand, img, detail, cost } = cooler;

  const [image, setImage] = useState(img[0]);

  const handleOnClick = (e) => {
    setImage(e.target.src);
  };

  return (
    <main>
      <div className={s.container}>
        <div className={s.carrousel}>
          <div className={s.carrousel1}>
            <img src={image} alt={name} />
          </div>
          <div className={s.carrousel2}>
            <img src={img[0]} alt={name} onClick={handleOnClick} />
            <img src={img[1]} alt={name} onClick={handleOnClick} />
            <img src={img[2]} alt={name} onClick={handleOnClick} />
          </div>
        </div>
        <div className={s.details}>
          <h1 className={s.title}>{name}</h1>
          <span className={s.route}>{`Productos > ${cooler.type}`}</span>
          <span className={s.brand}>Marca: {brand}</span>
          <span className={s.cost}>US$159.99</span>
          <div className={s.svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-building-store"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
              <line x1="5" y1="21" x2="5" y2="10.85"></line>
              <line x1="19" y1="21" x2="19" y2="10.85"></line>
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
            </svg>
            <span>Retiro en sucursal</span>
          </div>
          <div className={s.svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-truck-delivery"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
              <line x1="3" y1="9" x2="7" y2="9"></line>
            </svg>
            <span>Envíos a todo el país</span>
          </div>
        </div>
      </div>
      <div className={s.especificaciones}>
        <Especificaciones product={cooler} />
      </div>
    </main>
  );
}
