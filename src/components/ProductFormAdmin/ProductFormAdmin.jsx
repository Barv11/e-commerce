import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  postProduct,
  getAllProductos,
  searchProductById,
  updateProduct,
} from "../../redux/actions/index";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";
import styles from "./ProductFormAdmin.module.css";

// Lo moví acá para no ocupar visión (provisonal)
//Cloudinary
//   const [img, setimg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleimg = async (e) => {
//     const files = e.target.files
//     const data = new FormData();
//     data.append("file", files[0]);
//     data.append("upload_preset", "imgs")
//     setLoading(true);

//     const res = await axios.post (
//         "https://api.cloudinary.com/v1_1/juliap/img/upload",
//         data
//     )

//     console.log(res)
//     setimg(res.data.secure_url)

//     setProduct({
//       ...product,
//       img: res.data.secure_url
//     });
//     setErrors(validate({
//       ...product,
//       img:res.data.secure_url
//     }))
//     setLoading(false)
// }
//ProductsController
// const imgsCloudinary = async (img) =>{
//          const files = img;
//         const data = new FormData(); //datos que vamos a recibir
//         data.append("file", files[0]);//los files q recibimos
//         data.append("upload_preset", "imgs") //la carpeta donde lo vamos a subir

//     const res = await axios.post (
//         "https://api.cloudinary.com/v1_1/juliap/img/upload",
//         data
//     )
//     return res.data.secure_url;
// }
function ProductFormAdmin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginAccess);
  const searchByIdProduct = useSelector((state) => state.searchByIdProduct);
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState({
    name: "",
    cost: "",
    brand: "",
    img: [],
    type: "defect",
    details: {},
  });

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
    if (e.target.name === "uploads") {
      setProduct({
        ...product,
        img: [e.target.value],
      });

      setErrors(
        validate({
          ...product,
          img: [e.target.value],
        })
      );
    } else if (e.target.name === "type") {
      setProduct({
        ...product,
        type: e.target.value,
      });
    } else {
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateProduct(product));
      navigate("/products");
    } else {
      dispatch(postProduct(product));

      setProduct({
        name: "",
        cost: "",
        brand: "",
        img: "",
        type: "defect",
        details: {},
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(searchProductById(id));
    }
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      setProduct(searchByIdProduct);
    }
  }, [searchByIdProduct]);

  useEffect(() => {
    return dispatch(getAllProductos());
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
              <h2 className={styles.titleForm}>Crear producto</h2>
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

              <label htmlFor="img">Img</label>
              {/* <FormGroup> */}
              {/* <input placeholder=''
              id={"idPrueba"}
              multiple
              name={"uploads"}
              className={styles.formInput}
              type={"file"}
              placeholder={"img"}
              onChange={(e) => handleInput(e)}
              // onChange={(e)=> handleimg(e)}
            /> */}
              <input
                id={"idPrueba"}
                name={"uploads"}
                className={styles.formInput}
                type={"text"}
                value={product.img}
                placeholder={"Ingrese url de imagen"}
                onChange={(e) => handleInput(e)}
              />
              <br />
              <p className={styles.textError}>{errors.img ? errors.img : ""}</p>

              <label>Categorías</label>
              <select
                name="type"
                onChange={(e) => handleInput(e)}
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

              {product.type === "mother" ? (
                <>
                  <label>Generación</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="generation"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.generation}
                  />
                  <label>Connectividad</label>
                  <label>
                    Cantidad De Slot Pci-e 16X
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Cantidad De Slot Pci-e 16X"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Cantidad De Slot Pci-e 1X"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Tecnologia Multi Gpu"
                      onChange={(e) => handleDetailsInput(e)}
                      value={
                        product.details?.connectivity?.["Tecnologia Multi Gpu"]
                      }
                    />
                  </label>
                  <label>
                    Puertos Sata
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Puertos Sata"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.["Puertos Sata"]}
                    />
                  </label>
                  <label>
                    Salida Vga
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Salida Vga"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.["Salida Vga"]}
                    />
                  </label>
                  <label>
                    Salida HDMI
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Salida HDMI"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.["Salida HDMI"]}
                    />
                  </label>
                  <label>
                    Salida Dvi
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Salida Dvi"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.["Salida Dvi"]}
                    />
                  </label>
                  <label>
                    Salidas Display Ports
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Salidas Display Ports"
                      onChange={(e) => handleDetailsInput(e)}
                      value={
                        product.details?.connectivity?.["Salidas Display Ports"]
                      }
                    />
                  </label>
                  <label>
                    Cantidad de Slot M.2 Totales
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Cantidad de Slot M.2 Totales"
                      onChange={(e) => handleDetailsInput(e)}
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
                      name="Placa Wifi Integrada"
                      onChange={(e) => handleDetailsInput(e)}
                      value={
                        product.details?.connectivity?.["Placa Wifi Integrada"]
                      }
                    />
                  </label>
                  <label>
                    Placa de Red
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Placa de Red"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.["Placa de Red"]}
                    />
                  </label>
                  <label>
                    Puerto Ps/2
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Puerto Ps/2"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.["Puerto Ps/2"]}
                    />
                  </label>
                  <label>
                    Puertos Usb 2.0 Traseros
                    <input
                      className={styles.formInput}
                      placeholder=""
                      type="text"
                      name="Puertos Usb 2.0 Traseros"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Puertos Usb 3.0 Traseros"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Puertos Usb 3.1 Traseros"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Puertos Usb 3.2 Traseros"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Puertos Usb Type-c"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Cantidad De Slot Pci-e 4X"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Cantidad De Slot M.2 Sata"
                      onChange={(e) => handleDetailsInput(e)}
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
                      type="text"
                      name="Cantidad De Slot M.2 Nvme"
                      onChange={(e) => handleDetailsInput(e)}
                      value={
                        product.details?.connectivity?.[
                          "Cantidad De Slot M.2 Nvme"
                        ]
                      }
                    />
                  </label>
                </>
              ) : product.type === "procesador" ? (
                <>
                  <label>Modelo</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Modelo"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Modelo}
                  />
                  <label>Socket</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Socket"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Socket}
                  />
                  <label>Núcleos</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Núcleos"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.["Núcleos"]}
                  />
                  <label>Frecuencia</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Frecuencia"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Frecuencia}
                  />
                  <label>Proceso_De_Fabricación</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Proceso_De_Fabricación"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Proceso_De_Fabricación}
                  />
                  <label>Gpu</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Gpu"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Gpu}
                  />
                  <label>Hilos</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Hilos"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Hilos}
                  />
                  <label>Frecuencia Turbo</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Frecuencia_Turbo"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.type}
                  />
                  <label>Capacidad</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="capacity"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.capacity}
                  />
                  <label>Frecuencia</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="frequency"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.frequency}
                  />
                  <label>BUS</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="bus"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.bus}
                  />
                  <label>Búfer</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="bufer"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.bufer}
                  />
                  <label>Dimensiones</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="size"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.type}
                  />
                  <label>Formato</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="format"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.format}
                  />
                  <label>Frecuencia</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="frequency"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.frequency}
                  />
                  <label>Capacidad</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="capacity"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.capacity}
                  />
                  <label>Latencia</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="latency"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.latency}
                  />
                  <label>Voltaje</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="voltage"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.voltage}
                  />
                  <label>RGB</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="RGB"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.RGB}
                  />
                  <label>Disipador</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="disipador"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.type}
                  />
                  <label>Capacidad</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="capacity"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.capacity}
                  />
                  <label>Tamaño</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="size"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.size}
                  />
                  <label>bus</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="bus"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.bus}
                  />
                  <label>Lectura</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="lectura"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.lectura}
                  />
                  <label>Escritura</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="escritura"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tipo}
                  />
                  <label>Chipset Gpu</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="chipsetGpu"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.chipsetGpu}
                  />
                  <label>Caracteristicas Especiales</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="CaracteristicasEspeciales"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.CaracteristicasEspeciales}
                  />
                  <label>Dimensiones</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="dimensiones"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.dimensiones}
                  />
                  <label>Conectividad</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="conectividad"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.conectividad}
                  />
                  <label>Consumo</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="consumo"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.consumo}
                  />
                  <label>Watts Recomendados</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="wattsRecomendados"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.wattsRecomendados}
                  />
                  <label>Cantidad Pcie De 6 Pines</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="CantidadPcieDe6Pines"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.CantidadPcieDe6Pines}
                  />
                  <label>Cantidad Pcie De 8 Pines</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="CantidadPcieDe8Pines"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.CantidadPcieDe8Pines}
                  />
                  <label>Backplate</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="backplate"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.backplate}
                  />
                  <label>Block Vga Water Cooling</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="BlockVgaWaterCooling"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.BlockVgaWaterCooling}
                  />
                  <label>Cantidad Cooler</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="cantidadCooler"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.cantidadCooler}
                  />
                  <label>Velocidad Memoria</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="velocidadMemoria"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.velocidadMemoria}
                  />
                  <label>Tipo De Memoria</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="tipoDeMemoria"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tipoDeMemoria}
                  />
                  <label>Capasidad De Memoria</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="CapasidadDeMemoria"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.CapasidadDeMemoria}
                  />
                  <label>Interface De Memoria</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="interfaceDeMemoria"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.interfaceDeMemoria}
                  />
                  <label>Velosidad Core Turbo</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="VelosidadCoreTurbo"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.VelosidadCoreTurbo}
                  />
                  <label>Tipo De Procesos</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="tipoDeProcesos"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tipoDeProcesos}
                  />
                  <label>Cantidad De Procesos</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="CantidadDeProcesos"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tiempoDeRespuesta}
                  />
                  <label>Tipo De Panel</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="tipoDePanel"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tipoDePanel}
                  />
                  <label>Resolution</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="resolution"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.resolution}
                  />
                  <label>Iluminacion</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="iluminacion"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.iluminacion}
                  />
                  <label>Consumo</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="consumo"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.consumo}
                  />
                  <label>Connectivity</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="connectivity"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.connectivity}
                  />
                  <label>RGB</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="RGB"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.RGB}
                  />
                  <label>Peso</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="peso"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.peso}
                  />
                  <label>Frequency</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="frequency"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.frequency}
                  />
                  <label>Pulgadas</label>
                  <input
                    className={styles.formInput}
                    placeholder="pulgadas ej: 24.5..."
                    type="text"
                    name="pulgadas"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Watts}
                  />
                  <label>Formato</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="format"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Format}
                  />
                  <label>Color</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Color"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Color}
                  />
                  <label>Operating Temperature</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Operating temperature"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.["Operating Temperature"]}
                  />
                  <label>Dimensiones</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Dimensions"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.Dimensions}
                  />
                  <label>Input Voltage</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Input voltage"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.["Input Voltage"]}
                  />
                  <label>Cooling system</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="Cooling system"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.["Cooling system"]}
                  />
                  <label>RGB Fan</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="RGB Fan"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.RGB}
                  />
                  <label>Color</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="color"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.color}
                  />
                  <label>Conectividad</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="connectivity"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.connectivity}
                  />
                  <label>Tipo de teclado</label>
                  <input
                    className={styles.formInput}
                    placeholder="ej: De Mano..."
                    type="text"
                    name="tipo_de_teclado"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tipo_de_teclado}
                  />
                  <label>Tipo de mecanismo</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="tipo_de_mecanismo"
                    onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.RGB}
                  />
                  <label>Fans</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="fans"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.fans}
                  />
                  <label>nivel de ruido</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="nivel de ruido"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.["nivel de ruido"]}
                  />
                  <label>Consumo</label>
                  <input
                    className={styles.formInput}
                    placeholder="ej: De Mano..."
                    type="text"
                    name="consumo"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.consumo}
                  />
                  <label>TDP</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="tdp"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.tdp}
                  />
                  <label>Disipación</label>
                  <input
                    className={styles.formInput}
                    placeholder="ej: De Mano..."
                    type="text"
                    name="disipasión"
                    onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.dimensions?.tamaño_coolers}
                    />
                  </label>
                  <label>Compatibilidades</label>
                  <input
                    className={styles.formInput}
                    placeholder="..."
                    type="text"
                    name="compatibilidad"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.compatibilidad?.[0]}
                  />
                  <input
                    className={styles.formInput}
                    placeholder="..."
                    type="text"
                    name="compatibilidad"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.compatibilidad?.[1]}
                  />
                  <input
                    className={styles.formInput}
                    placeholder="..."
                    type="text"
                    name="compatibilidad"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.compatibilidad?.[2]}
                  />
                  <input
                    className={styles.formInput}
                    placeholder="..."
                    type="text"
                    name="compatibilidad"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.compatibilidad?.[3]}
                  />
                  <input
                    className={styles.formInput}
                    placeholder="..."
                    type="text"
                    name="compatibilidad"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.compatibilidad?.[4]}
                  />
                  <input
                    className={styles.formInput}
                    placeholder="..."
                    type="text"
                    name="compatibilidad"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.rgb}
                  />
                  <label>Descripción</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="description"
                    onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.[3]}
                    />
                  </label>
                  <label>Sensibilidad</label>
                  <input
                    className={styles.formInput}
                    placeholder="ej: De Mano..."
                    type="text"
                    name="sensitivity"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.sensitivity}
                  />
                  <label>Botones</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="buttons"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.buttons}
                  />
                  <label>Clicks</label>
                  <input
                    className={styles.formInput}
                    placeholder="ej: 230 mm x 173 mm x 37 mm..."
                    type="text"
                    name="clicks"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.clicks}
                  />
                  <label>Dimensiones</label>
                  <label>
                    Longitud
                    <input
                      className={styles.formInput}
                      type="text"
                      name="sizes"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.sizes?.longitud}
                    />
                  </label>
                  <label>
                    Ancho
                    <input
                      className={styles.formInput}
                      type="text"
                      name="sizes"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.sizes?.ancho}
                    />
                  </label>
                  <label>
                    Altura
                    <input
                      className={styles.formInput}
                      type="text"
                      name="sizes"
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.sizes?.altura}
                    />
                  </label>
                  <label>Peso</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    name="weight"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.audio}
                  />
                  <label>Color</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="color"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.color}
                  />
                  <label>Conexión</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="conexion"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.conexion}
                  />
                  <label>Micrófono</label>
                  <input
                    className={styles.formInput}
                    placeholder="ej: De Mano..."
                    type="text"
                    name="microfono"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.microfono}
                  />
                  <label>Tipo De Audio</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="TipoDeAudio"
                    onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.dimensions}
                  />
                  <label>Peso</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="weight"
                    onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.color}
                  />
                  <label>Materiales</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="material"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.material}
                  />
                  <label>Luces RGB</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="RGB"
                    onChange={(e) => handleDetailsInput(e)}
                    value={product.details?.RGB}
                  />
                  <label>Tipo de Estructura</label>
                  <input
                    className={styles.formInput}
                    placeholder=""
                    type="text"
                    name="structure type"
                    onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
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
                      onChange={(e) => handleDetailsInput(e)}
                      value={product.details?.connectivity?.max_length_gpu}
                    />
                  </label>
                </>
              ) : null}

              <div className={styles.containerBtn}>
                <button className={styles.btn} type="submit">
                  Crear
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
