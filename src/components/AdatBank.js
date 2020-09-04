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

class AdatBank extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    initTable() {
        this.db = [
            this.createData4(<a href='http://www.bausoft.hu/database/WinWatt_epitoanyagok.zip' >WinWatt építőanyagok</a>,
                <p>41.145</p>,
                <p>Építőanyag adatok</p>,
                <p>2020. június 15.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/WinWatt_vegyes.zip' >WinWatt vegyes</a>,
                <p>1.296.311</p>,
                <p>Radiátorok és építőanyagok kivételével minden. <span className="red b">Legalább 8.10-es verzió szükséges</span></p>,
                <p>2020. július 29.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/Radiator.zip' >Radiátorok</a>,
                <p>736.899</p>,
                <p>Minden gyártó radiátora. <span className="red b">Legalább 6.21-es verzió szükséges</span></p>,
                <p>2020. április 2.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/WinWatt_szerkezetek.zip' >WinWatt szerkezetek</a>,
                <p>904</p>,
                <p>Szerkezetek</p>,
                <p>2019. augusztus 21.</p>),
        ];
        this.others = [
            this.createData4(<a href='http://www.bausoft.hu/database/chmbau32.zip' >Chmbau32</a>,
                <p>583.739</p>,
                <p><Link to="/public/Chmbau32.html">CHM-BAU32</Link> aktuális adatbázisa</p>,
                <p>2020. június 11.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/isobau.zip' >ISOBau</a>,
                <p>30.016</p>,
                <p><Link to="/public/IsoBau.html">ISOBau</Link> aktuális adatbázisa</p>,
                <p>2010. március 22.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/GasNet32.zip' >GasNet32</a>,
                <p>37.277</p>,
                <p><Link to="/public/GasNet32.html">GasNet32 Gázhálózat méretező program (32 bites)</Link> adatfájlok</p>,
                <p>2019. december 12.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/GasNet.zip' >GasNet</a>,
                <p>113.319</p>,
                <p><Link to="/public/GasNet16.html">GasNet Gázhálózat méretező program (16 bites)</Link> adatfájlok</p>,
                <p>2010. március 14.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/legforgalom.zip' >Légforgalom</a>,
                <p>12.339</p>,
                <p><Link to="/public/Legforgalom.html">Légforgalom számító program</Link> adatfájlok</p>,
                <p>2017. július 21.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/WaterNet32.zip' >WaterNet32</a>,
                <p>40.177</p>,
                <p><Link to="/public/WaterNet32.html">WaterNet32 Vízhálózat méretező program (32 bites)</Link> adatfájlok</p>,
                <p>2018. július 17.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/WaterNet.zip' >WaterNet</a>,
                <p>334.798</p>,
                <p><Link to="/public/WaterNet16.html">WaterNet Vízhálózat méretező program (16 bites)</Link> adatfájlok</p>,
                <p>2008. március 8.</p>),
            this.createData4(<a href='http://www.bausoft.hu/database/baukap.zip' >Baukap</a>,
                <p>46.202</p>,
                <p>Kapcsolófájl a <a href="www.mmsys.hu">KönyvCalc</a> program felé</p>,
                <p>2001. április 1.</p>),
        ];
        this.anyag = [
            this.createData2(<p>MSZ EN ISO 10456 anyagok</p>,
                <p>2020 június</p>),
            this.createData2(<p>Lambda (hővezetési tényező) korrekciós értékek, 8.20 verziótól használható</p>,
                <p>2020 június</p>),
            this.createData2(<p>Új Austrotherm hőszigetelő anyagok</p>,
                <p>2019 május</p>),
        ];

        this.szerk = [
            this.createData2(<p>Kling kapuk</p>,
                <p>2019 augusztus</p>),
        ];
        this.ber = [
            this.createData2(<p>Pipelife vakolt felületfűtés-hűtés rendszerek adatbázisainak javított változata	</p>,
                <p>2020 július</p>),
            this.createData2(<p>UPONOR Minitec rendszerek adatbázisainak javított változata</p>,
                <p>2020 április</p>),
            this.createData2(<p>BOKI padlóba süllyesztett és padló feletti konvektorainak módosítása</p>,
                <p>2020 április</p>),
            this.createData2(<p>Pipelife SLAB-16 rendszer módosítások</p>,
                <p>2020 március</p>),
            this.createData2(<p>Gépész csoport termékei</p>,
                <p>2020 január</p>),
            this.createData2(<p>Maincor termékei</p>,
                <p>2020 január</p>),
            this.createData2(<p>UPONOR Thermatop felületfűtés-hűtés</p>,
                <p>2020 január</p>),
            this.createData2(<p>Pipelife adatbázis bővítése</p>,
                <p>2019 október</p>),
            this.createData2(<p>UPONOR osztók bővítése</p>,
                <p>2019 március</p>),
            this.createData2(<p>UPONOR adatbázis módosítások</p>,
                <p>2019 január</p>),
        ];
        this.chm = [
            this.createData2(<p className="white">Almeva acél kéményrendszerek</p>,
                <p className="white">2020 június</p>),
            this.createData2(<p className="white">Schiedel kéményrendszerek</p>,
                <p className="white">2020 március</p>),
            this.createData2(<p className="white">Baxi kazánok</p>,
                <p className="white">2020 január</p>),
            this.createData2(<p className="white">Almeva exodraft kéményventilátorok</p>,
                <p className="white">2019 október</p>),
            this.createData2(<p className="white">RSV kéményventilátorok</p>,
                <p className="white">2019 július</p>),
        ];
        this.gas = [
            this.createData2(<p>MSZ EN 10220 acélcsövek</p>,
                <p>2019 december</p>),
            this.createData2(<p>Metrix gázmérők</p>,
                <p>2019 június</p>),
            this.createData2(<p>Elster gázmérők</p>,
                <p>2019 június</p>),
            this.createData2(<p>Forgódugattyús gázmérők</p>,
                <p>2019 március</p>),
        ];

    }

    createData2(Text, Date) {
        return { Text, Date };
    }
    createData4(File, Size, Content, Date) {
        return { File, Size, Content, Date };
    }

    render() {
        return (
            <div className="AdatBank pl3 pr4">
                <Helmet><title>Adatbank a BAUSOFT programokhoz</title></Helmet>
                <h2>Adatbank a BAUSOFT programokhoz</h2>
                <p>Ezen az oldalon mindig megtalálható a programjainkhoz tartozó adatbázisok legutolsó kiegészítései, amennyiben érdekli, töltse le a megfelelő tömörített (ZIP), vagy önkicsomagoló tömörített (EXE) fájlt. A letöltéshez egyszerűen kattintson a megfelelő fájlnévre.</p>
                <h3>A letölthető fájlok a <Link to="/public/Ww32.html">WinWatt32 fűtéstechnikai programcsomaghoz*</Link></h3>
                <TableContainer component={Paper} className="min600 max900">
                    <Table className="bg-light-yellow " size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="center" padding="none"><h4>Letölthető fájl</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Mérete</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Tartalma</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Dátum</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.db.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell className="min50" align="center" padding="none">{row.File}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    <TableCell align="center" padding="none">{row.Content}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <p>* Az XML adatbázis fájlok használatához a 4.30 verzió, vagy újabb szükséges.</p>
                <h3>További letölthető fájlok listája</h3>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="center" padding="none"><h4>Letölthető fájl</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Mérete</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Tartalma</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Dátum</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.others.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell className="min150" align="center" padding="none">{row.File}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    <TableCell align="center" padding="none">{row.Content}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <p>A következő táblázat segít eligazodni abban, hogy <b>2019. január 1.</b> óta az adatbázisok <b>miben változtak.</b></p>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>WinWatt32 anyag adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.anyag.map((row, index) => (
                                <TableRow key={index} className="bg-light-green ">
                                    <TableCell align="center" padding="none">{row.Text}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>WinWatt32 szerkezetek adatbázisa</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.szerk.map((row, index) => (
                                <TableRow key={index} className="bg-light-green ">
                                    <TableCell align="center" padding="none">{row.Text}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>WinWatt32 berendezés adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.ber.map((row, index) => (
                                <TableRow key={index} className="bg-light-green ">
                                    <TableCell align="center" padding="none">{row.Text}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>CHM-BAU32 adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.chm.map((row, index) => (
                                <TableRow key={index} className="bg-dark-gray">
                                    <TableCell align="center" padding="none">{row.Text}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>ISO-bau adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>GasNet32 (32 bites) adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.gas.map((row, index) => (
                                <TableRow key={index} className="bg-light-yellow">
                                    <TableCell align="center" padding="none">{row.Text}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>Hurkolt adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>Légforgalom számító adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-blue" size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="left" padding="default"><h4>WaterNet32 (32 bites) adatbázis</h4></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <h3>Rövid útmutató az adatokfájlok egyéni elkészítéséhez</h3>
                <ul>
                    <li><a href='http://www.bausoft.hu/leiras/CHM-BAU_XML_adatfajlok.pdf' >CHM-BAU XML adatfájlok</a></li>
                    <li><Link to="/public/WinWatt_Xml.html" >WinWatt, GasNet és WaterNet XML adatfájlok</Link></li>
                    <li><a href='http://www.bausoft.hu/leiras/Hurkolt_XML_adatfajlok.pdf' >Hurkolt hálózat méretező program XML adatfájlok</a></li>
                </ul>
            </div >
        );
    }
}

export default AdatBank;