import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TechnicalSkills from '../components/TechnicalSkills'
import Summary from '../components/Summary';

export default props =>
    <Switch>
        <Route exact path="/" component={Experience}/>
        <Route path="/profile" component={Summary}/>
        <Route path="/technical-skills" component={TechnicalSkills}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/education" component={Education}/>
        <Redirect from="*" to="/"></Redirect>
    </Switch>


