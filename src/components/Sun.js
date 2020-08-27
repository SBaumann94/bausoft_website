import React, { Component } from 'react';
import 'tachyons';
import sun1 from '../screenshots/ww_sun1.png';
import sun2 from '../screenshots/ww_sun2.png';
import {Helmet} from 'react-helmet'

class Sun extends Component {
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
                <div className="Sun pl3 overflow-x-hidden ">
                    <Helmet><title>Sun modul</title></Helmet>
                    <h2>WinWatt Sun modul</h2>
                    <p>Mindkét számítás a PVGIS (European Commission PVGIS projekt) webszervíz szolgáltatást <a href="http://re.jrc.ec.europa.eu/pvgis.html">(http://re.jrc.ec.europa.eu/pvgis.html)</a> használja, ezért internetkapcsolat szükséges a számításokhoz.</p>
                    <h3>Napelem hozamszámítás</h3>
                    <p>A napelemek számítását teljesen az említett szolgáltatás végzi, az előnye a programon kívüli használattal szemben, hogy az a projektbe integráltan történik, a számítás a dokumentációba is bekerül, és magyar nyelven kezelhetjük.</p>
                    <img className="mw-70"
                        src={sun2}
                        alt={"Eredmények"} />
                    <h3>Napkollektor hozamszámítás</h3>
                    <p>A napkollektorok számítása esetén a webszervíz csak az adott földrajzi pozícióban, a megadott tájolású, dőlésszögű felületre vonatkozó napsugárzás és hőmérséklet adatokat szolgáltatja, a további számításokat már a program végzi.</p>
                    <img className="mw-70"
                        src={sun1}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Sun pl3 overflow-x-hidden ">
                    <Helmet><title>Sun module</title></Helmet>
                    <h2>WinWatt Sun module</h2>
                    <p>Both calculations use the PVGIS (European Commission PVGIS project) web service (<a href="http://re.jrc.ec.europa.eu/pvgis.html">http://re.jrc.ec.europa.eu/pvgis.html</a>), so an internet connection is required for the calculations.</p>
                    <h3>Solar panel yield calculation</h3>
                    <p>Solar panels are fully computed by this service and have the
                    advantage over off-program use that they are integrated into the
                    project, included in the documentation and handled in Hungarian.</p>
                    <img className="mw-70"
                        src={sun2}
                        alt={"Eredmények"} />
                    <h3>Solar collector yield calculation</h3>
                    <p>When calculating solar panels, the web service will only provide
                    solar radiation and temperature data for a given geographic position on
                    a tilted surface with the specified orientation, and further
                    calculations will be performed by the program.</p>
                    <img className="mw-70"
                        src={sun1}
                        alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Sun;