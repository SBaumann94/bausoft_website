/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Partner from './Partner';

class Partnerek extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
        this.initTable();
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    initTable() {
        this.partner = [
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250" >
                        <li><a href="http://www.aeroprodukt.hu">AEROPRODUKT Zrt.</a></li>
                        <li>6640 Csongrád, Szegedi út 1.</li>
                        <li>T:(63) 481-143; F:(63) 481-136</li>
                        <li>email: <i>aeroprodukt@aeroprodukt.hu</i></li>
                    </ul>
                    <a href="http://www.aeroprodukt.hu"><Partner number={0} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.aruforgalmi.hu">Áruforgalmi Kft.</a></li>
                        <li>7400 Kaposvár, Vár u. 12-14.</li>
                        <li>T:(82) 529-470; F:(82) 316-350</li>
                        <li>7400 Kaposvár Pf: 161.</li>
                        <li>email: <i>info@aruforgalmi.hu</i></li>
                    </ul>
                    <a href="http://www.aruforgalmi.hu"><Partner number={1} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.astrotherm.hu">AUSTROTHERM Kft.</a></li>
                        <li>9028 Győr, Fehérvári u. 75.</li>
                        <li>T:(96) 515-114; F:(96) 515-120</li>
                        <li>email: <i>austrotherm@austrotherm.hu</i></li>
                    </ul>
                    <a href="http://www.astrotherm.hu"><Partner number={2} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.baumit.hu">Baumit Kft.</a></li>
                        <li>2510 Dorog, Pf. 132</li>
                        <li>T:(33) 512-910; F:(33) 512-950</li>
                        <li>email: <i>baumit@baumit.hu</i></li>
                    </ul>
                    <a href="http://www.baumit.hu"><Partner number={3} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.beckerkft.hu">BECKER Export-Import Kft.</a></li>
                        <li>1113 Budapest, Diószegi u. 37.</li>
                        <li>T:372-7332; T/F:372-7330</li>
                        <li>1519 Bp. Pf: 216.</li>
                        <li>email: <i>info@beckerkft.hu</i></li>
                    </ul>
                    <a href="http://www.beckerkft.hu"><Partner number={4} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.buderus.hu">Buderus Hungária Fűtéstechnika Kft.</a></li>
                        <li>2310 Szigetszentmiklós, Leshegy u. 15.</li>
                        <li>T:(24)525-200; F:(24)525-201</li>
                        <li>email: <i>info@buderus.hu</i></li>
                    </ul>
                    <a href="http://www.buderus.hu"><Partner number={5} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.caparol.hu">Caparol Hungária Kereskedelmi Kft.</a></li>
                        <li>1108 Budapest, Gyömrői út 140.</li>
                        <li>T:264-8914; F:262-0467</li>
                        <li>email: <i>caparol@caparol.hu</i></li>
                    </ul>
                    <a href="http://www.caparol.hu"><Partner number={6} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.comap.hu">COMAP Hungária</a></li>
                        <li>2040, Budaörs, Gyár utca 2.</li>
                        <li>T:(23) 503-871; F:(23) 503-870</li>
                        <li>email: <i>comap@comap.hu</i></li>
                    </ul>
                    <a href="http://www.comap.hu"><Partner number={7} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.astrotherm.hu">Danfoss Kft.</a></li>
                        <li>1139 Budapest, Váci út. 91.</li>
                        <li>T:450-2531; F:450-2539</li>
                        <li>email: <i>danfoss.hu@danfoss.com</i></li>
                    </ul>
                    <a href="http://www.astrotherm.hu"><Partner number={8} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.portal.d-eg.hu">D-ÉG Radiátorgyártó Kft.</a></li>
                        <li>2400 Dunaújváros, Papírgyári út 12.</li>
                    </ul>
                    <a href="http://www.portal.d-eg.hu"><Partner number={9} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.geberit.hu">Geberit Műszaki Tanácsadó és Kereskedelmi Kft.</a></li>
                        <li>1117 Budapest, Alíz u. 2.</li>
                        <li>T:204-4187; F:204-4190</li>
                        <li>email: <i>sales.hu@geberit.hu</i></li>
                    </ul>
                    <a href="http://www.geberit.hu"><Partner number={10} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.grundfos.hu">GRUNDFOS Hungária Kft.</a></li>
                        <li>2045 Törökbálint, Park u 8.</li>
                        <li>T:(23) 511-110; F:(23) 511-111</li>
                    </ul>
                    <a href="http://www.grundfos.hu"><Partner number={11} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.hajdurt.hu">Hajdúsági Iparművek Rt</a></li>
                        <li>4243 Téglás</li>
                        <li>T:(52)582-700 F:(52)384-126</li>
                        <li>email: <i>hajdu@hajdurt.hu</i></li>
                    </ul>
                    <a href="http://www.hajdurt.hu"><Partner number={12} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.laing.eu">LAING Szivattyú Kft.</a></li>
                        <li>2701 Cegléd, Külső-Kátai út Pf. 50</li>
                        <li>T:(53)314-588; T:(53)313-255; T:(53)311-754</li>
                        <li>F:(53)312-255;</li>
                        <li>email: <i>kereskedelem@laing.eu</i></li>
                    </ul>
                    <a href="http://www.laing.eu"><Partner number={13} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.lb-knauf.hu">Lasselsberger-Knauf Kft.</a></li>
                        <li>8202 Veszprém, Házgyári út 9. Pf.: 1723</li>
                        <li>T:88/590-500; F:88/ 590-515</li>
                        <li>email: <i>vevoszolgalat@lb-knauf.hu</i></li>
                    </ul>
                    <a href="http://www.lb-knauf.hu"><Partner number={14} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.hcpcinfo.org">Magyar Rézpiaci Központ</a></li>
                        <li>1053 Budapest, Képíró u. 9.</li>
                        <li>T:266-4810; F:266-4804</li>
                        <li>email: <i>info@hcpcinfo.org</i></li>
                    </ul>
                    <a href="http://www.hcpcinfo.org"><Partner number={15} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.megatherm.hu">MEGATHERM Kereskedelmi Kft.</a></li>
                        <li>2030 Érd, Bajcsy-Zsilinszky u. 135.</li>
                        <li>T:23/372-007; T:23/372-995; F:23/372-768</li>
                        <li>email: <i>info@megatherm.hu</i></li>
                    </ul>
                    <a href="http://www.megatherm.hu"><Partner number={16} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.oventrop.hu">OVENTROP Magyarország Kft.</a></li>
                        <li>1097 Budapest, Táblás u. 36-38.</li>
                        <li>T:2806-805; F:2801-868</li>
                        <li>1476 Budapest, Pf: 114.</li>
                        <li>email: <i>mail@oventrop.hu</i></li>
                    </ul>
                    <a href="http://www.oventrop.hu"><Partner number={17} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.gpsz.hu">PLAN Kereskedelmi Részvénytársaság</a></li>
                        <li>6000 Kecskemét, Kurucz krt. 26-28.</li>
                        <li>T:76/481-716; F:76/482-175</li>
                        <li>email: <i>kecskemet@gpsz.hu</i></li>
                    </ul>
                    <a href="http://www.gpsz.hu"><Partner number={18} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.trocellen.hu">POLIFOAM Műanyagfeldolgozó Kft.</a></li>
                        <li>1097 Budapest, Táblás u. 32.</li>
                        <li>T:280-6568; F:280-6708</li>
                        <li>email: <i>polifoam@polifoam.hu</i></li>
                    </ul>
                    <a href="http://www.trocellen.hu"><Partner number={19} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.purmo.hu">PURMO Magyarországi Képviselete</a></li>
                        <li>1023 Budapest, Árpád fejedelem útja 26-28.</li>
                        <li>T:346-3035; F:346-3009</li>
                        <li>email: <i>purmo@purmo.hu</i></li>
                    </ul>
                    <a href="http://www.purmo.hu"><Partner number={20} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.rehau.hu">REHAU Kft.</a></li>
                        <li>2051 Biatorbágy, Rozália park 9.</li>
                        <li>T:(23)530-700; F:(23)530-707</li>
                        <li>email: <i>budapest@rehau.hu</i></li>
                    </ul>
                    <a href="http://www.rehau.hu"><Partner number={21} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.szikra.hu">Szikra Épületgépészeti Kft.</a></li>
                        <li>1193 Budapest, Derkovits Gy. u. 53.</li>
                        <li>T:280-0812; F:280-3588</li>
                        <li>email: <i>szikra@szikra.hu</i></li>
                    </ul>
                    <a href="http://www.szikra.hu"><Partner number={22} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.uponor.hu">UPONOR Épületgépészeti Kft.</a></li>
                        <li>1043 Budapest, Lórántffy Zsuzsanna utca 15/b</li>
                        <li>T: (1) 886-4575; F: (1) 2033-617</li>
                        <li>email: <i>info.hungary@uponor.hu</i></li>
                    </ul>
                    <a href="http://www.uponor.hu"><Partner number={23} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.vaillant.hu">Vaillant Saunier Duval Kft.</a></li>
                        <li>1116 Budapest, Hunyadi János út 1.</li>
                        <li>T:(1)464-7800; F:(1)464-7801</li>
                        <li>email: <i>vaillant@vaillant.hu</i></li>
                    </ul>
                    <a href="http://www.vaillant.hu"><Partner number={24} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.vogelundnote.com/hu">VOGEL & NOOT Hőtechnika Kft.</a></li>
                        <li>9200 Mosonmagyaróvár, Kühne Ede tér 2.</li>
                        <li>T:(96)886-025; F:(96)89-625</li>
                        <li>email: <i>info.hu@vogelundnote.com</i></li>
                    </ul>
                    <a href="http://www.vogelundnote.com/hu"><Partner number={25} /></a>
                </div>,
            ),
            
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.yorkshirefittings.hu">Yorkshire Fittings Gyártó Kft.</a></li>
                        <li>1106 Budapest, Maglódi út 16.</li>
                        <li>T:434-3000; F:434-3001</li>
                        <li>email: <i>info@yorkshirefittings.hu</i></li>
                    </ul>
                    <a href="http://www.yorkshirefittings.hu"><Partner number={26} /></a>
                </div>,
            ),
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.ytong.hu">YTONG Hungary Kft.</a></li>
                        <li>1135 Budapest, Tahi u. 53-59</li>
                        <li>(Xella Magyarország Kft.)</li>
                        <li>T:237-1180; F:237-1181</li>
                        <li>email: <i>xella@t-online.hu</i></li>
                    </ul>
                    <a href="http://www.ytong.com"><Partner number={27} /></a>
                </div>,
            ),
            
            this.createData(
                <div className="partner_order">
                    <ul className="list tl pl2 pr2 min250">
                        <li><a href="http://www.zehnder.hu">Zehnder Hungária Kft.</a></li>
                        <li>1024 Budapest, Lövőház u. 30.</li>
                    </ul>
                    <a href="http://www.zehnder.hu"><Partner number={28} /></a>
                </div>,
            ),

        ];
    }
    createData(Text) {
        return { Text };
    }

    render() {
        return (
            <div className="Partnerek pl3 pr4">
                <Helmet><title>Partnerkapcsolatok</title></Helmet>
                <h2>Partnerkapcsolatok</h2>
                <p>Több gyártó illetve kereskedő számára készítettünk a gyártmányaikra épülő méretező programot. A programokat partnereink más-más feltételek mellett teszik hozzáférhetővé. Vannak köztük teljesen ingyenesek, vannak pénzért megvásárolhatók és vannak amelyeknek a kihelyezése egyedileg szabályozott, például bizonyos értékű megrendeléshez kötött. Ezeknek a programoknak az értékesítése teljesen az adott cég hatáskörébe tartozik, ez ügyben náluk kell érdeklődni.</p>
                <TableContainer component={Paper} className="max600 mb4" >
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableBody>
                            {this.partner.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="left" >{row.Text}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        );
    }
}

export default Partnerek;