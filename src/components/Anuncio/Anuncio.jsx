import React from "react";
import s from "./Anuncio.module.css";

export default function Anuncio() {
  return (
    <div className={s.anuncio}>
      <img
        src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-under-header/mejores-precios-main-top.webp"
        alt="anuncio"
      />
    </div>
  );
}
