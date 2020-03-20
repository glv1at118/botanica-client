import axios from 'axios';

function removeDiary(diaryDateMilliSec) {
    return {
        type: "REMOVE_DIARY",
        diaryDateMilliSec
    };
}

function addDiary(diaryContentObj) {
    return {
        type: "ADD_DIARY",
        diaryContentObj
    };
}

function reverseDiaryOrder() {
    return {
        type: "REVERSE_DIARY_ORDER"
    };
}

function changeBalance(balanceAdjustment) {
    return {
        type: "CHANGE_BALANCE",
        balanceAdjustment
    };
}

function changePaper(paperAdjustment) {
    return {
        type: "CHANGE_PAPER",
        paperAdjustment
    };
}

function changeWater(waterAdjustment) {
    return {
        type: "CHANGE_WATER",
        waterAdjustment
    };
}

function changeLandMax(landMaxAdjustment) {
    return {
        type: "CHANGE_LAND_MAX",
        landMaxAdjustment
    };
}

function changeOwnedSeeds(adjustValue, index) {
    return {
        type: "CHANGE_OWNED_SEEDS",
        adjustValue: adjustValue,
        index: index
    };
}

function changeOwnedPots(adjustValue, index) {
    return {
        type: "CHANGE_OWNED_POTS",
        adjustValue: adjustValue,
        index: index
    };
}

function changeOwnedFruits(adjustValue, index) {
    return {
        type: "CHANGE_OWNED_FRUITS",
        adjustValue: adjustValue,
        index: index
    };
}

function emptyAllFruits() {
    return {
        type: "EMPTY_ALL_FRUITS"
    };
}

function increaseGrowingTime(ownedPlantId) {
    return {
        type: "INCREASE_GROWING_TIME",
        ownedPlantId: ownedPlantId
    };
}

function resetGrowingTime(ownedPlantId) {
    return {
        type: "RESET_GROWING_TIME",
        ownedPlantId: ownedPlantId
    };
}

function increaseLifeStagePointer(ownedPlantId) {
    return {
        type: "INCREASE_LIFE_STAGE_POINTER",
        ownedPlantId: ownedPlantId
    }
}

function decreaseHydration(ownedPlantId) {
    return {
        type: "DECREASE_HYDRATION",
        ownedPlantId
    };
}

function increaseHydration(hydrationAmount, ownedPlantId) {
    return {
        type: "INCREASE_HYDRATION",
        hydrationAmount,
        ownedPlantId
    };
}

function removePlant(ownedPlantId) {
    return {
        type: "REMOVE_PLANT",
        ownedPlantId: ownedPlantId
    };
}

function addNewPlant(newPlantPotInstance) {
    return {
        type: "ADD_NEW_PLANT",
        newPlantPotInstance: newPlantPotInstance
    };
}

function increaseCurrYield(ownedPlantId) {
    return {
        type: "INCREASE_CURR_YIELD",
        ownedPlantId: ownedPlantId
    };
}

function clearCurrYield(ownedPlantId) {
    return {
        type: "CLEAR_CURR_YIELD",
        ownedPlantId: ownedPlantId
    };
}

// this is sync action creator triggering update of the messageArray
// not to be manually invoked, it's only used by the loadMsgArrAsync action creator below
// so it's not exported
function updateMsgArr(msgArr, ownedPlantId) {
    return {
        type: "UPDATE_MSG_ARR",
        msgArr: msgArr,
        ownedPlantId: ownedPlantId
    };
}

// thunk action creator function, returns a thunk function, accepting dispatch and getState
// when dispatching this action creator, it will make GET request
function loadMsgArrAsync(ownedPlantId) {
    return function (dispatch, getState) {
        if (getState().userData.plantPotList[ownedPlantId].speciality === "chat") {
            // special ability is chatting, retrieving pre-stored chat messages in redux store
            let greetingsPresetsArr = getState().greetingsPresets;
            dispatch(updateMsgArr(greetingsPresetsArr, ownedPlantId));
        } else if (getState().userData.plantPotList[ownedPlantId].speciality === "news") {
            // special ability is showing the world latest news
            let url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=2d8632aa8766423bb537fd74092883c8';
            axios.get(url).then((response) => {
                let articleArr = response.data.articles;
                dispatch(updateMsgArr(articleArr, ownedPlantId));
            }).catch((error) => {
                console.log(error);
            });
        } else if (getState().userData.plantPotList[ownedPlantId].speciality === "weather") {
            // special ability is to show the weather at Toronto
            let url = "http://api.openweathermap.org/data/2.5/forecast?id=6167865&appid=0896d1641a623758aa32f46a077d07aa";
            axios.get(url).then((response) => {
                let foreCastArr = response.data.list;
                dispatch(updateMsgArr(foreCastArr, ownedPlantId));
            }).catch((error) => {
                console.log(error);
            });
        } else if (getState().userData.plantPotList[ownedPlantId].speciality === "joke") {
            // special ability is to tell some programmer's jokes
            let url = "https://official-joke-api.appspot.com/jokes/ten";
            axios.get(url).then((response) => {
                let jokesArr = response.data;
                dispatch(updateMsgArr(jokesArr, ownedPlantId));
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}

export { removeDiary, addDiary, reverseDiaryOrder, changeBalance, changePaper, emptyAllFruits, changeOwnedSeeds, changeOwnedPots, changeOwnedFruits, changeWater, changeLandMax, increaseGrowingTime, resetGrowingTime, increaseLifeStagePointer, decreaseHydration, increaseHydration, removePlant, increaseCurrYield, clearCurrYield, addNewPlant, loadMsgArrAsync };