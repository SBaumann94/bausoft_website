import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import BirdList from '../components/BirdList';
import Prog from '../components/Prog';

class HomePageEn extends Component {
  render() {
    return (
      <div className="pt2 pl3">
        <h1>Welcome on the homepage of BAUSOFT Pécsvárad Kft.!</h1>
        <p className="pr4">Our company develops and distributes building engineering design programs and provides related services. If you need more information, click on the appropriate menu item on the left.</p>
        <Grid container spacing={2} className="pa2 tc">
          <Grid container item sm={12} md={6} className="Winwatt_family">
            <BirdList className="" language='eng'/>
          </Grid>
          <Grid container item sm={12} md={6} className="Programs tl" >
            <Grid item xs={12} >
                <h2 className="">Also our products:</h2>
                </Grid>
                <Grid item sm={4} xs={4} md={3}>
                <Prog name={'chm'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'gasnet'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'waternet'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'legforg'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'hurkolt'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'isobau'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'sunarch'} />
                </Grid><Grid item sm={4} xs={4} md={3}>
                <Prog name={'hocsere'} />
                </Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePageEn;