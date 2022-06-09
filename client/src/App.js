import "./app.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CoursesList from "./components/courses/CoursesList";

import Courses from "./pages/Courses";
import Bookings from "./pages/bookings/Bookings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursesList />} />
        <Route path="courses/:courseTopic" element={<Courses />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
