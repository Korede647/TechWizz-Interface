import React, { useState } from "react";
import "./Gallery.css";

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>


const images = [
  { src: "https://picsum.photos/id/1018/1080/1920", title: "Santorini, Greece" },
  { src: "https://picsum.photos/id/1015/400/600", title: "Bali, Indonesia" },
  { src: "https://picsum.photos/id/1016/800/400", title: "Swiss Alps" },
  { src: "https://picsum.photos/id/1019/600/400", title: "Dubai, UAE" },
  { src: "https://picsum.photos/id/1020/600/400", title: "Paris, France" },
  { src: "https://picsum.photos/id/1021/600/400", title: "Kyoto, Japan" },
  { src: "https://picsum.photos/id/1022/600/400", title: "New York, USA" },
  { src: "https://picsum.photos/id/1023/600/400", title: "Sydney, Australia" },
  { src: "https://picsum.photos/id/1024/600/400", title: "Machu Picchu, Peru" },
  { src: "https://picsum.photos/id/1025/600/400", title: "Venice, Italy" },
  { src: "https://picsum.photos/id/1026/800/1440", title: "Iceland" },
  { src: "https://picsum.photos/id/1028/800/1080", title: "Shibuya, Japan" },

];

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const openLightbox = (src: string, title: string) => {
    setSelectedImg(src);
    setSelectedTitle(title);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    setSelectedTitle(null);
  };

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-overlay">
          <div className="overlay-content">
            <div className="overlay-text">
              <h1 className="text-title">Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-description">
        <h2 className="gallery-description-header">Our Exhibits</h2>
        <p>Explore our collection of beautiful images from around the world.</p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
            <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(image.src, image.title)}
            >
                <img src={image.src} alt={image.title} />
                <div className="gallery-item-title">{image.title}</div>
            </div>
        ))}
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImg} alt={selectedTitle ?? undefined} />
          <div className="lightbox-caption">{selectedTitle}</div>
        </div>
      )}
    </>
  );
};

export default Gallery;
