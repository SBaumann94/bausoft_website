/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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


class Ww32Project extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
        this.initTable();
    }
    componentDidMount() {
        document.getElementById("top").scrollTo(0, 0);
    }
    initTable() {
        this.attributes = [
            this.createData3(
                <p className="b">Type</p>,
                <p>char[]</p>,
                <p>EMIExport: ÉMI számára készített export; EQExport: EQ export; NativeExport: fájl mentés XML-ként</p>,
            ),
            this.createData3(
                <p className="b">Version</p>,
                <p>char[]</p>,
                <p>Verziószám (idő)</p>,
            )
        ];
        this.data = [
            this.createData3(
                <p><a href="#ProjectData">ProjectData</a></p>,
                <p>komplex</p>,
                <p>Projekt adminisztrációs adatok</p>,
            ),
            this.createData4(
                <p>ActualBuildingID</p>,
                <p>int</p>,
                <p>Annak az épületnek az azonosító értéke (ID), amiről a tanúsítás készült</p>,
                <p>Csak EMIExport és EQExport esetén</p>
            ),
            this.createData4(
                <p><a href="#BuildingBoundaris">BuildingBoundaris</a></p>,
                <p>komplex</p>,
                <p>Épületet határoló szerkezetek listája</p>,
                <p>Csak EMIExport és EQExport esetén</p>
            ),
            this.createData3(
                <p><a href="#WinWatt32Panel">WinWatt32Panel</a></p>,
                <p>komplex</p>,
                <p>Egy szerkezet típus</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32Room">WinWatt32Room</a></p>,
                <p>komplex</p>,
                <p>Egy helyíség</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32Building">WinWatt32Building</a></p>,
                <p>komplex</p>,
                <p>Egy épület</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32NormalSection">WinWatt32NormalSection</a></p>,
                <p>komplex</p>,
                <p>Egy normál szakasz</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32Consumer">WinWatt32Consumer</a></p>,
                <p>komplex</p>,
                <p>Egy ismert teljesítményű fogyasztó</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32HeatChanger">WinWatt32HeatChanger</a></p>,
                <p>komplex</p>,
                <p>Egy hőcserélő</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32FloorHeatingRound">WinWatt32FloorHeatingRound</a></p>,
                <p>komplex</p>,
                <p>Egy felületfűtési-hűtési kör</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32OneTubeRound">WinWatt32OneTubeRound</a></p>,
                <p>komplex</p>,
                <p>Egy egycsöves kör</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32PressureLimiter">WinWatt32PressureLimiter</a></p>,
                <p>komplex</p>,
                <p>Egy túláramszelep</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32PressureDifference">WinWatt32PressureDifference</a></p>,
                <p>komplex</p>,
                <p>Egy nyomáskülönbség szabályozó</p>,
            ),
            this.createData3(
                <p><a href="#WinWatt32Network">WinWatt32Network</a></p>,
                <p>komplex</p>,
                <p>Egy hálózat</p>,
            ), this.createData3(
                <p><a href="#WinWatt32ProjektOptions">WinWatt32ProjektOptions</a></p>,
                <p>komplex</p>,
                <p>Projekt beállítások</p>,
            ),
            this.createData4(
                <p>ProjektBinary</p>,
                <p>char[]</p>,
                <p>Projekt fájl bináris formában. A Checksum attribútum a fájl MD5 ellenőrző értéke</p>,
                <p>Csak EMIExport és EQExport esetén</p>
            ),
            this.createData4(
                <p>Photo</p>,
                <p>char[]</p>,
                <p>A tanúsításra kerülő fotó fájl bináris adatai base64 formában. Attribútuma: Type: a képfájl kiterjesztése, általában jpg</p>,
                <p>Csak EMIExport és EQExport esetén</p>
            ),

            this.createData4(
                <p>Fingerprint</p>,
                <p>char[]</p>,
                <p>Program azonosító ujjlenyomat kódolt bináris adatok base64 formában</p>,
                <p>Csak EMIExport és EQExport esetén</p>
            ),

            this.createData4(
                <p>Checksum</p>,
                <p>char[]</p>,
                <p>Az exportált fájlnak a mező Size attribútumában megadott méretig képzett MD5 ellenőrző értéke</p>,
                <p>Csak EMIExport és EQExport esetén</p>
            ),

        ];
        this.projData = [
            this.createData3(
                <p className="b"><a name="ProjectData"/>Line</p>,
                <p>char[]</p>,
                <p>Az adminisztrációs adatokból egy sor. Az Index attríbutum adja meg az adminisztrációs mező indexét: 0: épület; 1: megrendelő; 2: tervező; 3: megjegyzés</p>,
            ),
            this.createData3(
                <p className="b">Date</p>,
                <p>char[]</p>,
                <p>Projekt dátum</p>,
            ),
        ];

    }

    createData3(Date, Place, Theme) {
        return { Date, Place, Theme };
    }

    createData4(Date, Place, Theme, Text) {
        return { Date, Place, Theme, Text };
    }

    render() {
        return (
            <div className="Ww32Project pl3 pr4">
                <Helmet><title>WinWatt projekt adatai</title></Helmet>
                <h2>WinWatt32Project tag, egy WinWatt projekt adatai</h2>
                <h4>Attributumok</h4>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableBody>
                            {this.attributes.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" >{row.Date}</TableCell>
                                    <TableCell align="center" padding="default">{row.Place}</TableCell>
                                    <TableCell align="center">{row.Theme}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <h4>Adatok</h4>
                <TableContainer component={Paper} className="min600 max900">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableBody>
                            {this.data.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" >{row.Date}</TableCell>
                                    <TableCell align="center" >{row.Place}</TableCell>
                                    <TableCell align="center" >{row.Theme}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <h3>ProjektData tag, projekt adminisztrációs adatok</h3>
                <h4>Adatok</h4>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableBody>
                            {this.projData.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" >{row.Date}</TableCell>
                                    <TableCell align="center" padding='default'>{row.Place}</TableCell>
                                    <TableCell align="center" >{row.Theme}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        );
    }
}

export default Ww32Project;