import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'

class Hidroplan extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Hidroplan pl3 overflow-x-hidden ">
                    <Helmet><title>HidroPlan modul</title></Helmet>
                    <h2>WinWatt HidroPlan modul</h2>
                    <h3>Radiátorok illesztése</h3>

                    <p>Egy meglévő, vagy egy tervezett rendszer már kiválasztott radiátorainak optimális előremenő hőmérsékletét, illetve hőlépcsőit, térfogatáramait lehet
                    adott szabályok mellett megválasztani a funkcióval.</p>

                    <h3>Felületfűtés-hűtés körök diagram</h3>

                    <p>A diagram segítségével könnyen megállapítható, hogy egy kívánt nyomáseséshez milyen visszatérő hőmérséklet az ideális. Ezzel a módszerrel egy adott osztó-gyűjtő
                    köreit viszonylag könnyen tudjuk kiegyenlítetté, közel azonos ellenállásúvá tenni.</p>

                    <h3>Hálózat optimalizálás</h3>

                    <p>A hálózat méretezésekor kiderül, hogy melyik a mértékadó áramkör, illetve a beszabályozáshoz az egyes szelepeken (strang illetve fogyasztó szelepek)
                    mekkora fojtást kell beállítanunk, hogy a méretezési állapotban a tervezett vízmennyiségek jussanak az egyes fogyasztókra. A statikus beszabályozás során
                    beállított fojtás ugyanolyan hatással bír, mint a csőszakaszok nyomásesése, így adott esetben a szakaszok csőméretének csökkentéséből adódó nyomásesés
                    növekedéssel helyettesíthető a fojtás egy része. Ezt, ha kellő körültekintéssel tesszük, a rendszer működőképessége nem romlik, viszont a rendszer olcsóbb,
                    könnyebben szerelhető lesz. A hálózat optimalizálás ezt a feladatot próbálja automatikusan elvégezni.</p>

                    <p>A modul fejlesztése, javítása folyamatosan, a frissítésekkel együtt történik.</p>

                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Hidroplan pl3 overflow-x-hidden ">
                    <Helmet><title>HidroPlan module</title></Helmet>
                    <h2>WinWatt HidroPlan module</h2>
                    <h3>Fitting radiators</h3>
                    <p>The optimum flow temperature of the radiators of
                    an existing or a
                    planned system, as well as the heat steps and volumetric flows can be
                    selected by the function under certain rules.</p>
                    <h3>Surface heating-cooling loops diagram</h3>
                    <p>With the help of the diagram it is easy to
                    determine what return
                    temperature is ideal for a desired pressure drop. With this method, the
                    circuits of a given distributor-collector can be made relatively
                    easily, with nearly the same resistance.</p>
                    <h3>Network optimization</h3>
                    <p>When dimensioning the grid, it becomes
                    clear which circuit is the key and the throttle on each valve (stranger
                    and flow valves) to adjust the amount of water to be delivered to the
                    individual consumer in the design state. The choke set during static
                    tuning has the same effect, as the pressure drop of the tube sections,
                    optionally, the pressure drop resulting from the reduction in tube size
                    of the sections may be replaced by an increase in part of the throttle.
                    This is done with due care, the functionality of the system does not
                    deteriorate, but the system will be cheaper, easier to install. Network
                    optimization attempts to perform this task automatically.</p>
                </div>
            );
        }
    }
}

export default Hidroplan;