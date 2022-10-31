import { FormGroup } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { postProduct, getAllProductos } from "../../redux/actions/index";
import styles from './createProduct.module.css'





function validate (input){
    const errors = {}
    if(!input.name){
      errors.name = 'Es Nombre es requerido'
    }
    if(!input.cost){
      errors.cost = 'Es Precio es requerido'
    }
    //  if(!input.img){
    //    errors.img = 'La img es requerida'
    //  }
    // if(!input.details){
    //   errors.details = 'La Descripción es requerida'
    // }
    
    if(!input.type){
      errors.type = 'La Categoría es requerida'
    }
    if(!input.brand){
      errors.brand = 'La Marca es requerida'
    }
    return errors
  }
  
  
  
  
  
  function CreateProduct() {
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllProductos())
    },[])
  
  
    // const allProducts = useSelector(state => state.adminProducts)
  
  //  const navigate = useNavigate();
  
  
    const [product, setProduct] = useState({
      name: '',
      cost:'', 
      // g 
      // details: '',
      type: '',
      brand:'',
  
    })
  
    const [errors, setErrors] = useState({})
  
    const handleInput = (e) =>{
      setProduct({
        ...product,
        [e.target.name]: e.target.value
      })
  
      setErrors(validate({
        ...product,
        [e.target.name]: e.target.value
      }))
    }
  
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
  
  
    const handleSubmit = (e)=>{
      e.preventDefault()
  
      dispatch(postProduct(product))
      console.log(product)
      
      setProduct({
      name: '',
      cost:'', 
      // img: '', 
      // details: '',
      type: '',
      brand: '',
      })
      
  
      //  navigate.push("/products");
    }
    console.log(product.img)
    return (
      <div className={styles.containerForm}>
  
      
      <div className={styles.productContainer}>
      
        <form className={styles.form} onSubmit={(e)=> handleSubmit(e)}>
          <h2 className={styles.titleForm} >Crear producto</h2>
          <label htmlFor='name'>Name</label>
          <input className={styles.formInput} type={'text'} placeholder={'name'}
           name={'name'} value={product.name}
            onChange={(e)=> handleInput(e)} /><br/>
                      {
              errors.name && (
                <p className={styles.textError}>{errors.name}</p>
            )}
  
          <label htmlFor='cost'>Cost</label>
          <input className={styles.formInput} type={'number'} placeholder={'cost'}
           name={'cost'} value={product.cost} 
            onChange={(e)=> handleInput(e)} /><br/>
            {
              errors.cost && (
                <p className={styles.textError} >{errors.cost}</p>
            )}
  
          <label htmlFor='brand'>Brand</label>
          < input className={styles.formInput} type={'text'} placeholder={'brand'}
           name={'brand'} value={product.brand}  
            onChange={(e)=> handleInput(e)}/><br/>
            {
              errors.brand && (
                < p className={styles.textError}>{errors.brand}</p>
            )}
  
          
  
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
          <label htmlFor='img'>Img</label>
          {/* <FormGroup> */}
          <input multiple name = {"uploads"} className={styles.formInput} type={'file'} placeholder={'img'}
           value={product.img} onChange={(e)=> handleInput(e)}
          // onChange={(e)=> handleimg(e)} 
          />
          {/* {loading? (<h8>Cargando imágenes...</h8>) : <img src={img} style={{width: "300px"}}/> } */}
          <br/>
          {/* </FormGroup> */}
            {
              errors.img && (
                <p className={styles.textError} >{errors.img}</p>
            )}

          <label htmlFor='type'>Type</label>
          <input className={styles.formInput}  type={'text'} placeholder={'type'} 
          name={'type'} value={product.type}  
          onChange={(e)=> handleInput(e)} /><br/>
            {
              errors.type && (
                < p className={styles.textError}>{errors.type}</p>
            )}
        <div className={styles.containerBtn}>
  
          <button className={styles.btn} type='submit'>Crear</button>
                </div>
          
        </form>
        
  
      </div>
      </div>
    )
  }
  
  export default CreateProduct