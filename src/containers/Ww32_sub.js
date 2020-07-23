import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import './Ww32_sub.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Bird from '../components/Bird';
import Epfiz from '../components/Epfiz';
import Teli from '../components/Teli';
import Nyari from '../components/Nyari';
import Rad from '../components/Rad';
import Egycs from '../components/Egycs';
import Padlo from '../components/Padlo';
import Hocs from '../components/Hocs';
import Hidra from '../components/Hidra';
import Epbd from '../components/Epbd';
import Optimum from '../components/Optimum';
import English from '../components/English';
import Gbxml from '../components/Gbxml';
import Hidroplan from '../components/Hidroplan';
import Sun from '../components/Sun';

const listHun = ['Épületfizika', 'Téli hőszükséglet', 'Nyári hőterhelés', 'Radiátor kiválasztás',
    'Egycsöves körök', 'Felület fűtés és hűtés', 'Hőcserélő méretezés', 'Hálózat hidraulika',
    'Épületenergetika', 'Optimum modul', 'Angol nyelvi modul', 'gbXML modul', 'HidroPlan modul', 'Sun modul'];

const listEng = ['Building physics', 'Winter heat demand', 'Summer heat load', 'Radiator selection',
    'Single pipe loops', 'Surface heating and cooling', 'Heat exchange sizing', 'Network hydraulics',
    'Building energy performance', 'Optimum module', 'English language module', 'gbXML module',
    'HidroPlan module', 'Sun module'];

const names = ['epfiz', 'teli', 'nyari', 'rad', 'egycs', 'padlo', 'hocs',
    'hidra', 'epbd', 'optimum', 'english', 'gbxml', 'hidroplan', 'sun']

class Ww32_sub extends Component {

    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.state = {
            sub: names.findIndex(element => element === props.sub)
        }
        this.headRow = [];
    }

    componentDidMount() {
        let x = 0
        x = names.findIndex(element => element === this.props.sub)

        const textUse = (this.lang === 'hun') ? listHun : listEng;
        this.headRow = [
            this.createData(
                <Link to="/public/ww_epfiz.html" className={`${(x === 0) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[0]}</Link>,
                <Link to="/public/ww_teli.html" className={`${(x === 1) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[1]}</Link>,
                <Link to="/public/ww_nyari.html" className={`${(x === 2) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[2]}</Link>,
                <Link to="/public/ww_rad.html" className={`${(x === 3) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[3]}</Link>,
                <Link to="/public/ww_egycs.html" className={`${(x === 4) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[4]}</Link>,
                <Link to="/public/ww_padlo.html" className={`${(x === 5) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[5]}</Link>,
                <Link to="/public/ww_hocs.html" className={`${(x === 6) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[6]}</Link>,
                <Link to="/public/ww_hidra.html" className={`${(x === 7) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[7]}</Link>,
                <Link to="/public/ww_epbd.html" className={`${(x === 8) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[8]}</Link>,
                <Link to="/public/ww_optimum.html" className={`${(x === 9) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[9]}</Link>,
                <Link to="/public/ww_english.html" className={`${(x === 10) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[10]}</Link>,
                <Link to="/public/ww_gbxml.html" className={`${(x === 11) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[11]}</Link>,
                <Link to="/public/ww_hidroplan.html" className={`${(x === 12) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[12]}</Link>,
                <Link to="/public/ww_sun.html" className={`${(x === 13) ?
                    "link black bg-white" : "link black hover-bg-light-blue"}`}>
                    {textUse[13]}</Link>,
            )
        ];
        this.setSubState(x);
    }
    setSubState(num) {
        this.setState({ sub: num, })
    }

    createData(epfiz, teli, nyari, rad, egycs, padlo, hocs, hidra, epbd, optimum, english, gbxml, hidroplan, sun) {
        return { epfiz, teli, nyari, rad, egycs, padlo, hocs, hidra, epbd, optimum, english, gbxml, hidroplan, sun };
    }

    render() {
        return (
            <div className="Ww32_sub pl3 pr3 overflow-x-hidden ">
                <TableContainer component={Paper}>
                    {this.headTable()}
                    <Table className="bg-light-yellow min900" size="small">
                        <TableHead>
                            {(this.lang === 'hun') ? (
                                <TableRow><TableCell>A <Link to="/public/Ww32.html">WinWatt fűtéstechnikai programcsomag</Link>{(this.state.sub > 7) ?
                                    (this.extraModuleText()) :
                                    (" alábbi változatai tartalmazzák a modult")}
                                </TableCell></TableRow>)
                                :
                                (<TableRow><TableCell>The following versions of the <Link to="/public/Ww32.html">WinWatt heatig package</Link>{(this.state.sub > 7) ?
                                    (this.extraModuleText()) :
                                    (" include this module")}
                                </TableCell></TableRow>)}
                        </TableHead>
                    </Table>
                    <Table className="bg-light-yellow min900" size="small">
                        <TableBody>
                            {this.getBirds()}
                        </TableBody>
                    </Table>
                </TableContainer>
                {this.getText()}
            </div>
        );
    }

    extraModuleText() {
        if (this.lang === 'hun') {
            switch (this.state.sub) {
                case 8:
                    return "hoz vásárolható kiegészítőként az energetikai modul"
                case 9:
                    return "hoz vásárolható kiegészítőként az optimum modul, használatához az energetikai modul is szükséges"
                case 10:
                    return "hoz vásárolható kiegészítőként az angol nyelvi modul"
                case 11:
                    return "hoz vásárolható kiegészítőként a gbXML modul"
                case 12:
                    return "hoz vásárolható kiegészítőként a HidroPlan modul"
                case 13:
                    return "hoz vásárolható kiegészítőként a Sun modul"
                default:
                    return (" alábbi változatai tartalmazzák a modult")
            }
        }
        else if (this.lang === 'eng') {
            switch (this.state.sub) {
                case 8:
                    return " can include this module if purchused"
                case 9:
                    return " can include this module if purchused. This module also requires the energy performance module"
                case 10:
                    return " can include this module if purchused"
                case 11:
                    return " can include this module if purchused"
                case 12:
                    return " can include this module if purchused"
                case 13:
                    return " can include this module if purchused"
                default:
                    return (" include this module")
            }
        }
    }
    getBirds() {
        const i = this.state.sub
        if (i === 0 || i === 8 || i === 9 || i === 10 || i === 11 || i === 13) {
            return (
                this.getAllBirds()
            )
        } else if (i === 1) {
            return (
                <TableRow >
                    <TableCell align="center" padding="none" ><Bird align="center" name='siraly' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='hollo' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 2) {
            return (
                <TableRow >
                    <TableCell align="center" padding="none" ><Bird align="center" name='fecske' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='siraly' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='hollo' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 3 || i === 12) {
            return (
                <TableRow>
                    <TableCell align="center" padding="none" ><Bird name='pinty' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird name='rigo' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird name='siraly' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird name='hollo' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird name='kocsag' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 4 || i === 5) {
            return (
                <TableRow >
                    <TableCell align="center" padding="none" >
                        <Bird align="center" name='rigo' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" >
                        <Bird align="center" name='hollo' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" >
                        <Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" >
                        <Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 6 || i === 7) {
            return (
                <TableRow >
                    <TableCell align="center" padding="none" ><Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                    <TableCell align="center" padding="none" ><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        }
    }
    getAllBirds() {
        return (
            <TableRow>
                <TableCell align="center" padding="none" ><Bird name='cinege' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='pinty' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='fecske' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='rigo' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='siraly' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='hollo' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='kocsag' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none" ><Bird name='golya' notRelative={true} /></TableCell>
            </TableRow>

        )
    }

    getText() {
        // eslint-disable-next-line default-case
        switch (this.state.sub) {
            case 0:
                return (
                    <Epfiz lang={this.lang} />
                );
            case 1:
                return (
                    <Teli lang={this.lang} />
                );
            case 2:
                return (
                    <Nyari lang={this.lang} />
                );
            case 3:
                return (
                    <Rad lang={this.lang} />
                );
            case 4:
                return (
                    <Egycs lang={this.lang} />
                );
            case 5:
                return (
                    <Padlo lang={this.lang} />
                );
            case 6:
                return (
                    <Hocs lang={this.lang} />
                );
            case 7:
                return (
                    <Hidra lang={this.lang} />
                );
            case 8:
                return (
                    <Epbd lang={this.lang} />
                );
            case 9:
                return (
                    <Optimum lang={this.lang} />
                );
            case 10:
                return (
                    <English lang={this.lang} />
                );
            case 11:
                return (
                    <Gbxml lang={this.lang} />
                );
            case 12:
                return (
                    <Hidroplan lang={this.lang} />
                );
            case 13:
                return (
                    <Sun lang={this.lang} />
                );
        }

    }

    headTable() {
        return (
            <Table className="bg-light-yellow min900" size="small" >
                <TableHead>
                    {this.headRow.map((row, index) => (
                        <TableRow key={index} >
                            <TableCell className="br" align="center" padding="none">{row.epfiz}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.teli}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.nyari}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.rad}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.egycs}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.padlo}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.hocs}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.hidra}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.epbd}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.optimum}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.english}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.gbxml}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.hidroplan}</TableCell>
                            <TableCell className="br" align="center" padding="none">{row.sun}</TableCell>
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody />
            </Table>
        );
    }
}

export default Ww32_sub;