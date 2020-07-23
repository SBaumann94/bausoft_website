import React, { Component } from 'react';
import 'tachyons';
import './Ww32.css'
import Bird from '../components/Bird';
import { Link } from 'react-router-dom';

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

const moduleListHun = ['Épületenergetika', 'Bármelyik változat kiegészíthető vele, ára 45.000 HUF',
  'Optimum modul', 'Optimalizálás az épületenergetikai modulhoz, ára 25.000 HUF',
  'Angol nyelvi modul', 'Angol nyelvű program használathoz és dokumentáláshoz, ára 15.000 HUF',
  'gbXML modul', 'Épületek létrehozása gbXML fájl alapján, ára 20.000 HUF',
  'HidroPlan modul', 'Hidraulikai optimalizálás, ára 20.000 HUF',
  'Sun modul', 'Napelemek és napkollektorok számítása az épületenergetikában, ára 15.000 HUF'];

const moduleListEng = ['Building energy performance', 'It can be upgraded to any version at a price of 45.000 HUF',
  'Optimum module', 'Optimization for the building energy performance module, cost 25.000 HUF',
  'English language module', 'English-language program for use and documentation, costs 15.000  HUF',
  'gbXML module', 'Creating buildings using a gbXML File, Costing 20.000 HUF',
  'HidroPlan module', 'Hydraulic optimization, price 20.000 HUF',
  'Sun module', 'Calculation of solar panels and solar collectors in building energy, cost 15.000 HUF'];

const textHun = ['32 bites WinWatt változatok',
  'A 32 bites Windowsra (95/98/ME/NT/2000/XP/Win7/Win8/Win10 32 és 64 bit) fejlesztett WinWatt32 program széles területet ölel fel, ezért a programnak többféle változatát kínáljuk.',
  'Verziók',
  'A változatok közti váltás esetén az előző változat árával csökken az ár, például a fecske változatról a gólyára váltva 170.000-70.000 = 100.000 HUF a program ára. Valamennyi programunk hardverkulccsal védett. A kulcs ára 10.000 HUF + ÁFA. Több példányban való vásárlás esetén a további példányokra a hardverkulcs árának 100 %-át a programok árának 30 %-át számítjuk fel. Másodpéldány áránál a kedvezményt is 30 %-on vesszük figyelembe.']

const textEng = ['32 bit WinWatt versions',
  'Developed for 32-bit Windows (95/98 / ME / NT / 2000 / XP / Win7 / Win8 / Win10 32-bit and 64-bit), the WinWatt32 program covers a wide area, so we offer several versions of the program.',
  'Versions',
  'When switching between versions, the price of the previous version will be reduced, for example, switching from fecske to gólya will cost  170.000-70.000 = 100.000 HUF. All of our programs are protected by a dongle. The price of the key is 10.000 HUF + VAT. For multiple copies, 100% of the hardware key price for additional copies is 30% of the program priceis charged. In the price of a duplicate, the discount is also taken into account at 30%.']

class WW32 extends Component {

  constructor(props) {
    super(props);
    this.lang = props.lang;
    this.initTable();
  }
  initTable() {
    if (this.lang === 'hun') {
      this.rows = [
        this.createData(<Link to="/public/ww_epfiz.html" className="link black hover-bg-white">{listHun[0]}</Link>, '●', '●', '●', '●', '●', '●', '●', '●',),
        this.createData(<Link to="/public/ww_teli.html" className="link black hover-bg-white">{listHun[1]}</Link>, '●', '●', '●', '●', '●', '●', '●', '●',),
        this.createData(<Link to="/public/ww_nyari.html" className="link black hover-bg-white">{listHun[2]}</Link>, '-', '-', '●', '-', '●', '●', '-', '●',),
        this.createData(<Link to="/public/ww_rad.html" className="link black hover-bg-white">{listHun[3]}</Link>, '-', '●', '-', '●', '●', '●', '●', '●',),
        this.createData(<Link to="/public/ww_egycs.html" className="link black hover-bg-white">{listHun[4]}</Link>, '-', '-', '-', '●', '-', '●', '●', '●',),
        this.createData(<Link to="/public/ww_padlo.html" className="link black hover-bg-white">{listHun[5]}</Link>, '-', '-', '-', '●', '-', '●', '●', '●',),
        this.createData(<Link to="/public/ww_hocs.html" className="link black hover-bg-white">{listHun[6]}</Link>, '-', '-', '-', '-', '-', '-', '●', '●',),
        this.createData(<Link to="/public/ww_hidra.html" className="link black hover-bg-white">{listHun[7]}</Link>, '-', '-', '-', '-', '-', '-', '●', '●',),
        this.createData(listHun[8], '25.000 HUF', '45.000 HUF', '70.000 HUF', '80.000 HUF', '90.000 HUF', '125.000 HUF', '125.000 HUF', '170.000 HUF',),
      ];
      this.modes = [
        this.createMode(<Link to="/public/ww_epbd.html" className="link black hover-bg-white">{moduleListHun[0]}</Link>,
          moduleListHun[1]),
        this.createMode(<Link to="/public/ww_optimum.html" className="link black hover-bg-white">{moduleListHun[2]}</Link>,
          moduleListHun[3]),
        this.createMode(<Link to="/public/ww_english.html" className="link black hover-bg-white">{moduleListHun[4]}</Link>,
          moduleListHun[5]),
        this.createMode(<Link to="/public/ww_gbxml.html" className="link black hover-bg-white">{moduleListHun[6]}</Link>,
          moduleListHun[7]),
        this.createMode(<Link to="/public/ww_hidroplan.html" className="link black hover-bg-white">{moduleListHun[8]}</Link>,
          moduleListHun[9]),
        this.createMode(<Link to="/public/ww_sun.html" className="link black hover-bg-white">{moduleListHun[10]}</Link>,
          moduleListHun[11]),
      ]
    }
    else if (this.lang === 'eng') {
      this.rows = [
        this.createData(<Link to="/public/ww_epfiz.html" className="link black hover-bg-white">{listEng[0]}</Link>, '●', '●', '●', '●', '●', '●', '●', '●',),
        this.createData(<Link to="/public/ww_teli.html" className="link black hover-bg-white">{listEng[1]}</Link>, '●', '●', '●', '●', '●', '●', '●', '●',),
        this.createData(<Link to="/public/ww_nyari.html" className="link black hover-bg-white">{listEng[2]}</Link>, '-', '-', '●', '-', '●', '●', '-', '●',),
        this.createData(<Link to="/public/ww_rad.html" className="link black hover-bg-white">{listEng[3]}</Link>, '-', '●', '-', '●', '●', '●', '●', '●',),
        this.createData(<Link to="/public/ww_egycs.html" className="link black hover-bg-white">{listEng[4]}</Link>, '-', '-', '-', '●', '-', '●', '●', '●',),
        this.createData(<Link to="/public/ww_padlo.html" className="link black hover-bg-white">{listEng[5]}</Link>, '-', '-', '-', '●', '-', '●', '●', '●',),
        this.createData(<Link to="/public/ww_hocs.html" className="link black hover-bg-white">{listEng[6]}</Link>, '-', '-', '-', '-', '-', '-', '●', '●',),
        this.createData(<Link to="/public/ww_hidra.html" className="link black hover-bg-white">{listEng[7]}</Link>, '-', '-', '-', '-', '-', '-', '●', '●',),
        this.createData(listEng[8], '25.000 HUF', '45.000 HUF', '70.000 HUF', '80.000 HUF', '90.000 HUF', '125.000 HUF', '125.000 HUF', '170.000 HUF',),
      ];
      this.modes = [
        this.createMode(<Link to="/public/ww_epbd.html" className="link black hover-bg-white">{moduleListEng[0]}</Link>,
          moduleListEng[1]),
        this.createMode(<Link to="/public/ww_optimum.html" className="link black hover-bg-white">{moduleListEng[2]}</Link>,
          moduleListEng[3]),
        this.createMode(<Link to="/public/ww_english.html" className="link black hover-bg-white">{moduleListEng[4]}</Link>,
          moduleListEng[5]),
        this.createMode(<Link to="/public/ww_gbxml.html" className="link black hover-bg-white">{moduleListEng[6]}</Link>,
          moduleListEng[7]),
        this.createMode(<Link to="/public/ww_hidroplan.html" className="link black hover-bg-white">{moduleListEng[8]}</Link>,
          moduleListEng[9]),
        this.createMode(<Link to="/public/ww_sun.html" className="link black hover-bg-white">{moduleListEng[10]}</Link>,
          moduleListEng[11]),
      ]
    }
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
        <h2>{`${(this.lang === 'hun') ? textHun[0] : textEng[0]}`}</h2>
        <p className="pr4">{`${(this.lang === 'hun') ? textHun[1] : textEng[1]}`}</p>
        <TableContainer component={Paper}>
          <Table className="bg-light-yellow min900" size="small" >
            <TableHead>
              <TableRow>
                <TableCell align="center" padding="none">{`${(this.lang === 'hun') ? textHun[2] : textEng[2]}`}</TableCell>
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
                <TableRow key={index} className={`${(row.cinege === '25.000 HUF') ? "bg-light-gray" : ""}`}>
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
                <TableRow key={index}>
                  <TableCell component="th" scope="row" className="w5">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" padding="none">{row.cinege}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p className="pr4">{`${(this.lang === 'hun') ? textHun[3] : textEng[3]}`}</p>
      </div>
    );
  }
}

export default WW32;