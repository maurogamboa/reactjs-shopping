import React from "react";
// import "./style.css";
import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ShopItemList from "./components/ShopList";
import About from "./components/About";
import { Provider } from "react-redux";
import store from "./store/store"
import ShoppingCart from "./components/ShoppingCar";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Heading/>
        <NavBar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/" component={ShopItemList} />
        </Switch>
      </Router>
    </Provider>
  );
}
