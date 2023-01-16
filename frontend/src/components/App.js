import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchData } from "./actions";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={() => <Portfolio data={data} />} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
