import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navcuatrangtruyen.js";
const KinhDi = () => {
  return (
    <div className="Phiêu lưu">
      <Navbar />
      <h1>Thể Loại: phiêu lưu</h1>
      <div className="story-list">
        <div className="story">
          <h3>harypotterChap1</h3>
          <p>Phần đầu tiên của loạt truyện nổi tiếng về cậu bé phù thủy.</p>
          <Link to="/harrypotter/chapter1">Chương 1</Link>
          <br />
          <Link to="/harrypotter/chapter2">Chương 2</Link>
          <br />
          <Link to="/harrypotter/chapter3">Chương 3</Link>
        </div>
      </div>
    </div>
  );
};

export default KinhDi;
