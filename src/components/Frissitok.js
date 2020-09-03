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

class Frissitok extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    initTable() {
        this.progs = [
            this.createData4(<a href='http://www.bausoft.hu/frissit/CHM-BAU32_frissito.exe' >CHM-BAU32 frissítő</a>,
                <p>3.1 MB</p>,
                <p><Link to="/public/ChmVer.html" className="link hover-bg-light-blue">3.21</Link> 3.00 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. március 2.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/CHM-BAU32_frissito.exe' >CHM-BAU32 MINI frissítő</a>,
                <p>3.1 MB</p>,
                <p><Link to="/public/ChmVer.html" className="link hover-bg-light-blue">3.21</Link> 3.00 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. február 10.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/GasNet32_frissito.exe' >GasNet32 frissítő</a>,
                <p>3.2 MB</p>,
                <p><Link to="/public/GNet32Ver.html" className="link hover-bg-light-blue">2.42</Link> 2.10 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. május 4.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/Hocserelo_frissito.exe' >Hőcserélő frissítő</a>,
                <p>2.5 MB</p>,
                <p><Link to="/public/HocsVer.html" className="link hover-bg-light-blue">2.22</Link> 2.10 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. április 23.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/Hurkolt_halozat_frissito.exe' >Hurkolt hálózat frissítő</a>,
                <p>3.0 MB</p>,
                <p><Link to="/public/HurkVer.html" className="link hover-bg-light-blue">2.04</Link> 1.20 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. május 5.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/ISO-bau_frissito.exe' >ISO-bau szigetelés kiválasztó frissítő</a>,
                <p>2.7 MB</p>,
                <p><Link to="/public/IsoVer.html" className="link hover-bg-light-blue">2.01</Link> 1.10 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. április 23.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/Legforgalom_frissito.exe' >Légforgalom számító frissítő</a>,
                <p>3.0 MB</p>,
                <p><Link to="/public/LegfVer.html" className="link hover-bg-light-blue">2.04</Link> 1.20 előtti verzióról újratelepítés szükséges</p>,
                <p>2020. március 2.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/SunArch_frissito.exe' >SunArch frissítő</a>,
                <p>2.6 MB</p>,
                <p><Link to="/public/SunVer.html" className="link hover-bg-light-blue">2.00</Link> 1.45 előtti verzióról újratelepítés szükséges</p>,
                <p>2019. november 25.</p>),
            this.createData4(<a href='http://www.bausoft.hu/frissit/WaterNet32_frissito.exe' >WaterNet32 frissítő</a>,
                <p>4.0 MB</p>,
                <p><Link to="/public/WNet32Ver.html" className="link hover-bg-light-blue">2.33</Link></p>,
                <p>2020. február 10.</p>),
        ];
        this.Ww = [
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_cinege_frissito.exe' >WinWatt Cinege frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_pinty_frissito.exe' >WinWatt Pinty frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_fecske_frissito.exe' >WinWatt Fecske frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_rigo_frissito.exe' >WinWatt Rigó frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_siraly_frissito.exe' >WinWatt Sirály frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_hollo_frissito.exe' >WinWatt Holló frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_kocsag_frissito.exe' >WinWatt Kócsag frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_golya_frissito.exe' >WinWatt Gólya frissítő</a>,
                <p>4.3 MB</p>),
            this.createData2(<a href='http://www.bausoft.hu/frissit/WinWatt_ARCHLine.XP_frissito.exe' >WinWatt ARCHLine XP frissítő</a>,
                <p>4.3 MB</p>),
        ];
        this.ceg = [
            this.createData3(<p>aquaterm Hungária Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/BeKa_WinWatt_frissito.exe' >BeKa WinWatt frissítő</a>,
                <p>4.0 MB</p>),
            this.createData3(<p>aquaterm Hungária Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/BeKa_WinWattPlus_frissito.exe' >BeKa WinWattPlus frissítő</a>,
                <p>4.8 MB</p>),
            this.createData3(<p>Buderus Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/Buderus_WinWatt_frissito.exe' >Buderus WinWatt frissítő</a>,
                <p>3.4 MB</p>),
            this.createData3(<p>Danfoss Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/DanWatt_frissito.exe' >DanWatt frissítő</a>,
                <p>5.1 MB</p>),
            this.createData3(<p>Danfoss Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/DanWattPlus_frissito.exe' >DanWattPlus frissítő</a>,
                <p>5.2 MB</p>),
            this.createData3(<p>PURMO Magyarország</p>,
                <a href='http://www.bausoft.hu/frissit/Meditherm_WinWatt_frissito.exe' >PURMO radiátor kiválasztó frissítő</a>,
                <p>3.5 MB</p>),
            this.createData3(<p>Magyar Rézpiaci Központ</p>,
                <a href='http://www.bausoft.hu/frissit/PURMO_radiator_kivalaszto_frissito.exe' >Rézpiaci WinWatt Kócsag frissítő</a>,
                <p>5.1 MB</p>),
            this.createData3(<p>Magyar Rézpiaci Központ</p>,
                <a href='http://www.bausoft.hu/frissit/Rezpiaci_WinWatt_kocsag_frissito.exe' >Rézpiaci WinWatt Gólya frissítő</a>,
                <p>5.2 MB</p>),
            this.createData3(<p>Uponor Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/Rezpiaci_WinWatt_golya_frissito.exe' >Uponor WinWatt Kócsag frissítő</a>,
                <p>5.2 MB</p>),
            this.createData3(<p>Uponor Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/Uponor_WinWatt_kocsag_frissito.exe' >Uponor WinWatt Gólya frissítő</a>,
                <p>5.2 MB</p>),
            this.createData3(<p>Szikra Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/Uponor_WinWatt_golya_frissito.exe' >Meditherm WinWatt frissítő</a>,
                <p>3.9 MB</p>),
            this.createData3(<p>Rettig Hungary Kft.</p>,
                <a href='http://www.bausoft.hu/frissit/VogelNoot_WinWatt_frissito.exe' >VogelNoot WinWatt frissítő</a>,
                <p>3.4 MB</p>),
            this.createData3(<p>AUSTROTHERM Kft., Baumit Kft, YTONG Kft</p>,
                <a href='http://www.bausoft.hu/frissit/WinWatt_Epuletfizika_frissito.exe' >WinWatt Épületfizika frissítő</a>,
                <p>3.5 MB</p>),
        ];

    }


    createData2(Updater, Size) {
        return { Updater, Size };
    }
    createData3(Manufacturer, Updater, Size) {
        return { Manufacturer, Updater, Size };
    }
    createData4(Updater, Size, Version, Link) {
        return { Updater, Size, Version, Link };
    }

    render() {
        return (
            <div className="Frissitok pl3 pr4">
                <Helmet><title>Program frissítések</title></Helmet>
                <h2>Program frissítések</h2>
                <p>Valamennyi program esetében lehetőség van arra, hogy erről a lapról a megfelelő frissítő programot lefuttatva, a legutolsó változattal dolgozzék.</p>
                <p><span className="red"><b>Fontos!</b> A legújabb verziók esetenként a kulcsdriver frissítését is megkövetelik,</span> a telepítője <Link to="/public/driver.html">innen</Link> letölthető.</p>
                <h2>A 32 bites WinWatt programváltozatok frissítő programjai, verzió: <Link to="/public/Ww32Ver.html">8.25 (2020. augusztus 3.)</Link></h2>
                <p><span className="red b">Az alábbi frissítők csak a 7.50 verzió, vagy annál újabb verziók frissítésére szolgálnak.</span> Korábbi verzió esetén újratelepítés szükséges <Link to="/public/telepitok.html">innen.</Link></p>
                <TableContainer component={Paper} className="min250 max400">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow>
                                <TableCell align="center" padding="none"><h4>Frissítő program</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.Ww.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Updater}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <h2>További 32 bites programok frissítő programjai</h2>
                <TableContainer component={Paper} className="min600 max900">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center" padding="none"><h4>Frissítő program</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Verzió</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Modosítás dátuma</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.progs.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Updater}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    <TableCell align="center" padding="none">{row.Version}</TableCell>
                                    <TableCell className="min150" align="center" padding="none">{row.Link}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <h2>A Bausoft által készített, gyártók által terjesztett WinWatt programok frissitése, verzió: <Link to="/public/Ww32Ver.html">8.25 (2020. augusztus 3.)</Link></h2>
                <p><span className="red b">Az alábbi frissítők csak a 7.50 verzió, vagy annál újabb verziók frissítésére szolgálnak.</span> Korábbi verzió esetén újratelepítés szükséges <Link to="/public/telepitok.html">innen.</Link></p>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" padding="none" >
                        <TableHead >
                            <TableRow >
                                <TableCell align="right" padding="none"><h4>Gyártó</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Frissítő fájl</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.ceg.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="right" padding="none">{row.Manufacturer}</TableCell>
                                    <TableCell align="center" padding="none">{row.Updater}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <p>A hardverkulcsos céges programok <Link to="/public/AddFunc.html">további funkciókkal</Link> egészíthetők ki.</p>
            </div >
        );
    }
}

export default Frissitok;