import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../api/products";
import "../assets/css/FilterColor.css";

const ProductFilter = () => {
    const category = "balo";
    const item = products.filter((product) => product.category === category);

    const [filters, setFilters] = useState({
        brand: [],
        price: [],
        color: [],
    });

    const [selectedColor, setSelectedColor] = useState("");

    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => {
            const currentValues = prevFilters[key];
            return {
                ...prevFilters,
                [key]: currentValues.includes(value)
                    ? currentValues.filter((item) => item !== value) // Xóa nếu đã tồn tại
                    : [...currentValues, value], // Thêm nếu chưa tồn tại
            };
        });
    };

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^\d]/g, ""), 10);
    };

    useEffect(() => {
        if (selectedColor) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                color: [selectedColor], // Cập nhật màu đã chọn
            }));
        }
    }, [selectedColor]);

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
                ? filters.color.some((color) =>
                      product.colors.some(
                          (pColor) =>
                              pColor.name.includes(color) ||
                              pColor.code === color ||
                              pColor.thumbnail === color
                      )
                  )
                : true;

        return matchesBrand && matchesPrice && matchesColor;
    });

    const uniqueBrands = [...new Set(item.map((p) => p.brand))];
    const uniqueColors = Array.from(
        new Set(
            item.flatMap((p) =>
                p.colors.map((color) => color.code || color.thumbnail)
            )
        )
    );

    return (
        <div className="product-filter">
            <nav className="navbar">
                <div className="content">
                    Trang chủ / Danh mục /{" "}
                    <span className="category">{category}</span>
                </div>
            </nav>
            <div className="container">
                <div className="option">
                    {/* Lọc theo thương hiệu */}
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

                    {/* Lọc theo giá */}
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

                    {/* Lọc theo màu */}
                    <div>
                        <h3>Màu sắc -</h3>
                        <div className="colors" style={{ display: "flex" }}>
                            {uniqueColors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-item ${
                                        selectedColor === color ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedColor(color)}
                                    style={{
                                        background: color.startsWith("#")
                                            ? color
                                            : `url(${color})`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hiển thị kết quả lọc */}
                <div className="displayed">
                    <h2 className="title">{category}</h2>
                    <div className="container-product">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        ) : (
                            <p>Không có sản phẩm</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="paragraph">
                <p><b>Balo</b> là lựa chọn hoàn hảo cho những ai yêu thích sự đơn giản nhưng thời trang, tiện ích, chính hãng hãy đến với <b>House Of Luggage</b>, chuyên cung cấp các loại <b>balo laptop, thời trang, doanh nhân, trẻ em, thể thao, du lịch</b> với đầy đủ mẫu mã và màu sắc khác nhau phù hợp với mọi sự kiện. Tùy vào nhu cầu khác nhau mà quý khách chọn cho mình mẫu phù hợp.</p>
                <h3>Đặc điểm nổi bật của balo</h3>
                <p><b>Balo</b> của các thương hiện lớn hiện nay như: <b>Samsonite, Delsey, Victorinox, Wenger, ace,..</b> đều cho ra những mẫu mã cải tiến, vừa đầy đủ chức năng lại vừa thời trang.</p>
                <p>Ngăn chính <b>balo</b> rộng rãi: đủ không gian để đựng giấy tời, sổ sách, laptop, quần áo hoặc các vật dụng cá nhân. Với kích thước phù hợp, thể đựng được các vật dụng thiết yếu cho một ngày làm việc hay học tập.</p>
                <p>Balo với dây đeo lưng có thể điều chỉnh ngắn dài khác nhau, giúp bạn mang theo trong suốt ngày dài mà không lo mỏi, phía sau lưng có đệm thiết kế rãnh thoáng khí giúp bạn khi đeo trong thời gian dài không bị đọng mồ hôi.</p>
                <p>Ngăn dành cho <b>laptop</b> hoặc máy tính bảng: Được trang bị một ngăn riêng biệt và đệm bảo vệ, giúp bảo vệ thiết bị điện tử của bạn khỏi những va đập và trầy xước trong quá trình di chuyển.</p>
                <p><b>Balo</b> còn có nhiều ngăn phụ cho phép bạn đựng các vật dụng nhỏ như điện thoại, ví tiền, chìa khóa, bút, thẻ một cách gọn gàng và dễ dàng tìm kiếm.</p>
                <p><b>Balo chính hãng</b> được trang bị đệm lưng và quai đeo có thể điều chỉnh, giúp người sử dụng cảm thấy thoải mái khi đeo trong thời gian dài. Quai đeo được thiết kế với chất liệu đệm êm, giúp giảm bớt sự căng thẳng lên vai và lưng. Đồng thời, balo cũng có một phần đệm lưng thoáng khí, giúp giảm mồ hôi và tạo cảm giác dễ chịu trong suốt quá trình di chuyển.</p>
                <h4>Các loại balo hiện nay</h4>
                <p><b>Balo laptop</b> không chỉ là nơi an toàn cho chiếc máy tính xách tay mà còn là biểu tượng của sự chuyên nghiệp và tiện ích trong công việc hàng ngày. Với ngăn chống sốc và chất liệu chống nước, ba lo laptop là người bạn trung thành cho những ai thường xuyên di chuyển, đi lại nhiều, giúp bảo vệ laptop an toàn, tiện dụng.</p>
                <p><b>Balo thể thao</b> không chỉ là vật dụng giúp bạn mang theo đủ đồ cần thiết trong buổi tập, mà còn là biểu tượng của lối sống sức khỏe và đam mê vận động. Với thiết kế thoải mái và nhiều ngăn để đựng đồ thể thao, balo trở thành người bạn đồng hành đắc lực của những người yêu thể dục và hoạt động thể thao ngoài trời.</p>
                <p><b>Balo doanh nhân</b> không chỉ là phương tiện di chuyển hàng ngày mà còn là biểu tượng của sự chuyên nghiệp và đẳng cấp. Với thiết kế sang trọng, nhiều ngăn chứa đồ, nhiều mẫu có cả cổng sạc di động, giúp bạn duy trì công việc mà không bị gián đoạn.</p>
                <p><b>Balo trẻ em</b> là sự kết hợp giữa thiết kế đáng yêu và tính năng an toàn. Với màu sắc tươi sáng, hình ảnh nhân vật hoạt hình, và kích thước phù hợp, balo trẻ em là đối tác lý tưởng giúp trẻ phát triển tinh thần sáng tạo và tự chủ trong việc tự quản lý đồ đạc cá nhân.</p>
                <p><b>Balo du lịch</b> được thiết kế để đồng hành với mọi hành trình. Với nhiều ngăn chứa đồ, chất liệu chống thấm nước và nhẹ nhàng, giúp bạn dễ dàng di chuyển và giữ cho mọi thứ được tổ chức ngay ngắn, gọn gàng cả trong những chuyến phiêu lưu dài ngày.</p>
                <p><b>Balo thời trang</b> không chỉ là phương tiện đựng đồ mà còn là biểu tượng của phong cách cá nhân. Đa dạng về kiểu dáng, chất liệu và màu sắc, giúp bạn tỏa sáng và thể hiện cái tôi của mình mỗi khi xuất hiện.</p>
                <p>Các loại <b>balo</b> không chỉ đơn giản là vật dụng vận chuyển đồ đạc mà còn là biểu tượng của phong cách và nhu cầu đa dạng của mọi người. Dù bạn là người làm việc, du khách, hoặc người yêu thể thao, hãy chọn cho mình một loại balo phù hợp để đồng hành cùng bạn trong mọi hoàn cảnh.</p>
            </div>

        </div>
    );
};

export default ProductFilter;
