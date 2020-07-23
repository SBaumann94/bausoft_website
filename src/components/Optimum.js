import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import { Link } from 'react-router-dom';
import optimum1 from '../screenshots/ww_optimum1.gif';
import optimum2 from '../screenshots/ww_optimum2.gif';
import optimum3 from '../screenshots/ww_optimum3.gif';
import optimum4 from '../screenshots/ww_optimum4.gif';


class Optimum extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Optimum pl3 overflow-x-hidden ">
                    <h2>WinWatt optimum modul</h2>
                    <p>Az épületünkre elkészített energetikai számításból kiindulva, lehetőségünk van az optimum modul segítségével,
                    különböző módosításoknak az épület energia felhasználására gyakorolt hatását elemezni.
                    Fontos megjegyezni, hogy ezek a számítások továbbra is az <Link to="/public/ww_epbd.html">energetikai számításokra</Link> vonatkozó
                    előírások szerint készülnek, ami az épület használóját standard fogyasztóként kezeli.
                    Az épület tényleges energia felhasználása, a számítási modell közelítő jellege és a standard értékektől
                    eltérő felhasználás miatt, kisebb-nagyobb mértékben eltér a számított értéktől.</p>

                    <h3>A szerkezetekre vonatkozó módosítások</h3>
                    <p>Az optimum keresés első lépésében a fűtött teret határoló szerkezetekre vonatkozó módosításainkat adhatjuk meg.
                    A fűtött teret határoló szerkezet típusok listában összevonva jelennek meg a szerkezetek. A táblázatból kiolvasható
                    többek közt az adott szerkezet hőátbocsátási tényezője, összfelülete, illetve a SA*U értékből mekkora részt képvisel.
		            Ez utóbbi jellemző jó iránymutatást ad, hogy mennyire érdemes az adott szerkezet típussal foglalkozni.</p>
                    <img className="mw-70"
                        src={optimum1}
                        alt={"Eredmények"} />
                    <p>Az ablak alsó felében a szerkezet adatbázisunk jelenik meg, új elemekkel bővíthetjük is az adatbázist.
                    Például bevihetünk egy új nyílászáró típust, aminek a korábbihoz képest más az U értéke, vagy lemásolhatjuk
                    az épület külső falát, födémjét, hogy annak rétegrendjét módosítsuk, például hőszigetelő rendszerrel lássuk el.
                    A módosított, új szerkezeteinket ráhúzva a felső listában, a típusában megfelelő szerkezetekre adjuk meg,
		            hogy milyen változtatásokat szeretnénk megvizsgálni. Egy szerkezetre több variációt is megadhatunk.</p>
                    <p>Amikor egy új variációt megadunk, egyben megadhatjuk annak várható költségét is, négyzetméterre
                    (esetleg vonalmenti hosszra) vonatkoztatott fajlagos költséggel. Ha nem tudunk árat megadni, a számítás akkor
                    is fog számunkra, más tekintetben használható eredményeket szolgáltatni, csupán a beruházási költségre és a
		            megtérülésre vonatkozó eredmények lesznek hamisak.</p>
                    <p>Ha a felső listánkban egy szerkezetet kiválasztunk, a jobb oldali listában ahhoz a szerkezet típushoz
		            megadott variációkat tekinthetjük át.</p>

                    <h3>Gépészeti rendszerekre vonatkozó variációk</h3>
                    <img className="mw-70"
                        src={optimum2}
                        alt={"Eredmények"} />
                    <p>A program a bal felső listában megjeleníti az épületnél a számításokban figyelembevett gépészeti rendszereket.
                    Ezekre vonatkozólag adhatunk meg különböző variációkat. Az ablak alsó része ad lehetőséget az új gépészeti rendszerek
                    megadására. Az új rendszert, hasonlóan a szerkezetekhez, ráhúzzuk a meglévő rendszerre, így adva meg az egyes variációkat.
		            Itt is, ezzel egy időben kéri a program az adott változtatás költségét.</p>

                    <h3>Energiahordozók fajlagos költsége, fajlagos CO2 kibocsátás értékek</h3>
                    <img className="mw-70"
                        src={optimum3}
                        alt={"Eredmények"} />
                    <p>Az energetikai számítás során választható energiahordozókra megadhatjuk azok fajlagos költségét,
		            illetve a fajlagos CO2 kibocsátás értékét.</p>
                    <p>Csak azokra az energiahordozókra kell értékeket megadnunk, amik a számításokban előfordulnak,
                    illetve itt is tovább tudunk lépni, ha egyes adatok nem ismertek. Ha egy áradat hiányzik, akkor a várható
                    éves üzemeltetési költség megtakarítás eredménye nem lesz helyes, ha a fajlagos CO2 kibocsátás értéke hiányzik,
		            úgy az éves CO2 kibocsátásban elérhető megtakarítás eredménye alacsonyabb a ténylegesnél.</p>

                    <h3>Variációk elemzése</h3>
                    <p>A megadott változtatási lehetőségek mellett, az összes lehetséges kombinációra elkészül az energetikai számítás.</p>
                    <img className="mw-70"
                        src={optimum4}
                        alt={"Eredmények"} />
                    <p>A baloldali listában jelennek meg az egyes számítások, minden számításról egy-egy sor, a jobboldali részen a
		            listában kijelölt variációra vonatkozó számítás részletezve.</p>
                    <p>A sok variáció közt a legmegfelelőbbek kiválogatásához több eszközt is igénybe vehetünk. Megváltoztathatjuk a
		            sorba rendezési szempontot a lista alatti részen, illetve a listából törölhetünk variációkat.</p>
                    <p>A csoportos export segítségével a listában szereplő valamennyi számítás főbb eredményei kirakhatók a vágólapra,
                    ahonnan átemelhetők Excelbe vagy Wordbe, dokumentálás, vagy további számítások, értékelések céljából.
		            A jobboldali rész alatti export gomb csak az aktuális variációt helyezi a vágólapra.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Optimum pl3 overflow-x-hidden ">
                    <h2>WinWatt optimum module</h2>
                    <p>Starting from the <Link to="/public/ww_epbd.html">energy performance calculation</Link> made
                    for our building, we can analyze the effect of different modifications on the
                    energy use of the building with the help of the optimum module. It is
                    important to note that these calculations continue to be made according
                    to the specifications for energy calculations, which treats the
                    building user as a standard consumer. The actual energy consumption of
                    the building, due to the approximation of the calculation model and the
                    use of non-standard values, differs slightly from the calculated value.</p>
                    <h3>Modifications to structures</h3>
                    <p>Az optimum keresés első lépésében a fűtött teret
                    határoló szerkezetekre vonatkozó módosításainkat adhatjuk meg. A fűtött
                    teret határoló szerkezet típusok listában összevonva jelennek meg a
                    szerkezetek. A táblázatból kiolvasható többek közt az adott szerkezet
                    hőátbocsátási tényezője, összfelülete, illetve a SA*U értékből mekkora
                    részt képvisel. Ez utóbbi jellemző jó iránymutatást ad, hogy mennyire
                    érdemes az adott szerkezet típussal foglalkozni.</p>
                    <img className="mw-70"
                        src={optimum1}
                        alt={"Eredmények"} />
                    <p>In the bottom half of the window, the structure database is displayed, and
                    we can add new elements to the database. For example, you can introduce
                    a new type of door and window that has a different U value than the
                    previous one, or you can copy the exterior wall or slab of a building
                    to modify its layer order, for example, with a thermal insulation
                    system. The modified, by dragging our new structures in the top list to
                    the appropriate structures of your type to indicate what changes we
                    want to examine. Several variants can be specified for one structure.</p><p>When
                    you add a new variation, you can also specify the expected cost, per
                    square meter (possibly line length). Even if we are unable to provide a
                    price, the calculation will still produce usable results in other
                    respects, only the cost of investment and the return on investment will
                    be false.</p><p>If we select a structure from our top list, in the
                    list on the right you can see the variations given for that type of
                    structure.</p>
                    <h3>Variations on mechanical systems</h3>
                    <img className="mw-70"
                        src={optimum2}
                        alt={"Eredmények"} />
                    <p>In the top left-hand list, the system displays the mechanical
                    systems used in the calculation at the building. Various variations can
                    be made for these. The lower part of the window allows you to enter new
                    mechanical systems. Like the structures, the new system is dragged onto
                    the existing system to give each variation. Here, at the same time, the program requests the cost of the change.</p>
                    <h3>Specific cost of energy carriers, specific CO2 emission values</h3>
                    <img className="mw-70"
                        src={optimum3}
                        alt={"Eredmények"} />
                    <p> The energy calculation, we can specify the specific cost of the energy
                    carriers and the value of the specific CO2 emission.</p><p>We only
                    need to give values ​​for the energy carriers that are used in the
                    calculations, or we can go further here if some data is not known. If a
                    flood is missing, then the expected annual operating cost savings will
                    not be correct if the specific CO2 emission value is missing, so the
                    annual CO2 savings achieved will be lower than the actual one.</p>
                    <h3>Analysis of variations</h3>
                    <p>With the given options for change, the energy calculation is completed for all possible combinations.</p>
                    <img className="mw-70"
                        src={optimum4}
                        alt={"Eredmények"} />
                    <p>The left-hand list displays each calculation, with a series of calculations
                    for each calculation, and details for each variation selected in the
                    list on the right.</p><p>Among the many variations, several tools
                    are available to select the most suitable. We can change the sorting
                    aspect at the bottom of the list, or delete variants from the list.</p><p>Group
                    export allows you to extract the main results of each calculation in
                    the list to the clipboard from where it can be exported to Excel or
                    Word for documentation or further calculations and evaluations. The
                    export button below the right section puts only the current variation
                    on the clipboard.</p>
                </div>
            );
        }
    }
}

export default Optimum;