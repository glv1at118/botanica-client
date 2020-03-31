import React from 'react';
import { reduxStore } from '../redux/store.js';
import {
    increaseGrowingTime,
    resetGrowingTime,
    increaseLifeStagePointer,
    decreaseHydration,
    increaseHydration,
    changeWater,
    removePlant,
    changeBalance,
    increaseCurrYield,
    clearCurrYield,
    changeOwnedFruits,
    loadMsgArrAsync
} from '../redux/actions.js';
import '../styles/plantcard.css';

import plant_0_0 from "../assets/plant/plant_A_0.png";
import plant_0_1 from "../assets/plant/plant_A_1.png";
import plant_0_2 from "../assets/plant/plant_A_2.png";
import plant_0_3 from "../assets/plant/plant_A_3.png";
import plant_0_4 from "../assets/plant/plant_A_4.png";
import plant_1_0 from "../assets/plant/plant_B_0.png";
import plant_1_1 from "../assets/plant/plant_B_1.png";
import plant_1_2 from "../assets/plant/plant_B_2.png";
import plant_1_3 from "../assets/plant/plant_B_3.png";
import plant_1_4 from "../assets/plant/plant_B_4.png";
import plant_2_0 from "../assets/plant/plant_C_0.png";
import plant_2_1 from "../assets/plant/plant_C_1.png";
import plant_2_2 from "../assets/plant/plant_C_2.png";
import plant_2_3 from "../assets/plant/plant_C_3.png";
import plant_2_4 from "../assets/plant/plant_C_4.png";
import plant_3_0 from "../assets/plant/plant_D_0.png";
import plant_3_1 from "../assets/plant/plant_D_1.png";
import plant_3_2 from "../assets/plant/plant_D_2.png";
import plant_3_3 from "../assets/plant/plant_D_3.png";
import plant_3_4 from "../assets/plant/plant_D_4.png";
import plant_4_0 from "../assets/plant/plant_E_0.png";
import plant_4_1 from "../assets/plant/plant_E_1.png";
import plant_4_2 from "../assets/plant/plant_E_2.png";
import plant_4_3 from "../assets/plant/plant_E_3.png";
import plant_4_4 from "../assets/plant/plant_E_4.png";
import plant_5_0 from "../assets/plant/plant_F_0.png";
import plant_5_1 from "../assets/plant/plant_F_1.png";
import plant_5_2 from "../assets/plant/plant_F_2.png";
import plant_5_3 from "../assets/plant/plant_F_3.png";
import plant_5_4 from "../assets/plant/plant_F_4.png";
import plant_6_0 from "../assets/plant/plant_G_0.png";
import plant_6_1 from "../assets/plant/plant_G_1.png";
import plant_6_2 from "../assets/plant/plant_G_2.png";
import plant_6_3 from "../assets/plant/plant_G_3.png";
import plant_6_4 from "../assets/plant/plant_G_4.png";
import plant_7_0 from "../assets/plant/plant_H_0.png";
import plant_7_1 from "../assets/plant/plant_H_1.png";
import plant_7_2 from "../assets/plant/plant_H_2.png";
import plant_7_3 from "../assets/plant/plant_H_3.png";
import plant_7_4 from "../assets/plant/plant_H_4.png";
import plant_8_0 from "../assets/plant/plant_I_0.png";
import plant_8_1 from "../assets/plant/plant_I_1.png";
import plant_8_2 from "../assets/plant/plant_I_2.png";
import plant_8_3 from "../assets/plant/plant_I_3.png";
import plant_8_4 from "../assets/plant/plant_I_4.png";
import plant_9_0 from "../assets/plant/plant_J_0.png";
import plant_9_1 from "../assets/plant/plant_J_1.png";
import plant_9_2 from "../assets/plant/plant_J_2.png";
import plant_9_3 from "../assets/plant/plant_J_3.png";
import plant_9_4 from "../assets/plant/plant_J_4.png";
import plant_10_0 from "../assets/plant/plant_K_0.png";
import plant_10_1 from "../assets/plant/plant_K_1.png";
import plant_10_2 from "../assets/plant/plant_K_2.png";
import plant_10_3 from "../assets/plant/plant_K_3.png";
import plant_10_4 from "../assets/plant/plant_K_4.png";
import plant_11_0 from "../assets/plant/plant_L_0.png";
import plant_11_1 from "../assets/plant/plant_L_1.png";
import plant_11_2 from "../assets/plant/plant_L_2.png";
import plant_11_3 from "../assets/plant/plant_L_3.png";
import plant_11_4 from "../assets/plant/plant_L_4.png";
import plant_12_0 from "../assets/plant/plant_M_0.png";
import plant_12_1 from "../assets/plant/plant_M_1.png";
import plant_12_2 from "../assets/plant/plant_M_2.png";
import plant_12_3 from "../assets/plant/plant_M_3.png";
import plant_12_4 from "../assets/plant/plant_M_4.png";
import plant_13_0 from "../assets/plant/plant_N_0.png";
import plant_13_1 from "../assets/plant/plant_N_1.png";
import plant_13_2 from "../assets/plant/plant_N_2.png";
import plant_13_3 from "../assets/plant/plant_N_3.png";
import plant_13_4 from "../assets/plant/plant_N_4.png";
import plant_14_0 from "../assets/plant/plant_O_0.png";
import plant_14_1 from "../assets/plant/plant_O_1.png";
import plant_14_2 from "../assets/plant/plant_O_2.png";
import plant_14_3 from "../assets/plant/plant_O_3.png";
import plant_14_4 from "../assets/plant/plant_O_4.png";
import plant_15_0 from "../assets/plant/plant_P_0.png";
import plant_15_1 from "../assets/plant/plant_P_1.png";
import plant_15_2 from "../assets/plant/plant_P_2.png";
import plant_15_3 from "../assets/plant/plant_P_3.png";
import plant_15_4 from "../assets/plant/plant_P_4.png";

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

export default class PlantCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlantImgPath: undefined,
            growingTimer: -1,
            waterTimer: -1,
            yieldTimer: -1,
            popUpTimer: -1,
            message: "LOADING......",
            displayObj: {
                display: "none"
            }
        };
        this.retrievePlantPotPresets = this.retrievePlantPotPresets.bind(this);
        this.waterPlant = this.waterPlant.bind(this);
        this.harvestPlant = this.harvestPlant.bind(this);
        this.sellPlant = this.sellPlant.bind(this);
        this.resetPlantImgPath = this.resetPlantImgPath.bind(this);
        this.stageGrowingTimeRunner = this.stageGrowingTimeRunner.bind(this);
        this.waterConsumptionRunner = this.waterConsumptionRunner.bind(this);
        this.yieldRunner = this.yieldRunner.bind(this);
        this.popUpDialogRunner = this.popUpDialogRunner.bind(this);
        this.closePopUpDialog = this.closePopUpDialog.bind(this);
    }
    componentDidMount() {
        // Upon component mount, set the plant's image path
        this.resetPlantImgPath();
        this.stageGrowingTimeRunner();
        this.waterConsumptionRunner();
        this.yieldRunner();
        this.popUpDialogRunner();
        // Upon component mount, make "GET" request to api urls to retrieve data
        reduxStore.dispatch(loadMsgArrAsync(this.props.creatureData.positionAtCurrentArray));
    }
    componentWillUnmount() {
        clearInterval(this.state.growingTimer);
        clearInterval(this.state.waterTimer);
        clearInterval(this.state.yieldTimer);
        clearInterval(this.state.popUpTimer);
    }
    stageGrowingTimeRunner() {
        let timer = setInterval(() => {
            let tmp1 = this.props.creatureData.growingTime;
            let tmp2 = reduxStore.getState().plantPresets[this.props.creatureData.plantIdentity].lifeStageTime[this.props.creatureData.lifeStagePointer];
            if (tmp1 >= tmp2) {
                // 此阶段生长时间达到需要的生长时间，升级到下一阶段。
                reduxStore.dispatch(resetGrowingTime(this.props.creatureData.positionAtCurrentArray));
                reduxStore.dispatch(increaseLifeStagePointer(this.props.creatureData.positionAtCurrentArray));
                // 因为生长升级到下一个阶段了，所以图片需要更新。
                this.resetPlantImgPath();
            } else {
                // 此阶段尚未达到需要的生长时间，继续生长。（植物图片不需要更新）
                reduxStore.dispatch(increaseGrowingTime(this.props.creatureData.positionAtCurrentArray));
            }
        }, 1000);
        this.setState({
            growingTimer: timer
        });
    }
    waterConsumptionRunner() {
        let timer = setInterval(() => {
            reduxStore.dispatch(decreaseHydration(this.props.creatureData.positionAtCurrentArray));
            // if the hydration level of the current plant reaches 0, then the plant "dies", remove it
            if (this.props.creatureData.currentHydration <= 0) {
                reduxStore.dispatch(removePlant(this.props.creatureData.positionAtCurrentArray));
            }
        }, 10000);
        this.setState({
            waterTimer: timer
        });
    }
    yieldRunner() {
        let creatureData = this.props.creatureData;
        let plantPreset = reduxStore.getState().plantPresets[creatureData.plantIdentity];
        let produceCycle = plantPreset.lifeStageTime[4] * 1000;
        let timer = setInterval(() => {
            if (this.props.creatureData.lifeStagePointer >= 4) {
                // the plant is mature because it reaches the final life stage, produce fruit recurrently
                if (this.props.creatureData.currentYield < plantPreset.yieldMax) {
                    // the current yield is less than the max yield limit, then produce fruit
                    reduxStore.dispatch(increaseCurrYield(this.props.creatureData.positionAtCurrentArray));
                }
            }
        }, produceCycle);
        this.setState({
            yieldTimer: timer
        });
    }
    resetPlantImgPath() {
        let plantImgPathObj = {
            plant_0_0,
            plant_0_1,
            plant_0_2,
            plant_0_3,
            plant_0_4,
            plant_1_0,
            plant_1_1,
            plant_1_2,
            plant_1_3,
            plant_1_4,
            plant_2_0,
            plant_2_1,
            plant_2_2,
            plant_2_3,
            plant_2_4,
            plant_3_0,
            plant_3_1,
            plant_3_2,
            plant_3_3,
            plant_3_4,
            plant_4_0,
            plant_4_1,
            plant_4_2,
            plant_4_3,
            plant_4_4,
            plant_5_0,
            plant_5_1,
            plant_5_2,
            plant_5_3,
            plant_5_4,
            plant_6_0,
            plant_6_1,
            plant_6_2,
            plant_6_3,
            plant_6_4,
            plant_7_0,
            plant_7_1,
            plant_7_2,
            plant_7_3,
            plant_7_4,
            plant_8_0,
            plant_8_1,
            plant_8_2,
            plant_8_3,
            plant_8_4,
            plant_9_0,
            plant_9_1,
            plant_9_2,
            plant_9_3,
            plant_9_4,
            plant_10_0,
            plant_10_1,
            plant_10_2,
            plant_10_3,
            plant_10_4,
            plant_11_0,
            plant_11_1,
            plant_11_2,
            plant_11_3,
            plant_11_4,
            plant_12_0,
            plant_12_1,
            plant_12_2,
            plant_12_3,
            plant_12_4,
            plant_13_0,
            plant_13_1,
            plant_13_2,
            plant_13_3,
            plant_13_4,
            plant_14_0,
            plant_14_1,
            plant_14_2,
            plant_14_3,
            plant_14_4,
            plant_15_0,
            plant_15_1,
            plant_15_2,
            plant_15_3,
            plant_15_4
        };
        let currentPlantImgPath = plantImgPathObj["plant_" + this.props.creatureData.plantIdentity + "_" + this.props.creatureData.lifeStagePointer];
        this.setState({
            currentPlantImgPath: currentPlantImgPath
        });
    }
    retrievePlantPotPresets() {
        let creatureData = this.props.creatureData;
        let plantPreset = reduxStore.getState().plantPresets[creatureData.plantIdentity];
        let potPreset = reduxStore.getState().potPresets[creatureData.potIdentity];
        return {
            plantPreset: plantPreset,
            potPreset: potPreset
        };
    }
    waterPlant() {
        let currentHydrationLevel = this.props.creatureData.currentHydration;
        let maxHydrationLevel = reduxStore.getState().plantPresets[this.props.creatureData.plantIdentity].hydrationMax;
        let bucketsOfWater = reduxStore.getState().userData.ownedWater;
        if (maxHydrationLevel - currentHydrationLevel <= bucketsOfWater) {
            // 消耗一部分用户拥有的水量
            reduxStore.dispatch(changeWater(currentHydrationLevel - maxHydrationLevel));
            // 为当前植物增加目前含有的水量
            reduxStore.dispatch(increaseHydration(maxHydrationLevel - currentHydrationLevel, this.props.creatureData.positionAtCurrentArray));
        } else {
            // 植物从当前含水量到满水量所需求的水量，大于用户拥有的总共水量，那么浇用户拥有的总共水量
            reduxStore.dispatch(changeWater(-bucketsOfWater));
            reduxStore.dispatch(increaseHydration(bucketsOfWater, this.props.creatureData.positionAtCurrentArray));
        }
    }
    harvestPlant() {
        let harvestAmount = this.props.creatureData.currentYield;
        let plantCategory = this.props.creatureData.plantIdentity;
        reduxStore.dispatch(changeOwnedFruits(harvestAmount, plantCategory));
        reduxStore.dispatch(clearCurrYield(this.props.creatureData.positionAtCurrentArray));
    }
    sellPlant() {
        let confirmation = window.confirm("ARE YOU SURE TO SELL THIS PLANT?");
        if (confirmation) {
            // 把收益添加到用户账户
            let presetsObj = this.retrievePlantPotPresets();
            let earn = presetsObj.plantPreset.plantValue + presetsObj.potPreset.price;
            reduxStore.dispatch(changeBalance(earn));
            // 移除植物
            reduxStore.dispatch(removePlant(this.props.creatureData.positionAtCurrentArray));
        }
    }
    popUpDialogRunner() {
        let randomPopUpInterval = Math.floor(Math.random() * 10 + 20); // from 20 - 29 integer, included
        let timer = setInterval(() => {
            let messageArray = this.props.creatureData.messageArray;
            switch (this.props.creatureData.speciality) {
                case "chat":
                    let length = messageArray.length;
                    let random = Math.floor(Math.random() * length);
                    this.setState({
                        message: messageArray[random]
                    });
                    break;
                case "news":
                    let randomPick = Math.floor(Math.random() * messageArray.length);
                    let chosenArticle = messageArray[randomPick];
                    let retrievedMsg = chosenArticle.title + ", " + chosenArticle.publishedAt + ", " + chosenArticle.source.name + ", " + chosenArticle.description;
                    this.setState({
                        message: retrievedMsg
                    });
                    break;
                case "weather":
                    let cityName = "Toronto";
                    let weatherCondition = messageArray[3].weather[0].description;
                    let foreCastTime = messageArray[3].dt_txt;
                    let temperature = Math.floor(messageArray[3].main.temp - 273.15);
                    let feelsLikeTemp = Math.floor(messageArray[3].main.feels_like - 273.15);
                    let humidity = messageArray[3].main.humidity;
                    let weatherString = cityName + ", " + foreCastTime + ", Weather Condition: " + weatherCondition + ", Temperature(c): " + temperature + ", Feels Like(c): " + feelsLikeTemp + ", Humidity: " + humidity;
                    this.setState({
                        message: weatherString
                    });
                    break;
                case "joke":
                    let len = messageArray.length;
                    let ran = Math.floor(Math.random() * len);
                    let setup = messageArray[ran].setup;
                    let punchline = messageArray[ran].punchline;
                    let combined = setup + " " + punchline;
                    this.setState({
                        message: combined
                    });
                    break;
                default:
                    this.setState({
                        message: "LOADING......"
                    });
                    break;
            }
            this.setState({
                displayObj: {
                    display: "block"
                }
            });
            setTimeout(() => {
                this.closePopUpDialog();
            }, 12000);
        }, randomPopUpInterval * 1000);
        this.setState({
            popUpTimer: timer
        });
    }
    closePopUpDialog() {
        this.setState({
            displayObj: {
                display: "none"
            }
        });
    }
    render() {
        let potImgPathObj = {
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
        let presetsObj = this.retrievePlantPotPresets();
        let currentPotImgPath = potImgPathObj["pot_" + this.props.creatureData.potIdentity];
        return (
            <div className="plantcard">
                <div className="plantInfo">
                    <div className="textInfo"><b><u>{this.props.creatureData.customName}</u></b></div>
                    <div className="textInfo"><b>Current:</b> {presetsObj.plantPreset.lifeStageName[this.props.creatureData.lifeStagePointer]}</div>
                    <div className="textInfo"><b>Next Stage:</b> {presetsObj.plantPreset.lifeStageTime[this.props.creatureData.lifeStagePointer] - this.props.creatureData.growingTime}</div>
                    <div className="textInfo"><b>Value:</b> {presetsObj.plantPreset.plantValue + presetsObj.potPreset.price}</div>
                    <div className="textInfo"><b>Speciality:</b> {this.props.creatureData.speciality}</div>
                    <div className="textInfo"><b>Hydration:</b> {this.props.creatureData.currentHydration}/{presetsObj.plantPreset.hydrationMax}</div>
                    <div className="textInfo"><b>Yield:</b> {this.props.creatureData.currentYield}/{presetsObj.plantPreset.yieldMax}</div>
                    <button className="operateBtn water" onClick={this.waterPlant}><b>Water</b></button><br />
                    <button className="operateBtn harvest" onClick={this.harvestPlant}><b>Harvest</b></button><br />
                    <button className="operateBtn sell" onClick={this.sellPlant}><b>Sell</b></button><br />
                </div>
                <div className="plantImg">
                    <div className="plantBody">
                        <img src={this.state.currentPlantImgPath} alt="" />
                    </div>
                    <div className="plantPot">
                        <img src={currentPotImgPath} alt="" />
                    </div>
                </div>
                <div className="msgPopUp" onClick={this.closePopUpDialog} style={this.state.displayObj}>{this.state.message}</div>
            </div>
        );

    }
}

/**
 * React 中在 <img /> 标签中，src有两种方式写入。第一种就是 src = {}，
 * 需要用 import 把图片的 ulr 导入，比如 import abc from '../pictures/image.png';
 * 然后写成 <img src={abc} alt=""> 注意 react 中 alt 的值不需要写值。设定空字符串即可。
 *
 * 第二种方式，就是用 require 来处理 src。require的参数 “只允许是纯粹字符串！” 不允许是变量！
 * 比如写成 <img src={require("./assets/pictures/hello.jpeg")} alt="">
 */
