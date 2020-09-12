import React from "react";
import CityList from "./city";
import StoreProvider from "./context/context";
import "./App.css";
import Search from "./search";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <CityList />
        </header>
      </div>
    </StoreProvider>
  );
};

export default App;
