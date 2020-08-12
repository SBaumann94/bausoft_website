import React, { Component } from 'react';
import 'tachyons';
import hidra1 from '../screenshots/ww_hidr1.gif';
import hidra2 from '../screenshots/ww_hidr2.gif';
import { Helmet } from 'react-helmet'

class Hidra extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Hidra pl3 overflow-x-hidden ">
                    <Helmet><title>Hálózat hidraulika</title></Helmet>
                    <h2>WinWatt hálózat hidraulika</h2>
                    <p>A rendszer hidraulikai méretezése során a
                    programmal elkészíthető a tervdokumentáció
                    részét képező beszabályozási terv. A
                    program kezeli az olyan rendszerelemeket, mint a
                    termosztatikus szelepek, strang szabályozó
                    szelepek, túláramszelepek vagy
                nyomáskülönbség szabályzók.</p>
                    <p>Az egyes csőszakaszok a végpontjaik
                    elnevezésével adhatók meg. Egy-egy szakaszra
                    megadhatók a csőre, a csőszigetelésre, a
                    szabályzó elemekre és az alaki
                ellenállásokra vonatkozó adatok.</p>
                    <img className="mw-70"
                        src={hidra1}
                        alt={"Eredmények"} />
                    <p>A bevitt szakaszok alapján a hálózat
                    felépítését a program automatikusan elvégzi,
                    hibás kapcsolódások esetén figyelmeztető
                    jelzéseket kapunk. Az egyes szakaszok
                    átmérőjét a program képes előméretezéssel
                    meghatározni. A hidraulikai számítások
                    elvégzése után a felhasználó feladata
                    mérnöki döntésekkel a hálózatot úgy
                    alakítani, hogy az hidraulikailag optimális
                    legyen. Az ehhez szükséges átmérő
                    változtatások funkcióbillentyűkkel könnyen
                    elvégezhetők, a beavatkozás után
                    automatikusan újra méretezi a program a
                    hálózatot. Mivel a beavatkozások nem járnak a
                    kézi számításoknál megszokott munkaigényes
                    átszámításokkal, ezért a felhasználó több
                    hálózatvariánst is megvizsgálhat,
                kiválasztva az optimálisat.</p>
                    <img className="mw-70"
                        src={hidra2}
                        alt={"Eredmények"} />
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Hidra pl3 overflow-x-hidden ">
                    <Helmet><title>Network hydraulics</title></Helmet>
                    <h2>WinWatt network hydraulics</h2>
                    <p>During hydraulic sizing of the system, the program can be
                    used to create an adjustment plan that is part of the design
                    documentation. The program handles system components such as
                    thermostatic valves, string control valves, overcurrent valves or
                differential pressure regulators.</p><p>Each pipe section can be specified
                    by naming its endpoints. For each section, data can be entered for
                pipe, pipe insulation, control elements and design resistance.</p>
                    <img className="mw-70"
                        src={hidra1}
                        alt={"Eredmények"} />
                    <p>Based on the entered sections, the network is automatically set up
                    and alerts are received in the event of faulty connections. The
                    diameter of each section can be pre-sized by the program. After
                    completing the hydraulic calculations, it is the user's responsibility
                    to make the network with engineering decisions, for optimum hydraulics.
                    The required diameter changes can be easily made using the function
                    keys and the program automatically resizes the network after the
                    intervention. Because interventions do not involve laborious
                    conversions like those used in manual calculations, the user can
                examine multiple network variants,choosing the optimal one. </p>
                    <img className="mw-70"
                        src={hidra2}
                        alt={"Eredmények"} />
                </div>
            );
        }
    }
}

export default Hidra;