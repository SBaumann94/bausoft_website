import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import Chm_BAU32 from '../leiras/CHM_BAU32.pdf'
import Chm_BAU_XML from '../leiras/CHM-BAU_XML_adatfajlok.pdf'
import WaterNet from '../leiras/WaterNet.pdf'
import Water32 from '../leiras/WaterNet32.pdf'
import GasNet from '../leiras/GasNet.pdf'
import Gas32 from '../leiras/GasNet32.pdf'
import Legforg from '../leiras/Legforgalom_szamito_leiras.pdf'
import Ww from '../leiras/WinWatt.pdf'
import WW_epulet from '../leiras/WinWatt_Epuletenergetika.pdf'
import WW_optimum from '../leiras/WinWatt_Optimum_modul.pdf'
import WW_hidro from '../leiras/WinWatt_HidroPlan.pdf'
import WW_sun from '../leiras/WinWatt_SunModul.pdf'
import Sunarch1 from '../leiras/SUNARCH_elmelet_es_alkalmazas.pdf'
import Sunarch2 from '../leiras/SUNARCH_elmelet_es_alkalmazas_2.pdf'
import Sunarch3 from '../leiras/Napepiteszet.pdf'
import Sunarch4 from '../leiras/SunArch_Leiras.pdf'
import Hocs from '../leiras/Hocserelo_meretezo_leiras.pdf'
import Hurkolt1 from '../leiras/Hurkolt_halozat_meretezo_leiras.pdf'
import Hurkolt2 from '../leiras/Hurkolt_XML_adatfajlok.pdf'
import Hurkolt3 from '../leiras/Csohalozat_veszteseg_szamitasa.pdf'
import Iso from '../leiras/ISO-bau_leiras.pdf'

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

                    <li><a href={Chm_BAU32} >CHM-BAU32 program leírása</a></li>
                    <li className="pb3"><a href={Chm_BAU_XML} >CHM-BAU XML adatfájlok</a></li>
                    <li><a href={WaterNet} >WaterNet program leírása</a></li>
                    <li className="pb3"><a href={Water32} >WaterNet program leírása</a></li>
                    <li><a href={GasNet} >GasNet program leírása</a></li>
                    <li className="pb3"><a href={Gas32} >GasNet32 program leírása</a></li>
                    <li className="pb3"><a href={Legforg} >Légforgalom számító program leírás</a></li>
                    <li><a href={Ww} >WinWatt program </a> teljes leírása</li>
                    <li><a href={WW_epulet} >WinWatt épületenergetikai kiegészítésről</a></li>
                    <li><a href={WW_optimum} >WinWatt optimum modulról</a></li>
                    <li><a href={WW_hidro} >WinWatt HidroPlan modulról</a></li>
                    <li><a href={WW_sun} >WinWatt Sun modulról</a></li>
                    <li><Link to="#">WinWatt, GasNet és WaterNet XML adatfájlok leírása</Link></li>
                    <li className="pb3"><Link to="#">WinWatt ÉMI export XML adatfájl leírása</Link></li>
                    <li><a href={Sunarch1} >SunArch elmélet és alkalmazás</a></li>
                    <li><a href={Sunarch2} >SunArch elmélet és alkalmazás 2. rész</a></li>
                    <li><a href={Sunarch3} >Napépítészet, elmélet és alkalmazás</a>, szerző: Dr. Kuba Gellért</li>
                    <li className="pb3"><a href={Sunarch4} >Sunarch program leírása</a></li>
                    <li className="pb3"><a href={Hocs} >Hőcserélő méretező program</a></li>
                    <li><a href={Hurkolt1} >Hurkolt hálózat méretező program</a></li>
                    <li><a href={Hurkolt2} >Hurkolt hálózat méretező program XML adatfájlok</a></li>
                    <li className="pb3"><a href={Hurkolt3} >Hurkolt hálózat hőveszteség számítás elmélet</a></li>
                    <li className="pb3"><a href={Iso} >ISO-bau szigetelés kiválasztó</a></li>
                </ul>
            </div>
        );

    }
}

export default Leirasok;