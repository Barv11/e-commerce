import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import s from './PcArmada.module.css';
import { gabinete } from '../../../assets/icons';

function PcArmada({ item }) {

  const [myPc, setMyPc] = useState([])

  
  useEffect(() => {
    if(item) {
      setMyPc(myPc.concat(item))
    }
  }, [item])

  console.log(myPc)

  if(myPc.length) {
    return (
      <div className={s.container}>
        {/* <div>PcArmada</div> */}
        <div>
      {myPc && myPc?.map(e => {
  
        return (
         <div key={e.id} className={s.card}>
          <div>{e.name}</div>
          <div>
            <img src={Array.isArray(e.img) ? e.img[0] : e.img} alt={e.name}/>
            </div>
          <div>{e.cost}</div>
         </div>
          )
      }
        )}
        </div>
      </div>
    )
  } else {
    return (
      <div className={s.containerNoItems}>
        <div>
        <div>Empieza a armar tu pc</div>  
        <div>
          <img src={gabinete} alt="gabinete" className={s.image}/>
          </div>     
          </div>
      </div>
    )
  }
  }

export default PcArmada