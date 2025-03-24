'use client';

import "./styles.scss"
import Search, { SearchProps } from "antd/es/input/Search";

const SearchClient = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className="search">
            <Search placeholder="Поиск товара по названию" onSearch={onSearch} enterButton />
        </div>
    )
};

export default SearchClient;