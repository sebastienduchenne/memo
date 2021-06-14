`
-installer react-router : $ npm install react-router

*** API

-Hooks
   useHistory     : accéder à l'historique
   useLocation    : retourne la location
   useParams      : retourne un objet représentant les paramètres d'une URL
   useRouteMatch  : tenter de faire correspondre l'URL actuelle de la même manière qu'un <Route> le ferait
<BrowserRouter>   : un <Router> qui utilise l'historique HTML5
<HashRouter>      : un <Router> qui utilise le hash de l'URL
<Link>            : déclarer un lien
<NavLink>         : un <Link> qui contient un attribut Style
<Prompt>
<MemoryRouter>    : un <Router> qui garde l'historique de l'URL en mémoire
<Redirect>        : rediriger vers une location
<Route>           : déclarer une route
<Router>          : définir un bout d'appli concerné par le routage
<StaticRouter>    : un <Router> dont la location est statique
<Switch>          : rend dans la 1ère route qui correspond à l'URL
generatePath()    : créer un chemin pour une route
history           : objet qui représente un historique de navigation
location          : objet qui représente un "lieu"
match             : objet qui contient des informations sur la correspondance entre une URL et une <Route path>
matchPath
withRouter        : HOC


----------------- main.js -----------------
`

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