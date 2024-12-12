import React, { useState } from 'react';
import products from '../api/products';
import ProductCard from '../components/ProductCard';
import "../assets/css/Vali.css";
import "../assets/css/ProductFilter.css";
import ColorCircles from '../components/ColorsCircles';

function Vali() {
    const [displayedProduct, setDisplayedProduct] = useState(products.filter((product) => {
        return product.category === "vali";
    }));
    
    const getColors = products.map((product) => product.colors); // Lấy all mảng colors
    const allNames = getColors
        .flatMap(group => group.map(item => item.name)) // Lấy tất cả các `name` từ các phần tử
        .flat(); // Làm phẳng toàn bộ các mảng con trong `name`
    const uniqueColor = [...new Set(allNames)]; // Loại bỏ màu trùng lặp

    const handleFilterByColor = (colorName) => {
        const updatedList = products.filter(product => // Sử dụng danh sách gốc để lọc
            product.category === "vali" && //Chỉ lấy vali và
            product.colors.some(color => color.name.includes(colorName)) // Tìm đối tượng màu chứa color được truyền bên hàm ColorsCircles
        );
        setDisplayedProduct(updatedList);
    };

    return (
        <div className="wrap_vali_page">
            <div className="vali_container">
                <h2 className="title_vali">Vali</h2>
                <div className="vali-item-container">
                    <div className="productFilter_container">
                        <ColorCircles 
                            dataColors={uniqueColor} 
                            onColorSelect={handleFilterByColor} // Truyền hàm xử lý click
                        />
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
