import React from 'react';
import '../styles/shop.css';

export default class Shop extends React.Component {
    render() {
        return (
            <div className="shop">
                <section className="buyzone">
                    <ul id="seedZone">
                        <li className="seedItem">
                            <div className="seedImg">
                                <img src={require('../assets/plant/plant_A_seed.png')} alt="seed image not accessible"/>
                            </div>
                            <div className="seedDesc"></div>
                        </li>
                    </ul>
                    <ul id="potZone">
                        <li className="potItem">
                            <div className="potImg">
                                <img src={require('../assets/pot/pot2.png')} alt="pot image not accessible"/>
                            </div>
                            <div className="potDesc"></div>
                        </li>
                    </ul>
                    <section>
                        <div id="landZone"></div>
                        <div id="waterZone"></div>
                        <div id="paperZone"></div>
                    </section>
                </section>
                <section className="billzone"></section>
            </div>
        );
    }
}