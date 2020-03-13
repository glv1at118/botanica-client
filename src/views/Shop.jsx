import React from 'react';
import '../styles/shop.css';
import { reduxStore } from '../redux/store.js';
import {
    changeBalance,
    changePaper,
    changeOwnedSeeds,
    changeOwnedPots,
    changeWater,
    changeLandMax
} from '../redux/actions.js';

import seedImgPath0 from '../assets/plant/plant_A_seed.png';
import seedImgPath1 from '../assets/plant/plant_B_seed.png';
import seedImgPath2 from '../assets/plant/plant_C_seed.png';
import seedImgPath3 from '../assets/plant/plant_D_seed.png';
import seedImgPath4 from '../assets/plant/plant_E_seed.png';
import seedImgPath5 from '../assets/plant/plant_F_seed.png';
import seedImgPath6 from '../assets/plant/plant_G_seed.png';
import seedImgPath7 from '../assets/plant/plant_H_seed.png';
import seedImgPath8 from '../assets/plant/plant_I_seed.png';
import seedImgPath9 from '../assets/plant/plant_J_seed.png';
import seedImgPath10 from '../assets/plant/plant_K_seed.png';
import seedImgPath11 from '../assets/plant/plant_L_seed.png';
import seedImgPath12 from '../assets/plant/plant_M_seed.png';
import seedImgPath13 from '../assets/plant/plant_N_seed.png';
import seedImgPath14 from '../assets/plant/plant_O_seed.png';
import seedImgPath15 from '../assets/plant/plant_P_seed.png';

import potImgPath0 from '../assets/pot/pot0.png';
import potImgPath1 from '../assets/pot/pot1.png';
import potImgPath2 from '../assets/pot/pot2.png';
import potImgPath3 from '../assets/pot/pot3.png';
import potImgPath4 from '../assets/pot/pot4.png';
import potImgPath5 from '../assets/pot/pot5.png';
import potImgPath6 from '../assets/pot/pot6.png';
import potImgPath7 from '../assets/pot/pot7.png';
import potImgPath8 from '../assets/pot/pot8.png';
import potImgPath9 from '../assets/pot/pot9.png';

export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the element of the array corresponds to seed amount in shopping cart,
            // for plants from A to P.
            shoppingCartSeedArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // the element of the array corresponds to plant pot amount in shopping cart,
            // for plant pots from 0 to 9.
            shoppingCartPotArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // this records the pieces of lands in cart
            land: 0,
            // this records the buckets of water in cart
            water: 0,
            // this records the pieces of paper in cart
            paper: 0
        };
    }
    emptyCart = () => {
        let confirmation = window.confirm("THIS WILL EMPTY YOUR SHOPPING CART AND CANNOT BE UNDONE.\nARE YOU SURE?");
        if (confirmation) {
            this.setState({
                shoppingCartSeedArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                shoppingCartPotArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                land: 0,
                water: 0,
                paper: 0
            });
        }
    }
    calculateBill = () => {
        let seeds = reduxStore.getState().shopProducts.seeds;
        let pots = reduxStore.getState().shopProducts.pots;
        let seedsTotal = 0;
        let potsTotal = 0;
        for (let s = 0; s < seeds.length; s++) {
            seedsTotal += seeds[s].seedPrice * this.state.shoppingCartSeedArr[s];
        }
        for (let p = 0; p < pots.length; p++) {
            potsTotal += pots[p].potPrice * this.state.shoppingCartPotArr[p];
        }
        let landTotal = this.state.land * reduxStore.getState().shopProducts.land;
        let waterTotal = this.state.water / 10 * reduxStore.getState().shopProducts.water;
        let paperTotal = this.state.paper * reduxStore.getState().shopProducts.paper;
        return seedsTotal + potsTotal + landTotal + waterTotal + paperTotal;
    }
    checkOut = () => {
        let total = this.calculateBill();
        if (reduxStore.getState().userData.ownedCoins < total) {
            alert("YOU DO NOT HAVE ENOUGH COINS IN YOUR ACCOUNT!");
            return;
        }
        let confirmation = window.confirm(`CHECK OUT ALL CART ITEMS AND PAY $${total}?`);
        if (confirmation) {
            reduxStore.dispatch(changeBalance(-total));
            // add the corresponding merchandise to corresponding redux store property
            reduxStore.dispatch(changeLandMax(this.state.land));
            reduxStore.dispatch(changeWater(this.state.water));
            reduxStore.dispatch(changePaper(this.state.paper));
            let seedsTemp = this.state.shoppingCartSeedArr;
            let potsTemp = this.state.shoppingCartPotArr;
            for (let i = 0; i < seedsTemp.length; i++) {
                reduxStore.dispatch(changeOwnedSeeds(seedsTemp[i], i));
            }
            for (let i = 0; i < potsTemp.length; i++) {
                reduxStore.dispatch(changeOwnedPots(potsTemp[i], i));
            }
            // after making adjustment to the redux store user owned products section, set the current
            // component's local state to initial values.
            this.setState({
                shoppingCartSeedArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                shoppingCartPotArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                land: 0,
                water: 0,
                paper: 0
            });
        }
    }
    buyLand = () => {
        this.setState({
            land: this.state.land + 1
        });
    }
    buyWater = () => {
        this.setState({
            water: this.state.water + 10 // every time you buy 10 water together
        });
    }
    buyPaper = () => {
        this.setState({
            paper: this.state.paper + 1
        });
    }
    buySeed = (seedIndex) => {
        let newArr = [...this.state.shoppingCartSeedArr];
        newArr[seedIndex]++;
        this.setState({
            shoppingCartSeedArr: newArr
        });
    }
    buyPot = (potIndex) => {
        let newArr = [...this.state.shoppingCartPotArr];
        newArr[potIndex]++;
        this.setState({
            shoppingCartPotArr: newArr
        });
    }
    render() {
        let seedImgPathObj = {
            seedImgPath0,
            seedImgPath1,
            seedImgPath2,
            seedImgPath3,
            seedImgPath4,
            seedImgPath5,
            seedImgPath6,
            seedImgPath7,
            seedImgPath8,
            seedImgPath9,
            seedImgPath10,
            seedImgPath11,
            seedImgPath12,
            seedImgPath13,
            seedImgPath14,
            seedImgPath15
        };
        let potImgPathObj = {
            potImgPath0,
            potImgPath1,
            potImgPath2,
            potImgPath3,
            potImgPath4,
            potImgPath5,
            potImgPath6,
            potImgPath7,
            potImgPath8,
            potImgPath9
        };
        let shopSeedsArr = reduxStore.getState().shopProducts.seeds;
        let shopPotsArr = reduxStore.getState().shopProducts.pots;
        let seedsInCartArr = this.state.shoppingCartSeedArr;
        let potsInCartArr = this.state.shoppingCartPotArr;
        return (
            <div className="shop">
                <section className="buyzone">
                    <ul id="seedZone">
                        {
                            shopSeedsArr.map((item, index) => (
                                <li className="seedItem" key={index}>
                                    <div className="seedImg">
                                        <img alt="" src={seedImgPathObj["seedImgPath" + item.identity]} />
                                    </div>
                                    <div className="seedDesc">
                                        <div>Seed Name: {item.seedName}</div>
                                        <div>Price ($): {item.seedPrice}</div>
                                        <div>
                                            <button onClick={() => this.buySeed(index)}>Purchase Seed</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <ul id="potZone">
                        {
                            shopPotsArr.map((item, index) => {
                                return (
                                    <li className="potItem" key={index}>
                                        <div className="potImg">
                                            <img alt="" src={potImgPathObj["potImgPath" + item.identity]} />
                                        </div>
                                        <div className="potDesc">
                                            <div>Pot Name: {item.potName}</div>
                                            <div>Price ($): {item.potPrice}</div>
                                            <div>
                                                <button onClick={() => this.buyPot(index)}>Purchase Pot</button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <section>
                        <div id="landZone">
                            <img alt="" src={require('../assets/misc/land.jpg')} />
                            <button onClick={this.buyLand}>Buy Land</button>
                            <div className="priceLabel">${reduxStore.getState().shopProducts.land} per 1 slot</div>
                        </div>
                        <div id="waterZone">
                            <img alt="" src={require('../assets/misc/water.jpg')} />
                            <button onClick={this.buyWater}>Buy Water</button>
                            <div className="priceLabel">${reduxStore.getState().shopProducts.water} per 10 buckets</div>
                        </div>
                        <div id="paperZone">
                            <img alt="" src={require('../assets/misc/paper.jpg')} />
                            <button onClick={this.buyPaper}>Buy Paper</button>
                            <div className="priceLabel">${reduxStore.getState().shopProducts.paper} per 1 piece</div>
                        </div>
                    </section>
                </section>
                <section className="billZone">
                    <div className="sum1">
                        [ A seed: {seedsInCartArr[0]} ] [ B seed: {seedsInCartArr[1]} ] [ C seed: {seedsInCartArr[2]} ] [ D seed: {seedsInCartArr[3]} ] [ E seed: {seedsInCartArr[4]} ] [ F seed: {seedsInCartArr[5]} ] [ G seed: {seedsInCartArr[6]} ] [ H seed: {seedsInCartArr[7]} ]<br />[ I seed: {seedsInCartArr[8]} ] [ J seed: {seedsInCartArr[9]} ] [ K seed: {seedsInCartArr[10]} ] [ L seed: {seedsInCartArr[11]} ] [ M seed: {seedsInCartArr[12]} ] [ N seed: {seedsInCartArr[13]} ] [ O seed: {seedsInCartArr[14]} ] [ P seed: {seedsInCartArr[15]} ]
                    </div>
                    <div className="sum2">
                        [ pot 0: {potsInCartArr[0]} ] [ pot 1: {potsInCartArr[1]} ] [ pot 2: {potsInCartArr[2]} ] [ pot 3: {potsInCartArr[3]} ] [ pot 4: {potsInCartArr[4]} ] [ pot 5: {potsInCartArr[5]} ] [ pot 6: {potsInCartArr[6]} ] [ pot 7: {potsInCartArr[7]} ] [ pot 8: {potsInCartArr[8]} ] [ pot 9: {potsInCartArr[9]} ]<br />Extra products: ======== [ land: {this.state.land} ] ======== [ water: {this.state.water} ] ======== [ paper: {this.state.paper} ] ========
                    </div>
                    <div className="operationZone">
                        <div id="btn_left_box">
                            <button onClick={this.checkOut}>Check Out (${this.calculateBill()} in total)</button>
                        </div>
                        <div id="btn_right_box">
                            <button onClick={this.emptyCart}>Empty Shopping Cart</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}