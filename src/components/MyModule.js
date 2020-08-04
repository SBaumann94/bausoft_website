import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import english from '../programIcons/englishegg.png';
import epbd from '../programIcons/epbdegg.png';
import gbxml from '../programIcons/gbxmlegg.png';
import optimum from '../programIcons/optimumegg.png';
import hidroplan from '../programIcons/ww_hidroplan.png';
import sun from '../programIcons/ww_sun.png';

class MyModule extends Component {
    render() {
        const name = this.props.name;
        const grow = this.props.grow | false;
        const pic =
            (name === 'epbd') ? epbd
                : (name === 'optimum') ? optimum
                    : (name === 'gbxml') ? gbxml
                        : (name === 'english') ? english
                            : (name === 'hidroPlan') ? hidroplan
                                : (name === 'sun') ? sun
                                            : null;
        return (
            <Grid item >
                <img className={`${(grow) ? "grow br4 w-80" : "w3"}`}
                    src={pic}
                    alt={name} />
            </Grid>
        );
    }
}

export default MyModule;