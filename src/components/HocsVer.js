import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class HocsVer extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="HocsVer pl3 overflow-x-hidden ">
                <Helmet><title>Hőcserélő méretező program verziók áttekintése</title></Helmet>
                <h2>Hőcserélő méretező program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>2.21 -&gt; 2.22</b> (2020. május 04.)</p>
                <ul>
                    <li>Jelszavak ellenőrző összeg számítás javítása</li>
                </ul>

                <p><b>2.20 -&gt; 2.21</b> (2019. december 16.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                </ul>

                <p><b>2.11 -&gt; 2.20</b> (2019. november 25.)</p>
                <ul>
                    <li>Táblázatokban mértékegység választási lehetőség.</li>
                    <li>Unicode karakterek alkalmazása, cirill és görög betük is alkalmazhatók.</li>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                </ul>

                <p><b>2.10 -&gt; 2.11</b> (2014. december 19.)</p>
                <ul>
                    <li>Adatbázis frissítés közvetlenül a program segítségével, a Program beállítások alatt.</li>
                    <li>Az adatbázis felhasználó által való bővítése lehetségessé vált úgy, hogy nem kell a ZIP fájlba bemásolni, hanem elegendő abba a könyvtárba elhelyezni az XML fájlt. Így az adatbázis honlapról frissítése nem érinti a saját adatokat. Az adatbázis könyvtára egyszerűen megnyitható a program beállítások adatbázis lapján az útvonal nevére kattintva.</li>
                </ul>

                <p><b>2.06 -&gt; 2.10</b> (2014. június 19.)</p>
                <ul>
                    <li>Adatbázis ZIP formátumra alakítás</li>
                    <li>Telepítés módosítás. A felhasználó AppData könyvtárába (Bausoft\Hőcserélő méretező) kerülnek az adatbázisok. A többi fájl kerül a telepítéskor megadott könyvtárba.</li>
                    <li>Új fejlesztőrendszer alkalmazása</li>
                </ul>

                <p><b>2.05 -&gt; 2.06</b> (2012. március 20.)</p>
                <ul>
                    <li>Egyes adatmegadási módok és hőmérséklet viszonyok mellett nem volt sikeres a számítás.</li>
                </ul>

                <p><b>2.04 -&gt; 2.05</b> (2010. április 6.)</p>
                <ul>
                    <li>Gőz közeg esetén nem mindegyik adatmegadási mód mellett volt sikeres a számítás.</li>
                </ul>

                <p><b>2.03 -&gt; 2.04</b> (2010. február 22.)</p>
                <ul>
                    <li>Új szolgáltatása a programnak, hogy induláskor ellenőrzi, hogy elérhető-e frissebb változat az interneten.</li>
                    <li>A frissítések ellenőrzése mellett, a programhoz tartozó rövid hírüzenetek is letölthetők. Ezek elsősorban az adatbázis frissülésére hívják fel a figyelmet.</li>
                </ul>

                <p><b>Változások a 2.02 verzióról a 2.03 verzióra </b> (2008. február 7.)</p>
                <ul>
                    <li>A variációs számításoknál a nyomásesés korlátoknál mindegy, hogy milyen dimenzió volt kiválasztva, az értékeket mindig kPa-ban értelmezte.</li>
                </ul>
            </div>
        );
    }
}

export default HocsVer;