import React from 'react';
import '../styles/logpage.css';

import appPicture from '../assets/misc/botanica.png';
import appPicture1 from '../assets/misc/botanica1.png';

import avatar0 from '../assets/user/0.png';
import avatar1 from '../assets/user/1.png';
import avatar2 from '../assets/user/2.png';
import avatar3 from '../assets/user/3.png';
import avatar4 from '../assets/user/4.png';
import avatar5 from '../assets/user/5.png';
import avatar6 from '../assets/user/6.png';
import avatar7 from '../assets/user/7.png';
import avatar8 from '../assets/user/8.png';
import avatar9 from '../assets/user/9.png';

export default class Logpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titlePicture: appPicture,
            styleObj1: {
                "display": "block"
            },
            styleObj2: {
                "display": "none"
            },
            styleObj3: {
                "backgroundColor": "#fff",
            },
            styleObj4: {
                "backgroundColor": "#ccc",
            },
            chooseAvatarBtns: [
                {
                    "backgroundColor": "#666",
                    "color": "#fff"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                },
                {
                    "backgroundColor": "#fff",
                    "color": "#000"
                }
            ],
            lastChosenBtnId: 0
        };
    }
    switchTag1 = () => {
        this.setState({
            styleObj1: {
                "display": "block"
            },
            styleObj2: {
                "display": "none"
            },
            styleObj3: {
                "backgroundColor": "#fff",
            },
            styleObj4: {
                "backgroundColor": "#ccc",
            }
        });
    }
    switchTag2 = () => {
        this.setState({
            styleObj1: {
                "display": "none"
            },
            styleObj2: {
                "display": "block"
            },
            styleObj3: {
                "backgroundColor": "#ccc",
            },
            styleObj4: {
                "backgroundColor": "#fff",
            }
        });
    }
    chooseAvatar = (id) => {
        let tempArr = [...this.state.chooseAvatarBtns];
        tempArr[this.state.lastChosenBtnId] = {
            "backgroundColor": "#fff",
            "color": "#000"
        };
        tempArr[id] = {
            "backgroundColor": "#666",
            "color": "#fff"
        };
        this.setState({
            lastChosenBtnId: id,
            chooseAvatarBtns: tempArr
        });
    }
    changeTitle = () => {
        if (this.state.titlePicture === appPicture) {
            this.setState({
                titlePicture: appPicture1
            });
        } else {
            this.setState({
                titlePicture: appPicture
            });
        }
    }
    render() {
        let avatarArr = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];
        return (
            <div id="logpage">
                <div id="appPicture">
                    <img src={this.state.titlePicture} alt="" onMouseEnter={this.changeTitle} onMouseLeave={this.changeTitle} />
                </div>
                <div id="forms">
                    <div id="tags">
                        <div className="tag1" onClick={this.switchTag1} style={this.state.styleObj3}>Log In</div>
                        <div className="tag2" onClick={this.switchTag2} style={this.state.styleObj4}>Register</div>
                    </div>
                    <div id="login" style={this.state.styleObj1}>
                        <form action="/login" method="POST">
                            <div className="loginclass1">
                                <input type="text" name="username" placeholder="Your user name" />
                            </div>
                            <div className="loginclass1">
                                <input type="password" name="password" placeholder="Your password" />
                            </div>
                            <div className="loginclass1">
                                <button>Enter Botanica</button>
                            </div>
                        </form>
                    </div>
                    <div id="register" style={this.state.styleObj2}>
                        <form action="" method="POST">
                            <div className="leftPart">
                                <div className="registerclass">
                                    <input type="text" name="username" placeholder="New user name" />
                                </div>
                                <div className="registerclass">
                                    <input type="password" name="password" placeholder="New password" />
                                </div>
                                <div className="registerclass">
                                    <button>Register Account</button>
                                </div>
                            </div>
                            <div className="rightPart">
                                <ul>
                                    {
                                        avatarArr.map((item, index) => (
                                            <li key={index}>
                                                <img src={item} alt="" className="avatarChoose" />
                                                <div className="chooseAva" onClick={() => this.chooseAvatar(index)} style={this.state.chooseAvatarBtns[index]}>Choose</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}