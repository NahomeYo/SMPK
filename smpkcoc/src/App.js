import { Home } from './Home.js';
import { Calendar } from './Calendar.js';
import { LiveStream } from './LiveStream.js';
import { COC, Pope, Saints } from './Faith.js';
import { Location } from './Location.js';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './designKit/Navbar.js';
import { Ministries } from './Ministries.js';
import { Gallery } from './Gallery.js';
import { Footer } from './Footer.js';
import { useEffect, useState } from 'react';

function App() {
  const [navHeight, setNavHeight] = useState('0px');

  useEffect(() => {
    const nav = document.querySelector('nav');

    if (nav) {
      const navStyles = window.getComputedStyle(nav);
      const navHeightVal = navStyles.getPropertyValue('height');
      setNavHeight(navHeightVal);
    }
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ministries" element={<Ministries height={navHeight} />} />
        <Route path="/Calendar" element={<Calendar height={navHeight} />} />
        <Route path="/LiveStream" element={<LiveStream height={navHeight} />} />
        <Route path="/COC" element={<COC height={navHeight} />} />
        <Route path="/PT" element={<Pope height={navHeight} />} />
        <Route path="/Saints" element={<Saints height={navHeight} />} />
        <Route path="/Location" element={<Location height={navHeight} />} />
        <Route path="/Gallery" element={<Gallery height={navHeight} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;