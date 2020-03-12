import React from 'react';
import '../styles/userboard.css';
import { reduxStore } from '../redux/store.js';

export default class UserBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onlineMinutes: 0,
            onlineSeconds: 0,
            timerId: 0
        };
    }
    componentDidMount() {
        let timer = setInterval(() => {
            this.setState({
                onlineSeconds: this.state.onlineSeconds + 1
            });
            if (this.state.onlineSeconds >= 60) {
                this.setState({
                    onlineMinutes: this.state.onlineMinutes + 1,
                    onlineSeconds: 0
                });
            }
        }, 1000);
        this.setState({
            timerId: timer
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }
    render() {
        return (
            <div id="userboard">
                <section id="userSec1">
                    <section id="userSec1_left">
                        <img src={require("../assets/user/20.png")} alt="" />
                    </section>
                    <section id="userSec1_right">
                        <section id="userSec1_right_up">Guannan001</section>
                        <section id="userSec1_right_down">Coins($): {reduxStore.getState().userData.ownedCoins}</section>
                    </section>
                </section>
                <section id="userSec2">I'm Online: {this.state.onlineMinutes} min(s) {this.state.onlineSeconds} s</section>
                <section id="userSec3">My Total Diaries: {reduxStore.getState().userData.diaryList.length}</section>
                <section id="userSec4">
                    <button>Exit Botanica</button>
                </section>
            </div>
        );
    }
}