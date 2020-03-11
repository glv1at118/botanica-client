function removeDiary(diaryDateMilliSec) {
    return {
        type: "REMOVE_DIARY",
        diaryDateMilliSec
    }
}

function addDiary(diaryContentObj) {
    return {
        type: "ADD_DIARY",
        diaryContentObj
    };
}

function reverseDiaryOrder(){
    return {
        type: "REVERSE_DIARY_ORDER"
    };
}

export { removeDiary, addDiary, reverseDiaryOrder };