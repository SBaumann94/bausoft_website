import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'tachyons';

import Sidebar from './containers/Sidebar';
import HomePageEn from './containers/HomepageEn';
import HomePage from './containers/Homepage';
import Cegtortenet from './components/Cegtortenet';
import Progism from './components/Progism';
import ChmBau32 from './components/Chm-bau32';


let lang = document.documentElement.lang

class App extends Component {
    constructor(props){
        super(props)
        console.log(lang);
    }
    render() {
        return (
            <Router>
                <Sidebar >
                    <Route exact={true} path="/" component={this.Home} />
                    <Route path='/public/cegtortenet.html' component={() =>(<Cegtortenet/>)} />
                    <Route path='/public/ww32.html' component={() =>(<Cegtortenet/>)}  />
                    <Route path='/public/progism.html' component={() =>(<Progism/>)}  />
                    <Route path='/public/chmbau32.html' component={() =>(<ChmBau32/>)}  />
                </Sidebar>
            </Router>
        )
    }

    Home(){
        lang = document.documentElement.lang
        return (lang === 'hun')? <HomePage/> : <HomePageEn/>;
    }
}

export default App;
    