import React from 'react';
import { reduxStore } from '../redux/store.js';
import { changeOwnedSeeds, changeOwnedPots, addNewPlant } from '../redux/actions.js';
import '../styles/addplantmodal.css';

import pot_0 from "../assets/pot/pot0.png";
import pot_1 from "../assets/pot/pot1.png";
import pot_2 from "../assets/pot/pot2.png";
import pot_3 from "../assets/pot/pot3.png";
import pot_4 from "../assets/pot/pot4.png";
import pot_5 from "../assets/pot/pot5.png";
import pot_6 from "../assets/pot/pot6.png";
import pot_7 from "../assets/pot/pot7.png";
import pot_8 from "../assets/pot/pot8.png";
import pot_9 from "../assets/pot/pot9.png";

import seed_0 from "../assets/plant/plant_A_seed.png";
import seed_1 from "../assets/plant/plant_B_seed.png";
import seed_2 from "../assets/plant/plant_C_seed.png";
import seed_3 from "../assets/plant/plant_D_seed.png";
import seed_4 from "../assets/plant/plant_E_seed.png";
import seed_5 from "../assets/plant/plant_F_seed.png";
import seed_6 from "../assets/plant/plant_G_seed.png";
import seed_7 from "../assets/plant/plant_H_seed.png";
import seed_8 from "../assets/plant/plant_I_seed.png";
import seed_9 from "../assets/plant/plant_J_seed.png";
import seed_10 from "../assets/plant/plant_K_seed.png";
import seed_11 from "../assets/plant/plant_L_seed.png";
import seed_12 from "../assets/plant/plant_M_seed.png";
import seed_13 from "../assets/plant/plant_N_seed.png";
import seed_14 from "../assets/plant/plant_O_seed.png";
import seed_15 from "../assets/plant/plant_P_seed.png";

export default class AddPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customPlantName: "",
            seedIdChosen: undefined,
            potIdChosen: undefined,
            seedBtnActiveIndex: undefined,
            potBtnActiveIndex: undefined
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createNewPlantPot = this.createNewPlantPot.bind(this);
        this.choosePot = this.choosePot.bind(this);
        this.chooseSeed = this.chooseSeed.bind(this);
        this.seedBtnColor = this.seedBtnColor.bind(this);
        this.potBtnColor = this.potBtnColor.bind(this);
        this.seedSelectedOrNotText = this.seedSelectedOrNotText.bind(this);
        this.potSelectedOrNotText = this.potSelectedOrNotText.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            customPlantName: event.target.value,
        });
    }
    chooseSeed(seedId, activeIndex) {
        this.setState({
            seedIdChosen: seedId,
            seedBtnActiveIndex: activeIndex
        });
    }
    choosePot(potId, activeIndex) {
        this.setState({
            potIdChosen: potId,
            potBtnActiveIndex: activeIndex
        });
    }
    seedBtnColor(id) {
        if (id === this.state.seedBtnActiveIndex) {
            return {
                "backgroundColor": "#666",
                "color": "white"
            };
        } else {
            return {
                "backgroundColor": "#ccc",
                "color": "black"
            }
        }
    }
    potBtnColor(id) {
        if (id === this.state.potBtnActiveIndex) {
            return {
                "backgroundColor": "#666",
                "color": "white"
            };
        } else {
            return {
                "backgroundColor": "#ccc",
                "color": "black"
            }
        }
    }
    seedSelectedOrNotText(id) {
        if (id === this.state.seedBtnActiveIndex) {
            return "SELECTED";
        }
        return "SELECT";
    }
    potSelectedOrNotText(id) {
        if (id === this.state.potBtnActiveIndex) {
            return "SELECTED";
        }
        return "SELECT";
    }
    handleCancel() {
        this.setState({
            customPlantName: "",
            seedIdChosen: undefined,
            potIdChosen: undefined,
            seedBtnActiveIndex: undefined,
            potBtnActiveIndex: undefined
        });
        this.props.closeModal();
    }
    createNewPlantPot() {
        // if there's no enough land available, then not allowed to create new plant pot set
        // if there's no seed selected, or if there's no pot selected, or both, then not allowed
        // if there's no custom name defined, then not allowed
        if (this.state.customPlantName === "") {
            alert("YOUR NEW PLANT MUST HAVE A CUSTOM NAME!");
            return;
        } else if (typeof this.state.seedIdChosen === "undefined" || typeof this.state.potIdChosen === "undefined") {
            alert("YOU MUST CHOOSE A PLANT SEED AND A PLANT POT FIRST!");
            return;
        } else if (reduxStore.getState().userData.plantPotList.length >= reduxStore.getState().userData.ownedLandMax) {
            alert("THERE IS NO LAND PIECE LEFT TO PLACE A NEW PLANT.\nPLEASE GO TO THE SHOP AND BUY MORE.");
            return;
        } else {
            // create a new plant
            reduxStore.dispatch(changeOwnedSeeds(-1, this.state.seedIdChosen));
            reduxStore.dispatch(changeOwnedPots(-1, this.state.potIdChosen));
            let random = Math.floor(Math.random() * 4); // 0,1,2,3
            let speciality = "";
            switch (random) {
                case 0:
                    speciality = "chat";
                    break;
                case 1:
                    speciality = "news";
                    break;
                case 2:
                    speciality = "weather";
                    break;
                case 3:
                    speciality = "joke";
                    break;
                default:
                    speciality = "chat";
                    break;
            }
            let newPlantPotItem = {
                potIdentity: this.state.potIdChosen,
                plantIdentity: this.state.seedIdChosen,
                positionAtCurrentArray: reduxStore.getState().userData.plantPotList.length,
                customName: this.state.customPlantName,
                speciality: speciality,
                lifeStagePointer: 0,
                growingTime: 0,
                currentHydration: reduxStore.getState().plantPresets[this.state.seedIdChosen].hydrationMax,
                currentYield: 0,
                messageArray: []
            };
            reduxStore.dispatch(addNewPlant(newPlantPotItem));
            this.handleCancel();
        }
    }
    render() {
        let seedsCascadeList = [];
        let potsCascadeList = [];
        let ownedSeedsCopy = [...reduxStore.getState().userData.ownedSeeds];
        let ownedPotsCopy = [...reduxStore.getState().userData.ownedPots];
        for (let x = 0; x < ownedSeedsCopy.length; x++) {
            while (ownedSeedsCopy[x] > 0) {
                seedsCascadeList.push(x);
                ownedSeedsCopy[x]--;
            }
        }
        for (let x = 0; x < ownedPotsCopy.length; x++) {
            while (ownedPotsCopy[x] > 0) {
                potsCascadeList.push(x);
                ownedPotsCopy[x]--;
            }
        }
        let seedsImgPathObj = {
            seed_0,
            seed_1,
            seed_2,
            seed_3,
            seed_4,
            seed_5,
            seed_6,
            seed_7,
            seed_8,
            seed_9,
            seed_10,
            seed_11,
            seed_12,
            seed_13,
            seed_14,
            seed_15
        };
        let potsImgPathObj = {
            pot_0,
            pot_1,
            pot_2,
            pot_3,
            pot_4,
            pot_5,
            pot_6,
            pot_7,
            pot_8,
            pot_9
        };

        return (
            <div className="addPlantBox">
                <div className="addPlantWindow">
                    <div id="newPlantNameBox">
                        <input type="text" placeholder="What's your new plant's name?" onChange={this.handleInputChange} value={this.state.customPlantName} />
                    </div>
                    <div id="midPlaceHolder">
                        <ul id="newPlantSeedBox">
                            {
                                seedsCascadeList.map((item, index) => (
                                    <li key={index}>
                                        <div className="left">
                                            <img alt="" src={seedsImgPathObj["seed_" + item]} />
                                        </div>
                                        <div className="right">
                                            <div className="up">Seed Name: {reduxStore.getState().plantPresets[item].name + "'s seed"}</div>
                                            <div className="down">
                                                <div style={this.seedBtnColor(index)} onClick={() => (this.chooseSeed(item, index))}>{this.seedSelectedOrNotText(index)}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul id="newPlantPotBox">
                            {
                                potsCascadeList.map((item, index) => (
                                    <li key={index}>
                                        <div className="left">
                                            <img alt="" src={potsImgPathObj["pot_" + item]} />
                                        </div>
                                        <div className="right">
                                            <div className="up">Pot Name: {reduxStore.getState().potPresets[item].name}</div>
                                            <div className="down">
                                                <div style={this.potBtnColor(index)} onClick={() => (this.choosePot(item, index))}>{this.potSelectedOrNotText(index)}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div id="buttonBox">
                        <button id="con" onClick={this.createNewPlantPot}>Confirm</button>
                        <button id="can" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}