import { Route, Routes } from "react-router-dom";
import { Products, Home, Profile} from '../page';
import {CardDetail, Login, Register, CreateProduct, Carrito} from '../components'
function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/register"} element={<Register />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/detail/:id"} element={<CardDetail />} />
      <Route path={"/create"} element={<CreateProduct />} />
      <Route path={"/carrito"} element={<Carrito />} />
      <Route path={"/profile"} element={<Profile />} />
    </Routes>
  );
}

export default App;
