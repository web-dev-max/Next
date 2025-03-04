"use client"

import { IProduct } from "@/interfaces/products";
import { GET_PRODUCTS } from "@/lib/fetch-products";
import { useQuery } from "@apollo/client";

const ClientComponents = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Список товаров</h1>
      <ul>
        {data.getAllProducts.map((product: IProduct) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <img src={product.image} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientComponents;
