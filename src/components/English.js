import React, { Component } from 'react';
import 'tachyons';
import { Helmet } from 'react-helmet'

class English extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="English pl3 overflow-x-hidden ">
                    <Helmet><title>Angol nyelvi modul</title></Helmet>
                    <h2>WinWatt angol nyelvi modul</h2>
                    <p>Az angol nyelvi modul lehetővé teszi egyrészt a dokumentációk angol nyelven történő elkészítését, másrészt a program angol nyelven történő kezelését. A nyelv kiválasztása a program beállításokban történik.</p>
                    <p>Természetesen a fordítás nem terjed ki a felhasználó által megadott nevekre, értékelésekre, megjegyzésekre. Jelenleg szintén nem terjed ki az adatbázisokból (építőanyagok illetve gépészeti elemek) kiválasztott elemek elnevezésére sem.</p>
                    <p>A nyelvi modul fejlesztése, javítása folyamatosan, a frissítésekkel együtt történik.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Teli pl3 overflow-x-hidden ">
                    <Helmet><title>English language module</title></Helmet>
                    <h2>WinWatt English language module</h2>
                    <p>The English language module allows you to create documentation in English and manage the program in English. The language is selected in the program settings.</p>
                    <p>Of course, the translation does not include user-provided names, ratings, comments.
                    It also does not currently include naming of items selected from databases (building materials or mechanical components).</p>
                    <p>The language module is constantly being developed and updated regularly.</p>
                </div>
            );
        }
    }
}

export default English;