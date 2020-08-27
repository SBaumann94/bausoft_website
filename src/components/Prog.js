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
import { Link } from 'react-router-dom'

const links = ["/public/Chmbau32.html",
    "/public/GasNet32.html",
    "/public/WaterNet32.html",
    "/public/Legforgalom.html",
    "/public/Hurkolt.html",
    "/public/IsoBau.html",
    "/public/Sunarch.html",
    "/public/Hocsere.html",
]

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
        const num =
            (name === 'chm') ? 0
                : (name === 'gasnet') ? 1
                    : (name === 'waternet') ? 2
                        : (name === 'legforg') ? 3
                            : (name === 'hurkolt') ? 4
                                : (name === 'isobau') ? 5
                                    : (name === 'sunarch') ? 6
                                        : (name === 'hocsere') ? 7
                                            : null;
        return (
            <Grid item className="justify-center">
                <Link to={links[num]}>
                    <img className={`${(grow) ? "dim br4 mw-40" : "w4"}`}
                        src={pic}
                        alt={name} />
                </Link>
            </Grid>
        );
    }
}

export default Prog;