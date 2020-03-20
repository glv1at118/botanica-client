import React from "react";
import '../styles/encyc.css';

export default class Encyc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeText: "Welcome To Botanica, A Plants Paradise created with React.js! ",
            rollingTimer: -1
        };
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
    render() {
        return (
            <div id="encyc">
                <h4 className="title">{this.state.welcomeText}</h4>
                <h4 className="background">Botanica Introduction</h4>
                <p className="background">Botanica is a javascript web application that I developed using the React.js tool sets in which its users can perform multiple fun interactive activities. Typical activities may include planting vegetation, taking care of the vegetation, selling harvested fruits to earn in-app coins and later use it to purchase seeds, flower pots, and in-app consumables like water and paper. In Botanica, the user can tend their plants, visit the warehouse and shop, and write their memories and thoughts down to the diaries. Botanica's application data is saved automatically every time when the user exits, so that the next time the user can start just from where they left off last time.</p>
                <h4 className="features">Highlighted Features</h4>
                <ol className="features">
                    <li>
                        Every plant in Botanica is dynamic. They will actually grow from a seed till they reach their ripeness and then produce fruits continuously. If it runs out of hydration it will actually die and get removed from the garden. The plants need your care often!
                    </li>
                    <li>
                        Each plant in Botanica comes with a speciality. You will never know its speciality until you plant it in the garden. The speciality determines what the plant can offer you real-time. May it tell you a joke, get you the latest news world-wide, give you a tomorrow's weather forecast, or simply talk with you briefly? It's your time to discover. Each plant will automatically pop up a dialog bubble when it "releases its ability".
                    </li>
                    <li>
                        Writing a diary is not free in Botanica (Why? Because the paper is scarce in the world of Botanica!). Your plants is your source of in-app income. Harvest more fruits and sell them later to gain coins. Then you can consider to buy some diary paper to write down the important things.
                    </li>
                    <li>
                        Abundance of choices: Up to 16 types of plant options, 10 types of vegetation pot options, and 4 kinds of plant-owned specialities, which comes to a total number of 16 × 10 × 4 = 640 creature combinations! The only limitation is your imagination!
                    </li>
                </ol>
            </div>
        );
    }
}