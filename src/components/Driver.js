/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Sent1 from '../drivers/Sentinel Protection Installer 7.6.9.exe'
import Sent2 from '../drivers/Sentinel System Driver Installer 7.6.0.exe'
import SSDClean from '../drivers/SSDCleanup11.zip'
import Key from '../drivers/KeyTest.zip'
import Sam from '../drivers/Sam131.exe'

class Driver extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="Egyeb pl3 pr4">
                <Helmet><title>Hardverkulcs meghajtóprogramok</title></Helmet>
                <h2>Hardverkulcs meghajtóprogramok</h2>
                <p>A hardverkulcs kezeléséhez a számítógépen telepíteni kell a kulcs gyártója által készített meghajtóprogramot.</p>
                <p >Futtassa a <a href={Sent1} >Sentinel Protection Installer 7.6.9.exe</a> (7.723.864 bájt méretű) programot, vagy a <a href={Sent2} >Sentinel System Driver Installer 7.6.0.exe</a> (2.945.376 bájt méretű) programot. A telepítő a Microsoft Installert (MSI) használja, ezért annak a gépen telepítve kell lennie. Ha ez hiányozna, a Microsoft letöltő központjából letöltheti. Keressen a letöltő oldalon az MSI kulcsszóra.</p>
                <p >Előbb kell a kulcsdrivert telepíteni, csak azt követően szabad a kulcsot a géphez csatlakoztatni. A hibás sorrendből adódó problémák kiküszöböléséhez, először a Windowsból távolítsuk el a drivert, majd a <a href={SSDClean} >SSDCleanup11.zip</a> fájlban lévő programot futtassuk. Ezt követően kiséreljük meg ismét, most már helyesen a kulcsdriver telepítését.</p>
                <p>A kulcs tesztelhető a <a href={Key} >KeyTest.zip</a> csomagban lévő KeyTest.exe programmal.</p>   
                <p>A kulcsgyártó diagnosztikai programja a Sam131.exe önkicsomagoló programmal feltelepülő <a href={Sam} >Sam1.3.1.exe</a> program. Ez is alkalmas a kulcs tesztelésére.</p>
                <p>Elsősorban olyan esetben, ha a hardverkulcs használatával gondok adódnak, lehetőség van <Link to="/public/registration.html">egy adott gépre regisztrálni</Link> a programot.</p>
            </div >
        );
    }
}

export default Driver;