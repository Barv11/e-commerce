import React, { useEffect } from "react";
import s from "./Orden.module.css";
import Table from "react-bootstrap/Table";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Orden() {
  //pedido al back para traer los cart/pedidos

  //un handle change
  useEffect(() => {
    document.title = `Gamer Tech | Ordenes`;
  }, []);
  return (
    <>
      <Navbar />
      <main className={s.wrap}>
        <h1>Ordenes</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Orden N°</th>
              <th>Usuario</th>
              <th>Total Compra</th>
              <th>Cantidad Items</th>
            </tr>
          </thead>
          <tbody>
            {/* estado con las ordenes y mapeado del estado con las ordenes */}
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </main>
      <Footer />
    </>
  );
}
