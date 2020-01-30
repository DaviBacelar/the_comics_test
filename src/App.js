import React from 'react';
import Axios from 'axios'
import './App.css';
import './foundation.min.css'
import { useSelector, useDispatch } from 'react-redux';
import { dataAction } from './actions'
import Index from './components/index'
import Item from './components/item'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

function App() {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch();
  
  if(!data) {
    Axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=2fc90cdd040a3c4cc0318977ecab8684&hash=5e3d141ca033881b19d05e43321b8952")
    .then(res => {
        console.log(res)
        dispatch(dataAction(res.data.data.results))
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Router>
      <Switch>
        <Route path="/item" component={Item} /> 
        <Route path="/" component={Index} />        
      </Switch>
    </Router>
  );
}

export default App;