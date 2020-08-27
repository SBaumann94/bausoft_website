/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import BirdList from '../components/BirdList';
import Prog from '../components/Prog';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


class HomePageEnNew extends Component {

    componentDidMount() {
        document.getElementById("top").scrollTo(0, 0);
    }
    render() {
        return (
            <div className="pl3 HomePageEnNew">
                <Helmet><title>Bausoft</title></Helmet>

                <h1 ref={x => this.top = x} className="HomeHead" >Welcome on the homepage of BAUSOFT Pécsvárad Kft.!</h1>

                <Grid container spacing={0} className="pl1">
                    <Grid item xs={12} md={2}><a href="#Bemutat" className="MyButton">Introduction</a></Grid>
                    <Grid item xs={6} md={2}><a href="#Prog" className="MyButton">Our Programs</a></Grid>
                    <Grid item xs={6} md={2}><a href="#WW" className="MyButton">Winwatt</a></Grid>
                </Grid>
                <div className="HomeSection">
                    <Grid container spacing={0} className="Bemutat"><a name="Bemutat" />
                        <p className="f4 pr5">Our company develops and distributes building engineering design programs and provides related services. If you need more information, click on the appropriate menu item on the left. <br />(The "☰ Menu" button on the top of the page)</p>
                    </Grid>
                    <Grid container spacing={1} className="Programok"><a name="Prog" className="home_a" />
                        <Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'chm'} grow={true} />
                            
                        </Grid><Grid item xs={4} sm={3} lg={1} >
                            <Prog name={'gasnet'} grow={true} />
                        </Grid><Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'waternet'} grow={true} />
                        </Grid><Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'isobau'} grow={true} />
                            <Link to="/public/Isobau.html" className="link black">IsoBau</Link>
                        </Grid><Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'hurkolt'} grow={true} />
                            <Link to="/public/Hurkolt.html" className="link black">Hurkolt hálózat méretező</Link>
                        </Grid><Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'hocsere'} grow={true} />
                        </Grid><Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'sunarch'} grow={true} />
                        </Grid><Grid item xs={4} sm={3} lg={1}>
                            <Prog name={'legforg'} grow={true} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} className="Winwatt_family mt4">
                        <BirdList lang='eng' /><a name="WW" className="home_a" />
                    </Grid>
                </div>
            </div>
        );
    }
}

export default HomePageEnNew;