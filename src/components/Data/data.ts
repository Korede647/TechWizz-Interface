// data.ts



import slider1 from "../../assets/Images/slider1.jpg";
import slider2 from "../../assets/Images/slider2.jpg";
import slider3 from "../../assets/Images/IMG_3558.jpeg";
import slider4 from "../../assets/Images/slider4.jpg";
import slider5 from "../../assets/Images/slider5.jpg";
// import slider7 from "../../assets/Images/slider7.jpg";
import slider7 from "../../assets/Images/vput12.jpg";


import logo1 from '../../assets/Images/logo1.png';





export interface Story {
  profileImg: string;
  profileName: string;
  title: string[];
  linkLabel: string;
  linkSrc: string;
  storyImg: string;
}
export const stories: Story[] = [
  {
    profileImg: logo1,
    profileName: "Adventure",
    title: [
      "Exploring hidden",
      "destinations worldwide",
      "for true travelers",
    ],
    linkLabel: "Read More", // 8 chars
    linkSrc: "behance.net",
    storyImg: slider1,
  },
  {
    profileImg: logo1,
    profileName: "Wanderlust",
    title: [
      "Discover hidden places",
      "Adventure without limits",
      "Journeys made memorable",
    ],
    linkLabel: "Discover", // 8 chars
    linkSrc: "dribbble.com",
    storyImg: slider2,
  },
  {
    profileImg: logo1,
    profileName: "Pathfinder",
    title: [
      "Unforgettable tours ",
      "journeys and escapes",
      "across the globe",
    ],
    linkLabel: "Check It", // shortened to 8 chars
    linkSrc: "awwwards.com",
    storyImg: slider3,
  },
  {
    profileImg: logo1,
    profileName: "Expedition",
    title: [
      "Curated travel experiences",
      "guides and journeys",
      "for every explorer",
    ],
    linkLabel: "See More", // 8 chars
    linkSrc: "adobe.com",
    storyImg: slider7,
  },
  {
    profileImg: logo1,
    profileName: "Globetrotter",
    title: [
      "The latest in global",
      "travel adventures",
      "and new experiences",
    ],
    linkLabel: "Explore ", // padded to 8 chars
    linkSrc: "creativebloq.com",
    storyImg: slider5,
  },
  {
    profileImg: logo1,
    profileName: "Trailblazer",
    title: [
      "Exploring hidden wonders",
      "worldwide journeys and",
      "for true travelers",
    ],
    linkLabel: "Visit It", // 8 chars
    linkSrc: "smashingmagazine.com",
    storyImg: slider4,
  },
];
