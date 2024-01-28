import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponents } from "./components";
import { Home, Success } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponents />
        <main>
          <Routes>
            <Route path="/" component={Home} exact />
            <Route path="/success" component={Success} exact />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
