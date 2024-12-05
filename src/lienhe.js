import React, { useState } from "react";
import NavbarTrangChu from "./NavbarTrangChu";

const LienHe = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && comment) {
      alert(`Bình luận của ${username}: ${comment}`);
      setUsername("");
      setComment("");
    } else {
      alert("Vui lòng điền đầy đủ thông tin.");
    }
  };

  return (
    <div className="contact-page">
      <NavbarTrangChu />

      <h1>Liên Hệ</h1>
      <div className="social-links">
        <h3>Kết nối với chúng tôi qua:</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100057666725923"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="phihungquan2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hung_ayy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className="comment-form">
        <h3>Gửi bình luận</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Tên đăng nhập:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="comment">Nội dung bình luận:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <button type="submit">Gửi bình luận</button>
        </form>
      </div>
    </div>
  );
};

export default LienHe;
