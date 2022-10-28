import ProductSlider from "../../components/ProductSlider"
import Carrusel from "../../components/Carruseles/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";

export default function Home(){
    return(
        <div>
            <Navbar />
            <Carrusel />
            <ProductSlider />
        </div>
    )
}