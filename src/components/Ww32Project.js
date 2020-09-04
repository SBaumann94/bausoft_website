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
    }

    createData3(Date, Place, Theme) {
        return { Date, Place, Theme };
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
                            {this.attributes.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" >{row.Date}</TableCell>
                                    <TableCell align="center" >{row.Place}</TableCell>
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