
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home";
import { CardsMarket } from "./CardsMarket";
import { Layout } from "./components/Layout";
import { NavigationBar } from './components/NavigationBar';
import { CreateMarket} from "./CreateMarket";
import {SavedMarket} from "./SavedMarket";
import {Dashboard} from "./Dashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/CardsMarket" component={CardsMarket} />
              <Route path="/CreateMarket" component={CreateMarket} />
              <Route path="/SavedMarket" component={SavedMarket} />
              <Route path="/Dashboard" component={Dashboard} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
