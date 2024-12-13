import React from "react";
import ProductCard from "./ProductCard";
import products from '../api/products';
import { Link } from "react-router-dom";

function Outstanding() {

    const vali = products.filter((product) => product.isTopVali)
    const balo = products.filter((product) => product.isTopBalo)
    const bag = products.filter((product) => product.isTopBag)

    return ( 
        <div className="outstanding">
            <div id="vali">
                <div className="header">
                    <h2 className="title">VALI NỔI BẬT</h2>
                    <Link to=''>Xem thêm</Link>
                </div>
                <div className="container">
                    {vali.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <div id="balo">
                <div className="header">
                    <h2 className="title">BALO NỔI BẬT</h2>
                    <Link to=''>Xem thêm</Link>
                </div>
                <div className="container">
                    {balo.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <div id="bag">
                <div className="header">
                    <h2 className="title">TÚI XÁCH NỔI BẬT</h2>
                    <Link to=''>Xem thêm</Link>
                </div>
                <div className="container">
                    {bag.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Outstanding;