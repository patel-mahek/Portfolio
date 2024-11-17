// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Aboutme from './Components/Aboutme';
import Education from './Components/Education';
import Skill from './Components/Skill';

const App = () => {
  return (
    <>
      <Routes>  {/* Set up Routes here */}
        <Route path="/" element={<Aboutme />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
    </>
  );
};

export default App;
