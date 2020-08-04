
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import {Link} from 'react-router-dom';
import './SideComponents.css';

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
                        <li className="grow"><Link to={""}>Installers(Hun)</Link></li>
                        <li className="grow"><Link to={""}>Updates(Hun)</Link></li>
                        <li className="grow"><Link to={""}>Databases(Hun)</Link></li>
                        <li className="grow"><Link to={""}>User manuals(Hun)</Link></li>
                        <li className="grow"><Link to={""}>Demos(Hun)</Link></li>
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
                        <li className="grow"><Link to={""}>Telepítők</Link></li>
                        <li className="grow"><Link to={""}>Frissítések</Link></li>
                        <li className="grow"><Link to={""}>Adatbázisok</Link></li>
                        <li className="grow"><Link to={""}>Leírások</Link></li>
                        <li className="grow"><Link to={""}>Demok</Link></li>
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