import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import password3 from "../screenshots/password3.gif"

class AddFunc extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="AddFunc pl3 overflow-x-hidden ">
                <Helmet><title>Céges programokhoz vásárolható kiegészítések</title></Helmet>
                <h2>Céges programokhoz vásárolható kiegészítések</h2>
                <p>Az USB hardverkulccsal ellátott céges programok további funkciókkal egészíthetők ki. Ezek a programok a következők:</p>
                <ul>
                    <li>Danfoss Kft. DanWatt programja</li>
                    <li>Magyar Rézpiaci Központ WinWatt programja</li>
                    <li>UPONOR Kft. WinWatt programja</li>
                </ul>
                <p>A DanWatt esetén, ha még párhuzamos portra csatlakozó kulccsal rendelkezik, a kiegészítésekhez szükséges USB kulcsot a Danfoss Kft-től szerezheti be.</p>
                <p>A funkciók, amivel a fenti programok kiegészíthetők:</p>
                <ul>
                    <li><Link to="/public/ww_nyari.html">Nyári hőterhelés modul</Link></li>
                    <li><Link to="/public/ww_epbd.html">Épületenergetikai modul</Link></li>
                    <li><Link to="/public/ww_optimum.html">Optimum modul</Link></li>
                    <li><Link to="/public/ww_gbxml.html">gbXML modul</Link></li>
                    <li><Link to="/public/ww_sun.html">Sun modul</Link></li>
                    <li><Link to="/public/ww_hidroplan.html">HidroPlan hidraulikai optimalizálás modul</Link></li>
                </ul>
                <p>Ezeket a kiegészítéseket a Bausoft Kft-től vásárolhatja meg, az <Link to="/public/arak.html">árakat itt</Link> találja.
		Megrendelés esetén a következők a teendők.</p>
                <h4>1. Először is a kulcs és felhasználói azonosítókra van szükségünk.</h4>
                <p>Ezeket a programban a Beállítások | Program beállítások menüponttal, a jelszavak lapon találja meg.
		Példaként a DanWatt program által megjelenített képernyő a következő:</p>
                <img className="tl"
                    src={password3}
                    alt="jelszó ablak" />
                <p>A kékkel bekeretezett információkra van szükségünk. A legjobb megoldás, ha ezt a képernyőképet küldi el emailben.
                A képet úgy tudja elküldeni, hogy a fenti ablak megnyitása után a Print Scrn gombot lenyomja. Még jobb,
                ha közben a bal oldali Alt billentyűt is lenyomja, mert így csak ennek az ablaknak a képe kerül a vágólapra.
                A képet például a Word-öt megnyitva, a Szerkesztés menü Beillesztés parancsával tudja a dokumentumba betenni.
		Ezt a Word dokumentumot elmentve, csatolja a megrendelő emailhez.</p>
                <p>A <strong>DanWatt felhasználók</strong> mindenképpen figyeljenek oda, hogy az ő programjuk két kulcs azonosítót kell hogy kiírjon
		(a Magyar Rézpiaci Központtól és az UPONOR Kft-től származó programok csak egyet.)
		Ha ez nem így lenne, akkor először <Link to="/public/frissitok.html">frissítsék</Link> a programjukat az újabb verzióra, mert
		egyébként nem lesz elégséges az információnk a szükséges jelszó előállításához.</p>
                <h4>2. Adja meg, hogy melyik modult szeretné megrendelni.</h4>
                <h4>3. Adja meg a számlázáshoz és postázáshoz szükséges adatokat.</h4>
                <p>A számlázási adatok eltérhetnek a program felhasználói adataitól.</p>

                <p>Ha valamennyi szükséges információt megkaptuk, a megrendelt termékekről előszőr díjbekérőt állítunk ki, aminek
                másolatát e-mailben elküldjük. Az átutalást követően a megbízás másolatát küldje át e-mailben, hogy minél hamarabb küldhessük az új jelszó adatokat és postázhassuk
		a számla eredeti példányát a megadott postacímre.</p>

            </div>
        );
    }
}

export default AddFunc;