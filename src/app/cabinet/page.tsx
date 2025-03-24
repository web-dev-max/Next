'use client';

import { DELETE_USER, GET_USER } from "@/lib/request-graphql/user";
import { useMutation, useQuery } from "@apollo/client";
import "./styles.scss"
import Image from "next/image";
import { Button, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import Link from "next/link";

const CabinetPage = () => {
    const { logout } = useUserStore();
    const router = useRouter();

    const { loading, data } = useQuery(GET_USER);
    const [deleteUser, { loading: deleteLoading }] = useMutation(DELETE_USER, {
        onCompleted: () => message.success("Аккаунт удалён"),
        onError: (error) => message.error(error.message),
    });

    if (loading) return <Loading />;

    const handleDeleteUser = async (id: number) => {
        await deleteUser({ 
            variables: { id }
        })
        logout();
        router.push('/');
    }

    return (
        <div className="cabinet">
            <div className="cabinet-group">
                <h2>Привет, {data.getUser.name}!</h2>
            </div>
            <div className="cabinet-group">
                <Image src={data.getUser.image} width={100} height={100} alt={data.getUser.name} />
            </div>
            <p>Email: {data.getUser.email}</p>
            {data.getUser.isAdmin && 
                <Link href={'/admin'}>
                    <Button type="primary">Админ-панель</Button>
                </Link>
            }
            <Button 
                type="primary" 
                disabled={deleteLoading} 
                className="delete-account"
                onClick={() => handleDeleteUser(Number(data.getUser.id))}
            >
                Удалить аккаунт
                <DeleteOutlined />
            </Button>
        </div>
    );
};

export default CabinetPage;