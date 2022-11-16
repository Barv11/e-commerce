import { Route, Routes, Router } from "react-router-dom";
import { Products, Home, Profile, ArmadoPc, Faq } from "../page";
import {
  CardDetail,
  Login,
  Register,
  CreateProduct,
  Carrito,
  Favoritos,
  Navbar,
} from "../components";
import AdminPage from "../page/Admin/AdminPage";
import Orden from "../components/Orden/Orden";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { saveToken, getUser } from "../redux/actions";
import EditProducts from "../components/EditProducts/EditProducts";
import About from "../components/About/About";
import AllUsers from "../components/ListaUsuarios/AllUsers";
import CardEditReviewProfile from "../components/cardProfile/CardEditReviewProfile";
import RemovedProducts from "../components/RemovedProducts/RemovedProducts";
import AdminDash from "../page/Admin/AdminDash";

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
    }
  }, []);

  console.log(user.logged)

  return (
    <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/detail/:id"} element={<CardDetail />} />
        <Route path={"/create"} element={<CreateProduct />} />
        <Route path={"/edit/product/:id"} element={<CreateProduct />} />
        <Route path={"/edit/review/:id"} element={<CardEditReviewProfile />} />
        <Route path={"/inventory"} element={<EditProducts />} />
        <Route path={"/trash"} element={<RemovedProducts />} />
        <Route path={"/admin"} element={<AdminDash />} />
        <Route path={"/orden"} element={<Orden />} />
        <Route path={"/carrito"} element={<Carrito />} />
        <Route path={"/favoritos"} element={<Favoritos />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/armado"} element={<ArmadoPc />} />
        <Route path={"/users"} element={<AllUsers />} />
        <Route path={"/faq"} element={<Faq />} />
      </Routes>
  );
}

export default App;
