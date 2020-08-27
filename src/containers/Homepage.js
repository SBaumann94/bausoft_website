import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import BirdList from '../components/BirdList';
import Prog from '../components/Prog';
import Rozlogo from '../logos/rozmaring_logo24.png'
import Prologo from '../logos/proidea.png'
import MMlogo from '../logos/mmsys.png'
import Flcutlogo from '../logos/fluctuvent.png'
import Etudlogo from '../logos/etudbt.png'
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom'

class HomePage extends Component {
  componentDidMount(){
    document.getElementById("top").scrollTo(0,0);
}
  render() {
    return (
      <div className="pt2 pl3">
        <Helmet><title>Bausoft</title></Helmet>
        <h1>Üdvözöljük a BAUSOFT Pécsvárad Kft. honlapján!</h1>
        <p className="pr4">Cégünk épületgépészeti tervező programokat készít és terjeszt, valamint nyújt ezzel kapcsolatos szolgáltatásokat. Amennyiben több információra van szüksége, kattintson a bal oldali menü megfelelő pontjára.</p>
        <Grid container spacing={2} className="pa2 tc">
          <Grid container item sm={12} md={6} spacing={1} className="Winwatt_family">
            <BirdList className="Programs" lang='hun'/>
            <Grid item xs={12} >
              <h2 className="">További programjaink:</h2>
            </Grid>
            <Grid item sm={4} xs={4} md={3}>
              <Prog name={'chm'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'gasnet'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'waternet'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'legforg'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'hurkolt'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'isobau'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'sunarch'} grow={true}/>
            </Grid><Grid item sm={4} xs={4} md={3}>
              <Prog name={'hocsere'} grow={true}/>
            </Grid>
          </Grid>
          <Grid container item sm={12} md={6} className="Recommend tl" >
            <Grid item xs={12} >
            <h3>Ajánljuk még:</h3>
            </Grid><Grid item xs={6} className="tr pb2">
              <img className="w-80 tl v-mid" src={Rozlogo} alt="Rozmaring logo" />
            </Grid><Grid item xs={5} className="tl pb2 pl1">
              <p><a href="http://www.rozmaringvendeghaz.hu/hu_HU/">Rozmaring Vendégház</a> Zengővárkony, Kossuth L. u. 12.</p>
            </Grid><Grid item xs={4} className="tr">
              <img className="w-80 tr v-mid" src={MMlogo} alt="MMSys logo" />
            </Grid><Grid item xs={7} className="tl pb2 pl1">
              <p><a href="http://www.mmsys.hu">MM.sys Számítástechnikai Bt.</a> a KönyvCalc költségvetés készítő program szerzője</p>
            </Grid><Grid item xs={8} className="tr">
              <p>Online termékinformációs katalógus tervezőknek, kivitelezőknek, építtetőknek <a href="http://www.proidea.hu">www.proidea.hu</a> címen</p>
            </Grid><Grid item xs={2} className="tl pb2 pl1">
              <img className="w-100 tl v-mid" src={Prologo} alt="Proidea logo" />
            </Grid><Grid item xs={3} className="tr">
              <img className="w-80 tl v-mid" src={Flcutlogo} alt="Fluctuvent logo" />
            </Grid><Grid item xs={2} className="tl pb2 pl1">
              <p><strong>FluctuVent</strong> a szellőző tégla</p>
            </Grid><Grid item xs={3} className="tr">
              <p>Hővisszanyerő lakásszellőzés másképp <a href="http://www.etudbt.hu">www.etudbt.hu</a></p>
            </Grid><Grid item xs={3} className="tl pb2 pl1">
              <img className="w-80 tl v-btm" src={Etudlogo} alt="Etudbt logo" />
            </Grid><Grid item xd={12}>
              <p>Ha programjainkat tekintve naprakész szeretne lenni, jelentkezzen <Link to="/public/forum.html">levelező listánkra</Link>, ami <strong>röviden és rendszeresen</strong> tájékoztatást nyújt a változásokról.</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePage;