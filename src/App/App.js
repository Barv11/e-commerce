import Navbar from "../components/Navbar/Navbar.jsx";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import CardDetail from "../components/CardDetail/CardDetail.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={'/product/:id'}>
        <CardDetail />
      </Route>
    </>
  );
}

export default App;
