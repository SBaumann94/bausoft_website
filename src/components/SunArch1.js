import React, { Component } from 'react';
import 'tachyons';
import SunArch11 from '../screenshots/sunarch_11.gif'
import SunArch12 from '../screenshots/sunarch_12.gif'
import SunArch13 from '../screenshots/sunarch_13.gif'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class SunArch extends Component {
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
                <div className="SunArch1 pl3 overflow-x-hidden ">
                    <Helmet><title>SunArch1</title></Helmet>
                    <h2>Égtáj szerinti napenergia hozamok</h2>
                    <p align="left">A napenergia égtájak és klímarégiók szerint eltérő intenzitással
                    érkezik a Föld felszínére. Meteorológiai mérések tanúsága szerint az intenzitás
                    különbségek számottevőek, mint ez a mellékelt ábrákon látható. Ennek alapján,
                    ha ismert az eloszlás jellege, akkor a felfogó felület a legkedvezőbb égtáj irányába
                    állítható a maximális napenergia hozam elérésére.</p>
                    <img className="mw-30 center"
                        src={SunArch11}
                        alt={"Eredmények"} />
                    <p class="tc">ÉGTÁJ SZERINTI NAPENERGIA HOZAM ELOSZLÁSA SZEGEDI KLÍMA KÖRZETBEN, MÁJUS HÓNAPBAN FÜGGŐLEGES FELÜLETEN</p>
                    <p align="left">A SunArch programmal, a mért sugárzási adatok alapján, bármilyen
                    tájolású és dőlésű felfogó felületre érkező napenergia mennyiséget számszerűen
                    lehet leolvasni a választott klímarégióban. A program lehetővé teszi a maximum
                    vagy minimum hozamhoz tartozó tájolás és dőlésszög meghatározását.</p>
                    <img className="mw-30 center"
                        src={SunArch12}
                        alt={"Eredmények"} />
                    <p class="tc">TELJES ÉVI ÉGTÁJ SZERINTI NAPENERGIA HOZAM ELOSZLÁSA SZEGEDI KLÍMA KÖRZETBEN, FÜGGŐLEGES FELÜLETEN</p>
                    <p align="left">A piros szín a direkt, kék a szórt a sárga a teljes
                    sugárzásnak az eloszlását jelöli. Az eloszlás jellege markánsan eltér
                    az előbbi, a május havi napenergia eloszlástól. A napenergia hozam tájolás
                    szerinti eloszlása függ a naptári időtartamtól is. A kollektorokat ezért
                    is csak mért napsugárzási adatok alapján lehet maximális hozamra tájolni.</p>
                    <img className="mw-30 center"
                        src={SunArch13}
                        alt={"Eredmények"} />
                    <p class="tc">TELJES ÉVI NAPENERGIA HOZAM ELOSZLÁSA A SZEGEDI KLÍMAKÖRZETBEN, HA A KOLLEKTOR HAJLÁSSZÖGE 45°</p>
                    <p align="left">A kollektor dőlésszögének megváltoztatásával a maximális
                    energia hozam égtájiránya megváltozik. A SunArch program segítségével a
                    kollektorok optimális dőlésszögét, a legkedvezőbb égtáj irányát sokévi
                    meteorológiailag mért napsugárzás adatok alapján lehet megállapítani.</p>
                    <p align="left">További rövid ismertetők:</p>
                    <ul>
                        <li><Link to="/public/SunArch2.html">Kollektorok maximális napenergia hozama tájolással</Link></li>
                        <li><Link to="/public/SunArch3.html">Épületek túlmelegedés elleni védelme</Link></li>
                    </ul>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="SunArch1 pl3 overflow-x-hidden ">
                    <Helmet><title>SunArch1</title></Helmet>
                    <h2>Solar energy impact by orientation</h2>
                    <p align="left">The impact of solar energy varies according to orientation
                    and climatic regions. The deviation of intensity is most remarkable reflected
                    by meteorological data shown on the picture below. On the basis of this,
                    if the pattern of energy distribution is known, the collector can be oriented
                    towards the optimum direction thus providing the maximum energy impact on a given surface.</p>
                    <img className="mw-30 center"
                        src={SunArch11}
                        alt={"Eredmények"} />
                    <p class="tc">DISTRIBUTION OF SOLAR ENERGY IN THE SZEGED CLIMATIC REGION IN MAY WITH SURFACES BEING POSITIONED VERTICALLY</p>
                    <p align="left">By means of the SunArch program one can state numerically the
                    amount of solar energy radiation on a certain surface, positioned at any angle
                    or facing any direction in a given climatic region. The program enables the
                    user to determine the angle of the surface in order to obtain maximum or minimum radiation.</p>
                    <img className="mw-30 center"
                        src={SunArch12}
                        alt={"Eredmények"} />
                    <p class="tc">DISTRIBUTION OF SOLAR ENERGY DURING A PERIOD OF ONE YEAR IN THE SZEGED CLIMATIC REGION, SURFACE BEING POSITIONED VERTICALLY</p>
                    <p align="left">Red colour marks direct solar radiation, blue diffused and yellow
                    the distribution of complete radiation. The distribution of radiation differs
                    noticeably from the previous distribution of solar radiation in May. The impact
                    of solar radiation also depends on in which part of the year it is being recorded.
                    This is why collectors can only be positioned effectively on the basis of recorded
                    radiation data, this when they will yield maximum energy.</p>
                    <img className="mw-30 center"
                        src={SunArch13}
                        alt={"Eredmények"} />
                    <p class="tc">SOLAR ENERGY DISTRIBUTION OF FULL YEAR, BY CHANGING THE ANGLE OF COLLECTORS TO 45°</p>
                    <p align="left">By changing the angle of collectors, the orientation of maximum
                    solar impact will also change. With the use of the Sunarch program which has
                    been worked out on the basis of several years of meteorological data,
                    collectors can be positioned in the most efficient way.</p>
                    <p align="left">Other abstracts:</p>
                    <ul>
                        <li><Link to="/public/SunArch2.html">Maximum solar energy produced by the proper orientation of collectors</Link></li>
                        <li><Link to="/public/SunArch3.html">Protection of buildings against overheating</Link></li>
                    </ul>
                </div>
            );
        }
    }
}

export default SunArch;