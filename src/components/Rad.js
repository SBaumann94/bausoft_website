import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import rad1 from '../screenshots/ww_rad1.gif';
import rad2 from '../screenshots/ww_rad2.gif';
import { Helmet } from 'react-helmet'

class Rad extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Rad pl3 overflow-x-hidden ">
                    <Helmet><title>Radiátor kiválasztás</title></Helmet>
                    <h2>WinWatt radiátor kiválasztás</h2>
                    <p>A <Link to="/public/ww_teli.html">téli
                    hőszükséglet-számítással</Link> számított
                    hőigény alapján történik a radiátor
                    kiválasztás. A program a kiválasztott
                    radiátor típusra, a lehetséges építési
                    magasságok és kivitelek szerinti táblázatban
                    adja meg az aktuális hőigényhez legjobban
                    illeszkedő méretet.</p>
                    <img className="mw-70"
                        src={rad1}
                        alt={"Eredmények"} />
                    <p>A kiválasztott radiátor viselkedése
                    egyszerűen ellenőrizhető különböző
                    tömegáramok, illetve előremenő és
                    visszatérő vízhőmérsékletek mellett is.</p>
                    <img className="mw-70"
                        src={rad2}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Rad pl3 overflow-x-hidden ">
                    <Helmet><title>Radiator selector</title></Helmet>
                    <h2>WinWatt radiator selector</h2>
                    <p>The radiator is selected based on the heat demand calculated by the
                    <Link to="/public/ww_teli.html">winter heat demand calculation</Link>
                    The program gives the size that best fits the current heat demand in
                    the table for the selected radiator type, in the table of possible
                    construction heights and versions.</p>
                    <img className="mw-70"
                        src={rad1}
                        alt={"Eredmények"} />
                    <p>The behavior of the selected radiator can be easily controlled at different
                    mass flows, as well as flow and return water temperatures.</p>
                    <img className="mw-70"
                        src={rad2}
                        alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Rad;