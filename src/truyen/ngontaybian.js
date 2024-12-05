import React from "react";
import { useNavigate } from "react-router-dom";

const NgonTayBian = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="chapter-content">
      <h1>Ngón Tay Bí Ẩn</h1>

      <div className="content">
        <p>
          Ngón Tay Bí Ẩn là một trong có nội dung khá đặc sắc. Câu chuyện như
          sau: Tối qua, con gái tôi dự tiệc sinh nhật của một người bạn cùng lớp
          và về nhà khá muộn, khoảng lúc 11:50 tối. Vừa đón con về, chúng tôi
          cho con bé đi ngủ luôn vì lúc ấy cũng khá muộn rồi. Sau đó, vợ tôi đi
          ngủ còn tôi thì xem bóng đá ở phòng khách rồi ngủ quên mất. Trong cơn
          mơ màng tôi nghe thấy con bé vừa thì thầm gọi tôi, “Bố ơi”, vừa kéo
          tay áo của tôi. Thế là tôi tỉnh giấc, rồi con bé hỏi “Bố đoán xem
          tháng sau con mấy tuổi?”. “Bố không biết”. Tôi vừa đáp lời vừa cố gắng
          tỉnh táo lại. Bỗng con bé lôi 4 ngón tay người từ trong túi áo ra đưa
          tôi xem. Đã 8 tiếng trôi qua, bây giờ là 7:30 sáng, con bé vẫn chưa
          chịu nói cho vợ chồng tôi biết 4 ngón tay ấy lấy từ đâu ra.
        </p>
        <button onClick={goHome}>Trang chủ</button> {/* Thay đổi ở đây */}
      </div>
    </div>
  );
};

export default NgonTayBian;
