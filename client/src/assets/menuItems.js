import frontend2 from "./images/frontend2.jpg";
import backend from "./images/backend.jpg";
import fullstack from "./images/fullstack.jpg";
import cloud from "./images/cloud.jpg";
import security from "./images/security.jpg";

export const menuData = [
  { title: "Courses", link: "/courses" },
  { title: "Locations", link: "/location" },
  { title: "Trainers", link: "/trainers" },
  { title: "Bookings", link: "/bookings" },
];

export const images = [
  {
    id: 1,
    src: frontend2,
    topic: "Frontend",
    desc: "Be the visual Wizard!",
    alt: "Frontend",
  },
  {
    id: 2,
    src: backend,
    topic: "Backend",
    desc: "Welcome to the dark side!",
    alt: "Backend",
  },
  {
    id: 3,
    src: fullstack,
    topic: "Fullstack",
    desc: "All or nothing!",
    alt: "Fullstack",
  },
  {
    id: 4,
    src: cloud,
    topic: "Cloud",
    desc: "Everything is better in the cloud",
    alt: "cloud",
  },
  {
    id: 5,
    src: security,
    topic: "Security",
    desc: "Lock it up!",
    alt: "security",
  },
];
