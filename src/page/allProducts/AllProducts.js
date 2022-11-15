import Navbar from "../../components/Navbar/Navbar";
import s from "./AllProducts.module.css";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCartProduct,
  clearProducts,
  getAllProductos,
  ordennames,
  orderprecio,
  searchProductByName,
  getAllFavoritos,
} from "../../redux/actions";
import SideBar from "./SideBar";
import { Pagination, Filtros } from "../../components";
import PcChatBot from "../../components/PcChatBot/PcChatBot";
import { useModal } from '../../components/Modals/useModal';
import Modal from '../../components/Modals/Modal';
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

export default function Products() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [orden, setOrden] = useState("");
  const [input, setInput] = useState("");
  const searchByNameProduct = useSelector((state) => state.searchByNameProduct);
  const userFound = useSelector((state) => state.userFound);
  const favoritos = useSelector((state) => state.favoritos);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  // Filtra por los que no tienen Stock

  const allProductsStockFilter = allProducts.filter((p) => p.stock !== 0);
  const finalAllProducts = allProductsStockFilter.sort((a, b) => {
    if (a.discount - b.discount) {
      return -1;
    }
    if (a.discount + b.discount) {
      return 1;
    }
  });

  const allSearchProductsStockFilter = searchByNameProduct.filter(
    (p) => p.stock !== 0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(clearProducts());
    dispatch(searchProductByName(input));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCart = (props) => {
    if (user.logged) {
      dispatch(addCartProduct(userFound.id, [props]));
      console.log([props]);
      setCart([...cart.filter((p) => p.id !== props.id), props]);
      openModal();
    } else {
      setCart([...cart.filter((p) => p.id !== props.id), props]);
    }
  };

  localStorage.setItem("products", JSON.stringify(cart));

  useEffect(() => {
    document.title = `Gamer Tech | Productos`;
  }, []);

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(getAllProductos());
    dispatch(getAllFavoritos(userFound?.id));
  }, [dispatch]);

  console.log(allProductsStockFilter);

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
  let pagProducts = finalAllProducts.slice(indicePrimero, indiceUltimo);

  //Cambio de pagina
  function pagina(pageNumber) {
    return setCurrentPage(pageNumber);
  }

  return (
    <div>
      <Navbar />
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
              Más barato
            </button>
            <button value="descendente" onClick={(e) => OrderPrecio(e)}>
              Más caro
            </button>
          </div>

          <SideBar setCurrentPage={setCurrentPage} setOrden={setOrden} />
        </div>
        <div className={s.productsContainer}>
          <form className={s.form} onSubmit={handleSearch}>
            <input
              value={input}
              onChange={handleInputChange}
              type="text"
              placeholder="Buscar producto..."
            />
            <i
              className="uil uil-search"
              onClick={() => handleSearch(input)}
            ></i>
          </form>
          {allSearchProductsStockFilter.length ? (
            allSearchProductsStockFilter.map((p) => {
              return (
                <>
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  img={p.img[0]}
                  cost={p.cost}
                  cart={handleCart}
                  quantity={1}
                  discount={p.discount}
                  favs={favoritos}
                />
                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                  <h1 className='modalTitle'>
                    Producto agregado a tu carrito <ThumbUpAltRoundedIcon />
                  </h1>
                  <p className='modalSubtitle'>
                    Agregaste {p.name} a tu carrito exitosamente!
                  </p>
                </Modal>
                </>
                );
            })
          ) : pagProducts.length ? (
            pagProducts.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  img={Array.isArray(p.img) ? p.img[0] : p.img}
                  cost={p.cost}
                  cart={handleCart}
                  quantity={1}
                  discount={p.discount}
                  favs={favoritos}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={allProducts.length}
        productsFilter={pagProducts.length}
        pagina={pagina}
      />
      <PcChatBot />
      <Footer />
    </div>
  );
}
