'use client';

import { IProduct } from "@/lib/interfaces/products";
import TableColumns from "../TableColumns";
import "./styles.scss";
import { Table } from "antd";
import { FC } from "react";

interface ITableClient {
    dataProducts: IProduct[]
}

const TableClient: FC<ITableClient> = ({
    dataProducts
}) => {
  const columns = TableColumns();

  return (
      <Table 
          dataSource={dataProducts} 
          columns={columns}
          rowKey="id"
      />
  );
}

export default TableClient;
