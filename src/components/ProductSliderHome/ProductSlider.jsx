import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.min.css";
// import Card from "../Card/Card";
import ProductSliderCard from "./ProducSliderCard";

export default function ProductSlider() {
  const fuente = {
    type: "fuente",
    brand: "Asus",
    name: "Fuente ASUS ROG STRIX 1000W 80 Plus Gold Full Modular 1000G",
    model: "ROG-STRIX-1000G",
    details: {
      Watts: "1000",
      Dimensions: "16 x 15 x 8.6 Centimeter",
      "Input Voltage": "100-240Vac",
      "Thermal Features": "ROG Thermal Solution",
    },
    img: [
      "https://dlcdnwebimgs.asus.com/gain/0CB64E96-7BAF-446C-893E-E96BBF09A133/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/95565341-5A02-4780-9BF0-04F9C52155F6/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/0EAD6D09-1FA9-487E-A69F-0CCC06902660/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/065E380A-A744-4287-BC52-5456E1DA795B/w1000/h732",
      "https://dlcdnwebimgs.asus.com/gain/2BF79FB7-2DF2-4F97-B2E4-82F2499BD9C4/w1000/h732",
    ],
    cost: 46040,
  };

  const mother = {
    type: "mother",
    brand: "AMD",
    name: "Mother Asrock B450 Steel Legend AM4 RGB Dual M.2 Dual USB 3.",
    img: [
        "https://res.cloudinary.com/dhadvdeca/image/upload/v1666919293/pc/mothers/download_vgfg7q.jpg",
        "https://res.cloudinary.com/dhadvdeca/image/upload/v1666919326/pc/mothers/download_qgebsr.jpg"
      ],
    cost: 29900,
    details: {
      generation: "B450",
      connectivity: {
          CantidadDeSlotPcie16X: 2,
          CantidadDeSlotPcie1X: 4,
          TecnologiaMultiGpu: "Crossfire",
          PuertosSata: 6,
          SalidaVga: 0,
          SalidaHDMI: 1,
          SalidaDvi: 0,
          SalidasDisplayPorts: 1,
        }, 
      }
  }

  const disco = {
    type: "disco",
    name: "Seagate Cheetah 450 GB",
    brand: "Seagate",
    img: [
        "https://media.solotodo.com/media/cache/cf/97/cf97e06438baf13808924e77e5b0211b.png"
      ],
    details: {
        "type": "HDD",
        "capacity": "450 GB",
        "frequency": "15000rpm",
        "bus": "SAS",
        "bufer": "16 MB",
        "size": 3.5
      },
      "cost": 90000
  }

  const teclado = {
    type: "teclado",
    name: "Teclado Mecanico Redragon K550 YAMA White Retroiluminado RGB Español",
    brand: "Redragon",
    img: [
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9318_Teclado_Mecanico_Redragon_K550_YAMA_White_Retroiluminado_RGB_Espa__ol_03de67c4-grn.jpg",
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9319_Teclado_Mecanico_Redragon_K550_YAMA_White_Retroiluminado_RGB_Espa__ol_1e861276-grn.jpg",
        "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9320_Teclado_Mecanico_Redragon_K550_YAMA_White_Retroiluminado_RGB_Espa__ol_dfaba256-grn.jpg"
      ],
    details: {
        "RGB": true,
        "color": "Blanco",
        "connectivity": "Puerto Usb",
        "tipo_de_teclado": "Completo",
        "tipo_de_mecanismo": "Mecánico",
        "dimensions": {
          "ancho": "455 mm",
          "profundidad": "224 mm",
          "alto": "26 mm"
        }
      },
    cost: 12000
  }

  const ram = {
    type: "ram",
    name: "Kingston Fury Beast RGB KF556C40BBA-8",
    brand: "Kingston",
    img: [
          "https://media.solotodo.com/media/cache/f9/54/f95407e7e3448ae6108f18c5da2c9211.png"
        ],
    details: {
          "type": "DDR5",
          "format": "DIMM",
          "frequency": "5600 MHz",
          "capacity": "16GB",
          "latency": {
            "Latencia Cl (CAS)": 40,
            "Latencia Trcd": 40,
            "Latencia Trp": 40,
            "Latencia Tras": "no info"
          },
          "voltage": "1.25 V",
          "RGB": true,
          "disipador": true
        },
    cost: 39796
  }

const tarjeta = {
    type:"tarjeta",
    name:"Placa de Video GALAX GeForce RTX 3080 12GB GDDR6X SG LHR",
    brand: "GeForce",
    cost: 221900,
    details:{
          "tipo": "pcie",
          "chipsetGpu": "RTX 3080",
          "CaracteristicasEspeciales": "Ray Tracing + DLSS",
          "dimensiones": "113 mm x 317 mm, 3.0 slots",
          "conectividad": "HDMI, DisplayPorts x 3",
          "consumo": "320 W",
          "wattsRecomendados": "750 W",
          "CantidadPcieDe6Pines":"0",
          "CantidadPcieDe8Pines":"2",
          "backplate": "Si",
          "BlockVgaWaterCooling": "No",
          "cantidadCooler": "4",
          "velocidadMemoria": "19000 MHZ",
          "tipoDeMemoria": "GDDR6X",
          "CapasidadDeMemoria": "12GB",
          "interfaceDeMemoria": "384 bits",
          "VelosidadCoreTurbo": "1740 MHZ",
          "tipoDeProcesos": "CUDA",
          "CantidadDeProcesos": "8960"
        },
    img:[
        "https://m.media-amazon.com/images/I/71eARWDVCGS._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81dKPFG7uBL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81Ed5ZGvq0L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/816NrUcjtIL._SL1500_.jpg"
    ]
}

const pantalla = {
  type:"pantalla",
  name:"Monitor Gamer Cooler Master 27'' 165hz Curvo 1500R GM27-CF",
  brand:"Cooler Master",
  cost: 83400,
  details:{
              "tiempoDeRespuesta": "3ms",
              "tipoDePanel": "VA",
              "resolution":"1920x1080",
              "iluminacion":"LED",
              "consumo":"40 w",
              "connectivity":"Conector Auriculares, HDMI X 2, Display Port",
              "RGB":"No",
              "peso":"5 kg",
              "frequency":"165 hz",
              "pulgadas":27
  },
  img:[
              "https://cdn.coolermaster.com/media/assets/1002/gm27_mkt-materials_r1a-2_2000x2000-zoom.png",
              "https://cdn.coolermaster.com/media/assets/1020/gm27_gallery_0927_6-image.png",
              "https://cdn.coolermaster.com/media/assets/1023/gm27_gallery_0927_9-image.png",
              "https://cdn.coolermaster.com/media/assets/1001/gm27-monitor-with-halo-gallery-11-zoom.png"
  ]
}

  return (
    <div>
    <h1 className="destacadosTxt">¡Explora nuestra variedad de productos!</h1>
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ProductSliderCard component={fuente}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderCard component={mother}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderCard component={disco}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderCard component={teclado}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderCard component={ram}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderCard component={tarjeta}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSliderCard component={pantalla}/>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
