import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class WNet32Ver extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="WNet32Ver pl3 overflow-x-hidden ">
                <Helmet><title>A WaterNet32 program verziók áttekintése</title></Helmet>
                <h2>A WaterNet32 program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>2.32 -&gt; 2.33</b> (2020. február 10.)</p>
                <ul>
                    <li>A csomóponti elemekre megadott szabályok továbbfejlesztése. A csomóponti elemhez még egy további szűkítő-bővítő elem is kapcsolható, a megoldható méretkombinációk növelésére.</li>
                </ul>

                <p><b>2.31 -&gt; 2.32</b> (2020. január 07.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, az adatbázis illetve a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                    <li>A körvezetékeknél a "körben speciális szakasz található" hiba tévesen is megjelenhetett.</li>
                    <li>Egyes, a hálózatba be nem kapcsolt körvezeték záró szakaszok hibát okozhattak.</li>
                </ul>

                <p><b>2.30 -&gt; 2.31</b> (2019. november 27.)</p>
                <ul>
                    <li>A súgó fájl megnyitása nem sikerült a programból.</li>
                </ul>

                <p><b>2.23 -&gt; 2.30</b> (2019. november 22.)</p>
                <ul>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                    <li>A programból kilépéskor kérdés nélkül mentette a projektet, ha az változott.</li>
                    <li>Unicode karakterkódolás alkalmazása. Alkalmazhatók a görög és cirill betük is szövegekben. Az új verzióval a projektfájlok régebbi verzióba nem tölthetők be.</li>
                </ul>

                <p><b>2.22 -&gt; 2.23</b> (2019. június 13.)</p>
                <ul>
                    <li>A szigetelések cseréje funkció során a szigetelések új ajánlott mérete is aktualizálva lesz.</li>
                </ul>

                <p><b>2.21 -&gt; 2.22</b> (2019. április 30.)</p>
                <ul>
                    <li>A cirkulációs hálózat felépítési hibák nem jelentek meg minden esetben a hibajegyzékben.</li>
                    <li>Egyes cirkulációs hálózat hibák esetén a hálózat számítás hibaüzenet nélkül leállt.</li>
                </ul>

                <p><b>2.20 -&gt; 2.21</b> (2019. április 17.)</p>
                <ul>
                    <li>Új funkció a szigetelések cseréje, elérhető az eszközök menüben.</li>
                </ul>

                <p><b>2.12 -&gt; 2.20</b> (2018. június 28.)</p>
                <ul>
                    <li>A hálózati gráfon a cső hosszak is megjeleníthetők.</li>
                    <li>Egyedi riportok készíthetők. Ehhez külön dokumentáció tartozik.</li>
                    <li>Lehetséges problémás hardverkulcs használatkor egy adott gépre regisztrálni a programot.</li>
                </ul>

                <p><b>2.11 -&gt; 2.12</b> (2018. június 06.)</p>
                <ul>
                    <li>A program beállításokban a betűtípusok, fejléc és ablakbeállítások lapon egy nagyítást is meg lehet adni a programnak. Ennek hatására a párbeszédablakok nagyobb méretben jelennek meg.</li>
                </ul>

                <p><b>2.10 -&gt; 2.11</b> (2018. május 04.)</p>
                <ul>
                    <li>Windows 10 1803 verziójánál a hardverkulcs felismerés hibás lehetett.</li>
                    <li>Vízmérők adatainak kibővítése az adatbázisban a névleges és a minimális térfogatárammal.</li>
                </ul>
                <p><b>2.09 -&gt; 2.10</b> (2018. május 01.)</p>
                <ul>
                    <li>A hálózat számítás, bizonyos hiba esetén, hibajelzés nélkül leállt.</li>
                </ul>

                <p><b>2.08 -&gt; 2.09</b> (2018. április 25.)</p>
                <ul>
                    <li>Hálózat számítás eredmény táblázataiban az egyes csőszakaszok űrtartalma is megjeleníthető.</li>
                    <li>A program beállításokban a tervezői nyilatkozatnál aláírás kép is megadható.</li>
                </ul>

                <p><b>2.07 -&gt; 2.08</b> (2018. március 20.)</p>
                <ul>
                    <li>A nyomásfokozó, nyomáscsökkentő és a vízkezelő típusokból is lehet a melegvizes hálózathoz tartozót megadni.</li>
                    <li>A cirkulációs hálózatok beszabályozásában kisebb hiba javítása, a szükséges fojtás kijelzése.</li>
                </ul>

                <p><b>2.06 -&gt; 2.07</b> (2018. március 03.)</p>
                <ul>
                    <li>Hálózat számításban a cirkulációs körök táblázatának megnyítása nem sikerült.</li>
                </ul>

                <p><b>2.05 -&gt; 2.06</b> (2018. február 06.)</p>
                <ul>
                    <li>A projekt beállításokban a hidegvizes szakaszokra beállított értékeket (csőtípus, szigetelés, automatikus makró) használta egy új szakasz létrehozásakor, akkor is, ha melegvizes vagy cirkulációs szakaszról volt szó.</li>
                    <li>Cirkulációs szakasz hosszának megadása hibát okozott.</li>
                </ul>

                <p><b>2.04 -&gt; 2.05</b> (2018. január 24.)</p>
                <ul>
                    <li>A vízlágyító méretezésnél az egyidejű terhelésben elmaradt egy 1000-rel való osztás.</li>
                    <li>A nyomáskülönbség lekérdezésnél (dp gomb) mindig 0 Pa-t mutatott.</li>
                    <li>Hálózat számításkor mind a fogyasztók táblázatban, mind a gráfon a státusz sorban kijelzésre kerül a fogyasztókra a hidrosztatikai nyomáskülönbség a hálózat kezdőpontjához képest.</li>
                </ul>

                <p><b>2.03 -&gt; 2.04</b> (2017. december 15.)</p>
                <ul>
                    <li>Oltóvízhálózat számításának lehetősége</li>
                </ul>

                <p><b>2.02 -&gt; 2.03</b> (2017. november 06.)</p>
                <ul>
                    <li>A tartós fogyasztóknál a szakaszok tömegára esetenként hibás lehetett.</li>
                </ul>

                <p><b>2.01 -&gt; 2.02</b> (2017. november 02.)</p>
                <ul>
                    <li>Kiegészítés a 3 literes szabály szerinti ellenőrzéssel.</li>
                    <li>A cirkulációs tömegáramok ágankénti szétosztása hibás volt.</li>
                </ul>

                <p><b>2.00 -&gt; 2.01</b> (2017. október 27.)</p>
                <ul>
                    <li>Körvezeték eredmények megjelenítésének javítása a hálózat gráfban, és a táblázatos megjelenítés elkészítése.</li>
                    <li>Minimális sebesség bevezetése a projekt beállításokban. Figyelmeztetéshez alkalmazza csak a program.</li>
                    <li>A fogyasztók eredmény táblázatának kiegészítése a hideg és melegvíz fogyasztók esetén a két ág közti kifolyási nyomáskülönbség értékkel.</li>
                </ul>
            </div>
        );
    }
}

export default WNet32Ver;