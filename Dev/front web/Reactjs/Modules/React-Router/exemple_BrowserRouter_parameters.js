import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Demo />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Demo() {
  let query = useQuery();
  let queryParam = "Hello"
  let urlParam = "John"

  return (
    <div>
      <ul>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={`/query?name=${queryParam}`}>Query param</Link> </li>
        <li> <Link to={`/contact/${urlParam}`}>Url Param</Link> </li>
        <li> <Link to={'/about'}>About</Link> </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact/:id' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/query'>
          <QueryParam name={query.get("name")}/>
        </Route>
      </Switch>
    </div>
  );
}


let Home = () => ( <div><h2>Home</h2></div> )
let Contact = (props) => ( <div><h2>Url param : {props.match.params.id}</h2></div> )
let About = () => ( <div><h2>About</h2></div> )


function QueryParam({ name }) {
  return (
    <div>
      {name ? (
        <h2> Query param : {name} </h2>
      ) : (
        <h2>There is no name in the query string</h2>
      )}
    </div>
  );
}


ReactDOM.render( <App />, document.getElementById('root') );