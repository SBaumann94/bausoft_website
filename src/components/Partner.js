import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';

import partner1 from '../partnerIcons/aeroprodukt.gif';
import partner2 from '../partnerIcons/aruforg.gif';
import partner3 from '../partnerIcons/austrotherm.gif';
import partner4 from '../partnerIcons/baumit.gif';
import partner5 from '../partnerIcons/becker.gif';
import partner6 from '../partnerIcons/buderus.gif';
import partner7 from '../partnerIcons/caparol.gif';
import partner8 from '../partnerIcons/comap.gif';
import partner9 from '../partnerIcons/danfoss.gif';
import partner10 from '../partnerIcons/dunaferr.gif';
import partner11 from '../partnerIcons/geberit.gif';
import partner12 from '../partnerIcons/grundfos.gif';
import partner13 from '../partnerIcons/hajdu.gif';
import partner14 from '../partnerIcons/laing.gif';
import partner15 from '../partnerIcons/lbknauf.gif';
import partner16 from '../partnerIcons/rezpiaci.gif';
import partner17 from '../partnerIcons/megather.gif';
import partner18 from '../partnerIcons/oventrop.gif';
import partner19 from '../partnerIcons/plan.gif';
import partner20 from '../partnerIcons/polifoam.gif';
import partner21 from '../partnerIcons/purmo.gif';
import partner22 from '../partnerIcons/rehau.gif';
import partner23 from '../partnerIcons/szikra.gif';
import partner24 from '../partnerIcons/uponor.gif';
import partner25 from '../partnerIcons/vaillant.gif';
import partner26 from '../partnerIcons/vogel.gif';
import partner27 from '../partnerIcons/yorkshirepegler.gif';
import partner28 from '../partnerIcons/ytong.gif';
import partner29 from '../partnerIcons/zehnder.gif';

const Ps = [partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8,partner9,partner10,partner11,partner12,partner13,partner14,partner15,partner16,partner17,partner18,partner19,partner20,partner21,partner22,partner23,partner24,partner25,partner26,partner27,partner28,partner29]
class Partner extends Component {
    render() {
        const number = this.props.number | 0;
        const grow = this.props.grow | false;
        const pic = Ps[number];
        return (
            <Grid item >
                <img className={`${(grow) ? "grow br4 w-80" : "pt3 pb3"}`}
                    src={pic}
                    alt={Ps[number].toString()} />
            </Grid>
        );
    }
}

export default Partner;