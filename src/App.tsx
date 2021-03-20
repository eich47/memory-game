import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Settings from "./components/settings/Settings";
import AppProvider from "./context/AppContext";
import SettingsProvider from "./context/SettingsContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Main />
        <SettingsProvider>
          <Settings />
        </SettingsProvider>
      </div>
    </AppProvider>
  );
}

export default App;
