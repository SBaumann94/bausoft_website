import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class SunVer extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="SunVer pl3 overflow-x-hidden ">
                <Helmet><title>A SunArch program verziók áttekintése</title></Helmet>
                <h2>A SunArch program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>1.45 -&gt; 2.00</b> (2019. november 25.)</p>
                <ul>
                    <li>Unicode karakterek alkalmazása, cirill és görög betük is alkalmazhatók.</li>
                </ul>

                <p><b>1.44 -&gt; 1.45</b> (2016. augusztus 30.)</p>
                <ul>
                    <li>A halszemoptikás képnél a diagramon szkrollozás megjelenítési hibát okozhatott.</li>
                </ul>

                <p><b>1.43 -&gt; 1.44</b> (2016. április 01.)</p>
                <ul>
                    <li>A vágólapra a metafájl mellett bitmap képként is kikerül a nappálya diagram.</li>
                    <li>A programbeállítások viselkedés lapján kérhető, hogy csak a bitmap kép legyen a vágólapra kirakva, a metafájl ne.</li>
                    <li>A halszemoptikás képnél a diagramon kívüli rész levágva.</li>
                </ul>

                <p><b>1.42 -&gt; 1.43</b> (2015. november 13.)</p>
                <ul>
                    <li>Ábrákon az adott pont adatainak a státuszbárban kijelzésénél a dátumban 8 nappal eltérő értékek jelentek meg.</li>
                </ul>

                <p><b>1.41 -&gt; 1.42</b> (2015. március 27.)</p>
                <ul>
                    <li>Táblázatok exportálásakor nem csak az Excel, hanem a Word számára is (RTF formátumban) a vágólapra kerül.</li>
                </ul>

                <p><b>1.40 -&gt; 1.41</b> (2014. december 19.)</p>
                <ul>
                    <li>Adatbázis frissítés közvetlenül a program segítségével, a Program beállítások alatt.</li>
                    <li>Az adatbázis felhasználó által való bővítése lehetségessé vált úgy, hogy nem kell a ZIP fájlba bemásolni, hanem elegendő abba a könyvtárba elhelyezni az XML fájlt. Így az adatbázis honlapról frissítése nem érinti a saját adatokat. Az adatbázis könyvtára egyszerűen megnyitható a program beállítások adatbázis lapján az útvonal nevére kattintva.</li>
                </ul>

                <p><b>1.32 -&gt; 1.40</b> (2014. június 19.)</p>
                <ul>
                    <li>Adatbázis ZIP formátumra alakítás</li>
                    <li>Új fejlesztőrendszer alkalmazása</li>
                </ul>

                <p><b>1.31 -&gt; 1.32</b> (2013. szeptember 26.)</p>
                <ul>
                    <li>Az időpontoknál alkalmazható helyi illetve zónaidő választás megszüntetve, csak a zónaidőt használja a program.</li>
                </ul>

                <p><b>1.30 -&gt; 1.31</b> (2013. május 14.)</p>
                <ul>
                    <li>Nappálya pocíció számítás kis mértékű korrekciója (deklináció számítás).</li>
                    <li>Sugárzási hozam számításnál a napfelkeltéhez illetve a napnyugtához közeli sugárzás értékek becslési módszere változott (alacsonyabb értékekkel becsülve).</li>
                </ul>

                <p><b>1.21 -&gt; 1.30</b> (2010. február 22.)</p>
                <ul>
                    <li>Új szolgáltatása a programnak, hogy induláskor ellenőrzi, hogy elérhető-e frissebb változat az interneten.</li>
                    <li>A frissítések ellenőrzése mellett, a programhoz tartozó rövid hírüzenetek is letölthetők. Ezek elsősorban az adatbázis frissülésére hívják fel a figyelmet.</li>
                    <li>Fejlesztőrendszer cseréje, a fájl dialógusok az XP szerintiek.</li>
                    <li>A súgó HTML alapúra alakítása.</li>
                </ul>

                <p><b>1.20 -&gt; 1.21</b> (2008. április 1.)</p>
                <ul>
                    <li>Pontokkal megadott takarásoknál adódhattak a megjelenítésnél hibák.</li>
                </ul>

                <p><b>1.11 -&gt; 1.20</b> (2008. március 7.)</p>
                <ul>
                    <li>Energiahozam számítás több síkra egyidejűleg, optimumkeresés.</li>
                    <li>Meteorológiai adatsorok finomítása.</li>
                </ul>

                <p><b>1.10 -&gt; 1.11</b> (2008. január 24.)</p>
                <ul>
                    <li>Energiahozam számítás eredményeinek megjelenítése diagrammal.</li>
                    <li>Az optimum keresés helyett maximum és minimum keresés is.</li>
                </ul>

                <p><b>1.01 -&gt; 1.10</b> (2007. december 10.)</p>
                <ul>
                    <li>Kiegészítés meteorológiai adatokon alapuló energiahozam számításokkal.</li>
                    <li>Normál fotók megjelenítési lehetősége.</li>
                </ul>

                <p><b>1.00 -&gt; 1.01</b> (2006. december 21.)</p>
                <ul>
                    <li>Egyes esetekben a síkokkal határolt takarás nem jelent meg.</li>
                    <li>A beesési szögek vonalainál hiányzott a 90°-hoz tartozó.</li>
                </ul>

            </div>
        );
    }
}

export default SunVer;