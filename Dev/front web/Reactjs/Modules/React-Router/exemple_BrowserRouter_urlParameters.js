import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


let Home = () => ( <div><h2>Home</h2></div> )
let Contact = (props) => ( <div><h2>Contact {props.match.params.id}</h2></div> )
let About = () => ( <div><h2>About</h2></div> )


let App = () => (
  <BrowserRouter>
    <div>
      <nav>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact/John'}>Contact</Link></li>
        <li><Link to={'/about'}>About</Link></li>
      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact/:id' component={Contact} />
          <Route path='/about' component={About} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));