import React from 'react';
import '../styles/diary.css';
import { reduxStore } from '../redux/store.js';
import { removeDiary, addDiary, reverseDiaryOrder } from '../redux/actions.js';

export default class Diary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reverseButtonText: "Descending",
            inputContent: "",
            textareaContent: "",
            openedDiaryTitle: "",
            openedDiaryDate: "",
            openedDiaryContent: ""
        };
    }

    reverseOrder = () => {
        if (this.state.reverseButtonText === "Descending") {
            this.setState({
                reverseButtonText: "Ascending"
            });
        } else {
            this.setState({
                reverseButtonText: "Descending"
            });
        }
        reduxStore.dispatch(reverseDiaryOrder());

    }

    readDiary = (diaryDateMilliSec) => {
        let diaryArr = reduxStore.getState().userData.diaryList;
        for (let d of diaryArr) {
            if (d.diaryDateMilliSec === diaryDateMilliSec) {
                this.setState({
                    openedDiaryTitle: d.diaryTitle,
                    openedDiaryDate: d.diaryDateStr,
                    openedDiaryContent: d.diaryContent
                });
                break;
            }
        }
    }

    deleteDiary = (diaryDateMilliSec) => {
        let confirmation = window.confirm("ARE YOU SURE TO DELETE THIS DIARY?\nTHIS OPERATION CANNOT BE UNDONE.");
        if (confirmation) {
            reduxStore.dispatch(removeDiary(diaryDateMilliSec));
        }
    }

    clearReadPane = () => {
        this.setState({
            openedDiaryTitle: "",
            openedDiaryDate: "",
            openedDiaryContent: ""
        });
    }

    submitDiary = () => {
        if (this.state.inputContent === "" || this.state.textareaContent === "") {
            alert("YOU CANNOT SUBMIT A DIARY WITHOUT A TITLE OR TEXT.");
            return;
        }

        let d = new Date();
        let str = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + "[" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";
        let diaryContentObj = {
            diaryTitle: this.state.inputContent,
            diaryDateStr: str,
            diaryDateMilliSec: Date.now(),
            diaryContent: this.state.textareaContent
        };
        let confirmation = window.confirm("ARE YOU SURE TO SUBMIT THIS DIARY?\nTHIS WILL COST YOU 1 DIARY PAPER.");
        if (confirmation) {
            if (this.state.reverseButtonText !== "Descending") {
                reduxStore.dispatch(reverseDiaryOrder());
                reduxStore.dispatch(addDiary(diaryContentObj));
                reduxStore.dispatch(reverseDiaryOrder());
            } else {
                reduxStore.dispatch(addDiary(diaryContentObj));
            }
            this.setState({
                inputContent: "",
                textareaContent: ""
            });
        }
    }

    clearWritePane = () => {
        if (this.state.inputContent === "" && this.state.textareaContent === "") {
            return;
        }
        let confirmation = window.confirm("ARE YOU SURE TO EMPTY ALL CURRENT ENTERED CONTENTS?\nTHIS OPERATION CANNOT BE UNDONE.");
        if (confirmation) {
            this.setState({
                inputContent: "",
                textareaContent: ""
            });
        }
    }

    handleInputChange = (event) => {
        this.setState({
            inputContent: event.target.value
        });
    }

    handleTextareaChange = (event) => {
        this.setState({
            textareaContent: event.target.value
        });
    }

    render() {
        let diaryArr = reduxStore.getState().userData.diaryList;
        return (
            <div className="diary">
                <section id="diaryArea1">
                    <section id="diaryArea1_left">
                        <div id="sortDiaryBox">
                            <button onClick={this.reverseOrder}>Reverse (Date {this.state.reverseButtonText})</button>
                        </div>
                        <ul id="diaryList">
                            {
                                diaryArr.map((item, index) => (
                                    <li className="diaryItem" key={index}>
                                        <div className="diaryInfo">
                                            <div className="d_title">{item.diaryTitle}</div>
                                            <div className="d_date">{item.diaryDateStr}</div>
                                        </div>
                                        <div className="diaryOps">
                                            <button onClick={() => (this.readDiary(item.diaryDateMilliSec))}>Read</button>
                                            <button onClick={() => (this.deleteDiary(item.diaryDateMilliSec))}>Delete</button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <section id="diaryArea1_right">
                        <div id="up">
                            <h2>{this.state.openedDiaryTitle}</h2><br />
                            <h4>{this.state.openedDiaryDate}</h4><br />
                            <hr /><br />
                            <p>{this.state.openedDiaryContent}</p>
                        </div>
                        <div id="down">
                            <button onClick={this.clearReadPane}>Close Book</button>
                        </div>
                    </section>
                </section>
                <section id="diaryArea2">
                    <input type="text" placeholder="write your diary title...Note: If there's no diary paper left, set this input to disabled!!!" value={this.state.inputContent} onChange={this.handleInputChange} />
                    <textarea name="diaryInput" placeholder="write a new diary...Note: If there's no diary paper left, set this textarea to disabled!!!" value={this.state.textareaContent} onChange={this.handleTextareaChange} ></textarea>
                </section>
                <section id="diaryArea3">
                    <div className="left">Diary Paper(s): 3</div>
                    <div className="right">
                        <button onClick={this.submitDiary}>Submit Diary</button>
                        <button onClick={this.clearWritePane}>Clear All Text</button>
                    </div>
                </section>
            </div>
        );
    }
}