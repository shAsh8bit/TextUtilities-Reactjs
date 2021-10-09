import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
// import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const darkMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <><Router>
      <Navbar
        logo="Text-Utils"
        about="AboutUs"
        mode={mode}
        darkMode={darkMode}
      />
      {/* <Alert Alert="This is alert" /> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
        <Textform mode={mode} />
        </Route>
      </Switch>
      </Router>
     
    </>
  );
}

export default App;
