import React from 'react';
import { reduxStore } from '../redux/store.js';

import plant_A_0 from "../assets/plant/plant_A_0.png";
import plant_A_1 from "../assets/plant/plant_A_1.png";
import plant_A_2 from "../assets/plant/plant_A_2.png";
import plant_A_3 from "../assets/plant/plant_A_3.png";
import plant_A_4 from "../assets/plant/plant_A_4.png";
import plant_B_0 from "../assets/plant/plant_B_0.png";
import plant_B_1 from "../assets/plant/plant_B_1.png";
import plant_B_2 from "../assets/plant/plant_B_2.png";
import plant_B_3 from "../assets/plant/plant_B_3.png";
import plant_B_4 from "../assets/plant/plant_B_4.png";
import plant_C_0 from "../assets/plant/plant_C_0.png";
import plant_C_1 from "../assets/plant/plant_C_1.png";
import plant_C_2 from "../assets/plant/plant_C_2.png";
import plant_C_3 from "../assets/plant/plant_C_3.png";
import plant_C_4 from "../assets/plant/plant_C_4.png";
import plant_D_0 from "../assets/plant/plant_D_0.png";
import plant_D_1 from "../assets/plant/plant_D_1.png";
import plant_D_2 from "../assets/plant/plant_D_2.png";
import plant_D_3 from "../assets/plant/plant_D_3.png";
import plant_D_4 from "../assets/plant/plant_D_4.png";
import plant_E_0 from "../assets/plant/plant_E_0.png";
import plant_E_1 from "../assets/plant/plant_E_1.png";
import plant_E_2 from "../assets/plant/plant_E_2.png";
import plant_E_3 from "../assets/plant/plant_E_3.png";
import plant_E_4 from "../assets/plant/plant_E_4.png";
import plant_F_0 from "../assets/plant/plant_F_0.png";
import plant_F_1 from "../assets/plant/plant_F_1.png";
import plant_F_2 from "../assets/plant/plant_F_2.png";
import plant_F_3 from "../assets/plant/plant_F_3.png";
import plant_F_4 from "../assets/plant/plant_F_4.png";
import plant_G_0 from "../assets/plant/plant_G_0.png";
import plant_G_1 from "../assets/plant/plant_G_1.png";
import plant_G_2 from "../assets/plant/plant_G_2.png";
import plant_G_3 from "../assets/plant/plant_G_3.png";
import plant_G_4 from "../assets/plant/plant_G_4.png";
import plant_H_0 from "../assets/plant/plant_H_0.png";
import plant_H_1 from "../assets/plant/plant_H_1.png";
import plant_H_2 from "../assets/plant/plant_H_2.png";
import plant_H_3 from "../assets/plant/plant_H_3.png";
import plant_H_4 from "../assets/plant/plant_H_4.png";
import plant_I_0 from "../assets/plant/plant_I_0.png";
import plant_I_1 from "../assets/plant/plant_I_1.png";
import plant_I_2 from "../assets/plant/plant_I_2.png";
import plant_I_3 from "../assets/plant/plant_I_3.png";
import plant_I_4 from "../assets/plant/plant_I_4.png";
import plant_J_0 from "../assets/plant/plant_J_0.png";
import plant_J_1 from "../assets/plant/plant_J_1.png";
import plant_J_2 from "../assets/plant/plant_J_2.png";
import plant_J_3 from "../assets/plant/plant_J_3.png";
import plant_J_4 from "../assets/plant/plant_J_4.png";
import plant_K_0 from "../assets/plant/plant_K_0.png";
import plant_K_1 from "../assets/plant/plant_K_1.png";
import plant_K_2 from "../assets/plant/plant_K_2.png";
import plant_K_3 from "../assets/plant/plant_K_3.png";
import plant_K_4 from "../assets/plant/plant_K_4.png";
import plant_L_0 from "../assets/plant/plant_L_0.png";
import plant_L_1 from "../assets/plant/plant_L_1.png";
import plant_L_2 from "../assets/plant/plant_L_2.png";
import plant_L_3 from "../assets/plant/plant_L_3.png";
import plant_L_4 from "../assets/plant/plant_L_4.png";
import plant_M_0 from "../assets/plant/plant_M_0.png";
import plant_M_1 from "../assets/plant/plant_M_1.png";
import plant_M_2 from "../assets/plant/plant_M_2.png";
import plant_M_3 from "../assets/plant/plant_M_3.png";
import plant_M_4 from "../assets/plant/plant_M_4.png";
import plant_N_0 from "../assets/plant/plant_N_0.png";
import plant_N_1 from "../assets/plant/plant_N_1.png";
import plant_N_2 from "../assets/plant/plant_N_2.png";
import plant_N_3 from "../assets/plant/plant_N_3.png";
import plant_N_4 from "../assets/plant/plant_N_4.png";
import plant_O_0 from "../assets/plant/plant_O_0.png";
import plant_O_1 from "../assets/plant/plant_O_1.png";
import plant_O_2 from "../assets/plant/plant_O_2.png";
import plant_O_3 from "../assets/plant/plant_O_3.png";
import plant_O_4 from "../assets/plant/plant_O_4.png";
import plant_P_0 from "../assets/plant/plant_P_0.png";
import plant_P_1 from "../assets/plant/plant_P_1.png";
import plant_P_2 from "../assets/plant/plant_P_2.png";
import plant_P_3 from "../assets/plant/plant_P_3.png";
import plant_P_4 from "../assets/plant/plant_P_4.png";

import '../styles/plantcard.css';

export default class PlantCard extends React.Component {
    constructor(props) {
        super(props);
        this.retrievePlantPresetInfo = this.retrievePlantPresetInfo.bind(this);
    }
    retrievePlantPresetInfo() {
        let plantName = "plant" + this.props.plantName.split(" ")[1];
        let currentPlantPreset = reduxStore.getState().plantPresets[plantName];
        return currentPlantPreset;
    }
    render() {
        let plantImgPathObj = {
            "plant_A_0": plant_A_0,
            "plant_A_1": plant_A_1,
            "plant_A_2": plant_A_2,
            "plant_A_3": plant_A_3,
            "plant_A_4": plant_A_4,
            "plant_B_0": plant_B_0,
            "plant_B_1": plant_B_1,
            "plant_B_2": plant_B_2,
            "plant_B_3": plant_B_3,
            "plant_B_4": plant_B_4,
            "plant_C_0": plant_C_0,
            "plant_C_1": plant_C_1,
            "plant_C_2": plant_C_2,
            "plant_C_3": plant_C_3,
            "plant_C_4": plant_C_4,
            "plant_D_0": plant_D_0,
            "plant_D_1": plant_D_1,
            "plant_D_2": plant_D_2,
            "plant_D_3": plant_D_3,
            "plant_D_4": plant_D_4,
            "plant_E_0": plant_E_0,
            "plant_E_1": plant_E_1,
            "plant_E_2": plant_E_2,
            "plant_E_3": plant_E_3,
            "plant_E_4": plant_E_4,
            "plant_F_0": plant_F_0,
            "plant_F_1": plant_F_1,
            "plant_F_2": plant_F_2,
            "plant_F_3": plant_F_3,
            "plant_F_4": plant_F_4,
            "plant_G_0": plant_G_0,
            "plant_G_1": plant_G_1,
            "plant_G_2": plant_G_2,
            "plant_G_3": plant_G_3,
            "plant_G_4": plant_G_4,
            "plant_H_0": plant_H_0,
            "plant_H_1": plant_H_1,
            "plant_H_2": plant_H_2,
            "plant_H_3": plant_H_3,
            "plant_H_4": plant_H_4,
            "plant_I_0": plant_I_0,
            "plant_I_1": plant_I_1,
            "plant_I_2": plant_I_2,
            "plant_I_3": plant_I_3,
            "plant_I_4": plant_I_4,
            "plant_J_0": plant_J_0,
            "plant_J_1": plant_J_1,
            "plant_J_2": plant_J_2,
            "plant_J_3": plant_J_3,
            "plant_J_4": plant_J_4,
            "plant_K_0": plant_K_0,
            "plant_K_1": plant_K_1,
            "plant_K_2": plant_K_2,
            "plant_K_3": plant_K_3,
            "plant_K_4": plant_K_4,
            "plant_L_0": plant_L_0,
            "plant_L_1": plant_L_1,
            "plant_L_2": plant_L_2,
            "plant_L_3": plant_L_3,
            "plant_L_4": plant_L_4,
            "plant_M_0": plant_M_0,
            "plant_M_1": plant_M_1,
            "plant_M_2": plant_M_2,
            "plant_M_3": plant_M_3,
            "plant_M_4": plant_M_4,
            "plant_N_0": plant_N_0,
            "plant_N_1": plant_N_1,
            "plant_N_2": plant_N_2,
            "plant_N_3": plant_N_3,
            "plant_N_4": plant_N_4,
            "plant_O_0": plant_O_0,
            "plant_O_1": plant_O_1,
            "plant_O_2": plant_O_2,
            "plant_O_3": plant_O_3,
            "plant_O_4": plant_O_4,
            "plant_P_0": plant_P_0,
            "plant_P_1": plant_P_1,
            "plant_P_2": plant_P_2,
            "plant_P_3": plant_P_3,
            "plant_P_4": plant_P_4
        };
        let result = this.retrievePlantPresetInfo();
        let plantCategory = result.name.split(" ")[1];
        let imgPath = "plant_" + plantCategory + "_1";
        let imgSrc = plantImgPathObj[imgPath];
        return (
            <div className="plantcard">
                <div className="plantInfo">
                    <div className="textInfo"><b><u>{this.props.customName}</u></b></div>
                    <div className="textInfo"><b>Current:</b> {result.lifeStageName[1]}</div>
                    <div className="textInfo"><b>Next Stage:</b> {result.lifeStageTime[1]}</div>
                    <div className="textInfo"><b>Value:</b> {result.plantValue}</div>
                    <div className="textInfo"><b>Speciality:</b> {this.props.speciality}</div>
                    <div className="textInfo"><b>Hydration:</b> 10/{result.hydrationMax}</div>
                    <div className="textInfo"><b>Yield:</b> 35/{result.yieldMax}</div>
                    <button className="operateBtn water"><b>Water</b></button><br />
                    <button className="operateBtn harvest"><b>Harvest</b></button><br />
                    <button className="operateBtn sell"><b>Sell</b></button><br />
                </div>
                <div className="plantImg">
                    <div className="plantBody">
                        <img src={imgSrc} alt="" />
                    </div>
                    <div className="plantPot">
                        <img src={require("../assets/pot/pot2.png")} alt="" />
                    </div>
                </div>
            </div>
        );

    }
}

// react里面竟然不允许常规方式引入 img 的 src，我操你妈的！