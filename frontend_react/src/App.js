import React from "react";

//import { About } from "./components/container";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  //return <div>Adoo from App</div>;

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
