import React, { useEffect } from "react";
import s from "./Orden.module.css";
import Table from "react-bootstrap/Table";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getOneUser } from "../../redux/actions";
import axios from "axios";
import { useState } from "react";
export default function Orden() {
  //pedido al back para traer los cart/pedidos

  //const url = "http://localhost:3001/ordenes";
  let url = "https://gametech.up.railway.app/ordenes";
  const [ordenes, setOrdenes] = useState({});
  async function AllOrdenes() {
    const Ordenes = await axios.get(url);
    setOrdenes(Ordenes);
  }
  //un handle change
  useEffect(() => {
    AllOrdenes();
    document.title = `Gamer Tech | Ordenes`;
  }, []);
  console.log(ordenes);
  return (
    <>
      <Navbar />
      <main className={s.wrap}>
        <h1>Ordenes</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Compra</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {/* estado con las ordenes y mapeado del estado con las ordenes */}
            {ordenes?.data?.map((e) => {
              return (
                <tr>
                  <td>{e.email}</td>
                  <td>
                    {e?.data?.map((el) => {
                      return (
                        <tr>
                          <td>
                            {el?.description} <br></br>
                          </td>
                        </tr>
                      );
                    })}
                  </td>
                  <td>
                    {e?.data?.map((el) => {
                      return (
                        <tr>
                          <td>{el?.quantity}</td>
                        </tr>
                      );
                    })}
                  </td>
                  <td>
                    {e?.data?.map((el) => {
                      return (
                        <tr>
                          <td>{"$" + el?.amount_total / 100}</td>
                        </tr>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </main>
      <Footer />
    </>
  );
}
