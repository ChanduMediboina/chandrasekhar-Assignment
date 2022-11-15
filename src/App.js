import {Route, BrowserRouter, Switch} from 'react-router-dom'

import YourTab from './components/YourTab'

import AllTab from './components/AllTab'

import BlockedTab from './components/BlockedTab'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AllTab} />
      <Route exact path="/your" component={YourTab} />
      <Route exact path="/blocked" component={BlockedTab} />
      <NotFound component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
