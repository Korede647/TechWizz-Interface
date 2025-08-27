import React, { useState, useEffect } from 'react';
import './CitySlideshow.css';
import Argentina from '../../assets/Apartment-images/argentina.jpg'
import Borabore from '../../assets/Apartment-images/borabora.jpg'
import delpine from '../../assets/Apartment-images/delPaine.jpg'
import maui from '../../assets/Apartment-images/singapore.jpg'
import Uk from '../../assets/Apartment-images/usa.webp'

interface Section {
  id: number;
  title: string;
  content: string;
  bgImage: string;
}

const SatelliteSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isContainerInactive, setIsContainerInactive] = useState(true);

  const sections: Section[] = [
    { id: 1, title: "Argentina", content: "Argentina Hotel", bgImage: Argentina },
    { id: 2, title: "Borabore", content: "Borabore Hotel", bgImage: Borabore },
    { id: 3, title: "Delpain", content: "Delpaine Hotel", bgImage: delpine },
    { id: 4, title: "Singapore", content: "Singapore Hotel", bgImage: maui },
    { id: 5, title: "Uk", content: "Uk Hotel", bgImage: Uk }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContainerInactive(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  return (
    <div className="satellite-container">
      <div className={`cont ${isContainerInactive ? 's--inactive' : ''} ${activeIndex !== null ? 's--el-active' : ''}`}>
        <div className="cont__inner">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`el ${activeIndex === index ? 's--active' : ''}`}
              onClick={() => handleSectionClick(index)}
              style={{ '--i': index } as React.CSSProperties}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div 
                    className="el__bg"
                    style={{ backgroundImage: `url(${section.bgImage})` }}
                  ></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">{section.title}</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">{section.content}</div>
                    <div className="el__close-btn" onClick={handleCloseClick}></div>
                  </div>
                </div>
              </div>
              <div className="el__index">
                <div className="el__index-back">{section.id}</div>
                <div className="el__index-front">
                  <div className="el__index-overlay" data-index={section.id}>
                    {section.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="https://dribbble.com/shots/2802024-Satellite-Website-Prototype" target="_blank" rel="noopener noreferrer" className="icon-link">
        <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" alt="Dribbble" />
      </a>
      <a href="https://twitter.com/NikolayTalanov" target="_blank" rel="noopener noreferrer" className="icon-link icon-link--twitter">
        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter" />
      </a>
    </div>
  );
};

export default SatelliteSection;