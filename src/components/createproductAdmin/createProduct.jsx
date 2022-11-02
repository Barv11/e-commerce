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

  const [product, setProduct] = useState({
    name: "",
    cost: "",
    img: [],
    // details: '',
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
      // details: '',
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
          <input className={styles.formInput}  type={'number'} placeholder={'Cantidad'} 
          name={'stock'} value={product.stock}  
          onChange={(e)=> handleInput(e)} /><br/>
          {
            errors.stock && (
              <p className={styles.textError} >{errors.stock}</p>
          )} */}

            {/* <label htmlFor='details'>Details</label>
          <input className={styles.formInput} type={'text'} placeholder={'details'}
          name={'details'} value={product.details} 
          onChange={(e)=> handleInput(e)} /><br/>
            {
              errors.details && (
              <p className={styles.textError} >{errors.details}</p>
            )} */}
            <label htmlFor="img">Img</label>
            {/* <FormGroup> */}
            {/* <input
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

            <label htmlFor="type">Tipo</label>
            <input
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingresar categoría"}
              name={"type"}
              value={product.type}
              onChange={(e) => handleInput(e)}
            />
            <br />
            <p className={styles.textError}>{errors.type ? errors.type : ""}</p>

            <label>Categorías</label>
            <select name="type" className={styles.formInput}>
              <option value="null">Elija...</option>
              <option value="mother">Mother</option>
              <option value="procesador">Procesador</option>
              <option value="disco">Disco</option>
              <option value="ram">Ram</option>
              <option value="solido">Solido</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="mouse">Mouse</option>
              <option value="pantalla">Pantalla</option>
              <option value="fuente">Fuente</option>
              <option value="teclado">Teclado</option>
              <option value="auricular">Auricular</option>
              <option value="gabinete">Gabinete</option>
              <option value="cooler">Cooler</option>
            </select>

            <label>Luces RGB</label>
            <select name="RGB" className={styles.formInput}>
              <option>true</option>
              <option>false</option>
            </select>

            <label>Color</label>
            <input
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese un color"}
              name={"color"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Conectividad</label>
            <input
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese la conectividad"}
              name={"connectivity"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Tipo de teclado</label>
            <input
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese tipo de teclado"}
              name={"tipo_de_teclado"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Tipo de Mecanismo</label>
            <input
              className={styles.formInput}
              type={"text"}
              placeholder={"Ingrese tipo de mecanismo"}
              name={"tipo_de_mecanismo"}
              value={product.name}
              // onChange={(e) => handleInput(e)}
            />

            <label>Dimensiones</label>
            <label>{"Ancho (mm):"}<input
              className={styles.formInput}
              type={"number"}
              placeholder={"Ingrese dimensiones"}
              name={"dimensions"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            /></label>
            <label>{"Profundidad (mm):"}<input
              className={styles.formInput}
              type={"number"}
              placeholder={"Ingrese dimensiones"}
              name={"dimensions"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            /></label>
            <label>{"Alto (mm):"}<input
              className={styles.formInput}
              type={"number"}
              placeholder={"Ingrese dimensiones"}
              name={"dimensions"}
              // value={product.name}
              // onChange={(e) => handleInput(e)}
            /></label>


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
