import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CoursesList from "./components/courses/CoursesList";

import Courses from "./pages/Courses";
import Bookings from "./pages/bookings/Bookings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursesList />} />
        <Route path="courses/:courseTopic" element={<Courses />} />
        <Route path="/bookings" element={<Bookings />} />
        {/* <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/security" element={<Security />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
