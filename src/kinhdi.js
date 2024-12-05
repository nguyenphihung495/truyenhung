import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navcuatrangtruyen.js";
const KinhDi = () => {
  return (
    <div className="kinhdi">
      <Navbar />
      <h1>Thể Loại: Kinh Dị</h1>
      <div className="story-list">
        <div className="story">
          <h3>It</h3>
          <p>Gã hề kinh dị nổi tiếng trong các câu chuyện rùng rợn.</p>
          <Link to="/it/chapter1">Chương 1</Link>
          <br />
          <Link to="/it/chapter2">Chương 2</Link>
        </div>
        <div className="story">
          <h3>Những Ngón Tay Bí Ẩn</h3>
          <p>Câu chuyện creepypasta với các yếu tố bí ẩn và kinh dị.</p>
          <Link to="/ngontaybian">Chương 1</Link>
        </div>
      </div>
    </div>
  );
};

export default KinhDi;
