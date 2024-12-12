import React from 'react';
import '../assets/css/SuitcaseInfo.css'; 

const SuitcaseInfo = () => {
  return (
    <div className="suitcase-info-container">
      <p><strong>Vali kéo</strong> không chỉ đơn thuần là để đựng đồ đạc cho mỗi chuyến đi xa, để du khách yên tâm có đầy đủ đồ dùng khám phá những địa điểm mới mẻ, mà còn là hành trình của sự tiện lợi. Với nhiều ưu điểm nổi bật, vali kéo du lịch không chỉ giúp bảo vệ đồ đạc mà còn mang lại sự tiện lợi và phong cách cho người sử dụng.</p>
      <h2 className="title">Vali kéo dùng chất liệu gì?</h2>
      <p className="description">
        Túy chọn loại vali theo chất liệu như sau:
      </p>
      <ul className="material-list">
        <li>
          <strong>- Vali nhựa:</strong> Thường được làm từ chất liệu nhựa cao cấp như ABS, Polycarbonate, nhựa hạt có độ bền cao giúp bảo vệ vali luôn bền đẹp qua thời gian.
        </li>
        <li>
          <strong>- Vali vải:</strong> Thường được làm từ vải nylon, polyester chặt chẽ, chịu được lực nén và va đập. Những vật liệu này đảm bảo độ bền tốt trong quá trình sử dụng.
        </li>
        <li>
          <strong>- Vali khung nhôm:</strong> Vali khung nhôm có trọng lượng nhẹ nhưng rất bền và chắc chắn. Đây là loại vali được nhiều người ưa chuộng vì tính chắc chắn và tính thẩm mỹ cao.
        </li>
      </ul>

      <h2 className="title">Tiện ích và bảo mật</h2>
      <p className="description">
        <strong>Vali kéo du lịch</strong> thường được thiết kế với nhiều tiện ích giúp bảo vệ đồ đạc và tăng cường độ an toàn trong suốt hành trình của bạn:
      </p>
      <ul className="features-list">
        <li>Vali kéo du lịch thường được tích hợp khóa số an toàn giúp bảo vệ đồ đạc bên trong vali của bạn.</li>
        <li>Với các thiết kế thông minh như vali có thể xoay 360 độ, giúp bạn dễ dàng di chuyển với mọi hướng mà không tốn nhiều công sức.</li>
        <li>Vali khổ lớn chống rạch giúp bảo vệ khóa số TSA, thuận tiện cho các sân bay kiểm tra hành lý khi cần.</li>
      </ul>

      <h2 className="title">Cách chọn size vali</h2>
      <p className="description">
        Cách chọn size vali sẽ phụ thuộc vào nhu cầu sử dụng của bạn. Các kích thước phổ biến của vali bao gồm:
      </p>
      <ul className="size-list">
        <li>
          <strong>Size cabin (S):</strong> Đây là vali nhỏ gọn, có thể xách tay mang lên máy bay như một phần hành lý xách tay.
        </li>
        <li>
          <strong>Size trung (M):</strong> Đây là vali trung bình, thường có kích thước từ 20-25kg, sử dụng cho các chuyến du lịch ngắn ngày.
        </li>
        <li>
          <strong>Size đại (L):</strong> Đây là loại vali lớn, thích hợp cho những chuyến công tác dài ngày.
        </li>
      </ul>
    </div>
  );
};

export default SuitcaseInfo;
