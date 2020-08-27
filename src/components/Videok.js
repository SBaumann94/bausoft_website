/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import youtube from '../screenshots/youtube.jpg';
class Videok extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="Videok pl3 pr4">
                <Helmet><title>Rövid videók</title></Helmet>
                <h2 >Rövid videók a programok használatához</h2>
                <h3>A videók elérhetőek a Youtube csatornánkon:</h3>
                <a href="https://www.youtube.com/channel/UC_8D5XNGjEOMY3LoRGKtITg/videos" target="_blank">
                    <img className="min400 max600"
                        src={youtube}
                        alt={"Eredmények"} /></a>
                <h3>WinWatt</h3>
                <ul>
                    <h4>Szerkezetek</h4>
                    <li><a href="https://youtu.be/KJMaa-3Hx9U">Külső fal létrehozása</a></li>
                    <li><a href="https://youtu.be/pm8q6_z1m6Q">Padlásfödém létrehozása</a></li>
                    <li><a href="https://youtu.be/qENECatJx7Q">Padló létrehozása</a></li>
                    <li><a href="https://youtu.be/5T1pxcG0C0g">Pincefödém létrehozása</a></li>
                    <li><a href="https://youtu.be/uyetzAiQ6g8">Nyílászárók létrehozása</a></li>
                    <h4>Helyiségek</h4>
                    <li><a href="https://youtu.be/Acxd5KU0TOc">1-es és 2-es helyiségek létrehozása</a></li>
                    <li><a href="https://youtu.be/5asQVh3X9ls">3-9 számú helyiségek létrehozása</a></li>
                    <li><a href="https://youtu.be/G7nyE09KV58">Helyiségek ellenőrzése</a></li>
                    <h4>Épület</h4>
                    <li><a href="https://youtu.be/ufLUfy0e9yk">Hőtároló tömeg ellenőrzése</a></li>
                    <li><a href="https://youtu.be/Eq3MGVUJkYw">Fajlagos hőveszteségtényező</a></li>
                    <li><a href="https://youtu.be/MbyLIYYDcho">Energia igény tervezési értékek, számított értékek</a></li>
                    <li><a href="https://youtu.be/DJYJH_sEh3M">Gépészeti rendszerek</a></li>
                    <li><a href="https://youtu.be/1iL96xRfa2E">A tanúsítvány nyomtatása, feltöltése</a></li>
                </ul>
                <h3>Az anyag adatbázissal kapcsolatos videók.</h3>
                <ul>
                    <li><a href="https://youtu.be/-GH3zudNLYk">Anyagok létrehozása</a></li>
                    <li><a href="https://youtu.be/yjwcGIGhA4o">Komplett rétegrend létrehozása</a></li>
                    <li><a href="https://youtu.be/kassJyJWYmc">Saját anyagok elmentése, adatok letöltése a honlapról</a></li>
                </ul>

                <h3>Szerkezetekkel kapcsolatos további videók.</h3>
                <ul>
                    <li><a href="https://youtu.be/K_9VFDMHxl8">Szerkezetek módosítása, cseréje</a></li>
                    <li><a href="https://youtu.be/hZ242Jmh1aU">Globális szerkezetek jegyzék</a></li>
                </ul>

                <h3>Hidraulikai számítás videók.</h3>
                <ul>
                    <li><a href="https://youtu.be/Osx2Tgnd0vU">Bevezető példa</a></li>
                    <li><a href="https://youtu.be/vgZFSmjof3M">A hibakeresés módszerei</a></li>
                    <li><a href="https://youtu.be/ggUgdSKzm3I">Két lakásos családi ház, osztó-gyűjtős radiátoros fűtésének hidraulikai számítása 1. rész</a></li>
                    <li><a href="https://youtu.be/8fzo3sT1RrY">Két lakásos családi ház, osztó-gyűjtős radiátoros fűtésének hidraulikai számítása 2. rész</a></li>
                    <li><a href="https://youtu.be/efxNtR4LLXs">Két lakásos családi ház, padlóban elágaztatott radiátoros fűtésének hidraulikai számítása 1. rész</a></li>
                    <li><a href="https://youtu.be/BRxs5vaer8Y">Két lakásos családi ház, padlóban elágaztatott radiátoros fűtésének hidraulikai számítása 2. rész</a></li>
                    <li><a href="https://youtu.be/ggXkBU7f_9Q">Két lakásos családi ház, padlóban elágaztatott radiátoros fűtésének hidraulikai számítása 3. rész</a></li>
                    <br />
                    <li><a href="https://youtu.be/hOLnkItpQdg">Társasház hidraulika 1. rész, a feladat ismertetése, beállítások</a></li>
                    <li><a href="https://youtu.be/VAjP8sOPP3I">Társasház hidraulika 2. rész, egy tetőtéri lakás feldolgozása</a></li>
                    <li><a href="https://youtu.be/BI97MfJBm7U">Társasház hidraulika 3. rész, egy strang egyik oldalának kialakítása</a></li>
                    <li><a href="https://youtu.be/YMpLo2OuAAk">Társasház hidraulika 4. rész, strang másolása, korrigálása</a></li>
                    <li><a href="https://youtu.be/wMrThMEb-bc">Társasház hidraulika 5. rész, a teljes hálózat elkészítése</a></li>
                    <li><a href="https://youtu.be/7nQO7oa4UzA">Társasház hidraulika 6. rész, hibák javítása, optimalizálás</a></li>
                </ul>

                <h3>Felületfűtések-hűtések videók.</h3>
                <ul>
                    <li><a href="https://youtu.be/MRH4TUzmceg">WinWatt felületfűtések 1. rész, padlófűtési mezők kiosztása</a></li>
                    <li><a href="https://youtu.be/5NaEat9Zcvc">WinWatt felületfűtések 2. rész, padlófűtési körök létrehozása</a></li>
                    <li><a href="https://youtu.be/S2DqMS5vcJ8">WinWatt felületfűtések 3. rész, a teljes rendszer hidraulikai méretezése</a></li>
                    <li><a href="https://youtu.be/Ec1-jfRXrTk">WinWatt felületfűtések 4. rész, falfűtés méretezése REHAU nedves rendszerrel</a></li>
                    <li><a href="https://youtu.be/PXqNDMWEkKw">WinWatt felületfűtések 5. rész, falfűtés méretezése Meditherm és BEKA nedves, valamint REHAU száraz rendszerrel</a></li>
                </ul>

                <h3>Egyéb videók.</h3>
                <ul>
                    <li><a href="https://youtu.be/1yi6xtSzwwo">Adatbázis frissítések</a></li>
                    <li><a href="https://youtu.be/rm_gTlkf_q0">A megfelelő karakterkódolás beállítása Windows 10 alatt.</a></li>
                </ul>

                <h3>Korábbi, hang nélküli videók</h3>
                <ul>
                    <li><a href="tutorials/szerkezet.swf.html">Szerkezetek létrehozása</a></li>
                    <li><a href="tutorials/betonfodem.swf.html">Betonfödém, egyes metszetekben eltérő U értékkel rendelkező szerkezetek</a></li>
                    <li><a href="tutorials/tanusitas_gepeszet.swf.html">Tanúsítás gépészeti rendszereinek megadása</a></li>
                    <li><a href="tutorials/HMV_napkollektorral.swf.html">Napkollektoros HMV rendszer megadása</a></li>
                    <li><a href="tutorials/tukrozes.swf.html">Helyiségek tükrözése (export-import funkció)</a></li>
                    <li><a href="tutorials/neer_xml.swf.html">XML export a Néer 2 projekthez</a></li>
                </ul>

                <h3>CHM-BAU32</h3>
                <ul>
                    <li><a href="https://youtu.be/FHmqbdD1TP8">Cserépkályha kéményének méretezése</a></li>
                    <li><a href="https://youtu.be/RZpHzy2CpNg">Készülék adatbázis bővítése egy új típussal, az XML fájl elkészítése</a></li>
                </ul>

                <h3>WaterNet</h3>
                <p>A következő videók egy szálloda vízhálózatának hidraulikai méretezését mutatják be.</p>
                <ul>
                    <li><a href="https://youtu.be/k4gF9AP8gNw">A feladat ismertetése, projekt beállítások</a></li>
                    <li><a href="https://youtu.be/0ARO_lC9yR4">Egy blokk fogyasztóinak megadása</a></li>
                    <li><a href="https://youtu.be/hqwR8N52vOc">Egy blokk szakaszainak megadása</a></li>
                    <li><a href="https://youtu.be/OI7elvUaHGk">Egy blokk számítása, tesztelése</a></li>
                    <li><a href="https://youtu.be/Sx5bRqsObos">Másolásokkal a szintek és a strangok megsokszorozása, a teljes hálózat felépítése</a></li>
                    <li><a href="https://youtu.be/JzxmzCn9ewY">A csomóponti elemek kezelése, felhasznált anyagok kigyűjtése</a></li>
                    <li><a href="https://youtu.be/bPcD2wwR79c">A cirkulációs hálózat felépítése</a></li>
                    <li><a href="https://youtu.be/klIJAqEnFdE">Tároló kiválasztása</a></li>
                    <li><a href="https://youtu.be/1E4lSRHgc8o">Vízmérő kiválasztása</a></li>
                    <li><a href="https://youtu.be/x0KwJwUHL9U">Körvezeték megadása, számítása</a></li>
                </ul>

                <h3>Hurkolt hálózat méretező</h3>
                <ul>
                    <li><a href="https://youtu.be/JFU8In0WkTQ">Sűrített levegős hálózat 1. rész, adatok bevitele</a></li>
                    <li><a href="https://youtu.be/AiU415sPduY">Sűrített levegős hálózat 2. rész, számítás és megjelenítés</a></li>
                </ul>

                <h3>SunArch</h3>
                <ul>
                    <li><a href="tutorials/SunArchFoto.swf.html">Takarás készítése halszem optikás fotó segítségével</a></li>
                </ul>

                <h3>ISO-BAU szigetelés kiválasztó</h3>
                <ul>
                    <li><a href="https://youtu.be/VvjETU_dQz0">1. rész, számítás adott vastagságú szigetelés mellett és az optimális vastagság meghatározása.</a></li>
                    <li><a href="https://youtu.be/8x63GtMzXT8">2. rész, páralecsapódás megakadályozása hűtési csővezetékre és meleg levegőt szállító légcsatornára.</a></li>
                    <li><a href="https://youtu.be/7VBTGfE1a9Q">3. rész, tartály szigetelése.</a></li>
                </ul>

                <h3>Hőcserélő méretező</h3>
                <ul>
                    <li><a href="https://youtu.be/NVn46FXU9m0">Hőcserélő méretezés</a></li>
                </ul>
                
                <h3><Link to="/public/oktatas.html">Programjainkhoz kapcsolódó konzultációk, oktatások</Link></h3>
            </div >
        );
    }
}

export default Videok;