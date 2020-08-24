/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';

import Szam1 from '../database/bausoft_magazin_1_szam.pdf'
import Szam2 from '../database/bausoft_magazin_2_szam.pdf'
import Szam3 from '../database/bausoft_magazin_3_szam.pdf'
import Szam4 from '../database/bausoft_magazin_4_szam.pdf'

class Magazin extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
    }
    render() {
        return (
            <div className="Magazin pl3 pr4">
                <Helmet><title>Bausoft magazin</title></Helmet>
                <h2>Bausoft magazin</h2>
                <p><a href={Szam4} >Bausoft magazin 4. szám</a> (2017. március)</p>
                <p>Tartalom:</p>
                <ul >
                    <li >Nyári hőterhelés számítás eltérő meteorológiai adatokkal</li>
                    <li>Rejtett részletek a WinWattban</li>
                </ul>
                <p><a href={Szam3} >Bausoft magazin 3. szám</a> (2016. január)</p>
                <p>Tartalom:</p>
                <ul >
                    <li >Tanúsítások készítése 2016 január 1-től</li>
                    <li>Fórum váltás</li>
                </ul>
                <p><a href={Szam2} >Bausoft magazin 2. szám</a> (2014. november)</p>
                <p>Tartalom:</p>
                <ul >
                    <li >Üvegezés naptényezője és a g érték</li>
                    <li>Négyszög keresztmetszetű kémény szakaszok szigetelése</li>
                    <li>Négyszög keresztmetszetű kémény szakaszok szigetelése II. AGROS2D</li>
                    <li>Energetikai tanúsítványoknál elkövetett leggyakoribb hibák II.</li>
                </ul>
                <p><a href={Szam1} >Bausoft magazin 1. szám</a> (2014. június)</p>
                <p>Tartalom:</p>
                <ul >
                    <li >Programok telepítésének új stratégiája</li>
                    <li>Gépészeti rendszerek energetikai számítása</li>
                    <li>Energetikai tanúsítványoknál elkövetett leggyakoribb hibák I.</li>
                </ul>
            </div >
        );
    }
}

export default Magazin;