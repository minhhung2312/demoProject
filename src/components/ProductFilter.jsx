import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../api/products";
import { Link } from "react-router-dom";

const ProductFilter = ({ name }) => {
    const item = products.filter((product) => product.category === name);

    const [filters, setFilters] = useState({
        brand: [],
        price: [],
        color: [],
    });

    const [selectedColors, setSelectedColors] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState(item);

    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => {
            const currentValues = prevFilters[key];
            return {
                ...prevFilters,
                [key]: currentValues.includes(value)
                    ? currentValues.filter((item) => item !== value)
                    : [...currentValues, value],
            };
        });
    };

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^\d]/g, ""), 10);
    };

    const handleColorSelect = (color) => {
        setSelectedColors((prevColors) => {
            const updatedColors = prevColors.includes(color)
                ? prevColors.filter((c) => c !== color)
                : [...prevColors, color];

            setFilters((prevFilters) => ({
                ...prevFilters,
                color: updatedColors,
            }));

            return updatedColors;
        });
    };

    useEffect(() => {
        const filtered = item.filter((product) => {
            const productPrice = parsePrice(product.newPrice);

            const matchesBrand =
                filters.brand.length > 0
                    ? filters.brand.includes(product.brand)
                    : true;

            const matchesPrice =
                filters.price.length > 0
                    ? filters.price.some((priceRange) => {
                          if (priceRange === "low") return productPrice < 1000000;
                          if (priceRange === "medium")
                              return productPrice >= 1000000 && productPrice <= 2000000;
                          if (priceRange === "medium-high")
                              return productPrice >= 2000000 && productPrice <= 5000000;
                          if (priceRange === "high") return productPrice > 5000000;
                          return true;
                      })
                    : true;

            const matchesColor =
                filters.color.length > 0
                    ? filters.color.some((selectedColor) =>
                          product.colors.some((color) =>
                              color.name.includes(selectedColor)
                          )
                      )
                    : true;

            return matchesBrand && matchesPrice && matchesColor;
        });

        setDisplayedProducts(filtered);
    }, [filters]);

    const uniqueBrands = [...new Set(item.map((p) => p.brand))];
    const uniqueColors = Array.from(
        new Set(item.flatMap((p) => p.colors.flatMap((color) => color.name)))
    );

    return (
        <div className="product-filter">
            <nav className="navbar">
                <div className="content">
                    <Link to='/'>Home</Link> / Category / <span className="category">{name}</span>
                </div>
            </nav>
            <div className="container">
                <div className="option">
                    <div>
                        <h3>Thương hiệu -</h3>
                        <div className="brands">
                            {uniqueBrands.map((brand) => (
                                <label key={brand}>
                                    <input
                                        type="checkbox"
                                        name="brand"
                                        value={brand}
                                        onChange={() =>
                                            handleFilterChange("brand", brand)
                                        }
                                    />
                                    {brand}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3>Giá -</h3>
                        <div className="price">
                            <label>
                                <input
                                    type="checkbox"
                                    name="price"
                                    value="low"
                                    onChange={() =>
                                        handleFilterChange("price", "low")
                                    }
                                />
                                &lt; 1,000,000₫
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="price"
                                    value="medium"
                                    onChange={() =>
                                        handleFilterChange("price", "medium")
                                    }
                                />
                                1,000,000₫ - 2,000,000₫
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="price"
                                    value="medium-high"
                                    onChange={() =>
                                        handleFilterChange("price", "medium-high")
                                    }
                                />
                                2,000,000₫ - 5,000,000₫
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="price"
                                    value="high"
                                    onChange={() =>
                                        handleFilterChange("price", "high")
                                    }
                                />
                                &gt; 5,000,000₫
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3>Màu sắc -</h3>
                        <div className="colors" style={{ display: "flex" }}>
                            {uniqueColors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-item ${
                                        selectedColors.includes(color)
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => handleColorSelect(color)}
                                    style={{
                                        background: color,
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="displayed">
                    <h2 className="title">{name}</h2>
                    <div className="container-product">
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className="not-product">Không có sản phẩm</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;