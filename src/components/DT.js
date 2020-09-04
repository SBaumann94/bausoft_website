/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';

class DT extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="DT pl3 pr4">
                <Helmet><title>Adatbázis javító segédprogram</title></Helmet>
                <h2>Adatbázis javító segédprogram</h2>
                <p >Programjaink Borland Paradox adatbázisokat használnak a projektek tárolására. Hibás programleállás előidézheti az éppen nyitott adatbázis sérülését, ezt követően részben, vagy teljesen használhatatlanná válhat a projekt. A sérült projekt kijavításához alkalmazható a Borland által készített segédprogram, amit a mellékelt <a className="b" href='http://www.bausoft.hu/dtutil32.zip' >dtutil32.zip</a> fájl tartalmaz. Sérült adatbázis javításához a következő lépéseket kell elvégeznünk.</p>
                <ol>
                    <li>Csomagoljuk ki a segédprogramot.</li>
                    <li>Másoljuk a sérült projekt három fájlját (DB, MB és PX kiterjesztésűek) abba a könyvtárba, ahová kicsomagoltuk a segédprogramot.</li>
                    <li>Indítsuk el a <span className="b">DTUTIL32.EXE</span> programot.</li>
                    <li>Nyomjuk meg a <i>By Directory...</i> nyomógombot, válasszuk ki a sérült projektet, majd nyomjuk meg az OK gombot.</li>
                    <li>Nyomjuk meg a <i>Rebuild</i> gombot. Ha a folyamat végén a <i>Message</i> alatt a <i>Rebuild was successful.</i> üzenetet kapjuk, sikeres a helyreállítás.</li>
                    <li>Próbáljuk ki a programból is, hogy valóban sikeres lett-e a helyreállítás.</li>
                </ol>
            </div >
        );
    }
}

export default DT;