import React, { useEffect, useState } from 'react';
import "../assets/css/Cart.css";

function Cart({ cart }) {
    const [currentCart, setCurrentCart] = useState(cart);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCurrentCart(savedCart);
    }, [cart]);

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^\d]/g, ""), 10);
    };

    const handleRemoveItem = (itemId) => {
        // Lọc bỏ sản phẩm cần xóa
        const updatedCart = currentCart.filter((item) => item.id !== itemId);

        // Cập nhật state và lưu vào localStorage
        setCurrentCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalAmount = currentCart.reduce(
        (total, item) => total + item.quantity * parsePrice(item.price),
        0
    );

    return (
        <div className='cart-container'>
            <div className="body">
                <h2 className='header'>Giỏ hàng</h2>
                {currentCart.length === 0 ? (
                    <p className='not-card'>Hiện giỏ hàng của bạn đang trống.</p>
                ) : (
                    <div className='cart-list'>
                        {currentCart.map((item, index) => (
                            <div key={index} className='cart-item'>
                                <img 
                                    className='cart-item__img'
                                    src={item.image} 
                                    alt={item.name}
                                />
                                <div className='cart-info'>
                                    <p className='cart-item__name'>{item.name}</p>
                                    <p>Số lượng: {item.quantity}</p>
                                    <p>Giá: <span className='highlight'>{item.price}</span></p>
                                </div>
                                <button 
                                    onClick={() => handleRemoveItem(item.id)} 
                                    className='button-remove'
                                >
                                    Xóa
                                </button>
                            </div>
                        ))}
                        <h3 className='result'>Tổng tiền: {totalAmount.toLocaleString()}₫</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;