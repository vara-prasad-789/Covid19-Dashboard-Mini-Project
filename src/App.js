import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import StatePage from './components/StatePage'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StatePage} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
