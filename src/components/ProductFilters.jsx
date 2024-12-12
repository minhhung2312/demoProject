import React from 'react';
import "../assets/css/ProductFilters.css";
import products from '../api/products';

function ProductFilters({ onBrandFilter }) {
    const brands = [...new Set(products.map((product) => product.brand))];
    
    const priceRanges = [
        "Dưới 500,000₫",
        "500,000₫ - 1,000,000₫",
        "1,000,000₫ - 3,000,000₫",
        "3,000,000₫ - 5,000,000₫",
        "Trên 5,000,000₫",
    ];
    //  const getNewPrices = products.map(product => product.newPrice);
    //  const newPricesToNumber = getNewPrices.map(price => 
    //     parseInt(price.replaceAll(',', '').replace('₫', ''), 10)
    // );
    const handleBrandChange = (event) => {
        const { value, checked } = event.target;
        onBrandFilter(value, checked);
    };

    return (
        <div className="product-filters">
            {/* Thương hiệu */}
            <div className="filter-sections">
                <h4 className="filter-titles">THƯƠNG HIỆU –</h4>
                {brands.map((brand, index) => (
                    <div key={index} className="filter-options">
                        <input
                            type="checkbox"
                            id={`brands-${index}`}
                            value={brand}
                            onChange={handleBrandChange}
                        />
                        <label htmlFor={`brands-${index}`}>{brand}</label>
                    </div>
                ))}
            </div>

            {/* Giá sản phẩm */}
            <div className="filter-sections">
                <h4 className="filter-titles">GIÁ SẢN PHẨM –</h4>
                {priceRanges.map((range, index) => (
                    <div key={index} className="filter-options">
                        <input type="checkbox" id={`price-${index}`} />
                        <label htmlFor={`prices-${index}`}>{range}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductFilters;
