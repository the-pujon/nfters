import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Transiction from "./Components/Transiction/Transiction";
import Collection from "./Components/Collection/Collection";
import Featured from "./Components/Featured/Featured";

const App = () => {
  return (
    <div>
      <Navbar />

      <Header />

      <Transiction />
      <Collection />
      <Featured />
    </div>
  );
};

export default App;
