import React, { useRef } from 'react';
import './DealsSection.css';
import { FaRegHeart } from "react-icons/fa";
import Boraapart from '../../assets/Apartment-images/boraapart.jpg'
import franceApart from '../../assets/Apartment-images/boraapart.jpg'
import ZeelandApart from '../../assets/Hotel-images/tahitihotel.jpg'
import Barca from '../../assets/Hotel-images/barca.webp'
import { PiAirplaneInFlight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

interface Deal {
  image: string;
  name: string;
  location: string;
  rating: string;
  route: string;
  originalPrice: string;
  discountedPrice: string;
  PerTravel: string;
  dates: string;
}

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  return (
    <div className="deal-card">
      <div className="deal-image">
        <img src={deal.image} alt={deal.name} />
        <div className="discount-badge">20% Off</div>
        <div className="heart-icon"><FaRegHeart /></div>
      </div>
      <div className="deal-info">
        <h3>{deal.name}</h3>
        <p className="location">{deal.location}</p>
        <div className="rating"> <HiOutlineBuildingOffice2 style={{fontSize:'20'}} /> {deal.rating}</div>
        <div className="route"> <PiAirplaneInFlight style={{fontSize:'20'}} /> {deal.route}</div>
        <div className="price">
          <span className="original-price">{deal.originalPrice}</span>
          <span className="discounted-price">{deal.discountedPrice}</span>
        </div>
        <span className='travebete'>{deal.PerTravel}</span><br/>
        <span className="dates">{deal.dates}</span>
      </div>
    </div>
  );
};

const LastMinuteDeals: React.FC = () => {
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

  const deals: Deal[] = [
    {
      image: Boraapart,
      name: 'Hotel Parkview Resort',
      location: 'Antigua, West Indies',
      rating: '3.5 stars - 10/10 Exceptional',
      route: 'Dhaka (DAC) - Antigua (WI)',
      originalPrice: '$999.99',
      discountedPrice: '$1999.99',
      PerTravel:'Per Travel',
      dates: 'From Tue, Nov 26, Sat, Nov 30 (4 nights)',
    },
    {
      image: franceApart,
      name: 'Central Plaza Resort',
      location: 'Koggala, Sri Lanka',
      rating: '3.5 stars - 10/10 Exceptional',
      route: 'Dhaka (DAC) - Antigua (WI)',
      originalPrice: '$1999.99',
      discountedPrice: '$999.99',
      PerTravel:'Per Travel',
      dates: 'From Tue, Nov 26, Sat, Nov 30 (4 nights)',
    },
    {
      image: ZeelandApart,
      name: 'The Eleven Hotel and Resort',
      location: 'Essaouira, Morocco',
      rating: '3.5 stars - 10/10 Exceptional',
      route: 'Dhaka (DAC) - Antigua (WI)',
      originalPrice: '$1999.99',
      discountedPrice: '$999.99',
      PerTravel:'Per Travel',
      dates: 'From Tue, Nov 26, Sat, Nov 30 (4 nights)',
    },
    {
      image: Barca,
      name: 'The Eleven Hotel and Resort',
      location: 'Essaouira, Morocco',
      rating: '3.5 stars - 10/10 Exceptional',
      route: 'Dhaka (DAC) - Antigua (WI)',
      originalPrice: '$1999.99',
      discountedPrice: '$999.99',
      PerTravel:'Per Travel',
      dates: 'From Tue, Nov 26, Sat, Nov 30 (4 nights)',
    },
  ];

  return (
    <div className="deals-container">
      <h1 className='deals-h1'>Last minute deals in unique places</h1>
      <p>Plan, book, and embark on your dream adventure with <br /> our expert guidance and tailored experiences.</p>
      <div className="deals-grid" ref={scrollRef} onTouchStart={handleSwipe}>
        {deals.map((deal, index) => (
          <DealCard key={index} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default LastMinuteDeals;