"use client"

import { IProduct } from "@/interfaces/products";
import { GET_PRODUCTS } from "@/lib/request-graphql/products";
import { useQuery } from "@apollo/client";
import "./styles.scss";
import Link from "next/link";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Загружаем...</p>;
  if (error) return <p>Упс, что-то пошло не так : {error.message}</p>;

  return (
    <div className="products">
      <h1>Список товаров</h1>
      <div className="products-list">
        {data.getAllProducts.map((product: IProduct) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id} 
            className="products-item"
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <img src={product.image} width={100} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
