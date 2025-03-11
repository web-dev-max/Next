'use client';

import { GET_USER } from "@/lib/request-graphql/user";
import { useQuery } from "@apollo/client";

const CabinetPage = () => {
    const { loading, data } = useQuery(GET_USER);

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