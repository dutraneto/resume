import './App.scss'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Routes from './Routes'
import author from '../state/author'
import socialProfiles from '../state/socialProfiles'
import paths from '../state/paths'
import skillSets from '../state/skillSets'

class App extends React.Component {
    static defaultProps = {
        author: author,
        socialProfiles: socialProfiles,
        paths: paths,
        skillSets: skillSets,
    }

    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <Header author={author}
                            paths={paths}
                    />
                    <Main author={author}
                          socialProfiles={socialProfiles}
                    />
                    <Routes/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App