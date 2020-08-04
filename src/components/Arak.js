import React, { Component } from 'react';
import 'tachyons';
import './Ww32.css'
import Bird from '../components/Bird';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Prog from './Prog';

import WWlogo from '../logos/winwatt.gif'
import MyModule from './MyModule';

const listHun = ['CHM-BAU32 Kéményméretező program', 'GasNet32 Gázhálózat méretező program',
    'Hőcserélő méretező program', 'Hurkolt hálózat méretező',
    'ISO-bau szigetelés kiválasztó', 'SunArch Nappálya szerkesztő program',
    'WaterNet32 Vízhálózat méretező program', 'Légforgalom számító program',
    'WinWatt32 Cinege', 'WinWatt32 Pinty',
    'WinWatt32 Fecske', 'WinWatt32 Rigo',
    'WinWatt32 Sirály', 'WinWatt32 Hollo',
    'WinWatt32 Kócsag', 'WinWatt32 Gólya',
    'Kiegészítő modulok a WinWatt32 programokhoz',
    'Épületenergetikai modul', 'Optimum modul',
    'Angol nyelvi modul', 'gbXML modul',
    'HidroPlan hidraulikai optimalizálás modul', 'Sun modul',
    'Céges WinWatt programok kiegészítése',
    'Nyári hőterhelés modul',
];

const textHun = ['A Bausoft Pécsvárad Kft. által forgalmazott termékek árai',
    'Valamennyi programunk hardverkulccsal védett, a hardverkulcs ára külön tétel. Az árak ÁFA nélkül értendőek.',
    'Kiegészítő modulok a WinWatt32 programokhoz',
    'A változatok közti váltás esetén az előző változat árával csökken az ár, például a fecske változatról a gólyára váltva 170.000-70.000 = 100.000 a program ára. Valamennyi programunk hardverkulccsal védett. A kulcs ára 10.000 + ÁFA. Több példányban való vásárlás esetén a további példányokra a hardverkulcs árának 100 %-át a programok árának 30 %-át számítjuk fel. Másodpéldány áránál a kedvezményt is 30 %-on vesszük figyelembe.']

class Arak extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    initTable() {
        this.progs = [
            this.createData(<Prog name='chm' />,
                <p><Link to="/public/Chmbau32.html" className="link hover-bg-light-blue">{listHun[0]}<br /> </Link> 115.000 Ft <br/><i className="f7">CHM-BAU32 Mini (egy készülékes) 70.000 Ft</i></p>,
                <p><Link to="/public/GasNet32.html" className="link hover-bg-light-blue">{listHun[1]}<br /> </Link> 70.000 Ft</p>,
                <Prog name='gasnet' />),
            this.createData(<Prog name='hocsere' />,
                <p><Link to="/public/Hocsere.html" className="link hover-bg-light-blue">{listHun[2]}<br /> </Link> 35.000 Ft </p>,
                <p><Link to="/public/Hurkolt.html" className="link hover-bg-light-blue">{listHun[3]}<br /> </Link> 115.000 Ft</p>,
                <Prog name='hurkolt' />),
            this.createData(<Prog name='isobau' />,
                <p><Link to="/public/IsoBau.html" className="link hover-bg-light-blue">{listHun[4]}<br /> </Link> 45.000 Ft </p>,
                <p><Link to="/public/SunArch.html" className="link hover-bg-light-blue">{listHun[5]}<br /> </Link> 60.000 Ft</p>,
                <Prog name='sunarch' />),
            this.createData(<Prog name='waternet' />,
                <p><Link to="/public/WaterNet32.html" className="link hover-bg-light-blue">{listHun[6]}<br /> </Link> 70.000 Ft </p>,
                <p><Link to="/public/Legforgalom.html" className="link hover-bg-light-blue">{listHun[7]}<br /> </Link> 70.000 Ft</p>,
                <Prog name='legforg' />),
        ]
        this.ww32 = [
            this.createData(<Bird name='cinege' notRelative={true} />,
                <p>{listHun[8]}<br /> 25.000 Ft </p>,
                <p>{listHun[9]}<br /> 45.000 Ft </p>,
                <Bird name='pinty' notRelative={true} />),
            this.createData(<Bird name='fecske' notRelative={true} />,
                <p>{listHun[10]}<br /> 70.000 Ft </p>,
                <p>{listHun[11]}<br /> 80.000 Ft </p>,
                <Bird name='rigo' notRelative={true} />),
            this.createData(<Bird name='siraly' notRelative={true} />,
                <p>{listHun[12]}<br /> 90.000 Ft </p>,
                <p>{listHun[13]}<br /> 125.000 Ft </p>,
                <Bird name='hollo' notRelative={true} />),
            this.createData(<Bird name='kocsag' notRelative={true} />,
                <p>{listHun[14]}<br /> 125.000 Ft </p>,
                <p>{listHun[15]}<br /> 170.000 Ft </p>,
                <Bird name='golya' notRelative={true} />),
        ]

        this.modules = [
            this.createData(<MyModule name="epbd" />,
                <p><Link to="/public/ww_epbd.html" className="link hover-bg-light-blue">{listHun[17]}<br /> </Link> 45.000 Ft </p>,
                <p><Link to="/public/ww_optimum.html" className="link hover-bg-light-blue">{listHun[18]}<br /> </Link> 25.000 Ft </p>,
                <MyModule name="optimum" />),
            this.createData(<MyModule name="english" />,
                <p><Link to="/public/ww_english.html" className="link hover-bg-light-blue">{listHun[19]}<br /> </Link> 15.000 Ft </p>,
                <p><Link to="/public/ww_gbxml.html" className="link hover-bg-light-blue">{listHun[20]}<br /> </Link> 20.000 Ft </p>,
                <MyModule name="gbxml" />),
            this.createData(<MyModule name="hidroPlan" />,
                <p><Link to="/public/ww_hidroplan.html" className="link hover-bg-light-blue">{listHun[21]}<br /> </Link> 20.000 Ft </p>,
                <p><Link to="/public/ww_sun.html" className="link hover-bg-light-blue">{listHun[22]}<br /> </Link> 15.000 Ft </p>,
                <MyModule name="sun" />),

        ]
    }

    createData(Pic1, Prog1, Prog2, Pic2) {
        return { Pic1, Prog1, Prog2, Pic2 };
    }

    render() {
        return (
            <div className="WinWatt32 pl3">
                <Helmet><title>Szoftverárak</title></Helmet>
                <h2>{textHun[0]}</h2>
                <p className="pr4">{textHun[1]}</p>
                <TableContainer component={Paper} className="min400 max600 mb4">
                    <Table className="bg-light-yellow" size="small" >
                        <TableHead>
                        </TableHead>
                        <TableBody>
                            {this.progs.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Pic1}</TableCell>
                                    <TableCell align="center" padding="none">{row.Prog1}</TableCell>
                                    <TableCell align="center" padding="none">{row.Prog2}</TableCell>
                                    <TableCell align="center" padding="none">{row.Pic2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    <img className="w5" src={WWlogo} alt="WinWatt logo" /><br />
                                    <Link to="/public/Ww32.html" className="link hover-bg-light-blue">WinWatt32 fűtéstechnikai programcsomag</Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" >
                        <TableHead>
                        </TableHead>
                        <TableBody>
                            {this.ww32.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Pic1}</TableCell>
                                    <TableCell align="center" padding="none">{row.Prog1}</TableCell>
                                    <TableCell align="center" padding="none">{row.Prog2}</TableCell>
                                    <TableCell align="center" padding="none">{row.Pic2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600 bt">
                    <Table className="bg-light-gray " size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    <h3>{listHun[16]}</h3>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600 mb4">
                    <Table className="bg-light-yellow " size="small" >
                        <TableHead>
                        </TableHead>
                        <TableBody>
                            {this.modules.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Pic1}</TableCell>
                                    <TableCell align="center" padding="none">{row.Prog1}</TableCell>
                                    <TableCell align="center" padding="none">{row.Prog2}</TableCell>
                                    <TableCell align="center" padding="none">{row.Pic2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600 mb4">
                    <Table className="bg-light-gray " size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    <h3>Céges WinWatt programok kiegészítése</h3>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className="bg-light-yellow">
                                <TableCell align="center" padding="none"><p>A Danfoss Kft., Magyar Rézpiaci Központ és az UPONOR Kft. programjaihoz</p></TableCell>
                                <TableCell className="min250 " align="left" padding="none">
                                    <ul className="list pa0">
                                        <li><Link to="/public/ww_epbd.html" className="link hover-bg-light-blue">{listHun[17]}</Link></li>
                                        <li><Link to="/public/ww_optimum.html" className="link hover-bg-light-blue">{listHun[18]}</Link></li>
                                        <li><Link to="/public/ww_english.html" className="link hover-bg-light-blue">{listHun[19]}</Link></li>
                                        <li><Link to="/public/ww_gbxml.html" className="link hover-bg-light-blue">{listHun[20]}</Link></li>
                                        <li><Link to="/public/ww_hidroplan.html" className="link hover-bg-light-blue">{listHun[21]}</Link></li>
                                        <li><Link to="/public/ww_sun.html" className="link hover-bg-light-blue">{listHun[22]}</Link></li>
                                    </ul></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" padding="none"><p>A Danfoss Kft. és a Magyar Rézpiaci Központ programjaihoz</p></TableCell>
                                <TableCell align="left" padding="none"><Link to="/public/ww_nyari.html" className="link hover-bg-light-blue">{listHun[24]}</Link> 45.000 Ft</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600 mb4">
                    <Table className="bg-light-yellow " size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">
                                    <h3>Egyéb termékek árai:</h3>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className="bg-light-gray">
                                <TableCell align="center" padding="none">Hardverkulcs</TableCell>
                                <TableCell align="left" padding="none">10.000 Ft</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell align="center" padding="none">Kulcs pótlás postázása</TableCell>
                                <TableCell align="left" padding="none">1.500 Ft</TableCell>
                            </TableRow>
                            <TableRow className="bg-light-gray">
                                <TableCell align="center" padding="none">Helyszínre történő szerviz kiszállás</TableCell>
                                <TableCell align="left" padding="none">150 Ft/km + 5000 Ft/óra</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell align="center" padding="none">Egyedi oktatás</TableCell>
                                <TableCell align="left" padding="none">20.000 Ft/óra</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h2>A megrendelés módja</h2>
                <p>Megrendelését a <strong>bausoft@bausoft.hu</strong> címre küldött emailben adhatja fel. A megrendelésben kérjük megadni:</p>
                <ul>
                    <li>Melyik programokat, annak melyik változatát vagy kiegészítését kéri. Pl.: WinWatt cinege az Épületenergetikai modullal</li>
                    <li>Ha még nem rendelkezik hardverkulccsal, programrendelésnél azt is meg kell rendelni. Ha meglévő hardverkulcsához rendel programot, a kulcs program által kiírt azonosítóját is adja meg. Pl.: Sentinel C-Plus 2nv32cd-2ew432i</li>
                    <li>A számlázási nevet, címet és adószámot.</li>
                    <li>A postázási nevet és címet, ha az eltér a számlázástól.</li>
                    <li>A megrendelő személy nevét és valamilyen telefonos elérhetőségét.</li>
                    <li>Az esetleges kedvezményt, amire jogosult.</li>
                </ul>
                <p>A megrendelt termékekről előszőr díjbekérőt állítunk ki, aminek másolatát e-mailben elküldjük. Az átutalást követően a megbízás másolatát küldje át e-mailben, hogy minél hamarabb postázhassuk a termékeket, mellékelve a számla eredeti példányát.</p>
                <h2>Kedvezmények</h2>
                <p>Több program vásárlása esetén árengedményt adunk. A harmadik programot követő program ára 5.000 Ft-al olcsóbb (a kiegészítő modulok nem számítanak bele ebbe a kedvezménybe és a programok számába). Több példányban való vásárlás esetén a hardverkulcs árának 100 %-át a programok árának 30 %-át számítjuk fel.</p>
                <p>A <strong>CHM-BAU32 Kéményméretező program</strong> vásárlásakor a korábbi 16 bites változat 55.000 Ft-os kedvezményre jogosít.</p>
                <p>A <strong>GasNet32 Gázhálózat méretező program</strong> vásárlásakor a korábbi 16 bites változat 35.000 Ft-os kedvezményre jogosít.</p>
                <p>A <strong>WaterNet32 Vízhálózat méretező program</strong> vásárlásakor a korábbi 16 bites változat 35.000 Ft-os kedvezményre jogosít.</p>
                <p>A kedvezmények nem vonatkoznak a különböző cégektől vásárolt programokra (Danfoss Kereskedelmi Kft., Magyar Rézpiaci Központ, UPONOR Épületgépészeti Kft., stb.).</p>
            </div>
        );
    }
}

export default Arak;