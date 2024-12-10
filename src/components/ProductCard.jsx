import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ProductCard.css';


function ProductCard({ product }) {
    const navigate = useNavigate();

    // Khởi tạo giá trị của sự kiện hover
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Khởi tạo selectedColor chỉ được khởi tạo nếu có màu
    const [selectedColor, setSelectedColor] = useState(
        Array.isArray(product.colors) && product.colors.length > 0 ? product.colors[0] : null
    );

    // Nếu không tìm thấy selectedColor thì render ra màn hình thông báo lỗi
    if(!selectedColor) {
        return (
            <div className="not-selectedColor">
                <h2 className="header">{product.name}</h2>
                <p className="text">Sản phẩm này hiện không có màu khả dụng.</p>
            </div>
        );
    }

    return ( 
        <div 
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="product-card__img">
                <img
                    src={selectedColor.image}
                    alt={`${product.name} - ${selectedColor.name}`}
                    onClick={() => navigate(`/product/${product.id}`)}
                />
                <div className={`sell ${isHovered ? '' : 'hidden'}`}>
                    <button className="buy__btn">MUA NGAY</button>
                    <button className="add-card__btn">THÊM VÀO GIỎ</button>
                </div>
            </div>
            <div className="product-card__info">
                <div className="product-card__colors">
                    {product.colors.map((color, index) => (
                        <div 
                            className={`color-item ${selectedColor.id === color.id ? 'active' : ''}`} 
                            key={color.id}
                            onClick={() => setSelectedColor(color)}
                        >
                            {color.thumbnail ? (
                                <img
                                    className='color-thumbnail'
                                    src={color.thumbnail}
                                    alt={color.name[index]}
                                />
                            ) : (
                                <div 
                                    className="color-circle"
                                    style={{backgroundColor: color.code}}
                                >
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <p className="product-card__brand">{product.brand}</p>
                <p className="product-card__name">{product.name}</p>
                <div className="product-card__price">
                    <span className="price--new">{product.newPrice}</span>
                    <span className="price--old">{product.oldPrice}</span>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;