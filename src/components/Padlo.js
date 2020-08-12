import React, { Component } from 'react';
import 'tachyons';
import pad1 from '../screenshots/ww_pad1.gif';
import pad2 from '../screenshots/ww_pad2.gif';
import {Helmet} from 'react-helmet'

class Padlo extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Padlo pl3 overflow-x-hidden ">
                    <Helmet><title>Padlófűtések méretezése</title></Helmet>
                    <h2>WinWatt padlófűtések méretezése</h2>
                    <p>A padlófűtés méretezés két önálló
                    munkarészben történik. A hőtechnikai méretezés
                    során az egyes helyiségekbe szükséges fűtőmezők
                    tervezése végezhető el. A program a rendszer típusa,
                    a padlóburkolat ellenállása, az osztás sűrűsége
                    és a fűtővíz túlhőmérséklet függvényében,
                    táblázatban jeleníti meg a teljesítményt és a
                    felületi hőmérsékletet. Ezekből tetszőleges
                    méretű felületek kombinációja állítható össze. A
                    programba épített optimalizáló algoritmus segít a
                    kívánt hőleadást legjobban megközelítő kiosztás
                    megkeresésében.</p>
                    <img className="mw-70"
                        src={pad1}
                        alt={"Eredmények"} />
                    <p>A megtervezett fűtőmezők felhasználásával, a
                    fűtőkörök összeállítása során, az azonos körbe
                    tartozó mezőket kell megadni. A mezők tartozhatnak
                    különböző helyiségekhez is, így a kör bekötő
                    vezetékének a hossza és hőleadása is figyelembe
                    vehető a számításkor. A számításnál mind a
                    bifiláris vezetésű, mind a sorba kötött mezők
                    lehűlései figyelembe vannak véve. A fűtőközeg
                    hőfoklépcsőjének vagy tömegáramának a
                    változtatásával az egyes körök ellenállása
                    kiegyenlíthető. Ezeknek a változtatásoknak a hatása
                    a hőleadásra automatikusan átvételre kerül.</p>
                    <img className="mw-70"
                        src={pad2}
                        alt={"Eredmények"} />
                    <p align="left">Az osztás alapján a program a
                    csőhosszakat és a kiegészítő rendszerelemek
                    mennyiségét is számítja, ami a költségvetés
                    alapjául szolgál.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Padlo pl3 overflow-x-hidden ">
                    <Helmet><title>Floor heating calculator</title></Helmet>
                    <h2>WinWatt floor heating calculator</h2>
                    <p>Floor heating is dimensioned in two separate work
                    sections. During the thermal engineering design, the heating fields
                    needed for each room can be designed. The program displays a table of
                    performance and surface temperature as a function of system type, floor
                    covering resistance, split density and heating water over temperature.<br />
                    These can be used to create a combination of surfaces of any size. The
                    optimization algorithm built into the program helps you to find the
                    best allocation for your desired heat release.</p>
                    <img className="mw-70"
                        src={pad1}
                        alt={"Eredmények"} />
                    <p>When designing heating loops, the same loops must be
                    specified when designing the heating circuits. The fields may also
                    belong to different rooms, so the length and heat dissipation of the
                    connecting line of the circuit can be taken into account in the
                    calculation. In the calculation, both bifilar-guided,<br />
                    all cooling of the connected fields is taken into account. By varying
                    the temperature step or the mass flow rate of the heating medium, the
                    resistance of each circuit can be compensated. The effect of these
                    changes on the heat output is automatically taken over.</p>
                    <img className="mw-70"
                        src={pad2}
                        alt={"Eredmények"} />
                    <p align="left">On the basis of the division, the
                    program also calculates pipe lengths and the amount of additional
                    system components that serve as a basis for the budget.</p>
                </div>
            );
        }
    }
}

export default Padlo;