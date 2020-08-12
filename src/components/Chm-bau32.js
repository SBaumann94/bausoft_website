import React, { Component } from 'react';
import 'tachyons';
import ChmBau321 from '../screenshots/chm-bau32_1.gif'
import ChmBau322 from '../screenshots/chm-bau32_2.gif'
import ChmBau323 from '../screenshots/chm-bau32_3.gif'
import ChmBau324 from '../screenshots/chm-bau32_4.gif'
import ChmBau325 from '../screenshots/chm-bau32_5.gif'
import ChmBau326 from '../screenshots/chm-bau32_6.gif'
import { Helmet } from 'react-helmet'

class ChmBau32 extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="ChmBau32 pl3 overflow-x-hidden">
                    <Helmet><title>CHM-BAU32 Kéményméretező program</title></Helmet>
                    <h2>CHM-BAU32 Kéményméretező program</h2>
                    <p className="tl">A program egy vagy több tüzelőberendezés, egyedi vagy gyűjtőkéményes égéstermékelvezető
                    rendszerének méretezésére szolgál, a korábbi változatával szerzett tapasztalatok
                    felhasználásával készült, annak továbbfejlesztett változata. Műszaki tartalma az égéstermék
                    elvezető rendszerek hő- és áramlástechnikai méretezési eljárását tartalmazó MSZ EN 13384-1
                és MSZ EN 13384-2 szabványok figyelembevételével készült.<br />
                A program egyaránt használható a szilárdtüzelésű, atmoszférikus égőjű (deflektoros),
                túlnyomásos égőjű (blokkégős) és égéstermék szállító ventilátorral rendelkező (turbó) készülékek méretezésére.</p>
                    <img className="mw-60"
                        src={ChmBau321}
                        alt={"Alapelrendezés"} />
                    <p align="left">Több berendezés közös égéstermék elvezetése esetén azok közösítése történhet közös füstcsőben,
                    de a csatlakozások lehetnek különböző szinteken, így gyűjtőkéményt is lehet méretezni.
                    A teljesítményt tekintve nem tartalmaz a program korlátozásokat,
                    így a legkisebb készülékek egyedi kéménye és az ipari berendezések központi
                kéménye egyaránt méretezhető.</p>
                    <img className="mw-60"
                        src={ChmBau322}
                        alt={"Tüzelőberendezés"} />
                    <p align="left">A készülékek a program adatbázisából választhatóak, de a felhasználó egyedileg
                is megadhatja egy, az adatbázisban nem szereplő berendezés adatait.<br />
                Szilárd, folyékony ill. gáz halmazállapotú tüzelőanyaggal üzemelő
                készülék egyaránt méretezhető.</p>
                    <img className="mw-40"
                        src={ChmBau323}
                        alt={"Égéstermék"} />
                    <p align="left">Az égéstermék meghatározása alapesetben az MSZ EN 13384-1 alapján történik.
                    A felhasználónak azonban arra is van lehetősége, hogy a
                    tüzelőanyag összetételét egyedileg állítsa össze és ez alapján történjék a
                sztöchometriai számítás, a tüzelőanyag és az égéstermék paramétereinek meghatározása.<br />
                Az égési levegő belépési veszteségének számításakor a program számolja a réstényezőkkel megadott
                nyílászárók ellenállását, és választhatóak különböző gyártók által kínált légbevezető elemek is.
                Nagyobb teljesítményű készülékeknél a levegő bevezetésére szolgáló légcsatorna rendszer
                elemekből állítható össze és így méretezhető.</p>
                    <img className="mw-50"
                        src={ChmBau324}
                        alt={"Szakasz"} />
                    <p align="left">A készülék és a kémény közti összekötő elem, vagy a kémény függőleges
                    szakaszának adatai a program adatbázisából választhatóak, de megadhatóak egyedileg is.
                    A választékban a többrétegű kör keresztmetszetű elemek mellett a négyszög keresztmetszetű
                    falazott kémények és az utólag bélelt kéményszerkezetek egyaránt megtalálhatóak.
                    LAS rendszerek esetén kialakítható egymástól független égési levegő és égéstermék
                elvezető csatorna, és "cső a csőben" rendszer is.</p>

                    <p align="left">Több számítást kell elvégezni, hogy a kéményt valamennyi veszélyes
                    üzemállapotában ellenőrizzük. A nyomásfeltétel szempontjából az üzem közben előforduló
                    legmagasabb külső hőmérséklet mellett kell a méretezést elvégezni. A hőmérséklet feltételek
                    ellenőrzésénél a legkritikusabb állapot általában a legalacsonyabb külső hőmérséklet
                    mellett fordul elő. Amennyiben a készülék teljesítménye változó, úgy az ellenőrzéseket a
                    legkisebb teljesítmény mellett is célszerű elvégezni. A variációk száma különösen akkor nőhet meg,
                    ha több készülék kapcsolódik a kéményre. Ilyenkor akár egyes készülékek kikapcsolt állapota
                    mellett is elvégezhető más készülékek üzemének ellenőrzése. Ez elsősorban a hőmérséklet feltétel
                vizsgálatakor érdekes, ha csak egy készülék üzemel részterheléssel.</p>
                    <img className="mw-40"
                        src={ChmBau325}
                        alt={"Számítási"} />
                    <p align="left">A programban valamennyi variáció hőmérsékletei és egyéb paraméterei előre
                    definiálhatóak. A méretezés során egyszerre történik valamennyi üzemállapot
                vizsgálata, azok összehasonlíthatók.</p>

                    <p align="left">A számítási eredmények a képernyőn táblázatokban jelennek meg.
                    A táblázat elemeinek sorrendjét és külalakját a felhasználó állíthatja be. A táblázatban
		        szereplő számítási részeredmények az ellenőrizhetőséget segítik.</p>
                    <img className="mw-60"
                        src={ChmBau326}
                        alt={"Eredmények"} />
                    <p>Az eredmények közvetlenül nyomtathatóak, de lehetőség van arra, hogy az eredményeket
                szövegszerkesztőbe exportálva egyedi megjelenítést alakítsunk ki.<br />
                A program adatbázisa folyamatosan bővül, az új elemek az <a href="adatbank.htm"> adatbankból</a> ingyenesen letölthetők.</p>
                </div>
            );
        } else if (this.lang === 'eng') {
            return (
                <div className="ChmBau32 pl3 overflow-x-hidden">
                    <Helmet><title>CHM-BAU32 Chimney Calculator</title></Helmet>
                    <h2>CHM-BAU32 Chimney Calculator</h2>
                    <p className="tl">
                        The program is designed to scale one or more combustion plants, individual or manifold flue gas discharge systems, and is an improved version of the experience gained from its previous version. Technical content of the thermal and flow dimensioning process of flue gas discharge systems is based on MSZ EN 13384-1 and MSZ EN 13384-2.
                        The program can be used for dimensioning of solid-fired, atmospheric burner (deflector), pressurized burner (block burner) and flue gas fan (turbo) units.</p>
                    <img className="mw-60"
                        src={ChmBau321}
                        alt={"Alapelrendezés"} />
                    <p align="left">
                        In the case of the discharge of several combustion products, they may be combined in a common flue, but the connections may be at different levels, so that the collector chimney can be dimensioned. There are no performance restrictions in the program, thus, both the individual chimney of the smallest appliances and the central chimney of industrial installations can be scaled.</p>
                    <img className="mw-60"
                        src={ChmBau322}
                        alt={"Tüzelőberendezés"} />
                    <p align="left">
                        Devices can be selected from the program database, but the user can also individually enter data for a device that is not in the database.
                    Solid, liquid or liquid. gas-fueled equipment can also be scaled.</p>
                    <img className="mw-40"
                        src={ChmBau323}
                        alt={"Égéstermék"} />
                    <p align="left" className="red">Az égéstermék meghatározása alapesetben az MSZ EN 13384-1 alapján történik.
                    A felhasználónak azonban arra is van lehetősége, hogy a
                    tüzelőanyag összetételét egyedileg állítsa össze és ez alapján történjék a
                    sztöchometriai számítás, a tüzelőanyag és az égéstermék paramétereinek meghatározása.<br />
                    Az égési levegő belépési veszteségének számításakor a program számolja a réstényezőkkel megadott
                    nyílászárók ellenállását, és választhatóak különböző gyártók által kínált légbevezető elemek is.
                    Nagyobb teljesítményű készülékeknél a levegő bevezetésére szolgáló légcsatorna rendszer
                    elemekből állítható össze és így méretezhető.</p>
                    <img className="mw-50"
                        src={ChmBau324}
                        alt={"Szakasz"} />
                    <p align="left">The connection data between the appliance and the chimney or the vertical section of the chimney can be selected from the program database or can be specified individually. In addition to the multi-layered circular cross-section elements, the range includes brick chimneys with rectangular cross-sections and subsequent lined chimney structures. In the case of LAS systems, independent combustion air and flue gas exhaust ducts and a "pipe-in-pipe" system can be provided.</p>
                    <p>More calculations are needed to check the chimney in all hazardous operating conditions. For pressure conditions, design shall be carried out at the highest outside operating temperature. When controlling temperature conditions, the most critical condition usually occurs at the lowest outside temperature.
                    If the performance of the device is variable, it is advisable to carry out the checks at the lowest power. The number of variants can increase especially if several appliances are connected to the chimney. In this case, even when some devices are off, it is possible to check the operation of other devices.
                    This is particularly important when testing the temperature condition when only one unit is operating at partial load.
                    </p>
                    <img className="mw-40"
                        src={ChmBau325}
                        alt={"Számítási"} />
                    <p align="left">The temperatures and other parameters of each variation can be predefined in the program. During the dimensioning, all operating conditions are examined simultaneously, they can be compared.</p>
                    <p>Calculation results are displayed in tables on the screen. The order and appearance of the table elements can be set by the user.
                    The results of the calculation in the table below help to verify.</p>
                    <img className="mw-60"
                        src={ChmBau326}
                        alt={"Eredmények"} />
                    <p>The results can be printed directly, but you can export the results to a word processor to create a unique display.
                    The database of the program is constantly expanding and new items can be downloaded from the <a href="adatbank.htm">database</a> for free.</p>
                </div>
            );
        }
    }
}

export default ChmBau32;