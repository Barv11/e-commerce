import Navbar from "../../components/Navbar/Navbar";
import s from "./AllProducts.module.css";
import Footer from "../../components/Footer/Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearProducts, getAllProductos } from "../../redux/actions";
import SideBar from "./SideBar";

export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const searchByNameProduct = useSelector((state) => state.searchByNameProduct);

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
  }, []);

  return (
    <div>
      <Navbar />
      <div className={s.container}>
        <div className={s.sideBar}>
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
          ) : allProducts.length ? (
            allProducts.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  name={p.name}
                  //img={p.img[0]} 
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
