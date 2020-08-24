
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
                        <li className="grow pb1"><Link to={"/public/cegtortenet.html"}>History(Hun)</Link></li>
                        <li className="grow pb1"><Link to={"/public/progism.html"}>Program reviews</Link></li>
                        <li className="grow pb1"><Link to={"/public/arak.html"}>Prices(Hun)</Link></li>
                        <li className="grow pb1"><Link to={"/public/telepitok.html"}>Installers(Hun)</Link><Link className="ro2" to={"/public/telepRO.html"}>RO</Link></li>
                        <li className="grow pb1"><Link to={"/public/frissitok.html"}>Updates(Hun)</Link><Link className="ro3" to={"/public/frissitRO.html"}>RO</Link></li>
                        <li className="grow pb1"><Link to={"/public/adatbank.html"}>Databases(Hun)</Link></li>
                        <li className="grow pb1"><Link to={"/public/leirasok.html"}>User manuals(Hun)</Link></li>
                        <li className="grow pb1"><Link to={"/public/demok.html"}>Demos(Hun)</Link></li>
                        <li className="grow pb1"><Link to={"/public/egyeb.html"}>Others(Hun)</Link></li>
                            <ul className="pl1 pr1 list ma0 f6 tr">
                            <li ><Link to="/public/oktatas.html">Education(Hun)</Link></li>
                            <li ><Link to="/public/magazin.html">Magazine(Hun)</Link></li>
                            <li ><Link to="/public/minialk.html">Mini applets(Hun)</Link></li>
                            <li ><Link to="/public/videok.html">Videos(Hun)</Link></li>
                            <li ><Link to="/public/forum.html">Forum(Hun)</Link></li>
                            <li ><Link to="/public/GYIK.html">FAQ(Hun)</Link></li>
                            <li ><Link to="/public/driver.html">Drivers(Hun)</Link></li>
                            <li ><Link to="/public/partnerek.html">Our partners(Hun)</Link></li>  
                        </ul>
                    </ul>
                </div>
            );
        }else if(this.lang ==='hun'){
            return(
                <div className="SideComponents">
                    <ul className="tl sidecomponents pl1">
                        <li className="grow pb1"><Link to={"/public/cegtortenet.html"}>Cégtörténet</Link></li>
                        <li className="grow pb1"><Link to={"/public/progism.html"}>Ismertetők</Link></li>
                        <li className="grow pb1"><Link to={"/public/arak.html"}>Árak</Link></li>
                        <li className="grow pb1"><Link to={"/public/telepitok.html"}>Telepítők</Link><Link className="ro1" to={"/public/telepRO.html"}>RO</Link></li>
                        <li className="grow pb1"><Link to={"/public/frissitok.html"}>Frissítések</Link><Link className="ro2" to={"/public/frissitRO.html"}>RO</Link></li>
                        <li className="grow pb1"><Link to={"/public/adatbank.html"}>Adatbázisok</Link></li>
                        <li className="grow pb1"><Link to={"/public/leirasok.html"}>Leírások</Link></li>
                        <li className="grow pb1"><Link to={"/public/demok.html"}>Demok</Link></li>
                        <li className="grow pb1"><Link to={"/public/egyeb.html"}>Egyéb</Link></li>
                        <ul className="pl1 pr1 list ma0 f6 tr">
                            <li ><Link to="/public/oktatas.html">Oktatás</Link></li>
                            <li ><Link to="/public/magazin.html">Magazin</Link></li>
                            <li ><Link to="/public/minialk.html">Minialkalmazások</Link></li>
                            <li ><Link to="/public/videok.html">Videók</Link></li>
                            <li ><Link to="/public/forum.html">Fórum</Link></li>
                            <li ><Link to="/public/GYIK.html">GYIK</Link></li>
                            <li ><Link to="/public/driver.html">Driverek</Link></li>
                            <li ><Link to="/public/partnerek.html">Partnereink</Link></li>
                        </ul>
                    </ul>
                </div>
            );
        }
    }
}

export default SideComponents;