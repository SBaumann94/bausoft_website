import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import BirdList from '../components/BirdList';
import Prog from '../components/Prog';
import {Helmet} from 'react-helmet';

class HomePageEn extends Component {
  render() {
    return (
      <div className="pt2 pl3">
        <Helmet><title>Bausoft</title></Helmet>
        <h1>Welcome on the homepage of BAUSOFT Pécsvárad Kft.!</h1>
        <p className="pr4">Our company develops and distributes building engineering design programs and provides related services. If you need more information, click on the appropriate menu item on the left.</p>
        <Grid container spacing={2} className="pa2 tc">
          <Grid container item sm={12} md={6} className="Winwatt_family">
            <BirdList className="" lang='eng' />
          </Grid>
          <Grid container item sm={12} md={6} className="Programs tl" >
            <Grid item xs={12} >
              <h2 className="">Also our products:</h2>
            </Grid>
            <Grid item sm={4} xs={4} md={3}>
              <Prog name={'chm'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'gasnet'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'waternet'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'legforg'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'hurkolt'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'isobau'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'sunarch'} grow={true} />
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'hocsere'} grow={true} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePageEn;