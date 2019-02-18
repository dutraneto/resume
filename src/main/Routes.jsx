import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Experience from '../components/Experience'
import Education from '../components/Education'

export default props =>
    <Switch>
        <Route exact path="/" component={Experience}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/education" component={Education}/>
        <Redirect from="*" to="/"></Redirect>
    </Switch>


