import React, { Component } from 'react';
import 'tachyons';
import hocs1 from '../screenshots/ww_hocs1.gif';
import hocs2 from '../screenshots/ww_hocs2.gif';
import { Helmet } from 'react-helmet'

class Hocs extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Hocs pl3 overflow-x-hidden ">
                    <Helmet><title>Hőcserélők, keverőszelepek</title></Helmet>
                    <h2>WinWatt hőcserélők, keverőszelepek</h2>
                    <p>A program magát a hőcserélőt illetve a
                    keverőszelepet nem méretezi, csupán a
                    hálózat számítás szempontjából teremti meg
                    a kapcsolatot a primer és szekunder oldal
                    között. Kezelhetők viszont mindkét oldalon a
                    hidraulikai számítás szempontjából fontos
                    nyomásesések és a megadott hőmérsékletek
                    alapján számítódik a primer oldali
                tömegáram.</p>
                    <img className="mw-70"
                        src={hocs1}
                        alt={"Eredmények"} />
                    <p>A tágulási tartályok méretezéséhez a
                    program összegzi a csövek és radiátorok
                    víztartalmát. A program támogatja mind a
                    nyitott, mind a zárt tartályok
                kiválasztását.</p>
                    <img className="mw-70"
                        src={hocs2}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Hocs pl3 overflow-x-hidden ">
                    <Helmet><title>Heat exchangers, mixing valves</title></Helmet>
                    <h2>WinWatt heat exchangers, mixing valves</h2>
                    <p>The program does not scale the heat exchanger or the mixing valve
                    itself, only the network creates the connection between the primary and
                    secondary side. However, they can be handled on both sides based on the
                    pressure drops that are important for the hydraulic calculation and the
                primary side mass flow based on the temperatures specified.</p>
                    <img className="mw-70"
                        src={hocs1}
                        alt={"Eredmények"} />
                    <p>For sizing the expansion vessels, the program summarizes the water
                    content of the pipes and radiators. The program supports selection of
                both open and closed containers.</p>
                    <img className="mw-70"
                        src={hocs2}
                        alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Hocs;