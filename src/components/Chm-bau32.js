import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import ChmBau321 from '../screenshots/chm-bau32_1.gif'
import ChmBau322 from '../screenshots/chm-bau32_2.gif'
import ChmBau323 from '../screenshots/chm-bau32_3.gif'
import ChmBau324 from '../screenshots/chm-bau32_4.gif'
import ChmBau325 from '../screenshots/chm-bau32_5.gif'
import ChmBau326 from '../screenshots/chm-bau32_6.gif'


class ChmBau32 extends Component {
    render() {
        return (
            <div className="ChmBau32 pl3 overflow-x-hidden">
                <h1>CHM-BAU32 Kéményméretező program</h1>
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
    }
}

export default ChmBau32;