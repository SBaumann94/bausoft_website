/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'

const listHun = ["Elérhetőségeink", "Térképek, ha fel kíván keresni minket"];
const listEng = ["Our contacts", "If you would like to contact us in person"];

let useText = []
class Kapcsolat extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang
        useText = (this.lang === 'hun') ? listHun : listEng;
    }
    render() {
        return (
            <div className="Kapcsolat pl3 pr4">
                <Helmet><title>{useText[0]}</title></Helmet>
                <h2>{useText[0]}:</h2>

                <h4>{useText[1]}:</h4>
                <Grid container spacing={2} className="pa2 tc">
                    <Grid item md={12} lg={6}>
                        <h5>Baumann Mihály, bm@bausoft.hu +36-30-9569-835<br /> 7720 Pécsvárad, Pécsi út 49.</h5>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44220.5875668233!2d18.38448907991612!3d46.15499294089308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b8f07f9e8c27%3A0x8a079d6deee42bc0!2zUMOpY3N2w6FyYWQsIFDDqWNzaSDDunQgNDksIDc3MjA!5e0!3m2!1shu!2shu!4v1597668515012!5m2!1shu!2shu" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid><Grid item md={12} lg={6}>
                        <h5>Baumann József, bausoft@bausoft.hu +36-30-6813-365<br /> 2211 Vasad, Kossuth Lajos utca 51.</h5>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86548.5971662042!2d19.335898162601776!3d47.32129951563639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474196ec7124cae3%3A0x6ee31bc702c312a1!2sVasad%2C%20Kossuth%20Lajos%20u.%2051%2C%202211!5e0!3m2!1shu!2shu!4v1597668834143!5m2!1shu!2shu" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid>
                </Grid >
            </div >
        );
    }
}

export default Kapcsolat;