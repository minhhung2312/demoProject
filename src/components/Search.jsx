import React, { useState } from 'react';
import Fuse from 'fuse.js';
import products from '../api/products';
import ProductCard from './ProductCard';
import "../assets/css/Search.css";

function Search() {
    const [query, setQuery] = useState('');
    const [filterProduct, setFilterProduct] = useState(products);

    const handleSearch = (e) => {
        const keyword = e.target.value;
        setQuery(keyword);

        if(!keyword) {
            setFilterProduct(products);
            return;
        }

        const fuse = new Fuse(products, {
            keys: ['name'],
            threshold: 0.2,
        });

        const result = fuse.search(keyword);
        setFilterProduct(result.map((item) => item.item));
    }

    return (
        <div className="search">
            <div className="header">
                <h1>Search: </h1>
                <div className="input-wrapper">
                    <input 
                        placeholder='Enter name product'
                        value={query}
                        type="text" 
                        className="search-input" 
                        onChange={handleSearch}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="alert">
                <p>Có <span>{filterProduct.length}</span> sản phẩm cho kết quả tìm kiếm.</p>
            </div>
            <div className="container">
                {filterProduct.length > 0 ? (
                    filterProduct.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="not-search">Không có sản phẩm nào phù hợp.</p>
                )}
            </div>
        </div>
    );
}

export default Search;