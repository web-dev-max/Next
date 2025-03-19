import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/lib/interfaces/products";
import { getProducts } from "@/lib/request-graphql/products";

export default async function HomePage() {
  const products: IProduct[] = await getProducts();

  return (
    <div className="products">
      <h1>Список товаров</h1>
      <div className="products-list">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="products-item">
            <Image src={product.image} width={300} height={300} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Цена: ${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}