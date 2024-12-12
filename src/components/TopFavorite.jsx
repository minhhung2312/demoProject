import React, { useState } from 'react';
import products from '../api/products';
import ProductCard from './ProductCard';

function TopFavorite() {

    const [activeTab, setActiveTab] = useState('vali');

    const displayedVali = products.filter((product) => product.isTopFavoriteVali);
    const displayedProduct = products.filter((product) => product.isTopFavoriteProduct);

    return ( 
        <div className="top-favorite">
            <ul className="container">
                <li 
                    className={activeTab === 'vali' ? 'active' : ''}
                    onClick={() => setActiveTab('vali')}
                >Top Vali Yêu Thích</li>
                <li 
                    className={activeTab === 'product' ? 'active' : ''}
                    onClick={() => setActiveTab('product')}
                >Top Sản Phẩm Yêu Thích</li>
            </ul>
            <div 
                className="vali"
                style={{display: activeTab === 'vali' ? 'flex' : 'none'}}
            >
                {displayedVali.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div 
                className="product"
                style={{display: activeTab === 'product' ? 'flex' : 'none'}}
            >
                {displayedProduct.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default TopFavorite;