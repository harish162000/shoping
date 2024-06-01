import React, { useState } from 'react'
import data from "../product.json"
import { Product } from './Product'
import "./Home.css"
export const Home = () => {
    const [product] = useState(data)
    console.log(data)
  return (
    <div className="product-container">
        {product.map((product) =>(
           <Product key={product.id} product={product} />
           
        ))}
    </div>
  )
}
