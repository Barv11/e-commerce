import Navbar from "../../components/Navbar/Navbar";
import s from "./AllProducts.module.css";
import Footer from "../../components/Footer/Footer";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearProducts,
  getAllProductos,
  ordennames,
  orderprecio,
} from "../../redux/actions";
import SideBar from "./SideBar";
import { Pagination, Filtros } from "../../components";

export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [orden, setOrden] = useState("");
  const searchByNameProduct = useSelector((state) => state.searchByNameProduct);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const handleCart = (props) => {
    setCart([...cart.filter((p) => p.id !== props.id), props]);
  };

  localStorage.setItem("products", JSON.stringify(cart));

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
  }, [dispatch]);

  console.log(allProducts);

  //ORDENAMIENTO
  const OrderName = (event) => {
    event.preventDefault();
    dispatch(ordennames(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  //Ordenamiento Precio
  const OrderPrecio = (event) => {
    event.preventDefault();
    dispatch(orderprecio(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indiceUltimo = currentPage * productsPerPage;
  const indicePrimero = indiceUltimo - productsPerPage;
  let pagProducts = allProducts.slice(indicePrimero, indiceUltimo);

  //Cambio de pagina
  function pagina(pageNumber) {
    return setCurrentPage(pageNumber);
  }

  return (
    <div>
      <Navbar />
      <div className={s.filtros}></div>
      <div className={s.container}>
        <div className={s.sideBar}>
          <div className={s.AZbutton}>
            <button value="AZ" onClick={(e) => OrderName(e)}>
              A - Z
            </button>
            <button value="ZA" onClick={(e) => OrderName(e)}>
              Z - A
            </button>
          </div>

          <div className={s.AZbutton}>
            <button value="ascendente" onClick={(e) => OrderPrecio(e)}>
              Ascendente
            </button>
            <button value="descendente" onClick={(e) => OrderPrecio(e)}>
              Descendente
            </button>
          </div>

          <SideBar setCurrentPage={setCurrentPage} setOrden={setOrden} />
        </div>
        <div className={s.productsContainer}>
          {searchByNameProduct.length ? (
            searchByNameProduct.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  img={p.img[0]}
                  cost={p.cost}
                  cart={handleCart}
                />
              );
            })
          ) : pagProducts.length ? (
            pagProducts.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  img={p.img[0]}
                  cost={p.cost}
                  cart={handleCart}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={allProducts.length}
            productsFilter={pagProducts.length}
            pagina={pagina}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
