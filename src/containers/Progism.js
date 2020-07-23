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
                        <li><Link to="/public/Ww32.html">WinWatt 32
                            fűtéstechnikai programcsomag</Link>:<ul>
                                <li><Link to="/public/ww_epfiz.html">Épületfizikai számítások</Link> </li>
                                <li><Link to="/public/ww_teli.html">Fűtési hőszükséglet</Link> </li>
                                <li><Link to="/public/ww_nyari.html">Nyári hőterhelés</Link> </li>
                                <li><Link to="/public/ww_rad.html">Radiátor kiválasztás</Link> </li>
                                <li><Link to="/public/ww_egycs.html">Egycsöves fűtések </Link></li>
                                <li><Link to="/public/ww_padlo.html">Padlófűtések méretezése </Link></li>
                                <li><Link to="/public/ww_hocs.html">Hőcserélő méretezés </Link></li>
                                <li><Link to="/public/ww_hidra.html">Hálózat hidraulika </Link></li>
                                <li><Link to="/public/ww_epbd.html">Épületenergetika</Link></li>
                                <li><Link to="/public/ww_optimum.html">Optimum modul</Link></li>
                                <li><Link to="/public/ww_english.html">Angol nyelvi modul</Link></li>
                                <li><Link to="/public/ww_gbxml.html">gbXML beolvasó modul</Link></li>
                                <li><Link to="/public/ww_hidroplan.html">HidroPlan hidraulikai optimalizálás modul</Link></li>
                                <li><Link to="/public/ww_sun.html">Sun modul</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/public/Chmbau32.html">CHM-BAU32 Kéményméretező program</Link></li>
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
                        <li><Link to="/public/Ww32.html">WinWatt 32 heating technology package</Link>:
                        <ul>
                            <li><Link to="/public/ww_epfiz.html">Building physics calculation</Link> </li>
                            <li><Link to="/public/ww_teli.html">Winter heat demand calculator</Link> </li>
                            <li><Link to="/public/ww_nyari.html">Summer heat load</Link> </li>
                            <li><Link to="/public/ww_rad.html">Radiator selection</Link> </li>
                            <li><Link to="/public/ww_egycs.html">Single pipe heating </Link></li>
                            <li><Link to="/public/ww_padlo.html">Floor heating calculator </Link></li>
                            <li><Link to="/public/ww_hocs.html">Heat exchanger calculator </Link></li>
                            <li><Link to="/public/ww_hidra.html">Network hydraulics </Link></li>
                            <li><Link to="/public/ww_epbd.html">Energy performance of building</Link></li>
                            <li><Link to="/public/ww_optimum.html">Optimum module</Link></li>
                            <li><Link to="/public/ww_english.html">English language module</Link></li>
                            <li><Link to="/public/ww_gbxml.html">gbXML reader module</Link></li>
                            <li><Link to="/public/ww_hidroplan.html">HidroPlan hydraulic optimalization module</Link></li>
                            <li><Link to="/public/ww_sun.html">Sun module</Link></li>
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