import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import gasnet1 from '../screenshots/gasnet1.gif'
import gasnet2 from '../screenshots/gasnet2.gif'
import gasnet3 from '../screenshots/gasnet3.gif'

class GasNet16 extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        return (
            <div className="GasNet16 pl3 overflow-x-hidden ">
                <Helmet><title>GasNet Gázhálózat méretező program</title></Helmet>
                <h2>GasNet Gázhálózat méretező program</h2>
                <p>A program belső gázellátó hálózatok hidraulikai méretezésére és a helyiségek légtérterhelés számítására szolgál. Kezel minden olyan elemet, amely a gázhálózat méretezési feladatában szerepel, így a szakaszok és fogyasztók mellett a fogyasztásmérőket és a nyomáscsökkentőket is.</p>
                <p>A hálózatot alkotó fogyasztók, szakaszok és csomóponti elemek adatainak megadása, a programhoz kapcsolódó adatbázis és a szokásos beállításokat tartalmazó szakasz makrók felhasználásával gyorsan és rugalmasan történhet. A másoló funkciókkal az ismétlődő hálózatrészek többszöri beillesztése is egyszerűen megoldható.</p>
                <img className="mw-20 center"
                    src={gasnet1}
                    alt={"Eredmények"} />
                <p>A hálózat méretezés során nem csupán a hidraulikai méretezés történik meg, hanem a program feladata valamennyi fogyasztónál a várható kilépési nyomás számítása is. A mértékadó terhelések és a légtérterhelések számításánál nem csupán a magyar Gáz- és Ojalipari Műszaki Biztonsági Szabályzat (GOMBSz), hanem a német DVGW és TRGI előírások alapján is végezhető a méretezés.</p>
                <img className="mw-20 center"
                    src={gasnet2}
                    alt={"Eredmények"} />
                <p>A számítási eredmények mind táblázatokon mind a kapcsolási rajz segítségével megtekinthetők. A felhasználó ezeken a képernyőkön be is avatkozhat, módosíthatja a szakaszok átmérőjét, változtathat az alapadatokon.</p>
                <img className="mw-20 center"
                    src={gasnet3}
                    alt={"Eredmények"} />
                <p>Tervezési variánsok feldolgozásához a program olyan szolgáltatásokat kínál, amelyekkel egy-egy terméket ki lehet cserélni más termékre, és az így módosított munkát újra lehet méretezni. A <Link to="/public/adatbank.html">program adatbázisát</Link> folyamatosan bővítjük, a legfrissebb adatbázis honlapunkon folyamatosan elérhető, és onnan a <Link to="/public/frissitok.html">programfrissítés</Link> is megoldható, illetve letölthető a program <Link to="/public/demok.html">demo változata.</Link></p>
                <p>A program az anyagkigyűjtésen túl a költségvetés készítést is támogatja. Olyan kimenettel rendelkezik, amely az anyagkigyűjtés eredményeit azonosítókkal és mennyiségekkel tartalmazza, abból egy arra alkalmas költségvetés készítő program - ilyen például az MM.sys Számítástechnikai Bt. KönyvCalc programja - a költségvetést képes automatikusan előállítani.</p>
            </div>
        );
    }
}

export default GasNet16;