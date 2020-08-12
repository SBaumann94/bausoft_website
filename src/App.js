/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'tachyons';

import Sidebar from './containers/Sidebar';
import HomePageEn from './containers/HomepageEn';
import HomePage from './containers/Homepage';
import Cegtortenet from './components/Cegtortenet';

import Progism from './containers/Progism';
import ChmBau32 from './components/Chm-bau32';
import SunArch from './components/SunArch';
import SunArch1 from './components/SunArch1';
import SunArch2 from './components/SunArch2';
import SunArch3 from './components/SunArch3';
import Hocsere from './components/Hocsere';
import Hurkolt from './components/Hurkolt';
import IsoBau from './components/IsoBau';
import Gasnet32 from './components/GasNet32';
import WaterNet32 from './components/WaterNet32';
import Legforgalom from './components/Legforgalom';
import WW32 from './components/Ww32';
import WW32_sub from './containers/Ww32_sub';
import Arak from './components/Arak'
import Leirasok from './components/Leirasok';
import Demok from './components/Demok';
import Telepitok from './components/Telepitok';
import TelepRO from './components/TelepRo';


let lang = document.documentElement.lang

class App extends Component {
    render() {
        return (
            <Router>
                <Sidebar >
                    <Route exact={true} path="/" component={this.Home} />
                    <Route path='/public/cegtortenet.html' component={() => (<Cegtortenet lang={lang}/>)} />
                    <Route exact ={true} path='/public/Ww32.html' component={() => (<WW32 lang={lang} />)} />
                    <Route path='/public/arak.html' component={() => (<Arak lang={lang}/>)} />
                    <Route path='/public/telepitok.html' component={() => (<Telepitok lang={lang}/>)} />
                    <Route path='/public/telepRo.html' component={() => (<TelepRO lang={lang}/>)} />
                    <Route path='/public/leirasok.html' component={() => (<Leirasok lang={lang}/>)} />
                    <Route path='/public/demok.html' component={() => (<Demok lang={lang}/>)} />

                    <Route path='/public/ww_epfiz.html' component={() => (<WW32_sub sub="epfiz" lang={lang} />)} />
                    <Route path='/public/ww_teli.html' component={() => (<WW32_sub sub="teli" lang={lang} />)} />
                    <Route path='/public/ww_nyari.html' component={() => (<WW32_sub sub="nyari" lang={lang} />)} />
                    <Route path='/public/ww_rad.html' component={() => (<WW32_sub sub="rad" lang={lang} />)} />
                    <Route path='/public/ww_egycs.html' component={() => (<WW32_sub sub="egycs" lang={lang} />)} />
                    <Route path='/public/ww_padlo.html' component={() => (<WW32_sub sub="padlo" lang={lang} />)} />
                    <Route path='/public/ww_hocs.html' component={() => (<WW32_sub sub="hocs" lang={lang} />)} />
                    <Route path='/public/ww_hidra.html' component={() => (<WW32_sub sub="hidra" lang={lang} />)} />
                    <Route path='/public/ww_epbd.html' component={() => (<WW32_sub sub="epbd" lang={lang} />)} />
                    <Route path='/public/ww_optimum.html' component={() => (<WW32_sub sub="optimum" lang={lang} />)} />
                    <Route path='/public/ww_english.html' component={() => (<WW32_sub sub="english" lang={lang} />)} />
                    <Route path='/public/ww_gbxml.html' component={() => (<WW32_sub sub="gbxml" lang={lang} />)} />
                    <Route path='/public/ww_hidroplan.html' component={() => (<WW32_sub sub="hidroplan" lang={lang} />)} />
                    <Route path='/public/ww_sun.html' component={() => (<WW32_sub sub="sun" lang={lang} />)} />
                    
                    <Route path='/public/progism.html' component={() => (<Progism lang={lang} />)} />
                    <Route path='/public/Chmbau32.html' component={() => (<ChmBau32 lang={lang}/>)} />
                    <Route path='/public/SunArch.html' component={() => (<SunArch lang={lang} />)} />
                    <Route path='/public/SunArch1.html' component={() => (<SunArch1 lang={lang} />)} />
                    <Route path='/public/SunArch2.html' component={() => (<SunArch2 lang={lang} />)} />
                    <Route path='/public/SunArch3.html' component={() => (<SunArch3 lang={lang} />)} />
                    <Route path='/public/Hocsere.html' component={() => (<Hocsere lang={lang} />)} />
                    <Route path='/public/Hurkolt.html' component={() => (<Hurkolt lang={lang} />)} />
                    <Route path='/public/IsoBau.html' component={() => (<IsoBau lang={lang} />)} />
                    <Route path='/public/GasNet32.html' component={() => (<Gasnet32 lang={lang} />)} />
                    <Route path='/public/WaterNet32.html' component={() => (<WaterNet32 lang={lang} />)} />
                    <Route path='/public/Legforgalom.html' component={() => (<Legforgalom lang={lang} />)} />
                </Sidebar>
            </Router>
        )
    }

    Home() {
        lang = document.documentElement.lang
        return (lang === 'hun') ? <HomePage /> : <HomePageEn />;
    }
}

export default App;
