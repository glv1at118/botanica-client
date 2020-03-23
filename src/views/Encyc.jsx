import React from "react";
import '../styles/encyc.css';

export default class Encyc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeText: "Welcome To Botanica, A Plants Paradise created with React.js! ",
            rollingTimer: -1
        };
        this.welcomeTextRollingRunner = this.welcomeTextRollingRunner.bind(this);
        this.endText = this.endText.bind(this);
    }
    componentDidMount() {
        this.welcomeTextRollingRunner();
    }
    componentWillUnmount() {
        clearInterval(this.state.rollingTimer);
    }
    welcomeTextRollingRunner() {
        let timer = setInterval(() => {
            let subStrHead = this.state.welcomeText.substring(0, 1);
            let subStrTail = this.state.welcomeText.substring(1);
            let newStr = subStrTail.concat(subStrHead);
            this.setState({
                welcomeText: newStr
            });
        }, 250);
        this.setState({
            rollingTimer: timer
        });
    }
    endText() {
        clearInterval(this.state.rollingTimer);
    }
    render() {
        return (
            <div id="encyc">
                <h4 className="title" onMouseEnter={this.endText} onMouseLeave={this.welcomeTextRollingRunner}>{this.state.welcomeText}</h4>
                <h4 className="background">Botanica Introduction</h4>
                <p className="background">Botanica is a javascript web application that I developed using the React.js tool sets in which its users can perform multiple fun interactive activities. Typical activities may include <strong>planting vegetation, taking care of the vegetation, selling harvested fruits to earn in-app coins and later use it to purchase seeds, flower pots, and in-app consumables like water and paper.</strong> In Botanica, the user can <strong>tend their plants, visit the warehouse and shop, and write memories and thoughts down to the diaries.</strong> Botanica's application data is saved automatically every time when the user exits, so that the next time the user can start just from where they left off.</p>
                <h4 className="features">Highlighted Features</h4>
                <ol className="features">
                    <li>
                        <strong>Every plant in Botanica is dynamic.</strong> They will actually grow from a seed till they reach their ripeness and then produce fruits continuously. If it runs out of hydration it will actually die and get removed from the garden. The plants need your care often.
                    </li>
                    <li>
                        <strong>Each plant in Botanica comes with a speciality.</strong> You will never know its speciality until you plant it in the garden. The speciality determines what the plant can offer you real-time. May it tell you a joke, get you the latest news world-wide, give you a tomorrow's weather forecast, or simply talk with you briefly? It's your time to discover. Each plant will automatically pop up a dialog bubble when it "releases its ability".
                    </li>
                    <li>
                        Writing a diary is not free in Botanica (Because the paper resource is scarce in the world of Botanica). Your plants is your mere source of in-app income. Harvest more fruits and sell them later to gain coins. Then you can consider to buy some diary paper to write down the important things.
                    </li>
                    <li>
                        Abundance of choices: Up to 16 types of plant options, 10 types of vegetation pot options, and 4 kinds of plant-owned specialities, which comes to a total number of <strong>16 × 10 × 4 = 640 creature combinations.</strong> The only limitation is your imagination!
                    </li>
                </ol>
                <h4 className="techniques">Project Techniques</h4>
                <p className="techniques"><strong>Javascript (ES5/ES6), HTML5, CSS3, React, React-Redux, React-Router-Dom, Redux, Redux-Thunk, Axios, Lodash.</strong></p>
                <h4 className="author">About The Author</h4>
                <p className="author">I am Guannan. I'm a javascript programmer who likes to develop fun things, with proficiency in React.js and Vue.js, as well as back-end technologies including Node.js, Express.js, and Mongodb. <strong>The purpose of writing this project is to accomplish an interesting idea in my mind for quite a long time</strong>, as well as to hone the practical skills. The major focus of this project is about the "logic and functionality", which means I did not invest a lot of time in the styling and art designs.</p>
                <h4 className="links">My Other projects</h4>
                <ol className="links">
                    <li>
                        <strong>A Blog Project</strong>: This is a fully functional blog project that I developed for a start-up company using <strong>Vue, Vue-Router, and Vuex</strong>. <a href="https://github.com/glv1at118/blog-project">(See in Github)</a>
                    </li>
                    <li>
                        <strong>Student Profile Board</strong>: This is a simple React application visualizing the profiles of a list of students, with some interactions. <a href="https://github.com/glv1at118/student-profile-board">(See in Github)</a>
                    </li>
                    <li>
                        <strong>Avoid The Bricks</strong>: This is an interesting game developed with javascript and <strong>jQuery</strong>. You will need to control Tom to avoid the falling bricks and survive as long as possible. <a href="https://github.com/glv1at118/Proj-Avoid-the-Bricks">(See in Github)</a>
                    </li>
                </ol>
            </div>
        );
    }
}