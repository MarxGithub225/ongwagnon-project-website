import React, { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./modules/Home";
import Aboutus from "./modules/Aboutus";
import Aboutvolonteers from "./modules/Aboutvolonteers";
import Aboutpartners from "./modules/Aboutpartners";
import Blog from "./modules/Blog";
import Events from "./modules/Events";
import Contact from "./modules/Contact";
import DetailsBlog from "./modules/DetailsBlog";
import DetailsEvent from "./modules/DetailsEvent";
import './App.css';

import {getNews} from './modules/Blog/actions';
import {getEvents} from './modules/Events/actions';

import { useDispatch } from "react-redux";
import 'moment/locale/fr.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Yesseh from "./modules/Yesseh";
import EcoSouklou from "./modules/EcoSouklou";
import Griovert from "./modules/GriotVert";
function App() {

  

  const dispatch = useDispatch();


  const fetchNews = useCallback(() => {
    dispatch(getNews());
  }, []);

  const fetchEvents = useCallback(() => {
    dispatch(getEvents());
  }, []);

  
  useEffect(() => {

    window.scroll(0,0);
    
    fetchNews();
    fetchEvents();

  }, [fetchNews, fetchEvents]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about-us' component={Aboutus}></Route>
        <Route path='/become-member' component={Aboutvolonteers}></Route>
        <Route path='/about-partners' component={Aboutpartners}></Route>
        <Route path='/blog' component={Blog}></Route>
        <Route path='/events' component={Events}></Route>
        <Route path='/contacts' component={Contact}></Route>
        <Route path='/details-blog' component={DetailsBlog}></Route>
        <Route path='/details-event' component={DetailsEvent}></Route>
        <Route path='/ohho-yesseh' component={Yesseh}></Route>
        <Route path='/eco-souklou' component={EcoSouklou}></Route>
        <Route path='/grio-vert' component={Griovert}></Route>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
