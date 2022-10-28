import { Route, Routes } from "react-router-dom";
import Login from "../components/LoginForm/LoginForm";
import Home from "../page/home/Home";
function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
    </Routes>
  );
}

export default App;
