import React, { useEffect, useState } from 'react';
import "../assets/css/Cart.css";

function Cart({ cart, setCart }) {
    const [currentCart, setCurrentCart] = useState(cart);

    useEffect(() => {
        setCurrentCart(cart); // Đồng bộ hóa state nội bộ với prop
    }, [cart]);

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^\d]/g, ""), 10);
    };

    const handleRemoveItem = (itemId) => {
        // Lọc bỏ sản phẩm cần xóa
        const updatedCart = currentCart.filter((item) => item.id !== itemId);

        // Cập nhật state và lưu vào localStorage
        setCurrentCart(updatedCart);
        setCart(updatedCart); // Cập nhật giỏ hàng trong Header
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalAmount = currentCart.reduce(
        (total, item) => total + item.quantity * parsePrice(item.price),
        0
    );

    const handleCheckout = () => {
        setCurrentCart([]);
        setCart([]); // Cập nhật giỏ hàng trong Header
        localStorage.removeItem("cart");
        alert("Cảm ơn bạn đã mua hàng!");
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) return;

        const updatedCart = currentCart.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );

        setCurrentCart(updatedCart);
        setCart(updatedCart); // Cập nhật giỏ hàng trong Header
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

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
                                    <div className="controls">
                                        <label>Số lượng: </label>
                                        <button
                                            className="decrease"
                                            onClick={() =>
                                                handleUpdateQuantity(item.id, item.quantity - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            className="var-count"
                                            type="text"
                                            readOnly
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
                                            }
                                        />
                                        <button
                                            className="increase"
                                            onClick={() =>
                                                handleUpdateQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
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
                        <button className="pay" onClick={handleCheckout}>THANH TOÁN</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
