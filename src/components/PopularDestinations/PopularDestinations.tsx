import React, { useState, useEffect, useRef } from "react";
import "./PopularDestinations.css";

interface Destination {
  id: number;
  country: string;
  description: string;
  tours: number;
  flag: string; // SVG or image URL
  image: string;
}

const TravelCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const destinations: Destination[] = [
    {
      id: 1,
      country: "Brazil",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/brazil-3.svg", // SVG flag for Brazil
      image:
        "https://lavella.hellodigi.ru/img/prevnap4.jpg",
    },
    {
      id: 2,
      country: "Cyprus",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/cyprus-3.svg", // SVG flag for Cyprus
      image:
        "https://lavella.hellodigi.ru/img/prevnap5.jpg",
    },
    {
      id: 3,
      country: "America",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/usa.svg", // SVG flag for USA
      image:
        "https://lavella.hellodigi.ru/img/prevnap1.jpg",
    },
    {
      id: 4,
      country: "Russia",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/russia.svg", // SVG flag for Russia
      image:
        "https://lavella.hellodigi.ru/img/prevnap9.jpg",
    },
    {
      id: 5,
      country: "England",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/eng.svg", // SVG flag for United Kingdom
      image:
        "https://lavella.hellodigi.ru/img/prevnap6.jpg",
    },
    {
      id: 6,
      country: "Turkey",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/turkey.svg", // SVG flag for Turkey
      image:
        "https://lavella.hellodigi.ru/img/prevnap3.jpg",
    },
    {
      id: 7,
      country: "Egypt",
      description:
        "Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      tours: 15,
      flag: "https://lavella.hellodigi.ru/img/egypt-3.svg", // SVG flag for Egypt
      image:
        "https://lavella.hellodigi.ru/img/prevnap2.jpg",
    },
  ];

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 4000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const cards: Destination[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % destinations.length;
      cards.push(destinations[index]);
    }
    return cards;
  };

  return (
    <div className="carousel-container4">
      <div className="carousel-header4">
        <div className="header-left4">
          <span className="header-label4">TRUE NOW</span>
          <h1 className="header-title4">Popular Destinations</h1>
        </div>
        <div className="header-right4">
          <button className="view-all-btn4">View all destinations</button>
          <div className="nav-buttons4">
            <button className="nav-button4" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="nav-button4" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="cards-container4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {getVisibleCards().map((dest, index) => (
          <div
            key={`${dest.id}-${currentIndex}-${index}`}
            className="card4"
          >
            <div className="card-image4">
              <img src={dest.image} alt={dest.country} />
            </div>
             <div className="flag-circle44">
                <img src={dest.flag} alt={`${dest.country} Flag`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            <div className="card-content4">
              <h2 className="country-name4">{dest.country}</h2>
              <p className="description4">{dest.description}</p>
              <div className="card-footer4">
                <span className="tours-badge4">{dest.tours} tours</span>
                <a href="#" className="view-tours-link4">
                  View all tours
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCarousel;