import './App.scss'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Routes from './Routes'
import author from '../state/author'
import socialProfiles from '../state/socialProfiles'

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
        socialProfiles: socialProfiles
    }

    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <Header author={this.state.author}/>
                    <Main author={this.state.author} socialProfiles={this.state.socialProfiles}/>
                    <Routes />
                </div>
            </BrowserRouter>
        )
    }
}

export default App