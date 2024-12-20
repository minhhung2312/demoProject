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
                    <h2 className="title">OUTSTANDING SUITCASES</h2>
                    <Link to="/Vali">View more</Link>
                </div>
                <div className="container">
                    {vali.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <div id="balo">
                <div className="header">
                    <h2 className="title">OUTSTANDING BACKPACKS</h2>
                    <Link to="/Balo">View more</Link>
                </div>
                <div className="container">
                    {balo.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <div id="bag">
                <div className="header">
                    <h2 className="title">OUTSTANDING HANDBAGS</h2>
                    <Link to="/Handbag">View more</Link>
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
