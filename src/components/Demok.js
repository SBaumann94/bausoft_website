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

import Chm_BAU32_demo from '../install/CHM-BAU32_demo_telepito.exe'
import Chm_BAU32_print from '../install/CHM-BAU32_printshow_telepito.exe'
import DanFloor from '../install/DanFloor_padlofutes_telepito.exe'
import GasNet from '../install/GasNet32_demo_telepito.exe'
import Meditherm from '../install/Meditherm_WinWatt_telepito.exe'
import SunArch from '../install/SunArch_demo_telepito.exe'
import WaterNet from '../install/WaterNet32_demo_telepito.exe'
import Golya from '../install/WinWatt_golya_demo_telepito.exe'
import Ww_print from '../install/WinWatt_printshow_telepito.exe'



class Demos extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.initTable();
    }
    initTable() {
        this.demos = [
            this.createData(<a href={Chm_BAU32_demo} >CHM-BAU32 demo telepítő</a>,
                <p>6.1 MB</p>,
                <p><Link to="/public/Chmbau32.html" className="link hover-bg-light-blue">CHM-BAU32 Kéményméretező program</Link></p>),
            this.createData(<a href={GasNet} >GasNet32 demo telepítő</a>,
                <p>4.8 MB</p>,
                <p><Link to="/public/Gasnet32.html" className="link hover-bg-light-blue">GasNet32 Gázhálózat méretező program</Link></p>),
            this.createData(<a href={SunArch} >SunArch demo telepítő</a>,
                <p>4.0 MB</p>,
                <p><Link to="/public/SunArch.html" className="link hover-bg-light-blue">SunArch nappálya szerkesztő program</Link></p>),
            this.createData(<a href={WaterNet} >WaterNet32 demo telepítő</a>,
                <p>8.0 MB</p>,
                <p><Link to="/public/WaterNet32.html" className="link hover-bg-light-blue">WaterNet32 Vízhálózat méretező program</Link></p>),
            this.createData(<a href={Golya} >WinWatt golya demo telepítő</a>,
                <p>5.4 MB</p>,
                <p><Link to="/public/Ww32.html" className="link hover-bg-light-blue">32 bites WinWatt fűtéstechnikai programcsomag</Link></p>),
        ];
        this.free = [
            this.createData(<a href={Ww_print} >WinWatt printshow telepítő</a>,
                <p>7.1 MB</p>,
                <p><Link to="/public/Ww32.html" className="link hover-bg-light-blue">WinWatt printshow, projektek nyomtatásához</Link></p>),
            this.createData(<a href={Chm_BAU32_print} >CHM-BAU32 printshow telepítő</a>,
                <p>6.1 MB</p>,
                <p><Link to="/public/Chmbau32.html" className="link hover-bg-light-blue">CHM-BAU32 printshow, projektek nyomtatásához</Link></p>),
            this.createData(<a href={Meditherm} >Meditherm WinWatt telepítő</a>,
                <p>6.5 MB</p>,
                <p><Link to="/public/Ww32.html" className="link hover-bg-light-blue">Meditherm WinWatt felületfűtés-hűtés méretező program</Link><br/>A korábbi épületfizikai program helyett is használható</p>),
            this.createData(<a href={DanFloor} >DanFloor_padlofutes_telepito</a>,
                <p>1.5 MB</p>,
                <p>DanFloor padlófűtés méretező program</p>),
        ];
    }

    createData(Demo, Size, Link) {
        return { Demo, Size, Link };
    }

    render() {
        return (
            <div className="Demok pl3">
                <Helmet><title>Demo változatok</title></Helmet>
                <h2>DEMO változatok, szabadon másolható programok</h2>
                <p className="pr4">Programjainknak elérhető bemutató változata is. Ezek tényleges tervezésre nem használhatók az alkalmazott korlátozások miatt, de a program működése tanulmányozható, megismerhető. A szabadon másolható programok teljes értékű változatok, tervezésre is alkalmasak. Telepítéshez kattintson a telepítő programon az indításhoz.</p>
                <h3>Demo változatok</h3>
                <TableContainer component={Paper} className="min400 max600">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Ismertető</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.demos.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Demo}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    <TableCell align="center" padding="none">{row.Link}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <h3>Szabadon másolható programok</h3>
                <TableContainer component={Paper} className="min400 max900">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center" padding="none"><h4>Telepító program</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Méret</h4></TableCell>
                                <TableCell align="center" padding="none"><h4>Ismertető</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.free.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell scope="row" align="center" padding="none">{row.Demo}</TableCell>
                                    <TableCell className="min50" align="center" padding="none">{row.Size}</TableCell>
                                    <TableCell align="center" padding="none">{row.Link}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default Demos;