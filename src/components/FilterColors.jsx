import React, { useState } from 'react';
import products from '../api/products';
import ProductCard from '../components/ProductCard';
import "../assets/css/FilterColors.css"; 
import ColorCircles from '../components/ColorsCircles';

function FilterColors({ category }) {
    const [displayedProduct, setDisplayedProduct] = useState(
        products.filter((product) => product.category === category)
    );
    
    const getColors = products.map((product) => product.colors); // Lấy all mảng colors
    const allNames = getColors
        .flatMap(group => group.map(item => item.name)) // Lấy tất cả các `name` từ các phần tử
        .flat(); // Làm phẳng toàn bộ các mảng con trong `name`
    const uniqueColor = [...new Set(allNames)]; // Loại bỏ màu trùng lặp

    const handleFilterByColor = (colorName) => {
        const updatedList = products.filter(product =>  // Sử dụng danh sách gốc để lọc
            product.category === category && //Chỉ lấy giá trị của category và
            product.colors.some(color => color.name.includes(colorName)) // Tìm đối tượng màu chứa color được truyền bên hàm ColorsCircles
        );
        setDisplayedProduct(updatedList);
    };

    return (
        <div className="wrap_category_page">
            <div className="category_container">
                <h2 className="title_category">{category}</h2>
                <div className="category-item-container">
                    <div className="productFilter_container">
                        <ColorCircles 
                            dataColors={uniqueColor} 
                            onColorSelect={handleFilterByColor} 
                        />
                    </div>
                    <div className="container_card_category">
                        {displayedProduct.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterColors;
