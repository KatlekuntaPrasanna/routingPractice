import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
