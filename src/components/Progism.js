import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import {Link} from 'react-router-dom';

class Progism extends Component {
    render() {
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
                    <li><Link to="/public/chmbau32.html">CHM-BAU32
                        Kéményméretező program</Link></li>
                    <li><a href="SunArch.htm">SunArch Nappálya szerkesztő program</a></li>
                    <li><a href="hocsere.htm">Hőcserélő méretező program</a></li>
                    <li><a href="hurkolt.htm">Hurkolt hálózat méretező program</a></li>
                    <li><a href="isobau.htm">ISO-bau szigetelés kiválasztó</a></li>
                    <li><a href="gasnet32.htm">GasNet32 Gázhálózat méretező program</a></li>
                    <li><a href="waternet32.htm">WaterNet32 Vízhálózat méretező program</a></li>
                    <li><a href="legforgalom.htm">Légforgalom számító program</a></li>
                </ul>
            </div>
        );
    }
}

export default Progism;