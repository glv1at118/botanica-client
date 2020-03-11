import React from 'react';
import '../styles/userboard.css';

export default class UserBoard extends React.Component {
    render() {
        return (
            <div id="userboard">
                <section id="userSec1">
                    <section id="userSec1_left">
                        <img src={require("../assets/user/20.png")} alt=""/>
                    </section>
                    <section id="userSec1_right">
                        <section id="userSec1_right_up">Guannan001</section>
                        <section id="userSec1_right_down">Coins($): 100</section>
                    </section>
                </section>
                <section id="userSec2">I am online: 20 min(s)</section>
                <section id="userSec3">My Total Diaries: 12</section>
                <section id="userSec4">
                    <button>Exit Botanica</button>
                </section>
            </div>
        );
    }
}