import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const listHun = ['Programismertetők',
    '32 bites Windows programok (95/98/ME/NT/2000/XP/Win7/Win8/Win10 32 és 64 bit):',
    'WinWatt 32 fűtéstechnikai programcsomag', 'Épületfizikai számítások', 'Fűtési hőszükséglet', 'Nyári hőterhelés', 'Radiátor kiválasztás',
    'Egycsöves fűtések', 'Padlófűtések méretezése', 'Hőcserélő méretezés', 'Hálózat hidraulika', 'Épületenergetika',
    'Optimum modul', 'Angol nyelvi modul', 'gbXML beolvasó modul', 'HidroPlan hidraulikai optimalizálás modul',
    'Sun modul', 'CHM-BAU32 Kéményméretező program', 'SunArch Nappálya szerkesztő program', 'Hőcserélő méretező program',
    'Hurkolt hálózat méretező program', 'ISO-bau szigetelés kiválasztó', 'GasNet32 Gázhálózat méretező program',
    'WaterNet32 Vízhálózat méretező program', 'Légforgalom számító program'
];


const listEng = ['Program reviews',
    '32 bit Windows programs (95/98/ME/NT/2000/XP/Win7/Win8/Win10 32 and 64 bit):',
    'WinWatt 32 heating technology package', 'Building physics calculation',
    'Winter heat demand calculator', 'Summer heat load', 'Radiator selection',
    'Single pipe heating', 'Floor heating calculator', 'Heat exchanger calculator',
    'Network hydraulics', 'Energy performance of building', 'Optimum module',
    'English language module', 'gbXML reader module', 'HidroPlan hydraulic optimalization module',
    'Sun module', 'CHM-BAU32 Chimney Calculator', 'SunArch sunpath editor program',
    'Heat exchanger calculator program', 'Loop network calculator program',
    'ISO-bau insulation selector', 'GasNet32 Gas network scaling program',
    'WaterNet32 Water network scaling program', 'Air traffic calculator'
];
let useText = [];

class Progism extends Component {
    constructor(props) {
        super(props)
        this.lang = props.lang;
        useText = (this.lang === 'hun') ? listHun : listEng;
    }
    render() {
        return (
            <div className="Progism pl3 overflow-x-hidden">
                <Helmet><title>{useText[0]}</title></Helmet>
                <h2>{useText[0]}</h2>
                <p>{useText[1]}</p>
                <ul>
                    <li><Link to="/public/Ww32.html">{useText[2]}</Link>
                        <ul>
                            <li><Link to="/public/ww_epfiz.html">{useText[3]}</Link> </li>
                            <li><Link to="/public/ww_teli.html">{useText[4]}</Link> </li>
                            <li><Link to="/public/ww_nyari.html">{useText[5]}</Link> </li>
                            <li><Link to="/public/ww_rad.html">{useText[6]}</Link> </li>
                            <li><Link to="/public/ww_egycs.html">{useText[7]}</Link></li>
                            <li><Link to="/public/ww_padlo.html">{useText[8]}</Link></li>
                            <li><Link to="/public/ww_hocs.html">{useText[9]}</Link></li>
                            <li><Link to="/public/ww_hidra.html">{useText[10]}</Link></li>
                            <li><Link to="/public/ww_epbd.html">{useText[11]}</Link></li>
                            <li><Link to="/public/ww_optimum.html">{useText[12]}</Link></li>
                            <li><Link to="/public/ww_english.html">{useText[13]}</Link></li>
                            <li><Link to="/public/ww_gbxml.html">{useText[14]}</Link></li>
                            <li><Link to="/public/ww_hidroplan.html">{useText[15]}</Link></li>
                            <li><Link to="/public/ww_sun.html">{useText[16]}</Link></li>
                        </ul></li>
                    <li><Link to="/public/Chmbau32.html">{useText[17]}</Link></li>
                    <li><Link to="/public/SunArch.html">{useText[18]}</Link></li>
                    <li><Link to="/public/Hocsere.html">{useText[19]}</Link></li>
                    <li><Link to="/public/Hurkolt.html">{useText[20]}</Link></li>
                    <li><Link to="/public/IsoBau.html">{useText[21]}</Link></li>
                    <li><Link to="/public/GasNet32.html">{useText[22]}</Link></li>
                    <li><Link to="/public/WaterNet32.html">{useText[23]}</Link></li>
                    <li><Link to="/public/Legforgalom.html">{useText[24]}</Link></li></ul>
                
            </div>
        );
    }
}


export default Progism;