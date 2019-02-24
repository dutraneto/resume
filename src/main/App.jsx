import './App.scss'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Routes from './Routes'
import author from '../state/author'
import socialProfiles from '../state/socialProfiles'
import paths from '../state/paths'

// export default props =>
//     <BrowserRouter>
//         <div className="content">
//             <Header name="josé dutra" position="front-end web developer"/>
//             <Main />
//             <Routes />
//             {/* <Experience /> */}
//         </div>
//     </BrowserRouter>

class App extends React.Component {
    state = {
        author: author,
        socialProfiles: socialProfiles,
        paths: paths
    }

    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <Header author={this.state.author}
                            paths={this.state.paths}
                    />
                    <Main author={this.state.author}
                          socialProfiles={this.state.socialProfiles}
                    />
                    <Routes/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App