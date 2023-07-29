import React from "react";

import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newssletter from "../components/Newssletter";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newssletter />
      <Cards />
    </div>
  );
};

export default Home;
