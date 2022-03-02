import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./assets/scss/style.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main"></main>
      <Footer />
    </div>
  );
}

export default App;
