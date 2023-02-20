import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsLatter from "./components/NewsLatter";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLatter />
      <CardSection />
      <Footer />
    </main>
  );
}

export default App;
