import React from 'react';
import '../styles/warehouse.css';
import { reduxStore } from '../redux/store.js';

import fruitPath0 from '../assets/plant/plant_A_fruit.png';
import fruitPath1 from '../assets/plant/plant_B_fruit.png';
import fruitPath2 from '../assets/plant/plant_C_fruit.png';
import fruitPath3 from '../assets/plant/plant_D_fruit.png';
import fruitPath4 from '../assets/plant/plant_E_fruit.png';
import fruitPath5 from '../assets/plant/plant_F_fruit.png';
import fruitPath6 from '../assets/plant/plant_G_fruit.png';
import fruitPath7 from '../assets/plant/plant_H_fruit.png';
import fruitPath8 from '../assets/plant/plant_I_fruit.png';
import fruitPath9 from '../assets/plant/plant_J_fruit.png';
import fruitPath10 from '../assets/plant/plant_K_fruit.png';
import fruitPath11 from '../assets/plant/plant_L_fruit.png';
import fruitPath12 from '../assets/plant/plant_M_fruit.png';
import fruitPath13 from '../assets/plant/plant_N_fruit.png';
import fruitPath14 from '../assets/plant/plant_O_fruit.png';
import fruitPath15 from '../assets/plant/plant_P_fruit.png';

import seedPath0 from '../assets/plant/plant_A_seed.png';
import seedPath1 from '../assets/plant/plant_B_seed.png';
import seedPath2 from '../assets/plant/plant_C_seed.png';
import seedPath3 from '../assets/plant/plant_D_seed.png';
import seedPath4 from '../assets/plant/plant_E_seed.png';
import seedPath5 from '../assets/plant/plant_F_seed.png';
import seedPath6 from '../assets/plant/plant_G_seed.png';
import seedPath7 from '../assets/plant/plant_H_seed.png';
import seedPath8 from '../assets/plant/plant_I_seed.png';
import seedPath9 from '../assets/plant/plant_J_seed.png';
import seedPath10 from '../assets/plant/plant_K_seed.png';
import seedPath11 from '../assets/plant/plant_L_seed.png';
import seedPath12 from '../assets/plant/plant_M_seed.png';
import seedPath13 from '../assets/plant/plant_N_seed.png';
import seedPath14 from '../assets/plant/plant_O_seed.png';
import seedPath15 from '../assets/plant/plant_P_seed.png';

import potPath0 from '../assets/pot/pot0.png';
import potPath1 from '../assets/pot/pot1.png';
import potPath2 from '../assets/pot/pot2.png';
import potPath3 from '../assets/pot/pot3.png';
import potPath4 from '../assets/pot/pot4.png';
import potPath5 from '../assets/pot/pot5.png';
import potPath6 from '../assets/pot/pot6.png';
import potPath7 from '../assets/pot/pot7.png';
import potPath8 from '../assets/pot/pot8.png';
import potPath9 from '../assets/pot/pot9.png';

export default class Warehouse extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let ownedSeeds = reduxStore.getState().userData.ownedSeeds;
        let ownedPots = reduxStore.getState().userData.ownedPots;
        let ownedFruits = reduxStore.getState().userData.ownedFruits;
        let plantPresets = reduxStore.getState().plantPresets;
        let potPresets = reduxStore.getState().potPresets;
        let fruitPathObj = {
            fruitPath0,
            fruitPath1,
            fruitPath2,
            fruitPath3,
            fruitPath4,
            fruitPath5,
            fruitPath6,
            fruitPath7,
            fruitPath8,
            fruitPath9,
            fruitPath10,
            fruitPath11,
            fruitPath12,
            fruitPath13,
            fruitPath14,
            fruitPath15
        };
        let seedPathObj = {
            seedPath0,
            seedPath1,
            seedPath2,
            seedPath3,
            seedPath4,
            seedPath5,
            seedPath6,
            seedPath7,
            seedPath8,
            seedPath9,
            seedPath10,
            seedPath11,
            seedPath12,
            seedPath13,
            seedPath14,
            seedPath15
        };
        let potPathObj = {
            potPath0,
            potPath1,
            potPath2,
            potPath3,
            potPath4,
            potPath5,
            potPath6,
            potPath7,
            potPath8,
            potPath9
        };
        return (
            <div className="warehouse">
                <div className="summaryBar">
                    <button>Sell All Fruits In Stock And Earn $800</button>
                </div>
                <div className="titleBar">
                    <div className="leftTitle">Fruits In Stock (325)</div>
                    <div className="rightTitle">Seeds In Stock (45)</div>
                </div>
                <div className="placeholder">
                    <ul className="leftHouse">
                        {
                            ownedFruits.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="child1">
                                            <img alt="" src={require('../assets/plant/plant_M_fruit.png')} />
                                            <div className="count">{item}</div>
                                        </div>
                                        <div className="child2">
                                            <div>Fruit Name: Guannan Tree's fruit</div>
                                            <div>Original Name: {plantPresets[index]}'s fruit</div>
                                            <div>Value Per Unit ($): 10</div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                        {/* <li>
                            <div className="child1">
                                <img alt="" src={require('../assets/plant/plant_M_fruit.png')} />
                                <div className="count">350</div>
                            </div>
                            <div className="child2">
                                <div>Fruit Name: Guannan Tree's fruit</div>
                                <div>Original Name: Plant_A's fruit</div>
                                <div>Value Per Unit ($): 10</div>
                            </div>
                        </li> */}
                    </ul>
                    <ul className="rightHouse">
                        <li>
                            <div className="child1">
                                <img alt="" src={require('../assets/plant/plant_M_seed.png')} />
                                <div className="count">350</div>
                            </div>
                            <div className="child2">
                                <div>Seed Name: Plant_A's Seed</div>
                                <div>Life Stage (Seed-Sprout): 10mins</div>
                                <div>Life Stage (Sprout-Sapling): 10mins</div>
                                <div>Life Stage (Sapling-Premature): 10mins</div>
                                <div>Life Stage (Premature-Ripe): 10mins</div>
                                <div>Fruits Production Cycle: 20mins</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="ownedPot">
                    <div className="ownedPotTitle">My Owned Pots</div>
                    <ul>
                        <li>
                            <img alt="" src={require('../assets/pot/pot8.png')} />
                            <div className="ownedPotDesc">Pot 8</div>
                            <div className="count">350</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}