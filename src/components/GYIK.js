/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import pw1 from '../screenshots/password.gif';
import pw2 from '../screenshots/password2.gif';
import { Link } from 'react-router-dom';

class GYIK extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
        this.initTable();
    }
    initTable() {
        this.hw = [
            this.createData(<div className="tj">
                <h4 ><a name="HW1" />A program nem hajlandó elindulni, pedig a kulcs rá van dugva a gépre.</h4>
                <p>Először azt kell megvizsgálnunk, hogy a program fizikailag érzékel-e kulcsot. Ezt abból tudjuk eldönteni, hogy a jelszó megadásra szolgáló ablakban mit ír ki a program kulcsazonosítóként, az ábrán pirossal jelölve.</p>
                <img className="mw-70"
                    src={pw1}
                    alt={"Eredmények"} />
                <p>Ha a Nem található kulcs jelenik meg itt, akkor nagy valószínűséggel a kulcsdriver program nem lett telepítve, vagy a működése nem megfelelő. Célszerű ilyenkor a kulcsdrivert <Link to="/public/driver.html" className="b">újratelepíteni</Link>.</p>
                <p>Ha továbbra sem látja a program a kulcsot, akkor a program indító ikonján az egér jobb gombjával kattintva a menüben válasszuk a tulajdonságok pontot. A kompatibilitás fülön a kompatibilis üzemmód részben kapcsoljuk be a futtatás a következő kompatibilitási üzemmódban kapcsolót, és alatta válasszuk ki a Windows 8-at.</p>
                <p>Ha talált kulcsot, célszerű ellenőrizni, hogy az a jelszó adatokban megadottal megegyezik-e. Az ábrán pirossal jelöltük.</p>
                <img className="mw-70"
                    src={pw2}
                    alt={"Eredmények"} />
                <p>Ha eltérő, lehet, hogy több kulcsunk is van, és nem a megfelelő van a gépbe dugva. (Több kulcs esetén az elsőre megtalált kulcsot írja ki a program.) Ha egyeznek az adatok, vizsgáljuk meg a további adatok helyességét. A név, a cím és a jelszó adatok esetében is ellenőrző értékek segítenek ebben, ezeket a képeken zölddel jelöltük meg. Ha valamelyiknél eltérést tapasztalunk, akkor valamit rosszul adtunk meg. Ügyeljünk az ékezetekre, írásjelekre, szóközökre, kis és nagybetűkre. Gyakran a kis l és az egyes karakter, illetve a kis o és a nulla karakter keveredik. A jelszó adatokban csak kisbetűk és számok szerepelnek. Az is fontos, hogy a jelszó adat ehhez a programhoz tartozzon. Ezt az információt kékkel jelöltük az ábrán. A WinWatt esetében külön jelszó tartozik az EPBD modulhoz, ezért itt még a következőkre kell ügyelni.</p>
                <p>Az alap jelszó felvételekor a jelszó típusánál a program legyen kiválasztva. A listában az ilyen jelszó előtt a modulnév üres. Az EPBD modulhoz tartozó jelszó felvételekor az EPBD modul legyen kiválasztva. A listában ebben az esetben a modulnév az EPBD modul lesz, az ábrán kékkel jelöltük.</p>
                <p>Ha párhuzamos portos a hardverkulcs, és a kulcsot nem találja a program, érdemes még a következőket megvizsgálni:</p>
                <p>- Csatlakozik nyomtató a kulcsra? Ha igen, próbáljuk meg nyomtató csatlakozás nélkül is a program elindítását. Ha ezek után működik, akkor csatlakoztassuk ismét, és a program indítása előtt legyen bekapcsolva a nyomtató.</p>
                <p>- Több hardverkulcs van egymásba dugva? Ha igen, tegyünk egy probát úgy, hogy csak a programhoz szükséges egyetlen kulcs csatlakozik a portra. Ha ezzel megjavul a program, akkor a kulcsok sorrendjének a cseréje lehetséges, hogy megoldja a problémát. Ha nem, akkor a kulcsok gyakori ki-be dugdosása helyett - amit egyébként kikapcsolt géppel ajánlott csak megtenni - alkalmas megoldást ad egy mechanikus nyomtató megosztó egység.</p>
                <p>- Lehetséges, hogy a hardverkulcs tönkrement. Telepítsük egy másik gépen a programot és a kulcsdrivert, esetleg más operációs rendszer mellett, ha ott gond nélkül fut a program, akkor a kulcs hibátlan, csak az adott szoftver-hardver kombinációval van gond. Ellenőrizzük újra a fentiek szerint a teendőket, ha nem jutunk eredményre, vegye fel a kapcsolatot a hiba elhárítás érdekében.</p>
            </div>),
        ];
        this.ww = [
            this.createData(<div className="tj">
                <h4 ><a name="WW1" />WW1: Az épület adatok tájolás rovatának értelmezése gondot okoz. Mire alkalmazható ez a rovat?</h4>
                <p>A rovatba írt értéknek a helyiségek határoló szerkezeteinél van szerepe. Akár az új határoló szerkezetek felvételekor, akár egy már felvett határoló szerkezet adatainak módosításakor a párbeszédpanel tartalmaz egy tájolás rovatot. Ennek gyorsabb és kényelmesebb kitöltésére a program a legördülő listában felsorolja a négy fő (É, K, D, NY) és a négy mellék tájolást (ÉK, DK, DNY, ÉNY). Mindegyik szöveg előtt szerepel egy szögérték is. A program a számításokhoz csak a szögértéket vizsgálja, a mögötte lévő szöveget nem értelmezi, az csak a felhasználó számára könnyíti meg a tájékozódást. A legördülő listában a nyolc szöveghez tartozó szögértéket tudjuk az épület adatok tájolás értékével befolyásolni. Az itt megadott -23° és +23° közti értéket rendeli az északi irányhoz. Ha a megadott érték kivül esik ezen a tartományon, akkor a program automatikusan 45°-os forgatásokkal megkeresi a tényleges északi falnak az északi irányhoz viszonyított szögét.</p>
                <p>Ezek után tehát úgy kezeljük ezt a rovatot, hogy először megnézzük, hogy az épületünknek az északi irányba eső falának normálisa mekkora szöget zár be a tényleges északi iránnyal, és ezt a szögértéket írjuk az épület tájolás rovatba, pozitív az érték, ha kissé keleti, negatív, ha kissé nyugati irányba néz. Ezzel könnyebbé tesszük a tájolás értékek kiválasztását az egyes határoló szerkezetek felvételénél. Fontos, hogy csak a felkínált értékek módosulnak a rovat módosításával, a korábbi határoló szerkezeteket nem "forgatja"!</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW2" />WW2: A réteges szerkezet páradiffúziós számításánál a program hiányolja egyes rétegek szorpciós izotermáját, és bár nincs páralecsapódás, mégsem ad megfelelő minősítést a program a szerkezetről. Hogyan védhető ez ki?</h4>
                <p>Sajnos nagyon sok anyagnál hiányzik a szorpciós izoterma, illetve a megengedett nedvességtartalom a programmal szállított adatbázisban is. Ennek oka, hogy a jellemzők meghatározását célzó vizsgálatokat viszonylag kevés gyártó végeztette eddig el, mivel ezekre korábban a számításokhoz nem volt szükség, illetve nem is olcsóak. Reméljük, hogy egyre több gyártó szembesül ezzel a problémával, és kap indíttatást a vizsgálatok elvégzésére, és az eredmények közzétételére. Addig is milyen lehetőségünk vannak a probléma kezelésére?</p>
                <ul>
                    <li>Ha egy rétegnél nincs szorpciós izoterma vagy megengedett nedvességtartalom megadva, akkor a program annál a rétegnél, más információ híján, 75 %-nál magasabb relatív páratartalom esetén már figyelmeztetést ad. Ha tudjuk, hogy ez arra a rétegre túl szigorú megkötés, mert akár 100 %-os relatív páratartalom is megengedhető lenne, akkor vegyünk fel a szorpciós izotermára egy biztonságosan alacsony értéket, például adjunk meg a 100 %-os relatív páratartalomhoz 0.1 %-ot, és ugyanezt adjuk meg a megengedett nedvességtartalom rovatban is.</li>
                    <li>Az adott szerkezetnél bekapcsolhatjuk az egyszerűsített módon kapcsolót. Ebben az esetben a program nem foglalkozik a szorpciós izotermákkal, nem számol feltöltési időt, hanem csak a páralecsapódásra ellenőriz.</li>
                    <li>A program beállítások viselkedés lapján bekapcsolhatjuk az egyszerűsített páradiffúziós számítás, csak a páralecsapódásra ellenőriz kapcsolót. Ebben az esetben minden szerkezetre az előbb leírt módon viselkedik a program.</li>
                </ul>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW3" />WW3: A réteges szerkezet páradiffúziós számításánál a program a feltöltési időre negatív értéket ad, és e miatt rossznak értékeli a szerkezetet. Hogyan lehet negatív a feltöltési idő?</h4>
                <p>Negatív feltöltési idő valóban nem létezik, a szabványban megadott és a programban alkalmazott közelítő módszer elhanyagolásaiból adódik ez a furcsa jelenség. A feltöltési idő számításánál sok elhanyagolást alkalmazunk, a bonyolult probléma kezelhetővé tétele céljából. Durván megfogalmazva az alkalmazott algoritmus azt vizsgálja, hogy az egyensúlyi állapotban a szerkezetben lévő nedvesség mennyiségéből kivonva a szerkezetben kiinduláskor meglévő nedvességtartalmat kapunk egy vízmennyiséget, amit a falba beáramló gőzáram fog a feltöltési idő alatt a szerkezetbe bevinni. Ezért a feltöltési idő számítása úgy történik, hogy a vízmennyiséget elosztjuk a gőzáram értékével. Ez akkor adódik negatív értékre, ha a szerkezetben eleve nagyobb volt a vízmennyiség, mint amennyi az egyensúlyi állapothoz tartozik. (A kezdeti nedvességtartalomra a szabvány azt mondja, hogy az minden rétegnél legyen a 60%-os relatív páratartalomhoz tartozó nedvességtartalommal egyenlő.) A valóságban persze ahhoz is bizonyos időre van szükség, hogy a nedvességtartalom az egyensúlyi állapothoz tartozó lefutás szerintire rendeződjön át, de ezt az algoritmus nem kezeli. Írhatna a program ilyen esetben mondjuk nullát is az időre, hogy kevésbé legyen a jelenség zavaró, de úgy gondoltuk, hogy az érték nagysága esetleg hordoz információt, ezért maradtunk a negatív érték kijelzése mellett.</p>
                <p>Ebben az esetben is van lehetőségünk <a href="#WW2">áttérni egyszerűsített páradiffúziós számításra.</a></p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW4" />WW4: Az adatbázisban szereplő elemekkel, amikben ő vagy ű betű szerepel, problémák vannak. Hogy lehet e hibát megszüntetni?</h4>
                <p>A Windows vezérlőpultjában a Területi és nyelvi beállítások Speciális lapján az Unicode-ot nem használó programok nyelvénél válasszuk ki a magyart. A megoldást szemléltető videóhoz kattintson <a href="https://www.youtube.com/watch?v=rm_gTlkf_q0&feature=youtu.be" target="_blank">ide.</a></p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW5" />WW5: A Program Files könyvtárban tárolt projektjeim eltüntek. Megtalálható valahol?</h4>
                <p>A Windows VirtualStore technológiája okozhat ilyen problémát. Először is szokjunk le arról, hogy projekteket a Program Files könyvtárban tárolunk. Javasoljuk a Dokumentumok könyvtárt erre a célra. A másik jótanács, időnként archíváljuk a projektjeinket. Visszatérve a problémához, a VirtualStore lényegében egy olyan könyvtár, ahova a felhasználó által a Program Files könyvtárba létrehozott fájlok ténylegesen kerülnek, a Windows pedig úgy mutatja, mintha ezek a fájlok a Program Files könyvtárban lennének. Ez időnként viszont nem működik helyesen, az okát nem tudjuk, a lényeg, hogy a fájljainkat nem találjuk.</p>
                <p>Hogy lehet ehhez a VirtulStore könyvtárhoz hozzáférni? Először is a fájlkezelőnket rá kell bírni arra, hogy a rejtett fájlokat is mutassa. Újabban ezt a Vezérlőpultban, a Mappa beállításai részbe belépve tudjuk megtenni. A Nézet fülön a Rejtett fájlok és mappák részben váltsunk át a Rejtett mappák, fájlok és meghajtók megjelenítésére.</p>
                <p>Hol található ez a VirtualStore könyvtár? <b>c:\users\username\Appdata\local\Virtual Store\.</b> A users helyett lehet hogy Felhasználók szerepel. A username helyére a saját profilunk nevét kell választani.</p>
                <p>Ha sikerült eljutnunk ebbe a könyvtárba, azon belül megtaláljuk a Program Files, vagy Program Files (x86) könyvtárat és azon belül a progrmunk könyvtárát. Ha szerencsénk van, itt megtaláljuk az elveszettnek hitt projekteket. Célszerű ezeket átmásolni a Dokumentumok könyvtárba és a továbbiakban onnan használni.</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW6" />WW6: A program indításkor az adatbázis megnyitásra vonatkozó hibaüzenettel leáll. Hogyan javítható a hiba?</h4>
                <p>A program a felhasználó AppData könyvtárában keresi az adatbázisokat, ide is lesz telepítve. Ha nem a saját profilunkból történt a telepítés, akkor az adatbázisok ebben a másik profilban találhatóak, csak a program nem ott keresi.</p>
                <p>Hogy javítható ez a hiba? Több megoldás is létezik.</p>
                <ul>
                    <li>Először is a fájlkezelőnket rá kell bírni arra, hogy a rejtett fájlokat is mutassa. Újabban ezt a Vezérlőpultban, a Mappa beállításai részbe belépve tudjuk megtenni. A Nézet fülön a Rejtett fájlok és mappák részben váltsunk át a Rejtett mappák, fájlok és meghajtók megjelenítésére.
                    Hol találhatóak az adatbázis fájlok, melyik könyvtárban? <b>c:\users\username\Appdata\Roaming\Bausoft\WinWatt gólya.</b> A users helyett lehet hogy Felhasználók szerepel. A username helyére a saját profilunk nevét kell választani, illetve a WinWatt gólya helyett a megfelelő WinWatt változat nevét.
                    A fájlokat annak a felhasználónak a profilja szerint találjuk meg, akinek a nevében történt a telepítés, ez lehet, hogy a rendszergazda. Ezt a teljes könyvtárat kell átmásolnunk a saját profilunkba a fentebb leírt útvonal alá.</li>
                    <li>A program telepítésekor megválaszthatjuk, hogy a telepítő az adatbázisokat hova tegye. Itt választható a minden felhasználó számára elérhető mód, ilyenkor mindegyik felhasználó ugyan azt az adatbázist használja.</li>
                </ul>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW7" />WW7: A Sun modul nem tud a szerverhez kapcsolódni.</h4>
                <p>Amennyiben a hibaüzenetben az SSL Library-ra vonatkozó jelzés szerepel, szükséges egy további modul telepítése. Az SSL Library telepítőprogramja <Link to="/public/telepitok.html">innen</Link> tölthető le.</p>
                <p>(Az SSL Library a https:// kezdetű kapcsolatokhoz szükséges eszköz.)</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="WW8" />WW8: A táblázatok görög betűi nem jelennek meg.</h4>
                <p>A program beállításokban a betűtípusoknál a korábbi MS Sans Serif típust cseréljük le Microsoft Sans Serif típusra. A korábban használt betűtípus nem tartalmazta a görög betűket, az új sokkal bővebb, még a cirill betűket is tartalmazza.</p>
            </div>),
        ];
        this.ta = [
            this.createData(<div className="tj">
                <h4 ><a name="TA1" />TA1: [H2043] Fajlagos hőveszteségtényező követelményértéke (qm) [W/m3k] - Hibás érték! A mező értéke nem az előírt algoritmus szerint van meghatározva! - Aktuális érték: x,xxx ; helyes érték: x,xxx (közel nulla) (FAJLAGOS_HOVESZTESEGTENYEZO_KOVETELMENYERETEKE)</h4>
                <p>Az épületre beállított jelleg (könnyű, vagy nehéz) ellentmond a számított fajlagos hőtároló tömeg értéknek.</p>
                <p>A program a rendelet előírása szerint, a 6-os melléklet alapján végzi a fajlagos hőveszteség követelményértékének számítását. Itt szerepel a következő kitétel.</p>
                <p><i><b>Abban az esetben, ha az épület a fajlagos hőtároló tömege szerint nehéznek minősül, elegendő az 5. melléklet II. részében szereplő követelmény teljesítése ahhoz, hogy az épület közel nulla energiaigényűnek minősüljön.</b></i></p>
                <p>Ezért fontos, hogy az épületre beállított jelleg összhangban legyen a számított fajlagos hőtároló tömeg értékkel.</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="TA2" />TA2: [H2029] Az energetikai minőség szerinti besorolás - A megadott érték eltér az "Összesített energetikai jellemző a követelmény százalékában" értéke által meghatározott betűjeltől. - Helyes betűjel: CC (ENERGETIKAI_BESOROLAS)</h4>
                <p>A számított fajlagos primer energiaigény értéke két kategória határán van, és a WinWatt program nem ugyan olyan módon kerekít mint a központi rendszer.</p>
                <ul>
                    <li>A tanúsítás adataiban kisebb módosítással elmozdíthatjuk a kategória határtól az eredményt, és így a kerekítési hiba kiküszöbölhető.</li>
                    <li>Az XML feltöltés helyett a kézi adatmegadás is választható a tanúsítás feltöltésekor.</li>
                </ul>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="TA3" />TA3: BB besorolás feltételei</h4>
                <p>A BB besorolás feltételei a rendelet szerint a következők:</p>
                <ul>
                    <li>A számított fajlagos primer energia igény &#8804; 100 %</li>
                    <li>A fajlagos hőveszteség tényező számított értéke a 6. melléklet szerinti követelménynek feleljem meg.</li>
                    <li>Az épület megújuló részaránya legalább 25 % legyen.</li>
                </ul>
                <p>Épületrész esetén a fenti feltételekből az utolsó kettőnek az egész épületre teljesülnie kell.</p>
                <p>A WinWatt az épületrészre számolt adatok alapján juthat arra a következtetésre, hogy teljesülnek a BB kategória feltételei, a feltöltéskor azonban az épületre vonatkozó, legalább BB-s tanúsítással kellene rendelkeznünk. Ha ilyen tanúsításunk nincs, maximum CC kategóriát kaphat az épületrész.</p>
                <p>Ahhoz, hogy a WinWatt is ezt adja, a megújuló részarány számítási módját állítsuk "megadja az épületre" módra, és adjunk meg kevesebb mint 25 %-ot.</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="TA4" />TA4: AA besorolás feltételei</h4>
                <p>3. melléklet a 176/2008. (VI. 30.) Korm. rendelethez:</p>
                <i><ul className="list pa0">
                    <li>"3. „AA” vagy annál jobb besorolás csak a Rend. szerinti részletes módszerrel vagy dinamikus szimulációval alátámasztott módon adható. A dinamikus szimulációs esetén is a Rend.-ben meghatározott mértezési alapadatokkal egyenértékű adatokkal kell végezni a méretezést.</li>
                    <li>4. „AA” vagy annál jobb besorolás csak olyan esetben adható</li>
                    <li>4.1. ahol a hőtermelő időjárásfüggő szabályozása megoldott,</li>
                    <li>4.2. ahol a hűtési és fűtési rendszer helyiségenkénti szabályozhatósága megoldott,</li>
                    <li>4.3. ahol az önálló tulajdonú vagy külön bérbe adható épületrészek energiafogyasztásának mérése külön legalább költségosztók felszerelésével vagy egyedi mérőkkel megoldott."</li>
                </ul></i>
                <p>A WinWatt programban az épület energia igény tervezési adatok lapján található "Az AA vagy jobb minősítés feltételei teljesülnek" kapcsoló bekapcsolásával kijelentjük, hogy a 3. és 4. pontban felsorolt követelményeknek eleget tesz az épületünk és a számításunk is.</p>
                <p>Véleményünk szerint, a 3. pontban megfogalmazott követelmény a tanúsítás módszerével kapcsolatban teljesíthetetlen. Tudomásunk szerint a kamaránál az ellenőrzést végző szakemberek sem fogadják el a WinWattal végzett számítást részletes számításnak - amennyiben a rendeleti táblázatok adatival dolgozik, hisz az is egyszerűsítésnek számít. Mindezek miatt azt javasoljuk, hogy a programmal ne készítsen AA vagy ennél jobb besorolású tanusítást a tanusító.</p>
            </div>),
        ];
        this.idapi = [
            this.createData(<div className="tj">
                <h4 ><a name="ID1" />ID1: Table is busy! figyelmeztetést kapok, ha meg akarom nyitni a projektet.</h4>
                <p>Az adatbázis kezelő a projekt megnyitásakor azt zárolja (lock), hogy más alkalmazás ne tudja párhuzamosan megnyitni. Programhiba és program elszállás esetén, ezt a zárolást nem képes a program feloldani, az adatbázis kezelő továbbra is zároltnak látja a projektet, ezért a másodszori megnyitását letiltja. A zárolások a Windows újra indításával megszűnnek, tehát indítsuk újra a Windowst. Az újraindítás helyett azt is megtehetjük, hogy valamilyen fájlkezelő programmal másolatot készítünk a zárolt projektről (mindhárom fájlról, DB, MB és PX kiterjesztés) egy új név alatt, és ezt próbáljuk megnyitni, mert a zárolás fájlnévre vonatkozik, így az új néven megnyitható a projekt.</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="ID2" />ID2: Lemásoltam egy projektet a fájlkezelővel, hogy egy másik gépen dolgozzak rajta tovább, itt viszont Index is out of date! üzenetet kapok, és nem tudom a projektet megnyitni.</h4>
                <p>Az adatbázis kezelő nem minden változtatást ment azonnal lemezre munka közben. Így előfordulhat, hogy amennyiben a projekt a programunkkal meg van nyitva, a három fájl a lemezen (DB, MB és PX kiterjesztés) nem konzisztens. Lépjünk ki máskor a programból, vagy a projektet csukjuk be, mielőtt a fájlokat lemásolnánk.</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="ID3" />ID3: Nem található a Borland Database Engine (IDAPI) kérem telepítse! üzenetet kapok, mikor a programot elindítom, pedig telepítve van a gépemen. Újra telepítve sem változik a helyzet.</h4>
                <p>Más programok is alkalmazzák a Borland Database Engine (IDAPI) eszközét. Lehetséges, hogy azok bizonyos beállításokat is végeznek rajta, és amennyiben a program környezet megváltozik, azt az IDAPI nem tudja lekezelni. Gyakori eset, hogy a WILO Select szivattyú kiválasztó programja az IDAPI számára az átmeneti fájlok könyvtárát a saját könyvtárára állítja be. Ha letöröljük a WILO programot, és a könyvtárat is megszüntetjük, az IDAPI nem képes a működésre. A hiba elhárítása érdekében vegyük elő a Windows főkönyvtárában lévő WIN.INI fájlt. Keressük meg az [IDAPI] illetve a [Borland Language Drivers] szekciókat, és nézzük át valamennyi beállítást. Több sort teljesen ki is törölhetünk, összesen három sor az, ami feltétlenül szükséges a működéshez. Ezek az IDAPI szekcióban a DLLPATH és a CONFIGEFILE01, a másik szekcióban pedig az LDPath bejegyzés. Azt is ellenőrizzük, hagy az ezen belül megadott útvonalak helyesek-e. Mentsük el a javított változatot, és próbáljuk újra a programot.</p>
            </div>),
            this.createData(<div className="tj">
                <h4 ><a name="ID4" />ID4: Egy korábbi projektet szeretnék megnyitni, de a megnyitás dialógusban azt kiválasztva "Nem létező projektnév!" üzenetet kapok, és nem tudom megnyitni.</h4>
                <p>A programjaink nem támogatják az ékezetes és hosszú fájl és útvonal elnevezéseket. Létrehozni még sikerül a projektet, de a legközelebbi megnyitásnál már azt nem tudja a program lekezelni. Ne használjunk ékezetes karaktereket és nyolc karakternél hosszabb elnevezéseket a program és a projektek útvonalánál. A fájlkezelő segítségével nevezzük át a hibás fájlokat ennek megfelelően.</p>
            </div>),
        ];
        this.idapi32 = [
            this.createData(<div className="tj">
                <h4 ><a name="ID321" />ID32_1: Rendszergazdai módban gond nélkül fut a program, de normál felhasználóként futtatva hibaüzenettel leáll az indítás után.</h4>
                <p>Az adatbáziskezelő alapértelmezett beállításokkal kerül telepítésre, ennek megfelelően a lock fájlt a c:\ könyvtárba akarja létrehozni, ahova azonban nem rendszergazda módban a felhasználó nem hozhat létre fájlt. Rendszergazdai módban azonban konfigurálható az adatbáziskezelő. A c:\Program files\Common files\Borland shared\BDE könyvtárban található BDEADMIN programot kell ehhez elindítani (ugyanez elindítható a Windows Vezérlőpult programjából is a BDE Administrator ikon segítségével). A Configuration lapon a Drivers\Native\PARADOX részben a NET DIR változót, ami C:\ kell átírni egy másik könyvtárra, ahova a felhasználónak írási joga van. (Ahhoz, hogy a változtatást a BDEADMIN észlelje, át kell lépni egy másik mezőbe.) Kilépve a programból kezdeményezi a megváltozott beállítások mentését, ezt el kell fogadni. Ezek után már normál felhasználói módban is használható a program.</p>
            </div>),
        ];
        this.ko = [
            this.createData(<div className="tj">
                <h4 ><a name="KO1" />KO1: Nyomtatáskor miért nem jelennek meg az ékezetes karakterek, hullámzanak a táblázatok oszlopai?</h4>
                <p>Az ékezetes karakterek hiányát az okozza, hogy a nyomtató alapbeállításában szereplő kódtábla nem a PC-8, amit a program feltételez. A hullámzó táblázatok oka az, hogy úgy nevezett proporcionális fontot alkalmaz a nyomtató, a program pedig fix szélességgel számol, és betűközökkel próbál tabulálni. A KOMPLEX program esetében futtassa újra az INSTALL programot, és a program inicializáló és lezáró kódokat a súgó segítségével próbálja megadni. A korábbi programok még nem tartalmazták ezt a lehetőséget. Ezek esetében vagy alapbeállításként, vagy nyomtatások előtt szoftveresen kell beállítanunk a nyomtató gépkönyvére támaszkodva a PC-8 karakter készletet és egy fix szélességű karaktereket tartalmazó fontot, tipikusan a Courier, vagy annak egy változata használható.</p>
            </div>),
        ];
    }

    createData(Text) {
        return { Text };
    }

    render() {
        return (
            <div className="GYIK pl3 pr4">
                <Helmet><title>(GYIK) Gyakran ismételt kérdések </title></Helmet>
                <h2 className="pb4">Gyakran ismételt kérdések (GYIK)</h2>
                <p>Összegyűjtöttük és csoportosítottuk a leggyakrabban előforduló kérdéseket, és a hozzájuk tartozó válaszokat, abban a reményben, hogy az többeknek segít a programok minél hatékonyabb kezelésében.</p>
                <h4><a href="#HW">Hardverkulcs kezelési problémák</a> (HW...)</h4>
                <h4><a href="#WW">WinWatt32 program</a> (WW...)</h4>
                <ul>
                    <li><a href="#WW1">Az épület adatok tájolás rovatának értelmezése gondot okoz. Mire alkalmazható ez a rovat?</a></li>
                    <li><a href="#WW2">A réteges szerkezet páradiffúziós számításánál a program hiányolja egyes rétegek szorpciós izotermáját, és bár nincs páralecsapódás, mégsem ad megfelelő minősítést a program a szerkezetről.</a></li>
                    <li><a href="#WW3">A réteges szerkezet páradiffúziós számításánál a program a feltöltési időre negatív értéket ad, és e miatt rossznak értékeli a szerkezetet. Hogyan lehet negatív a feltöltési idő?</a></li>
                    <li><a href="#WW4">Az adatbázisban szereplő elemekkel, amikben ő vagy ű betű szerepel, problémák vannak. Hogy lehet e hibát megszüntetni?</a></li>
                    <li><a href="#WW5">A Program Files könyvtárban tárolt projektjeim eltüntek. Megtalálható valahol?</a></li>
                    <li><a href="#WW6">A program indításkor az adatbázis megnyitásra vonatkozó hibaüzenettel leáll. Hogyan javítható a hiba?</a></li>
                    <li><a href="#WW7">A Sun modul nem tud a szerverhez kapcsolódni.</a></li>
                    <li><a href="#WW8">A táblázatok görög betűi nem jelennek meg.</a></li>
                </ul>
                <h4><a href="#TA">Tanusítással kapcsolatos problémák</a> (TA...)</h4>
                <ul>
                    <li><a href="#TA1">[H2043] Fajlagos hőveszteségtényező követelményértéke (qm) [W/m3k] - Hibás érték!</a></li>
                    <li><a href="#TA2">[H2029] Az energetikai minőség szerinti besorolás...</a></li>
                    <li><a href="#TA3">BB besorolás feltételei</a></li>
                    <li><a href="#TA4">AA besorolás feltételei</a></li>
                </ul>
                <h3>Régi verziókkal (elavult) kapcsolatos kérdések.</h3>
                <h4><a href="#ID">IDAPI és projekt megnyitási hibák </a> (ID...)</h4>
                <ul>
                    <li><a href="#ID1">Table is busy! figyelmeztetést kapok, ha meg akarom nyitni a projektet.</a></li>
                    <li><a href="#ID2">Lemásoltam egy projektet a fájlkezelővel, hogy egy másik gépen dolgozzak rajta tovább, itt viszont Index is out of date! üzenetet kapok, s nem tudom a projektet megnyitni.</a></li>
                    <li><a href="#ID3">Nem található a Borland Database Engine (IDAPI) kérem telepítse! üzenetet kapok, mikor a programot elindítom, pedig telepítve van a gépemen. Újra telepítve sem változik a helyzet.</a></li>
                    <li><a href="#ID4">Egy korábbi projektet szeretnék megnyitni, de a megnyitás dialógusban azt kiválasztva "Nem létező projektnév!" üzenetet kapok, és nem tudom megnyitni.</a></li>
                </ul>
                <h4><a href="#ID32">32 bites IDAPI hibák </a> (ID32...)</h4>
                <ul>
                    <li><a href="#ID321">Rendszergazdai módban gond nélkül fut a program, de normál felhasználóként futtatva hibaüzenettel leáll az indítás után.</a></li>
                </ul>
                <h4><a href="#KO">KOMPLEX és korábbi DOS programok </a> (KO...)</h4>
                <ul>
                    <li><a href="#KO1">Nyomtatáskor miért nem jelennek meg az ékezetes karakterek, hullámzanak a táblázatok oszlopai?</a></li>
                </ul>
                <TableContainer component={Paper} className="min600 mb4"><a name="HW" />
                    <Table className="bg-light-yellow " size="small">
                        <TableHead >
                            <TableRow >
                                <TableCell className="bg-light-gray" align="center" padding="none"><h4>Hardverkulcs kezelési problémák</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.hw.map((row, index) => (
                                <TableRow key={index} >
                                    <TableCell align="center" >{row.Text}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min600 mb4"><a name="WW" />

                    <Table className="bg-light-yellow " size="small">
                        <TableHead >
                            <TableRow >
                                <TableCell className="bg-light-gray" align="center" padding="none"><h4>WinWatt32 program</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.ww.map((row, index) => (
                                <TableRow key={index} >
                                    <TableCell align="center" >{row.Text}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min600 mb4"><a name="TA" />
                    <Table className="bg-light-yellow " size="small">
                        <TableHead >
                            <TableRow >
                                <TableCell className="bg-light-gray" align="center" padding="none"><h4>Tanusítással kapcsolatos problémák</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.ta.map((row, index) => (
                                <TableRow key={index} >
                                    <TableCell align="center" >{row.Text}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min600 mb4"><a name="ID" />
                    <Table className="bg-light-yellow " size="small">
                        <TableHead >
                            <TableRow >
                                <TableCell className="bg-light-gray" align="center" padding="none"><h4>IDAPI és projekt megnyitási hibák</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.idapi.map((row, index) => (
                                <TableRow key={index} >
                                    <TableCell align="center" >{row.Text}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min600 mb4"><a name="ID32" />
                    <Table className="bg-light-yellow " size="small">
                        <TableHead >
                            <TableRow >
                                <TableCell className="bg-light-gray" align="center" padding="none"><h4>32 bites IDAPI hibák</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.idapi32.map((row, index) => (
                                <TableRow key={index} >
                                    <TableCell align="center" >{row.Text}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min600 mb4"><a name="KO" />
                    <Table className="bg-light-yellow " size="small">
                        <TableHead >
                            <TableRow >
                                <TableCell className="bg-light-gray" align="center" padding="none"><h4>KOMPLEX és korábbi DOS programok</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.ko.map((row, index) => (
                                <TableRow key={index} >
                                    <TableCell align="center" >{row.Text}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        );
    }
}

export default GYIK;