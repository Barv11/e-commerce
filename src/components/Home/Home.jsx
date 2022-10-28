import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselHeader from "./Carousel/Carousel";
import ProductSlider from "../ProductSlider";
import Footer from "../Footer/Footer";
import {getallproductos} from "../../redux/actions";
import Card from '../Card/Card'

export default function Home() {
  const dispatch = useDispatch()
  const allProducts = useSelector((state)=> state.allproducts)

  useEffect((e)=>{
    if(allProducts<1){
        dispatch(getallproductos())
    }
  },[])

  return (
    <main>
      <CarouselHeader />
      <h1>
        <b>Productos</b> Destacados
      </h1>
      <ProductSlider />
      {/* <h1>
        {allProducts?.map((e,i) => {
          return(
            <Card
            key = {i}
            name = {e.name}
            brand= {e.brand}
            img = {e.img}
            details = {e.details}
            cost = {e.cost}
            />
          )
          })}
      </h1> */}
      <Footer />
    </main>
  );
}
