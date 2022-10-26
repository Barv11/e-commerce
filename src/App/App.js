import Navbar from "../components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
// import CardDetail from "../components/CardDetail.jsx/CardDetail";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={'/product/id'}>
        {/* <CardDetail /> */}
      </Route>
    </>
  );
}

export default App;
