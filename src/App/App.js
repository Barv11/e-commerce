import { Route, Routes } from "react-router-dom";
import { Products, Home, Profile } from "../page";
import {
  CardDetail,
  Login,
  Register,
  CreateProduct,
  Carrito,
} from "../components";
import AdminPage from "../page/Admin/AdminPage";
import Orden from "../components/Orden/Orden";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveToken, getUser } from "../redux/actions";
import EditProducts from "../components/EditProducts/EditProducts";
import About from "../components/About/About";

function App() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (user.logged) {
      saveToken(user.token);
      dispatch(getUser(user.token));
    }
  }, []);

  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<Register />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/detail/:id"} element={<CardDetail />} />
      <Route path={"/create"} element={<CreateProduct />} />
      <Route path={"/edit/:id"} element={<CreateProduct />} />
      <Route path={"/edit"} element={<EditProducts />} />
      <Route path={"/admin"} element={<AdminPage />} />
      <Route path={"/orden"} element={<Orden />} />
      <Route path={"/carrito"} element={<Carrito />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/about"} element={<About />} />
    </Routes>
  );
}

export default App;
