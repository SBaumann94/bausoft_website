/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';

import { Helmet } from 'react-helmet'

class Leirasok extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="Epbd pl3 overflow-x-hidden ">
                <Helmet><title>Programleírások</title></Helmet>
                <h2>Programleírások</h2>
                <p><strong>Programleírásaink PDF változata és további segéd anyagok</strong></p>
                <ul>

                    <li><a href='http://www.bausoft.hu/leiras/CHM_BAU32.pdf' >CHM-BAU32 program leírása</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/CHM-BAU_XML_adatfajlok.pdf' >CHM-BAU XML adatfájlok</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/WaterNet.pdf' >WaterNet program leírása</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/WaterNet32.pdf' >WaterNet32 program leírása</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/GasNet.pdf' >GasNet program leírása</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/GasNet32.pdf' >GasNet32 program leírása</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/Legforgalom_szamito_leiras.pdf' >Légforgalom számító program leírás</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/WinWatt.pdf' >WinWatt program </a> teljes leírása</li>
                    <li><a href='http://www.bausoft.hu/leiras/WinWatt_Epuletenergetika.pdf' >WinWatt épületenergetikai kiegészítésről</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/WinWatt_Optimum_modul.pdf' >WinWatt optimum modulról</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/WinWatt_HidroPlan.pdf' >WinWatt HidroPlan modulról</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/WinWatt_SunModul.pdf' >WinWatt Sun modulról</a></li>
                    <li><a target="_blank" href="http://bausoft.hu/leiras/WinWatt_XML_adatfajlok.htm">WinWatt, GasNet és WaterNet XML adatfájlok leírása</a></li>
                    <li className="pb3"><a target="_blank" href="http://bausoft.hu/neer/WinWatt32Project.html">WinWatt ÉMI export XML adatfájl leírása</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/SUNARCH_elmelet_es_alkalmazas.pdf' >SunArch elmélet és alkalmazás</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/SUNARCH_elmelet_es_alkalmazas_2.pdf' >SunArch elmélet és alkalmazás 2. rész</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/Napepiteszet.pdf' >Napépítészet, elmélet és alkalmazás</a>, szerző: Dr. Kuba Gellért</li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/SunArch_Leiras.pdf' >Sunarch program leírása</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/Hocserelo_meretezo_leiras.pdf' >Hőcserélő méretező program</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/Hurkolt_halozat_meretezo_leiras.pdf' >Hurkolt hálózat méretező program</a></li>
                    <li><a href='http://www.bausoft.hu/leiras/Hurkolt_XML_adatfajlok.pdf' >Hurkolt hálózat méretező program XML adatfájlok</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/Csohalozat_veszteseg_szamitasa.pdf' >Hurkolt hálózat hőveszteség számítás elmélet</a></li>
                    <li className="pb3"><a href='http://www.bausoft.hu/leiras/ISO-bau_leiras.pdf' >ISO-bau szigetelés kiválasztó</a></li>
                </ul>
            </div>
        );

    }
}

export default Leirasok;