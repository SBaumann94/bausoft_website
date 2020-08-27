/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import level1 from '../database/levlista2007-2012.zip'
import level2 from '../database/levlista2013.zip'
import level3 from '../database/levlista2014.zip'
import level4 from '../database/levlista2015-2016.zip'

class Forum extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
        this.initTable();
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    initTable() {
        this.okt = [
            this.createData(
                <p><a href={level1}>Levelező lista 2007-2012</a></p>,
                <p>975.016</p>,
                <p>2015. április 19.</p>,
            ),
            this.createData(
                <p><a href={level2}>Levelező lista 2013</a></p>,
                <p>2.365.465</p>,
                <p>2015. április 19.</p>,
            ),
            this.createData(
                <p><a href={level3}>Levelező lista 2014</a></p>,
                <p>733.534</p>,
                <p>2015. április 19.</p>,
            ),
            this.createData(
                <p><a href={level4}>Levelező lista 2015-2016</a></p>,
                <p>1.722.796</p>,
                <p>2016. január 7.</p>,
            ),
        ];
    }
    createData(File, Size, Date) {
        return { File, Size, Date };
    }

    render() {
        return (
            <div className="Forum pl3 pr4">
                <Helmet><title>Fórum</title></Helmet>
                <h2>Bausoft fórum</h2>
                <p>A <a href="https://groups.google.com/forum/#!forum/bausoft">https://groups.google.com/forum/#!forum/bausoft</a> címen levelező lista üzemel, elsősorban a programjainkkal kapcsolatos témákban, de szívesen teret adunk más, épületgépészeti témáknak is, amik közérdeklődésre tarthatnak számot. (A korábbi bausoft@epbd.hu fórum még 2016 január végéig üzemel.) Néhány szóban talán nem árt összegezni, hogy mi is az a levelezési lista.</p>
                <p>A levelező lista olyan fórum, amihez bárki csatlakozhat, ehhez fel kell iratkozni a listára. A mi esetünkben ehhez nem kell mást tenni, mint egy levelet kell küldeni a <b>bausoft+subscribe@googlegroups.com</b> címre. A levél tárgya és tartalma lényegtelen, azt egy robot fogja feldolgozni. A robot küld egy válaszlevelet a jelentkezésre, amiben megerősítést vár, csak az után válunk valóban listataggá. A listáról leiratkozni hasonlóan lehet, csak ekkor a <b>bausoft+unsubscribe@googlegroups.com</b> címre kell a levelet küldeni.</p>
                <p>A lista moderált, ami annyit tesz, hogy bárki, aki listatag, ha küld egy levelet a <b>bausoft@googlegroups.com</b> címre, azt a moderátor megvizsgálja, és ha valóban a lista témájához kapcsolódik, azt minden listatag megkapja. Ez egyben azt is jelenti, hogy késleltetve jelenik meg a levelünk.</p>
                <p>Néhány további javaslat:</p>
                <ul>
                    <li>Törekedjünk a tömör, érthető megfogalmazásra, gondoljunk arra, hogy különböző felkészültségűek lehetnek a listatagok.</li>
                    <li>Ha egy témához a hozzászólásunk személyes jellegű, azt inkább ne a listára küldjük, hanem közvetlenül a címzettnek.</li>
                    <li>Ne legyünk türelmetlenek. A moderálás miatt, illetve mivel nem mindenkinek van folyamatos internet kapcsolata, lehet, hogy a válasz csak egy-két nappal később érkezik meg.</li>
                    <li>A válaszban célszerű idézni a levélből, amire válaszolunk, de csak annyit idézzünk, amennyi ahhoz szükséges, hogy mindenki, aki a listát rendszeresen olvassa, "képben legyen".</li>
                    <li>Lehet csatolni dokumentumokat is az üzenethez, de ebben legyünk mértékletesek és próbáljunk mindenki számára könnyen fogyasztható formátumokat használni (JPG, PDF, TXT).</li>
                </ul>
                <h3>Archívum</h3>
                <p>A korábbi fórum archívumát a követlező linkekkel lehet letölteni tömörített fájlokban. A könnyebb eligazodás végett havi bontásban (korai években éves bontásban) vannak a levelek kötegelve.</p>
                <TableContainer component={Paper} className="min400 max600 mb4">
                    <Table className="bg-light-yellow " size="small" padding="none">
                        <TableHead >
                            <TableRow >
                                <TableCell align="center"><h4>Letölthető fájl</h4></TableCell>
                                <TableCell align="center"><h4>Mérete</h4></TableCell>
                                <TableCell align="center"><h4>Dátum</h4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.okt.map((row, index) => (
                                <TableRow key={index} className={`${(index % 2 === 0) ? "bg-light-gray" : ""}`}>
                                    <TableCell align="center" className="min150">{row.File}</TableCell>
                                    <TableCell align="center" className="min150">{row.Size}</TableCell>
                                    <TableCell align="center" >{row.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >
        );
    }
}

export default Forum;