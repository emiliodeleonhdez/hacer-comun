import ProductCard from "@/components/ProductCard/ProductCard"
import React from "react"

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 766562,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 1313435,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 254343,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 108436,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 28756,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 132323,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 249873,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 11111234234,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 22355545,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 19753,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 22343,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 981,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 28736,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 132323,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    },
    {
      id: 2496873,
      title: "I'm a super product tittle",
      sub: "I'm a subtitle",
      price: "$400.00",
      img_url:
        "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0="
    }
  ]

  return (
    <main className="flex justify-center">
      <article className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <div key={card.id} className="product-card">
            <ProductCard cardContent={card} />
          </div>
        ))}
      </article>
    </main>
  )
}

export default Home