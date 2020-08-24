import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import waternet1 from '../screenshots/watern1.gif'
import waternet2 from '../screenshots/watern2.gif'
import waternet3 from '../screenshots/watern3.gif'

class WaterNet16 extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="WaterNet16 pl3 overflow-x-hidden ">
                <Helmet><title>WaterNet Vízhálózat méretező program</title></Helmet>
                <h2>WaterNet Vízhálózat méretező program</h2>
                <p>A program belső vízellátó hálózat hidraulikai méretezésére használható. Egy rendszeren belül, együtt dolgozható fel a hidegvíz, használati melegvíz és cirkulációs hálózat. Kezel minden olyan elemet, amely egy vízhálózat méretezési feladatában szerepel, így a szakaszok és fogyasztók mellett vízmérőket, melegvíz termelőket, nyomásfokozókat, nyomáscsökkentőket és cirkulációs szivattyúkat.</p>
                <p>A hálózat méretezés során nem csupán a hidraulikai méretezés történik meg, a HMV és cirkulációs rendszer vezetékeinek hőleadását is számítja a program. Ez a cirkulációs rendszer egzaktabb beszabályozását teszi lehetővé. A program feladata valamennyi fogyasztónál a várható kifolyási nyomás számítása, illetve a cirkulációs rendszer vízmennyiségeinek beszabályozására szolgáló szelepek beállítási értékeit meghatározni.</p>
                <img className="mw-20 center"
                    src={waternet1}
                    alt={"Eredmények"} />
                <p>A mértékadó terhelések számításánál nem csupán az MSZ 04-132-1991 "Épületek vízellátása" magyar szabvány előírásait veheti valaki figyelembe, hanem a német DIN 1988 szerinti számítás is választható. Az épület típusa bármely, a szabványokban szereplő kategória szerinti lehet.</p>
                <p>A hálózatot alkotó fogyasztók, szakaszok és csomóponti elemek adatainak megadása a programhoz kapcsolódó adatbázis és a szokásos beállításokat tartalmazó szakasz makrók felhasználásával nagyon gyorsan és rugalmasan történhet.</p>
                <img className="mw-20 center"
                    src={waternet2}
                    alt={"Eredmények"} />
                <p>A számítási eredmények mind táblázatokon mind a kapcsolási rajz segítségével megtekinthetők. A felhasználó ezeken a képernyőkön beavatkozhat, módosíthatja a szakaszok átmérőjét, változtathat az alapadatokon.</p>
                <img className="mw-20 center"
                    src={waternet3}
                    alt={"Eredmények"} />
                <p>A programhoz tartozó másoló funkciókkal az ismétlődő hálózatrészek többszöri beillesztése, egyszerűen megoldható. Tervezési variánsok feldolgozásához a program olyan szolgáltatásokat kínál, amelyekkel egy-egy terméket ki lehet cserélni más termékre, és az így módosított munkát újra lehet méretezni. A <Link to="/public/adatbank.html">program adatbázisát</Link> folyamatosan bővítjük, a legfrissebb adatbázis honlapunkon folyamatosan elérhető, és onnan a <Link to="/public/frissitok.html">programfrissítés</Link> is megoldható, illetve letölthető a program <Link to="/public/demok.html">demo változata.</Link></p>
                <p>A program az anyagkigyűjtésen túl a költségvetés készítését is támogatja. Olyan kimenettel rendelkezik, amely az anyagkigyűjtés eredményeit azonosítókkal és mennyiségekkel tartalmazza, abból egy arra alkalmas költségvetés készítő program - ilyen például az MM.sys Számítástechnikai Bt. KönyvCalc programja - a költségvetést képes automatikusan előállítani. Ezt a költségvetést a felhasználó szabadon tovább bővítheti, változtathatja az igényeinek megfelelően.</p>
                <p className="red">A program 16 bites, ezért 64 bites Windows alatt nem használható!</p>
            </div>
        );
    }
}

export default WaterNet16;