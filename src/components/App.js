import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Activities from "./Activities/Activities";

import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Gallery from "./Gallary/Gallary";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
