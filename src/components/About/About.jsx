import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PcChatBot from "../PcChatBot/PcChatBot";
import s from "./About.module.css";

export default function About() {

  useEffect(() => {
    document.title = `Gamer Tech | Nosotros`;
  }, []);
  return (
    <>
      <Navbar />
      <main className={s.container}>
        <h1>Hola</h1>
      </main>
      <PcChatBot />
      <Footer />
    </>
  );
}
