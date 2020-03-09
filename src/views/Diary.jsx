import React from 'react';
import '../styles/diary.css';

export default class Diary extends React.Component {
    render() {
        return (
            <div className="diary">
                <section id="diaryArea1">
                    <section id="diaryArea1_left">
                        <div id="sortDiaryBox">
                            <button>Sort By Date (Ascending)</button>
                        </div>
                        <ul id="diaryList">
                            <li className="diaryItem">
                                <div className="diaryInfo">
                                    <div className="d_title">What A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice Day</div>
                                    <div className="d_date">2020-03-09-12:35:15</div>
                                </div>
                                <div className="diaryOps">
                                    <button>Read</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                            <li className="diaryItem">
                                <div className="diaryInfo">
                                    <div className="d_title">What A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice Day</div>
                                    <div className="d_date">2020-03-09-12:35:15</div>
                                </div>
                                <div className="diaryOps">
                                    <button>Read</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                            <li className="diaryItem">
                                <div className="diaryInfo">
                                    <div className="d_title">What A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice Day</div>
                                    <div className="d_date">2020-03-09-12:35:15</div>
                                </div>
                                <div className="diaryOps">
                                    <button>Read</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                            <li className="diaryItem">
                                <div className="diaryInfo">
                                    <div className="d_title">What A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice Day</div>
                                    <div className="d_date">2020-03-09-12:35:15</div>
                                </div>
                                <div className="diaryOps">
                                    <button>Read</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                            <li className="diaryItem">
                                <div className="diaryInfo">
                                    <div className="d_title">What A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice Day</div>
                                    <div className="d_date">2020-03-09-12:35:15</div>
                                </div>
                                <div className="diaryOps">
                                    <button>Read</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                            <li className="diaryItem">
                                <div className="diaryInfo">
                                    <div className="d_title">What A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice DayWhat A Nice Day</div>
                                    <div className="d_date">2020-03-09-12:35:15</div>
                                </div>
                                <div className="diaryOps">
                                    <button>Read</button>
                                    <button>Delete</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section id="diaryArea1_right">
                        <div id="up">
                            <h2>The Diary Title Here The Diary Title Here The Diary Title Here The Diary Title Here The Diary Title Here The Diary Title Here </h2><br />
                            <h4>A Diary Date</h4><br />
                            <hr /><br />
                            <p>The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx The diary content here...xxx </p>
                        </div>
                        <div id="down">
                            <button>Close Book</button>
                        </div>
                    </section>
                </section>
                <section id="diaryArea2">
                    <input type="text" placeholder="write your diary title...Note: If there's no diary paper left, set this input to disabled!!!" />
                    <textarea name="diaryInput" placeholder="write a new diary...Note: If there's no diary paper left, set this textarea to disabled!!!"></textarea>
                </section>
                <section id="diaryArea3">
                    <div className="left">Diary Paper(s): 3</div>
                    <div className="right">
                        <button>Submit Diary</button>
                        <button>Clear All Text</button>
                    </div>
                </section>
            </div>
        );
    }
}