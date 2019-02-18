import React from 'react'
import Contact from './Contact'
import Profile from './Profile'
import './Main.scss'
import Skills from './Skills'

export default props =>
    <main className="main">
        <div>
            <Contact />
            <Profile />
        </div>
        <Skills />
    </main>