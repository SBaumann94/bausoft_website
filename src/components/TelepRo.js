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

import S_new from '../install/WinWatt-RO_S_Install.exe'
import M_new from '../install/WinWatt-RO_M_Install.exe'
import L_new from '../install/WinWatt-RO_L_Install.exe'
import XL_new from '../install/WinWatt-RO_XL_Install.exe'
import XXL_new from '../install/WinWatt-RO_XXL_Install.exe'

import S_old from '../install/WinWatt-RO_S_old_Install.exe'
import M_old from '../install/WinWatt-RO_M_old_Install.exe'
import L_old from '../install/WinWatt-RO_L_old_Install.exe'
import XL_old from '../install/WinWatt-RO_XL_old_Install.exe'
import XXL_old from '../install/WinWatt-RO_XXL_old_Install.exe'

class TelepRO extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    initTable() {
        this.install_new = [
            this.createData(<a href={S_new} >WinWatt-RO S Install</a>,
                <p>9.0 MB</p>),
            this.createData(<a href={M_new} >WinWatt-RO M Install</a>,
                <p>7.6 MB</p>),
            this.createData(<a href={L_new} >WinWatt-RO L Install</a>,
                <p>9.1 MB</p>),
            this.createData(<a href={XL_new} >WinWatt-RO XL Install</a>,
                <p>9.1 MB</p>),
            this.createData(<a href={XXL_new} >WinWatt-RO XXL Install</a>,
                <p>9.2 MB</p>),
        ];
        this.install_old = [
            this.createData(<a href={S_old} >WinWatt-RO S Install</a>,
                <p>6.6 MB</p>),
            this.createData(<a href={M_old} >WinWatt-RO M Install</a>,
                <p>3.1 MB</p>),
            this.createData(<a href={L_old} >WinWatt-RO L Install</a>,
                <p>6.7 MB</p>),
            this.createData(<a href={XL_old} >WinWatt-RO XL Install</a>,
                <p>9.9 MB</p>),
            this.createData(<a href={XXL_old} >WinWatt-RO XXL Install</a>,
                <p>7.3 MB</p>),
        ];
    }


    createData(Installer, Size) {
        return { Installer, Size };
    }

    render() {
        return (
            <div className="TelepRo pl3">
                <Helmet><title>Román nyelvű telepítő készletek</title></Helmet>
                <h2>Román nyelvű telepítő készletek</h2>
                <p>Programjaink román nyelvű változatának telepítőkészlete található meg itt. Ezeknél a műkődéshez az adott hardverkulcshoz illeszkedő jelszóra van szükség. Vásárláskor Ön innen tudja telepíteni a programot, és a kapott jelszót alkalmazva már használni is tudja azt.</p>
                <h3>A telepítés lépései</h3>
                <h4>1. A program telepítése a táblázatban lévő telepítőprogrammal</h4>
                <div className="pl4 pr3">
                    <p><Link to="/public/Ww32.html">WinWatt-RO változatok</Link> telepítői, <Link to="/public/Ww32Ver.html">verzió: 8.15 (2020.02.10)</Link></p>
                    <TableContainer component={Paper} className="min250 max400">
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.install_new.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell scope="row" align="center" padding="none">{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <h4>2. Hardverkulcs kezelő meghajtóprogram telepítése</h4>
                <p className="pl4 pr3">A hardverkulcs kezeléséhez a számítógépen telepíteni kell a <Link to="/public/driver.html">kulcs gyártója által készített meghajtóprogramot</Link>, ha azt korábban még nem telepítette, vagy ha régebbi verzió.</p>
                <h4>3. Működéshez szükséges jelszó megadása</h4>
                <div className="pl4 pr3">
                    <p>A programok az első indításkor, ha az adott hardverkulcshoz nem találtak jelszót, akkor lehetőséget adnak annak megadására, egy külön párbeszédablakban. Itt ellenőrző értékek is segítenek az adatok helyességének ellenőrzésében.</p>
                    <p>Fontos, hogy a név és cím esetén is, még ha az megváltozott, vagy hibás, akkor is az általunk a jelszóval együtt megadott formában kerüljön megadásra!</p>
                    <p>A programok a Windows Registry adatbázisában tárolják a jelszó adatokat, a HKEY_CURRENT_USER csoporton belül a Software/Bausoft/<i>programnév</i>/UserInfo bejegyzés alatt ( a <i>programnév</i> helyére az aktuális program nevét helyettesítsük).</p>
                </div>
                <h4>A korábbi, még IDAPI-t használó verzió telepítőprogramjai</h4>
                <div className="pl4 pr3">
                    <p><Link to="/public/Ww32.html">WinWatt-RO változatok</Link> telepítői, <Link to="/public/Ww32Ver.html">verzió: 4.63 (2005.05.13)</Link></p>
                    <TableContainer component={Paper} className="min250 max400">
                        <Table className="bg-light-yellow " size="small" padding="none">
                            <TableHead >
                                <TableRow >
                                    <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                    <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.install_old.map((row, index) => (
                                    <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                        <TableCell scope="row" align="center" padding="none">{row.Installer}</TableCell>
                                        <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default TelepRO;