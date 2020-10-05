// -installer react-router : $ npm install react-router


//----------------- main.js -----------------

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>Home</li>
               <li>About</li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}
export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home</h1>
         </div>
      )
   }
}
export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}
export default About;



ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
      </Route>
   </Router>
), document.getElementById('app'))