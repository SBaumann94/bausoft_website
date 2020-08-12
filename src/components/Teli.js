import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import teli1 from '../screenshots/ww_teli1.gif';
import teli2 from '../screenshots/ww_teli2.gif';
import {Helmet} from 'react-helmet';

class Teli extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Teli pl3 overflow-x-hidden ">
                    <Helmet><title>Téli hőszükséglet-számítás</title></Helmet>
                    <h2>WinWatt téli hőszükséglet-számítás</h2>
                    <p>A téli hőszükséglet-számítás az
                MSZ-04.140-3/87 szabvány alapján történik,
                esetleg párhuzamosan a <Link to="/public/ww_nyari.html">nyári
                hőterhelés-számítással</Link>, ha az adott
                programváltozat azt tartalmazza.</p>
                <p>A határoló szerkezetek megadását
                könnyíti a szerkezet adatbázisból való
                építkezés. A szerkezetek adatai számíthatók
                az <Link to="/public/ww_epfiz.html">épületfizikai
                modullal</Link>, de közvetlenül is megadhatók.</p>
                <img className="mw-70"
                        src={teli1}
                        alt={"Eredmények"} />
                <p>A számítás során a külső és belső
                szerkezetek transzmissziós veszteség
                számítása mellett elvégezhető a filtrációs
                energiaáram, a napsugárzásból származó
                hőnyereség számítása, figyelembe vehetők a
                belső hőterhelések.</p>
                <img className="mw-70"
                        src={teli2}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Teli pl3 overflow-x-hidden ">
                    <Helmet><title>Winter heat demand calculator</title></Helmet>
                    <h2>WinWatt winter heat demand calculator</h2>
                    <p>The winter heat demand calculation is based on MSZ-04.140-3 / 87 standard, possibly in parallel with the 
                    <Link to="/public/ww_nyari.html">summer heat load calculation</Link>, if it is included in the program version.</p>
                    <p>Specifying delimiting structures is facilitated by the construction
                    of the structure database. The structure data can be calculated using
                    the <Link to="/public/ww_epfiz.html">building physics module</Link> or directly.</p>
                    <img className="mw-70"
                            src={teli1}
                            alt={"Eredmények"} />
                    <p>During the calculation, besides calculating the transmission loss of
                    the external and internal structures, the filtration energy flow, the
                    heat gain from the solar radiation can be calculated, and the internal
                    heat loads can be taken into account.</p>
                    <img className="mw-70"
                            src={teli2}
                            alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Teli;