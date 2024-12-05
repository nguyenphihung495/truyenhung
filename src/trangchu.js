import React from "react";
import { Link } from "react-router-dom";
import "./TrangChu.css";

const TrangChu = () => {
  const stories = [
    {
      title: "Võ luyện đỉnh phong",
      image:
        "https://cdn.truyenfull.tv/medias/covers/5/5842-vu-luyen-dien-phong-vo-luyen-dinh-phong_cover_large.jpg",
      description:
        "Loạt truyện có thể nói là nổi tiếng nhất trong thể loại tiên hiệp.",
      chapters: [
        { title: "Chương 1", href: "/voluyendinhphong" },
        { title: "Chương 2", href: "/voluyendinhphong2" },
      ],
    },
    {
      title: "Ngón tay bí ẩn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJnuIVxHqHp7a-QE4zoyukCvY1L5zJjALmA&s",
      description: "Câu truyện creepypasta khá nổi tiếng.",
      chapters: [{ title: "Chương 1", href: "/ngontaybian" }],
    },
    {
      title: "Harry Potter và Hòn Đá Phù Thủy",
      image:
        "https://cdn.truyenfull.tv/medias/covers/38/38517-harry-potter-va-hon-da-phu-thuy-quyen-1_cover_large.jpg",
      description:
        "Phần đầu tiên của loạt truyện nổi tiếng về cậu bé phù thủy.",
      chapters: [
        { title: "Chương 1", href: "/harrypotter/chapter1" },
        { title: "Chương 2", href: "/harrypotter/chapter2" },
        { title: "Chương 3", href: "/harrypotter/chapter3" },
      ],
    },
    {
      title: "It",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IAcJFFfj5o7zLivJv7Urt0T_twKNiphh1w&s",
      description: "Gã hề kinh dị.",
      chapters: [
        { title: "Chương 1", href: "/it/chapter1" },
        { title: "Chương 2", href: "/it/chapter2" },
      ],
    },
  ];

  return (
    <div className="story-list">
      <h1>Trang Chủ Truyện</h1>
      <div className="story-overview">
        {stories.map((story, index) => (
          <div key={index} className="story">
            <h3 className="story-title">{story.title}</h3>
            <img src={story.image} alt={story.title} />
            <p>{story.description}</p>
 
            <div className="chapter-list">
              {story.chapters.map((chapter, i) => (
                <Link to={chapter.href} key={i}>
                  <button className="chapter-button">{chapter.title}</button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div className="footer-bar">
        <p>Chúc bạn đọc truyện vui vẻ!</p>
      </div>
    </div>
  );
};

export default TrangChu;
