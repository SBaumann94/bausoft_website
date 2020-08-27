import React, { Component } from 'react';
import 'tachyons';
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


const listHun = ['Épületfizika', 'Téli hőszükséglet', 'Nyári hőterhelés', 'Radiátor kiválasztás',
  'Egycsöves körök', 'Felület fűtés és hűtés', 'Hőcserélő méretezés', 'Hálózat hidraulika', 'Árak ÁFA nélkül',];

const listEng = ['Building physics', 'Winter heat demand', 'Summer heat load', 'Radiator selection',
  'Single pipe loops', 'Surface heating and cooling', 'Heat exchange sizing', 'Network hydraulics', 'Price without tax'];

const moduleListHun = ['Épületenergetika', 'Bármelyik változat kiegészíthető vele, ára 45.000',
  'Optimum modul', 'Optimalizálás az épületenergetikai modulhoz, ára 25.000',
  'Angol nyelvi modul', 'Angol nyelvű program használathoz és dokumentáláshoz, ára 15.000',
  'gbXML modul', 'Épületek létrehozása gbXML fájl alapján, ára 20.000',
  'HidroPlan modul', 'Hidraulikai optimalizálás, ára 20.000',
  'Sun modul', 'Napelemek és napkollektorok számítása az épületenergetikában, ára 15.000'];

const moduleListEng = ['Building energy performance', 'It can be upgraded to any version at a price of 45.000',
  'Optimum module', 'Optimization for the building energy performance module, cost 25.000',
  'English language module', 'English-language program for use and documentation, costs 15.000 ',
  'gbXML module', 'Creating buildings using a gbXML File, Costing 20.000',
  'HidroPlan module', 'Hydraulic optimization, price 20.000',
  'Sun module', 'Calculation of solar panels and solar collectors in building energy, cost 15.000'];

const textHun = ['32 bites WinWatt változatok',
  'A 32 bites Windowsra (95/98/ME/NT/2000/XP/Win7/Win8/Win10 32 és 64 bit) fejlesztett WinWatt32 program széles területet ölel fel, ezért a programnak többféle változatát kínáljuk.',
  'Változatok',
  'A változatok közti váltás esetén az előző változat árával csökken az ár, például a fecske változatról a gólyára váltva 170.000-70.000 = 100.000 a program ára. Valamennyi programunk hardverkulccsal védett. A kulcs ára 10.000 + ÁFA. Több példányban való vásárlás esetén a további példányokra a hardverkulcs árának 100 %-át a programok árának 30 %-át számítjuk fel. Másodpéldány áránál a kedvezményt is 30 %-on vesszük figyelembe.']

const textEng = ['32 bit WinWatt versions',
  'Developed for 32-bit Windows (95/98 / ME / NT / 2000 / XP / Win7 / Win8 / Win10 32-bit and 64-bit), the WinWatt32 program covers a wide area, so we offer several versions of the program.',
  'Versions',
  'When switching between versions, the price of the previous version will be reduced, for example, switching from fecske to gólya will cost  170.000-70.000 = 100.000. All of our programs are protected by a dongle. The price of the key is 10.000 + VAT. For multiple copies, 100% of the hardware key price for additional copies is 30% of the program priceis charged. In the price of a duplicate, the discount is also taken into account at 30%.']

let useModul = [];
let useList = [];
let useText = [];

class WW32 extends Component {

  constructor(props) {
    super(props);
    this.lang = props.lang;
    
    if (this.lang === 'hun') {
      useList = listHun;
      useModul = moduleListHun;
      useText = textHun;
    } else if (this.lang === 'eng') {
      useList = listEng;
      useModul = moduleListEng;
      useText = textEng;
    }
    this.initTable();

  }
  componentDidMount(){
    document.getElementById("top").scrollTo(0,0);
}
  initTable() {
    this.rows = [
      this.createData(<Link to="/public/ww_epfiz.html" className="link black hover-bg-light-blue">{useList[0]}</Link>, '●', '●', '●', '●', '●', '●', '●', '●',),
      this.createData(<Link to="/public/ww_teli.html" className="link black hover-bg-light-blue">{useList[1]}</Link>, '●', '●', '●', '●', '●', '●', '●', '●',),
      this.createData(<Link to="/public/ww_nyari.html" className="link black hover-bg-light-blue">{useList[2]}</Link>, '-', '-', '●', '-', '●', '●', '-', '●',),
      this.createData(<Link to="/public/ww_rad.html" className="link black hover-bg-light-blue">{useList[3]}</Link>, '-', '●', '-', '●', '●', '●', '●', '●',),
      this.createData(<Link to="/public/ww_egycs.html" className="link black hover-bg-light-blue">{useList[4]}</Link>, '-', '-', '-', '●', '-', '●', '●', '●',),
      this.createData(<Link to="/public/ww_padlo.html" className="link black hover-bg-light-blue">{useList[5]}</Link>, '-', '-', '-', '●', '-', '●', '●', '●',),
      this.createData(<Link to="/public/ww_hocs.html" className="link black hover-bg-light-blue">{useList[6]}</Link>, '-', '-', '-', '-', '-', '-', '●', '●',),
      this.createData(<Link to="/public/ww_hidra.html" className="link black hover-bg-light-blue">{useList[7]}</Link>, '-', '-', '-', '-', '-', '-', '●', '●',),
      this.createData(useList[8], '25.000', '45.000', '70.000', '80.000', '90.000', '125.000', '125.000', '170.000',),
    ];
    this.modes = [
      this.createMode(<Link to="/public/ww_epbd.html" className="link black hover-bg-light-blue">{useModul[0]}</Link>,
        useModul[1]),
      this.createMode(<Link to="/public/ww_optimum.html" className="link black hover-bg-light-blue">{useModul[2]}</Link>,
        useModul[3]),
      this.createMode(<Link to="/public/ww_english.html" className="link black hover-bg-light-blue">{useModul[4]}</Link>,
        useModul[5]),
      this.createMode(<Link to="/public/ww_gbxml.html" className="link black hover-bg-light-blue">{useModul[6]}</Link>,
        useModul[7]),
      this.createMode(<Link to="/public/ww_hidroplan.html" className="link black hover-bg-light-blue">{useModul[8]}</Link>,
        useModul[9]),
      this.createMode(<Link to="/public/ww_sun.html" className="link black hover-bg-light-blue">{useModul[10]}</Link>,
        useModul[11]),
    ]

  }


  createMode(name, cinege) {
    return { name, cinege };
  }
  createData(name, cinege, pinty, fecske, rigo, siraly, hollo, kocsag, golya) {
    return { name, cinege, pinty, fecske, rigo, siraly, hollo, kocsag, golya };
  }

  render() {
    return (
      <div className="WinWatt32 pl3">
        <Helmet><title>{useText[0]}</title></Helmet>
        <h2>{useText[0]}</h2>
        <p className="pr4">{useText[1]}</p>
        <TableContainer component={Paper}>
          <Table className="bg-light-yellow min900" size="small" >
            <TableHead>
              <TableRow>
                <TableCell align="center" padding="none">{useText[2]}</TableCell>
                <TableCell align="center" padding="none"><Bird name='cinege' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='pinty' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='fecske' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='rigo' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='siraly' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='hollo' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='kocsag' notRelative={true} /></TableCell>
                <TableCell align="center" padding="none"><Bird name='golya' notRelative={true} /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map((row, index) => (
                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                  <TableCell component="th" scope="row" className="w5 ">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" padding="none">{row.cinege}</TableCell>
                  <TableCell align="center" padding="none">{row.pinty}</TableCell>
                  <TableCell align="center" padding="none">{row.fecske}</TableCell>
                  <TableCell align="center" padding="none">{row.rigo}</TableCell>
                  <TableCell align="center" padding="none">{row.siraly}</TableCell>
                  <TableCell align="center" padding="none">{row.hollo}</TableCell>
                  <TableCell align="center" padding="none">{row.kocsag}</TableCell>
                  <TableCell align="center" padding="none">{row.golya}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table className="bg-light-yellow min400" size="small" >
            <TableHead>
            </TableHead>
            <TableBody>
              {this.modes.map((row, index) => (
                <TableRow key={index} className={`${(index % 2 === 1) ? "bg-light-gray" : ""}`}>
                  <TableCell component="th" scope="row" className="w5">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" padding="none">{row.cinege}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p className="pr4">{useText[3]}</p>
      </div>
    );
  }
}

export default WW32;