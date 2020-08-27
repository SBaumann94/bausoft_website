import React, { Component } from 'react';
import 'tachyons';
import waterNet32_1 from '../screenshots/watern32_1.png'
import waterNet32_2 from '../screenshots/watern32_2.png'
import waterNet32_3 from '../screenshots/watern32_3.png'
import waterNet32_4 from '../screenshots/watern32_4.png'

class WaterNet32 extends Component {
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
                <div className="WaterNet32 pl3 overflow-x-hidden ">
                    <h2>WaterNet32 Vízhálózat méretező program</h2>
                    <p align="left">A program belső vízellátó
                    hálózat hidraulikai méretezésére
                    használható. Egy rendszeren belül, együtt
                    dolgozható fel a hidegvíz, használati
                    melegvíz és cirkulációs hálózat. Kezel
                    minden olyan elemet, amely egy vízhálózat
                    méretezési feladatában szerepel, így a
                    szakaszok és fogyasztók mellett vízmérőket,
                    melegvíz termelőket, nyomásfokozókat,
                    nyomáscsökkentőket és cirkulációs
                    szivattyúkat.</p>
                    <p align="left">A hálózat méretezés során
                    nem csupán a hidraulikai méretezés történik
                    meg, a HMV és cirkulációs rendszer
                    vezetékeinek hőleadását is számítja a
                    program. Ez a cirkulációs rendszer egzaktabb
                    beszabályozását teszi lehetővé. A program
                    feladata valamennyi fogyasztónál a várható
                    kifolyási nyomás számítása, illetve a
                    cirkulációs rendszer vízmennyiségeinek
                    beszabályozására szolgáló szelepek
                    beállítási értékeit meghatározni.</p>
                    <img className="mw-20"
                        src={waterNet32_1}
                        alt={"Eredmények"} />
                    <p align="left">A mértékadó terhelések
                    számításánál nem csupán az MSZ 04-132-1991
                    "Épületek vízellátása" magyar
                    szabvány előírásait veheti valaki figyelembe,
                    hanem a német DIN 1988 szerinti számítás is
                    választható. Az épület típusa bármely, a
                    szabványokban szereplő kategória szerinti
                    lehet.</p>
                    <p align="left">A hálózatot alkotó
                    fogyasztók, szakaszok és csomóponti elemek
                    adatainak megadása a programhoz kapcsolódó
                    adatbázis és a szokásos beállításokat
                    tartalmazó szakasz makrók felhasználásával
                    gyorsan és rugalmasan történhet.</p>
                    <img className="mw-20"
                        src={waterNet32_2}
                        alt={"Eredmények"} />
                    <p align="left">A számítási eredmények mind
                    táblázatokon mind a kapcsolási rajz
                    segítségével megtekinthetők. A felhasználó
                    ezeken a képernyőkön beavatkozhat,
                    módosíthatja a szakaszok átmérőjét,
                    változtathat az alapadatokon.</p>
                    <img className="mw-20"
                        src={waterNet32_3}
                        alt={"Eredmények"} />
                    <p align="left">A programhoz tartozó másoló
                    funkciókkal az ismétlődő hálózatrészek
                    többszöri beillesztése, egyszerűen
                    megoldható.<br/>
                    Tervezési variánsok feldolgozásához a program
                    olyan szolgáltatásokat kínál, amelyekkel
                    egy-egy terméket ki lehet cserélni más
                    termékre, és az így módosított munkát újra
                    lehet méretezni.</p> 
                    <p align="left">A melegvíz-termelőknél meghatározhatjuk az N igényszámot, majd ezt követően a szükséges tároló méretet.</p> 
                    <img className="mw-20"
                        src={waterNet32_4}
                        alt={"Eredmények"} />
                    <p>A <a href="adatbank.htm">program
                    adatbázisát</a> folyamatosan bővítve, ingyen
                    adjuk a felhasználóknak. Honlapunkon ugyancsak
                    elvégezhető a <a href="frissit.htm">programfrissítés</a>,
                    illetve letölthető a program <a href="demo.htm">demo változata</a>.</p>
                    <p align="left">A program az anyagkigyűjtésen
                    túl a költségvetés készítését is
                    támogatja. Olyan kimenettel rendelkezik, amely
                    az anyagkigyűjtés eredményeit azonosítókkal
                    és mennyiségekkel tartalmazza, abból egy arra
                    alkalmas költségvetés készítő program -
                    ilyen például az MM.sys Számítástechnikai
                    Bt. KönyvCalc programja - a költségvetést
                    képes automatikusan előállítani. Ezt a
                    költségvetést a felhasználó szabadon tovább
                    bővítheti, változtathatja az igényeinek
                    megfelelően.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="WaterNet32 pl3 overflow-x-hidden ">
                    <h2>WaterNet32 Water network scaling program</h2>
                    <p align="left">The program can be used for hydraulic sizing of an
                    internal water supply network. Within a system, cold water, domestic
                    hot water and a circulation network can be processed together. It
                    manages all elements that are involved in the design of a water
                    network, including water meters, hot water producers, booster sets,pressure reducing devices and circulation pumps. </p>
                    <p align="left">In addition to the hydraulic dimensioning, the program
                    calculates the heat output of the DHW and DHW circuits. This allows
                    more precise control of the circulation system. The task of the program
                    is to calculate the expected outlet pressure for all consumers,and setting values ​​for valves to regulate the amount of water in the circulation system. </p>
                    <img className="mw-20"
                        src={waterNet32_1}
                        alt={"Eredmények"} />
                    <p align="left">Not only the requirements of the Hungarian standard MSZ
                    04-132-1991 "Water supply of buildings" can be taken into account when
                    calculating the standard loads, but also the calculation according to
                    German DIN 1988 can be chosen. The type of building can be any of the
                    categories included in the standards.</p>
                    <p align="left">The information about the users, sections and nodes
                    that make up the network can be entered quickly and flexibly using the
                    application-related database and the standard configuration macros.</p>
                    <img className="mw-20"
                        src={waterNet32_2}
                        alt={"Eredmények"} />
                    <p align="left">Calculation results can be viewed both in tables and in
                    the wiring diagram. The user can intervene on these screens, change the
                    diameter of the sections, and change the basic data.</p>
                    <img className="mw-20"
                        src={waterNet32_3}
                        alt={"Eredmények"} />
                    <p align="left">Multiple insertion of repetitive network components is easy with the program's copy features.<br />To
                    process design variants, the program offers features that can be used
                    to replace one product with another and to resize the work that has
                    been modified.</p>
                    <p align="left">For hot water producers, we can determine the number of demands N and then the required storage size.</p>
                    <img className="mw-20"
                        src={waterNet32_4}
                        alt={"Eredmények"} />
                    <p>The <a href="adatbank.htm">database</a> of the program is continuously extended, and it is provided free of charge to the users. You can also do the software <a href="frissit.htm">update</a> or download the <a href="demo.htm">demo</a> version on our website.</p>
                    <p align="left">In addition to fundraising, the program also supports
                    budgeting. It has an output that contains the results of material
                    collection with identifiers and quantities, from which a suitable
                    budgeting program, such as the BookCalc program of MM.sys Computing Bt.
                    it can automatically generate a budget. This budget can be further expanded and changed by the user according to his needs.</p>
                </div>
            );
        }
    }
}

export default WaterNet32;