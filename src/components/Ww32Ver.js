import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


class Ww32Ver extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="Ww32Ver pl3 overflow-x-hidden ">
                <Helmet><title>A 32 bites WinWatt program verziók áttekintése</title></Helmet>
                <h2>A 32 bites WinWatt program verziók áttekintése</h2>
                <h5><Link to="/public/frissitok.html">Ugrás a frissítés letöltés lapjára.</Link></h5>
                <p><b>8.24 -&gt; 8.25</b> (2020. augusztus 3.)</p>
                <ul>
                    <li>Nyílászárók számításánál a körben eltérő keret opció nem működött helyesen a 8.24 verzióban.</li>
                    <li>A felületekkel megadott nyílászáró számításnál nem jelent meg az üvegezés g értéke.</li>
                </ul>
                <p><b>8.23 -&gt; 8.24</b> (2020. július 29.)</p>
                <ul>
                    <li>A nyílászáróhoz társított szerkezet hővezetési ellenállásával számolt csökkent hőátbocsátási tényező a kotábbi 50 % helyett csak 30 %-ban lesz figyelembe véve az MSZ EN ISO 10077-1 szabvány alapján.</li>
                    <li>A nyílászárókhoz társított szerkezetek javasolt hővezetési ellenállása kiegészült az MSZ EN ISO 10077-1 szabvány értékeivel.</li>
                    <li>A nyílászárók U értékének meghatározására új, szabadabb adatmegadási lehetőség bevezetése.</li>
                    <li>A tanúsítás besorolási ábráján az AA és jobb besorolások esetén nem a megfelelő helyre került a marker.</li>
                </ul>

                <p><b>8.22 -&gt; 8.23</b> (2020. június 22.)</p>
                <ul>
                    <li>Az anyagok importja fájlból a 8.20 verziótól, ha abban rétegrend is szerepelt, nem működött.</li>
                </ul>

                <p><b>8.20 -&gt; 8.22</b> (2020. június 16.)</p>
                <ul>
                    <li>A szerkezetek importja fájlból a 8.20 verzióban nem működött.</li>
                </ul>

                <p><b>8.19 -&gt; 8.20</b> (2020. június 15.)</p>
                <ul>
                    <li>Az anyag adatbázisnak új típusú elemei, a hővezetési tényező korrekciós értékek. </li>
                    <li>MSZ EN ISO 10456 szerinti hővezetési tényező korrekció alkalmazhatóságának bevezetése.</li>
                    <li>MSZ EN ISO 6946 szerinti hőátbocsátási tényező számítás, több eltérő rétegrend esetén.</li>
                </ul>

                <p><b>8.18 -&gt; 8.19</b> (2020. május 21.)</p>
                <ul>
                    <li>Az ArchLine programmal való kapcsolatban, a szerkezet típus WinWattból átadásnál adódó hiba javítása.</li>
                    <li>A nyári hőterhelés számításkor, ha egyedi meteorológiai adatokat használunk, a napi átlaghőmérséklettel a nem transzparens szerkezetek számításánál szereplő t0 értéket is korrigálja.</li>
                    <li>A talajon lévő padló szerkezet típus vonalmenti értékének meghatározása esetenként hibás volt. A program hibásan, a hőátadási tényezőt is belevette a rétegtervi hővezetési ellenállás értékébe, így esetenként a táblázat rossz oszlopából vette a vonalmenti értéket.</li>
                </ul>

                <p><b>8.17 -&gt; 8.18</b> (2020. április 30.)</p>
                <ul>
                    <li>A Sun modulban a PVGIS szerverrel való kommunikáció javítása</li>
                </ul>

                <p><b>8.16 -&gt; 8.17</b> (2020. március 20.)</p>
                <ul>
                    <li>Egyes táblázat exportok az Excel felé nem mindig voltak sikeresek. Például épületek határoló szerkezetei, ha kompakt nézetben az U értékre tartományt adott a program, illetve az energiafelhasználás táblázatok, ahol a szám mellett mértékegység is szerepel.</li>
                    <li>Ha egy ismert szerkezet típust úgy hoztunk létre, hogy egy réteges szerkezetnél váltottunk át ismert szerkezetre, dokumentáláskor a korábbi számított U értéket írta ki a ténylegesen megadott érték helyett.</li>
                    <li>Az optimum modulnál, ha csak a gépészetre adtunk meg variációkat, a létrejött variációk külön projektbe mentése hibát okozhatott, az új projektbe a változtatások nem kerültek be.</li>
                    <li>Ha hálózat számításon belül, felületfűtések hűtések módosításakor, ha a változás a helyiségek fűtőmezőit is érintette (átszámítás), a módosítás hibás állapothoz vezetett.</li>
                </ul>

                <p><b>8.15 -&gt; 8.16</b> (2020. február 11.)</p>
                <ul>
                    <li>Ha az 5-ös melléklet volt kiválasztva az energetikai számításhoz, a megújuló részarányt nem vette figyelembe a besoroláskor a BB feltételéhez. Csak a 8.15 verziónál.</li>
                </ul>

                <p><b>8.14 -&gt; 8.15</b> (2020. február 10.)</p>
                <ul>
                    <li>Projekt beállítások mentése és betöltése esetén a választható rendeleti állapotok többször jelentek meg.</li>
                    <li>A nyomtatások fejlécét is eltárolja a program.</li>
                    <li>A csomóponti elemekre megadott szabályok továbbfejlesztése. A csomóponti elemhez még egy további szűkítő-bővítő elem is kapcsolható, a megoldható méretkombinációk növelésére.</li>
                    <li>Az Optimum modulban a variációk kódja mellé elnevezést is felvehetünk.</li>
                    <li>Szerkezeteknél rétegrendet fordított sorrendben beszúrva hibát okozhatott.</li>
                    <li>Egyéb rendeltetésű épületnél, a megújuló részarány értékelésekor, a minimum 25 % helyett a minimum 25 kWh/m2a érték is elegendő feltétel nem minden esetben lett helyesen kezelve.</li>
                </ul>

                <p><b>8.13 -&gt; 8.14</b> (2020. január 07.)</p>
                <ul>
                    <li>Nem magyar windows esetén, a windows beállításoktól függően, az adatbázis illetve a régebbi projektek beolvasásánál az ő és ű karakterek hibás ékezettel jelentek meg.</li>
                    <li>A nyomtatáskor hosszú szövegek tördélésénél hibásan, ékezetes karakterek előtt vagy után is az adott szót eltörhette.</li>
                </ul>

                <p><b>8.12 -&gt; 8.13</b> (2019. december 11.)</p>
                <ul>
                    <li>Új rendeleti állapot bevezetése, a megújuló részarány számításból a passzív nyereség kivétele.</li>
                    <li>Az optimum modulban eltárolt gépészeti rendszerek neveiben az ékezetes karakterek, korábbi projektek beolvasásakor, hibásan jelentek meg.</li>
                </ul>

                <p><b>8.11 -&gt; 8.12</b> (2019. december 03.)</p>
                <ul>
                    <li>A Sun modulban használt webszervíz változott, ehhez lett a program igazítva.</li>
                </ul>

                <p><b>8.10 -&gt; 8.11</b> (2019. november 27.)</p>
                <ul>
                    <li>A tanúsításnál a hosszabb korszerűsítési javaslat szövegek nem jelentek meg, illetve el is veszhettek a projektből.</li>
                    <li>A szerkezetek páradiffúziós diagram képernyőn megjelenő jelentésben a rétegek nevében használt ékezetes karakterek hibásan jelentek meg.</li>
                    <li>Helyiségek exportjakor, ha radiátorok vagy padlófűtés mezők is tartoztak a helyiségekhez, akkor az excelben a táblázatok összekeveredtek.</li>
                </ul>

                <p><b>8.06 -&gt; 8.10</b> (2019. november 22.)</p>
                <ul>
                    <li>Szerkezeteket is le lehet tölteni a honlap adatbázisából.</li>
                    <li>Unicode karakterkódolás alkalmazása. Alkalmazhatók a görög és cirill betük is szövegekben. Az új verzióval a projektfájlok régebbi verzióba nem tölthetők be.</li>
                    <li>A program beállításokban elmenthetők fájlba és onnan betölthetők a fejlécek formátuma.</li>
                    <li>Egycsöves makrók használata nem működött.</li>
                    <li>Szerkezethez az anyag jegyzékből rétegrendet adva, ha abban légréteg is szerepelt, annak hővezetési ellenállása nem lett kiszámítva, 0 maradt.</li>
                    <li>A programból kilépéskor kérdés nélkül mentette a projektet, ha az változott.</li>
                    <li>A távfűtésnél, ha a felhasználó által megadott primerenergia átalakítási tényezőt választjuk, megadható az esus érték is.</li>
                </ul>

                <p><b>8.05 -&gt; 8.06</b> (2019. július 23.)</p>
                <ul>
                    <li>Sun modul szerver kapcsolódási hiba javítása. Egyes gépeken, ha nincs az SSL szolgáltatás már telepítve, ennek a telepítését is el kell végezni.</li>
                </ul>

                <p><b>8.04 -&gt; 8.05</b> (2019. július 10.)</p>
                <ul>
                    <li>Alaki ellenállásoknál a fűtésre és a hűtésre külön értékek adhatók meg.</li>
                    <li>A tanúsítási lapon néhány érték kiírása több tizedesre történik.</li>
                    <li>A Sun modul által használt webservice címe változott.</li>
                    <li>Táblázatok export esetén az Excel felé, ha egy cellának két értéke is volt (fűtés/hűtés), csak az első került átadásra.</li>
                    <li>A gbXML modul kibővult az Ortograph rendszer által generált Excel fájlok beolvasásával.</li>
                </ul>

                <p><b>8.03 -&gt; 8.04</b> (2018. december 04.)</p>
                <ul>
                    <li>Ha a program beállításokban a képernyők nagyítását kértük, egyes képernyők mérete folyamatosan növekedett.</li>
                    <li>A HidroPlan modulban, ha a felületfűtés-hűtés kör ellenállását adott értékre kívántuk hozni hűtési üzemmódban, az új visszatérő értéket a fűtési visszatérő rovatba írta.</li>
                    <li>Napkollektoros rendszer egyedi fogyasztásának megadásánál hibás alapértékek szerepeltek.</li>
                    <li>A fájlba exportált gépészeti rendszerek beolvasásakor a napelemre illetve napkollektorra vonatkozó adatok beolvasása nem történt meg.</li>
                    <li>Tanúsítás készítésekor az adminisztratív adatok és a kiértékelés lapok összes adata elmentődik a mentés fájlba, illetve betöltődik a betöltés fájlból parancsokra.</li>
                    <li>Belső hőterheléseknél a törlések nem mindig sikerültek megfelelően, nem a törölni kívánt adatai törlődtek esetenként.</li>
                </ul>

                <p><b>8.02 -&gt; 8.03</b> (2018. október 24.)</p>
                <ul>
                    <li>A helyiség makróknál a filtrációra vonatkozólag felkínált érték hibás volt.</li>
                    <li>A gépészeti rendszerek fogyasztási táblázatába a megújuló is kijelzésre kerül.</li>
                    <li>Helyiség makrók létrehozásakor a belső hőterheléseknél lehetséges az adat megadási mód váltása. Lehet a korábbi m2-re vetített fajlagos érték, vagy a konkrét érték.</li>
                    <li>Módosító tanúsítvány feltöltéshez további adatok megadhatósága az e-tansítás XML export során.</li>
                </ul>

                <p><b>8.01 -&gt; 8.02</b> (2018. szeptember 24.)</p>
                <ul>
                    <li>A projekt adatokban a GPS lekérdezés a cím alapjánhoz a cím szövege nem mindig állt elő automatikusan.</li>
                    <li>A réteges szerkezetek lemásolhatók úgy is, hogy ismert szerkezet legyen belőlük.</li>
                    <li>Építőanyagoknál a páravezetésre az Sd érték is megadható.</li>
                    <li>Távfűtés és távhűtés szolgáltató által megadott esetre a projekt beállításokban megadott esus értéket nem használta.</li>
                    <li>A tanúsítás első lapjára is felkerül az aláírás, nem csak a végére.</li>
                </ul>

                <p><b>8.00 -&gt; 8.01</b> (2018. augusztus 28.)</p>
                <ul>
                    <li>Hálózat számításkor, ha egy primer hálózat szekunder részénél valamit módosítottunk a hálózat számításon belül, akkor növekedett a rendszer nyomásesése, mert a csomóponti nyomáseséseket újból hozzáadta. A hálózat számítást újra indítva ismét a helyes eredmények jelentek meg.</li>
                    <li>Optimum modulban, ha a szerkezet cserével a légcserét is módosítani kellett, az a részépületekre nem lett alkalmazva.</li>
                    <li>Új modul érhető el (Sun modul) a napkollektorok és napelemek hozamszámítására.</li>
                    <li>A projekt adatok kiegészült a GPS pozícióval, a napkollektorok és napelemek hozamszámításához.</li>
                </ul>

                <p><b>7.90 -&gt; 8.00</b> (2018. június 28.)</p>
                <ul>
                    <li>A hálózati gráfon a cső hosszak is megjeleníthetők.</li>
                    <li>Egyedi riportok készíthetők. Ehhez külön dokumentáció tartozik.</li>
                    <li>Lehetséges problémás hardverkulcs használatkor egy adott gépre regisztrálni a programot.</li>
                </ul>

                <p><b>7.86 -&gt; 7.90</b> (2018. június 06.)</p>
                <ul>
                    <li>Nyomtatási képernyőkön a továbbiakban az export, export fájlba és a PDF export esetén nem zárja be az ablakot.</li>
                    <li>A program beállításokban a betűtípusok, fejléc és ablakbeállítások lapon egy nagyítást is meg lehet adni a programnak. Ennek hatására a párbeszédablakok nagyobb méretben jelennek meg.</li>
                    <li>Tanúsítvány export és export fájlba esetén hiányzott a hőtároló tömegek számítására vonatkozó táblázat.</li>
                </ul>

                <p><b>7.85 -&gt; 7.86</b> (2018. május 04.)</p>
                <ul>
                    <li>Windows 10 1803 verziójánál a hardverkulcs felismerés hibás lehetett.</li>
                </ul>

                <p><b>7.84 -&gt; 7.85</b> (2018. május 02.)</p>
                <ul>
                    <li>A szerkezetek számításakor nem jelent meg a csillapítási tényező és a késleltetés a 7.83 és 7.84 esetében, de számolta és későbbi helyeken meg is jelent.</li>
                    <li>HidroPlan modul radiátor illesztéskor a listában módosíthatók a radiátorok mérete is. A lista a túl nagy eltéréseket pirossal jelzi.</li>
                    <li>Összetett épületnél a lakóépülettől eltérő típusokra hibásan vette HMV igényhez a fajlagos értéket. 7.83 és 7.84 verzió</li>
                    <li>A HidroPlan modulban új lehetőség a felületfűtés-hűtés körök hidraulikai összehangolása.</li>
                </ul>

                <p><b>7.83 -&gt; 7.84</b> (2018. április 25.)</p>
                <ul>
                    <li>A 7.83 verzió egyes belső falakra is kért tájolást.</li>
                </ul>

                <p><b>7.82 -&gt; 7.83</b> (2018. április 24.)</p>
                <ul>
                    <li>Új szerkezet típus a lábazati fal.</li>
                    <li>A program beállításokban a tervezői nyilatkozatnál aláírás kép is megadható.</li>
                    <li>Összetett épületnél a teljes épületre a csökkentett HMV igényű terület esetenként hibásan lett figyelembe véve.</li>
                </ul>

                <p><b>7.81 -&gt; 7.82</b> (2018. április 10.)</p>
                <ul>
                    <li>Az egyes párbeszéd ablakokat elvettel elhagyva a bezárás előtt rákérdez, ha a programbeállítások viselkedésnél ezt bekapcsoljuk.</li>
                    <li>A helyiségenél radiátor kiválasztáskor, ha adott magasságot állítottunkbe, azt megjegyzi a következő kiválasztáshoz is.</li>
                    <li>Radiátor kiválasztáskor a radiátor ajánlatnál pótlékot is alkalmazhatunk, ennek mértékét a projekt beállításokban adhatjuk meg. Időjárásfüggő szabályozással ellátott rendszernél a helyiségekkel körbezárt belső helyiségeknél célszerű alkalmazni.</li>
                    <li>HidroPlan modul hálózat optimalizálás javítása, új lehetőségek a méretcsökkentések irányának módjaiban. Már nem csökkent méretet ott, ahol utána méret visszalépés lenne.</li>
                    <li>HidroPlan modullal megjeleníthetők a méret visszalépések a gráfon.</li>
                </ul>

                <p><b>7.80 -&gt; 7.81</b> (2018. április 03.)</p>
                <ul>
                    <li>Energetikai számításnál választható energiahordozó a távhűtés, szolgáltató által megadva.</li>
                    <li>HidroPlan modul hálózat optimalizálás javítása, új opció a méretcsökkentések irányának megadhatósága.</li>
                    <li>A program beállításokban új kapcsoló, hogy az ellenőrzéseknél a levonandó felületbe minden nyílászáró beletartozzon, a magasságától függetlenül. Ez egyben talajon lévő födém létrehozása esetén, (födémek törlése, létrehozása funkcióban) a vonalmenti hossz számítását is befolyásolja, nem veszi hozzá a vonalmenti hosszhoz a belmagassággal megegyező nyílászárókat.</li>
                    <li>A hálózat optimalizáláskor módosított szakaszok megjeleníthetők a hálózati gráfon.</li>
                </ul>

                <p><b>7.72 -&gt; 7.80</b> (2018. március 23.)</p>
                <ul>
                    <li>Hálózat számításkor, ha kettőnél több szintű a halózat, nem működött esetenként a számítás.</li>
                    <li>A HydroPlan modul megjelenése.</li>
                    <li>Optimum modulban bizonyos szűrő beállításoknál esetleg hibás variációt generált.</li>
                </ul>

                <p><b>7.71 -&gt; 7.72</b> (2018. február 12.)</p>
                <ul>
                    <li>Tanúsítványban kikapcsolható a megújuló energiák számításának dokumentálása.</li>
                    <li>Egyes felületfűtési rendszereknek a hidraulikai körbe illesztésekor hiba jelentkezhetett.</li>
                    <li>Egycsöves körök szelepeinek kiválasztása hibát okozhatott.</li>
                </ul>

                <p><b>7.70 -&gt; 7.71</b> (2018. január 29.)</p>
                <ul>
                    <li>Hálózat számításnál, ha nyomáskülönbség szabályzók és strangszelepek is szerepeltek, a strangszelepek fojtását rosszul vehette fel.</li>
                    <li>Szerkezeteknél a módosító érték alapértelmezett módja a korábbi érték megadás helyett százalék módra változtatva.</li>
                    <li>Optimum modulban az eredmények exportálásakor Excelben az energiahordozókból csak az alkalmazottak jelennek meg.</li>
                </ul>

                <p><b>7.63 -&gt; 7.70</b> (2018. január 24.)</p>
                <ul>
                    <li>A projekt beállításban módosíthatók a megújuló energia számításhoz alkalmazott esus tényezők, elsősorban a villamos energia tényezőjének módosíthatósága végett.</li>
                    <li>A megújuló energia számításból kihagyható a napsugárzásból származó rész, a projekt beállítások energatika lapján lévő kapcsolóval.</li>
                </ul>

                <p><b>7.62 -&gt; 7.63</b> (2017. december 16.)</p>
                <ul>
                    <li>A 7.62 verzióban a hálózat számításkor, ha strangszelepeket is tartalmazott a hálózat, a számítási eredményeket nem tudta megjeleníteni.</li>
                </ul>

                <p><b>7.61 -&gt; 7.62</b> (2017. december 15.)</p>
                <ul>
                    <li>Az eszközök menübe új funkció került, a helyiségek kitöltése makróval. Ez elsősorban a belső hőterhelések, helyiség jelleg szerinti gyors megadását teszi lehetővé egyszerre több helyiségre.</li>
                    <li>Szerkezetnél az U érték módosító tételeket mind kitörölve a módosító érték maga nem törlődött ki.</li>
                    <li>E-tanúsításkor, ha használatba vételhez készül, már nem kötelező az előíró határozat rész kitöltése.</li>
                    <li>A felületfűtés-hűtés körök módosításánál az átszámít gombbal a helyiség értékei is módosulnak, amit a jegyzékben nem aktualizált.</li>
                    <li>Hőszükséglet filtrációs számítása kiegészítve további infiltráció megadásának lehetőségével.</li>
                </ul>

                <p><b>7.60 -&gt; 7.61</b> (2017. június 13.)</p>
                <ul>
                    <li>Hibásan jelzett hibát a kiválasztott rendeleti mellékletre.</li>
                </ul>

                <p><b>7.57 -&gt; 7.60</b> (2017. június 12.)</p>
                <ul>
                    <li>A tanúsításnál a veszteségforrásnál meg lehet adni, hogy az e-tanúsítás feltöltéskor melyik gépészeti rendszer típus energiafelhasználásához adja hozzá. Így feltölthetővé válik ilyen esetben is a tanúsítás.</li>
                    <li>A program beállítások viselkedés lapján kérhető, hogy az épületnél a szerkezetek összesítő listája kompaktabb legyen. Így az eltérő hőmérséklet korrekciós tényező, vagy üvegezett szerkezeteknél az eltérő U érték még nem jelent külön tételt. Ez az optimum modulban is csökkenti a szerkezet típusok számát a listában.</li>
                    <li>Lehetséges egyszerre több elem törlése is a csoportos törlés funmkció segítségével.</li>
                    <li>A program beállításokban az energetikai számítás rendeleti állapota mellett az alkalmazott melléklet alapértéke is megadható az új projektekhez.</li>
                </ul>

                <p><b>7.56 -&gt; 7.57</b> (2017. május 03.)</p>
                <ul>
                    <li>Ismert szerkezetek másolása és beillesztése során egyes adatok nem mentek át.</li>
                    <li>gbXML importnál a helyiségek elnevezési módjainak bővítése.</li>
                    <li>gbXML import esetén a szerkezet hozzárendelési szabályoknál a szabály törlést is megjegyzi.</li>
                    <li>Anyag adatbázisba légréteg adatok XML-ből beolvasása hibás volt.</li>
                    <li>CadWatt projektnél, ha a szerkezetek csoportokba voltak szervezve, a szerkezeteket nem találta meg a beolvasáskor.</li>
                    <li>A csoport és az elem nevekben a továbbiakban nem alkalmazható a \ karakter, mert az esetenként problémát okozhat. Ezért a név megadáskor erre figyelmeztet.</li>
                </ul>

                <p><b>7.55 -&gt; 7.56</b> (2017. március 13.)</p>
                <ul>
                    <li>A projekttől független, globális szerkezet adatbázis, ha nem volt közben projekt megnyitva, nem minden műveletet tudott hiba nélkül végrehajtani.</li>
                </ul>

                <p><b>7.54 -&gt; 7.55</b> (2017. március 07.)</p>
                <ul>
                    <li>Épületnél a fűtött teret határoló szerkezetek felület összesítője hibás lehetett, ha hőhidak is szerepeltek a listában. A számítási eredményeket ez a hiba nem befolyásolta.</li>
                    <li>Nyílászárok XML fájlból való betöltése esetén, ha az összetevők alapján volt számítva, ez a rész nem töltődött be helyesen.</li>
                    <li>Program beállítások viselkedésnél külön lehet kérni nyárra és télre a szerkezetekre a hőmérséklet különbség ellenőrzést.</li>
                    <li>A program beállítások viselkedésnél kérhető, hogy a szelepek felkínált típusait ne szűrje az alkalmazási hely alapján.</li>
                    <li>A kétcsöves radiátorok módosítása (eszközök menüben) a megváltozott hőigényekhez is tudja igazítani a radiátor méreteket.</li>
                    <li>Az optimum modulban, ha összetettebb módon használtuk a csoport azonosítókat, nem hozott létre minden lehetséges variációt.</li>
                    <li>Projekttől független, globális szerkezet adatbázis bevezetése.</li>
                </ul>

                <p><b>7.53 -&gt; 7.54</b> (2017. január 06.)</p>
                <ul>
                    <li>A 7.53 verziónál, ha az Angol nyelvi modul is telepítve volt, hibát okozott.</li>
                    <li>A 7.53 verziónál, ArchLine projekt beolvasásnál azokra a belső szerkezetekre, amikre nincs megadva a túloldalára helyiség (tipikusan a padlásfödém ilyen), a túloldali hőmérsékletek hibásak lehettek.</li>
                </ul>

                <p><b>7.52 -&gt; 7.53</b> (2016. december 13.)</p>
                <ul>
                    <li>Helyiségek exportjánál, ha részletes Excel exportot kértünk, oszlop elcsúszás léphetett fel azoknál a verzióknál, amikben nincs nyári hőterhelés modul.</li>
                    <li>Hardverkulcs lokális kezelési módjának bevezetése a viselkedésben.</li>
                </ul>

                <p><b>7.51 -&gt; 7.52</b> (2016. december 05.)</p>
                <ul>
                    <li>Egyéb épületre az összesített energetikai jellemző megengedett értékének 6-os melléklet szerinti számításánál elmaradt a 10-zel való csökkentés. Ez valamennyi egyéb épületre a referencia értéket és esetenként a besorolást is érinti!</li>
                    <li>Az Esus számításban a további szoláris nyereség értéke rosszul lett beszámítva (csak az ezred része kWh-Wh tévesztés miatt).</li>
                    <li>A programbeállításokban a viselkedés alatt beállítható, hogy a szakaszos üzem korrekciós értékét a program ne az épülettípus szerint választható legalacsonyabb értékre, hanem 1-re vegye kiinduláskor.</li>
                    <li>Az U* megjelenítése a helyiségekben és a szerkezetek cseréjekor megjelenő listában.</li>
                    <li>Az E sus dokumentálásakor az összesítésnél a világítás értéke nem a képletben jelölt helyen szerepelt (sorrendek eltértek).</li>
                    <li>Az Optimum modulban a variációk Excel exportjakor a világítás, a légtechnika és a hűtés értékei rossz sorrenben (nem a megnevezésnek megfelelően) jelentek meg.</li>
                    <li>E-tanúsítás XML export adminisztatív adatok megadásakor a nettó alapterület mögött zárójelben megjelenő fűtött alapterület duplakattintással (az értéken) beíratható a rovatba.</li>
                    <li>Az Optimum modulban, egy optimalizálási folyamaton belül, ha töröltünk már variációkat és visszalépünk az optimalizáláson belül egy korábbi képernyőre, majd ismét generáljuk a variációkat, lehetőség van arra, hogy a korábban törölt variációk ne jelenjenek meg. Ehhez a korábban meghagyott variációk azonosítóját használja a program a szűréshez.</li>
                </ul>

                <p><b>7.50 -&gt; 7.51</b> (2016. november 08.)</p>
                <ul>
                    <li>A tanúsítási képeket és kiegészítő PDF fájlokat relatív útvonal mellett esetleg nem találta meg.</li>
                    <li>A 7.50-es verzióval az Optimum modulban elmentett gépészeti rendszerek visszaolvasása hibát okozott.</li>
                </ul>

                <p><b>7.44 -&gt; 7.50</b> (2016. október 28.)</p>
                <ul>
                    <li>Az általános módosításban az ismert teljesítményű fogyasztók jellemzői is módosíthatóak.</li>
                    <li>Projekt adatok külön is a vágólapra tehetők, más Bausoft programok számára, illetve az adatok beilleszthetők.</li>
                    <li>A tanúsítás első oldalán lévő ábra a 2016-os új kategóriák miatt magasabb lett a korábbinál. Csökkentve a mérete a korábbira.</li>
                    <li>Előfordulhatott, hogy kereskedelmi épületeknél a hűtött alapterület miatti referencia érték növelés nem működött helyesen.</li>
                    <li>Nulla vagy negatív összesített energetikai jellemző esetén a skálán nem jelent meg a jel.</li>
                    <li>A tanúsításhoz megadott képfájlokat megpróbálja relatív útvonallal kezelni, a projekt fájl útvonalához viszonyítva.</li>
                    <li>Engedélyezési tervhez készített energetikai számítás dokumentálásakor, ha korábban tanúsításhoz képeket adtunk meg a végére, ilyenkor is hozzárakta a PDF dokumentumhoz.</li>
                    <li>A program beállításokban a projekt fülön egy új kapcsolóval kérhető, hogy a projekt adatokban mindig elérhető legyen az egyszerűsített mód is.</li>
                    <li>Ismert teljesítményű fogyasztók részletes listázásakor a hűtési teljesítmény, tömegáram és közeg adatok nem jelentek meg.</li>
                    <li>Megújuló részarány számítás megvalósítása a programban.</li>
                    <li>Tanúsítás PDF fájlhoz más PDF fájlok hozzá másolhatók. Ehhez telepíteni kell a QPDF programot és a program beállításokban a külső modulok alatt meg kell adni az elérési útvonalát.</li>
                    <li>Az E-tanúsítás adminisztratív adatok ablakban részletesebb hibajelzések a hiányzó adatok esetén.</li>
                    <li>Talajjal érintkező fal esetén a padlószint ellenőrzése, csak negatív lehet.</li>
                </ul>

                <p><b>7.43 -&gt; 7.44</b> (2016. május 18.)</p>
                <ul>
                    <li>A program figyelmeztetést ad, ha a levonandó felületként mgadott szerkezet tájolása eltér attól, amiből levonjuk.</li>
                    <li>A szerkezetek megadásakor lehetséges excelből átvett táblázatból az x és y értéket beírni.</li>
                    <li>A helyiségeknél a falfűtési rendszereknél esetenként kérhető ké nem minden gépen tudott megjelenni.</li>
                    <li>Az üvegezett szerkezetekre az MSZ gombbal az árnyékolás naptényezője, ha az árnyékolás módja a nincs, bár nincs a számításban szerepe, de mostantól 1-et ír be (nincs csökkentő hatása).</li>
                    <li>Energetikai számításban, ha nyereségforrást adunk meg és az energiahordozóra a megújulót állítjuk be, figyelmeztetést kapunk. Itt azt az energiahordozót kell beállítani, amit a nyereségforrás előállít. Pl napelemnél elektromos áramot.</li>
                    <li>Szerkezetek hőmérsékleti korrekcióját a Bu tényezővel kezelve az összesített eredményeknél adódhattak kisebb eltérések az U* értékben, mert korábban a Bu alapján számolt túloldali hőmérsékletből, ami kerekítve lett, számolta vissza a korrekciós szorzót.</li>
                    <li>A hidraulikai táblázat adatok bővítése néhány adattal, többek közt a térfogatárammal lit/perc mértékegységben.</li>
                    <li>Irodaépületnél, részépületekkel, hűtési rendszerekkel számolva az energetikai jellemző összesített megengedett értéke hibás lehetett. A hűtési rendszereknél mindenképp meg kellett adni a rendszer alapterületét.</li>
                    <li>Táblázatok exportálásakor, a programban színezett (piros, zöld) értékek rosszul mehettek át.</li>
                </ul>

                <p><b>7.42 -&gt; 7.43</b> (2016. március 03.)</p>
                <ul>
                    <li>Nyílászárók energetikai dokumentálásánál, ha a kiegészítő adatokat is bekapcsoljuk, azok az adatok is bekerülnek a PDF-be.</li>
                    <li>Az irodaépületeknél az összesítet energetikai jellemző megengedett értékének a hűtéssel korrigálása az épület módosítása ablakban, ha a hűtési rendszert módosítottuk, a növekmény újból és újból hozzáadódott.</li>
                    <li>Az EQ és az ÉMI xml export alapesetben nem jelenik meg az ET készítéskor, csak ha a program beállítások viselkedés lapján azt kérjük.</li>
                    <li>Az épület adatainak módosítása ablakban, ha a BB vagy annál jobb minősítéshez az érték megfelelő, de más feltétel miatt az nem adható meg, az oka megjelenik magyarázatként.</li>
                    <li>A szerkezetek hőtároló tömeg számítása belső szerkezeteknél nem változott a rétegirány változtatáskor (mindig a kívülről befelé esetnek megfelelően számolt).</li>
                    <li>A tanúsításhoz megadott további képek sorrendje utólag is módosítható.</li>
                    <li>A nyomtatásoknál a láblécbe kerülő projektnév az útvonal nélküli alakban is megjelenhet, ha a program beállítások nyomtatási lap fülén ezt bekapcsoljuk.</li>
                    <li>Helyiségek részletes Excel exportjánál kérhető, a program beállítások viselkedés lapján, hogy minden sor elején legyen ott a helyiség azonosítója.</li>
                </ul>

                <p><b>7.41 -&gt; 7.42</b> (2016. január 14.)</p>
                <ul>
                    <li>Egyéb épületnél az összesített energetikai jellemző referencia érték meghatározáshoz mindenképpen a közel nulla energiaigényt kellett követelményszintnek beállítani.</li>
                    <li>Az e-tanúsítás XML exportban a tanúsítvány készítés célja nem megfelelő értékkel került az XML-be használatbavételi engedélyezési eljáráshoz esetben.</li>
                    <li>Irodaépületnél az összesített energetikai jellemző megengedett értékére, amennyiben épületrészeket is alkalmaztunk, a hűtés miatti korrekció nem működött helyesen.</li>
                    <li>Ellenőrzés, hogy wwp kiterjesztést ne lehessen megadni különböző exportoknál (pdf, xml, txt).</li>
                    <li>Hőtároló tömeg fajlagos érték számítás dokumentálhatósága a tanúsítványban.</li>
                </ul>

                <p><b>7.40 -&gt; 7.41</b> (2016. január 06.)</p>
                <ul>
                    <li>A 2016 előtti tanúsításoknál is tévesen alkalmazta a belső hőnyereségekre a hasznosulási tényezőt, illetve a HMV-nél lakóépületre a csökkentett igényű alapterületet.</li>
                    <li>A 2016 előtti tanúsításokra az XML exportban tévesen már az új XML formátumnak megfelelően vette a nyári túlmelegedés kockázatára vonatkozó értéket.</li>
                    <li>A tanúsítás első oldalán lévő diagram szélességének korrigálása, hogy a mellette lévő fénykép ne takarja.</li>
                    <li>Az egyéb épületekre a referencia épület számításban a fűtési energiaigény negatívra is adódhatott egy hiba miatt, így a megengedett érték is rosszul lett számolva.</li>
                    <li>Az e-tanúsítás XML exportnál automatikusan a közel nulla követelményhez tartozó fajlagos hőveszteség tényezőt írja a program az XML fájlba. A számolt hőtároló tömeg fajlagos értéknek és az épület jellegnek a feltöltéskor továbbra is összhangban kell lennie!</li>
                </ul>

                <p><b>7.34 -&gt; 7.40</b> (2015. december 23.)</p>
                <ul>
                    <li>Nyomtatás export esetén az útvonal neve, ha többszintű volt, nem teljesen jelent meg.</li>
                    <li>Szerkezetek import txt fájlból hiba javítása.</li>
                    <li>Adatbázis import a honlapról esetén, ha a mind kapcsolót bekapcsolva szerettük volna betölteni az adatokat, akkor nem végezte azt el.</li>
                    <li>Az eszközök általános módosítások alatt a helyiségek belmagasságának módosítása is lehetséges.</li>
                    <li>Energetikai számítás aktualizálása a 2016-os előírásokhoz. Változások a felhasználói felületen. <br />
Projekt beállításokban: Az alkalmazott jogszabály mellett a számításnál betartandó követelmény (alap, költségoptimalizált, közel nulla energiaigényű épületek) is kiválasztandó.<br />
Épületnél: Lakóépületnél a HMV alacsonyabb igényű területének megadása. A BB minősítéshez megadható a megújuló részarány. Az AA minősítéshez bekapcsolható a nyilatkozat.<br />
ET nyomtatásnál: Az adminiszratív adatok bővültek, néhány mező az e-építés XML exportból átkerült ide, hogy a tanúsíványra is felkerüljön. Több fotó megadhatóság, ezek a tanúsítás végére kerültek. A nyomtatásban szereplő táblázatokra előre beállított formátum áll rendelkezésre.<br />
                    </li>
                    <li>Projekt egyedi azonosító került bevezetésre, amit a létrehozáskor automatikusan generál a program. Régi projekt megnyitásakor automatikusan generálja és el is menti így a projektet.</li>
                </ul>

                <p><b>7.33 -&gt; 7.34</b> (2015. június 29.)</p>
                <ul>
                    <li>Optimum modulban memória hiba javítása.</li>
                </ul>

                <p><b>7.32 -&gt; 7.33</b> (2015. június 09.)</p>
                <ul>
                    <li>Az építőanyagoknak a honlapon található adatbázisból való bővítésének leegyszerűsítése az import a honlap adatbázisából funkcióval.</li>
                    <li>Ha egy nyílászáró szerkezet típusnál az volt kiválasztva, hogy a keret és üvegezés adatok alapján számoljon és a nyílászáró lapon viszont nem volt bekapcsolva a kiegészítő adatokkal, akkor a g értéket rosszul vette át a szerkezetnek a helyiségbe illesztésekor.</li>
                    <li>gbXML beolvasásnál a határoló szerkezetek méreteinek a helyiség belső méreteire transzformálva.</li>
                </ul>

                <p><b>7.31 -&gt; 7.32</b> (2015. május 19.)</p>
                <ul>
                    <li>Memória "szivárgás" csökkentése (megszüntetése?).</li>
                    <li>gbXML beolvasás szerkezet típus tartalom nélkül is elvégezhető.</li>
                </ul>

                <p><b>7.30 -&gt; 7.31</b> (2015. április 23.)</p>
                <ul>
                    <li>Referencia épületnél a légtechnikai rendszer szükséges kapcsoló a számítást nem befolyásolta. Mindig számolt a légtechnikai rendszerrel, ha megadtunk ilyen gépészeti rendszert.</li>
                    <li>XML exportoknál érvénytelen karakterek szűrése.</li>
                    <li>gbXML beolvasó finomítása</li>
                    <li>Nyomtatáskor bizonyos esetekben (hosszú fájlnevek esetén) hibajelzést adhatott a program.</li>
                </ul>

                <p><b>7.24 -&gt; 7.30</b> (2015. április 15.)</p>
                <ul>
                    <li>A Néer2 projekthez kapcsolódó ÉMI XML export javítása, további adatokkal bővítése</li>
                    <li>Táblázat exportnál előfordulhatott az Excel felé, hogy egyes oszlopok, például épület energetikai besorolása, nem ment át.</li>
                    <li>Ismert szerkezetként megadott talajjal érintkező szerkezet típusra hibásan vetette össze a követelmény értékkel.</li>
                    <li>Felületfűtések paneleinek változtatásakor előfordulhatott, hogy a regiszter méretet rosszul írta ki.</li>
                    <li>A szerkezetek páradiffúziós számításánál a belső oldali légállapotra az MSZ 24140 szerinti javasolt értékek kiválaszthatósága.</li>
                    <li>Tanúsításnál a HMV tárolási veszteség értékek kis mértékű módosítása.</li>
                    <li>Főépület tanúsításnál a részépületeknél megadott gépészeti rendszerek megnevezése mögé zárójelben kiírja a részépület nevét is.</li>
                    <li>Nyílászárók U értékének és üvegezési arányának számítása az üvegezése, a keret és a távtartó adataiból. Ezzel kapcsolatban új anyag típusok is megjelentek, üvegezés, keretrendszer és távtartó.</li>
                    <li>gbXML beolvasó modul. Ennek segítségével Archicad és Revit programokból is átvehetők az épület geometriája, ha az adott programváltozat képes gbXML exportra.</li>
                </ul>

                <p><b>7.23 -&gt; 7.24</b> (2015. február 24.)</p>
                <ul>
                    <li>Egyéb rendeltetésű épületnél, ha a költségoptimalizált követelményszint be volt kapcsolva, az eredeti összesített energetikai jellemző követelmény értéket is a szigorúbb gépészettel számolta.</li>
                    <li>Egy másik projektből helyiségek export-importtal történő átemelésekor egyes helyiségek nem lettek összerendelve az újonnan létrehozott épülettel.</li>
                    <li>A Néer2 projekthez kapcsolódó ÉMI XML export további adatokkal bővítése</li>
                </ul>
                <p><b>7.22 -&gt; 7.23</b> (2015. február 10.)</p>
                <ul>
                    <li>Energiatanúsítvány export és export fájlba hibát okozott.</li>
                    <li>Energiatanúsítvány készítésekor a hibakeresésnél, amennyiben részépületek és azokhoz rendelt gépészeti rendszerek voltak, a lefedett alapterületekre hibásan figyelmeztetést adhatott.</li>
                    <li>Új XML export az ÉMI adatfeldolgozásához</li>
                </ul>
                <p><b>7.21 -&gt; 7.22</b> (2014. december 18.)</p>
                <ul>
                    <li>Adatbázis frissítések kezelése a programból. Az adatbázisok karbantartása ablakban lehetőség van közvetlenül a honlapon lévő adatbázis archívumokból adatokat betölteni.</li>
                    <li>Energetikai számítás dokumentációban az energiahordozókra és a CO2 kibocsátásra vonatkozó táblázat kibővítése.</li>
                    <li>Az ellenőrzések bővítése a levonandó felületekre és az energiahordozókra a tüzelő berendezéseknél.</li>
                    <li>Külön kapcsolóval választható meg a projekt beállításoknál, hogy a költségoptimalizált követelményszintet alkalmazzuk-e, amennyiben a rendeletnél a 2015 január 1, vagy azt követő állapota van kiválasztva.</li>
                </ul>

                <p><b>7.20 -&gt; 7.21</b> (2014. december 02.)</p>
                <ul>
                    <li>A 7.20 verzió projekt konverziója után az épületek jegyzékben megjelenített eredmények nem mindig voltak helyesek. Ezeket az épületeket megnyitva majd OK-val kilépve már helyes adatok jelennek meg.</li>
                    <li>Nyári hőterhelés számításban az üvegezett szerkezetekre a napnyugta utáni két órához tartozó napsugárzásból származó terhelés hiányzott.</li>
                    <li>A 7.20-ban a nyári túlmelegedésre vonatkozó üzenet módosítva lett. Lehetőség van az árnyékolásra vonatkozó megjegyzésnek a ki- és bekapcsolására a program beállítások viselkedés lapján.</li>
                    <li>A program indulásakor a program beálításokban megadott enegetikai rendelet állapotát ellenőrzi a dátum alapján.</li>
                    <li>Ellenőrzések egy adott projektre. Alkalmazott energetikai rendelet. Padlásfödémek, pincefödémek esetén be van-e kapcsolva a túloldali tér fűtetlen kapcsoló?
                    Szerkezeteknél a dU növekmény meg van-e adva? Üvegezés g érték, üvegezési arány ellenőrzése. Talajjal érintkező szerkezet felület és vonalmenti hossz érték ellenőrzése.
                    A szerkezetnél szereplő U érték és az épületnél lévő U érték összevetése. Épület fajlagos hőtároló tömeg és a beállítás összevetése.
		  A gépészeti rendszerek által lefedett terület hogyan viszonyul a szükséges alapterülethez.</li>
                    <li>Szerkezetek páradiffúziós számítása, értékelése szerkezetenként külön kapcsolható.</li>
                    <li>Szerkezetek cseréjénél, ha g értéket cseréltünk, az Nü értéket használta hozzá.</li>
                </ul>

                <p><b>7.15 -&gt; 7.20</b> (2014. október 29.)</p>
                <ul>
                    <li>Egyéb épületek engedélyezési tervénél is az összesített energetikai számítás elvégzése, dokumentálása.</li>
                    <li>A projekt adatoknál az egyszerűsített adatmegadási mód eltüntetése az új projektekre.</li>
                    <li>Gépészeti rendszerek megadására szolgáló ablakok kiegészítése az energiahordozókra vonatkozó fogyasztási és CO2 kibocsátási eredményekkel.</li>
                    <li>A túlmelegedésre vonatkozó üzenet szövegének módosítása. A korábbi "A nyári túlmelegedés olyan mértékű, hogy gépi hűtést igényel!" szöveg kiegészítése "Hatékonyabb, lehetőleg külső árnyékolók alkalmazása javasolt!"</li>
                    <li>Hálózati gráfban adott csomópont névre ugrás.</li>
                    <li>Naptényező - g tényező "szétválasztása", megválasztható, hogy melyik legyen a kiinduló adat, amiből a másik számítva lesz.</li>
                    <li>Az energiahordozók árszámításából kimaradt a szolgáltató által megadott prierenergia átalakítási tényezős távhő.</li>
                    <li>PDF-ben a Qsd-nél a szám és mértékegység összeért.</li>
                    <li>Súgóban a légcsereszámokra vonatkozó táblázat cseréje a rendelet módosítás szerintire.</li>
                    <li>Tanúsítási országkódok táblázat a súgóba.</li>
                    <li>E-tanúsítás XML exportnál a két dátum mezőnél a megadható nap értékek "összeakadtak", esetenként a határozat időpontjánál nem lehetett a megfelelő nap értéket kiválasztani.</li>
                </ul>

                <p><b>7.14 -&gt; 7.15</b> (2014. július 09.)</p>
                <ul>
                    <li>Szerkezet adatainak megadásakor, ha még nem voltak rétegek megadva, a típusnak megfelelő kiegészítő adatok megadhatóságát még nem kínálta fel.</li>
                    <li>Ha a légtechnikai vagy hűtési rendszerek alapterülete nagyobb a teljes alapterületnél, az értéket pirossal jelzi ki az épület adatmódosítási ablakában.</li>
                    <li>Egyéb épület referencia értékének számításánál a fűtési hőfokhíd és fűtési idény hossz fix értékű (8 °C-os egyensúlyi hőmérséklet szerint)</li>
                    <li>Gyorsítva a variációk eldobása az optimum modulban, ha csoport azonosítók alapján lehetséges</li>
                    <li>Projekt beállításokban az energiahordozók árának és fűtőértékének a kezelése. Az energiahordozók felhasználásánál, ha van ár, a költség is megjelenik. Ha van fűtőérték, akkor a természetes egységben (kg, m3) is kijelzésre kerül a fogyasztás.</li>
                </ul>

                <p><b>7.13 -&gt; 7.14</b> (2014. június 19.)</p>
                <ul>
                    <li>A program, a korábbiaktól eltérően, az azonos benapozási viszonyokkal rendelkező ablakok napsugárzási számításákor is újra számolt, ezzel lassult a program.</li>
                    <li>Adatbázis elérési útvonal módosíthatóság registry bejegyzéssel. A program registry csoportjában egy szöveges kulcs, aminek a neve DatabaseDir megadható az eredetitől eltérő adatbázis útvonal, pl: C:\tmp\data\</li>
                    <li>Telepítőben az adatbázis és a példa projektek helyének megválaszthatósága</li>
                    <li>Optimum modulba a variációk számításakor korlátok megadhatósága a variációk automatikus elvetéséhez</li>
                    <li>Gazdaságossági számításnál diszkontálási ráta megadhatóság a megtérülési idő számításhoz</li>
                    <li>Optimum eredmények diagramos ábrázolása</li>
                </ul>

                <p><b>7.12 -&gt; 7.13</b> (2014. május 21.)</p>
                <ul>
                    <li>Szerkezetek és a tanúsítás gépészeti rendszereinek részletes leírását nem nyomtatta</li>
                </ul>

                <p><b>7.11 -&gt; 7.12</b> (2014. május 20.)</p>
                <ul>
                    <li>Álmennyezettel rendelkező helyiségek esetén az épület átlaghőmérsékletét rosszul számolta (7.11 verzió)</li>
                    <li>Szerkezetekre vonatkozó megengedett értékek, ha a rendeletnél a 2015 január 1 lett beállítva, dokumentáláskor nem a szigorúbb értékeket adta.</li>
                    <li>Tanúsítvány készítésnél néhány megadható szöveg hossza, nem csak a feltöltésnél korlátozandó, 2048 karakterben volt korlátozva. Ez a korlát megszűnt.</li>
                    <li>Tree listában is lehet keresni</li>
                    <li>Alaki ellenállások közt keresés funkció</li>
                    <li>Szelep áttekintő táblázatba új oszlopok, megjelenk a fojtás és a tömegáram is.</li>
                    <li>Szerkezetek cseréjénél a dőlésszög módosítás hibásan működött.</li>
                    <li>Helyiség makrók exportja nem működött.</li>
                    <li>Tanúsítás XML exportjánál egyes karakterek (idézőjelek) UTF-8 kódolása hibás volt.</li>
                    <li>Szerkezet és a tanúsítás gépészeti rendszereinek részletes leírásában nem nyomtatandó megjegyzés elhelyezése lehetséges. A szövegben a // (két per karakter) után lévő rész és a // jel már nem kerül nyomtatásra.</li>
                    <li>ArchLINE felé a drag and drop javítása</li>
                </ul>

                <p><b>7.10 -&gt; 7.11</b> (2014. április 04.)</p>
                <ul>
                    <li>Szerkezetek PDF-be nyomtatásakor, illetve e-tanúsítás XML exportnál, ha a páradiffúziós diagram is be volt kapcsolva, hibajelzést adott.</li>
                    <li>Réteg illetve anyag adatmegadásnál a szorpciós izoterma illetve légréteg hővezetési ellenállás diagram megadása hibásan működött.</li>
                    <li>Egyedi nyomtatási fejlécnél a beállított, de hiányzó logo meggátolta az e-tanúsítás XML illetve a PDF generálást.</li>
                    <li>Hőcserélő elem adatainak betöltése a 7.10 verzióban hibát jelzett.</li>
                    <li>A rendeletek elnevezése módosult, új rendeletek is választhatók a 20/2014 BM rendelet okán</li>
                    <li>Álmennyezet szerinti térfogat a V számításnál és a légcserénél</li>
                    <li>Hőfokhíd és fűtési idény hossz számítás táblázat módosítása, 2014.IV.6-tól.</li>
                    <li>Primer energia átalakítási tényezők módosítása, 2014.IV.6-tól.</li>
                    <li>Fajlagos hőveszteségtényező és az összesített energetikai jellemző határértékek változása, 2015.I.1-től.</li>
                    <li>U érték követelményértékek változása, 2015.I.1-től.</li>
                    <li>Referencia épületre vonatkozó előírások változása, 2015.I.1-től.</li>
                </ul>

                <p><b>7.00 -&gt; 7.10</b> (2014. március 25.)</p>
                <ul>
                    <li>Szakaszos üzem korrekciós érték létrehozáskori alapértéke a lakóépület szerinti.</li>
                    <li>Gépészeti rendszerek terület értékei több értékes jeggyel kerülnek kiírásra a beviteli ablakban.</li>
                    <li>E-tanúsítás XML export módosítása. A nyereségforrások is átmennek az XML fájlban. E mellett új statisztikai adatokat is meg lehet adni, illetve a külföldi megrendelő is kezelhető.</li>
                    <li>Új fejlesztőrendszer alkalmazása.</li>
                    <li>Új telepítő alkalmazása. Csak a program azon részei kerülnek a megadott telepítési útvonalra, amik a használatkor nem módosulnak. Az adatbázisok a felhasználó AppData könyvtárába (bausoft\programnév), a projektek pedig dokumentumok (programnév) könyvtárába kerülnek. </li>
                </ul>

                <p><b>6.98 -&gt; 7.00</b> (2013. október 8.)</p>
                <ul>
                    <li>Előregyártott panel rendszerű felületfűtésekből és hűtésekből építkező körök hidraulikai adatmegadásának és a számításának átalakítása.</li>
                    <li>Energetikai számításnál az épület kategória váltásakor a szakaszosüzem korrekciós érték automatikusan a rendelet szerinti táblázat értékét veszi fel.</li>
                    <li>Optimum kereséskor a számítás megszakítható, illetve visszajelzést kapunk a variációk számáról.</li>
                    <li>A jegyzékekben egy csoporton is elindítható az export funkció (helyi menü segítségével), ami egyből az adott csoportot kijelöli.</li>
                    <li>A szerkezetek vágólapra helyezésével azok az anyag adatbázisba is beilleszthetők rétegrendként.</li>
                </ul>

                <p><b>6.97 -&gt; 6.98</b> (2013. május 28.)</p>
                <ul>
                    <li>Azok az építőanyagok, amelyek adatai nem módosíthatók, a lemásolás művelet után az adataik már átírhatók.</li>
                    <li>A 6.97 verzióban az eszközök alatt található funkciók végrehajtása után elmaradhattak a jegyzékek frissítése.</li>
                    <li>Az energetikai számításnál a fűtési hőfokhíd és a fűtési idény hossza többféle módon számítható.</li>
                </ul>

                <p><b>6.96 -&gt; 6.97</b> (2013. április 17.)</p>
                <ul>
                    <li>Optimum számításkor, ha a cserélendő nyílászáróra nem adunk meg üvegezési arányt (0), akkor marad a korábbi, egyébként az új értéket használja.</li>
                    <li>E-tanúsításnál az épület utca, házszám adatait nem kell feltétlenül megadni, ha az nem létezik.</li>
                    <li>Optimum számításkor a csoportazonosítók alapján kihagyandó variációkra a felesleges számítások elhagyása.</li>
                    <li>Ha a részépületnél a számítási mód a részépületeket összegezve állásban volt és tartalmazott légtechnikai rendszert, a fűtés hőenergia igény filtrációs része hibásan lett számítva.</li>
                    <li>Az eszközök menü több funkciójánál a végrehajtást követően is megnyitva marad az ablak további utasításokhoz, ha a program viselkedésben ezt beállítjuk.</li>
                    <li>Nagy számú részépület esetén a program módosításkor nagyon lelassult az átszámítások miatt. A felesleges átszámítások kiszűrésével gyorsult a program.</li>
                </ul>

                <p><b>6.95 -&gt; 6.96</b> (2013. február 20.)</p>
                <ul>
                    <li>A szerkezetek cseréje funkció a cserét követően is megnyitva marad további cserékhez, ha a program viselkedésben ezt beállítjuk.</li>
                    <li>Az optimum számítás végén megjelenő táblázat fejléc jelölései hibásak voltak (q szerepelt E helyett).</li>
                    <li>Az e-tanúsításban szereplő tanúsítás készítés célja kiegészült a pályázathoz megnevezéssel.</li>
                    <li>Az e-tanúsítás köztér megnevezései bővültek.</li>
                    <li>A tanúsítás nyomtatási képernyőin lehet visszafelé lépegetni.</li>
                    <li>Tanúsítás export fájlba funkciója, ha volt olyan szerkezet, aminél rétegtervi hőhíd korrekciót számultunk, hibával leállhatott.</li>
                    <li>Az egyéb nyereségforrás és veszteség energiahordozóját nem minden esetben adta jól vissza.</li>
                    <li>Az új verzió ellenőrzés hiba esetén felajánlja a funkció kikapcsolását (egy másodk indításkor).</li>
                </ul>

                <p><b>6.94 -&gt; 6.95</b> (2013. február 6.)</p>
                <ul>
                    <li>Ha a részépületnél is a számítási mód a részépületeket összegezve állásban volt, a fűtés hőenergia igénye hibásan lett számítva.</li>
                    <li>Az egyéb veszteség és nyereségforrás esetén is meg lehet adni az energiahordozót, így az a fogyasztásban és a CO2 kibocsátásban is szerepelhet.</li>
                    <li>Szerkezetek cseréjénél a tájolás nem minden esetben volt megadható.</li>
                </ul>

                <p><b>6.93 -&gt; 6.94</b> (2013. január 25.)</p>
                <ul>
                    <li>A fájl mentés másként hiba javítása.</li>
                    <li>A projekt adminisztratív adatok a tanúsítás készítéskor az adminisztratív adatokba átemelhető.</li>
                </ul>

                <p><b>6.91 -&gt; 6.93</b> (2013. január 23.)</p>
                <ul>
                    <li>Ellenőrzések beépítése az e-tanúsításhoz alkalmas xml fájl készítéskor.</li>
                    <li>A projekt adminisztratív adatok kiterjesztése, amiket aztán az e-tanúsításnál is lehet használni. A rovatonként megadott adatokból, ha az egyszerűen mód szerinti mezőt üresen hagyjuk, az is elkészül.</li>
                    <li>A program beállításokban megadható tervezőre vonatkozó adatok is megadhatók részletezve.</li>
                    <li>Egyéb épület referencia épület adatainál, ha nulla légcsereszámot adunk meg, az épületnél felvett értékkel számol.</li>
                </ul>

                <p><b>6.90 -&gt; 6.91</b> (2013. január 18.)</p>
                <ul>
                    <li>Az e-tanúsítás készítésheznél az adminisztratív adatok megadásakor a határozat időpontját akkor is ellenőrizte, ha azt nem is lehetett megadni az adott tanúsítás készítés célja mellett.</li>
                    <li>Optimum modulnál a dokumentáció készítésnél az energiamegtakarításoknál a légtechnikai, a világítási és a hűtési rendszer típusmegjelölések keveredtek.</li>
                    <li>Optimum modulnál a dokumentáció készítésnél a szerkezetek rétegrendje további rétegekkel tudott kibővülni (6.90 verzió).</li>
                </ul>

                <p><b>6.89 -&gt; 6.90</b> (2013. január 16.)</p>
                <ul>
                    <li>Az épületnél az A/V értéket épületrész tanúsítása esetén az épület A és V értékével lehet megadni, hogy az e-tanúsítás felé is ezek az értékek átadhatóak legyenek.</li>
                    <li>Az e-tanúsítás készítéshez alkalmas XML fájl generálása az ET nyomtatás utolsó ablakában.</li>
                    <li>A tanúsítványnál az épület szöveg az épület(rész) szövegre módosítva.</li>
                    <li>Az optimum modulban a megadott módosításokhoz tartozó ár, csoportazonosító és légcsereszám módosításokat megjegyzi a program, újbóli optimum számításkor ezeket felkínálja.</li>
                    <li>A szerkezetek rétegtervi tervét módosító hőhidak lista dokumentálása hibát okozhatott.</li>
                    <li>Az eszközök szerkezetek cseréje funkcióval a szerkezetek mérete és helyzete is módosítható. A csak az előfordulások keresése, módosítás nélkül kapcsolóval elkerülhető a véletlen módosítás, ha csak az előfordulásokat szeretnénk megkeresni.</li>
                    <li>Referencia épületre külön adható meg a légcsereszám.</li>
                </ul>

                <p><b>6.88 -&gt; 6.89</b> (2012. december 4.)</p>
                <ul>
                    <li>Az energetikai számításnál a távfűtés esetén megadható primer energia átalakítási tényező csak a fűtésnél működött helyesen.</li>
                    <li>Az épület módosítás ablakban az energiafogyastásra vonatkozó táblázat kibővült.</li>
                </ul>

                <p><b>6.87 -&gt; 6.88</b> (2012. november 19.)</p>
                <ul>
                    <li>Energetikai számításnál távfűtés esetén megadható a primer energia átalakítási tényező.</li>
                    <li>Általános csere funkció néhány jellemzőre az eszközök menüben.</li>
                    <li>kv érték számítási segéd az egyedi alaki ellenállások megadásakor.</li>
                </ul>

                <p><b>6.86 -&gt; 6.87</b> (2012. október 9.)</p>
                <ul>
                    <li>Egyéb rendeltetésű épületnél a referencia épületnél a használati melegvíz primer energiaigény számításánál nincs szükség a hőtermelőre vonatkozólag a fűtött vagy fűtetlen térben elhelyezést megkérdezni, a korábbi fűtött térben számolt esetek hibásak voltak.</li>
                    <li>Egyéb rendeltetésű épületnél a referencia épületnél a használati melegvíz primer energiaigény számításánál ha a HMV nettó hőenergiaigény értékére 0 volt megadva, akkor is számolt segédenergia igénnyel.</li>
                    <li>Egyéb rendeltetésű épületnél a referencia épületnél az épületrészekre megadott légtechnikai és hűtési rendszerekkel nem számolt.</li>
                    <li>Táblázatok exportjánál az Excelben a számokat nem kell külön átalakítani szövegből.</li>
                    <li>Dátum mezőknél nyomógomb az aktuális dátum beírásához.</li>
                </ul>

                <p><b>6.85 -&gt; 6.86</b> (2012. szeptember 4.)</p>
                <ul>
                    <li>HMV tárolók veszteség táblázata hibás értékeket szolgáltatott.</li>
                    <li>Ismert szerkezet létrehozása hibát okozott.</li>
                </ul>

                <p><b>6.84 -&gt; 6.85</b> (2012. szeptember 3.)</p>
                <ul>
                    <li>Ha a korszerűsítéssel elérhető új kategóriát megadtuk, azt már nem lehetett törölni.</li>
                    <li>Réteges szerkezetek összvastagsága is kijelzésre kerül a számításkor.</li>
                    <li>Az épület helyiségek táblázatában a nyári hőterhelés maximum értéke és ideje is megjelenik.</li>
                    <li>A tanúsítás dokumentálásakor megjelenik, hogy az egyszerűsített, vagy a részletes számítás szerint történt.</li>
                    <li>A szerkezetek nyomtatásakor is megjelenik a szerkezetre megadott részletes leírás.</li>
                    <li>A tanúsítás végén lévő nyilatkozat szövege módosítható a program beállításokban.</li>
                    <li>Az üvegezett szerkezeteknél a takarások hatásának számításakor a szórt sugárzásra vonatkozó tényező minden szerkezetre külön adható meg.</li>
                    <li>A talajon fekvő padló vonalmenti k értékének táblázata kiegészítve a 40/2012 BM rendelete szerint.</li>
                    <li>A 40/2012 BM rendelet szerinti számítás megvalósítása.</li>
                    <li>A program és a projekt beállításokban is beállítható, hogy az épületenergetikai számítás melyik rendelet szerint történjen.</li>
                    <li>Az optimum modullal kiszámolt variációknál a törlésnél és a csoportos exportnál egyidejüleg több variáció is kijelölhető.</li>
                    <li>A szerkezetek export táblázata a Word felé eltérő karakterméretű volt, egységesítve lett.</li>
                    <li>Az optimum modulban kiszámolt variációk eredményeiben a különböző gépészeti rendszerekre vonatkozó eredmények, épületrészek esetében hibásan jelenhetett meg.</li>
                </ul>

                <p><b>6.83 -&gt; 6.84</b> (2012. május 3.)</p>
                <ul>
                    <li>Födémek beszúrása funkció nem számolta újra a helyiségeket automatikusan.</li>
                    <li>Födémek beszúrásakor, ha a helyiségnek nincs külső fala, akkor is felveszi a szerkezetet 0 vonalmenti hosszal és a helyiség alapterületével.</li>
                    <li>A korszerűsítési javaslatokkal elérhető új kategória jele nem minden esetben jelent meg a nyomtatáskor.</li>
                    <li>Keresés, helyettesítés funkcióban a * karakter 0 karakter is lehet.</li>
                    <li>A szerkezeteknél a belső szerkezetek alapértelmezett dölésszöge is megadható.</li>
                </ul>

                <p><b>6.82 -&gt; 6.83</b> (2012. április 18.)</p>
                <ul>
                    <li>Egycsöves radiátorok teljesítményét a helyiségeknél a radiátor és a felületfűtés kiválasztáshoz felkínált maradék teljesítménynél nem vette figyelembe.</li>
                    <li>Külső szerkezet típusoknál előre megadható a hajlásszög értéke.</li>
                    <li>Különböző épület típusokból álló összetett épület megengedett értékének számítása részletesebben dokumentálva a nyomtatásnál.</li>
                    <li>A megadott épület A/V érték külön is bekerül a nyomtatásba.</li>
                    <li>Az energetikai tanúsítvány első oldalára kerülő információk köre módosítható.</li>
                    <li>A szerkezetekre vonatkozó megengedett érték és értékelés kikapcsolható nyomtatáskor.</li>
                    <li>A nyomtatásoknál megadható opciók is tárolódnak, a program a legutóbb használt beállításokkal indul.</li>
                </ul>

                <p><b>6.81 -&gt; 6.82</b> (2012. február 28.)</p>
                <ul>
                    <li>A megjegyzett projektnevek száma 9-re emelve.</li>
                    <li>A számok bevitelére használt mezőkbe aritmetikai kifejezés is írható, a négy alapművelet és a zárójelek használata (csak a kerek) lehetséges.</li>
                    <li>Projektfájl kezelésben módosítás, a program belső működését érinti.</li>
                    <li>Az Optimum modul épületek több szintű egymásba ágyazásával nem működött.</li>
                </ul>

                <p><b>6.80 -&gt; 6.81</b> (2012. január 21.)</p>
                <ul>
                    <li>Anyagok exportja fájlba és annak beolvasása rétegrend típusra nem működött.</li>
                    <li>Szerkezetek txt formátumú exportja fájlba és annak beolvasása nem működött.</li>
                    <li>Tanúsítvány első lapjáról a gépi hűtés szükségességére vonatkozó megjegyzés kikerült, az értékelés a nyári túlmelegedés számításának dokumentálásánál található.</li>
                </ul>

                <p><b>6.78 -&gt; 6.80</b> (2012. január 18.)</p>
                <ul>
                    <li>Helyiségeknél, ha nagyon sok határoló szerkezet tartalmazott, ami egy nyomtatási lapra nem fért el, a nyomtatás nem volt lehetséges.</li>
                    <li>Egyéb rendeltetésű épületnél a tanúsításkor ha több hűtési rendszer is tartozott hozzá, a referenci épületre vonatkozó számításban a hűtési rész hibásan lett számítva.</li>
                    <li>Program viselkedésben választható, hogy az energetikai számítás célja alapértelmezettként ne az engedélyezési terv legyen, hanem a tanúsítás.</li>
                    <li>Térfogatáram szabályzó szelepek adatmegadása (XML) új lehetőséggel bővült.</li>
                </ul>

                <p><b>6.77 -&gt; 6.78</b> (2011. december 23.)</p>
                <ul>
                    <li>A felületfűtések és hűtések esetében előfordulhatott, hogy egy új mező bevitele a dupla kattintással nem, csak a felvesz gombbal működött.</li>
                    <li>A felületfűtéseknél a fűtő- illetve hűtőmezőkre megadható felületi hőmérséklet korlát csak elektromos fűtésekre adható meg mindig, a vizes rendszereknél csak akkor, ha a program beállítások viselkedés lapján ezt bekapcsoltuk.</li>
                </ul>

                <p><b>6.76 -&gt; 6.77</b> (2011. december 15.)</p>
                <ul>
                    <li>Alaki ellenállások és csomóponti elemek nyomásesés számítása módosult. Korábban a névleges méret alapján számított dinamikus nyomást alkalmazta a program az ellenállástényezővel megadott esetekre.
                    Mostantól a projekt beállításokban, a csomóponti elemek fülön szereplő kapcsolótól függően, vagy ezzel a korábbi módszerrel számolhatunk, vagy a csőre számított dinamikus nyomással.
		    Elsősorban műanyagcsövek esetén jelentős az eltérés. Ha a projekt beállítások szerint a csőre számított értékkel számolnánk, az egyes alaki ellenállásoknál külön kérhetjük, hogy arra a tételre még is az adott alaki ellenállás névleges méretével számoljon.</li>
                    <li>A legutóbbi változatban a csőszigetelések tárolása nem történt meg.</li>
                    <li>A felületfűtések új típusú rendszer kezelésére is alkalmasak, elektromos fűtőfilmekkel kialakított fal-, padló- és mennyezetfűtési rendszerek is alkalmazhatók.</li>
                    <li>A felületfűtéseknél a fűtő- illetve hűtőmezőkre megadható felületi hőmérséklet korlát. Amennyiben az adott rendszerre a megadott hőmérsékleti viszonyok mellett a határértéknél magasabb
		    felületi hőmérséklet adódna, akkor a beállított korlátra visszaveszi, és egyben a leadott teljesítményt is annak megfelelően visszaveszi.</li>
                    <li>Típusmódosításokban szelepek cseréjekor, ha az új szelep a korábban megadott módban nem használható, nem vett fel automatikusan egy használható módot.</li>
                    <li>Automatikusan betölthetők új projekt létrehozásakor a program beállításokban megadott makró fájlok.</li>
                </ul>

                <p><b>6.74 -&gt; 6.76</b> (2011. október 26.)</p>
                <ul>
                    <li>Optimum modulban részépületekből összesített épület esetén a variációk a szerkezetekből adódó módosításokat nem minden esetben vette figyelembe.</li>
                    <li>Felületfűtés kör összeállítás listában a helyiség neve nem jelent meg.</li>
                    <li>Nulla U értékű nyílászáró az optimum számításnál hibát okozhatott.</li>
                </ul>

                <p><b>6.73 -&gt; 6.74</b> (2011. szeptember 23.)</p>
                <ul>
                    <li>Az energetikai számításnál a légtechnikai rendszernél, ha léghevítő is szerepelt, nem jól értékelte a megadott hőtermelőket, ezért az Ok gombot nem lehetett megnyomni.</li>
                </ul>

                <p><b>6.72 -&gt; 6.73</b> (2011. szeptember 23.)</p>
                <ul>
                    <li>A projektbeállításoknál az épületre megadható második, álmennyezettel érvényes belmagasságra a nulla értéket nem fogadta el a program.</li>
                </ul>

                <p><b>6.71 -&gt; 6.72</b> (2011. szeptember 22.)</p>
                <ul>
                    <li>A téli egyensúlyi hőmérséklet számításnál, ha a program által számolt sugárzási nyereséghez kiegészítő értéket adtunk, annak mértékegysége rosszul volt kezelve. A beviteli mező kW dimenziót várt, de a képlet az értéket W-ban használta.</li>
                    <li>Az építőanyag adatbázisban új típus adható meg, a rétegrend. Ebben több réteget lehet megadni, amit a szerkezetek összeállításakor egyszerre lehet beszúrni.</li>
                    <li>Az épületeknél a fűtött teret határoló szerkezetek listában az ISO szerinti talajrafektetett padló esetén az A*U értéket rosszul jelezte ki, a felület helyett a vonalmenti hosszal szorzott. A számításokat ez a hiba nem érintette.</li>
                    <li>Szerkezetek cserénél, ha ISO szerinti talajra fektetett padlót választunk ki a kereséshez, az U értéket nem tölti ki, mert az úgy is minden esetben eltérő.</li>
                    <li>Szerkezetek cserénél az új adatok jegyzékből választott szerkezettel való kitöltésnél, ha kiegészítő adatokkal rendelkező nyílászárót választunk, a kiegészítő adatokat is kitölti.</li>
                    <li>A program beállítások viselkedés lapján kapcsolható, hogy egy új gépészeti rendszer létrehozásakor a főépületnél is használandó kapcsoló milyen állást vegyen fel.</li>
                    <li>Tanúsítás nyomtatásnál, ha a megadott kép nem érhető el, a nyomtatás nem sikerült.</li>
                    <li>A helyiségek exportjánál egy kapcsolóval az Excel felé részletesebb kigyűjtés lehetséges. Ez lehetőséget ad például nyílászárók méret szerinti összegzésére.</li>
                    <li>A helyiségek illetve az épületek jegyzékek táblázataiban újabb értékek kijelzése lehetséges.</li>
                    <li>A helyiségeknél megadható egy második belmagasság, illetve térfogat (álmennyezet hatásának figyelembe vételére). Ezt a téli hőszükséglet illetve a nyári hőterhelés esetén a filtrációs energiaigény számításnál használja a program, az energetikai számítást nem érinti.</li>
                    <li>A helyiség módosítás ablak fejlécében megjelenik a helyiség funkció is, zárójelben.</li>
                    <li>Az eszközök menüben új funkció, födémek törlésére illetve létrehozására, egyszerre több helyíségnél.</li>
                    <li>A programbeállítások betűtípusok lapján két új nyomógomb került, amikkel a Windows regisztrációs adatbázisában tárolt információk (fejléc beállítások illetve ablak méretek, pozíciók) törölhetők.</li>
                </ul>

                <p><b>6.70 -&gt; 6.71</b> (2011. augusztus 1.)</p>
                <ul>
                    <li>Régebbi kulcstípusok (Microphar, Sentinel C-Plus, Net-Sentinel) ellenőrzése nem automatikus, amikor még nincs jelszó megadva, de indítási paraméterrel (-km a Microphar, -kc a Sentinel C-Plus, -kn Net-Sentinel) kérhető.</li>
                    <li>A 6.70-es cinege változatban a hőhíd korrekciós táblázat leírása hiányzott.</li>
                    <li>A nettó hőigény meghatározásánál a légmennyiség épületrészek alkalmazásakor hibás lehetett.</li>
                    <li>Ha több gépészeti rendszerből áll egy gépészeti kategória (pl. a fűtés), akkor dokumentáláskor az összesítésnél ezek részesedése is követhető.</li>
                </ul>

                <p><b>6.60 -&gt; 6.70</b> (2011. július 29.)</p>
                <ul>
                    <li>Az energetikai számításnál az A/V viszony számításnál, ha épületrészről van szó, akkor a főépület A/V értékét veszi fel automatikusan, zárójelben közli az épületrész A/V értékét.</li>
                    <li>Az energetikai számításnál minden gépészeti rendszernél bekapcsolható egy kapcsoló, amitől, ha a gépészeti rendszert egy épületrésznél adtuk meg, a főépületnél is figyelembe veszi.</li>
                    <li>A légtechnikai rendszereknél adhatók meg a légcserére, a hővisszanyerőre és a léghevítőre vonatkozó adatok, egyben ki is kerültek az energia igény tervezési adatokból.</li>
                    <li>A légtechnikai rendszereknél a ventilátor működési idejére vonatkozólag történt változás. Ha csak télen működik, az üzemidő automatikusan is számítható, de megadható közvetlenül is.</li>
                    <li>Részépületek esetén a főépület energetikai számításakor új számítási móddal a részépületek átlagából is számíthatjuk az összesített jellemzőt.</li>
                    <li>Az Optimum modulban az egyes variációkból új projektet hozhatunk létre.</li>
                    <li>Réteges szerkezetek rétegtervi értékének módosító tényezőjét a programmal is számíthatjuk, az érték bevitelére szolgáló mező mögötti nyomógomb segítségével.</li>
                    <li>Helyiségek radiátorainak listájában a csőszigetelésre vonatkozó adatok nem jól jelentek meg.</li>
                    <li>Optimum modulban azonos nevű, típusú, de eltérő U értékű elemek helyettesítésekor hibák adódhattak.</li>
                    <li>A keresés funkcióval, ha egy csoport első elemére illeszkedett a minta, azt nem találta meg.</li>
                    <li>Nyílászárók kiegészíthetők méretlistával, így azonos jellemzővel rendelkező, különböző méretű nyílászárok egyetlen szerkezettípusként kezelhetők.</li>
                    <li>ET nyomtatásnál ha hosszú szövegeket adtunk meg a dokumentációnál, hibát okozhatott.</li>
                    <li>Program beállítások viselkedés lapján új kapcsoló, amivel az adatbázisban lévő régi típusok kiválaszthatóságát lehet engedélyezni.</li>
                    <li>Energetikai számításnál hűtési rendszer export-import során a teljesítmény tényezőt illetve a további villamosenergia igényt nem vette át.</li>
                    <li>Az épületeknél nem csak a felületfűtés hasznos teljesítménye, hanem a veszteség is összegzésre kerül.</li>
                    <li>Egyedi fejléc megadásakor, ha utána megváltoztattuk a Windowsban a tizedes jelét, hibát okozhatott.</li>
                </ul>

                <p><b>6.57 -&gt; 6.60</b> (2011. február 4.)</p>
                <ul>
                    <li>CadWatt programmal való együttműködés a helyiségek beviteléhez.</li>
                    <li>Hálózat számításon belül a két pont közti nyomáskülönbség lekérdezés strangszelepek esetében hibás volt.</li>
                    <li>Egyes táblázatok exportja hibával végződött.</li>
                </ul>

                <p><b>6.56 -&gt; 6.57</b> (2010. november 22.)</p>
                <ul>
                    <li>A szerkezeteknél a további adatokkal kiegészítés rész nem jelent meg.</li>
                    <li>A helyiségek határoló szerkezeteinek bevitelekor az újonan bevitt szerkezet a listában ha nem látszik, begörgeti.</li>
                </ul>

                <p><b>6.55 -&gt; 6.56</b> (2010. november 15.)</p>
                <ul>
                    <li>Az export funciók hibát eredményezhettek.</li>
                </ul>

                <p><b>6.54 -&gt; 6.55</b> (2010. november 12.)</p>
                <ul>
                    <li>ARCHLine.XP projekt betöltéskor a szerkezetekhez rendelt kiegészítő adatokat nem vette figyelembe.</li>
                    <li>Tanúsítvány nyomtatásnál a felhasznált energiahordozók és a CO2 kibocsátás kikapcsolására szolgáló kapcsoló nem lett figyelembe véve, mindig nyomtatta az adatokat.</li>
                    <li>Helyiség makró beillesztésnél, ha a filtrációt kikapcsoltuk, a belső hőterheléseket sem illesztette be.</li>
                    <li>A fűtési és melegvíz termelő rendszereknél a tárolásra egyedi adatokat megadva annak megnevezését nem jelenítette meg.</li>
                    <li>Energiahordozók elmentett árainak betöltése nem működött.</li>
                </ul>

                <p><b>6.53 -&gt; 6.54</b> (2010. június 25.)</p>
                <ul>
                    <li>A szerkezetek Bu értékének xml fájlból beolvasása hibás volt.</li>
                    <li>KESZ exportban kerekítések a számokra.</li>
                    <li>Felületfűtési rendszerek adabázis elemek új adatokkal bővítve.</li>
                </ul>

                <p><b>6.52 -&gt; 6.53</b> (2010. április 19.)</p>
                <ul>
                    <li>Szerkezetek hőmérsékleti korrekciós értéke hibás lehetett, ha a helyiségnél a méretezési külső hőmérsékletre korábban külön érték volt megadva.</li>
                </ul>

                <p><b>6.51 -&gt; 6.52</b> (2010. április 15.)</p>
                <ul>
                    <li>A pályázatoknál használatos KESZ excel fájl kitöltésének segítése. A funkció az épület módosítására szolgáló ablakból indítható a KESZ export nyomógombbal. A használatával kapcsolatos információk a feljövő ablak súgó gombjával tekinthetők meg.</li>
                    <li>Javítás a talajon lévő padló és a talajjal érintkező fal vonalmenti értékek meghatározására szolgáló táblázatban.</li>
                    <li>Javítás a Szumma A*U érték számításnál. Sajnos olyan tételek is bekerültek eddig ebbe a szummába (belső falak, amiknél a túloldali tér fűtött), aminek nem kellett volna. A Szumma A értékből eddig is ki lettek hagyva, de az A*U tartalmazta. A korábbi verzióval készült projekteknél úgy lehet elérni, hogy ezek a hibás értékek, amik a helyiségeken belül vannak tárolva, módosuljanak, hogy az épület jellegét átállítjuk (nehéz - könnyű) és Ok-val az épületet becsukjuk, majd ezt megismételjük, hogy ismét a megfelelre állítsuk az épület jellegét.</li>
                    <li>Valamennyi fejléces táblázat az aktuális tartalmával exportálható a Word és az Excel felé, ha a fejlécen a jobb gombbal kattintunk és kiválasztjuk az erre szolgáló menüpontot.</li>
                    <li>A Word 2007 felé történő exportok javítása, egymásra csúszó oldalak.</li>
                    <li>Az Optimum modulban a szerkezetek változtatásakor a légcsereszám értékek is megváltoztathatók, elsősorban a nyílászárók cseréjével kapcsolatban.</li>
                    <li>A referencia épületnél azokat a paramétereket, amit az eredeti épülettel azonosan kell felvenni, a továbbiakban nem lehet megadni, csak az eredeti épületnél.</li>
                    <li>A tanúsításkor az első lapra az épületre vonatkozó képet is ki lehet választani az adminisztratív adatok megadásakor.</li>
                    <li>A programot -n paraméterrel indítva letiltható az interneten való verzió ellenőrzés. Abban az esetben célszerű használni, ha e miatt egyáltalán nem képes a program elindulni. Így indítva a program beállításokba be tudunk lépni és ki tudjuk kapcsolni az ellenőrzést.</li>
                    <li>Proxy megadási lehetőség a program beállításokban.</li>
                </ul>

                <p><b>6.50 -&gt; 6.51</b> (2010. február 14.)</p>
                <ul>
                    <li>Az optimum modul gépészeti rendszerek mentése, majd ezt követően annak betöltése hibát okozott (6.50 verzióban csak).</li>
                    <li>Módosítás a nyomáskülönbség szabályzók számításában.</li>
                </ul>

                <p><b>6.46 -&gt; 6.50</b> (2010. február 9.)</p>
                <ul>
                    <li>Az U értékek számításakor a korábbi 2 tizedes helyett 3 tizedes pontossággal történik.</li>
                    <li>Az energetikai számításnál a fűtési hőfokhíd és a fűtési idény hossza algoritmussal számítódik, és nem pontosan a rendelet szerinti értékeket adta. Korrekciós függvény bevezetésével az eltérések minimálissá lettek téve.</li>
                    <li>Az energetikai számítás nyomtatásakor kérhető, hogy az energiahordozók szerinti becsült éves fogyasztás és az éves CO2 kibocsátás is megjelenjen. Ezek a számolt értékek az épület módósítására szolgáló ablakban is megjelennek.</li>
                    <li>Az energiahordozók közt megjelent a PB-gáz, ami a földgázzal, a H hőszivattyús elektromos áram, ami a csúcson kívüli elektromos árammal, illetve a pellet, ami a tüzifa, biomasszával van azonosan kezelve. Így az optimalizásálnál ezek eltérő árral és CO2 fajlagos értékkel vehetők figyelembe, illetve a fogyasztási összesítésnél is külön tételek.</li>
                    <li>A frissítések ellenőrzése mellett, a programhoz tartozó rövid hírüzenetek is letölthetők. Ezek elsősorban az adatbázis frissülésére hívják fel a figyelmet.</li>
                </ul>

                <p><b>6.45 -&gt; 6.46</b> (2010. január 27.)</p>
                <ul>
                    <li>Az optimum modul számításnál a maximális variációk számításakor a csoportjelzéseket is figyelembe veszi. Korábban hamar előállhatott, hogy túl soknak itélte a variációk számát és nem számolt emiatt.</li>
                    <li>Az optimum modulban az energiahordozók szerinti fogyasztás számításban a 6.40 verziótól hibásan a világítás energiaigénye duplán szerepelt, a hőtermelőknél pedig kétszer lett szorozva az alfa*Ck értékkel.</li>
                </ul>

                <p><b>6.43 -&gt; 6.45</b> (2010. január 20.)</p>
                <ul>
                    <li>Energetikai számításon belül a korábban kiválasztott hőtermelőn duplán kattintva az adatmegadási módot (táblázat alapján, felhasználó által megadott) nem minden esetben aktualizálta.</li>
                    <li>Az optimum modulban szerkezetek fájlból beolvasásakor nem jelentek meg az ablakban a változások, ki kellett lépni az ablakból hozzá. Nem csak fájlból, hanem a vágólapról is behozhatók szerkezetek a beillesztés és az import funkcióval.</li>
                    <li>Az energetikai számításnál a filtrációs légmennyiség számítás javítva.</li>
                    <li>Tanúsítvány adminisztrációs adatainak kitöltése illetve az EQ export adminisztrációs adatok külön is elmenthetők és betölthetők, így például társasházi lakások esetén ezek kitöltése felgyorsítható.</li>
                    <li>Az üvegezett szerkezetek takarásainak hatása, a sugárzási értékek megjelenítésével a benapozási ábra alatt, folyamatosan aktualizálva íródik ki, az adott tájolás és takarások szerint.</li>
                    <li>Az üvegezett szerkezetek takarásainak nyomtathatósága a helyiség nyomtatáskor.</li>
                    <li>A helyiségek határolószerkezetek listájában nem szerepelt a h/H arány.</li>
                </ul>

                <p><b>6.42 -&gt; 6.43</b> (2010. január 11.)</p>
                <ul>
                    <li>Hőcserélő elem szekunder oldali fűtési előremenő hőmérséklete felülíródott a hálózat számításkor a hűtési értékkel, ha hűtési módban számoltunk.</li>
                    <li>A 6.40-es verziótól, ha részépületeket is alkalmaztunk az energetikai számításnál, a belső hőnyereség, a melegvíz nettó hőigénye és a világítás energiaigénye nem a teljes alapterület, hanem csak egy része alapján számítódott. Súlyos hiba, mindenképpen az így készített projekteket ellenőrizni kell!</li>
                    <li>Új szolgáltatása a programnak, hogy induláskor ellenőrzi, hogy elérhető-e frissebb változat az interneten.</li>
                </ul>

                <p><b>6.41 -&gt; 6.42</b> (2009. december 7.)</p>
                <ul>
                    <li>Helyiségek jegyzék táblázatban néhámy oszlop jelölése változott.</li>
                    <li>Egyéb épületnél a referencia épület számításánál a hűtési energiaigény a megengedett értékbe nem került be.</li>
                    <li>DanWatt programnál a helyiségek számítása hibát okozott.</li>
                    <li>A projekt beállítások épület lapján újabb tényező adható meg, amivel a takarások szórt sugárzás csökkenésére gyakorolt hatása befolyásolható.</li>
                </ul>

                <p><b>6.40 -&gt; 6.41</b> (2009. november 25.)</p>
                <ul>
                    <li>A 6.40-es verzióban egymásba ágyazott épületek esetén hibásan működött.</li>
                    <li>A 6.40-es verzióban a projekt beállítások betöltése egy korábban elmentett beállítás fájlból hibát okozott.</li>
                    <li>Ha a fűtési nettó energiaigény negatív volt, akár negatív értékre is adódhatott a fűtési rendszer energiaigénye, ez mostantól ilyenkor 0 értékű.</li>
                    <li>A szakaszos fűtés korekciós érték javasolt értéktartománya nem mindig jelent meg az épület módosítás lapján.</li>
                    <li>A hűtési rendszerek alapterülete a listázáskor, ha azt nem adtuk meg, nullával jelent meg, nem a teljes alapterülettel.</li>
                </ul>

                <p><b>6.32 -&gt; 6.40</b> (2009. november 22.)</p>
                <ul>
                    <li>EN 12831 szerinti hőszükséglet számítás lehetőségének bevezetése. Ez több kisebb-nagyobb módosítást jelent. A projekt beállítások alatt kapcsolhatjuk be az e szerinti számítást.</li>
                    <li>A fűtött és fűtetlen terek irányába a veszteség számításkor a túloldali hőmérséklet helyett megadható a hőmérsékleti tényező, aminek a segítségével számítható a méretezési külső és a helyiség méretezési belső hőmérséklete alapján a túloldali térre felveendő hőmérséklet.</li>
                    <li>A hőhidak egyszerűsített figyelembe vételére egy új lehetőség, hogy egy dU értéket adunk meg, de ezt nem a szerkezet megadásakor, hanem a szerkezetnek a helyiségbe illesztésekor. Így az adott esethez jobban illeszkedő becslés adható, cserébe minden szerkezet beillesztéskor kell vele foglalkoznunk.</li>
                    <li>A helyiségeknél a transzmissziós veszteséget négy csoportba bontva számítjuk, négy veszteség tényezőt határozunk meg. A külső szerkezetekre, a talajjal érintkező szerkezetekre, a fűtetlen terek irányába és a fűtött terek irányába.</li>
                    <li>A talaj irányába a veszteség számítás korrekciós értékekkel történik, a korrekciós értékekből kettő az épületnél adhatók meg, a harmadik számítódik a hőmérséklet viszonyok alapján. A projekt beálításoknál a hőszükséglet lapon szerepel egy új hőmérséklet érték is, ami ebben a számításban jut szerephez, a külső levegő éves átlaghőmérséklete.</li>
                    <li>A filtrációs veszteség számítása kiegészült az épület légtömörsége, és az egyes helyiségek védettsége, szintmagassága alapján meghatározott tényezők által számítható filtrációs légmennyiség számítással. Amennyiben az így meghatározható veszteség nagyobb, mint a légcsereszámmal vagy a fejadagból adódó veszteségnél, úgy ezt vesszük figyelembe. Ha ismert légmennyiséget adtunk meg (mesterséges szellőztetést véve alapul), akkor ez az érték hozzáadódik a korábban számolt értékhez.</li>
                    <li>A belépő levegő hőmérsékletnél is megadható a konkrét érték helyett hőmérsékleti tényező, hasonlóan a belső határoló szerkezetekhez.</li>
                    <li>A hőszükségletben filtrációs számításoknál a levegő fajhője és sűrűsége értéke kis mértékben változott, ezért a filtrációs veszteségek számított értéke is ilyen mértékben módosul átszámításkor.</li>
                    <li>Az optimum modulban a gépészeti rendszerekre vonatkozó módosításoknál egy rendszerre több variációt megadva, majd abból törölve az árak elcsúsztak.</li>
                    <li>Maradék hűtési teljesítmény igény számítás azoknál a változatoknál, amikben a nyári hőterhelés számítás nincs benne, hibás volt.</li>
                    <li>Több épület esetén, ha az épületek egymásba ágyazottságát változtattuk, nem jelentkezett mindig a változás, csak ha a fő épületet is újra módosítottuk.</li>
                    <li>A szűkített választékok alkalmazásakor esetenként a helyiségek módosítására szolgáló ablak megnyitása hibát eredményezett.</li>
                    <li>Saját meteorológiai adatok megadási lehetőség az energetikai számításhoz a fűtési hőfokhid, fűtési idény hossz és a napsugárzással kapcsolatos számításoknál.</li>
                </ul>

                <p><b>6.31 -&gt; 6.32</b> (2009. augusztus 8.)</p>
                <ul>
                    <li>A nyereségáram források nem kerültek be az összesített fajlagos primer energiaigénybe.</li>
                    <li>Korábbi kétmonitoros üzemmódban történt használatkor a másodlagos monitorra áthelyezett képernyők, amennyiben nem lennének láthatók, automatikusan visszakerülnek az eredeti pozíciójukba.</li>
                    <li>Ha az energetikai számításnál a tervezési értékek az előírtnál magasabbak voltak, az épületet újra elővéve ismét a rendelet szerinti értékeket vette fel.</li>
                    <li>Az optimum modulban az egyes változtatásokat összekapcsolhatjuk, kizárva ezzel olyan variációkat, amik nem jöhetnek számításba.</li>
                </ul>

                <p><b>6.30 -&gt; 6.31</b> (2009. június 27.)</p>
                <ul>
                    <li>Az energetikai tanúsítás első lapjának nyomtatásakor lemaradt a tanúsítás száma, a dátum és az aláirás.</li>
                    <li>Ha az energetikai számításnál hűtési rendszer is meg volt adva, régebbi projektnél az épület beolvasása hibát eredményezett.</li>
                    <li>A helyiségek nyomtatásánál a táblázatos mód fejléc megadása hibát adott és a nyomtatás nem volt sikeres.</li>
                    <li>A világítási rendszere vonatkozó számítás képlete és a számítás eredménye nem jelent meg a listázáskor.</li>
                </ul>

                <p><b>6.25 -&gt; 6.30</b> (2009. június 20.)</p>
                <ul>
                    <li>Új, külön megvásárolható optimum modul beépítése a programba, a különböző változtatások energetikai számításra gyakorolt hatásának vizsgálatához.</li>
                    <li>A helyiségek főbb számítási eredményei az Eszközök | Export ARCHline számára funkcióval átadhatók az ARCHLine programnak, ahol azok grafikusan megjeleníthetők.</li>
                    <li>Az energetikai számításban a világítási rendszereket is, a többi rendszerhez hasonlóan, definiálni kell. A korábbiaktól eltérően nem automatikusan számítódik az energiaigénye.</li>
                    <li>Az energetikai számítás tervezési adatainál a nem módosítható adatok megjelenése változott a párbeszédpanelen.</li>
                    <li>A határoló szerkezetek listájában új oszlopként a túloldali tér fűtetlensége is kijelezhető.</li>
                    <li>Az A/V érték szerepeltetése az energetikai számítás nyomtatásakor.</li>
                    <li>A gépészeti rendszereknél a jellemző rendszer alapterülete is megjelenik nyomtatáskor, ha az eltér a rendszer alapterületétől.</li>
                    <li>Az energetikai rendszereknél a maradék alapterület beírását külön nyomógomb segíti.</li>
                </ul>

                <p><b>6.24 -&gt; 6.25</b> (2009. március 4.)</p>
                <ul>
                    <li>A levonandó felület ellenőrzése hibásan a vonalmenti hőátbocsátási tényezővel jellemzett szerkezeteknél is megtörtént.</li>
                    <li>A korszerűsítéssel elérhető új kategória megadásánál hiányzott az A+ kategória kiválaszthatósága.</li>
                    <li>A tanúsítvány nyomtatásakor esetenként az első lapra átcsúszhattak szerkezetek is.</li>
                    <li>A továbbiakban csak a CHM kiterejesztésű (HTML alapú) súgót használja a program, az erre vonatkozó választási lehetőség kikerült a program beállításokból.</li>
                    <li>A korábbi MSZ-04-140-2:1991 alapján történő energetikai számítás a program beállításokból átkerült a projekt beállításokba, így az csak az adott projektre érvényes.</li>
                    <li>A vonalmenti hőátbocsátási tényező helyenként kszivel volt jelölve pszi helyett.</li>
                </ul>

                <p><b>6.23 -&gt; 6.24</b> (2009. február 7.)</p>
                <ul>
                    <li>A 6.23-ban bevezetett funkció, ami segítségével ki lehetett választani dokumentáláskor az épületnél felhasznált szerkezet típusokat, az energetikai számítás gépészeti rendszereit megduplázta.</li>
                    <li>Az ablak szerkezet típusoknál, ha kiterjesztett adatokkal is elláttuk, de a téli árnyékolási tényezőt nem adtuk meg, azt 0-nak vette fel, ami teljes árnyékolást jelent, így a téli sugárzási nyereség ezeken az ablakokon mindig nullát adott.</li>
                    <li>Azokban a WinWatt program változatokban, amik nyári hőterhelés számítást nem tartalmaznak, de a nyári hőterhelés maximum megadható, az értéket mindig lenullázta.</li>
                    <li>Ha egy szerkezetnél a levonandó felület nagyobb, mint az eredeti felület érték, a program figyelmeztet.</li>
                </ul>
                <p><b>6.21 -&gt; 6.23</b> (2008. december 16.)</p>
                <ul>
                    <li>Épület kategória besorolás megjelenítése az épület módosítása ablakban.</li>
                    <li>A téli egyensúlyi hőmérsékletkülönbség számításnál a légmennyiség számítás módosítva lett.</li>
                    <li>Ha a nettó fűtési energiaigény kisebb mint nulla, nem kell fűtési rendszert felvenni (nem jelzi pirossal).</li>
                    <li>Az energetikai számítás dokumentálásakor az épületnél ténylegesen használt szerkezet típusok kijelölését nyomógombok segítik.</li>
                    <li>Nyomtatásnál hibát okozott, ha egy szerkezet típus nem volt teljesen kidolgozva. A nyomtatás előtt ez ellenőrzésre kerül.</li>
                </ul>

                <p><b>6.20 -&gt; 6.21</b> (2008. november 18.)</p>
                <ul>
                    <li>Pellet tüzelésű kazánok segédenergia igény fajlagos értékét rosszul vette fel a program.</li>
                    <li>A keresési funkció ablaka a szerkezet rétegrendjének megadásakor nem minden esetben volt megjeleníthető (projektváltás után nem jelent már meg).</li>
                    <li>Radiátor adatbázis módosítása, tömörebb forma alkalmazása.</li>
                    <li>A hálózat számításon belül a rendszer nyomásigény számításakor hőcserélők esetén hűtéskor is a fűtéshez megadott kv értékkel számolt a program.</li>
                    <li>Ck és qkv értékeknél a rendszer alapterületet a részaránnyal is szorozta a program, ami nem helyes, így ha kisebb volt 1-nél, rosszabb értékek adódhattak.</li>
                    <li>Épület módosítása ablakban megjelenik a fűtött teret határoló szerkezetek listája is ellenőrzéshez.</li>
                </ul>

                <p><b>6.14 -&gt; 6.20</b> (2008. október 7.)</p>
                <ul>
                    <li>Több épületrészből álló épület energetikai számításánál, ha azt kértük, hogy a számítás az egyes épületrészeknél megadott típussal történjen, a megengedett érték számítása hibás lehetett.</li>
                    <li>A szerkezet összeállításánál az anyagjegyzékben keresni is lehet a név alapján.</li>
                    <li>Az épület általános adatok fülről átkerült a benapozás figyelembe vételének módjára vonatkozó kapcsoló a hőszükséglet, fajlagos hőveszteség lapra.</li>
                    <li>Nyomtatásoknál PDF fájl export is lehetséges.</li>
                    <li>Az energetikai minőségtanúsítás nyomtatásakor egy olyan exportálási lehetőség is megjelent (EQ export), amivel az EQ - Energy Quality Kft. által működtetett Energetikai Tanúsítvány kezelő rendszerhez elküldhetők a tanúsítvány elkészítéséhez szükséges, WinWattból kinyerhető adatok.</li>
                </ul>

                <p><b>6.13 -&gt; 6.14</b> (2008. július 10.)</p>
                <ul>
                    <li>Felületfűtés-hűtés esetén, ha a rendszer típusát megváltoztattuk, és annál is létezett ugyanaz a burkolat típus, akkor az R érték nem lett módosítva. Ha az így megadott R érték a megadható tartományon kívülre került, akkor nem tudott a program teljesítményt számítani. A program ezek után, ha a R érték kívülre került a megadható tártományon, akkor automatikusan újra felveszi a burkolat típushoz, az adott rendszerben megadott értéket, egyébként továbbra sem módosítja.</li>
                    <li>Már a szerkezetek jegyzékben is megadhatók olyan paraméterek, amik korábban csak a szerkezetnek a helyiségbe való beillesztésekor voltak megadhatók. Például az üvegezett szerkezetekhez társított szerkezet hővezetési ellenállása, az üvegezés és az árnyékolás naptényezői. Belső szerkezetnél a túloldali hőmérséklet. Ha ezeket a kiegészítő adatokat megadjuk, akkor a helyiségbe beillesztéskor ezek lesznek a szerkezethez alapértékként társítva, egyébként, ahogy korábban, a szerkezetek kiválasztására szolgáló képernyőn megadható kezdőértékek.</li>
                </ul>

                <p><b>6.11 -&gt; 6.13</b> (2008. május 20.)</p>
                <ul>
                    <li>Ingyenes változatban a sugárzási energiahozamnál a megadott értéket figyelembe veszi.</li>
                    <li>A helyiségeknél a szerkezetek módosításánál a kijelölés a listában megmarad.</li>
                    <li>A helyiségek határolószerkezeteinek felvételekor a talajon lévő padlónál a helyiség alapterületét automatikusan felveszi a felület értékre. Más födémek esetén, ha az y érték 1-re volt felvéve, az x értékre veszi fel a helyiség alapterületét automatikusan.</li>
                    <li>Hőcserélőknél előfordulhatott, hogy a primer oldalon nem jelent meg a csőméret, illetve a primer oldali ellenállással sem számolt ilyenkor.</li>
                    <li>Újabb szeleptípus fogadására felkészítve.</li>
                    <li>Fájlkezelőből, más könyvtárban lévő projekttel indítva, nem volt helyes a működés.</li>
                </ul>

                <p><b>6.10 -&gt; 6.11</b> (2008. február 24.)</p>
                <ul>
                    <li>A táblázatos nyomtatások fejléce a második nyomtatástól nem jelent meg.</li>
                </ul>
                <p><b>6.05 -&gt; 6.10</b> (2008. február 4.) <span className="red">Az áttéréshez nem elegendő a frissítés, <Link to="/public/telepitok.html">újratelepítésre</Link> van szükség.</span></p>
                <ul>
                    <li>Áttérés új fejlesztőeszköz verzióra. Ennek külső jele, hogy a fájl megnyitási és mentési ablakok az XP stílusban jelennek meg. Az áttérés miatt nem elegendő csak frissíteni, hanem újra kell telepíteni a programot.</li>
                    <li>CHM help lehetőség. A program beállítások viselkedés lapján kérhető a korábbi HLP formátum helyett a CHM használata. Erre Vista alatt van szükség, mert a Vista első kiadása nem támogatja a korábbi súgó fájlokat.</li>
                    <li>Az épület hőtároló tömegének számítása, ha a programban az EPBD modul nem működött, hibásan számítódott.</li>
                    <li>A szerkezeteket tartalmazó táblázatokban a vonalmenti értékre külön oszlop lett létrehozva.</li>
                    <li>Egyéb épületek energetikai dokumentációjánál a gépészeti rész teljes elhagyása.</li>
                    <li>Alkalmazható jelszavak számának növelése 32-re.</li>
                    <li>A radiátor cserénél a szabályok létrehozásakor a régi típushoz a már nem forgalmazott típusok is kiválaszthatók.</li>
                    <li>Helyiségek EUROPLAN exportjának módosítása.</li>
                </ul>
                <p><b>6.04 -&gt; 6.05</b> (2007. november 7.)</p>
                <ul>
                    <li>Átnevezéssel a megengedettnél hosszabb elnevezések is létrehozhatók voltak, amik a későbbiekben az adott elemet elérhetetlenné tették.</li>
                    <li>A szerkezetek cseréje funkció a szerkezet típusát is bizonyos korlátozásokkal lehetővé teszi. E mellett a belső szerkezeteknél a túloldali hőmérsékletek és a túloldali tér fűtött vagy fűtetlen voltának a megváltoztatását is lehetővé teszi.</li>
                    <li>Az energetikai számításnál az egyéb épületekre engedélyezési terv esetén az összesített energetikai jellemzővel kapcsolatban a dokumentáláskor csak azt jelzi, hogy ilyen esetben arra nincs előírás és nincs szükség a számításra.</li>
                    <li>A szerkezeteknél a megengedett érték kis méretű ablakokra enyhébb, és korábban, ha nem adtunk meg méretet, akkor ezt az enyhébb feltételt jelezte ki. Mostantól az ismeretlen felület értékre is az általánosabb, szigorúbb értéket kapjuk.</li>
                    <li>Az eszközsáv végén lévő új ikonnal a Proidea online termékinformációs katalógus honlapját hívhatjuk elő.</li>
                    <li>Az adatbázisban jelölhetővé váltak a már nem forgalmazott termékek. Az így megjelölt elemek az egyes választó listákban nem jelennek meg, de ha egy régi projektben szerepel, úgy az nem okoz hibát, mert az adatbázisban azért megtalálja a program.</li>
                </ul>
                <p><b>6.03 -&gt; 6.04</b> (2007. október 5.)</p>
                <ul>
                    <li>A mentés másként funkcióban időnként ragaszkodott, hogy db kiterjesztést használjunk.</li>
                    <li>Az adatbázisból hiányzó radiátor esetén, az azt tartalmazó helyiség megnyitásakor hibával leállhatott a program.</li>
                </ul>
                <p><b>6.02 -&gt; 6.03</b> (2007. szeptember 26.)</p>
                <ul>
                    <li>A 6.00 verziótól az újonnan létrehozott egycsöves körök hibásan lettek tárolva.</li>
                    <li>Az alkalmazható jelszavak száma 20-ra emelve.</li>
                </ul>
                <p><b>6.01 -&gt; 6.02</b> (2007. szeptember 24.)</p>
                <ul>
                    <li>Ha a projektet ritkán mentettük, a túl sok visszalépési lehetőség automatikus csökkentésekor a projekt megsérült.</li>
                </ul>
                <p>A korábbi módosításokról <Link to="/public/Ww32Ver6.html"><b>itt olvashat.</b></Link></p>
            </div>
        );
    }
}

export default Ww32Ver;