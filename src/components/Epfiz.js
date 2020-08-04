import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import { Link } from 'react-router-dom';
import epf1 from '../screenshots/ww_epf1.gif';
import epf2 from '../screenshots/ww_epf2.gif';
import { Helmet } from 'react-helmet'

class Epfiz extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Epfiz pl3 overflow-x-hidden ">
                    <Helmet><title>Épületfizika</title></Helmet>
                    <h2>WinWatt Épületfizika</h2>
                    <h3>Anyag adatbázis</h3>
                    <p>A szerkezetek rétegfelépítéséhez egy
                    rendezett, alapvetően feltöltött, de a
                    felhasználó által is bővíthető anyag
                    adatbázis nyújt segítséget. Az anyag adatok
                    megadására illetve módosítására
                    párbeszédpanel áll rendelkezésre. Az anyagok
                    - egy a projektektől független - adatbázisban
                    vannak tárolva.</p>
                    <p>A programmal szállított anyag adatbázis
                    feltöltése a következő források
                    felhasználásával történt:</p>
                    <ul>
                        <li>Az MSZ-04-140-2:1991 szabvány
                        mellékletében található M.1.
                        táblázat és az M.3.4 szorpciós
                        izotermák</li>
                        <li>Völgyes István: Fűtéstechnikai adatok
                        c. szakkönyv 1. és 2. átdolgozott
                        kiadása. Műszaki Könyvkiadó,
                        Budapest, 1978 ill. 1989.</li>
                    </ul>
                    <p>Az adatok megadására példa az alábbi
                    képernyőkép.</p>
                    <img className="mw-70"
                        src={epf1}
                        alt={"Eredmények"} />
                    <h3>Réteges szerkezetek</h3>
                    <p>A felhasználó egyszerű eszközökkel
                    megadhatja a többrétegű szerkezet egyes
                    rétegeinek adatait. Az anyagjellemzők
                    megadására nincs már külön szükség, mert
                    az anyagok az adatbázisból választhatók. A
                    rétegvastagság változtatáson kívül
                    lehetőség van rétegek mozgatására,
                    cseréjére, beszúrására és törlésére.
                    Megadhatóak légrétegek és kiszellőztetett
                    rétegek is.</p>
                    <p>Az épületfizikai számítások a jelenleg
                    érvényben levő MSZ-04-140-2:1991 szabvány
                    előírásainak figyelembevételével
                    történnek, a program a következő
                    számításokat végzi el: </p>
                    <ul>
                        <li>hőátbocsátási tényező</li>
                        <li>csillapítási tényező</li>
                        <li>fajlagos faltömeg</li>
                        <li>fajlagos hőtároló tömeg</li>
                        <li>padló hőelnyelési tényező (padlók
                        és födémek esetére)</li>
                        <li>páradiffúziós diagram
                        megszerkesztése, egyensúlyi
                        nedvességtartalom meghatározása</li>
                    </ul>
                    <p>A szerkezet értékelése a páradiffúziós
                    számításoknál adódó nedvességtartalmak
                    alapján történik. A vizsgálatok az
                    egyensúlyi nedvességtartalmak
                    meghatározására irányulnak, illetve
                    bonyolultabb esetben az egyensúlyi állapot
                    kialakulásának lehetőségét vizsgálja a
                    program a szabvány mellékletében megadott
                    algoritmus alapján. Ha a kezdeti
                    nedvességtartalom ezt szükségessé teszi, a
                    program közelítő kiszáradási vizsgálatot is
                    végez. Ezeknek az eredményeknek az ismeretében
                    minősíti a program az adott szerkezetet.</p>
                    <img className="mw-70"
                        src={epf2}
                        alt={"Eredmények"} />
                    <h3 align="left">Épület energetikai
                    ellenőrzése</h3>
                    <p align="left">A <Link to="/public/ww_teli.html">téli
                    hőszükséglet-számításon</Link> alapulva a
                    program meghatározza az épület egységnyi
                    fűtött térfogatára és az egységnyi
                    (belső-külső) hőmérséklet-különbségre
                    vonatkozó fajlagos hőáramot, és az épület
                    használati jellegének figyelembe vételével
                    ellenőrzi, hogy az a szabvány által
                    meghatározott maximum alatt maradt-e.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Epfiz pl3 overflow-x-hidden ">
                    <Helmet><title>Building physics</title></Helmet>
                    <h2>WinWatt Building physics</h2>
                    <h3>Material database</h3>
                    <p>A structured, fundamentally uploaded but user-expandable material database helps structure layers. A dialog for entering or modifying the substance data is available. The materials are stored in a database, independent of the projects. The material supplied with the program was uploaded using the following resources:</p>
                    <ul>
                        <li>M.1 in the appendix to standard MSZ-04-140-2: 1991. and M.3.4 table for sorption isotherms</li>
                        <li>István Völgyes: Fűtéstechnikai adatok 1st and 2nd editions. Műszaki Könyvkiadó, Budapest,1978 ill. 1989.</li>
                    </ul>
                    <p>An example of entering data is the screenshot below.</p>
                    <img className="mw-70"
                        src={epf1}
                        alt={"Eredmények"} />
                    <h3>Layered structures</h3>
                    <p>The user can easily enter data for each layer of a multilayer
                    structure using simple tools. You do not need to specify material
                    properties anymore as the materials can be selected from the database.
                    In addition to changing the layer thickness, it is possible to move,
                    replace, insert and delete layers. Air layers and vented layers can also be specified.</p>
                    <p>Building physics calculations are based on the current MSZ-04-140-2:
                    1991 standard, and the following calculations are performed: </p>
                    <ul>
                        <li>heat transfer coefficient</li>
                        <li>damping factor</li>
                        <li>specific wall mass</li>
                        <li>specific mass of heat storage</li>
                        <li>floor heat absorption coefficient (for floors and ceilings)</li>
                        <li>construction of vapor diffusion diagram, determination of equilibrium moisture content</li>
                    </ul>
                    <p>The structure is evaluated based on the moisture content of the
                    vapor diffusion calculations. The tests aim to determine the
                    equilibrium moisture content, or, in more complex cases, the
                    possibility of equilibrium moisture formation using the algorithm
                    provided in the appendix to the standard. If the initial moisture
                    content makes this necessary, the program also performs an approximate
                    dehydration test. Based on these results, the program qualifies the
                    structure.</p>
                    <img className="mw-70"
                        src={epf2}
                        alt={"Eredmények"} />
                    <h3 align="left">Energy control of a building</h3>
                    <p align="left">Based on the <Link to="/public/ww_teli.html">winter heat demand calculation</Link>,
                    the program determines the specific heat flux per unit heated volume of
                    the building and the unit (inside-outside) temperature difference, and
                    checks whether the building is below its maximum according to the use
                    of the building.</p>
                </div>
            );
        }
    }
}

export default Epfiz;