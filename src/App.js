import React from 'react'
import Home from './Components/Routes/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from
  'react-router-dom'
import CV from './Components/Routes/CV';
import NavigationBar from './Components/NavigationBar';
import Contact from './Components/Routes/Contact';

function App() {
  return (
    <div className="App" >
     
      <Router>
     
      <NavigationBar />
            <Switch>
            
              <Route exact path="/" component={Home} />
              <Route path='/home' component={Home} />
             <Route path='/cv' component={CV} />
             <Route path='/contact' component={Contact} />
            </Switch>
            
       
     
          </Router>
     
    </div>
  );
}

export default App;
