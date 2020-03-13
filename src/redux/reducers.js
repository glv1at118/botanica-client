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
        case "CHANGE_USED_LAND":
            nextState.userData.usedLand += action.usedLandAdjustment;
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
        default:
            return previousState;
    }
}

export default myReducer;