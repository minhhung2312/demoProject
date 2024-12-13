import React from "react";
import "../assets/css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Cột 1 */}
                <div className="footer-column column1">
                    <img
                        src="/icon/logo.png"
                        alt="House of Luggage"
                        className="footer-logo"
                    />
                    <p className="color_footer">
                        Với tiêu chí mang đến các sản phẩm từ các thương hiệu hành lý quốc tế nổi tiếng,
                        đẳng cấp và chất lượng, với mức giá hợp lý nhất đến cho người Việt Nam.
                        Sản phẩm tại House Of Luggage đều là sản phẩm chính hãng, độc quyền phân phối và được bảo hành quốc tế
                        (lên đến 10 năm - hoặc vĩnh viễn), phù hợp với nhiều phân khúc khách hàng, đa dạng kiểu dáng và màu sắc cho bạn dễ dàng lựa chọn.{" "}
                        <a href="https://hol.com.vn" target="_blank" rel="noopener noreferrer">
                            hol.com.vn
                        </a>.
                    </p>
                    <img
                        src="/icon/boCongThuong.jpg"
                        alt="Đã thông báo Bộ Công Thương"
                        className="footer-verified"
                    />
                </div>

                {/* Cột 2 */}
                <div className="footer-column column2">
                    <h4>THÔNG TIN LIÊN HỆ</h4>
                    <p>
                        <span style={{ fontWeight: "700" }}>CÔNG TY TNHH TÚI XÁCH & HÀNH LÝ TOÀN CẦU</span>
                    </p>
                    <ul className="formatted-list color_footer">
                        <li className="formatted-list-item">Địa chỉ: L17-11, tầng 17, tòa nhà Vincom Center, 72 Lê Thánh Tôn, Q.1, TP.HCM</li>
                        <li className="formatted-list-item">Điện thoại: 028.3934.5036 - 1800.6063</li>
                        <li className="formatted-list-item">Giấy CNĐKKD: 0314741857</li>
                        <li className="formatted-list-item">Cơ quan cấp: Phòng Đăng Ký Kinh Doanh - Sở Kế Hoạch Và Đầu Tư TP.HCM</li>
                    </ul>
                </div>

                {/* Cột 3 */}
                <div className="footer-column column3">
                    <h4 className="caption_footer">FOLLOW US</h4>
                    <div className="footer-social">
                        <a className="link_facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="icon_facebook fab fa-facebook"></i>
                        </a>
                        <a className="link_youtube" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="icon_youtube fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <h4 className="caption_footer">HOTLINE</h4>
                    <div className="hotline_wrap color_footer">
                        <p className="hotline_item margin-top-20 margin-bottom-20">
                            <i className="fa-solid fa-phone"></i> 1800 6063
                        </p>
                        <strong className="caption_footer">BẢO HÀNH</strong>
                        <p className="margin-top-20 margin-bottom-20 hotline_item">
                            <i className="fa-solid fa-phone"></i> 1800 6063 (bấm số 3)
                        </p>
                        <strong className="caption_footer">B2B (BÁN SỈ):</strong>
                        <div className="margin-top-20 margin-bottom-20">
                            <p className="hotline_item"><i className="fa-solid fa-envelope"></i> b2b@global-luggage.com.vn</p>
                            <p className="hotline_item"><i className="fa-solid fa-phone"></i> Miền Bắc: 0909 559 719</p>
                            <p className="hotline_item"><i className="fa-solid fa-phone"></i> Miền Trung: 0909 880 710</p>
                            <p className="hotline_item"><i className="fa-solid fa-phone"></i> Miền Nam: 0938 917 108</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024Hol.com.vn</p>
            </div>
        </footer>
    );
};

export default Footer;
