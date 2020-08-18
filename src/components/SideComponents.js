
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';

class SideComponents extends Component {
    constructor(props){
        super(props);
        this.lang= props.language
    }
    render() {
        if(this.lang ==='eng'){
            return(
                <div className="SideComponents">
                    <ul className="tl sidecomponents pl1">
                        <li className="grow"><Link to={"/public/cegtortenet.html"}>History(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/progism.html"}>Program reviews</Link></li>
                        <li className="grow"><Link to={"/public/arak.html"}>Prices(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/telepitok.html"}>Installers(Hun)</Link><Link className="ro2" to={"/public/telepRO.html"}>RO</Link></li>
                        <li className="grow"><Link to={"/public/frissitok.html"}>Updates(Hun)</Link><Link className="ro3" to={"/public/frissitRO.html"}>RO</Link></li>
                        <li className="grow"><Link to={"/public/adatbank.html"}>Databases(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/leirasok.html"}>User manuals(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/demok.html"}>Demos(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/egyeb.html"}>Others(Hun)</Link></li>
                            <ul className="pl1 pr1 list ma0 f6 tr">
                            <li className="grow"><a href="/public/oktatas.html">Education(Hun)</a></li>
                            <li className="grow"><a href="/public/magazin.html">Magazine(Hun)</a></li>
                            <li className="grow"><a href="/public/minialk.html">Mini applets(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Videos(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Forum(Hun)</a></li>
                            <li className="grow"><a href="/public/GYIK.html">FAQ(Hun)</a></li>
                            <li className="grow"><a href="/public/driver.html">Drivers(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Our partners(Hun)</a></li>  
                        </ul>
                    </ul>
                </div>
            );
        }else if(this.lang ==='hun'){
            return(
                <div className="SideComponents">
                    <ul className="tl sidecomponents pl1">
                        <li className="grow"><Link to={"/public/cegtortenet.html"}>Cégtörténet</Link></li>
                        <li className="grow"><Link to={"/public/progism.html"}>Ismertetők</Link></li>
                        <li className="grow"><Link to={"/public/arak.html"}>Árak</Link></li>
                        <li className="grow"><Link to={"/public/telepitok.html"}>Telepítők</Link><Link className="ro1" to={"/public/telepRO.html"}>RO</Link></li>
                        <li className="grow"><Link to={"/public/frissitok.html"}>Frissítések</Link><Link className="ro2" to={"/public/frissitRO.html"}>RO</Link></li>
                        <li className="grow"><Link to={"/public/adatbank.html"}>Adatbázisok</Link></li>
                        <li className="grow"><Link to={"/public/leirasok.html"}>Leírások</Link></li>
                        <li className="grow"><Link to={"/public/demok.html"}>Demok</Link></li>
                        <li className="grow"><Link to={"/public/egyeb.html"}>Egyéb</Link></li>
                        <ul className="pl1 pr1 list ma0 f6 tr">
                            <li className="grow"><a href="/public/oktatas.html">Oktatás</a></li>
                            <li className="grow"><a href="/public/magazin.html">Magazin</a></li>
                            <li className="grow"><a href="/public/minialk.html">Minialkalmazások</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Videók</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Fórum</a></li>
                            <li className="grow"><a href="/public/GYIK.html">GYIK</a></li>
                            <li className="grow"><a href="/public/driver.html">Driverek</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Partnereink</a></li>
                        </ul>
                    </ul>
                </div>
            );
        }
    }
}

export default SideComponents;