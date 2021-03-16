import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
