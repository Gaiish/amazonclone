import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Signup from './Signup'

export default ()=>(
  <Switch>
    <Route exact path='/signup' component={Signup} />
  </Switch>
)
