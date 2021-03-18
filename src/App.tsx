import React from "react";
import "./App.css";
import CardList from "./components/cardsList/CardList";
import Header from "./components/header/Header";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <CardList />
      </div>
    </AppProvider>
  );
}

export default App;
