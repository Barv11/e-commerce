import s from "./Loader.module.css";

import React from "react";

export default function Loader() {
  return (
    <div className={s.container}>
      <div className={s.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
