/* eslint-disable no-sequences */

import React, { Component } from 'react';
import 'tachyons';
import flagHun from '../logos/flagHun.png'
import flagUK from '../logos/flagUK.png'

import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';

const mql = window.matchMedia(`(min-width: 800px)`);

  class MySidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lang: document.documentElement.lang,
        mql: mql,
        docked: props.docked,
        sidebarOpen: false,
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    }

    setLangEng() {
      this.setState({ lang: 'eng' });
    }    
    setLangHun() {
      this.setState({ lang: 'hun' });
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
                <Link to="/" onClick={() => (document.documentElement.lang = 'hun', this.setLangHun())}>
                  <img className="pa1 grow-large"
                    src={flagHun}
                    width="40"
                    height="25"
                    alt="Hun" />
                </Link>
                <Link to="/" onClick={() => (document.documentElement.lang = 'eng', this.setLangEng())}>
                  <img className="pa1 grow-large"
                    src={flagUK}
                    width="40"
                    height="25"
                    alt="Eng" />
                </Link>
              </p>
              <ul className="pl1 list ma0 f5">
                <li className="grow"><Link to={"/public/cegtortenet.html"}>
                  {`${(this.state.lang === 'eng') ? "History(Hun)" : "Cégtörténet"}`}
                </Link></li>
                <li className="grow"><Link to={"/public/progism.html"}>
                {`${(this.state.lang === 'eng') ? "Program reviews" : "Ismertetők"}`}
                </Link></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Prices(Hun)" : "Árak"}`}
                </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Installers(Hun)" : "Telepítők"}`}
                </a></li> <li className="grow tr"><a href="http:\\bausoft.hu">RO</a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Updates(Hun)" : "Frissítések"}`}
                </a></li> <li className="grow tr"><a href="http:\\bausoft.hu">RO</a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Databases(Hun)" : "Adatbázisok"}`}
                </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "User manuals(Hun)" : "Leírások"}`}
                </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Demos(Hun)" : "Demok"}`}
                </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Others" : "Egyéb"}`}
                </a></li>
              </ul>
              <ul className="pl1 pr1 list ma0 f6 tr">
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Education(Hun)" : "Oktatás"}`}
                </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Magazine(Hun)" : "Magazin"}`}
                  </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Mini applets(Hun)" : "Minialkalmazások"}`}
                </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Videos(Hun)" : "Videók"}`}
                  </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Forum(Hun)" : "Fórum"}`}
                  </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "FAQ(Hun)" : "GYIK"}`}
                  </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Drivers(Hun)" : "Driverek"}`}
                  </a></li>
                <li className="grow"><a href="http:\\bausoft.hu">
                {`${(this.state.lang === 'eng') ? "Our partners(Hun)" : "Partnereink"}`}
                  </a></li>
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
          styles={{ sidebar: { background: "#ACfcfF" }, content: { backgroundImage: 'linear-gradient(to right, #ACfcfF, #FFFFFF)' } }}
        >
          <button className="ma3 mb0" onClick={() => this.onSetSidebarOpen(true)} hidden={this.state.sidebarDocked}>☰ Menü</button>
          {this.props.children}

        </Sidebar>
      );
    }
  }

export default MySidebar;
