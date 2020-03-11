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
                                <img alt="" src={require('../assets/plant/plant_A_seed.png')} />
                            </div>
                            <div className="seedDesc">
                                <div>Seed Name: plant_A_seed</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Seed</button>
                                </div>
                            </div>
                        </li>
                        <li className="seedItem">
                            <div className="seedImg">
                                <img alt="" src={require('../assets/plant/plant_A_seed.png')} />
                            </div>
                            <div className="seedDesc">
                                <div>Seed Name: plant_A_seed</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Seed</button>
                                </div>
                            </div>
                        </li>
                        <li className="seedItem">
                            <div className="seedImg">
                                <img alt="" src={require('../assets/plant/plant_A_seed.png')} />
                            </div>
                            <div className="seedDesc">
                                <div>Seed Name: plant_A_seed</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Seed</button>
                                </div>
                            </div>
                        </li>
                        <li className="seedItem">
                            <div className="seedImg">
                                <img alt="" src={require('../assets/plant/plant_A_seed.png')} />
                            </div>
                            <div className="seedDesc">
                                <div>Seed Name: plant_A_seed</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Seed</button>
                                </div>
                            </div>
                        </li>
                        <li className="seedItem">
                            <div className="seedImg">
                                <img alt="" src={require('../assets/plant/plant_A_seed.png')} />
                            </div>
                            <div className="seedDesc">
                                <div>Seed Name: plant_A_seed</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Seed</button>
                                </div>
                            </div>
                        </li>
                        <li className="seedItem">
                            <div className="seedImg">
                                <img alt="" src={require('../assets/plant/plant_A_seed.png')} />
                            </div>
                            <div className="seedDesc">
                                <div>Seed Name: plant_A_seed</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Seed</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul id="potZone">
                        <li className="potItem">
                            <div className="potImg">
                                <img alt="" src={require('../assets/pot/pot2.png')} />
                            </div>
                            <div className="potDesc">
                                <div>Pot Name: pot1</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Pot</button>
                                </div>
                            </div>
                        </li>
                        <li className="potItem">
                            <div className="potImg">
                                <img alt="" src={require('../assets/pot/pot2.png')} />
                            </div>
                            <div className="potDesc">
                                <div>Pot Name: pot1</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Pot</button>
                                </div>
                            </div>
                        </li>
                        <li className="potItem">
                            <div className="potImg">
                                <img alt="" src={require('../assets/pot/pot2.png')} />
                            </div>
                            <div className="potDesc">
                                <div>Pot Name: pot1</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Pot</button>
                                </div>
                            </div>
                        </li>
                        <li className="potItem">
                            <div className="potImg">
                                <img alt="" src={require('../assets/pot/pot2.png')} />
                            </div>
                            <div className="potDesc">
                                <div>Pot Name: pot1</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Pot</button>
                                </div>
                            </div>
                        </li>
                        <li className="potItem">
                            <div className="potImg">
                                <img alt="" src={require('../assets/pot/pot2.png')} />
                            </div>
                            <div className="potDesc">
                                <div>Pot Name: pot1</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Pot</button>
                                </div>
                            </div>
                        </li>
                        <li className="potItem">
                            <div className="potImg">
                                <img alt="" src={require('../assets/pot/pot2.png')} />
                            </div>
                            <div className="potDesc">
                                <div>Pot Name: pot1</div>
                                <div>Price ($): 5</div>
                                <div>
                                    <button>Purchase Pot</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <section>
                        <div id="landZone">
                            <img alt="" src={require('../assets/misc/land.jpg')} />
                            <button>Buy Land</button>
                        </div>
                        <div id="waterZone">
                            <img alt="" src={require('../assets/misc/water.jpg')} />
                            <button>Buy Water</button>
                        </div>
                        <div id="paperZone">
                            <img alt="" src={require('../assets/misc/paper.jpg')} />
                            <button>Buy Paper</button>
                        </div>
                    </section>
                </section>
                <section className="billZone">
                    <div className="sum1">
                        A seed: 30; B seed: 40; C seed: 10; D seed: 10; E seed: 10; F seed: 10; G seed: 10; H seed: 10; I seed: 10; J seed: 10; K seed: 10; L seed: 10; M seed: 10; N seed: 10; O seed: 10; P seed: 10;
                    </div>
                    <div className="sum2">
                        pot 0: 10; pot 1: 10; pot 2: 10; pot 3: 10; pot 4: 10; pot 5: 10; pot 6: 10; pot 7: 10; pot 8: 10; pot 9: 10;<br />======== land: 2; ======== water: 30; ======== paper: 10; ========
                    </div>
                    <div className="operationZone">
                        <div id="btn_left_box">
                            <button>Check Out ($210 in total)</button>
                        </div>
                        <div id="btn_right_box">
                            <button>Empty Shopping Cart</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}