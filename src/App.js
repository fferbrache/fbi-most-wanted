import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Contact from './components/Contact';
import MostWantedPage from './components/MostWantedPage';
import TerrorismPage from './components/TerrorismPage';
import KidnapperPage from './components/KidnapperPage';
import MostWantedCard from './components/MostWantedCard';
import TerroristCard from './components/TerroristCard';
import KidnapperCard from './components/KidnapperCard';
import Tips from './components/Tips';
import Footer from './components/Footer';
import Error from './components/Error';

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
          <Route path="/terrorism" component={TerrorismPage}></Route>
          <Route path="/kidnappings" component={KidnapperPage}></Route>
          <Route path="/tips" component={Tips}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/mostwantedlist/:id" component={MostWantedCard}></Route>
          <Route path="/terrorismlist/:id" component={TerroristCard}></Route>
          <Route path="/missingpersonslist/:id" component={KidnapperCard}></Route>
          <Route component={Error}></Route>
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
