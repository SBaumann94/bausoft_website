import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class GNet32Ver extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="GNet32Ver pl3 overflow-x-hidden ">
                <Helmet><title>A 32 bites GasNet gázhálózat méretező program verziók áttekintése</title></Helmet>
                <h2>A 32 bites GasNet gázhálózat méretező program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>2.41 -&gt; 2.42</b> (2020. február 10.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, az adatbázis illetve a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                    <li>A csomóponti elemekre megadott szabályok továbbfejlesztése. A csomóponti elemhez még egy további szűkítő-bővítő elem is kapcsolható, a megoldható méretkombinációk növelésére.</li>
                </ul>

                <p><b>2.40 -&gt; 2.41</b> (2019. november 27.)</p>
                <ul>
                    <li>A súgó fájl megnyitása nem sikerült a programból.</li>
                </ul>

                <p><b>2.31 -&gt; 2.40</b> (2019. november 22.)</p>
                <ul>
                    <li>Unicode karakterkódolás alkalmazása. Alkalmazhatók a görög és cirill betük is szövegekben. Az új verzióval a projektfájlok régebbi verzióba nem tölthetők be.</li>
                    <li>A programból kilépéskor kérdés nélkül mentette a projektet, ha az változott.</li>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                </ul>

                <p><b>2.30 -&gt; 2.31</b> (2019. március 17.)</p>
                <ul>
                    <li>Gázmérők adatbázis elemeknél megadható a terheléstől függő nyomásesés karakterisztikája.</li>
                </ul>

                <p><b>2.23 -&gt; 2.30</b> (2018. június 28.)</p>
                <ul>
                    <li>A hálózati gráfon a cső hosszak is megjeleníthetők.</li>
                    <li>Egyedi riportok készíthetők. Ehhez külön dokumentáció tartozik.</li>
                    <li>Lehetséges problémás hardverkulcs használatkor egy adott gépre regisztrálni a programot.</li>
                </ul>

                <p><b>2.22 -&gt; 2.23</b> (2018. június 06.)</p>
                <ul>
                    <li>A program beállításokban a betűtípusok, fejléc és ablakbeállítások lapon egy nagyítást is meg lehet adni a programnak. Ennek hatására a párbeszédablakok nagyobb méretben jelennek meg.</li>
                </ul>

                <p><b>2.21 -&gt; 2.22</b> (2018. május 04.)</p>
                <ul>
                    <li>Windows 10 1803 verziójánál a hardverkulcs felismerés hibás lehetett.</li>
                </ul>

                <p><b>2.20 -&gt; 2.21</b> (2018. április 25.)</p>
                <ul>
                    <li>Hálózat számítás eredmény táblázataiban az egyes csőszakaszok űrtartalma is megjeleníthető.</li>
                    <li>A program beállításokban a tervezői nyilatkozatnál aláírás kép is megadható.</li>
                </ul>

                <p><b>2.12 -&gt; 2.20</b> (2018. április 11.)</p>
                <ul>
                    <li>Nyomtatásnál kérhető tervezői nyilatkozat a végére.</li>
                    <li>A szakaszokra és a mérőkre megjeleníthető a teljes térfogatáram, egyidejűség figyelembevétele nélkül.</li>
                    <li>Projekt adatok külön is a vágólapra tehetők, más Bausoft programok számára, illetve az adatok beilleszthetők.</li>
                    <li>Új fejlesztőrendszer alkalmazása.</li>
                </ul>

                <p><b>2.11 -&gt; 2.12</b> (2014. december 19.)</p>
                <ul>
                    <li>Adatbázis frissítések kezelése a programból. Az adatbázisok karbantartása ablakban lehetőség van közvetlenül a honlapon lévő adatbázis archívumokból adatokat betölteni.</li>
                    <li>A projekt adatoknál az egyszerűsített adatmegadási mód eltüntetése az új projektekre.</li>
                    <li>Hálózati gráfban adott csomópont névre ugrás</li>
                </ul>

                <p><b>2.10 -&gt; 2.11</b> (2014. június 19.)</p>
                <ul>
                    <li>Adatbázis telepítési helyének megválaszthatósága</li>
                </ul>

                <p><b>2.02 -&gt; 2.10</b> (2014. május 28.)</p>
                <ul>
                    <li>Struktúrált listában is lehet keresni</li>
                    <li>Alaki ellenállások közt keresés funkció</li>
                    <li>-j fejlesztőrendszer alkalmazása</li>
                    <li>-j telepítési struktúra alkalmazása</li>
                </ul>

                <p><b>2.01 -&gt; 2.02</b> (2013. május 9.)</p>
                <ul>
                    <li>Ha egy szakaszra kapcsolódó tartós fogyasztók száma átlépte a 15-öt, rosszul határozta meg a progrm az egyidejű teljesítményt.</li>
                    <li>Az új verzió ellenőrzés hiba esetén felajánlja a funkció kikapcsolását (egy másodk indításkor).</li>
                    <li>A fájl mentés másként hiba javítása.</li>
                    <li>A projekt adminisztratív adatok kiterjesztése. A rovatonként megadott adatokból, ha az egyszerűen mód szerinti mezőt üresen hagyjuk, az is elkészül.</li>
                    <li>A program beállításokban megadható tervezőre vonatkozó adatok is megadhatók részletezve.</li>
                    <li>Dátum mezőknél nyomógomb az aktuális dátum beírásához.</li>
                    <li>Táblázatok exportjánál az Excelben a számokat nem kell külön átalakítani szövegből.</li>
                    <li>Keresés, helyettesítés funkcióban a * karakter 0 karakter is lehet.</li>
                </ul>

                <p><b>2.00 -&gt; 2.01</b> (2012. március 6.)</p>
                <ul>
                    <li>A megjegyzett projektnevek száma 9-re emelve.</li>
                    <li>A számok bevitelére használt mezőkbe aritmetikai kifejezés is írható, a négy alapművelet és a zárójelek használata (csak a kerek) lehetséges.</li>
                    <li>Projektfájl kezelésben módosítás, a program belső működését érinti.</li>
                    <li>A hálózat számítás dokumentálásakor, a fogyasztók táblázata, kiegészült a közegre vonatkozó adatokkal.</li>
                </ul>
            </div>
        );
    }
}

export default GNet32Ver;