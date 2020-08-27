import React, { Component } from 'react';
import 'tachyons';
import gasnet321 from '../screenshots/gasnet32_1.gif'
import gasnet322 from '../screenshots/gasnet32_2.gif'
import gasnet323 from '../screenshots/gasnet32_3.gif'
import { Helmet } from 'react-helmet'

class Gasnet32 extends Component {
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
                <div className="GasNet32 pl3 overflow-x-hidden ">
                    <Helmet><title>GasNet32</title></Helmet>
                    <h2>GasNet32 Gázhálózat méretező program</h2>
                    <p align="left">A program gázellátó hálózatok hidraulikai méretezésére szolgál.
                    Elsősorban épületen belüli rendszerek méretezésére készült, de alkalmas telephelyen
                    belüli csatlakozó és elosztó vezetékek számítására is.
                    Kezel minden olyan elemet, amely a gázhálózat méretezési feladatában szerepel,
                    így a szakaszok és fogyasztók mellett a fogyasztásmérőket és a nyomáscsökkentőket is.
                    A korábbi verzióval szemben, a nyomásváltozásból adódó térfogatváltozást is kezeli.</p>

                    <p align="left">A hálózatot alkotó
                    fogyasztók, szakaszok és csomóponti elemek
                    adatainak megadása, a programhoz kapcsolódó
                    adatbázis és a szokásos beállításokat
                    tartalmazó szakasz makrók felhasználásával
                    gyorsan és rugalmasan történhet. A másoló
                    funkciókkal az ismétlődő hálózatrészek
                    többszöri beillesztése is egyszerűen
                    megoldható.</p>
                    <img className="mw-20 center"
                        src={gasnet321}
                        alt={"Eredmények"} />
                    <p align="left">A hálózat méretezés során
                    nem csupán a hidraulikai méretezés történik
                    meg, hanem a program feladata valamennyi
                    fogyasztónál a várható kilépési nyomás
                    számítása is. A mértékadó terhelések
                    a DIN és GMBSZ alapján számítható.</p>
                    <img className="mw-20 center"
                        src={gasnet322}
                        alt={"Eredmények"} />
                    <p align="left">A számítási eredmények mind
                    táblázatokon mind a kapcsolási rajz
                    segítségével megtekinthetők. A felhasználó
                    ezeken a képernyőkön be is avatkozhat,
                    módosíthatja a szakaszok átmérőjét,
                    változtathat az alapadatokon.</p>
                    <img className="mw-20 center"
                        src={gasnet323}
                        alt={"Eredmények"} />
                    <p align="left">Tervezési variánsok
                    feldolgozásához a program olyan
                    szolgáltatásokat kínál, amelyekkel egy-egy
                    terméket ki lehet cserélni más termékre, és
                    az így módosított munkát újra lehet
                    méretezni. A <a href="adatbank.htm">program
                    adatbázisát</a> folyamatosan bővítjük, a
                    legfrissebb adatbázis honlapunkon folyamatosan
                    elérhető, és onnan a <a href="frissit.htm">programfrissítés</a> is megoldható, illetve letölthető a program <a
                            href="demo.htm">demo változata</a>.</p>
                    <p align="left">A program az anyagkigyűjtésen
                    túl a költségvetés készítést is
                    támogatja. Olyan kimenettel rendelkezik, amely
                    az anyagkigyűjtés eredményeit azonosítókkal
                    és mennyiségekkel tartalmazza, abból egy arra
                    alkalmas költségvetés készítő program -
                    ilyen például az MM.sys Számítástechnikai
                    Bt. KönyvCalc programja - a költségvetést
                    képes automatikusan előállítani.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="GasNet32 pl3 overflow-x-hidden ">
                    <Helmet><title>GasNet32</title></Helmet>
                    <h2>GasNet32 Gas network scaling program</h2>
                    <p align="left">The program is designed for
                    hydraulic sizing of gas supply networks. It is primarily designed for
                    in-house system sizing, but is also suitable for on-site connection and
                    distribution lines. Manages all elements that are part of the gas grid
                    design task, thus, in addition to sections and consumers, flow meters
                    and pressure reducers. Unlike the previous version, it also handles
                    volume changes due to pressure changes.</p>
                    <p align="left">Specifying network, section,
                    and node elements that make up a network can be done quickly and
                    flexibly using a program-related database and standard section macros.
                    Multiple insertion of duplicate network parts is also easy with copy
                    functions.</p>
                    <img className="mw-20 center"
                        src={gasnet321}
                        alt={"Eredmények"} />
                    <p align="left">Not only does hydraulic sizing
                    occur during network sizing, but the program also calculates the
                    expected outlet pressure for all consumers. The standard loads are
                    calculated on the basis of DIN and GMBSZ.</p>
                    <img className="mw-20 center"
                        src={gasnet322}
                        alt={"Eredmények"} />
                    <p align="left">Calculation results can be
                    viewed both in tables and in the wiring diagram. The user can also
                    intervene on these screens, change the diameter of the sections, and
                    change the basic data.</p>
                    <img className="mw-20 center"
                        src={gasnet323}
                        alt={"Eredmények"} />
                    <p align="left">To process design variants,
                    the program offers features that can be used to replace one product
                    with another and to resize the work that has been modified. The
                    program <a href="adatbank.htm">database</a> is constantly being updated, the most up-to-date database is constantly
                    available on our website, and the program <a href="frissit.htm">update</a> can be done from there,<br />
                    or download a <a href="demo.htm">demo</a> of the program.</p>
                    <p align="left">In addition to fundraising,
                    the program also supports budgeting. It has an output that contains the
                    results of material collection with identifiers and quantities, from
                    which a suitable budgeting program, such as the BookCalc program of
                    MM.sys Computing Bt. it can automatically generate a budget.</p>
                </div>
            );
        }
    }
}

export default Gasnet32;