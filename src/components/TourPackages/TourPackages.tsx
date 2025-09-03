import React, { useRef } from 'react';
import './TourPackages.css';
import barca from '../../assets/Portrait/resort2.jpg';
import restor2 from '../../assets/Portrait/luxury-img.jpg'
import treasurepark from '../../assets/Portrait/beach-park.jpg'
import threeimg from '../../assets/Portrait/three.jpg'
import { FaRegStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoTodayOutline } from "react-icons/io5";


const TourCard = ({  price, days, image, location }: { title: string; price: string; days: string; image: string; location: string }) => (
  <div className="tour-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="card-header">
      <div className="card-header-description">
        <span className="likes"> <div className="icon-box"><FaRegStar /></div> 2,332</span>
      <span className="price-tag"><FiShare2 /> $50</span></div>
      <span className="days"> <IoTodayOutline /> {days}</span>
    </div>
    <div className="tour-content">
      <div className="tour-info">
        <p>Price starts from (per person), with Airfare</p>
        <p className="price-value">{price}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  </div>
);

const TourPackages: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      const touch = e.touches[0];
      const startX = touch.clientX;
      let scrollLeft = scrollRef.current.scrollLeft;

      const handleMove = (moveEvent: TouchEvent) => {
        const currentX = moveEvent.touches[0].clientX;
        const diffX = startX - currentX;
        scrollRef.current!.scrollLeft = scrollLeft + diffX;
      };

      const handleEnd = () => {
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };

      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    }
  };

  const tours = [
    { title: 'Switzerland, Lake Lucerne Visit', price: 'USD $4999', days: '7 day', image: barca, location: 'Switzerland, Lake Lucerne Visit' },
    { title: 'Bali, Indonesia', price: 'USD $3999', days: '7 day', image: restor2, location: 'Bali, Indonesia' },
    { title: 'Canada, Niagara Falls', price: 'USD $4999', days: '7 day', image: treasurepark, location: 'Canada, Niagara Falls' },
    { title: 'Switzerland', price: 'USD $4999', days: '7 day', image: threeimg, location: 'Switzerland' },
  ];

  return (
    <div className="tour-packages">
      <div className="header">
        <h1>Our Tour Packages you'll love</h1>
      </div>
      <p className="description">
        Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
      </p>
      <div className="tour-grid" ref={scrollRef} onTouchStart={handleSwipe}>
        {tours.map((tour, index) => (
          <TourCard key={index} title={tour.title} price={tour.price} days={tour.days} image={tour.image} location={tour.location} />
        ))}
      </div>
    </div>
  );
};

export default TourPackages;