import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserBoard from '../components/UserBoard.jsx';
import Garden from '../views/Garden.jsx';
import Shop from '../views/Shop.jsx';
import Warehouse from '../views/Warehouse.jsx';
import Diary from '../views/Diary.jsx';
import Encyc from '../views/Encyc.jsx';

import '../styles/playground.css';

export default class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleObjArray: [
                {
                    "backgroundColor": "green",
                    "color": "yellow"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                }
            ]
        };
        this.goToGarden = this.goToGarden.bind(this);
        this.goToShop = this.goToShop.bind(this);
        this.goToWarehouse = this.goToWarehouse.bind(this);
        this.goToDiary = this.goToDiary.bind(this);
        this.goToEncyc = this.goToEncyc.bind(this);
    }
    goToGarden() {
        this.props.history.push("/playground/garden");
        this.setState({
            styleObjArray: [
                {
                    "backgroundColor": "green",
                    "color": "yellow"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                }
            ]
        });
    }
    goToWarehouse() {
        this.props.history.push("/playground/warehouse");
        this.setState({
            styleObjArray: [
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "green",
                    "color": "yellow"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                }
            ]
        });
    }
    goToShop() {
        this.props.history.push("/playground/shop");
        this.setState({
            styleObjArray: [
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "green",
                    "color": "yellow"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                }
            ]
        });
    }
    goToDiary() {
        this.props.history.push("/playground/diary");
        this.setState({
            styleObjArray: [
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "green",
                    "color": "yellow"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                }
            ]
        });
    }
    goToEncyc() {
        this.props.history.push("/playground/encyclopedia");
        this.setState({
            styleObjArray: [
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "#ffffcc",
                    "color": "black"
                },
                {
                    "backgroundColor": "green",
                    "color": "yellow"
                }
            ]
        });
    }
    render() {
        return (
            <section className="playground">
                <div className="leftPart">
                    <button className="nav_btn" onClick={this.goToGarden} style={this.state.styleObjArray[0]}>Garden</button>
                    <button className="nav_btn" onClick={this.goToWarehouse} style={this.state.styleObjArray[1]}>Warehouse</button>
                    <button className="nav_btn" onClick={this.goToShop} style={this.state.styleObjArray[2]}>Shop</button>
                    <button className="nav_btn" onClick={this.goToDiary} style={this.state.styleObjArray[3]}>Diary</button>
                    <button className="nav_btn" onClick={this.goToEncyc} style={this.state.styleObjArray[4]}>Encyclopedia</button>
                    <UserBoard></UserBoard>
                </div>
                <div className="rightPart">
                    <Switch>
                        <Route path="/playground/garden" component={Garden}></Route>
                        <Route path="/playground/warehouse" component={Warehouse}></Route>
                        <Route path="/playground/shop" component={Shop}></Route>
                        <Route path="/playground/diary" component={Diary}></Route>
                        <Route path="/playground/encyclopedia" component={Encyc}></Route>
                        <Redirect to="/playground/garden"></Redirect>
                    </Switch>
                </div>
            </section>
        );
    }
}