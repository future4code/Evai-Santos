import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react"
import theme from "./constants/theme";
import Router from "./routes/Router"


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Router />
    </div>
    </ThemeProvider >
  );
}

export default App
