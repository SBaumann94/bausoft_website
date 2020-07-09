import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'tachyons';

import Sidebar from './containers/Sidebar';
import HomePage from './Homepage';
import Cegtortenet from './components/Cegtortenet';

class App extends Component {
    render() {
        return (
            <Router>
                <Sidebar>
                    <Route exact={true} path="/" component={Home} />
                    <Route path='/cegtortenet.html' component={Cegtort} />
                    {/* <HomePage/> */}
                </Sidebar>
            </Router>
        )
    }
}

const Home = () =>(
    <HomePage/>
)

const Cegtort = () =>(
    <Cegtortenet/>
)

const FindPage =({match}) =>(
    <div>
        {match.params.gistId}
    </div>
)


export default App;
    