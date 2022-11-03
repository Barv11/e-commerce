import React from 'react';
import s from './cardProfile.module.css';

export default function CardProfle(props) {
  return (
    <div className={s.globalCard}>
      <span> {props.name} </span>
    </div>
  )
}


