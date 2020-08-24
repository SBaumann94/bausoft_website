/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import file0 from '../database/Energetika_rendelet_valtozasok_2019.pdf'
import file1 from '../database/WinWatt_hidraulika_peldak.zip'
import file2 from '../database/WinWatt_hoterheles_napsugarzasi_adatok.xls'
import file3 from '../database/Energetika_halado.pdf'
import file4 from '../database/Rehau_rendszerek_2016.pdf'
import file5 from '../database/Legtomorseg-szellozes.pdf'
import file6 from '../database/EPBD_vizsgafeladatok_megoldasa_2014.pdf'
import file7 from '../database/EPBD_vizsga_peldasor_2014.pptx'
import file8 from '../database/EPBD_oktatas_halado.zip'
import file9 from '../database/EPBD_vizsgafeladatok_megoldasa_2013.pdf'
import file10 from '../database/EPBD_vizsgafeladatok_megoldasa_2012.pdf'
import file11 from '../database/EPBD_vizsga_peldasor_2012.pptx'
import file12 from '../database/Energetika_ertelmezesi_problemak.pdf'
import file13 from '../database/Energetika_A_per_V_viszony_ertelmezese.pdf'
import file14 from '../database/Energetika_ertelmezesi_problemak_3.pdf'
import file15 from '../database/A_tanusitas_specialis_kerdesei.pdf'
import file16 from '../database/Hazai_eloirasok_tervezett_valtoztatasai.pdf'
import file17 from '../database/Napkollektor_szamitas_HMV.zip'
import file18 from '../database/Energetika_roviditett.zip'
import file19 from '../database/EPBD_oktatas.zip'
import file20 from '../database/tanusitas_projektek.zip'
import file21 from '../database/Legcsatorna.zip'
import file22 from '../database/hohidak.pdf'
import file23 from '../database/Optimum_modul.pdf'
import file24 from '../database/213_2006_5_melleklet.pdf'
import file25 from '../database/Energetika_gepeszeti_rendszerek.pdf'
import file26 from '../database/winwatt_2009_02_01_level.zip'
import file27 from '../database/EPBD_vizsga_peldasor.ppt'
import file28 from '../database/EPBD_vizsga_peldasor.pdf'
import file29 from '../database/Epuletenergetika.pdf'
import file30 from '../database/Szilardtuz.pdf'
import file31 from '../database/kazanok.pdf'
import file32 from '../database/Energetika_peldak.zip'
import file33 from '../database/KEMENY_oktatas.pdf'
import file34 from '../database/Kemeny_peldak.zip'
import file35 from '../database/Turbo.pdf'
import file36 from '../database/Tomegaramfugges.pdf'
import file37 from '../database/Legellatas.pdf'
import file38 from '../database/Atmoszferikus.pdf'
import file39 from '../database/Tarsas.zip'
import file40 from '../database/Purmoea.zip'
import file41 from '../database/Energetika.pdf'
import file42 from '../database/Minta.zip'


const DarkB = "bg-light-blue";
const DarkG = "bg-light-green";
const RedW = "bg-light-red";
const Gold = "bg-gold";
const Biatorbágy = "REHAU Kft., 2051 Biatorbágy, Rozália park 9.";


const textHun = ["Épületenergetika rendelet változások 2019", "WinWatt hidraulikai oktatás projektjei ábrákkal",
    "Nyári hőterhelés számítás eltérő meteorológiai adatokkal segéd Excel fájl", "Épületenergetikai oktatás haladó, a 2016-os változásokról",
    "REHAU nyílászáró rendszerek előadás Obermayer Balázstól", "Légtömörség-szellőzés előadás (pdf)", "MMK Energetika vizsga példasor megoldása 2014 (pdf)",
    "Energetika vizsga példasor 2014 (pptx)", "Haladó épületenergetikai oktatáson használt projektek.", "MMK Energetika vizsga példasor megoldása 2013 (pdf)",
    "	Energetika vizsga példasor 2012 (pdf)", "	Energetika vizsga példasor 2012 (pptx)","Energetika értelmezési problémák","Energetika A per V viszony értelmezése",
    "Energetika értelmezési problémák 3","A tanúsítás speciális kérdései","EU direktívák, hazai előírások tervezett változtatásai","Napkollektoros HMV részesedés Excel számítás",
    "Épületenergetikai előadás építész hallgatóknak, PowerPoint bemutató.","	Épületenergetikai oktatáson használt projektek.","Példák társasház tanúsításokra, WinWatt projektek.",
    "Adatbázis a WinWatthoz légcsatorna méretezéshez.","Segédlet a dűbelezés és a fagerendák hőhíd hatásának figyelembe vételéhez.","Magyar Installateur 2009/10 számában megjelent cikk, Épületek energetikai felújításának optimalizálása",
    "CO2 kibocsátási értékek a 213/2006 kormányrendelet 5. melléklete szerint (újabb a 410/2012. (XII. 28.) Korm. rendelet, de a táblázat értékeiben változatlan)",
    "Gépészeti rendszerek energetikai számításai","Épületrészekkel készített épületenergetikai tanúsítás projekt és levél","Példasor az épületenergetikai tanúsítói vizsgára való felkészüléshez (PowerPoint bemutató)",
    "Példasor az épületenergetikai tanúsítói vizsgára való felkészüléshez (PDF dokumentum)","Az új épületenergetikai számítás aktuális kérdései","Szilárdtüzelésű kazánok biztosítása és szabályozása",
    "Kazánok energetikai kérdései","Épületenergetikai számítás oktatási példák","CHM-BAU32 oktatáshoz kapcsolódó előadás anyaga","CHM-BAU32 oktatáshoz kapcsolódó példa projektek",
    "Légtértől független kazánok égéstermék elvezetése cikk","Kazánok tulajdonságainak változása az égéstermék tömegáramának függvényében cikk","Tüzelőberendezések légellátása Magyar Installatuer cikk",
    "Atmoszférikus égőjű kazánok kéményének méretezése Magyar Installatuer cikk","a VIESSMANN-REHAU oktatáshoz kapcsolódó anyag","a PURMO radiátor-kiválasztó programhoz kapcsolódó anyag",
    "A BUDERUS AKADÉMIA - Tervezői szemináriumán, Balatonfüreden elhangzott előadás az épületenergetikai szabályozással kapcsolatosan","WinWatthoz néhány egyszerű hidraulikai számítást tartalmazó projekt, WMF ábrákkal"
];

const files = [file0, file1, file2, file3, file4, file5, file6, file7, file8, file9, file10, file11, file12, file13, file14, file15, file16, file17, file18, file19, file20, file21, file22, file23, file24, file25, file26, file27, file28, file29, file30, file31, file32, file33, file34, file35, file36, file37, file38, file39, file40, file41, file42];
const sizes = ["1.320.040", "1.537.819", "388.096", "885.642", "1.424.540", "3.123.601", "279.585", "1.245.635", "268.945", "153.030", "294.600","653.570","142.600", "124.384", "94.928", "462.994", "452.616", "142.255", "351.823", "278.067", "34.012", "2.299", "70.359", "1.181.410", "42.387", "593.132", "54.010", "510.406", "163.436", "1.098.524", "621.418", "325.702", "413.020", "1.395.869", "17.081", "257.203", "190.400", "1.324.467", "346.632", "148.143", "355.362", "573.146", "313.372"];
const colors = [Gold, DarkB, "", RedW, "", "", Gold, Gold, RedW, Gold, Gold, Gold, RedW, RedW, RedW, RedW, Gold, RedW, Gold, RedW, RedW,
    DarkB, RedW, RedW, "", RedW, RedW, Gold, Gold, Gold, DarkG, DarkG, RedW, DarkG, DarkG, DarkG, DarkG, DarkG, DarkG,
    "", "", Gold, DarkB];


class Oktatas extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
        this.initTable();
    }
    initTable() {
        this.okt = [
            this.createData3(
                <p>2020. január 28. (kedd) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-gold">Épületenergetika alapfok</p>,
            ),
            this.createData3(
                <p>2020. február 6. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-red white">Épületenergetika haladó</p>,
            ),
            this.createData3(
                <p className="strike b">2020. március 12. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-dark-gray white">Kéményméretezés</p>,
            ),
            this.createData3(
                <p className="strike b">2020. április 2. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-dark-blue white">Hidraulika, felületfűtések tervezése</p>,
            ),
            this.createData3(
                <p className="strike b">2020. április 9. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-red white">Épületenergetika haladó</p>,
            ),
            this.createData3(
                <p className="strike b">2020. május 14. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-light-blue">Vízhálózat méretezés</p>,
            ),
            this.createData3(
                <p className="strike b">2020. május 28. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-red white">Épületenergetika haladó</p>,
            ),
            this.createData3(
                <p>2020. augusztus 26. (szerda) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-gold">Épületenergetika alapfok</p>,
            ),
            this.createData3(
                <p>2020. szeptember 3. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-red white">Épületenergetika haladó</p>,
            ),
            this.createData3(
                <p>2020. szeptember 24. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-dark-blue white">Hidraulika, felületfűtések tervezése</p>,
            ),
            this.createData3(
                <p>2020. október 15. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-dark-gray white">Kéményméretezés</p>,
            ),
            this.createData3(
                <p>2020. november 12. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-light-blue">Vízhálózat méretezés</p>,
            ),
            this.createData3(
                <p>2020. december 3. (csütörtök) 10-15 óra</p>,
                <p>{Biatorbágy}</p>,
                <p className="bg-red white">Épületenergetika haladó</p>,
            ),
        ];
        this.seged = [];
        let name;
        for (let i = 0; i < textHun.length; i++) {
            name = files[i].toString().replace("/static/media/", "")
            this.seged.push(this.createData4(<a href={files[i]} >{name.substring(0, name.indexOf('.'))}</a>,
                <p>{sizes[i]}</p>,
                <p className={colors[i].toString() + " f5"}>{textHun[i]}</p>),
            );
        }

    }
    createData3(Date, Place, Theme) {
        return { Date, Place, Theme };
    }
    createData4(File, Size, Text) {
        return { File, Size, Text };
    }

    render() {
        return (
            <div className="Oktatas pl3 pr4">
                <Helmet><title>Oktatás</title></Helmet>
                <h2>Oktatás</h2>
                <p>Az EU épületenergetikai direktívája alapján hazánkban is megjelentek azok a rendeletek, amelyek a tervezési módszereket és a követelményeket szabályozzák (7/2006 TNM rendelet). A 176/2008 rendelet pedig az épületenergetikai minőségtanúsítási eljárást szabályozza.</p>
                <p><Link to="/public/ww_epbd.html" className="i">Épületenergetika</Link> segédlet, korábbi címe Az új épületenergetikai szabályozás.</p>
                <h3>Programjainkhoz kapcsolódó konzultációk 2020-ban</h3>
                <h2 className="red">Az oktatások egyelőre szünetelnek.</h2>
                <TableContainer component={Paper} className="min400 max900">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center"><h4>Időpont</h4></TableCell>
                                <TableCell align="center"><h4>Helyszín</h4></TableCell>
                                <TableCell align="center"><h4>Téma</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.okt.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" >{row.Date}</TableCell>
                                    <TableCell align="center" >{row.Place}</TableCell>
                                    <TableCell align="center" >{row.Theme}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <p>A konzultációkra, tanfolyamokra előzetesen jelentkezni kell, 8 fő alatti létszám esetén az adott rendezvényt lemondjuk. Jelentkezéskor vagy érdeklődés esetén kérjük Baumann Mihálynét keresse a +36 30 748 5574 telefonszámon, vagy a <strong>baumannm@tolna.net</strong> e-mail címen.</p>
                <h4 className="red">A konzultációkon való részvétel díja bruttó 5.000 Ft, ami a helyszínen készpénzben fizetendő.</h4>

                <h3>Épületenergetika témában</h3>
                <p>Az új épületenergetikai előírások áttekintése mellett a WinWatt fűtéstechnikai program ehhez kapcsolódó részét vesszük át, gyakorolhatjuk be. A résztvevők külön számítógépen, irányítás mellett, közösen dolgozzák ki a mintapéldákat.</p>

                <h3>Hidraulikai számítások témában</h3>
                <p>Az oktatási program azokat a tervezőket célozza meg, akik a WinWatt fűtéstechnikai program hidraulikai méretező részének elsajátítására törekszenek. A résztvevők külön számítógépen, irányítás mellett, közösen dolgozzák ki a mintapéldákat. Menetközben a REHAU munkatársai előadással frissítik fel a termékekkel, rendszerekkel kapcsolatos ismereteket. Méretezésre kerülnek sugaras elosztású kétcsöves rendszerek, padlóban illetve falszegélyben vezetett kétcsöves rendszerek, padló- és falfűtési rendszerek.</p>

                <h3>Kéményméretezés témában</h3>
                <p>Ismerkedés az MSZ EN 13384 szabvánnyal. Különböző típusú méretezési példák a CHM-BAU32 programmal.</p>
                <p>A tervezett tematika:</p>
                <ul>
                    <li>Az MSZ EN 13384-1 és MSZ EN 13384-2 szabványok, speciális követelmények a kémények hő- és áramlástechnikai méretezése során. Kémény áramkör. Nem állandósult hőmérsékleti viszonyok, áramlástechnikai biztonsági tényezők. Légellátás megoldásai, számítása. Kémény kitorkollás.</li>
                    <li>Szilárdtüzelésű kazánok kéményeinek sajátosságai, méretezési kérdések.</li>
                    <li>Atmoszférikus égőjű gázkazánok kéményeinek sajátosságai, méretezési kérdések.</li>
                    <li>Túlnyomásos tűzterű kazánok kéményeinek sajátosságai, méretezési kérdések.</li>
                    <li>LAS rendszerű kémények sajátosságai, méretezési kérdések. Cső a csőben rendszer, osztott rendszer, vegyes rendszerek.</li>
                    <li>Gyűjtőkémények kialakítása. Depressziós üzemű és túlnyomásos kémények.</li>
                </ul>
                <p>Fókusztémáink:</p>
                <ul>
                    <li>a fatüzelésű kandallók, kályhák méretezése</li>
                    <li>túlnyomásos gyűjtőkémények méretezése</li>
                </ul>

                <h3>Ajánljuk még</h3>
                <p>Az épületek hőtechnikai tanúsítása vizsgával kapcsolatos aktuális információk a <a href="www.mmk.hu">Magyar Mérnöki Kamara</a> és a <a href="www.mek.hu">Magyar Építész Kamara</a> honlapján találhatók.</p>
                <p><Link to="/public/videok.html">Oktató videók</Link></p>

                <h3>Letölthető "oktatási" anyagok.</h3>
                <p>Színkódok: <span className={Gold}>Épületnergetika vizsga, elmélet</span> <span className={RedW}>WinWatt épületenergetika</span> <span className={DarkB}>WinWatt hidraulika</span> <span className={DarkG}>Kéményméretezés</span></p>
                <TableContainer component={Paper} className="min600">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center"><h4>Letölthető fájl</h4></TableCell>
                                <TableCell align="center"><h4>Méret</h4></TableCell>
                                <TableCell align="center"><h4>Leírás</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.seged.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" className="min150">{row.File}</TableCell>
                                    <TableCell align="center" className="min150">{row.Size}</TableCell>
                                    <TableCell align="center" >{row.Text}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        );
    }
}

export default Oktatas;