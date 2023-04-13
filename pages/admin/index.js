// import ProductCard from "@/components/ProductCard/ProductCard"
import AdminProductCard from "@/components/AdminProductCard/AdminProductCard"
import React from "react"

const Admin = () => {
  const data = [
    {
      id: 1,
      title: "Super amazing title",
      sub: "Super amazing sub title",
      price: "453.00",
      img_url: ""
    },
    {
      id: 2,
      title: "Super amazing title",
      sub: "Super amazing sub title",
      price: "453.00",
      img_url: ""
    },
    {
      id: 3,
      title: "Super amazing title",
      sub: "Super amazing sub title",
      price: "453.00",
      img_url: ""
    },
    {
      id: 4,
      title: "Super amazing title",
      sub: "Super amazing sub title",
      price: "453.00",
      img_url: ""
    }
  ]
  return (
    <section className="container flex items-center justify-center flex-wrap">
      {data.map((product) => (
        <AdminProductCard key={product.id} props={product} />
      ))}
    </section>
  )
}

export default Admin
