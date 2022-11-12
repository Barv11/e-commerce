import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import s from "./About.module.css"

export default function About() {
  return (
    <>
        <Navbar />
        <main className={s.container}>
          <h1>Hola</h1>
        </main>
        <Footer />
    </>
  )
}
