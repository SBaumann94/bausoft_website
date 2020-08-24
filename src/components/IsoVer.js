import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class IsoVer extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="IsoVer pl3 overflow-x-hidden ">
                <Helmet><title>ISO-bau szigetelés kiválasztó program verziók áttekintése</title></Helmet>
                <h2>ISO-bau szigetelés kiválasztó program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>2.00 -&gt; 2.01</b> (2020. május 05.)</p>
                <ul>
                    <li>A program beállításokban az ár adatok átmásolhatók Excelbe és onnan visszamásolhatók a programba</li>
                </ul>

                <p><b>1.13 -&gt; 2.00</b> (2019. november 25.)</p>
                <ul>
                    <li>Unicode karakterek alkalmazása, cirill és görög betük is alkalmazhatók.</li>
                </ul>

                <p><b>1.12 -&gt; 1.13</b> (2018. május 08.)</p>
                <ul>
                    <li>Projekt adatok külön is a vágólapra tehetők, más Bausoft programok számára, illetve az adatok beilleszthetők.</li>
                    <li>Optimum számításnál a szigetelés árát nem a megfelelő méret alapján vette az adatbázisból.</li>
                </ul>

                <p><b>1.11 -&gt; 1.12</b> (2015. március 02.)</p>
                <ul>
                    <li>Nyomtatáskor hibásan formázó szövegek jelentek meg</li>
                </ul>

                <p><b>1.10 -&gt; 1.11</b> (2014. december 19.)</p>
                <ul>
                    <li>Adatbázis frissítés közvetlenül a program segítségével, a Program beállítások alatt.</li>
                    <li>Az adatbázis felhasználó által való bővítése lehetségessé vált úgy, hogy nem kell a ZIP fájlba bemásolni, hanem elegendő abba a könyvtárba elhelyezni az XML fájlt. Így az adatbázis honlapról frissítése nem érinti a saját adatokat. Az adatbázis könyvtára egyszerűen megnyitható a program beállítások adatbázis lapján az útvonal nevére kattintva.</li>
                </ul>

                <p><b>1.05 -&gt; 1.10</b> (2014. június 19.)</p>
                <ul>
                    <li>Adatbázis ZIP formátumra alakítás</li>
                    <li>Telepítés módosítás. A felhasználó AppData könyvtárába (Bausoft\ISO-bau könyvtárba) kerülnek az adatbázisok és a Dokumentumok könyvtárba (ISO-bau alkönyvtárba) a példa projektek. A többi fájl kerül a telepítéskor megadott könyvtárba.</li>
                    <li>Struktúrált elemlistában is lehet keresni</li>
                    <li>Új fejlesztőrendszer alkalmazása</li>
                </ul>

                <p><b>1.02 -&gt; 1.05</b> (2014. január 6.)</p>
                <ul>
                    <li>Belső hőátadási tényező számítási módjának felhasználó által megadott esetre, légcsatorna esetén nem volt lehetséges a számítás.</li>
                    <li>Kör keresztmetszet esetén a hőveszteség értéke, ha a tömegáram nem volt ismert, a számított veszteség hibásan a felülettel is meg lett szorozva.</li>
                    <li>Nyomtatáskor a projekt adatok nem jelentek meg, a nyomtatási opciók rosszul voltak kezelve.</li>
                </ul>

                <p><b>1.01 -&gt; 1.02</b> (2010. március 22.)</p>
                <ul>
                    <li>Többrétegű szigetelések kezelése.</li>
                    <li>A szigetelések hővezetési tényezőjét az aktuális hőfokhoz igazítva állapítja meg, korábban egyszerűen a közeg és a külső levegő hőmérsékletének átlagával számolt.</li>
                    <li>Az anyagjellemzők közelítésénél a közelítő függvények értelmezési tartományán kívül eső értékekre a tartomány határán érvényes értékeket veszi fel.</li>
                </ul>

                <p><b>1.00 -&gt; 1.01</b> (2010. február 22.)</p>
                <ul>
                    <li>Új szolgáltatása a programnak, hogy induláskor ellenőrzi, hogy elérhető-e frissebb változat az interneten.</li>
                    <li>A frissítések ellenőrzése mellett, a programhoz tartozó rövid hírüzenetek is letölthetők. Ezek elsősorban az adatbázis frissülésére hívják fel a figyelmet.</li>
                </ul>


            </div>
        );
    }
}

export default IsoVer;