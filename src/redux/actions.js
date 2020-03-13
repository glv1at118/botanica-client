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

function changeUsedLand(usedLandAdjustment) {
    return {
        type: "CHANGE_USED_LAND",
        usedLandAdjustment
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

export { removeDiary, addDiary, reverseDiaryOrder, changeBalance, changePaper, emptyAllFruits, changeOwnedSeeds, changeOwnedPots, changeOwnedFruits, changeWater, changeLandMax, changeUsedLand };