
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { stories } from "../../components/Data/data"; // Ensure data.ts exports typed data
import "./nav.css"


// Constants from Stories.tsx
const storyDuration = 4000;
const contentUpdateDelay = 0.4;

const Navbar: React.FC = () => {
  const logoNameRef = useRef<HTMLDivElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const [activeStory, setActiveStory] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const storyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animation function for logo name (fade out/in)
  const animateLogoName = () => {
    if (logoNameRef.current) {
      gsap.fromTo(
        logoNameRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, delay: contentUpdateDelay }
      );
    }
  };

  // Animation function for logo image (fade out/in)
  const animateLogoImage = () => {
    if (logoImgRef.current) {
      gsap.fromTo(
        logoImgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: contentUpdateDelay }
      );
    }
  };

  // Cycle to next story
  const changeStory = () => {
    // Fade out current content
    if (logoNameRef.current && logoImgRef.current) {
      gsap.to([logoNameRef.current, logoImgRef.current], {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Update story after fade-out
          setActiveStory((prev) => (prev + 1) % stories.length);
        },
      });
    }
  };

  // Effect to handle story cycling
  useEffect(() => {
    // Preload images to avoid flickering
    stories.forEach((story) => {
      const img = new Image();
      img.src = story.profileImg;
    });

    // Animate after story change
    animateLogoName();
    animateLogoImage();

    // Set timeout for next story
    storyTimeoutRef.current = setTimeout(changeStory, storyDuration);

    return () => {
      if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
    };
  }, [activeStory]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" aria-label={`Profile: ${stories[activeStory].profileName}`}>
        <div className="logo-image">
          <img
            src={stories[activeStory].profileImg}
            alt={stories[activeStory].profileName}
            ref={logoImgRef}
          />
        </div>
        <div className="profile-name" ref={logoNameRef}>
          <p>{stories[activeStory].profileName}</p>
        </div>
      </div>

      <div className="left-nav">
        <nav className="nav-links">
          <span className="glass">
            <NavLink to="/">Home</NavLink>
          </span>
          <span className="glass">
            <Link to="/Country">Country</Link>
          </span>
          <span className="glass">
            <Link to="/Trip-Catalogue">Trip Catalogue</Link>
          </span>
          <span className="glass">
            <Link to="/Contact">Contact</Link>
          </span>
          <span className="glass">
            <Link to="/About">About</Link>
          </span>
        </nav>

        <div className="user-auth">
          <span className="signup">
            <span className="dot"></span>
            <Link to="/Signup">Signup</Link>
          </span>
          <button className="login">
            <Link to="/Login">
              Login <FaArrowRightLong style={{ paddingTop: "5px" }} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
