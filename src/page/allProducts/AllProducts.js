import Navbar from "../../components/Navbar/Navbar";
import s from "./AllProducts.module.css";
import Footer from "../../components/Footer/Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearProducts, getAllProductos } from "../../redux/actions";
import SideBar from "./SideBar";
import { Pagination, Filtros } from '../../components';

export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const searchByNameProduct = useSelector((state) => state.searchByNameProduct);

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
  }, []);

    //PAGINADO
    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    
    const indiceUltimo = currentPage * productsPerPage;
    const indicePrimero = indiceUltimo - productsPerPage;
    let pagProducts = allProducts.slice(indicePrimero, indiceUltimo);
    
    
    //Cambio de pagina
  function pagina(pageNumber){
    return setCurrentPage(pageNumber)
  }

  return (
    <div>
      <Navbar />
      <div className={s.filtros}>
      <Filtros/>
      </div>
      <div className={s.container}>
        <div className={s.sideBar}>
          <SideBar setCurrentPage={setCurrentPage}/>
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
          ) : pagProducts.length ? (
            pagProducts.map((p) => {
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
      <div className={s.containerPagination}>
          <Pagination 
          productsPerPage={productsPerPage} 
          totalProducts={allProducts.length} 
          productsFilter={pagProducts.length}
          pagina={pagina}
          />
        </div>
      <Footer />
    </div>
  );
}
