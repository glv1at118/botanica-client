import React from 'react';
import '../styles/userboard.css';
import { reduxStore } from '../redux/store.js';
import { updateSave } from '../redux/actions.js';
import axios from 'axios';

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
        // 1.用户面板加载后，开启在线时长计时器
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
        // 2.用户面板加载成功后，向服务器发送 GET 请求，请求 /loadSave 地址。
        // 获取服务器发送过来的从 mongodb atlas cluster 云数据库读取的游戏存档。
        axios.get('/loadSave').then(function (response) {
            let cloudSavedState = response.data.userSave;
            reduxStore.dispatch(updateSave(cloudSavedState));
            console.log("Botanica save has been synchronized to cloud save!");
        }).catch(function (error) {
            console.log(error);
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }
    uploadSave = () => {
        axios.post('/uploadSave', reduxStore.getState()).then(function (res) {
            alert(res.data); // display the server response message
            alert("YOU CAN EXIT BOTANICA SAFELY NOW!");
        }).catch(function (err) {
            console.log(err);
        });
    }
    render() {
        return (
            <div id="userboard">
                <section id="userSec1">
                    <section id="userSec1_left">
                        <img src={require("../assets/user/6.png")} alt="" />
                    </section>
                    <section id="userSec1_right">
                        <section id="userSec1_right_up">Guannan001</section>
                        <section id="userSec1_right_down">Coins($): {reduxStore.getState().userData.ownedCoins}</section>
                    </section>
                </section>
                <section id="userSec2">I'm Online: {this.state.onlineMinutes} min(s) {this.state.onlineSeconds} s</section>
                <section id="userSec3">My Total Diaries: {reduxStore.getState().userData.diaryList.length}</section>
                <section id="userSec4">
                    <button onClick={this.uploadSave}>Save To Cloud</button>
                </section>
            </div>
        );
    }
}