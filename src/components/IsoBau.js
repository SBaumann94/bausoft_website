import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import isobau1 from '../screenshots/isobau_1.gif'
import isobau2 from '../screenshots/isobau_2.gif'
import isobau3 from '../screenshots/isobau_3.gif'
import isobau4 from '../screenshots/isobau_4.gif'
import {Helmet} from 'react-helmet'

class IsoBau extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="IsoBau pl3 overflow-x-hidden ">
                    <Helmet><title>ISO-bau szigetelés kiválasztó</title></Helmet>
                    <h2>ISO-bau szigetelés kiválasztó</h2>
                    <p align="left">A program csövek, légcsatornák, tartályok hőszigetelésével kapcsolatos számításokra szolgál.</p>
                    <img className="mw-20"
                        src={isobau1}
                        alt={"Eredmények"} />
                    <p align="left">A számítások kiterjednek az adott vastagságú szigeteléshez tartozó hőátbocsátási tényező, 
                    a kialakuló felületi hőmérséklet, fajlagos hőáram, hőveszteség, kilépő közeghőmérséklet meghatározására, 
                    és ellenőrzi a szigetelést páralecsapódásra, elfagyásra. Nem csak adott szigetelés mellett vizsgálhatók 
                    ezek a paraméterek, hanem egy adott paraméter előírt értékéhez szükséges szigetelési vastagság is 
                    meghatározható a programmal.</p>
                    <img className="mw-50"
                        src={isobau2}
                        alt={"Eredmények"} />
                    <p><img className="mw-30"
                        src={isobau3}
                        alt={"Eredmények"} /></p>
                    <p align="left">Gazdaságossági vizsgálat is végezhető, a beruházási költségekre, és a veszteségekből 
                    származó várható költségekre alapozva.</p>
                    <img className="mw-50"
                        src={isobau4}
                        alt={"Eredmények"} />
                    <p align="left">Az alkalmazható szigetelések adatbázisból választhatók, amit a felhasználó szabadon bővíthet.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="IsoBau pl3 overflow-x-hidden ">
                    <Helmet><title>ISO-bau insulation selector</title></Helmet>
                    <h2>ISO-bau insulation selector</h2>
                    <p align="left">The program is used for calculations of thermal insulation of pipes, ducts and tanks.</p>
                    <img className="mw-20"
                        src={isobau1}
                        alt={"Eredmények"} />
                    <p align="left">The calculations include the determination of the heat
                    transfer coefficient for the given thickness of insulation, the
                    resulting surface temperature, the specific heat flux, the heat loss,
                    the outlet fluid temperature, and the insulation is checked for
                    condensation, freezing. Not only can these parameters be tested with
                    specific insulation,<br />but the insulation thickness required for a given value of a parameter can also be determined by the program.</p>
                    <img className="mw-50"
                        src={isobau2}
                        alt={"Eredmények"} />
                    <p><img className="mw-30"
                        src={isobau3}
                        alt={"Eredmények"} /></p>
                    <p align="left">A feasibility study can also be carried out based on the investment costs and the expected costs of the losses.</p>
                    <img className="mw-50"
                        src={isobau4}
                        alt={"Eredmények"} />
                    <p align="left">Applicable insulation can be selected from a database, which can be freely expanded by the user.</p>
                </div>
            );
        }
    }
}

export default IsoBau;