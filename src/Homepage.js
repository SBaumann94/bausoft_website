import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import BirdList from './components/BirdList';
import Prog from './components/Prog';
import Rozlogo from './logos/rozmaring_logo24.png'
import Prologo from './logos/proidea.png'
import MMlogo from './logos/mmsys.png'
import Flcutlogo from './logos/fluctuvent.png'
import Etudlogo from './logos/etudbt.png'
import './Homepage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="pt4 pl3">
        <h1>Üdvözöljük a BAUSOFT Pécsvárad Kft. honlapján!</h1>
        <p className="pr4">Cégünk épületgépészeti tervező programokat készít és terjeszt, valamint nyújt ezzel kapcsolatos szolgáltatásokat. Amennyiben több információra van szüksége, kattintson a bal oldali menü megfelelő pontjára.</p>
        <Grid container spacing={1} className="pt2 pb2 pl2 pr4 tc">
          <Grid container item sm={12} md={6} spacing={1} className="Winwatt_family">
            <BirdList />
            <Grid item xs={12}>
              <h2>További programjaink:</h2>
            </Grid>
            <Grid item sm={6} xs={6} md={4}>
              <Prog name={'chm'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'gasnet'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'waternet'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'legforg'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'hurkolt'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'isobau'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'sunarch'} />
            </Grid><Grid item sm={6} xs={6} md={4}>
              <Prog name={'hocsere'} />
            </Grid>
          </Grid>
          <Grid container item sm={12} md={6} className="Recommend tl">
            <Grid item xs={12}><h3>Ajánljuk még:</h3>
            </Grid><Grid item xs={5} className="tr pb2">
              <img className="w-100 tl v-mid" src={Rozlogo} alt="Rozmaring logo" />
            </Grid><Grid item xs={6} className="tl pb2 pl1">
              <p><a href="http://www.rozmaringvendeghaz.hu/hu_HU/">Rozmaring Vendégház</a> Zengővárkony, Kossuth L. u. 12.</p>
            </Grid><Grid item xs={3} className="tr">
              <img className="w-100 tl v-mid" src={MMlogo} alt="MMSys logo" />
            </Grid><Grid item xs={8} className="tl pb2 pl1">
              <p><a href="http://www.mmsys.hu">MM.sys Számítástechnikai Bt.</a> a KönyvCalc költségvetés készítő program szerzője</p>
            </Grid><Grid item xs={9} className="tr">
              <p>Online termékinformációs katalógus tervezőknek, kivitelezőknek, építtetőknek <a href="http://www.proidea.hu">www.proidea.hu</a> címen</p>
            </Grid><Grid item xs={2} className="tl pb2 pl1">
              <img className="w-100 tl v-mid" src={Prologo} alt="Proidea logo" />
            </Grid><Grid item xs={2} className="tr">
              <img className="w-100 tl v-mid" src={Flcutlogo} alt="Fluctuvent logo" />
            </Grid><Grid item xs={3} className="tl pb2 pl1">
              <p><strong>FluctuVent</strong> a szellőző tégla</p>
            </Grid><Grid item xs={4} className="tr">
              <p>Hővisszanyerő lakásszellőzés másképp <a href="http://www.etudbt.hu">www.etudbt.hu</a></p>
            </Grid><Grid item xs={2} className="tl pb2 pl1">
              <img className="w-100 tl v-btm" src={Etudlogo} alt="Etudbt logo" />
            </Grid><Grid item xd={12}>
              <p>Ha programjainkat tekintve naprakész szeretne lenni, jelentkezzen <a href="http://bausoft.hu/forum.htm">levelező listánkra</a>, ami <strong>röviden és rendszeresen</strong> tájékoztatást nyújt a változásokról.</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePage;