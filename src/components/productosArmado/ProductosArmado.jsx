import React,{useState, useEffect} from "react";
import { ContainerProductos, Navbar, Footer, PcArmada, Loader } from '../../components';
import style from './ProductosArmado.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductById } from '../../redux/actions/index';


function ProductosArmado({ products }) {


  const dispatch = useDispatch()
  const [ram, setRam] = useState([]);
  const [mother, setMother] = useState([]);
  const [fuente, setFuente] = useState([]);
  const [solido, setSolido] = useState([]);
  const [procesador, setProcesador] = useState([]);
  const [tarjeta, setTarjeta] = useState([]);
  const [cooler, setCooler] = useState([]);
  const [gabinete, setGabinete] = useState([]);
  const [disco, setDisco] = useState([]);
  
  useEffect(() => {
    setRam(products?.filter(e => e.type === 'ram'))
    setMother(products?.filter(e => e.type === 'mother'))
    setFuente(products?.filter(e => e.type === 'fuente'))
    setSolido(products?.filter(e => e.type === 'solido'))
    setProcesador(products?.filter(e => e.type === 'procesador'))
    setTarjeta(products?.filter(e => e.type === 'tarjeta'))
    setCooler(products?.filter(e => e.type === 'cooler'))
    setGabinete(products?.filter(e => e.type === 'gabinete'))
    setDisco(products?.filter(e => e.type === 'disco'))
  }, [products])
  

  
  // const [pcArmada, setPcArmada] = useState([]); 
  const searchByIdProduct = useSelector(state => state.searchByIdProduct)

  useEffect(() => {   
    dispatch(searchProductById('clear'))
  },[dispatch])
  
  console.log(searchByIdProduct)

  const handleAdded = (e) => {
    
    dispatch(searchProductById(e.target.value)) 

  }
  

  // console.log(pcArmada)

  
  if(procesador.length && mother.length){
    return (
    <div>
      <Navbar/>
      <div className={style.allItems}>
        <div>
          <ContainerProductos items={procesador && procesador} name="procesador" title="Procesador" handleAdded={handleAdded}/>
          <ContainerProductos items={mother && mother} name="mother" title="MotherBoard" handleAdded={handleAdded}/>
          <ContainerProductos items={tarjeta && tarjeta} name="tarjeta" title="Tarjeta" handleAdded={handleAdded}/>
          <ContainerProductos items={ram && ram} name="ram" title="RAM" handleAdded={handleAdded}/>
          <ContainerProductos items={solido && solido} name="solido" title="Solido" handleAdded={handleAdded}/>
          <ContainerProductos items={disco && disco} name="disco" title="Disco" handleAdded={handleAdded}/>
          <ContainerProductos items={fuente && fuente} name="fuente" title="Fuente" handleAdded={handleAdded}/>
          <ContainerProductos items={cooler && cooler} name="cooler" title="Cooler" handleAdded={handleAdded}/>
          <ContainerProductos items={gabinete && gabinete} name="coogabineteler" title="Gabinete" handleAdded={handleAdded}/>
        </div>
        <div className={style.pcArmada}>
          <PcArmada item={searchByIdProduct && searchByIdProduct}/>
        </div>
      </div>
      <Footer/>
      </div>
    )
    
  } else {
    return ( <div>
      <Navbar/>
      <div>
      <Loader/>
      </div>
      <Footer/>
      </div>  )

  }
}

export default ProductosArmado;
