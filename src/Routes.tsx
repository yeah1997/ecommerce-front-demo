import React from 'react'
import {HashRouter, Switch, Route} from "react-router-dom"
import Home from './components/core/Home'
import Shop from './components/core/Shop'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
