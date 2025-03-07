"use client"

import { GET_PRODUCT } from "@/lib/request-graphql/products";
import { useQuery } from "@apollo/client";
import { notFound, useParams } from "next/navigation";
import "./styles.scss";

const ProductPage = () => {
    const params = useParams();
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id: params.id },
    });

    if (loading) return <p>Загружаем...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;
    if (!data?.getProductById) return notFound();

    const { name, description, price, image, amount } = data.getProductById;

    return (
        <div className="product">
            <h1>{name}</h1>
            <img src={image} alt={name} width={200} />
            <p>{description}</p>
            <p>Цена: ${price}</p>
            <p>Количество: {amount}шт.</p>
        </div>
    )
}

export default ProductPage;