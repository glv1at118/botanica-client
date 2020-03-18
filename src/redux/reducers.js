import { initialState } from './initialState.js';
import clonedeep from 'lodash.clonedeep';

function myReducer(previousState = initialState, action) {
    let nextState = clonedeep(previousState);
    let diaryArr = nextState.userData.diaryList;
    switch (action.type) {
        case "REMOVE_DIARY":
            for (let i = 0; i < diaryArr.length; i++) {
                if (diaryArr[i].diaryDateMilliSec === action.diaryDateMilliSec) {
                    diaryArr.splice(i, 1);
                    break;
                }
            }
            return nextState;
        case "ADD_DIARY":
            diaryArr.unshift(action.diaryContentObj);
            return nextState;
        case "REVERSE_DIARY_ORDER":
            diaryArr.reverse();
            return nextState;
        case "CHANGE_BALANCE":
            nextState.userData.ownedCoins += action.balanceAdjustment;
            return nextState;
        case "CHANGE_PAPER":
            nextState.userData.ownedPaper += action.paperAdjustment;
            return nextState;
        case "CHANGE_WATER":
            nextState.userData.ownedWater += action.waterAdjustment;
            return nextState;
        case "CHANGE_LAND_MAX":
            nextState.userData.ownedLandMax += action.landMaxAdjustment;
            return nextState;
        case "CHANGE_OWNED_SEEDS":
            nextState.userData.ownedSeeds[action.index] += action.adjustValue;
            return nextState;
        case "CHANGE_OWNED_POTS":
            nextState.userData.ownedPots[action.index] += action.adjustValue;
            return nextState;
        case "CHANGE_OWNED_FRUITS":
            nextState.userData.ownedFruits[action.index] += action.adjustValue;
            return nextState;
        case "EMPTY_ALL_FRUITS":
            nextState.userData.ownedFruits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            return nextState;
        case "INCREASE_GROWING_TIME":
            nextState.userData.plantPotList[action.ownedPlantId].growingTime++;
            return nextState;
        case "RESET_GROWING_TIME":
            nextState.userData.plantPotList[action.ownedPlantId].growingTime = 0;
            return nextState;
        case "INCREASE_LIFE_STAGE_POINTER":
            if (nextState.userData.plantPotList[action.ownedPlantId].lifeStagePointer >= 4) {
                return nextState;
            }
            nextState.userData.plantPotList[action.ownedPlantId].lifeStagePointer++;
            return nextState;
        case "DECREASE_HYDRATION":
            if (nextState.userData.plantPotList[action.ownedPlantId].currentHydration <= 0) {
                nextState.userData.plantPotList[action.ownedPlantId].currentHydration = 0;
                return nextState;
            } else {
                nextState.userData.plantPotList[action.ownedPlantId].currentHydration--;
                return nextState;
            }
        case "INCREASE_HYDRATION":
            nextState.userData.plantPotList[action.ownedPlantId].currentHydration += action.hydrationAmount;
            return nextState;
        case "REMOVE_PLANT":
            nextState.userData.plantPotList.splice(action.ownedPlantId, 1);
            return nextState;
        case "INCREASE_CURR_YIELD":
            nextState.userData.plantPotList[action.ownedPlantId].currentYield++;
            return nextState;
        case "CLEAR_CURR_YIELD":
            nextState.userData.plantPotList[action.ownedPlantId].currentYield = 0;
            return nextState;
        default:
            return previousState;
    }
}

export default myReducer;