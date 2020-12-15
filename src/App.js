import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CheckList from "./components/Checklist" 

function App() {
  return (
    <div>
      <Header />
      <CheckList/>
    </div>
  );
}

export default App;
