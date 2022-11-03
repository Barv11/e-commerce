import { FormGroup } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProduct, getAllProductos } from "../../redux/actions/index";
import Navbar from "../Navbar/Navbar";
import styles from "./createProduct.module.css";

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

function CreateProduct() {
  // const allProducts = useSelector(state => state.adminProducts)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.loginAccess)

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
    // if(!input.details){
    //   errors.details = 'La Descripción es requerida'
    // }

    if (!input.type) {
      errors.type = "La Categoría es requerida";
    }
    if (!input.brand) {
      errors.brand = "La Marca es requerida";
    }
    return errors;
  }

  const [details, setDetails] = useState({});
  const [input, setInput] = useState({});

  const handleDetailsInput = (e) => {
    setDetails({

      ...details,
     [e.target.name]: e.target.value,

    });
    setProduct({
      ...product,
      details: details
    })
  };

  // const handleInputType = (e) => {
  //   setInput({
  //     ...input,
  //     type: e.target.value,
  //   })
  // }

  const [product, setProduct] = useState({
    name: "",
    cost: "",
    img: [],
    
    type: "",
    brand: "",
  });

  const [errors, setErrors] = useState({});

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
    if (e.target.name === "type") {
      setProduct({
        ...product,
        type: [e.target.value],
      });
    } 
      
       

    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
    

    setErrors(
      validate({
        ...product,
        [e.target.name]: e.target.value,
      })
    );
  };

 
  const handleSubmit = (e) => {
    const {token} = user
    e.preventDefault();
    dispatch(postProduct(product,{token}));

    setProduct({
      name: "",
      cost: "",
      img: "",
      
      type: "",
      brand: "",
    });
  };

  useEffect(() => {
    return dispatch(getAllProductos());
  }, []);

  console.log(product);
  return (
    <>
      <Navbar />
      <div className={styles.containerForm}>
        <div className={styles.productContainer}>
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
            <p className={styles.textError}>{errors.name ? errors.name : ""}</p>

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
            <p className={styles.textError}>{errors.cost ? errors.cost : ""}</p>

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

            {/* <label htmlFor='stock'>Cantidad</label>
          <input placeholder='' className={styles.formInput}  type={'number'} placeholder={'Cantidad'} 
          name={'stock'} value={product.stock}  
          onChange={(e)=> handleInput(e)} /><br/>
          {
            errors.stock && (
              <p className={styles.textError} >{errors.stock}</p>
          )} */}

            {/* <label htmlFor='details'>Details</label>
          <input placeholder='' className={styles.formInput} type={'file'} placeholder={'details'}
          name={'details'} value={product.details} 
          onChange={(e)=> handleInput(e)} /><br/>
            {
              errors.details && (
              <p className={styles.textError} >{errors.details}</p>
            )} */}
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
              // onChange={(e)=> handleimg(e)}
            />
            {/* {loading? (<h8>Cargando imágenes...</h8>) : <img src={img} style={{width: "300px"}}/> } */}
            <br />
            {/* </FormGroup> */}
            <p className={styles.textError}>{errors.img ? errors.img : ""}</p>

            {/* <label htmlFor="type">Tipo</label>
            <input placeholder=''
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingresar categoría"}
              name={"type"}
              value={product.type}
              onChange={(e) => handleInput(e)}
            />
            <br />
            <p className={styles.textError}>{errors.type ? errors.type : ""}</p> */}

            <label>Categorías</label>
            <select defaultValue={"null"} onChange={(e) => handleInput(e)} name="type" className={styles.formInput}>
              <option value="null">Elija...</option>
              <option value="mother">Mother</option>
              <option name="procesador"  value="procesador">Procesador</option>
              <option name="disco" value="disco">Disco</option>
              <option name="ram" value="ram">Ram</option>
              <option name="solido" value="solido">Solido</option>
              <option name="tarjeta" value="tarjeta">Tarjeta</option>
              <option name="mouse" value="mouse">Mouse</option>
              <option name="pantalla" value="pantalla">Pantalla</option>
              <option name="fuente" value="fuente">Fuente</option>
              <option name="teclado" value="teclado">Teclado</option>
              <option name="auricular" value="auricular">Auricular</option>
              <option name="gabinete" value="gabinete">Gabinete</option>
              <option name="cooler" value="cooler">Cooler</option>
            </select>

             { product.type === "mother"?(
             <div>
               <form>
                     <label htmlFor="generation">generation</label>
                       <input placeholder='' 
                       type="text"
                       name="generation"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Cantidad De Slot Pci-e 16X">Cantidad De Slot Pci-e 16X</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad De Slot Pci-e 16X"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="Cantidad De Slot Pci-e 1X">Cantidad De Slot Pci-e 1X</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad De Slot Pci-e 1X"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Tecnologia Multi Gpu">Tecnologia Multi Gpu</label>
                       <input placeholder='' 
                       type="text"
                       name="Tecnologia Multi Gpu"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Puertos Sata">Puertos Sata</label>
                       <input placeholder='' 
                       type="text"
                       name="Puertos Sata"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="Salida Vga">Salida Vga</label>
                       <input placeholder='' 
                       type="text"
                       name="Salida Vga"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="Salida HDMI">Salida HDMI</label>
                       <input placeholder='' 
                       type="text"
                       name="Salida HDMI"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="Salida Dvi">Salida Dvi</label>
                       <input placeholder='' 
                       type="text"
                       name="Salida Dvi"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />  
                          <label htmlFor="Salidas Display Ports">Salidas Display Ports</label>
                       <input placeholder='' 
                       type="text"
                       name="Salidas Display Ports"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                       <label htmlFor="Cantidad de Slot M.2 Totales">Cantidad de Slot M.2 Totales</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad de Slot M.2 Totales"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="Placa Wifi Integrada">Placa Wifi Integrada</label>
                       <input placeholder='' 
                       type="text"
                       name="Placa Wifi Integrada"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Placa de Red">Placa de Red</label>
                       <input placeholder='' 
                       type="text"
                       name="Placa de Red"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Puerto Ps/2">Puerto Ps/2</label>
                       <input placeholder='' 
                       type="text"
                       name="Puerto Ps/2"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                       <label htmlFor="Puertos Usb 2.0 Traseros">Puertos Usb 2.0 Traseros</label>
                       <input placeholder='' 
                       type="text"
                       name="Puertos Usb 2.0 Traseros"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="Puertos Usb 3.0 Traseros">Puertos Usb 3.0 Traseros</label>
                       <input placeholder='' 
                       type="text"
                       name="Puertos Usb 3.0 Traseros"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="Puertos Usb 3.1 Traseros">Puertos Usb 3.1 Traseros</label>
                       <input placeholder='' 
                       type="text"
                       name="Puertos Usb 3.1 Traseros"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Puertos Usb 3.2 Traseros">Puertos Usb 3.2 Traseros</label>
                       <input placeholder='' 
                       type="text"
                       name="Puertos Usb 3.2 Traseros"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Puertos Usb Type-c">Puertos Usb Type-c</label>
                       <input placeholder='' 
                       type="text"
                       name="Puertos Usb Type-c"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Cantidad De Slot Pci-e 4X">Cantidad De Slot Pci-e 4X</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad De Slot Pci-e 4X"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Cantidad De Slot M.2 Sata">Cantidad De Slot M.2 Sata</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad De Slot M.2 Sata"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="Cantidad De Slot M.2 Nvme">Cantidad De Slot M.2 Nvme</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad De Slot M.2 Nvme"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          

                 </form>
              </div>):
              product.type === "procesador"?(
               <div>
                 <form>
                 <label htmlFor="Modelo">Modelo</label>
                       <input placeholder='' 
                       type="text"
                       name="Modelo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Socket">Socket</label>
                       <input placeholder='' 
                       type="text"
                       name="Socket"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                      <label htmlFor="Núcleos">Núcleos</label>
                       <input placeholder='' 
                       type="text"
                       name="Núcleos"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Frecuencia">Frecuencia</label>
                       <input placeholder='' 
                       type="text"
                       name="Frecuencia"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Proceso_De_Fabricación">Proceso_De_Fabricación</label>
                       <input placeholder='' 
                       type="text"
                       name="Proceso_De_Fabricación"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="Gpu">Gpu</label>
                       <input placeholder='' 
                       type="text"
                       name="Gpu"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Hilos">Hilos</label>
                       <input placeholder='' 
                       type="text"
                       name="Hilos"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Frecuencia_Turbo">Frecuencia_Turbo</label>
                       <input placeholder='' 
                       type="text"
                       name="Frecuencia_Turbo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          
                          
                 </form>
               </div>):
              product.type === "disco"?(
              <div>
              <form>
                 <label htmlFor="type">type</label>
                       <input placeholder='' 
                       type="text"
                       name="type"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                      <label htmlFor="capacity">capacity</label>
                       <input placeholder='' 
                       type="text"
                       name="capacity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="frequency">frequency</label>
                       <input placeholder='' 
                       type="text"
                       name="frequency"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="bus">bus</label>
                       <input placeholder='' 
                       type="text"
                       name="bus"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="bufer">bufer</label>
                       <input placeholder='' 
                       type="text"
                       name="bufer"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="size">size</label>
                       <input placeholder='' 
                       type="text"
                       name="size"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                 </form>
              </div>):        
                    
             product.type === "ram"?(
              <div>
              <form>
                 <label htmlFor="type">type</label>
                       <input placeholder='' 
                       type="text"
                       name="type"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="format">format</label>
                       <input placeholder='' 
                       type="text"
                       name="format"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                      <label htmlFor="frequency">frequency</label>
                       <input placeholder='' 
                       type="text"
                       name="frequency"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="capacity">capacity</label>
                       <input placeholder='' 
                       type="text"
                       name="capacity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="latency">latency</label>
                       <input placeholder='' 
                       type="text"
                       name="latency"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="voltage">voltage</label>
                       <input placeholder='' 
                       type="text"
                       name="voltage"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="RGB">RGB</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="disipador">disipador</label>
                       <input placeholder='' 
                       type="text"
                       name="disipador"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          
                          
                 </form>
               </div>):
              product.type === "solido"?(
              <div>
              <form>
                 <label htmlFor="type">type</label>
                       <input placeholder='' 
                       type="text"
                       name="type"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                          
                          <label htmlFor="capacity">capacity</label>
                       <input placeholder='' 
                       type="text"
                       name="capacity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="size">size</label>
                       <input placeholder='' 
                       type="text"
                       name="size"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="bus">bus</label>
                       <input placeholder='' 
                       type="text"
                       name="bus"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="lectura">lectura</label>
                       <input placeholder='' 
                       type="text"
                       name="lectura"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="escritura">escritura</label>
                       <input placeholder='' 
                       type="text"
                       name="escritura"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                 </form>
              </div>):     
              product.type === "tarjeta"?(
              <div>
              <form>
                     <label htmlFor="tipo">tipo</label>
                       <input placeholder='' 
                       type="text"
                       name="tipo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="chipset Gpu">chipset Gpu</label>
                       <input placeholder='' 
                       type="text"
                       name="chipset Gpu"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="Caracteristicas Especiales">Caracteristicas Especiales</label>
                       <input placeholder='' 
                       type="text"
                       name="Caracteristicas Especiales"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="dimensiones">dimensiones</label>
                       <input placeholder='' 
                       type="text"
                       name="dimensiones"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="conectividad">conectividad</label>
                       <input placeholder='' 
                       type="text"
                       name="conectividad"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="consumo">consumo</label>
                       <input placeholder='' 
                       type="text"
                       name="consumo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="watts Recomendados">watts Recomendados</label>
                       <input placeholder='' 
                       type="text"
                       name="watts Recomendados"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="Cantidad Pcie De 6 Pines">Cantidad Pcie De 6 Pines</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad Pcie De 6 Pines"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />  
                          <label htmlFor="CantidadPcieDe8Pines">Cantidad Pcie De 8 Pines</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad Pcie De 8 Pines"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                       <label htmlFor="backplate">backplate</label>
                       <input placeholder='' 
                       type="text"
                       name="backplate"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="BlockVgaWaterCooling">Block Vga Water Cooling</label>
                       <input placeholder='' 
                       type="text"
                       name="Block Vga Water Cooling"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="cantidad Cooler">cantidad Cooler</label>
                       <input placeholder='' 
                       type="text"
                       name="cantidad Cooler"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="velocidad Memoria">velocidad Memoria</label>
                       <input placeholder='' 
                       type="text"
                       name="velocidad Memoria"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                       <label htmlFor="tipo De Memoria">tipo De Memoria</label>
                       <input placeholder='' 
                       type="text"
                       name="tipo De Memoria"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="Capasidad De Memoria">Capasidad De Memoria</label>
                       <input placeholder='' 
                       type="text"
                       name="Capasidad De Memoria"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="interface De Memoria">interface De Memoria</label>
                       <input placeholder='' 
                       type="text"
                       name="interface De Memoria"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Velosidad Core Turbo">Velosidad Core Turbo</label>
                       <input placeholder='' 
                       type="text"
                       name="Velosidad Core Turbo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="tipo De Procesos">tipo De Procesos</label>
                       <input placeholder='' 
                       type="text"
                       name="tipo De Procesos"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Cantidad De Procesos">Cantidad De Procesos</label>
                       <input placeholder='' 
                       type="text"
                       name="Cantidad De Procesos"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                       
                          

                 </form>
              </div>):
              product.type === "pantalla"?(
                <div>
                <form>
                 <label htmlFor="tiempo De Respuesta">tiempo De Respuesta</label>
                       <input placeholder='' 
                       type="text"
                       name="tiempo De Respuesta"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="tipo De Panel">tipo De Panel</label>
                       <input placeholder='' 
                       type="text"
                       name="tipo De Panel"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                      <label htmlFor="resolution">resolution</label>
                       <input placeholder='' 
                       type="text"
                       name="resolution"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="iluminacion">iluminacion</label>
                       <input placeholder='' 
                       type="text"
                       name="iluminacion"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="consumo">consumo</label>
                       <input placeholder='' 
                       type="text"
                       name="consumo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="connectivity">connectivity</label>
                       <input placeholder='' 
                       type="text"
                       name="connectivity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="RGB">RGB</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="peso">peso</label>
                       <input placeholder='' 
                       type="text"
                       name="peso"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                          <label htmlFor="frequency">frequency</label>
                       <input placeholder='' 
                       type="text"
                       name="frequency"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                        <label htmlFor="pulgadas">pulgadas</label>
                       <input placeholder='pulgadas ej: 24.5...' 
                       type="text"
                       name="pulgadas"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          
                          
                 </form>
               </div>): 
              product.type === "fuente"?(
              <div>
              <form>
                     <label htmlFor="Watts">Watts</label>
                       <input placeholder='' 
                       type="text"
                       name="Watts"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Format">Format</label>
                       <input placeholder='' 
                       type="text"
                       name="Format"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="Color">Color</label>
                       <input placeholder='' 
                       type="text"
                       name="Color"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Operating Temperature">Operating Temperature</label>
                       <input placeholder='' 
                       type="text"
                       name="Operating Temperature"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Input Voltage">Input Voltage</label>
                       <input placeholder='' 
                       type="text"
                       name="Input Voltage"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="Cooling system">Cooling system</label>
                       <input placeholder='' 
                       type="text"
                       name="Cooling system"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                          <label htmlFor="RGB Fan">RGB Fan</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB Fan"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                  </form>
              </div>): 
              product.type === "teclado"?(
              <div>
              <form>
                     <label htmlFor="RGB">RGB</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="color">color</label>
                       <input placeholder='' 
                       type="text"
                       name="color"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="connectivity">connectivity</label>
                       <input placeholder='' 
                       type="text"
                       name="connectivity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="tipo de teclado">tipo de teclado</label>
                       <input placeholder='ej: De Mano...' 
                       type="text"
                       name="tipo de teclado"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="tipo de mecanismo">tipo de mecanismo</label>
                       <input placeholder='' 
                       type="text"
                       name="tipo de mecanismo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="dimensions">dimensions</label>
                       <input placeholder='ej: 230 mm x 173 mm x 37 mm...' 
                       type="text"
                       name="dimensions"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                    </form>
              </div>): 
              product.type === "cooler"?(
              <div>
              <form>
                     <label htmlFor="RGB">RGB</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="fans">fans</label>
                       <input placeholder='' 
                       type="text"
                       name="cfans"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="nivel de ruido">nivel de ruido</label>
                       <input placeholder='' 
                       type="text"
                       name="nivel de ruido"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="consumo">consumo</label>
                       <input placeholder='ej: De Mano...' 
                       type="text"
                       name="consumo"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="tdp">tdp</label>
                       <input placeholder='' 
                       type="text"
                       name="tdp"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="disipasión">disipasión</label>
                       <input placeholder='ej: De Mano...' 
                       type="text"
                       name="disipasión"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                        
                        <label htmlFor="dimensions">dimensions</label>
                       <input placeholder='ej: 230 mm x 173 mm...' 
                       type="text"
                       name="dimensions"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                         <label htmlFor="compatibilidad">compatibilidad</label>
                       <input placeholder='ej: 230 mm x 173 mm...' 
                       type="text"
                       name="compatibilidad"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                    </form>
              </div>):

              product.type === "mouse"?(
              <div>       
              <form>
                     <label htmlFor="RGB">RGB</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="description">description</label>
                       <input placeholder='' 
                       type="text"
                       name="description"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="connectivity">connectivity</label>
                       <input placeholder='' 
                       type="text"
                       name="connectivity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="sensitivity">sensitivity</label>
                       <input placeholder='ej: De Mano...' 
                       type="text"
                       name="sensitivity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="buttons">buttons</label>
                       <input placeholder='' 
                       type="text"
                       name="buttons"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="clicks">clicks</label>
                       <input placeholder='ej: 230 mm x 173 mm x 37 mm...' 
                       type="text"
                       name="clicks"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                         <label htmlFor="sizes">sizes</label>
                       <input placeholder='ej: 230 mm x 173 mm x 37 mm...' 
                       type="text"
                       name="sizes"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br />
                         <label htmlFor="weight">weight</label>
                       <input placeholder='ej: 230 mm x 173 mm x 37 mm...' 
                       type="text"
                       name="weight"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br />
                    </form>
              </div>): 
              product.type === "auricular"?(
              <div>
              <form>
                     <label htmlFor="audio">audio</label>
                       <input placeholder='' 
                       type="text"
                       name="audio"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="color">color</label>
                       <input placeholder='' 
                       type="text"
                       name="color"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="conexion">conexion</label>
                       <input placeholder='' 
                       type="text"
                       name="conexion"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="microfono">microfono</label>
                       <input placeholder='ej: De Mano...' 
                       type="text"
                       name="microfono"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="Tipo De Audio">Tipo De Audio</label>
                       <input placeholder='' 
                       type="text"
                       name="Tipo De Audio"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        
                    </form>
              </div>):
              product.type === "gabinete"?(
              <div>
              <form>
                     <label htmlFor="dimensions">dimensions</label>
                       <input placeholder='' 
                       type="text"
                       name="dimensions"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="weight">weight</label>
                       <input placeholder='' 
                       type="text"
                       name="weight"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="cooling">cooling</label>
                       <input placeholder='' 
                       type="text"
                       name="cooling"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="color">color</label>
                       <input placeholder='ej: De Mano...' 
                       type="text"
                       name="color"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="material">material</label>
                       <input placeholder='' 
                       type="text"
                       name="material"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                        <br />
                        <label htmlFor="RGB">RGB</label>
                       <input placeholder='' 
                       type="text"
                       name="RGB"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                          <br />
                          <label htmlFor="structure type">structure type</label>
                       <input placeholder='' 
                       type="text"
                       name="structure type"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />
                         <br /> 
                      <label htmlFor="connectivity">connectivity</label>
                       <input placeholder='' 
                       type="text"
                       name="connectivity"
                       onChange={(e) => handleDetailsInput(e)}
                       value={details.name}
                        />

                        
                    </form>
              </div>): null
             } 



            {/* <label>Luces RGB</label>
            <select name="RGB" className={styles.formInput}>
              <option>true</option>
              <option>false</option>
            </select>

            <label>Color</label>
            <input placeholder=''
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese un color"}
              name={"color"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Conectividad</label>
            <input placeholder=''
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese la conectividad"}
              name={"connectivity"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Tipo de teclado</label>
            <input placeholder=''
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese tipo de teclado"}
              name={"tipo_de_teclado"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Tipo de Mecanismo</label>
            <input placeholder=''
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese tipo de mecanismo"}
              name={"tipo_de_mecanismo"}
              value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Dimensiones</label>
            <label>{"Ancho (mm):"}<input placeholder=''
              className={styles.formInput}
              type={"number"}
              placeholder={"Ingrese dimensiones"}
              name={"dimensions"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            /></label>
            <label>{"Profundidad (mm):"}<input placeholder=''
              className={styles.formInput}
              type={"number"}
              placeholder={"Ingrese dimensiones"}
              name={"dimensions"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            /></label>
            <label>{"Alto (mm):"}<input placeholder=''
              className={styles.formInput}
              type={"number"}
              placeholder={"Ingrese dimensiones"}
              name={"dimensions"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            /></label> */}


            <div className={styles.containerBtn}>
              <button className={styles.btn} type="submit">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
