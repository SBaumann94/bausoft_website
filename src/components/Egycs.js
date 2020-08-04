import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import egycs1 from '../screenshots/ww_ecs1.gif';
import egycs2 from '../screenshots/ww_ecs2.gif';
import { Helmet } from 'react-helmet'

class Egycs extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Egycs pl3 overflow-x-hidden ">
                    <Helmet><title>Egycsöves fűtés</title></Helmet>
                    <h2>WinWatt egycsöves fűtés</h2>
                    <p>A modulban az átfolyós, átkötőszakaszos
                    függőleges egycsöves fűtések és a
                    vízszintes egycsöves fűtések egyaránt
                    méretezhetőek. Az egy körbe tartozó
                    helyiségek kiválasztása után a program
                    automatikusan kiválasztja a szükséges
                    radiátor méreteket.</p>
                    <img className="mw-70"
                        src={egycs1}
                        alt={"Eredmények"} />
                    <p>A programban az átkötőszakaszos kötés
                    részletes elemzésével a beömlési tényező
                    és a kötés ellenállása számítható. Mivel
                    a program a csőlehűléseket is figyelembe
                    veszi, ezért jól használható a panel
                    épületekben korábban létesített,
                    TR-rendszerű egycsöves fűtések
                    felújításánál.</p>
                    <img className="mw-70"
                        src={egycs2}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Egycs pl3 overflow-x-hidden ">
                    <Helmet><title>Single pipe heating</title></Helmet>
                    <h2>WinWatt single pipe heating</h2>
                    <p>In the module, both vertical single-pipe heaters with flow-through
                    bridging and horizontal single-pipe heaters can be scaled. After
                    selecting the rooms belonging to one circle, the program automatically
                    selects the required radiator sizes.</p>
                    <img className="mw-70"
                        src={egycs1}
                        alt={"Eredmények"} />
                    <p>In the program, the inlet factor and the bonding resistance can be
                    calculated by detailed analysis of the bridging section bond. Because
                    the program also takes into account pipe cooling, it can be used when
                    renovating TR-pipe single-pipe heating systems previously installed in
                    panel buildings.</p>
                    <img className="mw-70"
                        src={egycs2}
                        alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Egycs;