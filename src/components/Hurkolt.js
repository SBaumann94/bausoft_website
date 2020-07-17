import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import hurkolt1 from '../screenshots/hurkolt_1.gif'
import hurkolt2 from '../screenshots/hurkolt_2.gif'

class Hurkolt extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Hurkolt pl3 overflow-x-hidden ">
                    <h1>Hurkolt hálózat méretező program</h1>
                    <p align="left">A program segítségével különböző hurkolt hálózatokra vonatkozó számításokat végezhetünk.</p> 
                    <ul>
                        <li>Távhő hálózatok</li>
                        <li>Sűrített levegős hálózatok</li>
                        <li>Hurkolt gázhálózatok</li>
                        <li>Hurkolt vízhálózatok</li>
                        <li>Egyéb hurkolt folyadék keringtető hálózatok</li>
                    </ul>
                    <p>A számítások a hidraulikai méretezésen túl kiterjednek a távvezeték hőveszteségének meghatározására is.</p>
                    <img className="mw-50"
                        src={hurkolt1}
                        alt={"Eredmények"} />
                    <p align="left">A hálózati képre felvihetők a legfontosabb adatok, illetve táblázatokat is készíthetünk az eredményekről.</p>
                    <img className="mw-50"
                        src={hurkolt2}
                        alt={"Eredmények"} />
                    <p align="left">A hálózat több betáplálási és elvételi pontot is tartalmazhat és a hurkok száma sem korlátozott. 
                    A hidraulikai számítás során a csövek mellett a szakaszokba épített szerelvények ellenállása is számításra kerül.</p>
                    <p align="left">A hőveszteség számításakor, távhő hálózat esetén, nem csak a szabadban vezetett, hanem a párban vagy külön, közvetlenül a 
                    talajba fektetett, vagy védőcsatornában, közműalagútban szerelt csövek esetét is kezeli a program.</p> 
                    
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Hurkolt pl3 overflow-x-hidden ">
                    <h1>Loop network calculator program</h1>
                    <p align="left">The program can be used to make calculations for different looped networks.</p> 
                    <ul>
                        <li>District heating networks</li>
                        <li>Compressed air networks</li>
                        <li>Looped gas networks</li>
                        <li>Looped water networks</li>
                        <li>Other looped liquid circulating networks</li>
                    </ul>                 
                    <p>In addition to the hydraulic dimensioning, the calculations include the determination of
                    the heat loss of the transmission line.</p>
                    <img className="mw-50"
                        src={hurkolt1}
                        alt={"Eredmények"} />
                    <p align="left">You can add the most important
                    data to the network image, or create a chart of the results.</p>
                    <img className="mw-50"
                        src={hurkolt2}
                        alt={"Eredmények"} />
                    <p align="left">The network may include multiple entry and exit points, and the number
                    of loops is not limited. Hydraulic calculation also calculates the
                    resistance of the fittings built into the sections in addition to the
                    pipes.<br/>
                    When calculating heat loss, for district heating networks, it should not only be conducted outdoors,
                    but in pairs or separately, directly laid in the ground or in a duct
                    , pipes in utility tunnels are also handled.</p> 
                    
                </div>
            );
        }
    }
}

export default Hurkolt;