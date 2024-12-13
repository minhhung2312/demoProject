import React, { useState } from 'react';
import products from '../api/products';
import ProductCard from '../components/ProductCard';
import "../assets/css/FilterColors.css";
import ColorCircles from '../components/ColorsCircles';
import ProductFilters from './ProductFilters';
import "../assets/css/ProductFilters.css";

function FilterColors({ category }) {
    const [displayedProduct, setDisplayedProduct] = useState(
        products.filter((product) => product.category === category)
    );
    const [selectedBrands, setSelectedBrands] = useState([]); // Trạng thái cho thương hiệu
    const getColors = products.map((product) => product.colors); //Lấy all mảng colors trong datadata
    const allNames = getColors
        .flatMap(group => group.map(item => item.name)) //Lấy all tên màu trong mảng name 
        .flat(); // làm phẳng mảng lồng nhau
    const uniqueColor = [...new Set(allNames)]; // Bỏ trùng lặplặp

    const handleFilterByColor = (colorName) => {
        const updatedList = products.filter(product =>
            product.category === category &&
            product.colors.some(color => color.name.includes(colorName)) &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
           
        );
        setDisplayedProduct(updatedList);
    };

    const handleFilterByBrand = (brandName, isChecked) => {
        const updatedBrands = isChecked
            ? [...selectedBrands, brandName]
            : selectedBrands.filter(brand => brand !== brandName);

        setSelectedBrands(updatedBrands);
        const updatedList = products.filter(product =>
            product.category === category &&
            (updatedBrands.length === 0 || updatedBrands.includes(product.brand))
        );
        setDisplayedProduct(updatedList);
    };
 
    return (
        <div className="wrap_category_page">
            <div className="category_container">
                <div className="category-item-container">
                    <div className="productFilter_container">
                        <div className="product_filters">
                            <ProductFilters onBrandFilter={handleFilterByBrand} />
                        </div>
                        <div className="color_circles">
                            <h4 className="color_circles-title filter-titles">MÀU SẮC –</h4>
                            <ColorCircles
                                dataColors={uniqueColor}
                                onColorSelect={handleFilterByColor}
                            />
                        </div>
                    </div>
                    <div className="wrap_container_card_category">
                        <h2 className="title_category">{category}</h2>
                        <div className="container_card_category">
                            {displayedProduct.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterColors;
