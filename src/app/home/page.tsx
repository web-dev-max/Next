"use client"

import { IProduct } from "@/lib/interfaces/products";
import { GET_PRODUCTS } from "@/lib/request-graphql/products";
import { useQuery } from "@apollo/client";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";

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
            <div className="products-desc">
              <p>{product.description}</p>
            </div>
            <p>Цена: ${product.price}</p>
            <Image src={product.image} width={100} height={100} alt={product.name}/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
