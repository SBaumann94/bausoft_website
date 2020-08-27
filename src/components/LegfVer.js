import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class LegfVer extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="LegfVer pl3 overflow-x-hidden ">
                <Helmet><title>Légforgalom számító program verziók áttekintése</title></Helmet>
                <h2>Légforgalom számító program verziók áttekintése</h2>
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

                <p><b>2.00 -&gt; 2.01</b> (2020. január 07.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, az adatbázis illetve a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                    <li>A szakaszoknál csak az egyik kapcsolódási pontot lehetett megadni (2.0 verzióban)</li>
                </ul>

                <p><b>1.22 -&gt; 2.00</b> (2019. november 25.)</p>
                <ul>
                    <li>Táblázatokban mértékegység választási lehetőség.</li>
                    <li>Unicode karakterek alkalmazása, cirill és görög betük is alkalmazhatók.</li>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                    <li>A hálózat gráf megjelenítő ablakban van lehetőség részlet nagyításra, külön ablakban.</li>
                </ul>

                <p><b>1.21 -&gt; 1.22</b> (2015. március 18.)</p>
                <ul>
                    <li>Légbeeresztők jelleggörbéje a negatív tartományban a határértéknél magasabb térfogatáramnál rosszul lett közelítve.</li>
                </ul>

                <p><b>1.20 -&gt; 1.21</b> (2014. december 19.)</p>
                <ul>
                    <li>Adatbázis frissítések kezelése a programból. Az adatbázisok karbantartása ablakban lehetőség van közvetlenül a honlapon lévő adatbázis archívumokból adatokat betölteni.</li>
                </ul>

                <p><b>1.01 -&gt; 1.20</b> (2014. június 19.)</p>
                <ul>
                    <li>Új fejlesztőrendszer alkalmazása</li>
                    <li>Telepítés módosítás. A felhasználó AppData könyvtárába (Bausoft\Légforgalom könyvtárba) kerülnek az adatbázisok és a Dokumentumok könyvtárba (Légforgalom) a példa projektek. A többi fájl kerül a telepítéskor megadott könyvtárba.</li>
                    <li>Struktúrált elemlistában is lehet keresni</li>
                </ul>

                <p><b>1.00 -&gt; 1.01</b> (2012. április 13.)</p>
                <ul>
                    <li>Számításhoz rendelt képfájlokat nem csak a megadott útvonalon, hanem a projektfájl útvonalán is keresi a megjelenítéshez.</li>
                </ul>
            </div>
        );
    }
}

export default LegfVer;