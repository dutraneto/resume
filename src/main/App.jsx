import './App.scss'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Experience from '../components/Experience'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="content">
            <Header name="josé dutra" position="front-end web developer"/>
            <Main />
            <Routes />
            {/* <Experience /> */}
        </div>
    </BrowserRouter>