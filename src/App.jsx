import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ThemeProvider from "./Context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Body />
    </ThemeProvider>
  );
};

export default App;
