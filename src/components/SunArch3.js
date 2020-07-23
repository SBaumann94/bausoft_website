import React, { Component } from 'react';
import '../index.css';
import './SunArch.css';
import 'tachyons';
import SunArch31 from '../screenshots/sunarch_31.gif'
import SunArch32 from '../screenshots/sunarch_32.gif'

import { Link } from 'react-router-dom'

class SunArch extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="SunArch3 pl3 overflow-x-hidden ">
                    <h2>Épületek túlmelegedés elleni védelme</h2>
                    <p align="left">Az épületek az üvegezésen áthatoló napfénytől meleg 
                    időszakban túlmelegednek, s ekkor árnyékolással meg kell védeni a 
                    napsugárzás hatásától. A temperált klímán az egyetemlegesen elfogadott 
                    jó hőérzet, a hőkényelem határa a 22°C léghőmérséklet. Ez a hőmérsékleti 
                    érték az árnyékolási küszöb, amikortól a belső terek túlmelegedésének 
                    elkerülésére már meg kell akadályozni, hogy az üvegezett felületeken 
                    át további energia  behatolhasson. A hőmérsékleti árnyékolási küszöb 
                    érték klímarégiónként más-más időpontban fordul elő és előfordulási 
                    valószínűsége is lehet egy vagy több napig tartó. Meteorológiai 
                    hőmérséklet mérések felhasználásával meghatározható a helyi árnyékolási 
                    küszöb előfordulási időpontja és gyakorisága. Ezek az adatok vizuálisan 
                    megjeleníthetők a nappálya diagramokon.</p>
                    <img className="mw-40 center"
                            src={SunArch31}
                            alt={"Eredmények"} />
                    <p align="left">A SunArch program, meteorológiai mérésekre támaszkodva, 
                    négy klímarégió számára tartalmazza a 22°C árnyékolási küszöb 3, 10 és 
                    20 %-os, azaz egy, három és hatnapos előfordulási gyakoriságokat. Ezek 
                    időtartamát és várható előfordulásuk időpontját felrajzolva a nappálya 
                    diagramra a meteorológiai tények ismeretében tanulmányozni lehet, hogy 
                    milyen fokú a vizsgált helyiség túlmelegedési veszélye. A fenti ábrán 
                    a szoba ablakában megjelenő nappályákról leolvasható, hogy mikor éri 
                    az üvegezést napfény, s ugyanakkor leolvasható, hogy statisztikailag 
                    milyen 3, 10, vagy 20 %-os valószínűséggel várható a 22°C léghőmérséklet, 
                    az árnyékolási küszöb együttes előfordulása.</p>
                    <img className="mw-40 center"
                            src={SunArch32}
                            alt={"Eredmények"} />
                    <p align="left">A SunArch programmal elő lehet állítani a vizsgálatnak 
                    megfelelő földrajzi helyre vonatkozó nappálya diagramot. A diagram 
                    megjeleníthető vetületben, mint ez a fölső ábrán látható, de 
                    megjeleníthető térbeli ábrázolással is. A térbeli ábrázolás esetében 
                    a horizont és a föléje boruló égbolt a nappálya, óra és földrajzi 
                    hosszúság vonalakkal a jobb láthatósság érdekében bármely irányba 
                    elforgatható és dönthető.</p>
                    <p align="left">További rövid ismertetők:</p>
                    <ul>
                        <li><Link to="/public/SunArch1.html">Égtáj szerinti napenergia hozamok</Link></li>
                        <li><Link to="/public/SunArch2.html">Kollektorok maximális napenergia hozama tájolással</Link></li>
                    </ul>                        
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="SunArch3 pl3 overflow-x-hidden ">
                    <h2>Protection of buildings against overheating</h2>
                    <p align="left">In warm seasons buildings are generally overheated due 
                    to sunshine penetrating through the glazed surfaces. In such periods 
                    glazed surfaces must be protected against solar rays. In temperate 
                    climate the universally accepted limit of thermal comfort is 22°C air 
                    temperature. This value is considered as the threshold temperature of 
                    shading. Above this the penetration of any energy must be hindered 
                    through glazed surfaces in order to avoid the overheating of the indoor 
                    space. The threshold temperature of shading will differ in time according 
                    to climatic regions and its duration my also differ from one, to several 
                    days. By using meteorological data one can determine the date and time 
                    of the local shading threshold. These data can be visualized on the solar chart.</p>
                    <img className="mw-40 center"
                            src={SunArch31}
                            alt={"Eredmények"} />
                    <p align="left">The SunArch program based upon recorded temperatures provides 
                    shading threshold data of 22°C for four meteorological regions, for periods 
                    of one, three and six days. By marking the date and hours on the corresponding 
                    sun path diagram, knowing the actual meteorological facts referring to the 
                    period in question, one may study to what grade the space under study will be 
                    overheated. On the figure above one can state the precise date and time - by 
                    means of the sunpaths appearing within the border of our window - when the 
                    solar rays will reach the glass. In the same time the statistical probability 
                    of the one, three or six days occurrence of the 22°C air temperature can also be stated.</p>
                    <img className="mw-40 center"
                            src={SunArch32}
                            alt={"Eredmények"} />
                    <p align="left">With the help of the SunArch program one may present the sunpath 
                    diagram referring to the site under investigation. The diagram, may be presented 
                    in projection, as it is shown on the upper figure, but it may also be presented 
                    in aerial view shown below. In case of our aerial view the horizon and the sky 
                    above it with the sun paths, clock lines and geographic longitudes can be rotated 
                    and inclined thus providing a more favourable position for examination.</p>
                    <p align="left">Other abstracts:</p>
                    <ul>
                        <li><Link to="/public/SunArch1.html">Solar energy impact by orientation</Link></li>
                        <li><Link to="/public/SunArch2.html">Maximum solar energy produced by the proper orientation of collectors</Link></li>
                    </ul>                        
                </div>
            );
        }
    }
}

export default SunArch;