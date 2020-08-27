import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import epbd1 from '../screenshots/ww_epbd1.gif';
import epbd2 from '../screenshots/ww_epbd2.gif';
import epbd3 from '../screenshots/ww_epbd3.gif';
import epbd4 from '../screenshots/ww_epbd4.gif';
import { Helmet } from 'react-helmet'

class Epbd extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Epbd pl3 overflow-x-hidden ">
                    <Helmet><title>EPBD modul</title></Helmet>
                    <h2>WinWatt épületenergetika</h2>
                    <p>A helyiségek geometriai méreteinek,
                    hőveszteségének felhasználásával a program
                    számítja az épület fajlagos
                    hőveszteségtényezőjét és összeveti a
                    felület/térfogat arány alapján megengedett
                    követelményértékkel. A számítások a
                    rendeletben meghatározott részletes módszer
                    szerint történnek, vagyis az ablakokon
                    keresztüli sugárzásos nyereség számítását
                is elvégzi a program. </p>
                    <img className="mw-70"
                        src={epbd1}
                        alt={"Eredmények"} />
                    <p>Az épület nettó energiaigénye és az egyes
                    gépészeti rendszerek fajlagos energiaigénye
                    alapján kerül meghatározásra az épület
                    összesített energetikai jellemzője. Ezt veti
                    össze a program az épület rendeltetése
                alapján előírt értékkel.</p>
                    <img className="mw-70"
                        src={epbd2}
                        alt={"Eredmények"} />
                    <p align="left">Az egyes gépészeti rendszerek
                    fajlagos energiaigény számításakor a
                    hőtermelő teljesítménytényezője, a rendszer
                    további elemeinek veszteségei és a
                    segédenergia igények alapján számítja a
                program a rendszer fajlagos energiaigényét.</p>
                    <img className="mw-70"
                        src={epbd3}
                        alt={"Eredmények"} />
                    <p align="left">A tanúsítási folyamat során
                    az összesített energetikai jellemző és a
                    megengedett értékek alapján minősíti a
                program az épületet.</p>
                    <img className="mw-70"
                        src={epbd4}
                        alt={"Eredmények"} />
                    <p align="left">Számos funkció segít abban,
                    hogy egyszerűen lehessen különböző
                    változtatások hatásait figyelembe véve
                    javaslatokat kidolgozni az épület energetikai
                    jellemzőinek javítására.
                    Egyszerre sok változtatás hatásáról átfogó képet
                legkönnyebben az <Link to="/public/ww_optimum.html">optimum modul</Link> segítségével kaphat.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Epbd pl3 overflow-x-hidden ">
                    <Helmet><title>EPBD module</title></Helmet>
                    <h2>WinWatt energy performance of buildings</h2>
                    <p>Using the geometric dimensions and heat loss of
                    the rooms, the program calculates the specific heat loss coefficient of
                    the building and compares it with the allowable value based on the
                    surface to volume ratio. The calculation shall be carried out in
                    accordance with the detailed method set out in the Regulation, this
                    means, the program also calculates the radiation gain through the
                    windows. </p>
                    <img className="mw-70"
                        src={epbd1}
                        alt={"Eredmények"} />
                    <p>The net energy demand of the building and the
                    specific energy demand of each mechanical system determine the total
                    energy performance of the building. The program compares this with the
                    value set for the purpose of the building.</p>
                    <img className="mw-70"
                        src={epbd2}
                        alt={"Eredmények"} />
                    <p align="left">When calculating the specific
                    energy requirement of each mechanical system, the program calculates
                    the specific energy demand of the system based on the power factor of
                    the heat generator, the losses of other components of the system and
                    the auxiliary energy requirements.</p>
                    <img className="mw-70"
                        src={epbd3}
                        alt={"Eredmények"} />
                    <p align="left">During the certification
                    process, the building will be certified on the basis of its overall
                    energy performance and allowable values.</p>
                    <img className="mw-70"
                        src={epbd4}
                        alt={"Eredmények"} />
                    <p align="left">Many features make it easy to
                    make suggestions for improving the energy performance of a building,
                    taking into account the effects of various changes. The <Link to="/public/ww_optimum.html">optimum module</Link> is
                    the easiest way to get a comprehensive picture of the effect of many changes at once.</p>
                </div>
            );
        }
    }
}

export default Epbd;