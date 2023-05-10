import ProductCard from "@/components/ProductCard/ProductCard"
import React from "react"

import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/`)
    .then((response) => response.json()) 
    .then((data) => {
      console.log(data)
      setProducts(data.products)
    }
    );
  }, [])
  

  return (
    <div className="container flex justify-center grid card-wrapper">
        
          {products.length ? products.map((card) => (
            <div key={card._id} className="product-card">
              <ProductCard cardContent={card} />
            </div>
          )) : null}
       
    </div>
  )
}

export default Home
