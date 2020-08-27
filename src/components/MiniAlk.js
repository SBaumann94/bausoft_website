/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'

class MiniAlk extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
     
    }
    RefRad() {
        window.location.reload(false);
    }
    componentDidMount(){
        document.getElementById("top").scrollTo(0,0);
    }
    render() {
        return (
            <div className="MiniAlk pl3 pr4 overflow-visible-ns">
                <Helmet><title>Internetes kisalkalmazások</title></Helmet>
                <h2 className="pb4">Egyszerű internetes kisalkalmazások</h2>
                <Grid container spacing={2} className="pa2 tc">
                    <Grid item md={12} lg={3} >
                        <p><span className="b">h-x kalkulátor:</span> Légállapot adatok számítására</p>
                        <Iframe src="http://bausoft.hu/php/hx/hxCalc.php" width="300" height="360" frameBorder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid><Grid item md={12} lg={9} className="tl">
                        <p><span className="b">Csövek nyomásesése:</span> Különböző csövek nyomásesés táblázata (<a href="http://bausoft.hu/php/tube/tubecalc.htm" target="_blank">Megnyitás új lapon</a>)</p>
                        <Iframe src="http://bausoft.hu/php/tube/tubecalc.htm" width="800" height="360" frameBorder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid><Grid item md={12} lg={4} >
                        <p><span className="b">Hidraulika kalkulátor:</span> Hidraulikai számítás adott csőre</p>
                        <Iframe src="http://bausoft.hu/php/hydraulic/HydraulicCalculator.php" width="400" height="900" frameBorder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid><Grid item md={12} lg={8} className="tl">
                        <p><span className="b">Radiátor kalkulátor:</span> Radiátor kiválasztás, katalóguslap adott hőmérsékletekre(<a href="http://bausoft.hu/php/rad/RadiatorCalculator.php" target="_blank">Megnyitás új lapon</a>)</p>
                        {/* <p><Link to="/public/minialk.html" className="bg-light-gray ba pa1">Refresh</Link></p> */}
                        <p><button onClick={this.RefRad}>Vissza a kalkulátorhoz</button></p>
                        <Iframe src="http://bausoft.hu/php/rad/RadiatorCalculator.php" width="800" height="900" frameBorder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </Grid>
                </Grid >
            </div >
        );
    }
}

export default MiniAlk;