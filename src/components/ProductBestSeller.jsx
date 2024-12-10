import React from 'react';
import { useState } from 'react-router-dom';
import products from '../api/products';
import ProductCard from './ProductCard';
import '../assets/css/Home.css';

function ProductBestSeller() {
    const displayedProduct = products.filter((product) => product.isBestSeller);
    
    return ( 
        <div className="best-seller">
            <h2 className="title">TOP SẢN PHẨM TRONG TUẦN</h2>
            <div className="container">
                {displayedProduct.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ProductBestSeller;