import { IProduct } from "@/lib/interfaces/products";
import TableClient from "./components/Table";
import { getProducts } from "@/lib/request-graphql/products";
import SearchClient from "./components/Search";

export default async  function Admin() {
  const dataProducts: IProduct[] = await getProducts();

  return (
    <>
      <SearchClient />
      <TableClient dataProducts={dataProducts}/>
    </>
  );
}


