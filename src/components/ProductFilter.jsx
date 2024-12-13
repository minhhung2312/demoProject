import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../api/products";
// import test from "../assets/css/test.css"

const ProductFilter = ({name}) => {
    const item = products.filter((product) => product.category === name);

    const [filters, setFilters] = useState({
        brand: [],
        price: [],
        color: [],
    });

    const [selectedColor, setSelectedColor] = useState("");

    const similarColors = {
        blue: ["blue", "darkblue"],
        gray: ["gray", "darkgray"],
        darkblue: ["blue", "darkblue"],
        darkgray: ["gray", "darkgray"],
    };

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

    // Chuyển giá thành kiểu Number và loại bỏ các kí tự không phải là chữ số
    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^\d]/g, ""), 10);
    };

    useEffect(() => {
        if (selectedColors.length > 0) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                color: selectedColors,
            }));
        }
    }, [selectedColors]);

    const handleColorSelect = (color) => {
        setSelectedColors((prevColors) => {
            return prevColors.includes(color)
                ? prevColors.filter((c) => c !== color)
                : [...prevColors, color];
        });
    };

    const filteredProducts = item.filter((product) => {
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
                          return (
                              productPrice >= 1000000 && productPrice <= 2000000
                          );
                      if (priceRange === "medium-high")
                          return (
                              productPrice >= 2000000 && productPrice <= 5000000
                          );
                      if (priceRange === "high") return productPrice > 5000000;
                      return true;
                  })
                : true;

        const matchesColor =
            filters.color.length > 0
                ? filters.color.some((selectedColor) =>
                      product.colors.some((color) =>
                          similarColors[selectedColor]
                              ? similarColors[selectedColor].includes(
                                    color.name[0]
                                )
                              : color.name.includes(selectedColor)
                      )
                  )
                : true;

        return matchesBrand && matchesPrice && matchesColor;
    });

    useEffect(() => {
        // Kiểm tra nếu không có bộ lọc nào được áp dụng
        const isFilterEmpty =
            filters.brand.length === 0 &&
            filters.price.length === 0 &&
            filters.color.length === 0;
    
        // Nếu không có bộ lọc, hiển thị toàn bộ sản phẩm
        if (isFilterEmpty) {
            setDisplayedProducts(item);
        } else {
            // Nếu có bộ lọc, hiển thị sản phẩm đã lọc
            setDisplayedProducts(filteredProducts);
        }
    }, [filters, filteredProducts, item]);
    

    const uniqueBrands = [...new Set(item.map((p) => p.brand))];
    const uniqueColors = Array.from(
        new Set(
            item.flatMap((p) =>
                p.colors.map((color) => color.name[0] || color.code)
            )
        )
    );

    return (
        <div className="product-filter">
            <nav className="navbar">
                <div className="content">
                    Trang chủ / Danh mục / <span className="category">{name}</span>
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
                                    className={`color-items ${
                                        selectedColor === color ? "active" : ""
                                    }`}
                                    onClick={() => handleColorSelect(color)}
                                    style={{
                                        background: color
                                    }}
                                >
                                </div>
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

