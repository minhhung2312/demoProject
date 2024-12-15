import "../assets/css/Contact.css";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!/^[0-9]{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Nội dung không được để trống";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Gửi thành công!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
        <div className="contact-banner"><img src="/images/Banner-contact.webp" alt="" /></div>
    <div className="container">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4649.224090248562!2d106.69919687570335!3d10.778057109162265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4876c29a9b%3A0xd2c79768678d2142!2zVmluY29tIENlbnRlciDEkOG7k25nIEto4bufaQ!5e1!3m2!1svi!2s!4v1734258329958!5m2!1svi!2s"
          title="Google Map"
          className="map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-section">
        <h2>Liên hệ</h2>
        <p>
          Địa chỉ công ty: Lầu 17, tầng 17, tòa nhà Vincom Center, 72 Lê Thánh Tôn,
          P. Bến Nghé, Q1, TP.HCM
        </p>
        <p>Email: info@houseofluggage.vn</p>
        <p>Điện thoại: 028.3934.3506 - 1800.6063</p>
        <p>Thời gian làm việc: Thứ 2 đến Thứ 6 từ 8h sáng đến 12h30</p>

        <h3>Gửi thắc mắc cho chúng tôi</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Tên của bạn</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email của bạn</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Nội dung</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Gửi cho chúng tôi
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
