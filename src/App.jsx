import { useState, useRef } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sbd from "./components/Sbd";
import Dmj from "./components/Dmj";
import Os from "./components/Os";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const homeRef = useRef(null);
  const sbdRef = useRef(null);
  const dmjRef = useRef(null);
  const osRef = useRef(null);

  const scrollTo = {
    home: () => homeRef.current.scrollIntoView({ behavior: "smooth" }),
    sbd: () => sbdRef.current.scrollIntoView({ behavior: "smooth" }),
    dmj: () => dmjRef.current.scrollIntoView({ behavior: "smooth" }),
    os: () => osRef.current.scrollIntoView({ behavior: "smooth" }),
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-blue-50 text-gray-800"
      }`}
    >
      <Header />
      <Navbar
        scrollTo={scrollTo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div ref={homeRef}>
        <Home darkMode={darkMode} />
      </div>
      <div ref={sbdRef}>
        <Sbd darkMode={darkMode} />
      </div>
      <div ref={dmjRef}>
        <Dmj darkMode={darkMode} />
      </div>
      <div ref={osRef}>
        <Os darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
