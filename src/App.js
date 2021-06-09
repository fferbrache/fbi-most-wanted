import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Contact from './components/Contact';
import MostWantedPage from './components/MostWantedPage';
import FugitiveCard from './components/FugitiveCard';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <NavigationBar />
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/mostwanted" component={MostWantedPage}></Route>
          <Route path="/tips" component={Tips}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/mostwantedlist/:id" component={FugitiveCard}></Route>
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
