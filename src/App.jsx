import React from 'react';
import { Route,Switch } from "react-router-dom";
import LoginComponent from './Components/LoginComponent.jsx';
import Home from "./Components/Home.jsx";
import './App.css';


const App = () => (
    <div className='app'>
        <Switch>
         <Route exact path="/" component={LoginComponent} />
         <Route path="/Home" component={Home}/>
         </Switch>
    </div>
)

export default App;