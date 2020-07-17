import React, { Component } from 'react';
import '../index.css';
import './SunArch.css';
import 'tachyons';
import SunArch21 from '../screenshots/sunarch_21.gif'
import { Link } from 'react-router-dom'

class SunArch extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="SunArch2 pl3 overflow-x-hidden ">
                    <h1>Kollektorok maximális napenergia hozama tájolással</h1>
                    <p align="left">A közhiedelemmel ellentétben nem a déli irányba tájolt 
                    kollektoroknak van a legnagyobb hozama, mert a Nap  nem délben süt a 
                    legerősebben. Csillagászatilag nem az óránk szerint délidőben áll a 
                    legmagasabban az égbolton. Belátható, hogy nem lehetséges, hogy az összes 
                    város fölött egyszerre legyen dél, amikor harangoznak Délben. Az óraidő és 
                    csillagászati idő között rendszerint, egy ország határán belül, nincs 
                    olyan nagy eltérés a Nap égbolti helyzetében, amely számottevően 
                    módosítaná a felfogható napenergia intenzitását. Azonban a Földet 
                    körülölelő légkörnek jelentős energia szűrő hatása van. A földfelszínre 
                    érkező napenergia intenzitása kizárólag a légkör állapotától függ, 
                    mindenek előtt a légkörben lebegő vízpára mennyiségtől, amely elnyeli és 
                    visszatükrözi a Nap sugarait. Az égtáj iránya szerint, egy függőleges síkra 
                    érkező napenergia intenzitás sokévi átlagának direkt, szórt és teljes 
                    sugárzás bonyolult eloszlását az alábbi ábra is jól igazolja.</p>
                    <img className="mw-30 center"
                        src={SunArch21}
                        alt={"Eredmények"} />
                    <p class="tc">TÁJOLÁS SZERINT  A FÜGGŐLEGES SÍKRA  ÉRKEZŐ NAPENERGIA  ELOSZLÁS KÉPE SOPRONI KLÍMARÉGIÓBAN MÉRT ADATOK ALAPJÁN</p>
                    <p align="left">A kollektorok legnagyobb hozamának égtáj és égbolt 
                    iránya a helyi időjárástól függ. Az optimális tájolást, amely a 
                    kollektor legmagasabb energiahozamát ígéri, csak sokévi meteorológiai 
                    mérés átlaga alapján lehet meghatározni. Ezt a szolgáltatást kínálja 
                    a SunArch program, amely klímarégiónként mért sugárzási adatok 
                    sokévi átlaga alapján megadja a tájolás irányát és a szükséges 
                    dőlésszög értékét a lehető legnagyobb hozam eléréséhez. A kollektor 
                    beállításának műveleténél célként választható akár az adott 
                    égtájirányhoz tartozó legkedvezőbb dőlésszög, vagy a rögzített 
                    dőlésszöghöz tartozó legkedvezőbb égtáj irányának meghatározása. 
                    Mindehhez szabadon beállítható a működés naptári időtartama is. 
                    Teljesen szabad horizont esetében kikereshető a tájolás és dőlésszög 
                    együttes értéke is a maximális napenergia hozam eléréséhez.</p>
                    <p align="left">További rövid ismertetők:</p>
                    <ul>
                        <li><Link to="/public/SunArch1.html">Égtáj szerinti napenergia hozamok</Link></li>
                        <li><Link to="/public/SunArch3.html">Épületek túlmelegedés elleni védelme</Link></li>
                    </ul>                        
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="SunArch2 pl3 overflow-x-hidden ">
                    <h1>Maximum solar energy produced by the proper orientation of collectors</h1>
                    <p align="left">In spite of common belief, it is not a collector oriented 
                    South that produces the most solar energy, since the Sun does not radiate 
                    as one would think with maximum intensity at noon. From the point of view 
                    of astronomy the Sun does not stay at the highest point on sky at 12 o'clock. 
                    It is evident that noon is at different times in the case of each and every 
                    town. However there is no great deviation in the Sun's position on the sky 
                    and the actual time on the clock within the borders of a country, which 
                    would noticeably modify the intensity of radiation. The atmosphere 
                    surrounding the Earth has a significant filtering effect thus reducing the 
                    intensity of solar radiation. The intensity of solar rays reaching the 
                    Earth's surface fully depends upon the atmospheric conditions. First of 
                    all it depends from the amount of atmospheric vapour, which absorbs and 
                    bends solar rays to a great extent. The rather complicated distribution of 
                    the intensity of average solar energy measured on a vertical surface 
                    throughout many years is well presented on the figure below.</p>
                    <img className="mw-30 center"
                        src={SunArch21}
                        alt={"Eredmények"} />
                    <p class="tc">DISTRIBUTION OF SOLAR ENERGY ACCORDING TO ORIENTATION MEASURED ON A VERTICAL SURFACE IN THE SOPRON CLIMATIC REGION, IN MAY</p>
                    <p align="left">The optimum orientation and inclination of collectors, which 
                    consequently produce the highest amount of energy, much depends upon the 
                    local climate. This optimum can only be determined on the basis of the 
                    averages of many years of meteorological data. This service is offered by 
                    the SunArch program, which enables the correct orientation and inclination 
                    of the given collector in order to produce the maximum solar energy. The 
                    program is based on averages of meteorological data, which has been collected 
                    through out many years. In the course of adjusting a collector once the 
                    orientation has been fixed one can either determine the most favourable 
                    inclination or the other way round, if the inclination is given, thane the 
                    orientation can be selected thus resulting maximum solar energy. In addition 
                    to this the duration of the period can also be set according to the calendar. 
                    In the case of a totally free horizon one can select the angle of orientation 
                    and the angle of inclination belonging to it, in order to produce maximum 
                    solar energy.</p>
                    <p align="left">Other abstracts:</p>
                    <ul>
                        <li><Link to="/public/SunArch1.html">Solar energy impact by orientation</Link></li>
                        <li><Link to="/public/SunArch3.html">Protection of buildings against overheating</Link></li>
                    </ul>                        
                </div>
            );
        }
    }
}

export default SunArch;