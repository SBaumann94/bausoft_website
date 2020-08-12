/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import leiras from '../leirasok/SunArch_Leiras.pdf'
import SunArch1 from '../screenshots/sunarch_1.gif'
import SunArch2 from '../screenshots/sunarch_2.gif'
import SunArch3 from '../screenshots/sunarch_3.gif'
import SunArch4 from '../screenshots/sunarch_4.gif'
import SunArch5 from '../screenshots/sunarch_5.gif'
import SunArch6 from '../screenshots/sunarch_6.png'
import SunArch7 from '../screenshots/sunarch_7.gif'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

class SunArch extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="SunArch pl3 overflow-x-hidden ">
                    <Helmet><title>SunArch</title></Helmet>
                    <h2>SunArch Nappálya szerkesztő program</h2>
                    <p align="left"><strong>A program szerzői: Dr Kuba Gellért okleveles építészmérnök és a Bausoft Pécsvárad Kft.</strong></p>
                    <p align="left">A program a Nap látszólagos égi pályáit jeleníti meg a Föld bármely
                    pontján térben, vetületben és fényképpel egyesíthetően, tervezési műveletek
                    elvégzésé céljára, benapozás, árnyékolás meghatározásához, épületek
                    túlmelegedés elleni védelmére és napkollektorok optimális tájolása céljára.</p>
                    <img className="mw-40 center"
                        src={SunArch1}
                        alt={"Eredmények"} />
                    <p align="left">A benapozás meghatározása élettani és energetikai szempontból fontos
                    döntések egyedüli eszköze. A természetes fény az élő szervezet egészségi állapotát
                    biológiailag szabályozza. A vitális hormonok termelésének mennyiségét szervezetünk
                    a napfény változása szerint növeli, vagy csökkenti.</p>
                    <img className="mw-40 center"
                        src={SunArch2}
                        alt={"Eredmények"} />
                    <p align="left">A kedvező benapozás megteremtése építészeti zárt terekben
                    nélkülözhetetlen, mert a civilizált országok lakossága napi életének 80-90
                    százalékát napfénytől elzárt terekben tölti. A napi napfénydózishoz szokott
                    szervezetünk drasztikus változást szenved mesterséges fénytől. A mesterséges
                    fény csak a látást teszi lehetővé, de a spektrumából hiányoznak azok a
                    hullámhosszak, amelyek nélkülözhetetlenek az immunrendszerünk megőrzéséhez.
                    Hormontermelésünk olyan mértékben válik megzavarttá, amilyen mértékben a fény
                    spektruma eltér a napfényétől. Nincsen olyan világító berendezés, amely
                    helyettesíteni képes a természetes fényt. A mesterséges megvilágítás számunkra
                    káros, ezért az építészeti terek kellő benapozásának megteremtése  nélkülözhetetlen.</p>
                    <img className="mw-40 center"
                        src={SunArch3}
                        alt={"Eredmények"} />
                    <p align="left">A benapozást a helyiség egy kiválasztott pontján lehet vizsgálni,
                    ha a fényt bebocsátó nyílást az égboltra vetítjük. A kirajzolódó égbolti nyíláson
                    belül fekvő piros színű nappályákról lehet a várható napfénytartamot leolvasni.
                    A program a hazai helységek földrajzi koordinátáit tartalmazza és az óraidőt
                    automatikusan odatartozó csillagászati időre módosítja. Nyári időszámítást is be lehet kapcsolni.</p>
                    <p align="left">Tanulmányozni lehet az üvegezett felületre érkező napsugarak beesési
                    szögét, ha bekapcsoljuk a beesési szögmérőt. A helyiség tényleges benapozottságának
                    minősége, a beesési szögtől függ.</p>
                    <img className="mw-40 center"
                        src={SunArch4}
                        alt={"Eredmények"} />
                    <p align="left">A hatvan foknál meredekebb sugarak már nemigen hatolnak át, ezért benapozás,
                    és kollektorok számára ezek haszontalanok, túlmelegedés tekintetében veszélytelenek.</p>
                    <img className="mw-40 center"
                        src={SunArch5}
                        alt={"Eredmények"} />
                    <p align="left">Az üvegezett nyílás valós teljesítménye ellenőrizhető,
                    ha megszerkesztjük az ablak fölött kiszögelő erkély, vagy árnyékoló égi képét is.
                    Mint látható, az alaprajzon még fénybebocsátás szempontjából ígéretesnek tűnő
                    homlokzati nyílás koránt sem képes teljesíteni az elvárásokat, hiszen az égbolt
                    legnagyobb fénysűrűségű felülete került takarásba. Csupán a benapozás elemzésének
                    ismeretében leszünk képesek a helyes döntés meghozatalára, s ennek alapján a
                    szükséges változtatások végrehajtására.</p>
                    <p align="left">Kiszerkeszthető és tanulmányozható a tervezett épület
                    környezeti tárgyainak égre vetülő képe, azaz a szabad égbolt körvonal,
                    vagyis a választott pont benapozottsága is, ha rendelkezésünkre állnak a
                    térbeli adatok. Egy csipkézet, vagy bonyolultabb körvonalú környezet,
                    például növényzet megjelenítése időigényes munka. Ennek elkerülésére a
                    program kínál egy fotóeljáráson alapuló lehetőséget is.</p>
                    <img className="mw-40 center"
                        src={SunArch6}
                        alt={"Eredmények"} />
                    <p align="left">A vizsgált környezet fényképét egyesíteni lehet az égbolt
                    nappályavonalaival. A szabad égbolt körvonal ezután megjeleníthető.</p>
                    <img className="mw-40 center"
                        src={SunArch7}
                        alt={"Eredmények"} />
                    <p align="left">További rövid ismertetők:</p>
                    <ul>
                        <li><Link to="/public/SunArch1.html">Égtáj szerinti napenergia hozamok</Link></li>
                        <li><Link to="/public/SunArch2.html">Kollektorok maximális napenergia hozama tájolással</Link></li>
                        <li><Link to="/public/SunArch3.html">Épületek túlmelegedés elleni védelme</Link></li>
                    </ul>
                    <p align="left">Hosszabb, részletes leírások:</p>
                    <ul>
                        <li>A program <a  href = {leiras} target = "_blank">kezelési leírása</a></li>
                        <li><a href="leiras/SUNARCH_elmelet_es_alkalmazas.pdf">Alkalmazási példatár</a></li>
                        <li><a href="leiras/SUNARCH_elmelet_es_alkalmazas_2.pdf">Alkalmazási példatár 2. rész</a></li>
                    </ul>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="SunArch pl3 overflow-x-hidden ">
                    <Helmet><title>SunArch</title></Helmet>
                    <h2>SunArch Sunpath Editor Program</h2>
                    <p align="left"><strong>Authors: Professor Gellert Kuba PhD, dipl. eng. architect and BAUSOFT PECSVARAD Ltd.</strong></p>
                    <p align="left">This program is capable of visualising space the virtual path of the sun at any given point on the earth surface. It may be implemented with photos and thus be used in the course of architectural design for defining the insolation of buildings, the extent of their shading in order to protect them from overheating and also for the optimal positioning of sun collectors.</p>
                    <img className="mw-40 center"
                        src={SunArch1}
                        alt={"Eredmények"} />
                    <p align="left">The determining of the insolation of buildings is indispensable from the point of view of their energy consumption and the vital function of those living in them. Natural light biologically controls the state of health of every living organisms.</p>
                    <img className="mw-40 center"
                        src={SunArch2}
                        alt={"Eredmények"} />
                    <p align="left">The amount of vital hormones produced by our body is increased or decreased according to the amount of sunlight it receives. Therefore the optimal insolation of closed spaces, created by architecture is indispensable, all the more so because the population of the so called civilised countries spends 80-90 % of its life time shut away from sunlight. Our body in need of a given amount of sunlight suffers drastic changes from excessive artificial light. Artificial light enables us to see but the wave lengths that are indispensable for maintaining a healthy immune system are  missing from its spectrum. The production of hormones in our body will be influenced to such an extent as the spectrum of artificial light differs from that of sunlight. There is no such artificial light which is capable of replacing natural light and as it is harmful to our organism it is utmost importance to create the optimal insolation of built spaces.</p>
                    <img className="mw-40 center"
                        src={SunArch3}
                        alt={"Eredmények"} />
                    <p align="left">We can examine insolation at a given point of the room, if we project the opening trough which light enters the premise. The expected duration of sunlight can be read from the red coloured sunpaths lying within the projected opening. The program contains the geographical co-ordinates of Hungarian settlements and it automatically modifies local time to the relevant sidereal time. It is also possible to adjust by means of the program the summer timing.</p>
                    <p align="left">The angle of incidence of sunbeams can be studied by turning the incidence protractor. The quality of the rooms actual insolation depends on the angle of the sunlight's incidence.</p>
                    <img className="mw-40 center"
                        src={SunArch4}
                        alt={"Eredmények"} />
                    <p align="left">Beams steeper than 60° do not come trough glazed surfaces, therefore from the point of view of insolation these rays are useless and as from the point of view of overheating, they are not to be considered harmful.</p>
                    <img className="mw-40 center"
                        src={SunArch5}
                        alt={"Eredmények"} />
                    <p align="left">The actual efficiency of a glazed surface can only be checked if we also describe the image projected on the sky, the shading device or balcony above the surface in question. The opening which seemed to be quite promising on our ground plan from the point of view of light admission, according to our program is far from being able to fulfil expectation since that part of the sky has been covered by the shading device or the balcony which is of the biggest light density. Thus it is only by means of this program that we can thoroughly examine the different aspects of a building's insolation and come to a correct conclusion as to the positioning of glazed openings and shading devices and balconies on our buildings.</p>
                    <img className="mw-40 center"
                        src={SunArch6}
                        alt={"Eredmények"} />
                    <p align="left">We can also describe and examine trough our program the image projected onto the sky of objects surrounding the planned building. That is, the program will show us - provided we dispose of all data relevant to the surrounding area - how much of the skyline will be left clear for our future building. Since the visualisation of more complex silhouettes - such as those with dense vegetation etc. - is rather difficult, and time consuming the program also offers a possibility for calculating the optimum insolation of a building, by means of a photographic process, where the photo of the space surrounding the building is question may be joined to the sunpaths of the skyline, in this wary outlines of the open skyline will become clearly visible.</p>
                    <img className="mw-40 center"
                        src={SunArch7}
                        alt={"Eredmények"} />
                    <p align="left"></p>
                    <p align="left">Other abstracts:</p>
                    <ul>
                        <li><Link to="/public/SunArch1.html">Solar energy impact by orientation</Link></li>
                        <li><Link to="/public/SunArch2.html">Maximum solar energy produced by the proper orientation of collectors</Link></li>
                        <li><Link to="/public/SunArch3.html">Protection of buildings against overheating</Link></li>
                    </ul>
                </div>
            );
        }
    }
}

export default SunArch;