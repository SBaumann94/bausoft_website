import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class ChmVer extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="ChmVer pl3 overflow-x-hidden ">
                <Helmet><title>A CHM-BAU program verziók áttekintése</title></Helmet>
                <h2>A CHM-BAU program verziók áttekintése</h2>
                <h3><Link to="/public/Chmbau32.html">32 bites verzió</Link></h3>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>3.20 -&gt; 3.21</b> (2020. március 2.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                    <li>A szakaszoknál új keresztmetszet típus bevezetése. Kör égéstermék csatorna belül kör, kívül négyszög légcsatornában.</li>
                </ul>

                <p><b>3.13 -&gt; 3.20</b> (2019. október 04.)</p>
                <ul>
                    <li>Unicode karakterkódolás alkalmazása. Alkalmazhatók a görög és cirill betük is szövegekben. Az új verzióval a projektfájlok régebbi verzióba nem tölthetők be.</li>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                    <li>A kémény ventilátorok illetve injektorok jelleggörbéje megjeleníthető a számítási variációknál.</li>
                    <li>A program használható illetve a nyomtatások készíthetők angol nyelven is.</li>
                    <li>Táblázatokban mértékegység választási lehetőség.</li>
                </ul>

                <p><b>3.12 -&gt; 3.13</b> (2018. december 05.)</p>
                <ul>
                    <li>Ha új lapra került volna nyomtatáskor a tervezői nyilatkozat, nem jelent meg minden esetben.</li>
                </ul>

                <p><b>3.11 -&gt; 3.12</b> (2018. november 27.)</p>
                <ul>
                    <li>A 3.11 verzióban a nyomtatáskor nem jelent meg a tervezői nyilatkozat.</li>
                </ul>

                <p><b>3.10 -&gt; 3.11</b> (2018. november 26.)</p>
                <ul>
                    <li>Nyomtatáskor megjegyzés és fényképek csatolhatók a dokumentációba.</li>
                </ul>

                <p><b>3.09 -&gt; 3.10</b> (2018. június 28.)</p>
                <ul>
                    <li>Lehetséges problémás hardverkulcs használatkor egy adott gépre regisztrálni a programot.</li>
                </ul>

                <p><b>3.08 -&gt; 3.09</b> (2018. június 06.)</p>
                <ul>
                    <li>A program beállításokban a betűtípusok, fejléc és ablakbeállítások lapon egy nagyítást is meg lehet adni a programnak. Ennek hatására a párbeszédablakok nagyobb méretben jelennek meg.</li>
                </ul>

                <p><b>3.07 -&gt; 3.08</b> (2018. május 04.)</p>
                <ul>
                    <li>Windows 10 1803 verziójánál a hardverkulcs felismerés hibás lehetett.</li>
                </ul>

                <p><b>3.06 -&gt; 3.07</b> (2018. április 21.)</p>
                <ul>
                    <li>A program beállításokban megadható egyedi tervezői nyilatkozat a számítás végére.</li>
                    <li>A program beállítások a tervezői nyilatkozatnál aláírás kép is megadható.</li>
                    <li>A belépési veszteség számításnál, légcsatorna esetén, az égéstermék elvezető rendszerek adatbázisa is használható az elemek kiválasztásakor.</li>
                    <li>A készülék ventilátorának a nyomása a dokumentáláskor csak abban az esetben kerül megjelenítésre, ha a számításkor azt használja.</li>
                </ul>

                <p><b>3.05 -&gt; 3.06</b> (2018. március 23.)</p>
                <ul>
                    <li>Megadható a tengerszint feletti magasság. Ilyen esetben a variációknál a légköri nyomás ez alapján számítódik az adott külső hőmérsékletre.</li>
                </ul>

                <p><b>3.03 -&gt; 3.05</b> (2018. március 20.)</p>
                <ul>
                    <li>Hardverkulcs lokális kezelési módjának bevezetése a viselkedésben.</li>
                </ul>

                <p><b>3.02 -&gt; 3.03</b> (2017. november 10.)</p>
                <ul>
                    <li>Hibajelzések bővítése. Hibajelzés, ha egyetlen készülék sincs bekapcsolva, vagy az égéstermék számítás egy készülékre nem történt meg, és hiányzik az égéstermék összetétele.</li>
                    <li>A belépési veszteség számításra új összetett mód bevezetése. Ezzel kombinálhatók a korábbi módok, illetve egy közbenső tér alkalmazásával sorba is köthetők légbevezető szakaszok.</li>
                </ul>

                <p><b>3.01 -&gt; 3.02</b> (2017. augusztus 15.)</p>
                <ul>
                    <li>A számítás a 3.01 verzióval nem futott le mindig, ha a variációnál a 0.5 m-nél hosszabb szakaszok feldarabolása be volt kapcsolva.</li>
                    <li>Az egyes szekciókra összegzi a benne lévő szakaszokra a vezetési hosszt és a magasságot.</li>
                </ul>

                <p><b>3.00 -&gt; 3.01</b> (2017. július 31.)</p>
                <ul>
                    <li>Turbo készüléknél a szilárd tüzelőanyagokat az EU-Norm szerinti számításnál, ha újra beléptünk a számításába, mindig visszaállította földgázra.</li>
                    <li>Adatbázisban az elem ellenállás számítására új lehetőség kialakítása.</li>
                </ul>

                <p><b>2.66 -&gt; 3.00</b> (2017. március 10.)</p>
                <ul>
                    <li>Projekt adatok külön is a vágólapra tehetők, más Bausoft programok számára, illetve az adatok beilleszthetők.</li>
                    <li>Az eredmények megjelenítésénél esetleg akkor is megjelenhetett a készüléknél ventilátor nyomás, ha arra a készülékre az nem is érvényes. A számítást nem érintette.</li>
                    <li>A közeg (égéstermék, levegő) fizikai jellemzőinek (sűrűség, hővezetési tényező, viszkozitás, fajhő) számításában kis hiba volt, ami néhány százalékos eltérést eredményezett.</li>
                    <li>A belső oldali hőátadási tényezőnél, hogy mikor kell a kondenzáció miatt kompenzációt alkalmazni, nem volt minden esetben teljesen jó.</li>
                    <li>Az EU-NORM szerinti égéstermék számításnál a fa illetve pellett tüzelőanyagok esetén megszünt a savasság miatti kondenzációs hőmérséklet növekmény (B1 táblázat). (2015-ös szabvány)</li>
                    <li>Az EU-NORM szerinti égéstermék számításnál a B1. táblázatban új oszlopok, fR1 és fR2. (2015-ös szabvány)</li>
                    <li>B5 táblázatban a hővezetési tényezőkre hőmérséklettől függő értékek, új oszlop a sugárzási tényező. (2015-ös szabvány)</li>
                    <li>D melléklet a közepes gázállandó (R) meghatározására a kondenzáció figyelembe vételével. (2015-ös szabvány)</li>
                    <li>Cső a csőben rendszereknél a hosszabb szakaszoknak maximum fél méteres egységekre felbontása automatikusan a számításkor. A számítási variációknál a speciális fülön kapcsolható be. (2015-ös szabvány)</li>
                    <li>Cső a csőben rendszereknél a számított sugárzásos hőcserén alapuló számítás lehetősége. A számítási variációknál a speciális fülön kapcsolható be. (2015-ös szabvány)</li>
                </ul>

                <p><b>2.65 -&gt; 2.66</b> (2015. július 01.)</p>
                <ul>
                    <li>Iterációs számítás javítása.</li>
                </ul>

                <p><b>2.64 -&gt; 2.65</b> (2014. december 11.)</p>
                <ul>
                    <li>Az adatbázis felhasználó által való bővítése lehetségessé vált úgy, hogy nem kell a ZIP fájlba bemásolni, hanem elegendő abba a könyvtárba elhelyezni az XML fájlt. Így az adatbázis honlapról frissítése nem érinti a saját adatokat. Az adatbázis könyvtára egyszerűen megnyitható a program beállítások adatbázis lapján az útvonal nevére kattintva.</li>
                    <li>Új telepítéskor a jelszó megadás nem volt lehetséges a 2.64 verzióban.</li>
                </ul>

                <p><b>2.63 -&gt; 2.64</b> (2014. december 08.)</p>
                <ul>
                    <li>Négyszög keresztmetszetű kémények is többrétegűen kezelhetők.</li>
                    <li>Ha a telepítéskor minden felhasználó számára telepítettük az adatbázist, a sztöchiometriához rendelkezésre álló tüzelőanyagok adatbázisa nem volt elérhető.</li>
                    <li>A szakaszok adatbázisból való kiválasztása két részre lett osztva, először a típust, majd ezt követően a méretet külön rovatban lehet kiválasztani. A lista túl nagy mérete és ennek feltöltési lassúsága miatt történt a szétválasztás.</li>
                    <li>Adatbázis frissítés közvetlenül a program segítségével, a Program beállítások alatt.</li>
                </ul>

                <p><b>2.62 -&gt; 2.63</b> (2014. június 23.)</p>
                <ul>
                    <li>Egyes készülékek adatbázisból kiválasztásával probléma volt. (Ha az útvonal mélyebb volt, nem találta meg a gyártmányt.)</li>
                </ul>

                <p><b>2.61 -&gt; 2.62</b> (2014. június 19.)</p>
                <ul>
                    <li>Azonos csoportnevű, de más gyártóhoz tartozó készülékek kiválasztása a struktúrált listából nem működött helyesen (ARISTON - Fondital).</li>
                </ul>

                <p><b>2.60 -&gt; 2.61</b> (2014. június 02.)</p>
                <ul>
                    <li>Adatbázis elérési útvonal módosíthatóság registry bejegyzéssel. A program registry csoportjában egy szöveges kulcs, aminek a neve DatabaseDir megadható az eredetitől eltérő adatbázis útvonal, pl: C:\tmp\data\</li>
                    <li>A számítási variációknál alapesetben bekapcsolva, hogy a tu hőmérséklet a nyomásfeltételnél is a szimbólum szerint legyen.</li>
                </ul>

                <p><b>2.50 -&gt; 2.60</b> (2014. május 24.)</p>
                <ul>
                    <li>Az adatbázisban azonos elnevezésű, de különböző csoportokba lévő elemek ütköztek</li>
                    <li>A szélnyomás dokumentálása több készülékes túlnyomásos kémény esetén hiányzott</li>
                    <li>Jelszó megadására szolgáló ablak átalakítása</li>
                    <li>Adatbázis ZIP formátumra alakítás. A korábbi külön XML fájlok egy ZIP fájlba helyezve.</li>
                    <li>Fejlesztőrendszer váltás</li>
                    <li>Telepítés módosítás. A felhasználó AppData könyvtárába (Bausoft\CHM-BAU könyvtárba) kerülnek az adatbázisok és a Dokumentumok könyvtárba (CHM-BAU könyvtárba) a példa projektek. A többi fájl kerül a telepítéskor megadott könyvtárba.</li>
                    <li>Ha más nyelven lett a projekt létrehozva, a szimbólikus hőmérsékleteket nem tudta kezelni.</li>
                    <li>Több nyelvű adatbázis kezelés</li>
                    <li>Kódolt nyelvi fájlok fogadásának kidolgozása</li>
                    <li>Hardverkulcs időnkénti ellenőrzése</li>
                    <li>Struktúrált elemlistában is lehet keresni</li>
                </ul>

                <p><b>2.47 -&gt; 2.50</b> (2013. november 18.)</p>
                <ul>
                    <li>Táblázatok exportjánál az Excelben a számokat nem kell külön átalakítani szövegből.</li>
                    <li>A számok bevitelére használt mezőkbe aritmetikai kifejezés is írható, a négy alapművelet és a zárójelek használata (csak a kerek) lehetséges.</li>
                    <li>A programbeállítások betűtípusok lapján két új nyomógomb került, amikkel a Windows regisztrációs adatbázisában tárolt információk (fejléc beállítások illetve ablak méretek, pozíciók) törölhetők.</li>
                    <li>Turbo készülékeknél a szilárd tüzelőanyagok is alkalmazhatók.</li>
                </ul>
                <p><b>2.46 -&gt; 2.47</b> (2011. október 17.)</p>
                <ul>
                    <li>Számítás után a készülékeken végrehajtott módosításokat nem vette figyelembe.</li>
                </ul>
                <p><b>2.45 -&gt; 2.46</b> (2011. október 5.)</p>
                <ul>
                    <li>Módosítások visszavonása funkció megvalósítása, a szerkesztés menüben érhető el.</li>
                    <li>A tüzelőberendezés légbevezetésnél megadható kiegészítő légmennyiség, amit a belépési veszteség számításnál használ a program. Ezzel egy másik kémény égési levegő igénye vehető figyelembe a belépési veszteség számításakor.</li>
                    <li>Nyomtatáskor megadható egy egyedi ábra képfájl, amit a program által generált séma helyett fog kinyomtatni.</li>
                    <li>Szakasz adatoknál egyedi adatmegadáskor megadható egy hőmérséklet csökkenés, amit a program a kilépő hőmérsékletből levon. Ezzel modellezhető például az égéstermék elvezető rendszerbe épített hővisszanyerő.</li>
                    <li>Tüzelőberendezésnél az égéstermék tömegáram referenciaérték az égéstermék számításból, egy nyomógomb segítségével átvehető.</li>
                    <li>Szakaszoknál a listába a szakasz megnevezés is megjeleníthető.</li>
                </ul>
                <p><b>2.44 -&gt; 2.45</b> (2011. június 16.)</p>
                <ul>
                    <li>Több készülék esetén, ha az égéstermék számítása eltérő volt, hibát okozhatott.</li>
                    <li>Szakaszok kiválasztására szolgáló ablakban a szakaszok lista mérete megnövelhető.</li>
                </ul>
                <p><b>2.43 -&gt; 2.44</b> (2011. január 3.)</p>
                <ul>
                    <li>A belépési veszteség számítás iteráció javítása, a programon belül kijelzett térfogatáram időnként hibás lehetett.</li>
                </ul>
                <p><b>2.42 -&gt; 2.43</b> (2010. május 31.)</p>
                <ul>
                    <li>A számításnál, ha az égésterméket alkotó összetevők száma megnövekedett, tömb túlindexelési hiba keletkezhetett.</li>
                </ul>

                <p><b>2.41 -&gt; 2.42</b> (2010. február 22.)</p>
                <ul>
                    <li>A frissítések ellenőrzése mellett, a programhoz tartozó rövid hírüzenetek is letölthetők. Ezek elsősorban az adatbázis frissülésére hívják fel a figyelmet.</li>
                </ul>

                <p><b>2.40 -&gt; 2.41</b> (2010. január 11.)</p>
                <ul>
                    <li>Projekt megnyitás a fájlkezelőből esetén az adatbázis nem volt esetleg elérhető.</li>
                    <li>Új szolgáltatása a programnak, hogy induláskor ellenőrzi, hogy elérhető-e frissebb változat az interneten.</li>
                </ul>

                <p><b>2.31 -&gt; 2.40</b> (2009. november 23.)</p>
                <ul>
                    <li>Projekt megnyitás a fájlkezelőből, ha a chm kiterjesztéshez a programot hozzárendeltük.</li>
                    <li>Fejlesztőrendszer cseréje, a fájl dialógusok az XP szerintiek.</li>
                </ul>
                <p><b>2.30 -&gt; 2.31</b> (2008. március 3.)</p>
                <ul>
                    <li>Sok készülékes gyűjtőkéménynél előfordulhatott, hogy a nyomtatáskor a lapra tördelés nem sikerült, és üres lapokat nyomtatott.</li>
                </ul>
                <p><b>2.29 -&gt; 2.30</b> (2007. szeptember 30.)</p>
                <ul>
                    <li>Danfoss SuperPro kulcs kezelése.</li>
                </ul>
                <p><b>2.28 -&gt; 2.29</b> (2007. július 25.)</p>
                <ul>
                    <li>Szétválasztott  LAS kéménynél a levegő oldali szakaszoknál az ellenállástényező értéke a táblázatban nem jelent meg, de számolt vele.</li>
                    <li>Több készülékes esetben a szélnyomás értéke a nyomtatásban nem jelent meg.</li>
                </ul>
                <p><b>2.27 -&gt; 2.28</b> (2006. december 1.)</p>
                <ul>
                    <li>Projekt megnyitáskor a kapcsolási séma nem jelent meg automatikusan.</li>
                    <li>Nyomtatáskor kérhető a végére tervezői nyilatkozat, hogy a szabvány szerint készült a számítás.</li>
                </ul>
                <p><b>2.26 -&gt; 2.27</b> (2006. szeptember 6.)</p>
                <ul>
                    <li>Utolsó négy projekt megjegyzése és felkínálása a megnyitásra a fájl menüben.</li>
                    <li>Nyomtatáskor, csak bizonyos lapok nyomtatását kérve az utolsó lap nyomtatását az utolsó előttire vonatkozóan döntötte el a program.</li>
                    <li>Több készülékes esetben, ha volt kikapcsolt készülék is, a nyomtatáskor az egyik adat előállításakor hibával megszakadhatott a nyomtatás.</li>
                </ul>
                <p><b>2.25 -&gt; 2.26</b> (2006. június 23.)</p>
                <ul>
                    <li>Az égéstermék EU NORM szerinti számításánál, ha a légellátási tényező szerinti számítást kértük, és az egyik érték 1 alatti volt, a folyamatos hibajelzés miatt nehéz volt továbblépni.</li>
                </ul>
                <p><b>2.24 -&gt; 2.25</b> (2006. június 15.)</p>
                <ul>
                    <li>Az égéstermék EU NORM szerinti számításánál is lehet a légellátási tényező megadásával számolni.</li>
                    <li>A program beállításoknál a viselkedés lapon kérhető, hogy a projekt adatoknál illetve az egyes variációknál megadott megjegyzések is nyomtatásra kerüljenek.</li>
                    <li>Injektorok, kéményventillátorok kezelése.</li>
                    <li>Légbeeresztők diagramon kívüli térfogatáramokra az utolsó ismert ponton átfektetett parabolával van közelítve.</li>
                </ul>
                <p><b>2.23 -&gt; 2.24</b> (2006. április 27.)</p>
                <ul>
                    <li>A keresztmetszet típusának változtatásakor, LAS szakasz esetén nem mindig jelent meg a frisslevegő ághoz tartozó ellenállástényező rovata.</li>
                    <li>Előfordulhatott, hogy az iterációs számítás, minden hibajelzés nélkül azonnal leállt.</li>
                </ul>
                <p><b>2.22 -&gt; 2.23</b> (2006. március 20.)</p>
                <ul>
                    <li>Szétválasztott LAS rendszernél a
                    kilépési falhőmérséklet
                    meghatározásnál a frisslevegő ág
                    miatt hibásan 0 °C-os
                        falhőmérsékletet számolhatott.</li>
                </ul>
                <p><b>2.21 -&gt; 2.22</b> (2006. január 28.)</p>
                <ul>
                    <li>Több készülékes esetben a
                    tüzelőanyagoknál a kondenzációs
                    hőmérséklet növekmény (elsősorban
                    szilárd és folyékony
                    tüzelőanyagnál) kezelése hibás volt,
                    így a kondenzációs hőmérséklet
                        rosszul lett kiszámítva.</li>
                    <li>Az egyes szakaszoknál a külső
                    falhőmérséklet is kijelezhetővé
                    vált, elsősorban a tűzvédelmi
                        ellenőrzések céljából.</li>
                    <li>Nyomtatáskor a gázkészülékeknél, ha
                    a minimális teljesítmény adatok is ki
                    lettek töltve, a légfelesleg tényező
                    kiírásánál hibásan egy m3/h
                        dimenzió is megjelent.</li>
                </ul>
                <p><b>2.20 -&gt; 2.21</b> (2006. január 9.)</p>
                <ul>
                    <li>Ha az egyes számítási variációknál
                    eltérő szélnyomás értékeket adtunk
                    meg, az értékelésnél nem biztos, hogy
                    a megfelelő értékkel számolt (mindig
                    a variációs listában utoljára
                    kiválasztott értékét használta
                        mindegyik számításnál).</li>
                </ul>
                <p><b>2.19 -&gt; 2.20</b> (2005. december 15.)</p>
                <ul>
                    <li>A számítási variációk
                    adatmegadásánál egy új lap jelent
                        meg, <em>speciális</em> elnevezéssel.
                        Ide kerültek át egyes opciók az
                        alapértékek lapról, illetve itt
                        hangolhatók finomabban az alkalmazott
                        iterációk. Számításkor megjelenik
                        egy új státusz kijelző ablak, ahol
                        egyrészről visszajelzést kapunk az
                        iterációs számítások állapotáról,
                        másrészt leállíthatjuk a
                        számítást.</li>
                </ul>
                <p><b>2.18 -&gt; 2.19</b> (2005. december 8.)</p>
                <ul>
                    <li>LAS kéményeknél az égéstermék ág
                    és a frisslevegő ág közti, valamint a
                    frisslevegő ág és a környezet közti
                    energiaátadás számításánál, az
                    egyensúlyi hőmérsékletek
                    meghatározásánál a hőátbocsátási
                    tényezők nem a belső felület
                    értékével, amihez tartoznak, hanem a
                    külső felületekkel szorzódtak. E
                    miatt egy kicsit nagyobb lehűlések
                        adódtak a ténylegesnél.</li>
                </ul>
                <p><b>2.17 -&gt; 2.18</b> (2005. november 29.)</p>
                <ul>
                    <li>Az elrendezés módosításakor
                    (tüzelőberendezés beszúrásakor)
                    hibás séma adódhatott. A hibát úgy
                    lehetett felismerni, hogy a kiválasztott
                    elem bemenő adatai lapon a
                    kapcsolódásokat leíró információ
                    nem volt összhangban az ábrával. Az
                    ilyen sérült projekteket közvetlenül
                    nem lehet javítani. Azonban kétszer
                    elindítva a programot, az egyikbe a
                    rossz projektet betöltve, a másikban a
                    jó elrendezést létrehozva, az egyes
                    elemek adatai a másolás és
                    beillesztés parancsok ismétlésével
                        átemelhetők.</li>
                </ul>
                <p><b>2.16 -&gt; 2.17</b> (2005. november 4.)</p>
                <ul>
                    <li>A számítási variációknál
                    előírható, hogy egy készülékes
                    esetben is keresse meg a munkapontot
                        iterációval.</li>
                    <li>Ha a készüléknél az égéstermék
                    tömegárama kisebb, mint a megadott
                    referencia tömegáram, mostantól nem
                    számolja át az égéstermék
                    hőmérsékletet és a készülék
                    huzatigényt. Erre azért volt szükség,
                    mert ha átváltottunk az égéstermék
                    meghatározásnál a sztöchiometriai
                    számítás módra, amivel általában
                    kisebb tömegáram adódik, akkor
                    megnövelt égéstermék
                    hőmérséklettel és lecsökkentett
                        készülék huzatigénnyel számolt.</li>
                    <li>Engedélyezi a számítást túlnyomásos
                    kéményként is az olyan, több
                    készülékes elrendezésre is, aminek
                    csak egy kéménybe becsatlakozása van,
                    azaz a készülékek a csatlakozó
                        vezetéken vannak közösítve.</li>
                </ul>
                <p><b>2.15 -&gt; 2.16</b> (2005. október 22.)</p>
                <ul>
                    <li>A számítás elindítása után,
                    előfordulhatott, hogy semmilyen
                    eredmény nem jelent meg. Ez a hiba az
                    utolsó két verziónál fordulhatott
                        elő.</li>
                </ul>
                <p><b>2.14 -&gt; 2.15</b> (2005. október 13.)</p>
                <ul>
                    <li>Szakaszadatok megadásánál, kör
                    keresztmetszetű adatokból kiindulva,
                    majd négyszög keresztmetszet típusra
                    váltva, a számításkor az ellenőrzés
                    olyankor is hibás adat hibajelzést
                        adhatott, amikor az nem volt jogos.</li>
                    <li>Az iterációs számítások
                        konvergenciájának javítása.</li>
                </ul>
                <p><b>2.13 -&gt; 2.14</b> (2005. október 9.)</p>
                <ul>
                    <li>A számítási variaciók adatai
                    kiegészült egy új adattal, amivel a
                    program által végzett iterációk
                    száma megnövelhető. Ezzel néhány
                    olyan eset, ami a nagyon lassú
                    konvergencia miatt nem volt
                    kiszámolható (előírt hiba mellett),
                    az hosszab számítással még
                        javítható.</li>
                </ul>
                <p><b>2.12 -&gt; 2.13</b> (2005. szeptember 24.)</p>
                <ul>
                    <li>A légcsatornaméretezéses belépési
                    veszteség számításnál, egyedi
                    négyszög keresztmetszetű szakasz
                    esetén a kiírásoknál az a*b méret
                    helyett a*a jelent meg, de a számítás
                    a tényleges a*b keresztmetszetre
                        történt.</li>
                </ul>
                <p><b>2.11 -&gt; 2.12</b> (2005. szeptember 17.)</p>
                <ul>
                    <li>Iterációs számításnál a
                    logaritmikus hőmérsékletkülönbség
                    számításánál jelentkező, a
                    logaritmus függvény értelmezési
                    tartományán kívüli érték által
                    generált hiba (domain error)
                        kiküszöbölése.</li>
                </ul>
                <p><b>2.10 -&gt; 2.11</b> (2005. szeptember 14.)</p>
                <ul>
                    <li>Az égéstermék EU-NORM szerinti
                    számításánál, a PB gáznál a
                    fűtőérték dimenziója és a
                    számított fogyasztás érték hibás
                    volt. Ennek a kémény számítására
                        nem volt hatása.</li>
                </ul>
                <p><b>2.09 -&gt; 2.10</b> (2005. június 24.)</p>
                <ul>
                    <li>Négyszög keresztmetszetű szakaszok
                    hőátbocsátási tényezőjének
                        számítása hibás volt.</li>
                </ul>
                <p><b>2.08 -&gt; 2.09</b> (2005. június 20.)</p>
                <ul>
                    <li>Ráépülő kémény esetében a
                    készülék nyomásigényét rosszul
                        korrigálta (a 2.08 verzióban csak).</li>
                </ul>
                <p><b>2.07 -&gt; 2.08</b> (2005. június 14.)</p>
                <ul>
                    <li>Több készülékes kéményeknél a
                    ventilátorral fedezhető nyomás
                    összegzésnél (a készüléktől a
                    becsatlakozásig lévő részek) a
                    negatív nyomásesések (T
                    becsatlakozásnál az átmenő ág
                    megszívja a becsatlakozást) nem volt
                    beleszámítva, ez az iterációs
                        számításnál zavart okozhatott.</li>
                </ul>
                <p><b>2.06 -&gt; 2.07</b> (2005. május 30.)</p>
                <ul>
                    <li>A belépési veszteség számítási
                    módjának változtatásakor nem
                    frissítette a listákat azonnal
                    (légcsatorna elemek, réstényezők,
                        légbeeresztők).</li>
                </ul>
                <p><b>2.05 -&gt; 2.06</b> (2005. május 21.)</p>
                <ul>
                    <li>Tüzelőberendezések másolás és
                    beillesztés funkcióval a belépési
                    veszteségnél az egy légtérhez
                        tartozás hibássá válhatott.</li>
                    <li>Ha több különböző légbeeresztő
                    szerepelt egy tüzelőberendezésnél,
                    akkor azok belépési veszteség
                        számítása hibás lehetett.</li>
                    <li>A becsatlakozó elem adatainak
                        ellenőrzése szigorúbb lett.</li>
                </ul>
                <p><b>2.04 -&gt; 2.05</b> (2005. május 18.)</p>
                <ul>
                    <li>Tüzelőberendezés nyomás és
                    hőmérséklet adatainak
                    átszámítására szolgáló egyedi
                        polinom adatok nem voltak megadhatók.</li>
                    <li>Szilárd tüzelőanyag esetén a
                    sztöchiometriai számítás ablak nem
                        volt megnyitható.</li>
                    <li>A szakaszok geometriai adatai szigorúbb
                        ellenőrzésen mennek keresztül.</li>
                </ul>
                <p><b>2.03 -&gt; 2.04</b> (2005. március 29.)</p>
                <ul>
                    <li>Több készülékes LAS kéményeknél a
                    ventilátorral fedezhető nyomás
                    összegzésnél (a készüléktől a
                    becsatlakozásig lévő részek) a
                    frisslevegő ágnak a becsatlakozási
                    elemére számolt ellenállás nem volt
                        beleszámolva.</li>
                </ul>
                <p><b>2.02 -&gt; 2.03</b> (2005. március 25.)</p>
                <ul>
                    <li>LAS kéményeknél az alsó kiegyenlítő
                        nyílást nem kezelte a program.</li>
                </ul>
                <p><b>2.01 -&gt; 2.02</b> (2005. március 23.)</p>
                <ul>
                    <li>LAS kéményeknél a készülékek
                    frisslevegő oldali csatlakozását is
                        meg kell adni.</li>
                    <li>LAS kéményeknél a dinamikus nyomás
                    változásából eredő nyomásigény
                        rosszul lett figyelembe véve.</li>
                    <li>Több készülékes esetben is a
                    nyomásfeltétel ellenőrzésekor a
                    becsatlakozó elemek belépési pontjára
                        történik a vizsgálat.</li>
                    <li>Egy készülékes esetben nem csak az
                    atmoszférikus tüzelőberendezéseknél
                        számolt hígító levegővel a program.</li>
                    <li>Az iteráció hatékonyságának
                        növelése.</li>
                </ul>
                <p><b>2.00 -&gt; 2.01</b> (2005. március 14.)</p>
                <ul>
                    <li>Szakasz adatok megadásakor a
                    keresztmetszeti adatoknál érzékeny
                    volt a program, hogy a tizedes
                    elválasztásra pontot, vagy vesszőt
                        használunk.</li>
                    <li>A hőmérséklet feltétel
                    ellenőrzésénél is először
                    iteráció nélkül ellenőrzi, hogy
                    teljesül-e a feltétel, és csak akkor
                    számol a melléklevegő hígításával,
                        ha ebben az esetben nem felel meg.</li>
                    <li>Egy készülékes elrendezéseknél is a
                    program a 2. kötet szerint módosította
                    a készülék huzatigényét, a
                    tényleges égéstermék tömegáram
                    szerint. Ezt most már csak a több
                        készülékes elrendezéseknél teszi.</li>
                    <li>A készülék kategóriáknál a korábbi
                    túlnyomásos égőjű megnevezés
                    helyett a túlnyomásos tűzterű,
                        blokkégős megjelölés szerepel.</li>
                    <li>A készülékek eredmény táblázatában
                    új adatként jelenik meg az mWc
                    jellemző (készülék számított
                    égéstermék tömegáram) és az mNL
                    (melléklevegő tömegáram) jellemző
                    csak az egy készülékes, atmoszférikus
                        égőjű készülékeknél értelmezett.</li>
                </ul>
                <h3><Link to="/public/ChmBau16.html">16 bites verzió</Link></h3>
                <p><b>1.23 -&gt; 1.24</b> (2003. május 14.)</p>
                <ul>
                    <li>Ha egy szekció sok szakaszból állt
                    (10, vagy annál több), puffer
                        túlcsordulás lépett fel.</li>
                </ul>
                <p><b>1.21 -&gt; 1.23</b> (2001. november 12.)</p>
                <ul>
                    <li>A hardverkulcsok és a felhasználói
                    jelszavak kezelése módosult, külön
                    párbeszédpanel szolgál az adatok
                        ellenőrzött megadására.</li>
                </ul>
                <p><b>1.20 -&gt; 1.21</b> (2001. február 6.)</p>
                <ul>
                    <li>A szakaszoknál megengedett a magasság
                    értékre negatív érték is, így a
                    visszaejtések is követhetők a
                        programmal.</li>
                </ul>
                <p><b>1.17 -&gt; 1.20</b> (2000. június 20.)</p>
                <ul>
                    <li>A különböző üzemállapotok (téli
                    hideg, téli enyhe, nyári) közti
                    váltások megkönnyítése érdekében
                    bevezetésre kerültek szimbolikus
                    hőmérséklet jelölések. Ezek
                    (tKülső, tFűtött, tFűtetlen,
                    tPadlás) értékei az alapértékek
                    képernyőn adhatók meg. A
                    tüzelőberendezéseknél az
                    áramlásbiztosítón belépő levegő
                    hőmérsékletére, illetve az egyes
                    szakaszoknál a túloldali
                    hőmérsékletre a korábbi konkrét
                    számértékek mellett, a legördülő
                    listából, a szimbólumok is
                    kiválaszthatók. Így egy más
                    üzemállapotra vonatkozó számítás
                    elvégzéséhez, amennyiben az egyes
                    helyeken nem konkrét értékeket, hanem
                    szimbólumokat adtunk meg, elegendő az
                    alapértékeknél a hőmérséklet
                    értékek átírása, a számítás már
                        ezeket az új értékeket használja.</li>
                </ul>
                <p><b>1.16 -&gt; 1.17</b> (2000. június 2.)</p>
                <ul>
                    <li>Az ellenállás és huzat értékek
                    korábban mindenhol egy tizedesre
                    kerültek kiírásra, így 0.05 Pa alatti
                    értékekre 0 jelent meg. Ezentúl mindig
                    három értékes jegyre történik a
                        kiírás.</li>
                    <li>A sztöchiometriai számítás ablakában
                    a fűtőérték illetve az égéshő
                    például PB esetén ( &gt; 100 000) csak
                    csonkolva jelent meg, így
                        félreérthető volt.</li>
                </ul>
                <p><b>1.15 -&gt; 1.16</b> (2000. március 16.)</p>
                <ul>
                    <li>Sztöchiometriai számítás
                    nyomtatásakor az adminisztratív adatok
                        kétszer jelentek meg.</li>
                    <li>Sztöchiometriai számítás
                    nyomtatásnál hiányzott a
                    tüzelőberendezés típusjel és
                        teljesítmény.</li>
                </ul>
                <p><b>1.13 -&gt; 1.15</b> (2000. február 17.)</p>
                <ul>
                    <li>Nyomtatáskor, ha a fájlnév és a
                    lapszám kapcsoló is ki volt kapcsolva,
                    és több lapos volt a nyomtatás, vagy
                    egylapos, de a projekt adatok is ki
                    voltak kapcsolva, nyomtatás közben
                        leállhatott a program.</li>
                </ul>
                <p><b>1.12 -&gt; 1.13</b> (1999. december 13.)</p>
                <ul>
                    <li>Nyomtatáskor, ha a fájlnév a
                    fejlécben kapcsoló be volt kapcsolva,
                    de még a projekt nem lett mentve egyszer
                    sem, vagyis nem volt még fájlnév
                    megadva, akkor sem a lapszámozás, sem a
                    projekt adminisztratív adatok nem
                        nyomtatódott ki.</li>
                </ul>
                <p><b>1.11 -&gt; 1.12</b> (1999. október 6.) </p>
                <ul>
                    <li>A nyomtatások további beállításokat
                    tesznek lehetővé. Lehetséges csak a
                    környezetvédelmi számítás
                    dokumentálása. A részletes és a
                    táblázatos nyomtatásnál kérhető,
                    hogy a séma kisméretű ábraként a lap
                    jobb felső sarkába kerüljön. Így
                    egyszerűbb kémények esetén
                    táblázatos módban, 10-es méretű
                    nyomtatási betűméret választásával
                    (beállítások) egyetlen lapon is
                    dokumentálható a számítás. Szintén
                    a beállítások alatt az
                    &quot;Értékelés&quot; részben
                    kérhető a programtól, hogy a
                    számítási eredmények alapján
                        minősítse a kéményt.</li>
                </ul>
                <p><b>1.10 -&gt; 1.11</b> (1999. július 23.) </p>
                <ul>
                    <li>A környezetvédelmi számításban a
                    tüzelőberendezés által kibocsátott
                    érték számításánál, a
                    korábbiaktól eltérően a hatásfok is
                    szerepel a képletben, vagyis a megadott
                    fajlagos kibocsátási érték a
                    névleges teljesítmény és a hatásfok
                        hányadosával szorzódik.</li>
                </ul>
                <p><b>1.09 -&gt; 1.10</b> (1999. július 9.) </p>
                <ul>
                    <li>Lehetővé vált a séma módosítás a
                    tüzelőberendezés törlés illetve
                        beszúrás funkciókkal.</li>
                    <li>A sok elemet tartalmazó sémák esetén
                    görgetősávok segítségével
                    mozgathatjuk a sémát a megjelenítő
                    ablakban, a séma elemei egy minimális
                        méret alá nem csökkennek.</li>
                    <li>A másolás és beillesztés
                    műveletekhez gyorsító billentyűk
                    lettek rendelve. A másolásra a CTRL+INS
                    vagy a CTRL+C, a beillesztésre a
                        SHIFT+INS illetve a CTRL+V használható.</li>
                    <li>Ha a szakasz adatok megadásánál a
                    programmal nem számítható módot
                    választottuk, akkor az általunk
                    megadott belső hőátadási tényezőt a
                    program módosította, a
                    hőátbocsátási tényezőt pedig
                        hibásan nullázta.</li>
                </ul>
                <p><b>1.08 -&gt; 1.09</b> (1999. július 6.) </p>
                <ul>
                    <li>A négyszög keresztmetszetű szakaszok
                    esetén, ha a két oldalméret eltérő
                    volt, a nyomtatáskor illetve a
                    képernyőn hibásan a nagyobb
                    oldalméret szerepelt mindkét
                    méretként. A számítást a hiba nem
                    érintette, az a helyes értékekkel
                        történt.</li>
                </ul>
                <p><b>1.07 -&gt; 1.08</b> (1999. június 28.) </p>
                <ul>
                    <li>A kéményre csatlakozások lehetséges
                    száma 20-ra emelkedett, és az egyedi
                    séma esetén is a közös füstcsőre
                    kapcsolt berendezések maximális száma
                        8-ra módosult.</li>
                </ul>
                <p><b>1.06 -&gt; 1.07</b> (1999. június 16.) </p>
                <ul>
                    <li>A MOL javaslatára, hogy a programmal
                    számolt fűtőértékek és a MOL által
                    garantált fűtőértékek könnyebben
                    összevethetők legyenek, a
                    fűtőértéket, az égéshőt és a
                    fogyasztást a korábbiaktól eltérően
                    nem 0°C-ra, hanem az MSZ ISO 6976:1997
                        által javasolt 15°C-ra számítjuk. </li>
                    <li>Szintén ebben a szabványban közölt
                    értékekre módosítottuk az egyes
                    összetevők fűtőértékét és
                    égéshőjét, ez tized százalékos
                    eltéréseket eredményez csak a korábbi
                        értékekhez képest.</li>
                    <li>Néhány, a programmal szállított
                    gázösszetételt kis mértékben
                    módosítottunk, szintén a MOL
                    kérésére, hogy a számított
                    fűtőértékek jobban közelítsék az
                        általuk 1999-re garantált értékeket.</li>
                </ul>
                <p><b>1.05 -&gt; 1.06</b> (1999. június 3.) </p>
                <ul>
                    <li>Új típusú hardverkulcsok kezelése.</li>
                </ul>
                <p><b>1.04 -&gt; 1.05</b> (1999. május 13.) </p>
                <ul>
                    <li>Közös füstcsőre kapcsolt
                    berendezések séma esetében az
                    alkalmazható berendezések száma 5-ről
                        8-ra módosult.</li>
                </ul>
                <p><b>1.03 -&gt; 1.04</b> (1999. május 10.) </p>
                <ul>
                    <li>Fejléces listákban a sorrend
                    megváltoztatásakor, ha a lista az ablak
                    legfelső eleméhez ért, a lista
                    szövegek keveredhettek a beállítás
                    során. A dialógus újbóli
                    megnyitásakor már helyreálltak a
                        szövegek.</li>
                </ul>
                <p><b>1.02 -&gt; 1.03</b></p>
                <ul>
                    <li>Vezetési hossz 0 érték esetén a
                        program számítási hibával leállt.</li>
                </ul>
                <p><b>1.01 -&gt; 1.02</b></p>
                <ul>
                    <li>Ráépülő kémény esetén a listából
                        hiányzott a szekció.</li>
                    <li>m3/s és kg/s mellett m3/h és kg/h
                        rovatok megjelenése.</li>
                    <li>Táblázatos nyomtatásnál egyes
                    oszlopoknál hibás volt a
                        mértékegység.</li>
                </ul>
                <p><b>1.00 -&gt; 1.01</b></p>
                <ul>
                    <li>A dinamikus nyomásváltozásból adódó
                        nyomás figyelembevétele.</li>
                    <li>Túl kis levegőarányra figyelmeztetés
                        egy tüzelőberendezés esetére is.</li>
                </ul>
            </div>
        );
    }
}

export default ChmVer;