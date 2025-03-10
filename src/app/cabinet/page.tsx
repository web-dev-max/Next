'use client';

import { GET_USER } from "@/lib/request-graphql/user";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CabinetPage = () => {
    const { loading, data } = useQuery(GET_USER);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !data?.getUser) {
            router.push("/");
        }
    }, [loading, data, router])

    if (loading) return <p>Загрузка...</p>;

    return (
        <div>
            <h2>Привет, {data.getUser.name}!</h2>
            <p>Email: {data.getUser.email}</p>
            <p>Админ: {data.getUser.isAdmin ? "Да" : "Нет"}</p>
        </div>
    )
}

export default CabinetPage;