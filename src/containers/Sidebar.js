import React, { Component } from 'react';
import 'tachyons';
import flagHun from '../logos/flagHun.png'
import flagUK from '../logos/flagUK.png'

import Sidebar from "react-sidebar";
import './Sidebar.css';
import {Link} from 'react-router-dom';

const mql = window.matchMedia(`(min-width: 800px)`);

class MySidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mql: mql,
      docked: props.docked,
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  render() {

    return (
      <Sidebar
        sidebar={
          <div className="ma3">
            <div><Link to={"/"} className="link underline-hover black">
              <h2 className="ttu tc pa1 ma2 mb1">Bausoft</h2>
              <h3 className="pa1 ma0 mb1"> Pécsvárad Kft.</h3>
            </Link></div>
            <p className="tc">
              <a href="http:\\www.bausoft.hu/index.htm">
                <img className="pa1 grow-large"
                  src={flagHun}
                  width="40"
                  height="25"
                  alt="Hun" />
              </a>
              <a href="http:\\www.bausoft.hu/index_en.htm">
                <img className="pa1 grow-large"
                  src={flagUK}
                  width="40"
                  height="25"
                  alt="Eng" />
              </a>
            </p>
            <ul className="pl1 list ma0 f5">
              <li className="grow"><Link to={"/cegtortenet.html"}>Cégtörténet</Link></li>
              <li className="grow"><a href="http:\\bausoft.hu">Ismertetők</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Árak</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Telepítők</a></li> <li className="grow tr"><a href="http:\\bausoft.hu">RO</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Frissítések</a></li> <li className="grow tr"><a href="http:\\bausoft.hu">RO</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Adatbázisok</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Leírások</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Demok</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Egyéb</a></li>
            </ul>
            <ul className="pl1 pr1 list ma0 f6 tr">
              <li className="grow"><a href="http:\\bausoft.hu">Oktatás</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Magazin</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Minialkalmazások</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Videók</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Fórum</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">GYIK</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Driverek</a></li>
              <li className="grow"><a href="http:\\bausoft.hu">Partnereink</a></li>
            </ul>
            <ul className="pl1 pr1 list ma0 f7 tl">
              <li className="pt2">7720 Pécsvárad </li>
              <li className="">Pécsi út 49. </li>
              <li className="pt2">Baumann József</li>
              <li className="">bausoft@bausoft.hu</li>
              <li className="">(30) 6813-365</li>
              <li className="pt2">Baumann Mihály</li>
              <li className="">bm@bausoft.hu</li>
              <li className="">(30) 9569-835</li>
            </ul>
          </div>
        }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#98dafc" }, content: { backgroundImage: 'linear-gradient(to right, #98dafc, #ACfcfF)' } }}
      >
        <button className="ma3" onClick={() => this.onSetSidebarOpen(true)} hidden={this.state.sidebarDocked}>☰ Menü</button>
        {this.props.children}

      </Sidebar>
    );
  }
}

export default MySidebar;
