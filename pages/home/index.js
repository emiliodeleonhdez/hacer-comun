import ProductCard from "@/components/ProductCard/ProductCard"
import React from "react"

const Home = () => {
  const cardContent = {
    title: "I'm a super product tittle",
    sub: "I'm a subtitle",
    price: "$400.00",
    img_url:
      "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
  }

  return (
    <div>
      <ProductCard cardContent={cardContent} />
    </div>
  )
}

export default Home
