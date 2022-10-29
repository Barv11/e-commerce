import Navbar from "../../components/Navbar/Navbar";
import s from "./AllProducts.module.css";
import Footer from "../../components/Footer/Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearProducts, getAllProductos, ordennames } from "../../redux/actions";
import SideBar from "./SideBar";

export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state)=> state.allProducts)
  const [orden, setOrden] = useState('')
  const [currentPage,setCurrentPage] = useState(1)
  const [PerPage,setPerPage] = useState(300)
  const indexOfLast = currentPage * PerPage
  const indexOfFirst = indexOfLast - PerPage
  const Current = allProducts.slice(indexOfFirst,indexOfLast)
  const searchByNameProduct = useSelector((state) => state.searchByNameProduct);

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
  }, []);

  const OrderName = (event) =>{
    event.preventDefault();
    dispatch(ordennames(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`)
  }

  return (
    <div>
      <Navbar />
      <div className={s.container}>
        <div className={s.sideBar}>
        <div className={s.AZbutton}>
        <button value='AZ' onClick={(e) => OrderName(e)}>A - Z</button>
        <button value='ZA' onClick={(e) => OrderName(e)}>Z - A</button>
        </div>
          <SideBar />
        </div>
        <div className={s.productsContainer}>
          {searchByNameProduct.length ? (
            searchByNameProduct.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  name={p.name}
                  img={p.img[0]}
                  cost={p.cost}
                />
              );
            })
          ) : Current.length ? (
            Current.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  name={p.name}
                  img={p.img[0]}
                  cost={p.cost}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
