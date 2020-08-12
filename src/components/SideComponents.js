
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
                        <li className="grow"><Link to={""}>Updates(Hun)</Link><Link className="ro3" to={""}>RO</Link></li>
                        <li className="grow"><Link to={""}>Updates(Hun)</Link></li>
                        <li className="grow"><Link to={""}>Databases(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/leirasok.html"}>User manuals(Hun)</Link></li>
                        <li className="grow"><Link to={"/public/demok.html"}>Demos(Hun)</Link></li>
                        <li className="grow"><Link to={""}>Others</Link></li>
                            <ul className="pl1 pr1 list ma0 f6 tr">
                            <li className="grow"><a href="http:\\bausoft.hu">Education(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Magazine(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Mini applets(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Videos(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Forum(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">FAQ(Hun)</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Drivers(Hun)</a></li>
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
                        <li className="grow"><Link to={""}>Frissítések</Link><Link className="ro2" to={""}>RO</Link></li>
                        <li className="grow"><Link to={""}>Adatbázisok</Link></li>
                        <li className="grow"><Link to={"/public/leirasok.html"}>Leírások</Link></li>
                        <li className="grow"><Link to={"/public/demok.html"}>Demok</Link></li>
                        <li className="grow"><Link to={""}>Egyéb</Link></li>
                        <ul className="pl1 pr1 list ma0 f6 tr">
                            <li className="grow"><a href="http:\\bausoft.hu">Oktatás</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Magazin</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Minialkalmazások</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Videók</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Fórum</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">GYIK</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Driverek</a></li>
                            <li className="grow"><a href="http:\\bausoft.hu">Partnereink</a></li>
                        </ul>
                    </ul>
                </div>
            );
        }
    }
}

export default SideComponents;