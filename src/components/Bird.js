import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import cinege from '../winwattmadarak/cinege.gif';
import pinty from '../winwattmadarak/pinty.gif';
import fecske from '../winwattmadarak/fecske.gif';
import rigo from '../winwattmadarak/rigo.gif';
import siraly from '../winwattmadarak/siraly.gif';
import hollo from '../winwattmadarak/hollo.gif';
import kocsag from '../winwattmadarak/kocsag.gif';
import golya from '../winwattmadarak/golya.gif';

class Bird extends Component {
    render() {
        const name = this.props.name;
        const grow = this.props.grow | false;
        const notRelWidth = this.props.notRelative | false;
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
            <Grid item className={`${(grow) ? "pb3 grow-large" : ""}`}>
                <img className={`${(notRelWidth) ? "w6" : "br4 pb4 w-90"}`}
                    src={pic}
                    alt={name} />
            </Grid>
        );
    }
}

export default Bird;