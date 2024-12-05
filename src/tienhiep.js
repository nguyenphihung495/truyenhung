import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navcuatrangtruyen.js";
const KinhDi = () => {
  return (
    <div className="Tiên hiệp">
      <Navbar />
      <h1>Thể Loại: phiêu lưu</h1>
      <div className="story-list">
        <div className="story">
          <h3>Võ Luyện Đỉnh Phong</h3>
          <p>
            Loạt truyện có thể nói là nổi tiếng nhất trong thể loại tiên hiệp.
          </p>
          <Link to="/harrypotter/chapter1">Chương 1</Link>
          <br />
          <Link to="/harrypotter/chapter2">Chương 2</Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default KinhDi;
