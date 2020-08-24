import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Chm_BAU from '../install/CHM-BAU32_telepito.exe'
import Chm_BAU_Mini from '../install/CHM-BAU32_egy_keszulekes_telepito.exe'
import GasNet from '../install/GasNet32_telepito.exe'
import Hocs from '../install/Hocserelo_telepito.exe'
import Hurkolt from '../install/Hurkolt_halozat_telepito.exe'
import IsoBau from '../install/ISO-bau_telepito.exe'
import Legforg from '../install/Legforgalom_telepito.exe'
import SunArch from '../install/SunArch_telepito.exe'
import WaterNet from '../install/WaterNet32_telepito.exe'

import Cinege from '../install/WinWatt_cinege_telepito.exe'
import Pinty from '../install/WinWatt_pinty_telepito.exe'
import Fecske from '../install/WinWatt_fecske_telepito.exe'
import Rigo from '../install/WinWatt_rigo_telepito.exe'
import Siraly from '../install/WinWatt_siraly_telepito.exe'
import Hollo from '../install/WinWatt_hollo_telepito.exe'
import Kocsag from '../install/WinWatt_kocsag_telepito.exe'
import Golya from '../install/WinWatt_golya_telepito.exe'
import ArchLine from '../install/WinWatt_ARCHLine.XP_telepito.exe'

import Beka from '../install/BeKa_WinWatt_telepito.exe'
import BekaPlus from '../install/BeKa_WinWattPlus_telepito.exe'
import Buderus from '../install/Buderus_WinWatt_telepito.exe'
import DanWatt from '../install/DanWatt_telepito.exe'
import DanWattPlus from '../install/DanWattPlus_telepito.exe'
import Meditherm from '../install/Meditherm_WinWatt_telepito.exe'
import Purmo from '../install/PURMO_radiator_kivalaszto_telepito.exe'
import RezpiacKocsag from '../install/Rezpiaci_WinWatt_kocsag_telepito.exe'
import RezpiacGolya from '../install/Rezpiaci_WinWatt_golya_telepito.exe'
import UponorKocsag from '../install/Uponor_WinWatt_kocsag_telepito.exe'
import UponorGolya from '../install/Uponor_WinWatt_golya_telepito.exe'
import Vogel from '../install/VogelNoot_WinWatt_telepito.exe'
import Epfiz from '../install/WinWatt_epuletfizika_telepito.exe'

import dbConverter from '../install/dbConvert_telepito.exe'
import CreateXML from '../install/CreateXML_telepito.exe'
import ssl from '../install/ssl.zip'
import Diagram from '../install/Diagram_telepito.exe'

import ChmOld from '../install/CHM-BAU_telepito.exe'
import GasOld from '../install/GasNet_telepito.exe'
import WaterOld from '../install/WaterNet_telepito.exe'

import idapi from '../install/idapi.zip';
import idapi32 from '../install/idapi32.zip'
import idapi_tel from '../install/IDAPI16_telepito.exe'
import idapi32_tel from '../install/IDAPI32_telepito.exe'



class Telepitok extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    initTable() {
        this.progs = [
            this.createData4(<a href={Chm_BAU} >CHM-BAU32 telepítő</a>,
                <p>6.3 MB</p>,
                <p><Link to="/public/ChmVer.html" className="link hover-bg-light-blue">3.21</Link></p>,
                <p><Link to="/public/Chmbau32.html" className="link hover-bg-light-blue">CHM-BAU32 Kéményméretező program</Link></p>),
            this.createData4(<a href={Chm_BAU_Mini} >CHM-BAU32 MINI telepítő</a>,
                <p>3.6 MB</p>,
                <p><Link to="/public/ChmVer.html" className="link hover-bg-light-blue">3.21</Link></p>,
                <p><Link to="/public/Chmbau32.html" className="link hover-bg-light-blue">CHM-BAU32 Kéményméretező program (egy készülékes)</Link></p>),
            this.createData4(<a href={GasNet} >GasNet32 telepítő</a>,
                <p>5.0 MB</p>,
                <p><Link to="/public/GNet32Ver.html" className="link hover-bg-light-blue">2.42</Link></p>,
                <p><Link to="/public/GasNet32.html" className="link hover-bg-light-blue">GasNet32 Gázhálózat méretező program</Link></p>),
            this.createData4(<a href={Hocs} >Hőcserélő telepítő</a>,
                <p>3.5 MB</p>,
                <p><Link to="/public/HocsVer.html" className="link hover-bg-light-blue">2.22</Link></p>,
                <p><Link to="/public/ww_hocs.html" className="link hover-bg-light-blue">Hőcserélő méretező program</Link></p>),
            this.createData4(<a href={Hurkolt} >Hurkolt hálózat telepítő</a>,
                <p>4.2 MB</p>,
                <p><Link to="/public/HurkVer.html" className="link hover-bg-light-blue">2.04</Link></p>,
                <p><Link to="/public/Hurkolt.html" className="link hover-bg-light-blue">Hurkolt hálózat méretező program</Link></p>),
            this.createData4(<a href={IsoBau} >ISO-bau szigetelés kiválasztó telepítő</a>,
                <p>3.9 MB</p>,
                <p><Link to="/public/IsoVer.html" className="link hover-bg-light-blue">2.01</Link></p>,
                <p><Link to="/public/IsoBau.html" className="link hover-bg-light-blue">ISO-bau szigetelés kiválasztó</Link></p>),
            this.createData4(<a href={Legforg} >Légforgalom számító telepítő</a>,
                <p>4.4 MB</p>,
                <p><Link to="/public/LegfVer.html" className="link hover-bg-light-blue">2.04</Link></p>,
                <p><Link to="/public/Legforgalom.html" className="link hover-bg-light-blue">Légforgalom számító</Link></p>),
            this.createData4(<a href={SunArch} >SunArch telepítő</a>,
                <p>5.0 MB</p>,
                <p><Link to="/public/SunVer.html" className="link hover-bg-light-blue">2.00</Link></p>,
                <p><Link to="/public/SunArch.html" className="link hover-bg-light-blue">SunArch nappálya szerkesztő program</Link></p>),
            this.createData4(<a href={WaterNet} >WaterNet32 telepítő</a>,
                <p>8.2 MB</p>,
                <p><Link to="/public/WNet32Ver.html" className="link hover-bg-light-blue">2.33</Link></p>,
                <p><Link to="/public/WaterNet32.html" className="link hover-bg-light-blue">WaterNet32 Vízhálózat méretező program</Link></p>),
        ];
        this.Ww = [
            this.createData2(<a href={Cinege} >Winwatt Cinege telepítő</a>,
                <p>6.4 MB</p>),
            this.createData2(<a href={Pinty} >Winwatt Pinty telepítő</a>,
                <p>7.1 MB</p>),
            this.createData2(<a href={Fecske} >Winwatt Fecske telepítő</a>,
                <p>6.5 MB</p>),
            this.createData2(<a href={Rigo} >Winwatt Rigó telepítő</a>,
                <p>9.1 MB</p>),
            this.createData2(<a href={Siraly} >Winwatt Sirály telepítő</a>,
                <p>7.2 MB</p>),
            this.createData2(<a href={Hollo} >Winwatt Holló telepítő</a>,
                <p>9.1 MB</p>),
            this.createData2(<a href={Kocsag} >Winwatt Kócsag telepítő</a>,
                <p>9.3 MB</p>),
            this.createData2(<a href={Golya} >Winwatt Gólya telepítő</a>,
                <p>9.6 MB</p>),
            this.createData2(<a href={ArchLine} >Winwatt ARCHLine XP telepítő</a>,
                <p>6.9 MB</p>),
        ];
        this.Ww_ceg = [
            this.createData3(<a href={Beka} >BeKa WinWatt telepítő</a>,
                <p>7.4 MB</p>,
                <p>jelszavas</p>),
            this.createData3(<a href={BekaPlus} >BeKa WinWattPlus telepítő</a>,
                <p>8.2 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={Buderus} >Buderus WinWatt telepítő</a>,
                <p>6.0 MB</p>,
                <p>szabad</p>),
            this.createData3(<a href={DanWatt} >DanWatt telepítő</a>,
                <p>8.5 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={DanWattPlus} >DanWattPlus telepítő</a>,
                <p>8.6 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={Meditherm} >Meditherm WinWatt telepítő</a>,
                <p>7.7 MB</p>,
                <p>szabad</p>),
            this.createData3(<a href={Purmo} >PURMO radiátor kiválasztó telepítő</a>,
                <p>6.6 MB</p>,
                <p>szabad</p>),
            this.createData3(<a href={RezpiacKocsag} >Rézpiaci WinWatt kócsag telepítő</a>,
                <p>8.0 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={RezpiacGolya} >Rézpiaci WinWatt gólya telepítő</a>,
                <p>8.1 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={UponorKocsag} >UPONOR WinWatt kócsag telepítő</a>,
                <p>7.4 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={UponorGolya} >UPONOR WinWatt gólya telepítő</a>,
                <p>7.5 MB</p>,
                <p>hardverkulcsos</p>),
            this.createData3(<a href={Vogel} >Vogel & Noot WinWatt telepítő</a>,
                <p>6.0 MB</p>,
                <p>szabad</p>),
            this.createData3(<a href={Epfiz} >WinWatt épületfizika telepítő</a>,
                <p>6.2 MB</p>,
                <p>szabad</p>),
        ];
        this.seged = [
            this.createData3(<a href={dbConverter} >dbConverter telepítő</a>,
                <p>1.4 MB</p>,
                <p>A régebbi WinWatt projektek (DB, MB, PX) beolvasására szolgáló segédprogram. 32 bites IDAPI-t használ.</p>),
            this.createData3(<a href={CreateXML} >CreateXML telepítő</a>,
                <p>3.5 MB</p>,
                <p>Adatbázis fájlok létrehozása excel táblázatok alapján.</p>),
            this.createData3(<a href={ssl} >SSL Library DLL fájlok</a>,
                <p>0.7 MB</p>,
                <p>A WinWatt Sun moduljához lehet szükséges, ha a gépen nincs még az SSL telepítve.
                <br />A program könyvtárába kell kicsomagolni.</p>),
            this.createData3(<a href={Diagram} >Diagram telepítő</a>,
                <p>3.0 MB</p>,
                <p>Diagramok feldolgozását segítő segédprogram.</p>),
        ];
        this.regi = [
            this.createData3(<a href={ChmOld} >CHM-BAU telepítő</a>,
                <p>0.8 MB</p>,
                <p><Link to="/public/Chmbau32.html">CHM-BAU Kéményméretező program</Link></p>),
            this.createData3(<a href={GasOld} >GasNet telepítő</a>,
                <p>0.5 MB</p>,
                <p><Link to="/public/GasNet32.html">GasNet Gázhálózat méretező program</Link></p>),
            this.createData3(<a href={WaterOld} >WaterNet telepítő</a>,
                <p>1.3 MB</p>,
                <p><Link to="/public/WaterNet32.html">WaterNet Vízhálózat méretező program</Link></p>),
        ];
        this.db = [
            this.createData2(<a href={idapi} >idapi.zip</a>,
                <p>IDAPI telepítőkészlet tömörítve (1.5 MB)</p>),
            this.createData2(<a href={idapi32} >idapi32.zip</a>,
                <p>32 bites IDAPI telepítőkészlet tömörítve (4.3 MB)</p>),
        ];
    }


    createData2(Installer, Size) {
        return { Installer, Size };
    }
    createData3(Installer, Size, Link) {
        return { Installer, Size, Link };
    }
    createData4(Installer, Size, Version, Link) {
        return { Installer, Size, Version, Link };
    }

    render() {
        return (
            <div className="Telepitok pl3">
                <Helmet><title>Telepítő készletek</title></Helmet>
                <h2>Telepítő készletek</h2>
                <p className="pr4">Programjaink telepítőkészlete található meg itt. Ezeknél a műkődéshez az adott hardverkulcshoz illeszkedő jelszóra van szükség. Vásárláskor Ön innen tudja telepíteni a programot, és a kapott jelszót alkalmazva már használni is tudja azt.</p>
                <h3>A telepítés lépései</h3>
                <h4>1. A program telepítése a táblázatban lévő telepítőprogrammal</h4>
                <div className="pl4 pr3">
                    <p className="red b">A telepítő a felhasználói profilhoz tartozó könyvtárakba is telepít (AppData, Dokumentumok), ezért abban a felhasználói profilban kell futtatni a telepítőt, amiben a programot is használni szeretnénk. Célszerű a projekteket nem a program könyvtárában tárolni, illetve archiválni azokat a telepítés előtt.</p>
                    <TableContainer component={Paper} className="min600 max900">
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Verzió</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Ismertető</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.progs.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell scope="row" align="center" padding="none">{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                        <TableCell align="center" padding="none">{row.Version}</TableCell>
                                        <TableCell align="center" padding="none">{row.Link}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <p className="b"><Link to="/public/Ww32.html">WinWatt változatok</Link> telepítői, <Link to="/public/Ww32Ver.html">verzió: 8.25</Link></p>
                    <TableContainer component={Paper} className="min250 max400">
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.Ww.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell scope="row" align="center" padding="none">{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <p className="b">Céges WinWatt változatok telepítői, verzió: 8.25</p>
                    <TableContainer component={Paper} className="min400 max600" >
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.Ww_ceg.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell scope="row" align="center" padding="none" >{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                        <TableCell className="min50" align="left" padding="none">{row.Link}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <p>A hardverkulcsos céges programok <Link to="/public/AddFunc.html"> további funkciókkal</Link> egészíthetők ki.</p>
                    <h4>Segédprogramok telepítője</h4>
                    <TableContainer component={Paper} className="min600 max900" >
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Ismertető</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.seged.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell className="min150" scope="row" align="center" padding="none" >{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                        <TableCell align="center" padding="none">{row.Link}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <h4>Korábbi, már nem forgalmazott változatok utolsó telepítője</h4>
                    <TableContainer component={Paper} className="min600 max900" >
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Ismertető</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.regi.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell className="min150" scope="row" align="center" padding="none" >{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                        <TableCell align="center" padding="none">{row.Link}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <h4>2. Az adatbázis motor telepítése</h4>
                <div className="pl4 pr3">
                    <p>A CHM-BAU (16 bites változat), WaterNet (16 bites változat) és GasNet (16 bites változat) működéséhez szükséges a Borland Database Engine (IDAPI) telepítése (16 bites), a <b>6.0 változat előtti</b> 32 bites WinWatt változatokhoz illetve a DBConvert programhoz pedig a 32 bites IDAPI. Ha korábban már telepítette az adatbázis motort, nem kell újból telepíteni.</p>
                    <TableContainer component={Paper} className="min400 max600" >
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Magyarázat</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.db.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell className="min150" scope="row" align="center" padding="none" >{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <p>Amennyiben a 16 bites IDAPI telepítője nem hajlandó lefutni, próbálja meg a <a href={idapi_tel} >nem hivatalos telepítőprogram</a> segítségével a telepítést</p>
                    <p>Amennyiben a 32 bites IDAPI telepítője nem hajlandó lefutni, próbálja meg a <a href={idapi32_tel} >nem hivatalos telepítőprogram</a> segítségével a telepítést</p>
                </div>
                <h4>3. Hardverkulcs kezelő meghajtóprogram telepítése</h4>
                <div className="pl4 pr3">
                    <p>A hardverkulcs kezeléséhez a számítógépen telepíteni kell a <Link to="/public/driver.html">kulcs gyártója által készített meghajtóprogramot</Link>, ha azt korábban még nem telepítette, vagy ha régebbi verzió.</p>
                </div>
                <h4>4. Működéshez szükséges jelszó megadása</h4>
                <div className="pl4 pr3">
                    <p>A programok az első indításkor, ha az adott hardverkulcshoz nem találtak jelszót, akkor lehetőséget adnak annak megadására, egy külön párbeszédablakban. Itt ellenőrző értékek is segítenek az adatok helyességének ellenőrzésében.</p>
                    <p>Fontos, hogy a név és cím esetén is, még ha az megváltozott, vagy hibás, akkor is az általunk a jelszóval együtt megadott formában kerüljön megadásra!</p>
                    <p>A 16 bites programok esetén (CHM-BAU 16 bites változat, GasNet 16 bites változat, WaterNet 16 bites változat) a kapott adatokat a konfigurációs (INI) fájl [Password] szekciójában tárolja a program. Például:</p>
                    <ul className="list">
                        <li>[Password]</li>
                        <li>Name=Bausoft Kft.</li>
                        <li>Address=7720 Pécsvárad, Pécsi út 49.</li>
                        <li>1=abcdef-ghijkl-mnopqr-stuwxy</li>
                    </ul>
                    <p>A 32 bites programok a Windows Registry adatbázisában tárolják a jelszó adatokat, a HKEY_CURRENT_USER csoporton belül a Software/Bausoft/<i>programnév</i>/UserInfo bejegyzés alatt ( a <i>programnév</i> helyére az aktuális program nevét helyettesítsük).</p>
                </div>
            </div>
        );
    }
}

export default Telepitok;