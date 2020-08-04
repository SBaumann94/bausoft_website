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
    'Épületenergetika', 'Optimum modul', 'Angol nyelvi modul', 'gbXML modul', 'HidroPlan modul', 'Sun modul', 'Előző modul', 'Következő modul'];

const listEng = ['Building physics', 'Winter heat demand', 'Summer heat load', 'Radiator selection',
    'Single pipe loops', 'Surface heating and cooling', 'Heat exchange sizing', 'Network hydraulics',
    'Building energy performance', 'Optimum module', 'English language module', 'gbXML module',
    'HidroPlan module', 'Sun module', 'Previous module', 'Next module'];

const extraHun = ['hoz vásárolható kiegészítőként ',
    'az energetikai modul',
    'az optimum modul, használatához az energetikai modul is szükséges',
    'az angol nyelvi modul', 'a gbXML modul', 'hoz vásárolható kiegészítőként a HidroPlan modul',
    'a Sun modul', 'alábbi változatai tartalmazzák a modult',];

const extraEng = [' can include this module if purchused',
    '. This module also requires the energy performance module',
    '','','','','','include this module'];

const names = ['epfiz', 'teli', 'nyari', 'rad', 'egycs', 'padlo', 'hocs',
    'hidra', 'epbd', 'optimum', 'english', 'gbxml', 'hidroplan', 'sun']

const linkTo = ['/public/ww_epfiz.html', '/public/ww_teli.html', "/public/ww_nyari.html", "/public/ww_rad.html",
    "/public/ww_egycs.html", "/public/ww_padlo.html", "/public/ww_hocs.html",
    "/public/ww_hidra.html", "/public/ww_epbd.html", "/public/ww_optimum.html",
    "/public/ww_english.html", "/public/ww_gbxml.html", "/public/ww_hidroplan.html", '/public/ww_sun.html']

let useText = []
let extraText = []
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
        let x = names.findIndex(element => element === this.props.sub)
        let left = x - 1;
        let right = x + 1;
        if (x === 0) {
            left = 13;
        } else if (x === 13) {
            right = 0;
        }
        if (this.lang === 'hun') {
            useText = listHun;
            extraText = extraHun;
        } else if (this.lang === 'eng') {
            useText = listEng;
            extraText = extraEng;
        }
        this.headRow = [
            this.createData(
                <Link to={`${linkTo[left]}`} className="link black hover-bg-light-blue">
                    &#60; {useText[14]}</Link>,
                <h3 className="black bg-light-gray">
                    {useText[x]}</h3>,
                <Link to={`${linkTo[right]}`} className="link black hover-bg-light-blue">
                    {useText[15]} &#62;</Link>,
            )
        ];
        this.setSubState(x);
    }

    setSubState(num) {
        this.setState({ sub: num, })
    }

    createData(elozo, aktual, kov) {
        return { elozo, aktual, kov };
    }

    render() {
        return (
            <div className="Ww32_sub pl3 pr3 overflow-x-hidden ">
                <TableContainer className="bg-light-yellow">
                    {this.headTable()}
                    <Table className="bg-light-yellow min400" size="small">
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
                    <Table className="bg-light-yellow min400 max400" size="small">
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
        switch (this.state.sub) {
                case 8:
                    return (extraText[0]+ extraText[1]);
                case 9:
                    return (extraText[0]+ extraText[2]);
                case 10:
                    return (extraText[0]+ extraText[3]);
                case 11:
                    return (extraText[0]+ extraText[4]);
                case 12:
                    return (extraText[0]+ extraText[5]);
                case 13:
                    return (extraText[0]+ extraText[6]);
                default:
                    return (extraText[7]);
            }
        }
    getBirds() {
        const i = this.state.sub
        if (i === 0 || i === 1 || i === 8 || i === 9 || i === 10 || i === 11 || i === 13) {
            return (
                this.getAllBirds()
            )
        } else if (i === 2) {
            return (
                <TableRow >
                    <TableCell><Bird align="center" name='fecske' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='siraly' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='hollo' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 3 || i === 12) {
            return (
                <TableRow>
                    <TableCell><Bird align="center" name='pinty' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='rigo' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='siraly' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='hollo' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 4 || i === 5) {
            return (
                <TableRow >
                    <TableCell><Bird align="center" name='rigo' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='hollo' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        } else if (i === 6 || i === 7) {
            return (
                <TableRow >
                    <TableCell><Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                    <TableCell><Bird align="center" name='golya' notRelative={true} /></TableCell>
                </TableRow>
            )
        }
    }
    getAllBirds() {
        return (
            <TableRow>
                <TableCell align="left" padding="none"><Bird align="center" name='cinege' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='pinty' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='fecske' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='rigo' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='siraly' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='hollo' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='kocsag' notRelative={true} /></TableCell>
                <TableCell align="left" padding="none"><Bird align="center" name='golya' notRelative={true} /></TableCell>
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
            <Table className="bg-light-yellow min400" size="small" >
                <TableHead>
                    {this.headRow.map((row, index) => (
                        <TableRow key={index} >
                            <TableCell align="right" padding="none">{row.elozo}</TableCell>
                            <TableCell align="center" >{row.aktual}</TableCell>
                            <TableCell align="left" padding="none">{row.kov}</TableCell>
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody />
            </Table>
        );
    }
}

export default Ww32_sub;