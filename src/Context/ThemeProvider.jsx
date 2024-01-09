import React, { useState } from "react";
import theme from "./theme";

const ThemeProvider = ({children}) => {
  const [background, setBackGround] = useState(null);

  return (
    <theme.Provider value={{ background, setBackGround }}>
      {children}
    </theme.Provider>
  );
};

export default ThemeProvider;
