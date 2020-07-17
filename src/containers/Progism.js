import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import {Link} from 'react-router-dom';

class Progism extends Component {
    constructor(props){
        super(props)
        this.lang = props.lang;
    }
    render() {
        if(this.lang === 'hun'){
            return (
                <div className="Progism pl3 overflow-x-hidden">
                    <h2>Programismertetők</h2>
                    <p>32 bites Windows programok (95/98/ME/NT/2000/XP/Win7/Win8/Win10 32 és 64 bit):</p>
                    <ul>
                        <li><a href="ww32.htm">WinWatt 32
                            fűtéstechnikai programcsomag</a>:<ul>
                                <li><a href="ww_epfiz.htm">Épületfizikai számítások</a> </li>
                                <li><a href="ww_teli.htm">Fűtési hőszükséglet</a> </li>
                                <li><a href="ww_nyari.htm">Nyári hőterhelés</a> </li>
                                <li><a href="ww_rad.htm">Radiátor kiválasztás</a> </li>
                                <li><a href="ww_egycs.htm">Egycsöves fűtések </a></li>
                                <li><a href="ww_padlo.htm">Padlófűtések méretezése </a></li>
                                <li><a href="ww_hocs.htm">Hőcserélő méretezés </a></li>
                                <li><a href="ww_hidra.htm">Hálózat hidraulika </a></li>
                                <li><a href="ww_epbd.htm">Épületenergetika</a></li>
                                <li><a href="ww_optimum.htm">Optimum modul</a></li>
                                <li><a href="ww_english.htm">Angol nyelvi modul</a></li>
                                <li><a href="ww_gbxml.htm">gbXML beolvasó modul</a></li>
                                <li><a href="ww_hidroplan.htm">HidroPlan hidraulikai optimalizálás modul</a></li>
                                <li><a href="ww_sun.htm">Sun modul</a></li>
                            </ul>
                        </li>
                        <li><Link to="/public/chmbau32.html">CHM-BAU32 Kéményméretező program</Link></li>
                        <li><Link to="/public/SunArch.html">SunArch Nappálya szerkesztő program</Link></li>
                        <li><Link to="/public/Hocsere.html">Hőcserélő méretező program</Link></li>
                        <li><Link to="/public/Hurkolt.html">Hurkolt hálózat méretező program</Link></li>
                        <li><Link to="/public/IsoBau.html">ISO-bau szigetelés kiválasztó</Link></li>
                        <li><Link to="/public/GasNet32.html">GasNet32 Gázhálózat méretező program</Link></li>
                        <li><Link to="/public/WaterNet32.html">WaterNet32 Vízhálózat méretező program</Link></li>
                        <li><Link to="/public/Legforgalom.html">Légforgalom számító program</Link></li>
                    </ul>
                </div>
            );
        }
        else if(this.lang === 'eng'){
            return (
                <div className="Progism pl3 overflow-x-hidden">
                    <h2>Program reviews</h2>
                    <p>32 bit Windows programs
                    (95/98/ME/NT/2000/XP/Win7/Win8/Win10 32 and 64 bit):</p>
                    <ul>
                        <li><a href="ww32_en.htm">WinWatt 32 heating technology package</a>:
                        <ul>
                            <li><a href="ww_epfiz_en.htm">Building physics calculation</a> </li>
                            <li><a href="ww_teli_en.htm">Winter heat demand calculator</a> </li>
                            <li><a href="ww_nyari_en.htm">Summer heat load</a> </li>
                            <li><a href="ww_rad_en.htm">Radiator selection</a> </li>
                            <li><a href="ww_egycs_en.htm">Single pipe heating </a></li>
                            <li><a href="ww_padlo_en.htm">Floor heating calculator </a></li>
                            <li><a href="ww_hocs_en.htm">Heat exchanger calculator </a></li>
                            <li><a href="ww_hidra_en.htm">Network hydraulics </a></li>
                            <li><a href="ww_epbd_en.htm">Energy performance of building</a></li>
                            <li><a href="ww_optimum_en.htm">Optimum module</a></li>
                            <li><a href="ww_english_en.htm">English language module</a></li>
                            <li><a href="ww_gbxml_en.htm">gbXML reader module</a></li>
                            <li><a href="ww_hidroplan_en.htm">HidroPlan hydraulic optimalization module</a></li>
                            <li><a href="ww_sun_en.htm">Sun module</a></li>
                            </ul>
                        </li>
                        <li><Link to="/public/chmbau32.html">CHM-BAU32 Chimney Calculator</Link></li>
                        <li><Link to="/public/SunArch.html">SunArch sunpath editor program</Link></li>
                        <li><Link to="/public/Hocsere.html">Heat exchanger calculator program</Link></li>
                        <li><Link to="/public/Hurkolt.html">Loop network calculator program</Link></li>
                        <li><Link to="/public/IsoBau.html">ISO-bau insulation selector</Link></li>
                        <li><Link to="/public/GasNet32.html">GasNet32 Gas network scaling program</Link></li>
                        <li><Link to="/public/WaterNet32.html">WaterNet32 Water network scaling program</Link></li>
                        <li><Link to="/public/Legforgalom.html">Air traffic calculator</Link></li>
                    </ul>
               </div>
            );
        }
    }
}

export default Progism;