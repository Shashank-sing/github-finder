import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import Navbar from './components/layout/navbar'
import Alert from './components/layout/Alert'
import About from './components/Pages/About'
import User from './components/Users/User'
import Home from './components/Pages/Home'
import NotFound from './components/Pages/NotFound'
import './App.css';

import AlertState from  './context/alert/AlertState'
import GithubState from './context/github/GithubState'

const App = () => {
    return (
        <GithubState>
            <AlertState>
            <Router>
                <div className="App">
                    <Navbar title="Github-Finder" icon="fab fa-github" />
                    <div className="container">
                        <Alert/>
                        <Switch>
                            <Route exact path="/"  component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/user/:login" component={User}/>
                            <Route component={NotFound} />
                        </Switch>

                    </div>
                </div>
            </Router>
            </AlertState>

            
        </GithubState>

    );

}

export default App;
