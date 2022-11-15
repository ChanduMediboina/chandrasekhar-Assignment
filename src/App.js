import {Route, Switch} from 'react-router-dom'

import YourTab from './components/YourTab'

import AllTab from './components/AllTab'

import BlockedTab from './components/BlockedTab'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={AllTab} />
    <Route exact path="/your" component={YourTab} />
    <Route exact path="/blocked" component={BlockedTab} />
    <NotFound component={NotFound} />
  </Switch>
)

export default App
