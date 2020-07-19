import React from "react";
import Header from "./Header";
import "./App.css";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  var mi_obj = {
    id: "hello",
    id: "Chaanged",
  };
  console.log(mi_obj.id);
  //This proves that if you use a property with same name the last one overides
  //the first One
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            {/*pens if hoome is onvoked or unknown thing url*/}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
