import React, { useState } from "react";
import { Link } from "react-router-dom";

const tNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className="logo">
        <h1>Thể loại</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span>Thể Loại</span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/kinhdi">Kinh Dị</Link>
                </li>
                <li>
                  <Link to="/tienhiep">Tiên Hiệp</Link>
                </li>
                <li>
                  <Link to="/phieuluu">Phiêu Lưu</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/lienhe">Liên Hệ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default tNavbar;
