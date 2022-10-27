import React from "react"
import { Link } from "react-router-dom"

export default function Card(id, img, name, cost){
    return(
        <div>
            <img src={img[0]} alt='Image not found' />
            <h2>{name}</h2>
            <h2>${cost}</h2>
            <Link to={`/product/${id}`}>  {/* route placeholder */}
                <h3>Ver más</h3>
            </Link>
        </div>
    )
}