import React, { useState } from "react";
import "./Gallery.css";

// ✅ Images inside public folder (e.g. public/1018-1080x1920.jpg)
const images = [
  { src: "1018-1080x1920.jpg", title: "Santorini, Greece" },
  { src: "1015-400x600.jpg", title: "Bali, Indonesia" },
  { src: "1016-800x400.jpg", title: "Swiss Alps" },
  { src: "1019-600x400.jpg", title: "Dubai, UAE" },
  { src: "1020-600x400.jpg", title: "Paris, France" },
  { src: "1021-600x400.jpg", title: "Kyoto, Japan" },
  { src: "1022-600x400.jpg", title: "New York, USA" },
  { src: "1023-600x400.jpg", title: "Sydney, Australia" },
  { src: "1024-600x1130.jpg", title: "Machu Picchu, Peru" },
  { src: "1025-600x400.jpg", title: "Venice, Italy" },
  { src: "1026-800x1440.jpg", title: "Iceland" },
  { src: "1028-800x1080.jpg", title: "Shibuya, Japan" },
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
    <div className="gallery-page">
      {/* Hero Banner */}
      <div className="gallery-container">
        <div className="gallery-overlay">
          <div className="overlay-content">
            <h1 className="text-title">Gallery</h1>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="gallery-description">
        <h2 className="gallery-description-header">Our Exhibits</h2>
        <p>Explore our collection of beautiful images from around the world.</p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(image.src, image.title)}
          >
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img className="lightbox-content" src={selectedImg} alt={selectedTitle || "Selected"} />
          {selectedTitle && <div className="caption">{selectedTitle}</div>}
        </div>
      )}
    </div>
  );
};

export default Gallery;
