/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import 'tachyons';
import { GoogleMap, Marker } from "react-google-maps"
import { Helmet } from 'react-helmet';

class Terkep extends Component {
    constructor(props) {
        super(props);
        this.lang = props.language
    }

    render() {
        return (
            <div className="Egyeb pl3 pr4">
                <Helmet><title>Egyéb információk</title></Helmet>
                <h4>2211 Vasad, Kossuth Lajos utca 51.</h4>
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: 47.321, lng: 19.403 }}>
                    <Marker position={{ lat: 47.321, lng: 19.403 }} />
                </GoogleMap>
            </div>
        );
    }
}

export default Terkep;