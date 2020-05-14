import React from "react";
import ReclamacoesFeed from "./components/pagina-principal/reclamacoesFeed.js";
import "./App.css";
import NavBar from "./components/navbar/navbar.js";
import Sobre from "./components/sobre/sobre.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Switch>
          <Route path="/sobre" component={Sobre} />
          <Route path="/" component={ReclamacoesFeed} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
