import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class Ww32Ver6 extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="Ww32Ver6 pl3 overflow-x-hidden ">
                <Helmet><title>A 32 bites WinWatt program verziók áttekintése a 6.00 verzióig</title></Helmet>
                <h2>A 32 bites WinWatt program verziók áttekintése a 6.00 verzióig</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>5.30 -&gt; 6.00</b> (2007. augusztus 14.) <span className="red">Az áttéréshez nem elegendő a frissítés, <Link to="/public/telepitok.html">újratelepítésre</Link> van szükség.</span></p>
                A 6.0 verziótól kezdődően a WinWatt program nem használja a 32 bites IDAPI-t, hanem saját fájlszerkezetet alkalmaz. Ez egy eléggé jelentős változás a programban, ezért javasolt a korábbi, legutolsó változat megőrzése biztonsági szempontból. Bár a korábban készült projektek átalakíthatók az új formátumra, ezért nem árt az óvatosság. Abból a szempontból is célszerű egy ideig a régi verziót megőrizni, hogy amennyiben az új verziónál komoly hiba jelentkezik, a munkáinkban ez ne okozzon fennakadást.
                <h4>A korábbi WinWatt verzió megőrzése</h4>
		Mivel a frissítés vagy az újratelepítés a korábbi verziót felülírja, ezért mielőtt az új verziót telepítenénk, másoljuk le a korábbi WinWatt programkönyvtárat az alkönyvtáraival együtt. Készíthetünk parancsikont is a korábbi WinWatt32.exe programra, hogy a régi verziót is könnyen elindíthassuk. (Kivételesen a 6.0 verzióhoz nem tartozik frissítő program, hanem csak a 6.0 verziójú telepítőprogrammal lehet feltelepíteni. Ez azért van így, mert az építőanyag adatbázis és a gépészeti adatbázis szerkezete is megváltozott, ezért ezeket is fel kell telepíteni. A további verzióknál természetesen ismét lesz majd külön frissítő program is.)
                <h4>A 6.0 verzió fájljai</h4>
		Az új verzióban a következő új fájltípusok jelennek meg.
                <ul>
                    <li>A WinWatt32.wwd fájl tartalmazza a program gépészeti adatbázisát, amiben a radiátorok, csövek, szelepek, stb. tárolódnak. (Korábban a WinWatt32.db, WinWatt32.mb és WinWatt32.px fájlokban tárolódott.)</li>
                    <li>A WinWatt32.wwm fájl tartalmazza a program építőanyag adatbázisát. (Korábban a Material.db, Material.mb és Material.px fájlokban tárolódott.)</li>
                    <li>wwp kiterjesztést kapnak a WinWatt projektek (korábbi három fájl, db, mb és px helyett).</li>
                </ul>
		Ha a fenti fájlok megváltoznak, a korábbi állapot a bak kiterjesztés hozzáillesztésével képzett fájlban kerül elmentésre.
		A program működése közben ideiglenes fájlok is létrejönnek mind az építőanyag adatbázis, mind a projektek esetében. Ezek az eredeti név után illesztett tmp nevet kapják, vagy ha az így képzett név már foglalt, egy sorszámot is hozzáilleszt. Ezeknek az ideiglenes fájloknak is létrejönnek bak kiterjesztéssel a korábbi állapotok mentései. Normál működés esetén, a projekt lezárásával, vagy a programból kilépve ezek az ideiglenes fájlok törlésre kerülnek. Ha azonban nem normál módon áll le a program (program hibás leállás, áramszünet), megmaradhatnak ezek a fájlok. Célszerű ezért néha ellenőrizni, hogy nem szaporodtak-e el az ilyen fájlok és törölni őket. A törléskor ne legyen a WinWatt program elindítva, mert ilyenkor vannak használatban lévő tmp fájlok is. A tmp és bak fájlok mindig abba a könyvtárba születnek, ahol az eredeti fájl is található.
                <h4>A korábbi projektek konverziója</h4>
		A korábbi projektekből létrehozható az új verziónak megfelelő változat a dbConvert program segítségével. Mivel ezek az IDAPI32 adatbázis kezelővel készültek, ezért a konverzióhoz szükséges a 32 bites IDAPI is. A konverzióval az eredeti fájlnévből, wwp kiterjesztéssel képzett néven menti a projektet a program, az eredeti projekt változatlanul megmarad.
                <h4>Az építőanyag és a gépészeti elemek adatbázisa</h4>
		Mivel a 6.0 verzióhoz csak újratelepítéssel juthatunk, ezért ezek az adatbázisok is a programmal szállított állapotba kerülnek. Ha a korábbi változatban felvettünk új építőanyagokat, vagy módosítottuk az eredeti adatokat, és ezeket szeretnénk az új verzióba is áthozni, akkor a korábbi verzióban a szerkesztés | export fájlba funkcióval mentsük le a szükséges adatokat, és az új programba a szerkesztés | import fájlból paranccsal olvassuk be.
		Ha a gépészeti elemek adatbázisát is módosítottuk, akkor a korábbi txt vagy xml fájlokat az új verzióba is beolvashatjuk az adatbázis menüponton keresztül (ez a funkció csak akkor érhető el, ha nincs projekt megnyitva). Ha nincs meg az eredeti txt vagy xml fájl, akkor a korábbi verzióban az adatbázis karbantartás részben az export funkcióval állíthatjuk azt újra elő.
                <h4>A visszavonás és mégis (undo-redo) funkciók</h4>
		A 6.0 verzió nem csak abban tér el a korábbi verziótól, hogy saját adatformátumra tért át, hanem ezzel a munka során a változtatások visszavonása is lehetségessé vált. A szerkesztés menüben található visszavonás funkcióval tudjuk a korábbi műveletet visszavonni, illetve a visszavont műveleteket a mégis funkcióval újra elvégeztetni. A mégis funkció természetesen csak addig él, amíg csak visszavonásokat végeztünk. Ha egy visszavonás után valamilyen más módosítást is végzünk, a korábban eltárolt visszavont események már nem érhetők el.
		A visszavonás és mégis funkciónál mindig megjelenik egy rövid szöveg arra vonatkozólag, hogy mi volt az a korábbi művelet, amit visszavonhatunk. Ezek közt lehetnek komplex műveletek is, amiket egyben vonhatunk csak vissza. A hálózat számítás közben nincs lehetőség visszavonásra, a teljes hálózat számítás egyetlen eseményként kerül bejegyzésre, és csak egyben vonható vissza. A visszavonási lehetőség a legutolsó tíz eseményt mindenképpen tartalmazza, de lehet benne több is. Időnként a program a fájlméret kordában tartása miatt a régebbi eseményekre való visszatéréshez tartozó információkat már kitörli, de ilyenkor is legalább 10 parancs visszavonási adatait megtartja.
		Külön eseménytár tartozik a projekthez és az építőanyag adatbázishoz. A szerkesztés menüpont mindig az aktuális jegyzékhez tartozik, tehát az anyag adatbázishoz tartozó eseménytárhoz akkor férünk hozzá, ha az építőanyag adatbázis jegyzékben vagyunk. Minden más jegyzék esetében a projekthez tartozó eseménytárt kapjuk a szerkesztés menüben.
		A projekthez tartozó eseménytár törlődik, ha a projektet mentjük a mentés, vagy a mentés másként paranccsal, vagy bezárjuk a projektet, vagy kilépünk a programból.
                <h4>A mentések</h4>
		A 6.0 verzióban a mentéssel kapcsolatos eljárások is változtak, sokkal inkább a más programokban megszokott felfogáshoz igazodnak. A korábbi verzióban minden változtatás automatikusan mentésre is került, így a visszalépési lehetőség nem volt lehetséges. A 6.0 verziótól a fájlba mentésről a felhasználónak kell gondoskodnia, de erre a program fel is hívja a figyelmet, ha be szeretnénk zárni egy projektet, vagy ki szeretnénk lépni a programból, és a legutolsó mentés óta módosultak az adatok. Ez az építőanyag adatbázis esetében is így van, azzal a különbséggel, hogy a program beállításokban a viselkedés alatt beállítható (és ez az alapértelmezett), hogy amennyiben módosítottuk az építőanyag adatbázist, úgy azt kérdés nélkül, automatikusan mentse, ha kilépünk a programból.
		Ezzel együtt megmaradt a programnak az a tulajdonsága, hogy a változtatásokat mindig ki is írja fájlba, de erre csak az ideiglenes tmp fájlt használja. Tehát, ha valamilyen hibás működés miatt nem sikerült normál módon a programból kilépnünk, akkor a tmp fájl is megmaradt, annak átnevezésével van remény, hogy a legutolsó mentés utáni változtatások is visszanyerhetők.

                <p><b>5.26 -&gt; 5.30</b>
                (2007. június 14.)</p>
                <ul>
                    <li>ArchLine projekt beolvasásnál az ISO szerinti talajon fekvő padló szerkezet típust nem fogadta el.</li>
                    <li>Hálózat számításnál, ha normál szakaszban nem beszabályozásra szolgáló szelep volt, arra is kijelzett szükséges fojtás értéket.</li>
                    <li>Exportnál (anyagok, szerkezetek, helyiségek és épületek) a képek csak külön kérésre kerülnek a Word formátumba.</li>
                    <li>A mentés másként funkció javítása.</li>
                    <li>Egyes szelepeknél a használati módban választható, hogy a beállításhoz szükséges minimális nyomásesést legalább biztosítsa. (Adatbázist is frissíteni kell ehhez.)</li>
                    <li>Egyes falfűtés-hűtés panelek új módon való kezelése, a helyiségnél már az elérhető panelméretekből történik a választás.</li>
                    <li>Energetikai számításnál a nyári légcsereszám megadáshoz segédtáblázat.</li>
                </ul>
                <p><b>5.25 -&gt; 5.26</b>
                (2007. május 7.)</p>
                <ul>
                    <li>Hőhidak esetén nem lehetett a vonalmenti hőátbocsátási tényezőre negatív értéket megadni, holott az előfordulhat.</li>
                </ul>
                <p><b>5.24 -&gt; 5.25</b>
                (2007. május 2.)</p>
                <ul>
                    <li>Új épület létrehozásakor nem használta a projekt beállításoknál megadott alapértékeket.</li>
                    <li>A program beállításokban megadható, hogy egy új projekt létrehozásakor automatikusan töltse be a projekt beállításokat egy megadott fájlból.</li>
                    <li>A nyomtatásoknál kérhető a nyomtatás helyett export is, vagy a vágólapra, vagy fájlba. Az RTF formátumú export a Wordbe betölthető, és a nyomtatási formához nagyon hasonló eredményt ad. Leginkább a táblázatok térnek el (az oszlopokon túllógó szövegek nyomtatáskor csonkolódnak, a Wordben viszont többsoros cellákat eredményez), illetve a laptördelés.</li>
                    <li>Az energetikai minőségtanúsításnál a besorolásnál megjelent az A+ kategória is, illetve a határok módosultak kissé.</li>
                </ul>
                <p><b>5.23 -&gt; 5.24</b>
                (2007. március 4.)</p>
                <ul>
                    <li>Az építész programból a modell átvételekor a belső, túloldali hőmérséklettel nem rendelkező szerkezeteknél hiába adtuk meg a túloldali hőmérsékletet, az hibás lehetett.</li>
                </ul>
                <p><b>5.22 -&gt; 5.23</b>
                (2007. január 22.)</p>
                <ul>
                    <li>Az épületenergetikánál új hűtési rendszer létrehozásakor hiba jelentkezett, és az adatok megadására szolgáló párbeszédpanel nem jelent meg.</li>
                    <li>A PrintShow változattal az épületenergetikai dokumentum is nyomtatható.</li>
                </ul>
                <p><b>5.21 -&gt; 5.22</b>
                (2007. január 17.)</p>
                <ul>
                    <li>Egyes korábbi projektek beolvasása gondot okozhatott.</li>
                    <li>Az ArchLine projekt beolvasás, ha az alkalmazott szerkezetek több mélységű csoportokból származtak, nem volt sikeres.</li>
                    <li>Az energetikai számításnál, ha több épületrészből állt az épület és csak egyes részek tartalmaztak légtechnikát, akkor ennek a számítása hibás lehetett.</li>
                </ul>
                <p><b>5.20 -&gt; 5.21</b>
                (2006. november 29.)</p>
                <ul>
                    <li>Az épületnél beállítható, hogy a téli sugárzási viszonyokat a rendelet szerinti egyszerűsített móddal számítsa, aminél elmaradhat az ablakok benapozási vizsgálata.</li>
                    <li>Az épületnél az energetikai rendszerek lista tartalma elmenthető fájlba, így a gyakran alkalmazott megoldások egyszerűen, egy betöltéssel is kezelhetők.</li>
                    <li>Az energetikai számítás nyomtatásánál kérhető a végére egy tervezői nyilatkozat, hogy a számítás a 7/2006 TNM szerint készült.</li>
                    <li>Az ArchLine illetve az Arcad építész programokból az adatátvétel minden hardverkulcsos WinWatt változatból ingyenesen érhető el. Az Arcad esetén az export funkció a WinWatt számára még fejlesztés alatt áll.</li>
                    <li>Az eszközök | hőmérsékletek cseréje funkcióban azt is lehet módosítani, hogy a helyiségekből melyek fűtöttek illetve klimatizáltak.</li>
                    <li>Projekt beállításoknál, az épület típusnál nem ugyanazokkal a szövegekkel volt a könnyű és nehéz épülettípus megadva, mint az épületnél.</li>
                    <li>Tágulási tartályoknál a zárt helyett változó nyomású zárt a megnevezés.</li>
                    <li>Ismert teljesítményű fogyasztónál, ha egyszer megadtunk hűtési teljesítményt, vagy tömegáramot, később hiába nulláztuk, a másik, számított érték megmaradt.</li>
                    <li>Hőcserélő adatmegadásnál a primer közeg adatait (hőmérsékletek, közeg típus) változtatva, nem számítódtak át a közegjellemzők.</li>
                    <li>Régi projekt konverzióját nem lehetett elvégezni, ha abban nem volt jelzés a korábbi verzióra. Mostantól csak egy figyelmeztetést kapunk, hogy az eredmény nem biztos, hogy tökéletes, de a konverziót elvégzi.</li>
                    <li>Az épületek nyomtatásánál az épület jellege mellett a fajlagos tömeg jelent meg, nem a fajlagos hőtároló tömeg.</li>
                    <li>Az épületenergetikánál, ha nyereségáramot adtunk meg, azt is veszteségként könyvelhette el.</li>
                </ul>
                <p><b>5.10 -&gt; 5.20</b>
                (2006. október 30.)</p>
                <ul>
                    <li>Helyiségeknél a légtechnikai rendszer azonosítójának megadása, légtechnikai rendszerek légmennyiségének nyomtatása. A légtechnikai rendszerek körének csoportos megváltoztatása az eszközök, téli filtráció cseréje művelettel.</li>
                    <li>Szelepek esetében adott szelepállás megadásának lehetősége.</li>
                    <li>Hálózatszámításon belül új funkció segítségével a szabályozó szelepek méretének megváltoztatása egy összesített listában.</li>
                    <li>Új tágulási tartály típusok kezelése (állandó nyomású zárt tartályok és szivattyús nyomástartás).</li>
                    <li>Szerkezetek cseréje funkcióban, a megtalált szerkezetek listájának fejlécét módosítva hiba jelentkezett.</li>
                    <li>Légtechnikai rendszerek energiaigény számításánál a ventilátor villamos energiaigénye rossz légmennyiség mellett számítódott.</li>
                </ul>
                <p><b>5.09 -&gt; 5.10</b>
                (2006. október 2.)</p>
                <ul>
                    <li>Energetikai dokumentációnál, ha egy nyomtatási egység hosszabb lett volna egy oldalnál, a nyomtatás hibával leállhatott.</li>
                    <li>A nyári túlmelegedés kockázatának számítása a nyomtatásnál nem minden programváltozatban jelent meg.</li>
                    <li>Az energetikai dokumentációnál is kérhető a szerkezetekre a páradiffúziós diagram és a vizsgálati jelentés nyomtatása.</li>
                </ul>
                <p><b>5.08 -&gt; 5.09</b>
                (2006. szeptember 26.)</p>
                <ul>
                    <li>Felületfűtési-hűtési köröknél a körből eltávolítva a falfűtési regisztereket, a számításnál megmaradhatott a falfűtési regiszter ellenállása.</li>
                    <li>Szerkezetek nyomtatásakor a vizsgálati jelentés csak akkor jelenik meg, ha a páradiffúziós diagramot is kértük az adott típusra.</li>
                    <li>Azoknál a programváltozatoknál, amiknek nem része a nyári hőterhelés számítás, a szerkezetek cseréje ezzel összefüggő része nem hajtotta végre a cserét.</li>
                    <li>Külső oldali hőátadási tényező értéke talajjal érintkező falnál és padlónál 0 értékre változtatva, csak az ISO szerinti számításnál maradt 25.</li>
                </ul>
                <p><b>5.07 -&gt; 5.08</b>
                (2006. szeptember 13.)</p>
                <ul>
                    <li>Épületek nyomtatásakor az épületenergetikai számításhoz tartozó fűtési és melegvíz-termelő rendszerek is nyomtatásra kerültek, pedig szándék szerint az csak az ET ikonnal készíthető nyomtatásokhoz tartozik, és ott a többi számítás is megjelenik.</li>
                    <li>A nyári túlmelegedés kockázatának ellenőrző számítása a nyomtatásban nem szerepelt, valamint a nyári sugárzási teljesítmény nyomtatásánál tévesen szerepelt szorzóként az epszilon, hasznosítási tényező. A számítás azonban helyes volt, a nyári egyensúlyi hőmérsékletkülönbség számításnál a hasznosítási tényező nem szerepelt.</li>
                    <li>A színes diagramok nyomtathatósága csak attól függ, hogy a program beállításokban engedélyeztük-e a színes nyomtatást.</li>
                    <li>Kiválasztható a nyomtatáskor, hogy mely szerkezet típusok esetén jelenjen meg a páradiffúziós diagram.</li>
                    <li>Nyomtatáskor, csak bizonyos lapok nyomtatását kérve az utolsó lap nyomtatását az utolsó előttire vonatkozóan döntötte el a program.</li>
                    <li>Egyéb épület engedélyezési tervénél nem veti össze a fajlagos primer energiaigényt a megengedett értékkel, mert az nincs is.</li>
                    <li>A szerkezetek nyomtatásakor, ha a szerkezet típusa nem volt megadva, vagy réteges szerkezet volt, de nem volt réteg megadva, nyomtatásnál hibát okozhatott.</li>
                    <li>Projekt beállítások fájlba elmentéssel és betöltéssel a nyári hőterhelés táblázat mindig a szabvány szerinti értékeket vette fel.</li>
                </ul>
                <p><b>5.06 -&gt; 5.07</b>
                (2006. augusztus 18.)</p>
                <ul>
                    <li>A szóközök figyelmen kívül hagyhatók a csomópont nevekben, a program beállítások viselkedés lapja szerint.</li>
                    <li>A szóközöket a csomópont neveknél az elejéről és a végéről mindig levágja.</li>
                    <li>A számítás indításakor a kezdőpontok nevének meglétét figyeli.</li>
                    <li>Az egyéb épület típusnál az energetikai nyomtatás nem működött.</li>
                    <li>A vonalmentivel jellemzett szerkezeteknél a felület levonás letiltása.</li>
                    <li>Ha egyetlen helyiségnek több radiátor vagy padlófűtés mezője volt, mint ami egy oldalon listázáskor elfér, akkor ilyen lista nyomtatásakor a program sorra adta a csak fejléccel ellátott lapokat, illetve megtekintésre hibajelzést adott.</li>
                    <li>Hidraulikai eredmények táblázatos nyomtatásának végéről lemaradhatott az összesítés és a tágulási tartály méretezés, ha az a lapra épp nem fért már el.</li>
                </ul>
                <p><b>5.05 -&gt; 5.06</b>
                (2006. június 16.)</p>
                <ul>
                    <li>A szerkezetek rétegtervi hőátbocsátási tényezőinek megengedett értéke a megjelent rendelet szerinti értékekre módosítva.</li>
                    <li>Az ArchLine exportban figyelmeztetés a túl hosszú helyiség elnevezésre.</li>
                </ul>
                <p><b>5.04 -&gt; 5.05</b>
                (2006. május 8.)</p>
                <ul>
                    <li>Az energetikai modulban a hővisszanyerő és léghevítő üzemidő arányának az ellenőrzése az előző javítás után is hibás maradt :-(.</li>
                </ul>
                <p><b>5.03 -&gt; 5.04</b>
                (2006. május 2.)</p>
                <ul>
                    <li>A szerkezeteknél, ha vonalmenti hőátbocsátási tényezőt számolt, a szabványban szereplő táblázat alapján, akkor a táblázatból kilógó értékek esetére az eredeti felületi hőátbocsátási tényezőt hagyta meg. A javítás után a táblázat szélén szereplő utolsó értéket alkalmazza ilyen esetekben.</li>
                    <li>Az energetikai modulban, ha a légtechnikánál hővisszanyerőt és léghevítőt is alkalmaztunk, és a kettő időarányának összege éppen 1 volt, számábrázolási hiba folytán hibaüzenet jelenhetett meg, hogy nagyobb az összeg egynél.</li>
                </ul>
                <p><b>5.02 -&gt; 5.03</b>
                (2006. március 20.)</p>
                <ul>
                    <li>Néhány nyomtatási típus (radiátor
                    lista, padlófűtés mezők, egycsöves
                    körök, hálózat táblázatok) nem
                        működött.</li>
                    <li>A program beállítások viselkedés
                    lapján új opció lett bevezetve, aminek
                    a segítségével a számítások még a
                    korábbi, MSZ-04-140-2:1991 végezhetők.
                    Egyrészt a szerkezetek rétegtervi
                    hőátbocsátási tényezőjére még
                    nincs alkalmazva megengedett érték,
                    másrészt az épület fajlagos
                    hőveszteségtényezője megengedett
                    érték még a korábbi, magasabb érték
                        szerinti.</li>
                </ul>
                <p><b>5.01 -&gt; 5.02</b> (2006. március 17.)</p>
                <ul>
                    <li>A kulcs azonosító értéket rosszul
                        írta vissza a program.</li>
                </ul>
                <p><b>5.00 -&gt; 5.01</b> (2006. március 14.)</p>
                <ul>
                    <li>Az 5.00 verzióban a nyomtatás funkciók
                        nem működtek.</li>
                    <li>Az olyan padlófűtés körök, amiknél
                    még nem voltak a mezők kiválasztva,
                        nyomtatáskor hibát eredményeztek.</li>
                </ul>
                <p><b>4.63 -&gt; 5.00</b> (2006. március 10.)</p>
                <ul>
                    <li>Az új épületenergetikai szabályozás
                    szerinti számítás bevezetése. Az
                    5.00, vagy újabb változatokkal
                    készült projektek a korábbi verziókba
                        nem olvashatók be!</li>
                    <li>A hidraulikai makróval történő
                    típusmódosításnál, ha a makróban a
                    második szabályzó is meg volt adva,
                    és normál szakaszokra alkalmaztuk,
                    akkor kitörölhetetlenül a szakaszhoz
                    rendelődött, és így hibás eredményt
                        adott a program.</li>
                    <li>Az első hidraulikai számításkor az
                    összekötő szakaszok közeg jellemzői
                    még nem voltak az adott közepes
                    közeghőmérsékletre átszámítva,
                        így kisebb eltérések adódhattak.</li>
                </ul>
                <p><b>4.62 -&gt; 4.63</b> (2005. május 13.)</p>
                <ul>
                    <li>A 4.62 verzióban a projekt mentés más
                        néven nem működött.</li>
                </ul>
                <p><b>4.60 -&gt; 4.62</b> (2005. május 11.)</p>
                <ul>
                    <li>A különböző változatok közt a
                    projekt beállítások nem mentek mindig
                        jól át.</li>
                    <li>A CADLine Kft. ARCHLine.XP 2005
                    programjában exportált épületek
                    beolvasó moduljának beépítése. A
                    modul külön vásárolható meg a
                        meglévő WinWatt változathoz.</li>
                </ul>
                <p><b>4.57 -&gt; 4.60</b> (2005. február 23.)</p>
                <ul>
                    <li>Az eszközök menüpont egy új parancsa
                    a helyiségek téli filtrációs
                    számításának csoportos
                        módosításához nyújt segítséget.</li>
                    <li>A helyiségek módosítása ablakban
                    megjelent egy makró feliratú
                    nyomógomb. Segítségével elsősorban a
                    nyári belső hőterhelések megadása
                    gyorsítható fel, fajlagos értékek
                        alkalmazásával.</li>
                </ul>
                <p><b>4.55 -&gt; 4.57</b> (2004. december 10.)</p>
                <ul>
                    <li>A hálózat gráf megjelenítésénél,
                    ha valaki hosszú csomóponti neveket
                    alkalmaz, egymásra íródhatnak a
                    szövegek. Ez elkerülhető, ha a program
                    beállítások viselkedés lapján a
                        dupla széles kijelzést bekapcsoljuk.</li>
                    <li>A szakaszok átnevezésénél illetve
                    lemásolásánál, ha mindkét
                    csomóponti névnél azonos szimbólumot
                    ($U vagy $P) használtunk a megnevezés
                    elején, akkor azt kiemeli a névből,
                    és csak a maradék részt kínálja fel
                        átírásra.</li>
                    <li>A nyomáskülönbség szabályzóknál
                    jelentkező hibákat egy új
                    számításkor nem törölte a program,
                        azok mindig megjelentek.</li>
                    <li>Egycsöves körök
                    összeállításánál, amikor egy új
                    radiátort veszünk hozzá a körhöz, a
                    helyiségek listája úgy frissül, hogy
                    a legutóbb kiválasztott helyiségnél
                        marad, nem ugrik a lista elejére.</li>
                    <li>A DanWatt program felkészítése új
                        kulcstípus fogadására.</li>
                    <li>A Meditherm programban, ha a projektet
                    másik programmal is módosítottuk, és
                    abban ismert teljesítményű fogyasztó
                    is szerepelt, akkor az anyaglista
                    készítésnél, ha az nem a hálózat
                    számításon belül lett indítva,
                        hibával leállt a program.</li>
                </ul>
                <p><b>4.53 -&gt; 4.55</b> (2004. október 26.)</p>
                <ul>
                    <li>Ha $N jelölést alkalmaztunk egy
                    fogyasztó kapcsolódási pontjának
                    nevénél, és az nem egy alcsoportban
                    szerepelt, a jelölés nem került
                        kifejtésre a hálózat méretezésekor.</li>
                    <li>A Danfoss AB-QM térfogatáram
                    szabályzójának adatbázisba
                    illeszthetősége végett a szelepek
                        adatbázis formátuma bővült.</li>
                </ul>
                <p><b>4.52 -&gt; 4.53</b> (2004. szeptember 23.)</p>
                <ul>
                    <li>Nyomtatás megtekintés ablakban a
                    nyomtató felbontással kerültek
                    kijelzésre az oldalak, ezért azok
                    jóval nagyobbak lettek, mint korábban
                        (4.52 verzióban csak).</li>
                    <li>A padlófűtési körök számítása, ha
                    abban nem volt falfűtés is, hibával
                        leállt (4.52 verzióban csak).</li>
                </ul>
                <p><b>4.51 -&gt; 4.52</b> (2004. szeptember 13.)</p>
                <ul>
                    <li>Nyomtatáskor szűkíthető a
                    nyomtatandó oldalak az oldalszámuk
                    alapján. Például ha a következőt
                    adjuk meg: 3-5;7 akkor a 3. 4. 5. és 7.
                        oldal kerül csak kinyomtatásra.</li>
                    <li>A páradiffúziós diagramnál (a
                    nyomtatási nyelvek bevezetése óta), az
                    x tengelyre mindig a vastagság szöveg
                    került, akkor is, ha hőmérséklet
                    léptéket kértünk, de az értékek
                    már valóban a hőmérséklethez
                        tartoztak.</li>
                    <li>A képernyő pozíciók eltárolása és
                        visszaállítása nem működött jól.</li>
                    <li>Falfűtésnél, ha egy körön belül
                    különböző osztásokat használtunk,
                    és azok azonos hosszúságúak voltak, a
                    regiszter ellenállás számításakor
                    nem azonos regiszter tömegáramból
                        indult ki a program.</li>
                </ul>
                <p><b>4.50 -&gt; 4.51</b> (2004. június 21.)</p>
                <ul>
                    <li>Új szakaszok, túláramszelepek és
                    nyomáskülönbség szabályzók
                    létrehozásakor, ha mindkét csomópont
                    nevénél szimbólumot szeretnénk
                    használni, nem kell azt beírni, egy
                    kapcsoló segítségével automatikusan a
                        nevek elé íródik.</li>
                    <li>Egy elem lemásolásakor a névben az
                    eredeti nevet kínálja fel, így
                    hasonló neveknél ezt ki lehet
                        használni.</li>
                    <li>A hálózatszámításnál a primer
                    hálózat csatlakozási pontjai elé is
                    bekerülhetett a konverziókor a $U
                        szimbólum.</li>
                    <li>Ha a projekt beállításoknál a
                    csomóponti elemekre alkalmazható
                    szabályok közé szűkítés-bővítés
                    jellegű elemet is felvettünk, és nem
                    adtunk meg a hálózat számításnál
                    induló átmérőt, vagy hőcserélő
                    elemnél a szekunder oldali
                    csatlakozásra, hibajelzést kaptunk. A
                    továbbiakban, ha a csatlakozó
                    méretnél 0 szerepel, és csak egy
                    szakasz kapcsolódik az adott induló
                        pontra, nem ad hibajelzést a program.</li>
                </ul>
                <p><b>4.46 -&gt; 4.50</b> (2004. június 9.)</p>
                <ul>
                    <li>Egységesítve lett a csomóponti nevek
                    kezelése. Minden fogyasztónál és az
                    összekötő szakaszoknál is a
                    radiátoroknál korábban alkalmazott
                    módszer lett bevezetve, azaz a
                    csomóponti nevekbe szimbolikus
                        jelölések építhetők be. <strong>Az
                        átalakítás miatt a régebbi
                        programverziókkal készült projekteket
                        a program átalakítja, a korábbi
                        verziók nem tudják már az új
                        formátumot kezelni.</strong></li>
                    <li>Hálózat számításnál a
                    hibajelzéseknél gyakran nem jelent meg,
                    hogy az adott elem melyik csoportban
                    szerepel, így az azonos jelölésű
                        elemeknél nehéz volt a beazonosítás.</li>
                    <li>Padlófűtésnél a fűtőmező
                    létrehozásakor, amikor a felület
                    méretét kell megadni, és mind
                    fűtésre, mind hűtésre használható
                    volt az adott rendszer, a teljes felület
                    nyomógomb mind a fűtési, mind a
                    hűtési rovatba felvette a teljes
                    felületet, akkor is, ha mi eleve az
                        egyiket kikapcsoltuk.</li>
                    <li>Felületfűtésnél a mező
                    módosítására szolgáló dialógusban
                    meg lett hosszabbítva a rendszer
                    nevének kiválasztására szolgáló
                    kontroll, így a hosszabb nevek is
                        láthatóak.</li>
                </ul>
                <p><b>4.45 -&gt; 4.46</b> (2004. június 3.)</p>
                <ul>
                    <li>Az adatbázis karbantartáson belül a
                    felületfűtés elemeknél az
                    ellenőrzés ablakban hibásan számolt a
                        program.</li>
                    <li>Felületfűtési köröknél
                    sorbakapcsolás esetén előfordulhatott,
                    hogy a program végtelen ciklusba került
                        a számításban.</li>
                    <li>Falfűtésnél a regiszterek
                    kialakíthatók több tábla
                    sorbakapcsolásával is. Az így
                    kialakított regiszterek továbbra is
                    Tichelmann kötéssel alkotják a
                        hidraulikai kört.</li>
                </ul>
                <p><b>4.44 -&gt; 4.45</b> (2004. március 29.)</p>
                <ul>
                    <li>A kétcsöves radiátorok módosítása
                    párbeszédpanelbe belépéskor a
                    korábban kiválasztott radiátor
                        méretét a legkisebbre változtatta.</li>
                    <li>Hálózat számításon belül,
                    amennyiben fűtési és hűtési
                    fogyasztók is szerepeltek, az éppen nem
                    számított mód is generált
                    hibajelzéseket a szelepekre
                        vonatkozólag.</li>
                </ul>
                <p><b>4.43 -&gt; 4.44</b> (2004. március 19.)</p>
                <ul>
                    <li>A kétcsöves radiátorok módosítása
                    párbeszédpanelben is lehetséges a
                        radiátor típusának a módosítása.</li>
                    <li>Falfűtésnél a felületi
                        hőmérsékletet nem jelzi ki pirosan.</li>
                    <li>Helyiségeknél, ha több épületünk is
                    volt a projektben, a helyiség adatok
                    módosítására szolgáló
                    párbeszédablak megnyitásakor
                    megváltoztathatta, hogy a helyiség
                        melyik épülethez tartozik.</li>
                    <li>Hálózatszámításkor a hőcserélő
                    ellenállását nem adta hozzá a teljes
                        nyomásigényhez.</li>
                    <li>A helyiség funkciójának megadására
                    szolgáló listába felvett elemek
                    törölhetők, ha azok nem a program
                    által eleve felkínáltak. Ehhez a
                    lenyitott listában a törlendő elemen
                        állva nyomjuk meg a delete nyomógombot.</li>
                </ul>
                <p><b>4.42 -&gt; 4.43</b> (2004. március 11.)</p>
                <ul>
                    <li>A kétcsöves radiátorok módosítása
                    párbeszédpanelen egyes fix szövegek
                        rossz helyen jelentek meg.</li>
                    <li>Hűtési hálózatok számításánál a
                    csomóponti elemek nyomásesése nem
                        számítódott.</li>
                    <li>Hűtési hálózatokban szereplő ismert
                    teljesítményű fogyasztók,
                    hőcserélők és normál szakaszok
                    esetében a rendelkezésre álló nyomás
                    és az ismert fojtás rovatok, külön a
                    hűtésre nem jelentek meg, és a
                    fűtési értékeket nem használta
                        hűtésnél.</li>
                </ul>
                <p><b>4.41 -&gt; 4.42</b> (2004. március 3.)</p>
                <ul>
                    <li>A hálózat számításnál
                    előadódhatott, hogy a program nem
                    tudott számolni, és erről hibajelzést
                    sem adott, egyszerűen a számítás
                    indítás előtti állapotba lépett
                        vissza.</li>
                </ul>
                <p><b>4.40 -&gt; 4.41</b> (2004. február 24.)</p>
                <ul>
                    <li>A túláramszelepeknél a csomópont
                    képzési nevét nem lehetett
                        módosítani.</li>
                    <li>Nem jelentek meg a projekt beállítások
                    csomóponti elemeknél az elem típusok
                        oszlop szövegei.</li>
                    <li>LAING KOMPLEX programmal készült
                        projekt konverziója hibás volt.</li>
                </ul>
                <p><b>4.31 -&gt; 4.40</b> (2004. február 13.)</p>
                <ul>
                    <li>A program felkészítése idegen nyelvű
                        nyomtatásra és program használatra.</li>
                    <li>Csomóponti elemekre az eszközökben
                    lévő típusmódosítást nem végezte
                        el.</li>
                    <li>Radiátorok listákban fejléc hibák
                        voltak.</li>
                    <li>Meditherm változatban a nyári
                    hőterhelés értéke nem lett
                        inicializálva nullára.</li>
                    <li>Román változat előkészítése a
                    román szabvány alkalmazására. Ez csak
                        a román nemzeti változatnál érdekes.</li>
                    <li>Projekt beállítások elmenthetők
                    külön fájlba, amiből be is
                        tölthetők az adatok.</li>
                    <li>A projekt beállításokon belül a
                    csomóponti elemeknél az automatikus
                    típusválasztás részletesebben
                    megadható. A kapcsolódó csőfajták
                    alapján határozza meg, hogy melyik
                        elemet alkalmazza.</li>
                </ul>
                <p><b>4.30 -&gt; 4.31</b> (2003. november 15.)</p>
                <ul>
                    <li>A felületfűtési-hűtési köröknél a
                    tömegáram megadható regiszterenkénti
                        fajlagos értékkel is.</li>
                    <li>A hűtési hálózat számításakor a
                    táblázatos megjelenítésnél az össz
                    nyomásesés rovat rosszul
                        számítódott.</li>
                    <li>Ha egy felületfűtési-hűtési körön
                    belül vegyesen szerepelt fal- és
                    padlófűtés-hűtés, a
                    regiszter-ellenállás rosszul lett
                        számítva.</li>
                </ul>
                <p><b>4.26 -&gt; 4.30</b> (2003. november 9.)</p>
                <ul>
                    <li>A padlófűtésen belül a falfűtések
                    részletes kidolgozása. A fűtés
                    mellett hűtés számítása is
                        lehetséges.</li>
                    <li>Az ismert teljesítményű
                    fogyasztóknál hűtési adatok is
                        megadhatók.</li>
                    <li>A hálózat számításakor külön
                    méretezhető fűtésre illetve hűtésre
                        a hálózat.</li>
                    <li>A csőszigetelés méretének
                    kiválasztása gyakran a szükségesnél
                        eggyel nagyobb méretet adott.</li>
                    <li>A padlófűtési mezőkhöz tartozó
                    anyagkigyűjtést a hálózat
                    számításon belül eddig nem tette meg
                        a program.</li>
                    <li>Helyiségek funkciójánál az üres
                    bejegyzést is megjegyezte és
                        felkínálta a listában.</li>
                    <li>A lista formátumoknál az általános
                    számábrázolási mód nem volt minden
                    esetben beállítható, illetve nem a
                        szerint jelentek meg az adatok.</li>
                    <li>A hálózat számításon belül - egy
                    új funkció segítségével -
                    lehetséges két pont közti
                        nyomáskülönbség lekérdezése.</li>
                    <li>Adatbázis frissítésnél, ha a
                    betöltendő fájl útvonal nevében
                    szerepelt az XML szövegrész, nem
                    sikerült betöltenie a programnak az
                        adatokat a fájlból.</li>
                    <li>A program beállítások viselkedés
                    lapján új opció, ami a
                    páradiffúziós számításnak egy
                    egyszerűbb, de a magyar szabványtól
                    eltérő módját teszi lehetővé.
                    Elsősorban az idegen nyelvű változatok
                        számára készült ez a módosítás.</li>
                </ul>
                <p><b>4.25 -&gt; 4.26</b> (2003. május 23.)</p>
                <ul>
                    <li>Ha zárt tágulási tartályt írtunk
                    elő, és gyártmányt is megadtunk,
                    amennyiben a legnagyobb méretnél
                    nagyobbra lett volna szükség, a program
                    nem végezte el a rendszer hidraulikai
                        méretezését.</li>
                    <li>A típusmódosítások funkciónál, ha
                    egy keresésnél szűkítettük a csere
                    körét, például csak csövekre
                    kértük, akkor legközelebb, ha már
                    teljes keresést szerettünk volna, a
                    választható elemek köre csak a
                    korábbi szűkítés szerint lett
                        feltöltve.</li>
                    <li>A keresés, csere funkciónál szakaszok,
                    túláramszelepek és nyomáskülönbség
                    szabályzók esetén, ahol két részből
                    tevődik össze az elem elnevezése,
                    amennyiben csak az egyik részre
                    teljesült a keresési feltétel, a csere
                    után a másik rész kitörlődött a
                        névből.</li>
                    <li>Típusmódosításnál a padlófűtések
                    cseréje után nem számolta
                    automatikusan újra az egyes köröket a
                        program.</li>
                    <li>Globális hőmérséklet módosításkor
                    az egycsöves és padlófűtés köröket
                    nem számolta újra a program, bár
                    megváltozhatott a hőleadás, ha
                    módosítottuk a helyiség
                        hőmérsékletet.</li>
                </ul>
                <p><b>4.24 -&gt; 4.25</b> (2003. május 14.)</p>
                <ul>
                    <li>Egycsöves körök radiátorainál, ha az
                    egyedi adatmegadást választottuk, a kv
                        értéket nem kezelte a program.</li>
                    <li>Program felkészítése idegen nyelvű
                    változatok kezelésére, XML adatbázis
                    fájlokban a többnyelvűséget segítő
                        elemek alkalmazása.</li>
                </ul>
                <p><b>4.23 -&gt; 4.24</b> (2003. április 28.)</p>
                <ul>
                    <li>Az alaki ellenállások táblázatnál
                    újabb oszlop használható, ami mindig a
                    számításnál alkalmazott méretet
                        jelöli.</li>
                    <li>Egycsöves kör radiátorainál új
                    táblázat oszlop, ami a teljesítmény
                    igény és a tényleges hőleadás
                    (radiátor + csövek) különbségét
                        tartalmazza.</li>
                    <li>Kétcsöves radiátorok bekötési hossza
                    a radiátor kiválasztásakor egyből
                    megadható. Ez a funkció a program
                        beállításokban kikapcsolható.</li>
                    <li>A kétcsöves radiátorok
                    kiválasztásakor az ajánlati listánál
                    is használható szűkítésre az
                    építési magasság lista. A korábbi
                    működéshez, valamennyi építési
                    magasság megjelenítéséhez a lista
                        tartalmaz egy mind megjelölést is.</li>
                    <li>A típusmódosítások makróval eset
                    viselkedése lett módosítva. Az alaki
                    ellenállások eddig nem módosultak, ha
                    a makró nem tartalmazott ilyeneket.
                    Mostantól ebben az esetben törli a
                    korábbi elemeket. Ha ezt szeretnénk
                    elkerülni, a típusmódosítások első
                    lapján a módosítandó elem típusok
                    listában kapcsoljuk ki az alaki
                        ellenállásokat.</li>
                    <li>A szerkezetek cseréjénél, ha a
                    keresendő szerkezetet a jegyzékből
                    választottuk ki, a módosítható
                    értékeknél nem aktualizálta
                    automatikusan, hogy melyek az
                        engedélyezett rovatok.</li>
                    <li>A táblázatok fejlécénél maguk a
                    fejléc szövegek is módosíthatók,
                    illetve egy szorzó is rendelhető a
                    valós értékek kijelzésére szolgáló
                    oszlopoknál. Ezzel lehetséges az
                    értékek más mértékegységben való
                        kijelzése is.</li>
                    <li>A típusmódosításoknál a
                    csőszigetelések, szelepek és alaki
                    ellenállások esetén, a szabály
                    táblázatban a jobb gomb megnyomására
                    feljövő menüben választható a
                    törlendő jelzés. Az így megjelölt
                        elemeket törli a helyettesítéskor.</li>
                    <li>A helyiség funkciója rovatba, ha olyan
                    megnevezést adunk, ami még nem
                    szerepelt a listában, akkor azt felveszi
                    oda egy következő helyiségnél már.
                    Az így megadott értékek a Windows
                    regisztrációs adatbázisában
                        tárolódnak.</li>
                </ul>
                <p><b>4.22 -&gt; 4.23</b> (2003. április 2.)</p>
                <ul>
                    <li>A hálózat számításnál, ha
                    nyomáskülönbség szabályzó mögötti
                    rész tartalmazott strangszelepet is, a
                    program nem tudta a számítást
                        befejezni.</li>
                    <li>Az adatbázis karbantartásnál a csoport
                    törléskor az alcsoportok is
                        törlődnek.</li>
                </ul>
                <p><b>4.21 -&gt; 4.22</b> (2003. március 20.)</p>
                <ul>
                    <li>A hálózat számítás eredményeinek
                    nyomtatásakor, ha a hálózat
                    tartalmazott túláramszelepeket is, a
                        strangszelepek hibásan jelentek meg.</li>
                    <li>Az adatbázis karbantartásnál, ha egy
                    csoportot törlünk, az összes, abból
                        nyíló alcsoport is törlésre kerül.</li>
                </ul>
                <p><b>4.20 -&gt; 4.21</b> (2003. március 16.)</p>
                <ul>
                    <li>Nem engedett az adatbázisba szelepet
                        betölteni a program.</li>
                    <li>A hálózat számításnál, az
                    eredmények nyomtatásakor is bekerül
                    egy elválasztó a fogyasztók és a
                        strangszelepek közé.</li>
                    <li>Az egycsöves és padlófűtés körök
                    táblázatoknál a helyiség neve rovat
                        kiegészült a helyiség útvonalával.</li>
                    <li>A program megjegyzi a párbeszéd ablakok
                    legutolsó méretét és pozícióját,
                        legközelebb is ugyanazt használja.</li>
                    <li>A keresés, csere funkció lehetővé
                    teszi, hogy ne csak az aktuális
                    csoportban keressünk, hanem a teljes
                        csoport hierarchiában.</li>
                </ul>
                <p><b>4.13 -&gt; 4.20</b> (2003. március 8.)</p>
                <ul>
                    <li>Új projekt létrehozásakor az
                    adminisztratív adatok megadására
                    szolgáló ablak automatikusan
                    megjelenik, ez a program beállítások
                        projekt adatok lapján kikapcsolható.</li>
                    <li>Szerkezetek szövegfájlból való
                    betöltésekor azok nem lettek
                    automatikusan újra számítva, így a
                    számított adatai, például a
                        hőátbocsátási tényező nulla maradt.</li>
                    <li>Kétcsöves radiátorok ajánlásakor a
                    nem járatos méretek kihagyása az
                    ajánlati táblázatból, ez a program
                    beállítások viselkedés lapján
                        kikapcsolható.</li>
                    <li>Csomópontok elnevezésénél az
                    ékezetes, illetve a kis- és nagybetűk
                    megkülönböztetése kikapcsolható a
                    program beállítások viselkedés
                        lapján.</li>
                    <li>Az előbeállítással rendelkező
                    termosztatikus szelepeknél egy új
                    alkalmazási mód, termosztatikus szelep
                    nyitott előbeállítással is
                        választható.</li>
                    <li>A különböző hierarchikus listák
                    felépítése gyorsítva lett a
                        programban.</li>
                    <li>A hidraulikai módosítás makróval
                    funkció a szelepek alkalmazási módját
                    illetve a cső, szigetelés és szelep
                        méretét nem módosította.</li>
                    <li>Az adatbázis forrásfájloknál a
                    korábbi szöveg (TXT) formátum mellett
                    XML formátum is használható. Ez a
                    típusú forrás több apró módosítás
                    mellett alkalmas az idegen nyelvű
                    adatbázisokhoz szükséges más nyelvű
                    szövegek tárolására is. Mind az
                    export, mind a betöltés funkció
                    esetén választható az XML fájl
                        kiterjesztés is a korábbi TXT mellett.</li>
                    <li>A jegyzékekben a szerkesztés menüpont
                    alatt új a keresés, csere funkció.
                    Segítségével az aktuális csoporton
                    belül végezhetünk keresést, illetve
                    cserélhetjük ki az elnevezéseket. A
                    funkció lehetővé teszi a szokásos
                    joker karakterek (* és ?) használatát
                        is.</li>
                    <li>A hálózat számításakor kijelzésre
                    kerül a rendelkezésre álló nyomás
                    is. Ez piros színnel kerül kiírásra,
                    ha kisebb a hálózat
                    nyomásigényénél. Korábban erről
                    semmilyen hibajelzést nem adott a
                        program.</li>
                    <li>A hálózat számítás fogyasztók
                    táblázatának nyomtatásakor, a
                    képernyőn megjelenő táblázattól
                    eltérően nem a kör nyomásigénye,
                    hanem a fogyasztót tartalmazó szakasz
                    ellenállása jelent meg a szumma dP
                        rovatban.</li>
                    <li>A hálózat számítás táblázatainál
                    a cső, a csőszigetelés és a szelep
                    méretének kijelzésére újabb oszlop
                    használható, ami mindig a
                    számításnál alkalmazott méretet
                        jelöli.</li>
                    <li>A hálózat számítás fogyasztók
                    táblázata a továbbiakban nem csak a
                    fogyasztókat, hanem a strangszelepeket
                    is tartalmazza. Ezzel a beszabályozási
                    terv áttekinthetőbb és közvetlenül
                        nyomtatható.</li>
                    <li>Egyedi alaki ellenállásoknál a méret
                    értéket csak akkor illeszti a program a
                    névhez a listákban, ha azt megadtuk, a
                        0 érték nem kerül kijelzésre.</li>
                    <li>Az általános alaki ellenállások
                    közül kiválasztott, az adatbázisban
                    méretsorral nem rendelkező elemek az
                    anyagkigyűjtésben mérettől
                    függetlenül, egybe lettek számítva.
                    Az adatbázis módosításával ezek az
                    elemek is méretenként külön
                    gyűjthetők, a méret megjelölésre a
                    program a cső méret jelölését veszi
                        át.</li>
                </ul>
                <p><b>4.12 -&gt; 4.13</b> (2003. február 7.)</p>
                <ul>
                    <li>A kétcsöves radiátorok bekötésénél
                    az alkalmazott szimbólumokat nem mindig
                        találta meg a program.</li>
                </ul>
                <p><b>4.11 -&gt; 4.12</b> (2003. február 5.)</p>
                <ul>
                    <li>Ha egy projektet különböző
                    változatokkal használunk, a projekt
                        beállítások elromolhattak.</li>
                    <li>Az adatbázis karbantartásban betöltés
                    funkciójánál egyszerre több
                        szövegfájl is kijelölhető.</li>
                    <li>Egyes párbeszédpaneleknél, ahol az
                    adatbázisból nagyobb mennyiséget kell
                    beolvasnia a programnak, a program
                    megjegyzi egy korábbi beolvasás
                    eredményét, így a párbeszédpanel
                    második megnyitása már sokkal
                    rövidebb ideig tart. Ha a választékon
                    módosítunk, vagy az adatbázis
                    karbantartásba belépünk, a program
                    újra beolvassa az adatbázist, mert a
                    korábbi elmentés esetleg nem lenne
                        érvényes.</li>
                </ul>
                <p><b>4.10 -&gt; 4.11</b> (2003. január 8.)</p>
                <ul>
                    <li>A primer rendszer számításánál, ha
                    szekunder rendszerek (hőcserélők,
                    keverőszelepek) is csatlakoztak hozzá,
                    nem tudta a szekunder rendszereket
                    leméretezni. Csak a 4.10-ben volt ez a
                        hiba.</li>
                </ul>
                <p><b>4.05 -&gt; 4.10</b> (2002. december 17.) <em>Köszönet
                Braun Attilának a javaslatokért és
                hibajelentésekért</em></p>
                <ul>
                    <li>A primer rendszer tágulási
                    tartályának számítását nem lehetett
                    nyomtatni. A fogyasztók táblázat
                    nyomtatásakor jelenik meg a
                    továbbiakban, a rendszerre vonatkozó
                        összefoglaló adatokkal együtt.</li>
                    <li>Makro export felesleges idézőjelei
                    miatt nem volt beolvasható javítás
                        nélkül.</li>
                    <li>A nyomtatásnál alkalmazott logo
                    fájlként kiválasztható volt JPG fájl
                    is, amit viszont nem tudott a program
                    megjeleníteni. A továbbiakban csak BMP
                        fájl választható ki.</li>
                    <li>A dinamikus nyomás dimenziója több
                        táblázatban is hibásan jelent meg.</li>
                    <li>A projekt beállítások fogyasztó és
                    szakasz lapjain beállítható a
                    minimális csőátmérő, annál
                    vékonyabb csöveket a program nem
                        ajánl.</li>
                    <li>Szintén ezeken a lapokon, ha a sebesség
                    és a fajlagos nyomásesés maximumot
                    nullának adjuk meg, akkor a KOMPLEX
                    programhoz hasonlóan a csöveknél
                    megadott határsebességet használja a
                    program az ajánlott csőméret
                        számításánál.</li>
                    <li>Több párbeszédpanel megjegyzi, ha
                    korábban teljes képernyősen
                    használtuk, és újbóli megnyitásakor
                    megint a teljes képernyős módban
                        jelenik meg.</li>
                    <li>Kétcsöves radiátorok bekötési
                    pontjainál is lehetséges automatikus
                    érték megadás, ami a projekt
                    beállításoknál adható meg, illetve
                    különböző szimbólumok is
                        használhatók erre.</li>
                    <li>A hidraulikai módosítások kiegészült
                    egy új móddal, makrót rendelhetünk
                    egyszerre több elemhez is, és a makró
                    tartalma szerint módosítja az egyes
                        elemeket a program.</li>
                </ul>
                <p><b>4.04 -&gt; 4.05</b> (2002. november 21.)</p>
                <ul>
                    <li>Az építőanyagoknál új anyag
                    felvétele, módosítása hibát
                        okozhatott.</li>
                    <li>A hálózat számítás körök
                    táblázatánál az összellenállás
                    eddig a fogyasztó szakasz ellenállása
                    volt, mostantól az adott kör
                    összellenállása jelenik meg ebben a
                        rovatban.</li>
                    <li>Az auto méretű alaki ellenállások
                    méret megválasztása módosult. Ha a
                    cső névleges átmérőhöz nem talál a
                    méretsorban illeszkedőt, akkor a
                    csőhöz kapcsolható szelep méretével
                    is keres a rendelkezésre álló
                        méretekben.</li>
                    <li>Táblázatos nyomtatásnál a fejléc
                    átméretezés néhány típusnál
                    (normál szakaszok, túláramszelepek,
                    nyomáskülönbség szabályzók,
                    anyagjegyzék) nem jól tárolta,
                        és/vagy nem volt hatása.</li>
                    <li>Szakaszok részletes nyomtatásánál
                    olyan adatok is megjelentek (közeg
                    adatok például), amik nem voltak
                        érvényesek.</li>
                    <li>A hibalistában a kétcsöves
                    radiátorokra vonatkozó hibajelzések ki
                    lettek egészítve a radiátor
                    indexével, hogy amennyiben egy
                    helyiséghez több radiátor is tartozik,
                        könnyebb legyen a beazonosítás.</li>
                    <li>A hálózat köreinek nyomtatásakor a
                    táblázat után kiírásra kerülnek a
                    hálózatra vonatkozó főbb jellemzők
                    (összes teljesítmény, tömegáram,
                        rendszer ellenállás, közeg adatok).</li>
                    <li>Padlófűtés típusokhoz nem lehetett
                    betölteni olyan rendszert, aminél csak
                        egy burkolat típus szerepelt.</li>
                    <li>Lehetséges a költségvetés készítő
                    program közvetlen indítása, a program
                    beállítások alatt lehet beállítani a
                    használt költségvetés készítő
                    programot. (A telepítő CD tartalmazza a
                    KönyvCalc költségvetés készítő
                    program PrintShow változatát, ami a
                    költségvetések formázására és
                    kinyomtatására használható, ingyenes
                        változat.)</li>
                </ul>
                <p><b>4.03 -&gt; 4.04</b> (2002. november 3.)</p>
                <ul>
                    <li>Az előremenő hálózatrészbe helyezett
                        strangszelepek hibát okozhattak.</li>
                    <li>Az adatbázis elemek exportjánál több
                    típus esetén is a kimeneti text
                    fájlban érvényes adatok is
                    megjegyzésként jelentek meg, a
                        feleslegesen kiírt pontosvesszők miatt.</li>
                    <li>Halmazfájlok (szűkített
                    választékokhoz) elmentésekor a
                    csőszigetelések és tágulási
                        tartályok típusai nem tárolódtak.</li>
                </ul>
                <p><b>4.02 -&gt; 4.03</b> (2002. október 30.)</p>
                <ul>
                    <li>A szelepek választéka a hidraulikai
                    képernyőkön mindig a kétcsöves
                    radiátorokhoz alkalmazhatókkal
                        töltődött fel.</li>
                    <li>A Danfoss ASV-Q szelep nyomásesése
                    hibásan lett számítva a teljes
                    rendszer nyomásesésekor, ezért a
                    beszabályozásnál lehet, hogy nem volt
                    meg a szelep működéséhez szükséges
                        nyomáskülönbség.</li>
                    <li>Egycsöves körök esetén az átfolyós
                    radiátor bekötés, ha az tartalmazott
                    alaki ellenállást, hibát okozott az
                        elem újbóli elővételekor.</li>
                    <li>A hidraulikai képernyőkön, a csövek,
                    csőszigetelések és szabályzók
                    kiválasztásához egy strukturált
                        megjelenítés is rendelkezésre áll.</li>
                </ul>
                <p><b>4.01 -&gt; 4.02</b> (2002. október 18.)</p>
                <ul>
                    <li>A kétcsöves radiátorokhoz rendelt
                    hidraulikába foglalt elemek nem jelentek
                        meg az anyagkigyűjtésben.</li>
                    <li>Ha egy előbeállításos termosztatikus
                    szelep esetén az adatbázisban a nyitott
                    szelepálláshoz tartozó kv érték
                    kisebb volt, mint az az érték, amit a
                    csak elzárásos esetnél használ, a
                    beszabályozás után túl kicsi
                    rendelkezésre álló nyomás
                    hibaüzenetet kaphattunk az adott
                        szelepre.</li>
                    <li>A típusmódosításkor, ha a közeg
                    típusát változtattuk meg egyes
                    fogyasztóknál, a program nem számolta
                    át az új közegnek megfelelően a
                    tömegáramokat, hanem a korábbi
                        értékekkel számolt.</li>
                    <li>A padlófűtés körök jegyzék
                    listájában a sebesség rovatban is az
                        összes felület jelent meg hibásan.</li>
                    <li>Nyomtatások egy részénél a
                    táblázatokban, ha amúgy a képernyőn
                    egy mező pirosan jelent meg,
                    nyomtatáskor a &quot;red&quot; szöveg
                        jelent meg az adott érték előtt.</li>
                </ul>
                <p><b>4.00 -&gt; 4.01</b> (2002. október 10.)</p>
                <ul>
                    <li>A beolvasott KOMPLEX projekt hidraulikai
                    számítása hibát jelzett, ha a KOMPLEX
                    projektben egy csomópont nevét egyszer
                    kisbetűkkel, máskor nagybetűkkel
                    írtuk. A KOMPLEX program nem tett
                    különbséget a kis- és nagybetűk
                    közt, a WinWatt viszont igen.
                    Módosítva lett a KOMPLEX projekt
                    beolvasás, a csomópont neveket
                    automatikusan kisbetűsekké alakítja
                        át, így a probléma megszűnik.</li>
                    <li>Ha a projekt több strangszelepet
                    tartalmazott, a hidraulikai számítás
                    nem biztos, hogy jó stratégiát
                    választott, esetleg a számítás nem is
                        fejeződött be.</li>
                </ul>
                <p><b>3.13 -&gt; 4.00</b> (2002. október 1.)</p>
                <ul>
                    <li>Az új modulok megjelenése (egycsöves
                        körök, padlófűtés, hidraulika).</li>
                </ul>
                <p><b>3.12 -&gt; 3.13</b> (2002. augusztus 1.)</p>
                <ul>
                    <li>Egymásba ágyazott épületek esetén
                    adódhatott probléma az épületek
                        hierarchiájának feldolgozásakor.</li>
                </ul>
                <p><b>3.11 -&gt; 3.12</b> (2002. július 8.)</p>
                <ul>
                    <li>A nyári hőterhelés számításánál a
                    szabványtól eltérő meteorológiai
                    adatok küzül csak a külső
                    hőmérséklet megváltoztatásnak volt
                    hatása, a javítással már a
                    napsugárzási adatok módosítása is
                        érvényre jut.</li>
                    <li>A kétcsöves radiátorok projektben
                    való tárolása módosult, a hidraulikai
                    adatok tárolásának
                    előkészítésével. Ez abból a
                    szempontból érdekes, hogy az ezzel,
                    illetve a későbbi verzióval készült
                    projekteket az alacsonyabb verziók nem
                    képesek helyesen betölteni, azok
                        frissítése szükséges.</li>
                </ul>
                <p><b>3.10 -&gt; 3.11</b> (2002. április 29.)</p>
                <ul>
                    <li>A projekt beállításoknál a
                    szabványtól eltérő meteorológiai
                    adatsor elmentése egy adott név alatt
                    hibásan működött, ha a Windows
                    beállításokban nem a pont volt
                    beállítva a tizedesek
                        elválasztására.</li>
                    <li>A helyiségek határoló szerkezeteinek
                    felvitele képernyőn, ha módosítottuk
                    egy szerkezet méreteit, a felület nem
                    aktualizálódott azonnal. Ha az így
                    módosított szerkezet felületét
                    próbáltuk levonni egy másik szerkezet
                    felületéből, akkor a javítás előtti
                        méretet használta még.</li>
                    <li>A kétcsöves radiátorok módosítása
                    funkcióban sajnos az előző kiadott
                    változatban a szabály bevitel nem
                    működött. Ugyanitt új lehetőség,
                    hogy a közeghőmérsékletek
                    változtatásánál csak a belépő vagy
                    a kilépő értéket adjuk meg, és
                        változatlan hőlépcsőt írunk elő.</li>
                </ul>
                <p><b>3.06 -&gt; 3.10</b> (2002. április 24.)</p>
                <ul>
                    <li>A réteges szerkezetek számításánál
                    újabb eredmény került kijelzésre.
                    Külső falszerkezeteknél, a projekt
                    beállításokban megadott téli
                    méretezési külső hőmérséklet
                    mellett, a kialakuló belső felületi
                        hőmérséklet értéke.</li>
                    <li>A helyiségek táblázatainál
                    kijelzésre került a térfogatra
                    vetített fajlagos érték, mind a téli
                    hőszükségletre, mind a nyári
                    hőterhelésre, valamint a radiátorok
                    teljesítménye alapján számított
                        maradék hőigény.</li>
                    <li>Helyiségek belső szerkezeteinél
                    hibajelzést kapunk, ha a túloldali
                    hőmérséklet és a helyiség
                    hőmérséklet megegyezik. A hibajelzés
                    a program beállításokban
                        kikapcsolható.</li>
                    <li>A program beállítások szerkezetek
                    lapja átalakult. Nem csak a szerkezetek
                    dialógusra vonatkozó beállításokat
                    tartalmaz mostantól, és neve is, ennek
                        megfelelően, viselkedésre változott.</li>
                    <li>Nyomtatáskor a lapszámozás nem csak
                    egytől, hanem a megadott értéktől is
                        indulhat.</li>
                    <li>Az eszközök menü új funkcióval
                    bővült. A kétcsöves radiátorok
                    módosítása alatt többféle
                    változtatást is végezhetünk.
                    Lehetséges a belépő és kilépő
                    vízhőmérséklet módosítása, esetleg
                    ezzel együtt új méret kiválasztása
                    is. Ugyanitt gyártmányok
                        kicserélésére is lehetőség van.</li>
                </ul>
                <p><b>3.05 -&gt; 3.06</b> (2002. április 8.)</p>
                <ul>
                    <li>A szerkezeteknél, ha a rétegek
                    sorrendje belülről kifelé lett
                    megadva, a feltöltési idő
                    számításnál nem a megfelelő oldali
                    gőzáramot vette fel a program, és ha
                    egyensúlyi állapotban páralecsapódás
                    volt, akkor a számított feltöltési
                        idő hibás lett.</li>
                    <li>A meghibásodott projektek
                    helyreállítására a hibás rekordok
                    részleges feldolgozását elvégzi a
                        program, így a hibák kijavíthatók.</li>
                </ul>
                <p><b>3.03 -&gt; 3.05</b> (2002. február 5.)</p>
                <ul>
                    <li>Elemek másolása és átnevezése után
                        az adatbázis megsérülhetett. <strong>Fontos
                        javítás</strong>.</li>
                    <li>A jegyzékek ikonjai az előző
                    verzióban &quot;elcsúsztak&quot;, a
                    fejlécben nem a jegyzéknek megfelelő
                        ikon jelent meg.</li>
                    <li>Anyagok másolása és beillesztése
                        hibát okozott.</li>
                </ul>
                <p><b>3.02 -&gt; 3.03</b> (2001. november 19.)</p>
                <ul>
                    <li>Az energetikai számítás nyomtatásakor
                    megjelenik egy értékelő mondat is,
                    hogy a számított fajlagos veszteség
                    hogyan viszonyul a megengedett
                        értékhez.</li>
                    <li>A mentés másként funkció hibás volt
                        a korábbi verziókban.</li>
                    <li>Új elemek létrehozásánál csupa
                    betűköz is lehetett az elemnév, ami a
                    későbbiekben a projektet
                        használhatatlanná tudta tenni.</li>
                    <li>Az épület módosítás
                    párbeszédpaneljén nem jelent meg a
                    kiválasztott radiátorok
                    összteljesítménye (3.02 verzióban
                        csak), de nyomtatáskor már megjelent.</li>
                    <li>A radiátorok szűkített
                    választékának kialakítására
                    alkalmazott halmazfájlok formátuma
                    változott, a korábbi halmazfájlok nem
                        alkalmazhatóak.</li>
                    <li>Lehetőség van, szűkített választék
                    alapján, új adatbázis generálására.
                    A jóval kevesebb elemet tartalmazó
                    adatbázist használva gyorsabbá válik
                        a program az adatbázis műveleteknél.</li>
                </ul>
                <p><b>3.01 -&gt; 3.02</b> (2001. szeptember 24.)</p>
                <ul>
                    <li>A jegyzékek tartalmának nyomtatása nem
                    volt lehetséges, ha nem a program által
                    feltételezett dátum formátum (Windows
                        beállítás) volt megadva.</li>
                    <li>Az adatbázis karbantartásnál a
                    radiátorok adatainak exportálásakor,
                    ha a Windows beállításokban a tizedes
                    jelölésre a vessző volt beállítva,
                    az így elmentett adatokat a program nem
                    volt képes betölteni. Módosítva a
                    programot, a szövegfájlok
                    betöltésekor a tizedes jelölésre mind
                        a pont, mind a vessző használható.</li>
                    <li>A szerkezeteket alkotó rétegek
                    adatainál új rovat került
                    bevezetésre, a feltöltési kezdeti
                    nedvességtartalom. A szabvány ezt a
                    kezdeti értéket, a 60 %-os relatív
                    páratartalomhoz tartozó
                    nedvességtartalom értékre írja elő.
                    Csak akkor adjon meg ebben a rovatban
                    értéket (a nulla esetén a program
                    továbbra is a szabvány szerinti
                    értékkel számol), ha pontosan
                        tisztában van a számítás menetével.</li>
                    <li>Az anyag adatbázisban bevezetésre
                    került a gyártó által védett anyag
                    tulajdonság. Az ilyen tulajdonsággal
                    rendelkező anyagok adatai nem
                    módosíthatók, kivéve a réteg
                    vastagsága, a hővezetési tényező
                    korrekciós értéke, és a kezdeti
                        nedvességtartalmak.</li>
                    <li>A program beállítások nyomtatási lap
                    részén újabb opciók kerültek
                    bevezetésre. Egyrészt a Program
                    azonosító a láblécben kapcsolót
                    bekapcsolva, a nyomtatáskor a lapok
                    alján megjelenik a program neve,
                    verziószáma. Ezen kívül
                    kialakíthatunk egy céges fejlécet is a
                    nyomtatáshoz. A céges fejléc
                        szövegből és egy képből állhat. </li>
                </ul>
                <p><b>3.00 -&gt; 3.01</b> (2001. június 5.)</p>
                <ul>
                    <li>A jegyzékek tartalmához nem lehetett
                    hozzáférni olyan gépeken, ahol nem a
                    program által feltételezett dátum
                    formátum (Windows beállítás) volt
                    megadva. Az új verzió erre
                        érzéketlen. </li>
                    <li>Szerkezet diagram nyomtatásnál egyes
                    nyomtatókon nem jelent meg valamennyi
                    vonal. A program beállítások,
                    nyomtatás lapra új kapcsoló került,
                    aminek a segítségével letiltható a
                        diagramok színes nyomtatása.</li>
                    <li>Kicsit módosítva lett a határoló
                    szerkezetek helyzetét szimbolizáló
                    iránytű, a könnyebb értelmezhetőség
                    végett. E mellett az épületeknél is
                    megjelenik egy szimbólum a tájolás
                        értelmezéséhez.</li>
                    <li>Import esetén feleslegesen szerepelt a
                        párbeszédpanelen a <em>mind</em>
                        kapcsoló, mert a szelektálást
                        mindenképpen el kell végezni, hogy a
                        program ellenőrizni tudja az esetleges
                        ütközéseket a nevekben.</li>
                    <li>Az eszközök menüben elérhető
                    funkciókhoz tartozó párbeszédpanelen
                    a helyiségek lista főcsoportjának a
                        megjelölése hibásan <em>szerkezet</em>
                        volt <em>helyiség</em> helyett.</li>
                    <li>Lehetővé vált a KOMPLEX programmal
                    készült korábbi számítások
                    átemelése az új programba. A
                    konverzió természetesen csak az adott
                    WinWatt verzióban érvényes részekre
                    terjed ki. A funkció az Eszközök
                        menüben található.</li>
                    <li>Szerkezetek páradiffúziós
                    számításánál előfordult, hogy
                    hibásan határozta meg a szerkezetben
                    kialakuló, az egyensúlyi állapothoz
                        tartozó parciális vízgőznyomást.</li>
                </ul>
            </div>
        );
    }
}

export default Ww32Ver6;