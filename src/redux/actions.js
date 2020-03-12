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

export { removeDiary, addDiary, reverseDiaryOrder, changeBalance, changePaper };