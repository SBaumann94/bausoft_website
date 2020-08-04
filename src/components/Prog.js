import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import chm from '../programIcons/chm-bau.gif';
import gasnet from '../programIcons/gasnet.gif';
import hocsere from '../programIcons/hocsere.gif';
import hurkolt from '../programIcons/hurkolt.gif';
import isobau from '../programIcons/isobau.gif';
import waternet from '../programIcons/waternet.gif';
import legforg from '../programIcons/legforgalom.gif';
import sunarch from '../programIcons/sunarch.jpg';

class Prog extends Component {
    render() {
        const name = this.props.name;
        const grow = this.props.grow | false;
        const pic =
            (name === 'chm') ? chm
                : (name === 'gasnet') ? gasnet
                    : (name === 'waternet') ? waternet
                        : (name === 'legforg') ? legforg
                            : (name === 'hurkolt') ? hurkolt
                                : (name === 'isobau') ? isobau
                                    : (name === 'sunarch') ? sunarch
                                        : (name === 'hocsere') ? hocsere
                                            : null;
        return (
            <Grid item >
                <img className={`${(grow) ? "grow br4 w-80" : "w4"}`}
                    src={pic}
                    alt={name} />
            </Grid>
        );
    }
}

export default Prog;