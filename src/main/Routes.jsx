import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import App from './App'

export default props =>
    <Switch>
        <Route exact path="/" component={App}/>
        <Redirect from="*" to="/"></Redirect>
    </Switch>


