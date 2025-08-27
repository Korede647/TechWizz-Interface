import React, { useRef } from "react";
import TravelCard from "./TravelCard";
import "./TravelCard.css";
import Theme1 from '../../assets/Images/Theme1.png';
import Theme2 from '../../assets/Images/Theme2.png';
import Theme3 from '../../assets/Images/Theme3.png';

const TravelCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={() => scroll("left")}>❮</button>
      <div className="carousel" ref={carouselRef}>
        <TravelCard
          bgColor="#f97316"
          badgeText="Enjoy 15% Off"
          title="Your long-awaited Japan trip!"
          image={Theme1}
        />
        <TravelCard
          bgColor="#a855f7"
          badgeText="Enjoy 15% Off"
          title="Your long-awaited Taiwan trip!"
          image={Theme2}
        />
        <TravelCard
          bgColor="#2dd4bf"
          badgeText="Use Code"
          title="Celebrate with a trip to Korea!"
          image={Theme3}
          code="KOREA50"
        />
      </div>
      <button className="arrow right" onClick={() => scroll("right")}>❯</button>
    </div>
  );
};

export default TravelCarousel;
