import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components.js/Header';
import Home from './Components.js/Home';
import Favourie from './Components.js/Favourie';
import { Container } from 'react-bootstrap';


 class App extends Component {
  render() {
    return (
      <>


<Router>
  <Header/>
  <Switch>

    <Route exact path= '/'>
      <Container>
      <Home/>
      </Container>
     
    </Route>

    <Route exact path = '/Favourie'>
      <Container>
      <Favourie/>
      </Container>
      
    </Route>

  </Switch>
</Router>



























        {/* <Router>
          <Header/>
          <Switch>

           <Route exact path ='/'>
             <Container>
             <Home/>
             </Container>
             
           </Route>

           <Route exact path ='/Favourie'>
            <Favourie/>
           </Route>

          </Switch>
        </Router> */}
      </>
    )
  }
}

export default App
