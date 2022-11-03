import { Route, Routes } from "react-router-dom";
import CardDetail from "../components/CardDetail/CardDetail";
import Login from "../components/LoginForm/LoginForm";
import Products from "../page/allProducts/AllProducts";
import Home from "../page/home/Home";
import Register from "../components/RegisterForm/Register";
import CreateProduct from "../components/createproductAdmin/createProduct";
import AdminPage from "../page/Admin/AdminPage";
import Orden from "../components/Orden/Orden";
import Carrito from "../components/Carrito/Carrito";
import { useState } from "react";

function App() {
  
  const [user] = useState(
    JSON.parse(
      localStorage.getItem("user") ||
        JSON.stringify({
          logged: false,
          token: "",
        })
    )
  );

  localStorage.setItem("user", JSON.stringify(user));
  

  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<Register />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/detail/:id"} element={<CardDetail />} />
      <Route path={"/create"} element={<CreateProduct />} />
      <Route path={"/admin"} element={<AdminPage />} />
      <Route path={"/orden"} element={<Orden />} />
      <Route path={"/carrito"} element={<Carrito />} />

    </Routes>
  );
}

export default App;
