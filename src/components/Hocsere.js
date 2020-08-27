import React, { Component } from 'react';
import 'tachyons';
import hocsere1 from '../screenshots/hocsere_1.gif'
import hocsere2 from '../screenshots/hocsere_2.gif'
import hocsere3 from '../screenshots/hocsere_3.gif'
import hocsere4 from '../screenshots/hocsere_4.gif'
import hocsere5 from '../screenshots/hocsere_5.gif'
import { Helmet } from 'react-helmet'

class Hocsere extends Component {
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
                <div className="Hocsere pl3 overflow-x-hidden ">
                    <Helmet><title>Hőcserélő méretező</title></Helmet>
                    <h2>Hőcserélő méretező program</h2>
                    <p align="left">A program segítségével a FÉG-SPIREC, az SKR-X és az Építőelemes hőcserélők méretezhetők.
                    A számításokat nem csak egy adott hőcserélőre végezhetjük el, hanem megadott körben, egyszerre több típusra,
                    különböző párhuzamos ágakkal és sorbakötésekkel több számítást készíthetünk.</p>
                    <img className="mw-70"
                        src={hocsere1}
                        alt={"Eredmények"} />
                    <p align="left">Megválaszthatjuk, hogy mik legyenek a bemenő adatok, és a program megkeresi az aktuális
                    munkapontot a megadott feltételek mellett.</p>
                    <img className="mw-30"
                        src={hocsere2}
                        alt={"Eredmények"} />
                    <p align="left">A feltételeket kielégítő megoldásokat különböző szempontok szerint sorbarendezhetjük, hogy
                    kiválasszuk a legjobb megoldásokat.</p>
                    <img className="mw-60"
                        src={hocsere3}
                        alt={"Eredmények"} />
                    <p align="left">Végezhetünk egyedi számítást is egy-egy hőcserélőre, ilyenkor több részeredmény is kijelzésre kerül.</p>
                    <img className="mw-50"
                        src={hocsere4}
                        alt={"Eredmények"} />
                    <p align="left">Végezetül a számításokat elmenthetjük illetve ki is nyomtathatjuk.</p>
                    <img className="mw-30"
                        src={hocsere5}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Hocsere pl3 overflow-x-hidden ">
                    <Helmet><title>Heat exchanger calculator</title></Helmet>
                    <h2>Heat exchanger calculator program</h2>
                    <p align="left">The program allows scaling of
                    the FÉG-SPIREC, SKR-X and Building Block Heat Exchangers. The
                    calculations can be done not only for a particular heat exchanger, but
                    also for more than one type, with different parallel branches and
                    serial connections, in a given circle.</p>
                    <img className="mw-70"
                        src={hocsere1}
                        alt={"Eredmények"} />
                    <p align="left">You can select what the input
                    data is and the program will search for the current workpoint under the
                    specified conditions.</p>
                    <img className="mw-30"
                        src={hocsere2}
                        alt={"Eredmények"} />
                    <p align="left">Solutions that meet the
                    criteria can be sorted into different aspects to choose the best
                    solutions.</p>
                    <img className="mw-60"
                        src={hocsere3}
                        alt={"Eredmények"} />
                    <p align="left">You can also perform a unique
                    calculation for each heat exchanger, in which case several partial
                    results are displayed.</p>
                    <img className="mw-50"
                        src={hocsere4}
                        alt={"Eredmények"} />
                    <p align="left">Finally, the calculations can
                    be saved or printed.</p>
                    <img className="mw-30"
                        src={hocsere5}
                        alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Hocsere;