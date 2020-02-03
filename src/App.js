import React from 'react';
import Axios from 'axios'
import './App.css';
import './foundation.min.css'
import { useSelector, useDispatch } from 'react-redux';
import { comicsAction, charactersAction, creatorsAction, eventsAction } from './actions'
import Index from './components/index'
import ComicsItem from './components/comicsItem'
import Comics from './components/comics'
import CharactersItem from './components/charactersItem'
import Characters from './components/characters'
import CreatorsItem from './components/creatorsItem'
import Creators from './components/creators'
import EventsItem from './components/eventsItem'
import Events from './components/events'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

function App() {
  const comics = useSelector(state => state.comics)
  const characters = useSelector(state => state.characters)
  const creators = useSelector(state => state.creators)
  const events = useSelector(state => state.events)
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  
  if(!comics) {
    Axios.get(`http://gateway.marvel.com/v1/public/comics?${filters.comics ? filters.comics : ""}ts=1&apikey=2fc90cdd040a3c4cc0318977ecab8684&hash=5e3d141ca033881b19d05e43321b8952`)
    .then(res => {
        console.log(res)
        dispatch(comicsAction(res.data.data.results))
    })
    .catch(err => {
      console.log(err)
    })
  }

  if(!characters) {
    Axios.get(`http://gateway.marvel.com/v1/public/characters?${filters.characters ? filters.characters : ""}ts=1&apikey=2fc90cdd040a3c4cc0318977ecab8684&hash=5e3d141ca033881b19d05e43321b8952`)
    .then(res => {
        console.log(res)
        dispatch(charactersAction(res.data.data.results))
    })
    .catch(err => {
      console.log(err)
    })
  }

  if(!creators) {
    Axios.get(`http://gateway.marvel.com/v1/public/creators?${filters.creators ? filters.creators : ""}ts=1&apikey=2fc90cdd040a3c4cc0318977ecab8684&hash=5e3d141ca033881b19d05e43321b8952`)
    .then(res => {
        console.log(res)
        dispatch(creatorsAction(res.data.data.results))
    })
    .catch(err => {
      console.log(err)
    })
  }

  if(!events) {
    Axios.get(`http://gateway.marvel.com/v1/public/events?${filters.events ? filters.eventsy : ""}ts=1&apikey=2fc90cdd040a3c4cc0318977ecab8684&hash=5e3d141ca033881b19d05e43321b8952`)
    .then(res => {
        console.log(res)
        dispatch(eventsAction(res.data.data.results))
    })
    .catch(err => {
      console.log(err)
    })
  } 

  return (
    <Router>
      <Switch>
        <Route path="/events/item" component={EventsItem} />
        <Route path="/events" component={Events} />
        <Route path="/creators/item" component={CreatorsItem} />
        <Route path="/creators" component={Creators} />
        <Route path="/comics/item" component={ComicsItem} />
        <Route path="/comics" component={Comics} />
        <Route path="/characters/item" component={CharactersItem} />
        <Route path="/characters" component={Characters} />      
        <Route path="/" component={Index} />        
      </Switch>
    </Router>
  );
}

export default App;