import React from 'react';
import { useState } from 'react';
import products from '../api/products';
import ProductCard from '../components/ProductCard';
import "../assets/css/Vali.css"
import "../assets/css/ProductFilter.css";

function Vali() {
    const [displayedProduct, setdisplayedProduct] = useState(products.filter((product) => {
        return product.category === "vali" 
    }));
    return (
        <div className="wrap_vali_page">
            <div className="vali_container">
                <h2 className="title_vali">Vali</h2>
                <div className="vali-item-container">
                    <div className="productFilter_container">

                    </div>
                    <div className="container_crad_vali">
                        {displayedProduct.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Vali;