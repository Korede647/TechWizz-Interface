import React, { useRef } from "react";
import "./Testimony.css";

const Testimony: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      const touch = e.touches[0];
      const startX = touch.clientX;
      const scrollLeft = scrollRef.current.scrollLeft;

      const handleMove = (moveEvent: TouchEvent) => {
        const currentX = moveEvent.touches[0].clientX;
        const diffX = startX - currentX;
        scrollRef.current!.scrollLeft = scrollLeft + diffX;
      };

      const handleEnd = () => {
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
      };

      document.addEventListener("touchmove", handleMove);
      document.addEventListener("touchend", handleEnd);
    }
  };

  return (
    <section className="testimony-section" ref={scrollRef} onTouchStart={handleSwipe}>
      <div className="testimony-card">
        <div className="testimony-img2"></div>
        <span>
          <h3>Any route</h3>
          <p>We will help you to make any route for travel</p>
        </span>
      </div>

      <div className="testimony-card">
        <div className="testimony-img"></div>
        <span>
          <h3>Your dream</h3>
          <p>Your dreams of an unforgettable journey can come true with us</p>
        </span>
      </div>

      <div className="testimony-card">
        <div className="testimony-img1"></div>
        <span>
          <h3>Our guarantee</h3>
          <p>We guarantee you an unforgettable journey and a lot of impressions</p>
        </span>
      </div>
    </section>
  );
};

export default Testimony;
