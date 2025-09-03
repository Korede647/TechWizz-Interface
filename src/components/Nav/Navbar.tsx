"use client";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { stories } from "../../components/Data/data"; // Import stories from data.ts
import "./nav.css";

const storyDuration = 4000; // Same as Stories.tsx
const contentUpdateDelay = 0.4; // Same as Stories.tsx

const Navbar: React.FC = () => {
  const logoNameRef = useRef<HTMLDivElement>(null); // Renamed from profileNameRef to avoid confusion
  const logoImgRef = useRef<HTMLImageElement>(null); // Renamed from profileImgRef
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const storyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const [isScrolled, setIsScrolled] = useState(false);

  // Animation function for logo name (profile name)
  const animateLogoName = (newLogoName: HTMLParagraphElement) => {
    gsap.to(logoNameRef.current?.querySelectorAll("p") || [], {
      y: direction === "next" ? -24 : 24,
      duration: 0.5,
      delay: contentUpdateDelay,
    });
    gsap.to(newLogoName, {
      y: 0,
      duration: 0.5,
      delay: contentUpdateDelay,
    });
  };

  // Animation function for logo image (profile image)
  const animateLogoImage = (newImg: HTMLImageElement) => {
    gsap.fromTo(
      newImg,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: contentUpdateDelay }
    );
  };

  // Cleanup function to prevent DOM bloat
  const cleanUpElements = () => {
    if (logoNameRef.current && logoNameRef.current.childElementCount > 2) {
      logoNameRef.current.removeChild(logoNameRef.current.firstChild!);
    }
  };

  // Change story function
  const changeStory = (isAutomatic = true) => {
    const currentDirection = isAutomatic ? "next" : direction;
    const newIndex =
      currentDirection === "next"
        ? (activeStory + 1) % stories.length
        : (activeStory - 1 + stories.length) % stories.length;

    setActiveStory(newIndex);
    if (!isAutomatic) setDirection(currentDirection);

    const story = stories[newIndex];

    // Update logo name (profile name)
    const newLogoName = document.createElement("p");
    newLogoName.innerText = story.profileName;
    newLogoName.style.transform =
      currentDirection === "next" ? "translateY(24px)" : "translateY(-24px)";
    logoNameRef.current?.appendChild(newLogoName);
    animateLogoName(newLogoName);

    // Update logo image (profile image)
    if (logoImgRef.current) {
      logoImgRef.current.src = story.profileImg;
      animateLogoImage(logoImgRef.current);
    }

    cleanUpElements();

    // Set timeout for next story
    if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
    storyTimeoutRef.current = setTimeout(() => changeStory(true), storyDuration);
  };

  // Effect to start story cycling
  useEffect(() => {
    // Preload images to avoid flickering
    stories.forEach((story) => {
      const img = new Image();
      img.src = story.profileImg;
    });

    // Initial story animation
    storyTimeoutRef.current = setTimeout(() => changeStory(true), storyDuration);

    return () => {
      if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
    };
  }, [activeStory]);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Optional: Handle click navigation (uncomment to enable)
  /*
  const handleNavClick = (navDirection: "next" | "prev") => {
    if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
    setDirection(navDirection);
    changeStory(false);
  };
  */

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" aria-label={`Profile: ${stories[activeStory].profileName}`}>
        <div className="logo-image">
          <img
            src={stories[0].profileImg}
            alt={stories[0].profileName}
            ref={logoImgRef}
          />
        </div>
        <div className="profile-name">
        <p>{stories[0].profileName}</p>
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