import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  clearProducts,
  getAllProductos,
  toggleProductType,
} from "../../redux/actions";
import CardEditProducts from "./CarEditProducts/CardEditProducts";
import Loader from "../Loader/Loader";
import s from "./EditProducts.module.css";

export default function EditProducts() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("defect");
  const [products, setProducts] = useState([]);
  let current = 20;
  const [page, setPage] = useState(1);
  const total = Math.ceil(allProducts.length / current);

  const handlerStart = () => {
    setPage(1);
  };
  const handlerEnd = () => {
    setPage(total);
  };

  const handlerNext = () => {
    setPage(page + 1);
    if (page >= total) {
      setPage(total);
    }
  };
  const handlerPrev = () => {
    setPage(page - 1);
    if (page <= 1) {
      setPage(1);
    }
  };

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlerOnSelect = (e) => {
    setType(e.target.value);
    if (e.target.value === "defect") {
      dispatch(clearProducts());
      dispatch(getAllProductos());
      setPage(1);
    } else {
      dispatch(clearProducts());
      dispatch(toggleProductType(e.target.value));
      setPage(1);
    }
  };

  let result = !search
    ? products
    : products.filter((el) =>
        el.name.toLowerCase().includes(search.toLocaleLowerCase())
      );


  useEffect(() => {
    dispatch(getAllProductos());
  }, [dispatch]);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    document.title = `Gamer Tech | Inventario`;
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className={s.title}>Inventario de Productos:</h1>
      <h4 className={s.subtitle}>
        Productos actuales: {allProducts.length}{" "}
        {type !== "defect" ? `${type}(es/s)` : "en total"}
      </h4>
      <div className={s.container}>
        <div className={s.searchContainer}>
          <hr />
          <span>Buscar por Nombre: </span>
          <input
            value={search}
            onChange={handlerSearch}
            type="text"
            placeholder="Buscador..."
            className={s.input}
          />
          <span>Filtrar por tipo: </span>
          <select
            name="type"
            onChange={handlerOnSelect}
            className={s.select}
            value={type}
          >
            <option name="defect" value="defect">
              Todos
            </option>
            <option name="mother" value="mother">
              Mother
            </option>
            <option name="procesador" value="procesador">
              Procesador
            </option>
            <option name="disco" value="disco">
              Disco
            </option>
            <option name="ram" value="ram">
              Ram
            </option>
            <option name="solido" value="solido">
              Solido
            </option>
            <option name="tarjeta" value="tarjeta">
              Tarjeta
            </option>
            <option name="mouse" value="mouse">
              Mouse
            </option>
            <option name="pantalla" value="pantalla">
              Pantalla
            </option>
            <option name="fuente" value="fuente">
              Fuente
            </option>
            <option name="teclado" value="teclado">
              Teclado
            </option>
            <option name="auricular" value="auricular">
              Auricular
            </option>
            <option name="gabinete" value="gabinete">
              Gabinete
            </option>
            <option name="cooler" value="cooler">
              Cooler
            </option>
          </select>
          <hr />
        </div>
        <div className={s.head}>
          <span className={s.text}>Tipo</span>
          <span className={s.text}>Nombre</span>
          <span className={s.text}>Marca</span>
          <span className={s.text}>Precio</span>
          <span className={s.text}>Editar</span>
          <span className={s.text}>Eliminar</span>
          <span className={s.text}>Oferta</span>
          <span className={s.text}>Stock</span>
        </div>
        {result.length > 0 ? (
          result
            .slice((page - 1) * current, (page - 1) * current + current)
            .map((el) => (
              <CardEditProducts
                id={el.id}
                img={el.img}
                name={el.name}
                type={el.type}
                brand={el.brand}
                cost={el.cost}
                details={el.details}
                discount={el.discount}
                stock={el.stock}
                setType={setType}
                setPage={setPage}
              />
            ))
        ) : (
          <Loader />
        )}
      </div>
      <div className={s.containerPag}>
        <button
          onClick={handlerStart}
          className={s.buttonPag}
          disabled={page === 1 ? true : false}
        >
          ❮❮
        </button>
        <button
          onClick={handlerPrev}
          className={s.buttonPag}
          disabled={page === 1 ? true : false}
        >
          ❮
        </button>
        <span className={s.page}>
          Página {page} de {total}
        </span>
        <button
          onClick={handlerNext}
          className={s.buttonPag}
          disabled={page === total ? true : false}
        >
          ❯
        </button>
        <button
          onClick={handlerEnd}
          className={s.buttonPag}
          disabled={page === total ? true : false}
        >
          ❯❯
        </button>
      </div>
      <Footer />
    </div>
  );
}
