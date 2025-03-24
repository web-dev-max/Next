import { IProduct } from "@/lib/interfaces/products";
import { Button, Space } from "antd";
import Image from "next/image";

const TableColumns = () => {
    const handleEdit = (product: IProduct) => {
        console.log("Editing:", product);
    };

    const handleDelete = (id: number) => {
        console.log("Deleting item with key:", id);
    };

    return [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            key: 'image',
            render: (product: IProduct) => (
                <Image src={product.image} alt={product.name} width={50} height={50}/>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: '',
            key: 'action',
            render: (_: unknown, product: IProduct) => (
                <Space>
                    <Button type="primary" onClick={() => handleEdit(product)}>Edit</Button>
                    <Button type="default" danger onClick={() => handleDelete(product.id)}>Delete</Button>
                </Space>
            ),
        }
    ];
};

export default TableColumns;