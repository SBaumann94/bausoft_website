import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class HurkVer extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="HurkVer pl3 overflow-x-hidden ">
                <Helmet><title>A Hurkolt hálózat méretező program verziók áttekintése</title></Helmet>
                <h2>A Hurkolt hálózat méretező program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>2.03 -&gt; 2.04</b> (2020. április 23.)</p>
                <ul>
                    <li>Korábbi projekt hálózat ábráján a korábbi szakasz hozzárendelések megjelenítése nem működött.</li>
                    <li>A gráfon a szakaszokhoz rendelt nyíl, a nagyítástól illetve a betűmérettől függően távolodott a szövegtől.</li>
                </ul>

                <p><b>2.02 -&gt; 2.03</b> (2020. április 08.)</p>
                <ul>
                    <li>A gráfokra az elemek felrakásakor az elemek szűrhetők a csomópontok nevére megadott szabály megadással.</li>
                    <li>A gráf megjelenítésnél a nagyítás és a font mérete szabadon adható meg.</li>
                    <li>A nagyító ablak használata során az erőforrásokat nem szabadította fel, egy idő után a megjelenítés nem működött.</li>
                </ul>

                <p><b>2.01 -&gt; 2.02</b> (2019. december 30.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, az adatbázis illetve a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                </ul>

                <p><b>2.00 -&gt; 2.01</b> (2019. december 13.)</p>
                <ul>
                    <li>A fogyasztók adatainak a megadásánál a tömegáram mértékegysége nem volt minden esetben helyesen kijelezve. A program beállításokban megadott mértékegységtől eltérően mindig kg/h-t jelzett.</li>
                </ul>

                <p><b>1.22 -&gt; 2.00</b> (2019. október 14.)</p>
                <ul>
                    <li>Új alkalmazási módok bevezetése. Sűrített levegős hálózat, gáz elosztó hálózat, folyadék elosztó hálózat, folyadék keringtető hálózat. Minden esetben hurkolt hálózatok.</li>
                    <li>Táblázatokban mértékegység választási lehetőség.</li>
                    <li>Unicode karakterek használata, cirill és görög betük is alkalmazhatók.</li>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                    <li>A hálózat gráf megjelenítő ablakban van lehetőség részlet nagyításra, külön ablakban.</li>
                    <li>Angol nyelven is használható a program, illetve készíthetők a dokumentációk.</li>
                </ul>

                <p><b>1.21 -&gt; 1.22</b> (2016. február 10.)</p>
                <ul>
                    <li>Táblázatok Excel export javítása.</li>
                </ul>

                <p><b>1.20 -&gt; 1.21</b> (2014. december 19.)</p>
                <ul>
                    <li>Adatbázis frissítések kezelése a programból. Az adatbázisok karbantartása ablakban lehetőség van közvetlenül a honlapon lévő adatbázis archívumokból adatokat betölteni.</li>
                </ul>

                <p><b>1.11 -&gt; 1.20</b> (2014. június 19.)</p>
                <ul>
                    <li>Új fejlesztőrendszer alkalmazása</li>
                    <li>Telepítés módosítás. A felhasználó AppData könyvtárába (Bausoft\Hurkolt könyvtárba) kerülnek az adatbázisok és a Dokumentumok könyvtárba (Hurkolt) a példa projektek. A többi fájl kerül a telepítéskor megadott könyvtárba.</li>
                    <li>Struktúrált elemlistában is lehet keresni</li>
                </ul>

                <p><b>1.10 -&gt; 1.11</b> (2012. 5. 21.)</p>
                <ul>
                    <li>Elemek átnevezését nem hajtotta végre.</li>
                </ul>

                <p><b>1.04 -&gt; 1.10</b> (2010. 2. 22.)</p>
                <ul>
                    <li>Új szolgáltatása a programnak, hogy induláskor ellenőrzi, hogy elérhető-e frissebb változat az interneten.</li>
                    <li>A frissítések ellenőrzése mellett, a programhoz tartozó rövid hírüzenetek is letölthetők. Ezek elsősorban az adatbázis frissülésére hívják fel a figyelmet.</li>
                    <li>Fejlesztőrendszer cseréje, a fájl dialógusok az XP szerintiek.</li>
                    <li>A súgó HTML alapúra alakítása.</li>
                </ul>

                <p><b>1.03 -&gt; 1.04</b> (2009. 10. 26.)</p>
                <ul>
                    <li>A hálózat számításon belül egy szakasz adatainak módosítását követő újraszámítás hibás volt, kilépve a számításból és újraindítva a számítás már helyes volt.</li>
                    <li>A számításon belül új típusú táblázat, ami a hőtermelők és a fogyasztók csatlakozási pontjai közti nyomáskülönbségeket tartalmazza.</li>
                    <li>A táblázatokban és a hálózati gráfon t/h dimenzióban is megjeleníthető a tömegáram.</li>
                    <li>A hálózati gráfon a szöveg mérete változtatható.</li>
                    <li>A számításon belül a szakaszok exportja Excel felé a megjegyzést is tartalmazza, illetve a teljesítmény és a tömegáram értéke is számként jelenik meg.</li>
                    <li>A hálózati gráfon a szöveg elhelyezés pozicionálása az ábrageneráláskor javítva, áramlási irányt jelző nyíl automatikus elhelyezése.</li>
                </ul>

                <p><b>1.02 -&gt; 1.03</b> (2009. június 12.)</p>
                <ul>
                    <li>Egyes hálózatok (több független hurkolt részre bonthatóak) esetén a számítás nem futott le.</li>
                </ul>

                <p><b>1.01 -&gt; 1.02</b> (2009. március 24.)</p>
                <ul>
                    <li>Csomóponti elemek bevezetése, aminek segítségével a pontokhoz tartozó koordináták
		    külön kezelhetők, így az automatikus gráf megrajzoláshoz nincs a csomóponti nevekre megkötés.</li>
                    <li>Az üzemállapotok kezelésekor a fogyasztók táblázata átemelhető Excelbe, illetve onnan
                    adatok visszaemelhetők. Ezzel a fogyasztási teljesítmények szabályok szerinti változtatása
		    az Excelben programozható.</li>
                </ul>

                <p><b>1.00 -&gt; 1.01</b> (2008. december 22.)</p>
                <ul>
                    <li>Az egyes elemekhez megjegyzések is fűzhetők, amik további információk megjelenítésére alkalmas.</li>
                    <li>A szakaszoknál a szigetelés típusa mellett a környezeti hőmérséklet is megadható.
                    A konkrét számérték helyett szimbólum is szerepelhet, a külső levegőre illetve az
                    épületen belüli hőmérsékletre, ezek értékei a projekt beállításban illetve az egyes
		    üzemállapotoknál adható meg.</li>
                    <li>Az iterációs eljárásban hiba volt, ezért gyakran divergensé válhatott.</li>
                </ul>
            </div>
        );
    }
}

export default HurkVer;