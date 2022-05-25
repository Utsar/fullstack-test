import './app.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Trainers from './pages/Trainers';
import Locations from './pages/Locations';
import Courses from './pages/Courses';
import CoursesList from './components/courses/CoursesList';

import Cloud from './pages/Cloud';
import Fullstack from './pages/Fullstack';
import Backend from './pages/Backend';
import Security from './pages/Security';
import Frontend from './pages/frontEnd/Frontend';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursesList />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
