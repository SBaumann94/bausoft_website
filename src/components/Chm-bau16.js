import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

import ChmBau1 from '../screenshots/chm-bau1.gif'
import ChmBau2 from '../screenshots/chm-bau2.gif'
import ChmBau3 from '../screenshots/chm-bau3.gif'

class ChmBau16 extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="ChmBau16 pl3">
                <Helmet><title>CHM-BAU Kéményméretező program</title></Helmet>
                <h2>CHM-BAU Kéményméretező program</h2>
                <p >A program egy vagy több tüzelőberendezés, egyedi vagy gyűjtőkéményes égéstermék-elvezető rendszerének méretezésére szolgál. A kéményméretezés területén közismert CHMC programmal szerzett tapasztalatok felhasználásával készült, annak továbbfejlesztett változata.</p>
                <img className="mw-60"
                    src={ChmBau1}
                    alt={"Alapelrendezés"} />
                <p>A program használható az atmoszférikus égőjű (deflektoros), a blokkégővel felszerelt (túlnyomásos) kazánok, a jelentősebb huzatigénnyel rendelkező készülékek (pl. szilárdtüzelésű berendezések) és a kondenzációs kazánok kéményének méretezésére. Ventilátoros készülékek ugyancsak méretezhetőek.</p>
                <p>Több berendezés közös égéstermék-elvezetése esetén azok közösítése történhet közös füstcsőben, de a csatlakozások lehetnek különböző szinteken is, hogy gyűjtőkéményt lehessen modellezni. A teljeskéménye és ipari ítményt tekintve nem tartalmaz a program korlátozásokat, így a legkisebb készülékek egyedi berendezések központi kéménye egyaránt méretezhető.</p>
                <img className="mw-60"
                    src={ChmBau2}
                    alt={"Alapelrendezés"} />
                <p>Szilárd, folyékony ill. gáz halmazállapotú tüzelőanyaggal üzemelő berendezések kéménye egyaránt méretezhető. A tüzelőanyag összetételét a felhasználó maga állíthatja össze, és későbbi felhasználásokhoz tárolhatja. Ez alapján történnek a sztöchiometriai számítások a tüzelőanyag és az égéstermék paramétereinek számítására.</p>
                <img className="mw-60"
                    src={ChmBau3}
                    alt={"Alapelrendezés"} />
                <p>A kémény ellenállásának, huzatának számítása mellett az égéstermék lehűlését is meghatározza a program. Többrétegű kör keresztmetszetű kémények mellett a négyszög keresztmetszetű falazott kémények és az utólagosan bélelt kéményszerkezeteket is kezeli a program.</p>
                <p>A kéményméretezés mellett a kémény környezetvédelmi ellenőrzése is elvégezhető a programmal.</p>
                <p>A programhoz tartozó adatbázis tartalmazza kazánok tüzeléstechnikai jellemzőit, különböző kéményrendszerek paramétereit és a települések terhelési indexeit. A <Link to="/public/adatbank.html">legfrissebb adatbázis</Link> honlapunkon folyamatosan elérhető, onnan a <Link to="/public/frissitok.html">programfrissítés</Link> is megoldható, illetve a program <Link to="/public/demok.html">demo változata</Link> letölthető.</p>
            </div>
        );
    }
}

export default ChmBau16;