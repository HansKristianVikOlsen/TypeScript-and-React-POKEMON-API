import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonSearch from "./components/PokemonSearch";

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch testTing="this is a test" />
    </div>
  );
};

export default App;
