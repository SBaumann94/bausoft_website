/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


class HomePageNew extends Component {

    componentDidMount() {
        document.getElementById("top").scrollTo(0, 0);
    }
    render() {
        return (
            <div className="pl3 HomePageNew">
                <Helmet><title>Bausoft</title></Helmet>

                <h1 ref={x => this.top = x} className="HomeHead" >Üdvözöljük a BAUSOFT Pécsvárad Kft. honlapján!</h1>

                <Grid container spacing={0} className="pl1">
                    <Grid item xs={6} md={2}><a href="#Bemutat" className="MyButton">Bemutatkozás</a></Grid>
                    <Grid item xs={6} md={2}><a href="#Prog" className="MyButton">Programjaink</a></Grid>
                    <Grid item xs={6} md={2}><a href="#WW" className="MyButton">Winwatt</a></Grid>
                    <Grid item xs={6} md={2}><a href="#Recommend" className="MyButton">Ajánljuk még</a></Grid>
                </Grid>
                <div className="HomeSection">
                    <Grid container spacing={0} className="Bemutat"><a name="Bemutat" />
                        <p className="f4 pr5">Cégünk épületgépészeti tervező programokat készít és terjeszt, valamint nyújt ezzel kapcsolatos szolgáltatásokat. Amennyiben több információra van szüksége, kattintson a bal oldali menü megfelelő pontjára. <br />(Az oldal tetején a "☰ Menü" gomb)</p>
                        <p className="f4 pr5">Ha programjainkat tekintve naprakész szeretne lenni, jelentkezzen <Link className="link black underline"to="/public/forum.html">levelező listánkra</Link>, ami röviden és rendszeresen tájékoztatást nyújt a változásokról.</p>
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
                        <BirdList lang='hun' /><a name="WW" className="home_a" />
                    </Grid>
                    <Grid container spacing={1} className="Ajánljuk justify-left pb4"><a name="Recommend" className="home_a" />
                        <Grid item xs={3} className="tr pb2">
                            <img className="w-80 tl v-mid" src={Rozlogo} alt="Rozmaring logo" />
                        </Grid><Grid item xs={2} className="tl pb2 pl1">
                            <p><a href="http://www.rozmaringvendeghaz.hu/hu_HU/">Rozmaring Vendégház</a> Zengővárkony, Kossuth L. u. 12.</p>
                        </Grid><Grid item xs={2} className="tr">
                            <img className="w-80 tr v-mid" src={MMlogo} alt="MMSys logo" />
                        </Grid><Grid item xs={5} className="tl pb2 pl1">
                            <p><a href="http://www.mmsys.hu">MM.sys Számítástechnikai Bt.</a> a KönyvCalc költségvetés készítő program szerzője</p>
                        </Grid><Grid item xs={3} className="tr">
                            <p>Hővisszanyerő lakásszellőzés másképp <a href="http://www.etudbt.hu">www.etudbt.hu</a></p>
                        </Grid><Grid item xs={2} className="tl pb2 pl1">
                            <img className="w-80 tl v-btm" src={Etudlogo} alt="Etudbt logo" />
                        </Grid><Grid item xs={2} className="tr">
                            <img className="w-80 tl v-mid" src={Flcutlogo} alt="Fluctuvent logo" />
                        </Grid><Grid item xs={3} className="tl pb2 pl1">
                            <p><strong>FluctuVent</strong> a szellőző tégla</p>

                        </Grid><Grid item xs={5} className="tr">
                            <p>Online termékinformációs katalógus tervezőknek, kivitelezőknek, építtetőknek <a href="http://www.proidea.hu">www.proidea.hu</a> címen</p>
                        </Grid><Grid item xs={1} className="tl pb2 pl1">
                            <img className="w-100 tl v-mid" src={Prologo} alt="Proidea logo" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default HomePageNew;