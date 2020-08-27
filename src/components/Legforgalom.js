import React, { Component } from 'react';
import 'tachyons';
import legf1 from '../screenshots/legf_1.gif'
import { Helmet } from 'react-helmet'

class Legforgalom extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Legforgalom pl3 overflow-x-hidden ">
                    <Helmet><title>Légforgalom számító</title></Helmet>
                    <h2>Légforgalom számító</h2>
                    <p align="left">A program segítségével az épületekben kialakuló légforgalom
                    számítható. A koncentrált paramétereket alkalmazó modell az egyes
                    helyiségeken belüli légmozgással nem foglalkozik, csak a helyiségek
                    közti és a külső légtér közt kialakuló áramlásokkal. A program a termikus
                    felhajtóerőből, a szélnyomásból és a ventilátorok működéséből adódó
                    hajtóerőket veszi figyelembe. Az egyes helyiségek, adott nyomású
                    csomópontokként szerepelnek a modellben, ezeket kötik össze a
                    légáramlásban résztvevő elemek. Ezek lehetnek nyílászárók, légbeeresztő
                    elemek, légcsatornák, légrácsok, kémények, kürtők, ventilátorok,
                    illetve egyedi elem is felvehető, megadva a nyomás-légmennyiség karakterisztikáját.</p>
                    <img className="mw-20 center"
                        src={legf1}
                        alt={"Eredmények"} />
                    <p align="left">A feladat jellege megköveteli, hogy könnyen lehessen különböző
                    variációkat megvizsgálni a számítás során. Egy-egy új üzemállapothoz
                    megváltoztathatók a hőmérsékletek, egyes szakaszok kizárhatók,
                    nyílászárok nyithatók, zárhatók.</p>
                    <p align="left">A program alkalmazható:</p>
                    <ul>
                        <li>Helyiségek légcseréjének ellenőrzésére. Égéstermék elvezetés
                        nélküli készülékek felállítási helyiségének szellőzését, az égéstermék
                        hígulását lehet ellenőrizni.</li>
                        <li>Gravitációs szellőzések méretezésére.</li>
                        <li>Kémények működésének ellenőrzésére.</li>
                        <li>Épületek hő- és füstvédelmének ellenőrzésére.</li>
                    </ul>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Legforgalom pl3 overflow-x-hidden ">
                    <Helmet><title>Air traffic calculator</title></Helmet>
                    <h2>Air traffic calculator</h2>
                    <p align="left">The program helps to calculate the air flow in
                    buildings. The model with concentrated parameters does not deal with
                    air movement within a room, only flows between rooms and between
                    outside air spaces. The program uses the thermal buoyancy, takes into
                    account driving forces due to wind pressure and fan operation. The
                    individual rooms are represented as nodes of a given pressure in the
                    model, which are connected by the elements involved in the air flow.
                    These can be doors, windows, air ducts, ducts, grilles, chimneys,
                    chimneys, fans or custom elements,specifying the pressure-air volume characteristic.
                    </p><p align="left">The program helps to calculate the air flow in the buildings. The model
                    with concentrated parameters does not deal with air movement within a
                    room, only flows between rooms and between outside air spaces. The
                    program uses the thermal buoyancy that takes into account driving
                    forces due to wind pressure and fan operation.<br />The individual
                    rooms are represented as nodes of a given pressure in the model that
                    are connected by the elements involved in the air flow. These can be
                    doors, windows, air ducts, ducts, grills, chimneys, chimneys, fans or
                    custom elements specifying the pressure-air volume characteristic.</p>
                    <img className="mw-20 center"
                        src={legf1}
                        alt={"Eredmények"} />
                    <p align="left">The
                    nature of the task requires that it be easy to examine different
                    variations in the calculation. Temperatures can be changed for each new
                    operating state, sections can be excluded, doors and windows can be
                    opened and closed.<br /> The program can be used for:</p>
                    <ul>
                        <li>To control the ventilation of rooms. Ventilation of the installation room of appliances without flue gas discharge can be controlled and dilution of the flue gas can be checked.</li>
                        <li>For sizing gravity vents.</li>
                        <li>To check the operation of chimneys.</li>
                        <li>For controlling heat and smoke protection in buildings.</li>
                    </ul>
                </div>
            );
        }
    }
}

export default Legforgalom;