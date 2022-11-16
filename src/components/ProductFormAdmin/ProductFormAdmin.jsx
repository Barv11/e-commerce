import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  postProduct,
  getAllProductos,
  searchProductById,
  updateProduct,
  clearMessage,
  clearProducts,
  // postImage,
} from "../../redux/actions/index";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import styles from "./ProductFormAdmin.module.css";

function ProductFormAdmin() {
  const navigate = useNavigate();
  const [imgPrev, setImgPrev] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginAccess);
  const searchByIdProduct = useSelector((state) => state.searchByIdProduct);
  const message = useSelector((state) => state.message);
  // const url = useSelector((state) => state.url);
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState({
    name: "",
    cost: "",
    brand: "",
    img: [],
    type: "defect",
    details: {},
  });

  console.log(product);

  function validate(input) {
    const errors = {};
    if (!input.name) {
      errors.name = "Es Nombre es requerido";
    }
    if (!input.cost) {
      errors.cost = "Es Precio es requerido";
    }
    if (!input.img.length) {
      errors.img = "La img es requerida";
    }
    if (!input.type) {
      errors.type = "La Categoría es requerida";
    }
    if (!input.brand) {
      errors.brand = "La Marca es requerida";
    }
    return errors;
  }

  const handleOnSelect = (e) => {
    switch (e.target.value) {
      case "mother":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            generation: "",
            connectivity: {
              "Cantidad De Slot Pci-e 16X": "",
              "Cantidad De Slot Pci-e 1X": "",
              "Tecnologia Multi Gpu": "",
              "Puertos Sata": "",
              "Salida Vga": "",
              "Salida HDMI": "",
              "Salida Dvi": "",
              "Salidas Display Ports": "",
              "Cantidad de Slot M.2 Totales": "",
              "Placa Wifi Integrada": "",
              "Placa de Red": "",
              "Puerto Ps/2": "",
              "Puertos Usb 2.0 Traseros": "",
              "Puertos Usb 3.0 Traseros": "",
              "Puertos Usb 3.1 Traseros": "",
              "Puertos Usb 3.2 Traseros": "",
              "Puertos Usb Type-c": "",
              "Cantidad De Slot Pci-e 4X": "",
              "Cantidad De Slot M.2 Sata": "",
              "Cantidad De Slot M.2 Nvme": "",
            },
            Socket: [],
            energy: {
              "Watts Máximos Para Cpu": "",
              "Conectos Cpu 4Pines": "",
              "Conector Cpu 4Pines Plus": "",
              "Conector 24Pines": "",
              Consumo: "",
              "Procesador Integrado": "",
            },
            Sound: {
              "Placa De Sonido": "",
            },
            Memory: {
              Ddr4: "",
            },
            Dimensions: "",
          },
        });
        break;
      case "procesador":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            Modelo: "",
            Socket: "",
            Núcleos: "",
            Frecuencia: "",
            Proceso_De_Fabricación: "",
            Gpu: "",
            Hilos: "",
            Frecuencia_Turbo: "",
          },
        });
        break;
      case "disco":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            type: "",
            capacity: "",
            frequency: "",
            bus: "",
            bufer: "",
            size: "",
          },
        });
        break;
      case "ram":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            type: "",
            format: "",
            frequency: "",
            capacity: "",
            latency: "",
            voltage: "",
            RGB: "",
            disipador: "",
          },
        });
        break;
      case "solido":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            type: "",
            capacity: "",
            bus: "",
            size: "",
            lectura: "",
            escritura: "",
          },
        });
        break;
      case "tarjeta":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            tipo: "",
            chipsetGpu: "",
            CaracteristicasEspeciales: "",
            dimensiones: "",
            conectividad: "",
            consumo: "",
            wattsRecomendados: "",
            CantidadPcieDe6Pines: "",
            CantidadPcieDe8Pines: "",
            backplate: "",
            BlockVgaWaterCooling: "",
            cantidadCooler: "",
            velocidadMemoria: "",
            tipoDeMemoria: "",
            CapasidadDeMemoria: "",
            interfaceDeMemoria: "",
            VelosidadCoreTurbo: "",
            tipoDeProcesos: "",
            CantidadDeProcesos: "",
          },
        });
        break;
      case "mouse":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            description: "",
            connectivity: [],
            rgb: "",
            sensitivity: "",
            buttons: "",
            clicks: "",
            sizes: {
              longitud: "",
              ancho: "",
              altura: "",
            },
            weight: "",
          },
        });
        break;
      case "pantalla":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            tiempoDeRespuesta: "",
            tipoDePanel: "",
            resolution: "",
            iluminacion: "",
            consumo: "",
            connectivity: "",
            RGB: "",
            peso: "",
            frequency: "",
            pulgadas: "",
          },
        });
        break;
      case "fuente":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            Watts: "",
            Format: "",
            Color: "",
            "Operating Temperature": "",
            Dimensions: "",
            "Input Voltage": "",
            "Cooling system": "",
            "RGB Fan": "",
          },
        });
        break;
      case "teclado":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            RGB: "",
            color: "",
            connectivity: "",
            tipo_de_teclado: "",
            tipo_de_mecanismo: "",
            dimensions: {
              ancho: "",
              profundidad: "",
              alto: "",
            },
          },
        });
        break;
      case "auricular":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            audio: "",
            color: "",
            conexion: "",
            microfono: "",
            TipoDeAudio: "",
          },
        });
        break;
      case "gabinete":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            dimensions: "",
            weight: "",
            cooling: {
              front_fans_num: "",
              front_fans_dimension_mm: [],
              back_fans_num: "",
              back_fans_dimension_mm: [],
            },
            color: "",
            material: "",
            RGB: "",
            "structure type": "",
            connectivity: {
              disk: {
                hdd: "",
                ssd: "",
                size_inch: "",
              },
              power_supply_type: "",
              mother_types: "",
              max_length_psu: "",
              max_length_gpu: "",
            },
          },
        });
        break;
      case "cooler":
        setProduct({
          ...product,
          type: e.target.value,
          details: {
            fans: "",
            RGB: "",
            "nivel de ruido": "",
            consumo: "",
            tdp: "",
            disipasión: "",
            dimensions: {
              altura: "",
              tamaño_coolers: "",
            },
            compatibilidad: [],
          },
        });
        break;

      default:
        break;
    }
  };

  const handlerOnObj = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.subsubname) {
      const obj = {
        ...product,
      };
      obj.details[name][dataset.subname][dataset.subsubname] = value;
      setProduct(obj);
    } else {
      const obj = {
        ...product,
      };
      obj.details[name][dataset.subname] = value;
      setProduct(obj);
    }
  };

  const handlerOnArr = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.subname) {
      const obj = {
        ...product,
      };
      obj.details[name][dataset.subname][dataset.foo] = value;
      setProduct(obj);
    } else {
      const obj = {
        ...product,
      };
      obj.details[name][dataset.foo] = value;
      setProduct(obj);
    }
  };

  const handleDetailsInput = (e) => {
    setProduct({
      ...product,
      details: {
        ...product.details,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...product,
        [e.target.name]: e.target.value,
      })
    );
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    // dispatch(postImage(file))
    // console.log(url)
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pc-images");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyodnn524/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const img = await res.json();
    setImgPrev([img.secure_url]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(
        updateProduct({
          ...product,
          img: imgPrev,
          cost: parseInt(product.cost),
        })
      );
      console.log({ ...product, img: imgPrev, cost: parseInt(product.cost) });
    } else {
      dispatch(postProduct({ ...product, img: imgPrev }));
      console.log({ ...product, img: imgPrev });
      setProduct({
        name: "",
        cost: "",
        brand: "",
        img: [""],
        type: "defect",
        details: {},
      });
      setImgPrev("");
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(searchProductById(id));
    }
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      console.log(searchByIdProduct);
      setProduct(searchByIdProduct);
      setImgPrev([searchByIdProduct?.img?.[0]]);
    }
  }, [searchByIdProduct]);

  useEffect(() => {
    document.title = `Gamer Tech | ${id ? "Edit" : "Create"}`;
    return dispatch(clearMessage());
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.containerForm}>
        <div className={styles.productContainer}>
          {Object.entries(product).length === 0 &&
          Object.entries(searchByIdProduct).length === 0 ? (
            <Loader />
          ) : (
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h2 className={styles.titleForm}>
                {id ? "Editar Producto" : "Crear Producto"}
              </h2>
              <label htmlFor="name">Nombre</label>
              <input
                className={styles.formInput}
                type={"text"}
                placeholder={"Ingrese un nombre"}
                name={"name"}
                value={product.name}
                onChange={(e) => handleInput(e)}
              />
              <br />
              <p className={styles.textError}>
                {errors.name ? errors.name : ""}
              </p>

              <label htmlFor="cost">Precio</label>
              <input
                className={styles.formInput}
                type={"number"}
                min={0}
                placeholder={"Ingresar Precio"}
                name={"cost"}
                value={product.cost}
                onChange={(e) => handleInput(e)}
              />
              <br />
              <p className={styles.textError}>
                {errors.cost ? errors.cost : ""}
              </p>

              <label htmlFor="brand">Marca</label>
              <input
                className={styles.formInput}
                type={"text"}
                placeholder={"Ingresar Marca"}
                name={"brand"}
                value={product.brand}
                onChange={(e) => handleInput(e)}
              />
              <br />
              <p className={styles.textError}>
                {errors.brand ? errors.brand : ""}
              </p>

              <div className={styles.wrapinput}>
                <label htmlFor="inputTag" className={styles.upload}>
                  <i class="uil uil-image-plus"></i>
                  <span className={styles.labelimg}>Imagen</span>
                </label>
                <input
                  id="inputTag"
                  className={`${styles.formInput} ${styles.inputimg}`}
                  name={"uploads"}
                  accept="image/png, image/jpg, image/jpeg"
                  type={"file"}
                  onChange={uploadImage}
                />
                {imgPrev.length ? (
                  <img src={imgPrev} alt="img" className={styles.imgprev} />
                ) : (
                  <div className={styles.block}></div>
                )}
              </div>
              <br />
              <label>Categorías</label>

              <select
                name="type"
                onChange={handleOnSelect}
                className={styles.formInput}
                value={product.type}
              >
                <option name="defect" value="defect">
                  Elija...
                </option>
                <option name="mother" value="mother">
                  Mother
                </option>
                <option name="procesador" value="procesador">
                  Procesador
                </option>
                <option name="disco" value="disco">
                  Disco
                </option>
                <option name="ram" value="ram">
                  Ram
                </option>
                <option name="solido" value="solido">
                  Solido
                </option>
                <option name="tarjeta" value="tarjeta">
                  Tarjeta
                </option>
                <option name="mouse" value="mouse">
                  Mouse
                </option>
                <option name="pantalla" value="pantalla">
                  Pantalla
                </option>
                <option name="fuente" value="fuente">
                  Fuente
                </option>
                <option name="teclado" value="teclado">
                  Teclado
                </option>
                <option name="auricular" value="auricular">
                  Auricular
                </option>
                <option name="gabinete" value="gabinete">
                  Gabinete
                </option>
                <option name="cooler" value="cooler">
                  Cooler
                </option>
              </select>
              <br />
              <div className={styles.formProductContainer}>
                {product.type === "mother" ? (
                  <>
                    <h5>Generación :</h5>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="generation"
                      onChange={handleDetailsInput}
                      value={product.details?.generation}
                    />
                    <h5>Connectividad :</h5>
                    <label>
                      Cantidad De Slot Pci-e 16X
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Cantidad De Slot Pci-e 16X"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Cantidad De Slot Pci-e 16X"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Cantidad De Slot Pci-e 1X
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Cantidad De Slot Pci-e 1X"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Cantidad De Slot Pci-e 1X"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Tecnologia Multi Gpu
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Tecnologia Multi Gpu"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Tecnologia Multi Gpu"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Puertos Sata
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Puertos Sata"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.["Puertos Sata"]}
                      />
                    </label>
                    <label>
                      Salida Vga
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Salida Vga"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.["Salida Vga"]}
                      />
                    </label>
                    <label>
                      Salida HDMI
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Salida HDMI"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.["Salida HDMI"]}
                      />
                    </label>
                    <label>
                      Salida Dvi
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Salida Dvi"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.["Salida Dvi"]}
                      />
                    </label>
                    <label>
                      Salidas Display Ports
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Salidas Display Ports"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Salidas Display Ports"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Cantidad de Slot M.2 Totales
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Cantidad de Slot M.2 Totales"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Cantidad de Slot M.2 Totales"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Placa Wifi Integrada
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="Placa Wifi Integrada"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Placa Wifi Integrada"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Placa de Red
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="Placa de Red"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.["Placa de Red"]}
                      />
                    </label>
                    <label>
                      Puerto Ps/2
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="Puerto Ps/2"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.["Puerto Ps/2"]}
                      />
                    </label>
                    <label>
                      Puertos Usb 2.0 Traseros
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Puertos Usb 2.0 Traseros"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Puertos Usb 2.0 Traseros"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Puertos Usb 3.0 Traseros
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Puertos Usb 3.0 Traseros"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Puertos Usb 3.0 Traseros"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Puertos Usb 3.1 Traseros
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Puertos Usb 3.1 Traseros"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Puertos Usb 3.1 Traseros"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Puertos Usb 3.2 Traseros
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Puertos Usb 3.2 Traseros"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Puertos Usb 3.2 Traseros"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Puertos Usb Type-c
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Puertos Usb Type-c"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.["Puertos Usb Type-c"]
                        }
                      />
                    </label>
                    <label>
                      Cantidad De Slot Pci-e 4X
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Cantidad De Slot Pci-e 4X"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Cantidad De Slot Pci-e 4X"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Cantidad De Slot M.2 Sata
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Cantidad De Slot M.2 Sata"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Cantidad De Slot M.2 Sata"
                          ]
                        }
                      />
                    </label>
                    <label>
                      Cantidad De Slot M.2 Nvme
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="connectivity"
                        data-subname="Cantidad De Slot M.2 Nvme"
                        onChange={handlerOnObj}
                        value={
                          product.details?.connectivity?.[
                            "Cantidad De Slot M.2 Nvme"
                          ]
                        }
                      />
                    </label>
                    <h5>Socket :</h5>
                    <label>
                      1:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="Socket"
                        onChange={handlerOnArr}
                        data-foo={0}
                        value={product.details?.Socket?.[0]}
                      />
                    </label>
                    <label>
                      2:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="Socket"
                        onChange={handlerOnArr}
                        data-foo={1}
                        value={product.details?.Socket?.[1]}
                      />
                    </label>
                    <label>
                      3:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="Socket"
                        onChange={handlerOnArr}
                        data-foo={2}
                        value={product.details?.Socket?.[2]}
                      />
                    </label>
                    <label>
                      4:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="Socket"
                        onChange={handlerOnArr}
                        data-foo={3}
                        value={product.details?.Socket?.[3]}
                      />
                    </label>
                    <h5>Energía :</h5>
                    <label>
                      Watts Máximos Para Cpu
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="energy"
                        data-subname="Watts Máximos Para Cpu"
                        onChange={handlerOnObj}
                        value={
                          product.details?.energy?.["Watts Máximos Para Cpu"]
                        }
                      />
                    </label>
                    <label>
                      Conectos Cpu 4Pines
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="energy"
                        data-subname="Conectos Cpu 4Pines"
                        onChange={handlerOnObj}
                        value={product.details?.energy?.["Conectos Cpu 4Pines"]}
                      />
                    </label>
                    <label>
                      Conector Cpu 4Pines Plus
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="energy"
                        data-subname="Conector Cpu 4Pines Plus"
                        onChange={handlerOnObj}
                        value={
                          product.details?.energy?.["Conector Cpu 4Pines Plus"]
                        }
                      />
                    </label>
                    <label>
                      Conector 24Pines
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="number"
                        min="0"
                        name="energy"
                        data-subname="Conector 24Pines"
                        onChange={handlerOnObj}
                        value={product.details?.energy?.["Conector 24Pines"]}
                      />
                    </label>
                    <label>
                      Consumo
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="energy"
                        data-subname="Consumo"
                        onChange={handlerOnObj}
                        value={product.details?.energy?.Consumo}
                      />
                    </label>
                    <label>
                      Procesador Integrado
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="energy"
                        data-subname="Procesador Integrado"
                        onChange={handlerOnObj}
                        value={
                          product.details?.energy?.["Procesador Integrado"]
                        }
                      />
                    </label>
                    <h5>Sonido :</h5>
                    <label>
                      Placa De Sonido
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="Sound"
                        data-subname="Placa De Sonido"
                        onChange={handlerOnObj}
                        value={product.details?.Sound?.["Placa De Sonido"]}
                      />
                    </label>
                    <h5>Memoria Ddr4 :</h5>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="number"
                      min="0"
                      name="Memory"
                      data-subname="Ddr4"
                      onChange={handlerOnObj}
                      value={product.details?.Memory?.Ddr4}
                    />
                    <h5>Dimensiones :</h5>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Dimensions"
                      onChange={handleDetailsInput}
                      value={product.details?.Dimensions}
                    />
                  </>
                ) : product.type === "procesador" ? (
                  <>
                    <label>Modelo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Modelo"
                      onChange={handleDetailsInput}
                      value={product.details?.Modelo}
                    />
                    <label>Socket</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Socket"
                      onChange={handleDetailsInput}
                      value={product.details?.Socket}
                    />
                    <label>Núcleos</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="number"
                      min="0"
                      name="Núcleos"
                      onChange={handleDetailsInput}
                      value={product.details?.["Núcleos"]}
                    />
                    <label>Frecuencia</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Frecuencia"
                      onChange={handleDetailsInput}
                      value={product.details?.Frecuencia}
                    />
                    <label>Proceso_De_Fabricación</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Proceso_De_Fabricación"
                      onChange={handleDetailsInput}
                      value={product.details?.Proceso_De_Fabricación}
                    />
                    <label>Gpu</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Gpu"
                      onChange={handleDetailsInput}
                      value={product.details?.Gpu}
                    />
                    <label>Hilos</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="number"
                      min="0"
                      name="Hilos"
                      onChange={handleDetailsInput}
                      value={product.details?.Hilos}
                    />
                    <label>Frecuencia Turbo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Frecuencia_Turbo"
                      onChange={handleDetailsInput}
                      value={product.details?.Frecuencia_Turbo}
                    />
                  </>
                ) : product.type === "disco" ? (
                  <>
                    <label>Tipo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="type"
                      onChange={handleDetailsInput}
                      value={product.details?.type}
                    />
                    <label>Capacidad</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="capacity"
                      onChange={handleDetailsInput}
                      value={product.details?.capacity}
                    />
                    <label>Frecuencia</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="frequency"
                      onChange={handleDetailsInput}
                      value={product.details?.frequency}
                    />
                    <label>BUS</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="bus"
                      onChange={handleDetailsInput}
                      value={product.details?.bus}
                    />
                    <label>Búfer</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="bufer"
                      onChange={handleDetailsInput}
                      value={product.details?.bufer}
                    />
                    <label>Dimensiones</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="size"
                      onChange={handleDetailsInput}
                      value={product.details?.size}
                    />
                  </>
                ) : product.type === "ram" ? (
                  <>
                    <label>Tipo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="type"
                      onChange={handleDetailsInput}
                      value={product.details?.type}
                    />
                    <label>Formato</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="format"
                      onChange={handleDetailsInput}
                      value={product.details?.format}
                    />
                    <label>Frecuencia</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="frequency"
                      onChange={handleDetailsInput}
                      value={product.details?.frequency}
                    />
                    <label>Capacidad</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="capacity"
                      onChange={handleDetailsInput}
                      value={product.details?.capacity}
                    />
                    <label>Latencia</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="latency"
                      onChange={handleDetailsInput}
                      value={product.details?.latency}
                    />
                    <label>Voltaje</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="voltage"
                      onChange={handleDetailsInput}
                      value={product.details?.voltage}
                    />
                    <label>RGB</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="RGB"
                      onChange={handleDetailsInput}
                      value={product.details?.RGB}
                    />
                    <label>Disipador</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="disipador"
                      onChange={handleDetailsInput}
                      value={product.details?.disipador}
                    />
                  </>
                ) : product.type === "solido" ? (
                  <>
                    <label>Tipo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="type"
                      onChange={handleDetailsInput}
                      value={product.details?.type}
                    />
                    <label>Capacidad</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="capacity"
                      onChange={handleDetailsInput}
                      value={product.details?.capacity}
                    />
                    <label>Tamaño</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="size"
                      onChange={handleDetailsInput}
                      value={product.details?.size}
                    />
                    <label>bus</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="bus"
                      onChange={handleDetailsInput}
                      value={product.details?.bus}
                    />
                    <label>Lectura</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="lectura"
                      onChange={handleDetailsInput}
                      value={product.details?.lectura}
                    />
                    <label>Escritura</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="escritura"
                      onChange={handleDetailsInput}
                      value={product.details?.escritura}
                    />
                  </>
                ) : product.type === "tarjeta" ? (
                  <>
                    <label>Tipo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tipo"
                      onChange={handleDetailsInput}
                      value={product.details?.tipo}
                    />
                    <label>Chipset Gpu</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="chipsetGpu"
                      onChange={handleDetailsInput}
                      value={product.details?.chipsetGpu}
                    />
                    <label>Caracteristicas Especiales</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="CaracteristicasEspeciales"
                      onChange={handleDetailsInput}
                      value={product.details?.CaracteristicasEspeciales}
                    />
                    <label>Dimensiones</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="dimensiones"
                      onChange={handleDetailsInput}
                      value={product.details?.dimensiones}
                    />
                    <label>Conectividad</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="conectividad"
                      onChange={handleDetailsInput}
                      value={product.details?.conectividad}
                    />
                    <label>Consumo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="consumo"
                      onChange={handleDetailsInput}
                      value={product.details?.consumo}
                    />
                    <label>Watts Recomendados</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="wattsRecomendados"
                      onChange={handleDetailsInput}
                      value={product.details?.wattsRecomendados}
                    />
                    <label>Cantidad Pcie De 6 Pines</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="CantidadPcieDe6Pines"
                      onChange={handleDetailsInput}
                      value={product.details?.CantidadPcieDe6Pines}
                    />
                    <label>Cantidad Pcie De 8 Pines</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="CantidadPcieDe8Pines"
                      onChange={handleDetailsInput}
                      value={product.details?.CantidadPcieDe8Pines}
                    />
                    <label>Backplate</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="backplate"
                      onChange={handleDetailsInput}
                      value={product.details?.backplate}
                    />
                    <label>Block Vga Water Cooling</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="BlockVgaWaterCooling"
                      onChange={handleDetailsInput}
                      value={product.details?.BlockVgaWaterCooling}
                    />
                    <label>Cantidad Cooler</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="cantidadCooler"
                      onChange={handleDetailsInput}
                      value={product.details?.cantidadCooler}
                    />
                    <label>Velocidad Memoria</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="velocidadMemoria"
                      onChange={handleDetailsInput}
                      value={product.details?.velocidadMemoria}
                    />
                    <label>Tipo De Memoria</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tipoDeMemoria"
                      onChange={handleDetailsInput}
                      value={product.details?.tipoDeMemoria}
                    />
                    <label>Capasidad De Memoria</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="CapasidadDeMemoria"
                      onChange={handleDetailsInput}
                      value={product.details?.CapasidadDeMemoria}
                    />
                    <label>Interface De Memoria</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="interfaceDeMemoria"
                      onChange={handleDetailsInput}
                      value={product.details?.interfaceDeMemoria}
                    />
                    <label>Velosidad Core Turbo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="VelosidadCoreTurbo"
                      onChange={handleDetailsInput}
                      value={product.details?.VelosidadCoreTurbo}
                    />
                    <label>Tipo De Procesos</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tipoDeProcesos"
                      onChange={handleDetailsInput}
                      value={product.details?.tipoDeProcesos}
                    />
                    <label>Cantidad De Procesos</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="CantidadDeProcesos"
                      onChange={handleDetailsInput}
                      value={product.details?.CantidadDeProcesos}
                    />
                  </>
                ) : product.type === "pantalla" ? (
                  <>
                    <label>Tiempo De Respuesta</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tiempoDeRespuesta"
                      onChange={handleDetailsInput}
                      value={product.details?.tiempoDeRespuesta}
                    />
                    <label>Tipo De Panel</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tipoDePanel"
                      onChange={handleDetailsInput}
                      value={product.details?.tipoDePanel}
                    />
                    <label>Resolution</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="resolution"
                      onChange={handleDetailsInput}
                      value={product.details?.resolution}
                    />
                    <label>Iluminacion</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="iluminacion"
                      onChange={handleDetailsInput}
                      value={product.details?.iluminacion}
                    />
                    <label>Consumo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="consumo"
                      onChange={handleDetailsInput}
                      value={product.details?.consumo}
                    />
                    <label>Connectivity</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="connectivity"
                      onChange={handleDetailsInput}
                      value={product.details?.connectivity}
                    />
                    <label>RGB</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="RGB"
                      onChange={handleDetailsInput}
                      value={product.details?.RGB}
                    />
                    <label>Peso</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="peso"
                      onChange={handleDetailsInput}
                      value={product.details?.peso}
                    />
                    <label>Frequency</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="frequency"
                      onChange={handleDetailsInput}
                      value={product.details?.frequency}
                    />
                    <label>Pulgadas</label>
                    <input
                      className={styles.formInput}
                      placeholder="pulgadas ej: 24.5..."
                      type="text"
                      name="pulgadas"
                      onChange={handleDetailsInput}
                      value={product.details?.pulgadas}
                    />
                  </>
                ) : product.type === "fuente" ? (
                  <>
                    <label>Watts</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Watts"
                      onChange={handleDetailsInput}
                      value={product.details?.Watts}
                    />
                    <label>Formato</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="format"
                      onChange={handleDetailsInput}
                      value={product.details?.Format}
                    />
                    <label>Color</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Color"
                      onChange={handleDetailsInput}
                      value={product.details?.Color}
                    />
                    <label>Operating Temperature</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Operating temperature"
                      onChange={handleDetailsInput}
                      value={product.details?.["Operating Temperature"]}
                    />
                    <label>Dimensiones</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Dimensions"
                      onChange={handleDetailsInput}
                      value={product.details?.Dimensions}
                    />
                    <label>Input Voltage</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Input voltage"
                      onChange={handleDetailsInput}
                      value={product.details?.["Input Voltage"]}
                    />
                    <label>Cooling system</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Cooling system"
                      onChange={handleDetailsInput}
                      value={product.details?.["Cooling system"]}
                    />
                    <label>RGB Fan</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="RGB Fan"
                      onChange={handleDetailsInput}
                      value={product.details?.["RGB Fan"]}
                    />
                  </>
                ) : product.type === "teclado" ? (
                  <>
                    <label>Luces RGB</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="RGB"
                      onChange={handleDetailsInput}
                      value={product.details?.RGB}
                    />
                    <label>Color</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="color"
                      onChange={handleDetailsInput}
                      value={product.details?.color}
                    />
                    <label>Conectividad</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="connectivity"
                      onChange={handleDetailsInput}
                      value={product.details?.connectivity}
                    />
                    <label>Tipo de teclado</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: De Mano..."
                      type="text"
                      name="tipo_de_teclado"
                      onChange={handleDetailsInput}
                      value={product.details?.tipo_de_teclado}
                    />
                    <label>Tipo de mecanismo</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tipo_de_mecanismo"
                      onChange={handleDetailsInput}
                      value={product.details?.tipo_de_mecanismo}
                    />
                    <label>Dimensiones</label>
                    <label>
                      Ancho
                      <input
                        className={styles.formInput}
                        placeholder="ej: 230 mm x 173 mm x 37 mm..."
                        type="text"
                        name="dimensions"
                        data-subname="ancho"
                        onChange={handlerOnObj}
                        value={product.details?.dimensions?.ancho}
                      />
                    </label>
                    <label>
                      Profundidad
                      <input
                        className={styles.formInput}
                        placeholder="ej: 230 mm x 173 mm x 37 mm..."
                        type="text"
                        name="dimensions"
                        data-subname="profundidad"
                        onChange={handlerOnObj}
                        value={product.details?.dimensions?.profundidad}
                      />
                    </label>
                    <label>
                      Alto
                      <input
                        className={styles.formInput}
                        placeholder="ej: 230 mm x 173 mm x 37 mm..."
                        type="text"
                        name="dimensions"
                        data-subname="alto"
                        onChange={handlerOnObj}
                        value={product.details?.dimensions?.alto}
                      />
                    </label>
                  </>
                ) : product.type === "cooler" ? (
                  <>
                    <label>Luces RGB</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="RGB"
                      onChange={handleDetailsInput}
                      value={product.details?.RGB}
                    />
                    <label>Fans</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="fans"
                      onChange={handleDetailsInput}
                      value={product.details?.fans}
                    />
                    <label>nivel de ruido</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="nivel de ruido"
                      onChange={handleDetailsInput}
                      value={product.details?.["nivel de ruido"]}
                    />
                    <label>Consumo</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: De Mano..."
                      type="text"
                      name="consumo"
                      onChange={handleDetailsInput}
                      value={product.details?.consumo}
                    />
                    <label>TDP</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="tdp"
                      onChange={handleDetailsInput}
                      value={product.details?.tdp}
                    />
                    <label>Disipación</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: De Mano..."
                      type="text"
                      name="disipasión"
                      onChange={handleDetailsInput}
                      value={product.details?.["disipasión"]}
                    />

                    <label>Dimensiones</label>
                    <label>
                      Altura
                      <input
                        className={styles.formInput}
                        placeholder="ej: 66 mm"
                        type="text"
                        name="dimensions"
                        data-subname="altura"
                        onChange={handlerOnObj}
                        value={product.details?.dimensions?.altura}
                      />
                    </label>
                    <label>
                      Tamaño Coolers
                      <input
                        className={styles.formInput}
                        placeholder="ej: 120 mm"
                        type="text"
                        name="dimensions"
                        data-subname="tamaño_coolers"
                        onChange={handlerOnObj}
                        value={product.details?.dimensions?.tamaño_coolers}
                      />
                    </label>
                    <label>Compatibilidades</label>
                    <input
                      className={styles.formInput}
                      placeholder="..."
                      type="text"
                      name="compatibilidad"
                      onChange={handlerOnArr}
                      data-foo={0}
                      value={product.details?.compatibilidad?.[0]}
                    />
                    <input
                      className={styles.formInput}
                      placeholder="..."
                      type="text"
                      name="compatibilidad"
                      onChange={handlerOnArr}
                      data-foo={1}
                      value={product.details?.compatibilidad?.[1]}
                    />
                    <input
                      className={styles.formInput}
                      placeholder="..."
                      type="text"
                      name="compatibilidad"
                      onChange={handlerOnArr}
                      data-foo={2}
                      value={product.details?.compatibilidad?.[2]}
                    />
                    <input
                      className={styles.formInput}
                      placeholder="..."
                      type="text"
                      name="compatibilidad"
                      onChange={handlerOnArr}
                      data-foo={3}
                      value={product.details?.compatibilidad?.[3]}
                    />
                    <input
                      className={styles.formInput}
                      placeholder="..."
                      type="text"
                      name="compatibilidad"
                      onChange={handlerOnArr}
                      data-foo={4}
                      value={product.details?.compatibilidad?.[4]}
                    />
                    <input
                      className={styles.formInput}
                      placeholder="..."
                      type="text"
                      name="compatibilidad"
                      onChange={handlerOnArr}
                      data-foo={5}
                      value={product.details?.compatibilidad?.[5]}
                    />
                  </>
                ) : product.type === "mouse" ? (
                  <>
                    <label>Luces RGB</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: none"
                      type="text"
                      name="rgb"
                      onChange={handleDetailsInput}
                      value={product.details?.rgb}
                    />
                    <label>Descripción</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="description"
                      onChange={handleDetailsInput}
                      value={product.details?.description}
                    />
                    <label>Conectividades</label>
                    <label>
                      1:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        onChange={handlerOnArr}
                        data-foo={0}
                        value={product.details?.connectivity?.[0]}
                      />
                    </label>
                    <label>
                      2:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        onChange={handlerOnArr}
                        data-foo={1}
                        value={product.details?.connectivity?.[1]}
                      />
                    </label>
                    <label>
                      3:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        onChange={handlerOnArr}
                        data-foo={2}
                        value={product.details?.connectivity?.[2]}
                      />
                    </label>
                    <label>
                      4:
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        onChange={handlerOnArr}
                        data-foo={3}
                        value={product.details?.connectivity?.[3]}
                      />
                    </label>
                    <label>Sensibilidad</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: De Mano..."
                      type="text"
                      name="sensitivity"
                      onChange={handleDetailsInput}
                      value={product.details?.sensitivity}
                    />
                    <label>Botones</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="buttons"
                      onChange={handleDetailsInput}
                      value={product.details?.buttons}
                    />
                    <label>Clicks</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: 230 mm x 173 mm x 37 mm..."
                      type="text"
                      name="clicks"
                      onChange={handleDetailsInput}
                      value={product.details?.clicks}
                    />
                    <label>Dimensiones</label>
                    <label>
                      Longitud
                      <input
                        className={styles.formInput}
                        type="text"
                        name="sizes"
                        data-subname="longitud"
                        onChange={handlerOnObj}
                        value={product.details?.sizes?.longitud}
                      />
                    </label>
                    <label>
                      Ancho
                      <input
                        className={styles.formInput}
                        type="text"
                        name="sizes"
                        data-subname="ancho"
                        onChange={handlerOnObj}
                        value={product.details?.sizes?.ancho}
                      />
                    </label>
                    <label>
                      Altura
                      <input
                        className={styles.formInput}
                        type="text"
                        name="sizes"
                        data-subname="altura"
                        onChange={handlerOnObj}
                        value={product.details?.sizes?.altura}
                      />
                    </label>
                    <label>Peso</label>
                    <input
                      className={styles.formInput}
                      type="text"
                      name="weight"
                      onChange={handleDetailsInput}
                      value={product.details?.weight}
                    />
                  </>
                ) : product.type === "auricular" ? (
                  <>
                    <label>Audio</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="audio"
                      onChange={handleDetailsInput}
                      value={product.details?.audio}
                    />
                    <label>Color</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="color"
                      onChange={handleDetailsInput}
                      value={product.details?.color}
                    />
                    <label>Conexión</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="conexion"
                      onChange={handleDetailsInput}
                      value={product.details?.conexion}
                    />
                    <label>Micrófono</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: De Mano..."
                      type="text"
                      name="microfono"
                      onChange={handleDetailsInput}
                      value={product.details?.microfono}
                    />
                    <label>Tipo De Audio</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="TipoDeAudio"
                      onChange={handleDetailsInput}
                      value={product.details?.TipoDeAudio}
                    />
                  </>
                ) : product.type === "gabinete" ? (
                  <>
                    <label>Dimensiones</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: 52 cm x 24.5 cm x 52 cm"
                      type="text"
                      name="dimensions"
                      onChange={handleDetailsInput}
                      value={product.details?.dimensions}
                    />
                    <label>Peso</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="weight"
                      onChange={handleDetailsInput}
                      value={product.details?.weight}
                    />

                    <label>Cooling</label>

                    <label>
                      Front Fans Num
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="cooling"
                        data-subname="front_fans_num"
                        onChange={handlerOnObj}
                        value={product.details?.cooling?.front_fans_num}
                      />
                    </label>
                    <label>Front Fans Dimension(mm)</label>
                    <label>
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="cooling"
                        onChange={handlerOnArr}
                        data-foo={0}
                        data-subname="front_fans_dimension_mm"
                        value={
                          product.details?.cooling?.front_fans_dimension_mm?.[0]
                        }
                      />
                    </label>
                    <label>
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="cooling"
                        onChange={handlerOnArr}
                        data-foo={1}
                        data-subname="front_fans_dimension_mm"
                        value={
                          product.details?.cooling?.front_fans_dimension_mm?.[1]
                        }
                      />
                    </label>
                    <label>
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="cooling"
                        onChange={handlerOnArr}
                        data-foo={2}
                        data-subname="front_fans_dimension_mm"
                        value={
                          product.details?.cooling?.front_fans_dimension_mm?.[2]
                        }
                      />
                    </label>
                    <label>
                      Back Fans Num
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="cooling"
                        data-subname="back_fans_num"
                        onChange={handlerOnObj}
                        value={product.details?.cooling?.back_fans_num}
                      />
                    </label>
                    <label>Back Fans Dimension(mm)</label>
                    <label>
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="cooling"
                        onChange={handlerOnArr}
                        data-foo={0}
                        data-subname="back_fans_dimension_mm"
                        value={
                          product.details?.cooling?.back_fans_dimension_mm?.[0]
                        }
                      />
                    </label>
                    <label>Color</label>
                    <input
                      className={styles.formInput}
                      placeholder="ej: De Mano..."
                      type="text"
                      name="color"
                      onChange={handleDetailsInput}
                      value={product.details?.color}
                    />
                    <label>Materiales</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="material"
                      onChange={handleDetailsInput}
                      value={product.details?.material}
                    />
                    <label>Luces RGB</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="RGB"
                      onChange={handleDetailsInput}
                      value={product.details?.RGB}
                    />
                    <label>Tipo de Estructura</label>
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="structure type"
                      onChange={handleDetailsInput}
                      value={product.details?.["structure type"]}
                    />

                    <label>Conectividad</label>
                    <label>Disk</label>
                    <label>
                      HDD
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="disk"
                        data-subsubname="hdd"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.disk?.hdd}
                      />
                    </label>
                    <label>
                      SSD
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="disk"
                        data-subsubname="ssd"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.disk?.ssd}
                      />
                    </label>
                    <label>
                      Size Inch
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="disk"
                        data-subsubname="size_inch"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.disk?.size_inch}
                      />
                    </label>
                    <label>
                      Fuente de Alimentación
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="power_supply_type"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.power_supply_type}
                      />
                    </label>
                    <label>
                      Tipo de Mother
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="mother_types"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.mother_types}
                      />
                    </label>
                    <label>
                      Máxima longitud PSU
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="max_length_psu"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.max_length_psu}
                      />
                    </label>
                    <label>
                      Máxima longitud GPU
                      <input
                        className={styles.formInput}
                        placeholder=""
                        type="text"
                        name="connectivity"
                        data-subname="max_length_gpu"
                        onChange={handlerOnObj}
                        value={product.details?.connectivity?.max_length_gpu}
                      />
                    </label>
                  </>
                ) : null}
              </div>
              <span className={styles.messageReturn}>
                {message.length ? message : null}
              </span>
              <div className={styles.containerBtn}>
                <button className={styles.btn} type="submit">
                  Enviar Producto
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductFormAdmin;
