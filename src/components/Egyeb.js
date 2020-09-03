/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'

class Egyeb extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="Egyeb pl3 pr4">
                <Helmet><title>Egyéb információk</title></Helmet>
                <h2>Egyéb információk</h2>
                <p><Link to="/public/oktatas.html">Programjainkhoz kapcsolódó konzultációk, oktatások</Link></p>
                <p><Link to="/public/videok.html">Oktató videók</Link></p>
                <p><Link to="/public/magazin.html">Bausoft magazin</Link></p>
                <p><Link to="/public/minialk.html">Egyszerű internetes kisalkalmazások</Link></p>
                <p><Link to="/public/GYIK.html">Gyakran ismételt kérdések</Link></p>
                <p><Link to="/public/driver.html">Hardverkulcs meghajtóprogramok</Link></p>
                <p><Link to="/public/dtutil.html">Adatbázis javító segédprogram</Link></p>
                <p ><a href='http://www.bausoft.hu/KESZ.03.zip' >KESZ Excel fájl a pályázatokhoz</a></p>
                
                <p>Karácsonyi ajándék játékok:</p>
                <ul >
                    <li >2017 <a href='http://www.bausoft.hu/install/Kalaha_telepito.exe' >Kalaha telepítő</a>, társasjáték</li>
                    <li >2005 <a href='http://www.bausoft.hu/install/Csomagolo_telepito.exe' >Csomagolo telepítő</a>, logikai játék</li>
                    <li >2004 <a href='http://www.bausoft.hu/install/Halma_telepito.exe' >Halma telepítő</a>, társasjáték</li>
                    <li >2003 <a href='http://www.bausoft.hu/install/Kockas_futam_telepito.exe' >Kockás futam telepítő</a></li>
                    <li >2002 <a href='http://www.bausoft.hu/install/Rejtveny_keszito_telepito.exe' >Rejtvény készítő telepítő</a></li>
                    <li >2001 <a href='http://www.bausoft.hu/install/SuperModells_telepito.exe' >Super Modells telepítő</a>, társasjáték</li>
                    <li >2000 <a href='http://www.bausoft.hu/install/Lorum_telepito.exe' >Lórum telepítő</a>, kártyajáték</li>
                    <li >1999 <a href='http://www.bausoft.hu/install/Puzzle_telepito.exe' >Puzzle telepítő</a>, kirakó játék</li>
                    <li >1998 <a href='http://www.bausoft.hu/install/Ki_nevet_a_vegen_telepito.exe' >Ki nevet a végén telepítő</a>, társasjáték</li>
                </ul>
                <h4>Térképek, ha fel kíván keresni minket:</h4>
                <Grid container spacing={2} className="pa2 tc">
                    <Grid item md={12} lg={6}>
                        <h5>Baumann Mihály, 7720 Pécsvárad, Pécsi út 49.</h5>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44220.5875668233!2d18.38448907991612!3d46.15499294089308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b8f07f9e8c27%3A0x8a079d6deee42bc0!2zUMOpY3N2w6FyYWQsIFDDqWNzaSDDunQgNDksIDc3MjA!5e0!3m2!1shu!2shu!4v1597668515012!5m2!1shu!2shu" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid><Grid item md={12} lg={6}>
                        <h5>Baumann József, 2211 Vasad, Kossuth Lajos utca 51.</h5>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86548.5971662042!2d19.335898162601776!3d47.32129951563639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474196ec7124cae3%3A0x6ee31bc702c312a1!2sVasad%2C%20Kossuth%20Lajos%20u.%2051%2C%202211!5e0!3m2!1shu!2shu!4v1597668834143!5m2!1shu!2shu" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid>
                </Grid >
            </div >
        );
    }
}

export default Egyeb;