import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import { Link } from 'react-router-dom';
import nyar1 from '../screenshots/ww_nyar1.gif';
import nyar2 from '../screenshots/ww_nyar2.gif';
import nyar3 from '../screenshots/ww_nyar3.gif';


class Nyari extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Nyari pl3 overflow-x-hidden ">
                    <h2>WinWatt nyári hőterhelés-számítás</h2>
                    <p>A nyári hőterhelés-számítás az
                    MSZ-04.140-4/78 szabvány alapján történik,
                párhuzamosan a <Link to="/public/ww_teli.html">téli
                hőszükséglet-számítással</Link>.</p>
                    <p>A határoló szerkezetek megadását
                    könnyíti a szerkezet adatbázisból való
                    építkezés. A szerkezetek adatai számíthatók
                az <Link to="/public/ww_epfiz.html">épületfizikai
                modullal</Link>, de közvetlenül is megadhatók. A
                szerkezetek tájolása, dőlésszöge
                tetszőleges lehet, üvegezett szerkezeteknél
                árnyékolások és takarások is megadhatók.</p>
                    <img className="mw-70"
                        src={nyar1}
                        alt={"Eredmények"} />
                    <p>A méretezési belső
                    hőmérséklet érték alapján a határoló
                    szerkezetekre a program számítja (külön a fal
                    és külön az üvegezett külső felületekre) a
                    transzmissziós és sugárzási hőterhelést. A
                    hisztogram az egyes hőterheléseket típusokra
                bontva jeleníti meg az óránkénti értékeket.</p>
                    <img className="mw-70"
                        src={nyar2}
                        alt={"Eredmények"} />
                    <p>A belső hőterhelések is megadhatók, úgy
                    mint emberi hőleadás, világítás,
                    filtráció, anyagmozgatásból származó és
                    egyéb hőterhelés. A számításnál a belső
                    hőterhelések napi alakulását is figyelembe
                    veszi a program a megadott időintervallum
                alapján.</p>
                    <img className="mw-70"
                        src={nyar3}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Nyari pl3 overflow-x-hidden ">
                    <h2>WinWatt summer heat load calculation</h2>
                    <p>Summer heat load calculation is based on MSZ-04.140-4 / 78, in parallel with <Link to="/public/ww_teli.html">winter heat demand calculation</Link>.</p>
                    <p>Specifying boundary structures is facilitated by the construction of
                    the structure database. The structure data can be calculated using
                    the <Link to="/public/ww_epfiz.html">building physics module</Link> or directly. The orientation and tilt of the structures can be arbitrary;<br /></p>
                    <img className="mw-70"
                        src={nyar1}
                        alt={"Eredmények"} />
                    <p class="MsoNormal">Based on the design internal temperature value,
                    the program calculates the transmission and radiation heat loads for
                    the enclosures (separately for the wall and separately for the glazed
                    exterior surfaces). The histogram displays hourly values ​​for each
                    type of heat load.</p>
                    <img className="mw-70"
                        src={nyar2}
                        alt={"Eredmények"} />
                    <p>Internal heat loads such as human heat release, lighting,
                    filtration, material handling and other heat loads can also be
                    specified. The calculation also takes into account the daily evolution
                    of the internal heat loads based on the specified time interval.</p>
                    <img className="mw-70"
                        src={nyar3}
                        alt={"Eredmények"} />

                </div>
            );
        }
    }
}

export default Nyari;