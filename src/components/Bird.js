import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import './Bird.css';
import cinege from '../winwattmadarak/cinege.jpg';
import pinty from '../winwattmadarak/pinty.jpg';
import fecske from '../winwattmadarak/fecske.jpg';
import rigo from '../winwattmadarak/rigo.jpg';
import siraly from '../winwattmadarak/siraly.jpg';
import hollo from '../winwattmadarak/hollo.jpg';
import kocsag from '../winwattmadarak/kocsag.jpg';
import golya from '../winwattmadarak/golya.jpg';

class Bird extends Component {
    render() {
        const name = this.props.name;
        const pic =
            (name === 'cinege') ? cinege
                : (name === 'pinty') ? pinty
                    : (name === 'fecske') ? fecske
                        : (name === 'rigo') ? rigo
                            : (name === 'siraly') ? siraly
                                : (name === 'hollo') ? hollo
                                    : (name === 'kocsag') ? kocsag
                                        : (name === 'golya') ? golya
                                            : null;
        return (
            <Grid item >
                <img className="grow br4 w-90"
                    src={pic}
                    alt={name} />
            </Grid>
        );
    }
}

export default Bird;