import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import products from "../api/products";
import "../assets/css/Product.css";

function Product() {
    const { id } = useParams();
    const product = products.find((pro) => pro.id === parseInt(id));

    const { details } = product; // details = product.details

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [counter, setCounter] = useState(1);

    if (!selectedColor) {
        return (
            <div className="not-selectedColor">
                <h2 className="header">{product.name}</h2>
                <p className="text">Sản phẩm này hiện không có màu khả dụng.</p>
            </div>
        )
    }

    return (
        <div className="container-product1">
            <div className="overplay">
                <nav className="navigate">
                    <div><Link to='/'>Home</Link> / {product.category} / <span>{product.name}</span></div>
                </nav>
            </div>
            <div className="info-details">
                <div className="col-1">
                    <div className="product__img">
                        <img
                            src={selectedColor.image}
                            alt={`${product.name} - ${selectedColor.name}`}
                        />
                        <img
                            className='reverse'
                            src={selectedColor.image}
                            alt={`${product.name} - ${selectedColor.name}`}
                        />
                    </div>
                </div>
                <div className="col-2">
                    <div className="product__info">
                        <p className="product__brand">{product.brand}</p>
                        <h2 className="product__name">{product.name}</h2>
                        <div className="product__price">
                            <span className="new-price">{product.newPrice}</span>
                            <span className="old-price">{product.oldPrice}</span>
                        </div>
                        <div className='label-color'>Chọn màu sắc:</div>
                        <div className="product__colors">
                            {product.colors.map((color, index) => (
                                <div
                                    className={`color-items ${selectedColor.id === color.id ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color.thumbnail ? (
                                        <img
                                            className='colors-thumbnail'
                                            src={color.thumbnail}
                                            alt={color.name[index]}
                                        />
                                    ) : (
                                        <div
                                            className='colors-circle'
                                            style={{ background: color.code }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="quantity">
                            <p className="numbers">Số lượng:</p>
                            <div className="controls">
                                <button className="decrease" onClick={() => setCounter((prevCount) => prevCount > 1 ? prevCount - 1 : prevCount)}>-</button>
                                <input className='var-count' type="text" value={counter} readOnly />
                                <button className="increase" onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
                            </div>
                        </div>
                        <div className="add-cart">
                            <button>THÊM VÀO GIỎ HÀNG</button>
                        </div>
                        <div className="info-store">
                            <div className="item">
                                <img src="/images/bh.webp" alt="bh" />
                                <p>Bảo hành toàn quốc</p>
                            </div>
                            <div className="item">
                                <img src="/images/ck.webp" alt="ck" />
                                <p>Cam kết chính hãng</p>
                            </div>
                            <div className="item">
                                <img src="/images/td.webp" alt="td" />
                                <p>Tổng đài chăm sóc khách hàng miễn phí</p>
                            </div>
                            <div className="item">
                                <img src="/images/store.webp" alt="store" />
                                <p>Bảo hành tại hơn 100 cửa hàng trên toàn quốc</p>
                            </div>
                        </div>
                        {details.features && details.features.length > 0 ? (
                            <div className="feature">
                                <h2 className="header">Tính năng của {product.name}</h2>
                                <ul>
                                    {details.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : ''}
                        {details.desc && details.desc.length > 0 ? (
                            <div className="desc">
                                <h2 className="header">Mô tả sản phẩm</h2>
                                    {details.desc.map((des, index) => (
                                        <p key={index}>{des}</p>
                                    ))}
                            </div>
                        ) : ''}
                        {details.paramters && details.paramters.length > 0 ? (
                            <div className="paramter">
                                <h2 className="header">Thông số kỹ thuật</h2>
                                <ul>
                                    {details.paramters.map((param, index) => (
                                        <li key={index}>
                                            <label>{Object.keys(param)} : </label>
                                            <span>{Object.values(param)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;