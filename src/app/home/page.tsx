import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/lib/interfaces/products";
import { getProducts } from "@/lib/request-graphql/products";
import { Card } from 'antd';
import Meta from "antd/es/card/Meta";
import NextSvg from "@/assets/svg/svg-next";

export default async function HomePage() {
  const products: IProduct[] = await getProducts();

  return (
    <div className="products">
      <h1>WebDevShop <NextSvg /></h1>
      <div className="products-list">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="products-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<Image src={product.image} width={300} height={300} alt={product.name} />}
            >
              <Meta title={product.name} description={`Цена: ${product.price}$, Кол-во: ${product.amount}`} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}