import React from "react";
import "./App.css";
import Header from "./header/Header";
import Search from "./search/Search";

function App() {
  return (
    <div className="App">
      <Header text="Buscador" />
      <Search />
    </div>
  );
}

export default App;
