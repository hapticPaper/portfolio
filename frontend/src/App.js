import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import { projects } from "../config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App(props) {
  useEffect(() => {
    props.fetchData(projects);
  }, []);

  const { data } = props;
  
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

const mapStateToProps = state => {
  return { data: state.data };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
