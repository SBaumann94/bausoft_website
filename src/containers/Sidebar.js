import React, { Component } from 'react';
import 'tachyons';
import flagHun from '../logos/flagHun.png'
import flagUK from '../logos/flagUK.png'
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
import SideComponents from '../components/SideComponents';
import ErrorBoundary from '../containers/ErrorBoundary';

const mql = window.matchMedia(`(min-width: 800px)`);

class MySidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'hun',
      mql: mql,
      docked: props.docked,
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  setLangEng() {
    document.documentElement.lang = 'eng';
    this.setState({ lang: 'eng' });
  }
  setLangHun() {
    document.documentElement.lang = 'hun';
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
            <div><Link to='/' className="link underline-hover black">
              <h2 className="ttu tc pa1 ma2 mb1">Bausoft</h2>
              <h3 className="pa1 ma0 mb1 tc"> Pécsvárad Kft.</h3>
            </Link></div>
            <p className="tc">
              <Link to='/' onClick={() => (this.setLangHun())}>
                <img className="pa1 grow-large"
                  src={flagHun}
                  width="40"
                  height="25"
                  alt="Hun" />
              </Link>
              <Link to='/' onClick={() => (this.setLangEng())}>
                <img className="pa1 grow-large"
                  src={flagUK}
                  width="40"
                  height="25"
                  alt="Eng" />
              </Link>
            </p>
            {(this.state.lang === 'eng') && (<SideComponents language='eng' />)}
            {(this.state.lang === 'hun') && (<SideComponents language='hun' />)}
            <ul className="pl1 pr1 list ma0 f7 tl">
              <li className="pt1">7720 Pécsvárad </li>
              <li className="">Pécsi út 49. </li>
              <li className="pt1">Baumann József</li>
              <li className="">bausoft@bausoft.hu</li>
              <li className="">(30) 6813-365</li>
              <li className="pt1">Baumann Mihály</li>
              <li className="">bm@bausoft.hu</li>
              <li className="">(30) 9569-835</li>
            </ul>
          </div>
        }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#EEEEEE" }, content: { backgroundImage: 'linear-gradient(to right, #EEEEEE, #DCFEFF)' } }}
        contentId="top"
      >
        <ErrorBoundary lang={this.state.lang}>
          <button className="ma3 mb0" onClick={() => this.onSetSidebarOpen(true)} hidden={this.state.sidebarDocked}>☰ Menü</button>
          {this.props.children}
        </ErrorBoundary>
      </Sidebar>
    );
  }
}

export default MySidebar;
