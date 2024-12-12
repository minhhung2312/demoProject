import React, { useState, useEffect } from 'react';
import products from "../api/products";
import ProductCard from "./ProductCard";
import "../assets/css/FilterColor.css";

function FilterColor() {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [filterProduct, setFilterProduct] = useState([]);
    
    useEffect(() => {
        if(selectedFilter) {
            const filtered = products.filter((product) => product.colors.some((color) => color.code === selectedFilter || color.thumbnail === selectedFilter));
            setFilterProduct(filtered);
            console.log(filtered);
        }
    }, [selectedFilter]);

    const filters = Array.from (
        new Set (products.flatMap((product) => product.colors.map((color) => color.code || color.thumbnail)))
    );
    
    return ( 
        <div className="filter-color">
            <h1>Chon mau sac</h1>
            <div 
                className="container"
            >
                <div 
                    className="display"
                    style={{display: 'flex'}}
                >
                    {
                        filters.map((filter, index) => (
                            <div 
                                className='item'
                                key={index}    
                                onClick={() => setSelectedFilter(filter)}
                                style={{
                                    background: filter.startsWith("#") ? filter : `url(${filter})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >

                            </div>
                        ))
                    }
                </div>
                <div className="displayed">
                    {
                        filterProduct.length > 0 ? (
                            filterProduct.map((item, index) => (
                                <ProductCard key={index} product={item} selectedFilter={selectedFilter}/>
                            ))
                        ) : (
                            <p>Khong co san pham</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default FilterColor;