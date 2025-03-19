import { notFound } from "next/navigation";
import "./styles.scss";
import Image from "next/image";
import { getProduct } from "@/lib/request-graphql/products";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) return notFound();

    return (
        <div className="product">
            <h1>{product.name}</h1>
            <div className="product-block">
                <Image src={product.image} alt={product.name} width={200} height={200} />
                <div className="product-block-item">
                    <p>Цена: ${product.price}</p>
                    <p>Количество: {product.amount} шт.</p>
                </div>
            </div>
            <p>{product.description}</p>
        </div>
    );
}