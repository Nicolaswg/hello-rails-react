import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Greeting from "./Greeting";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<h1>Home page</h1>}></Route>
            <Route path="/greeting" element={<Greeting />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
