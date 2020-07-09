import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'tachyons';
import Bird from './Bird';
import WWlogo from '../logos/winwatt.gif'
import './BirdList.css';

class BirdList extends Component {

    constructor() {
        super();
        this.state = {
            activeBird: '',
            activeComponents: [false, false, false, false, false, false, false, false],
        };
    }

    handleBirdOn = (event) => {
        const name = event.currentTarget.id;
        this.setState({ activeBird: name });
        // eslint-disable-next-line default-case
        switch (name) {
            case 'cinege':
                this.setState({ activeComponents: [true, true, false, false, false, false, false, false] });
                break;
            case 'pinty':
                this.setState({ activeComponents: [true, true, false, true, false, false, false, false] });
                break;
            case 'fecske':
                this.setState({ activeComponents: [true, true, true, false, false, false, false, false] });
                break;
            case 'rigo':
                this.setState({ activeComponents: [true, true, false, true, true, true, false, false] });
                break;
            case 'siraly':
                this.setState({ activeComponents: [true, true, true, true, false, false, false, false] });
                break;
            case 'hollo':
                this.setState({ activeComponents: [true, true, true, true, true, true, false, false] });
                break;
            case 'kocsag':
                this.setState({ activeComponents: [true, true, false, true, true, true, true, true] });
                break;
            case 'golya':
                this.setState({ activeComponents: [true, true, true, true, true, true, true, true] });
                break;
        }
    }

    handleBirdOff = () => this.setState({ activeBird: '', activeComponents: [] });

    render() {
        return (
            <Grid container item xs={12} >
                <Grid item xs={12} >
                    <img className="w-40" src={WWlogo} alt="WinWatt logo" />
                    <ul className="tl components pl3">
                        <li className={`${(this.state.activeComponents[0]) ? "active" : ""}`}>
                            Épületfizika</li>
                        <li className={`${(this.state.activeComponents[1]) ? "active" : ""}`}>
                            Téli hőszükséglet</li>
                        <li className={`${(this.state.activeComponents[2]) ? "active" : ""}`}>
                            Nyári hőterhelés</li>
                        <li className={`${(this.state.activeComponents[3]) ? "active" : ""}`}>
                            Radiátor kiválasztás</li>
                        <li className={`${(this.state.activeComponents[4]) ? "active" : ""}`}>
                            Egycsöves körök</li>
                        <li className={`${(this.state.activeComponents[5]) ? "active" : ""}`}>
                            Felület fűtés és hűtés</li>
                        <li className={`${(this.state.activeComponents[6]) ? "active" : ""}`}>
                            Hőcserélő méretezés</li>
                        <li className={`pb2 ${(this.state.activeComponents[7]) ? "active" : ""}`}>
                            Hálózat hidraulika</li>
                    </ul>
                </Grid>
                <Grid container item xs={12} onClick={() => window.open("http://bausoft.hu/ww32.htm", "_blank")} style={{ cursor: 'pointer' }}>
                    <Grid item xs={3} id='cinege'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'cinege'} />
                    </Grid><Grid item xs={3} id='pinty'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'pinty'} />
                    </Grid><Grid item xs={3} id='fecske'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'fecske'} />
                    </Grid><Grid item xs={3} id='rigo'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'rigo'} />
                    </Grid><Grid item xs={3} id='siraly'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'siraly'} />
                    </Grid><Grid item xs={3} id='hollo'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'hollo'} />
                    </Grid><Grid item xs={3} id='kocsag'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'kocsag'} />
                    </Grid><Grid item xs={3} id='golya'
                        onMouseEnter={this.handleBirdOn}
                        onMouseLeave={this.handleBirdOff}>
                        <Bird name={'golya'} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default BirdList;