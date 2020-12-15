import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CheckList from "./components/Checklist" 
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <CheckList/>
      <Footer/>
    </div>
  );
}

export default App;
