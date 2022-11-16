import React, { useState, useEffect } from "react";
import s from "./Help.module.css";

export default function Help(props) {

  return (
    <div className={s.container} style={{ width: "100%" }}>
      <a href="mailto:gamerTech_eCommerce@gmail.com" target={"_blank"}>
        <i class="uil uil-envelope-upload"></i> Enviar un Email
      </a>
      <a href="https://wa.link/9zwmi6" target={"_blank"}>
        <i class="uil uil-whatsapp"></i> Escribir un WhatsApp
      </a>
    </div>
  );
}
