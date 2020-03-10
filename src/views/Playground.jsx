import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserBoard from '../components/UserBoard.jsx';
import Garden from '../views/Garden.jsx';
import Shop from '../views/Shop.jsx';
import Warehouse from '../views/Warehouse.jsx';
import Diary from '../views/Diary.jsx';

import '../styles/playground.css';

export default class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.goToGarden = this.goToGarden.bind(this);
        this.goToShop = this.goToShop.bind(this);
        this.goToWarehouse = this.goToWarehouse.bind(this);
        this.goToDiary = this.goToDiary.bind(this);
    }
    goToGarden() {
        this.props.history.push("/playground/garden");
    }
    goToShop() {
        this.props.history.push("/playground/shop");
    }
    goToWarehouse() {
        this.props.history.push("/playground/warehouse");
    }
    goToDiary() {
        this.props.history.push("/playground/diary");
    }
    render() {
        return (
            <section className="playground">
                <div className="leftPart">
                    <button className="nav_btn" onClick={this.goToGarden}>Garden</button>
                    <button className="nav_btn" onClick={this.goToWarehouse}>Warehouse</button>
                    <button className="nav_btn" onClick={this.goToShop}>Shop</button>
                    <button className="nav_btn" onClick={this.goToDiary}>Diary</button>
                    <button className="nav_btn">Friends</button>
                    <button className="nav_btn">Encyclopedia</button>
                    <UserBoard></UserBoard>
                </div>
                <div className="rightPart">
                    <Switch>
                        <Route path="/playground/garden" component={Garden}></Route>
                        <Route path="/playground/warehouse" component={Warehouse}></Route>
                        <Route path="/playground/shop" component={Shop}></Route>
                        <Route path="/playground/diary" component={Diary}></Route>
                        <Redirect to="/playground/garden"></Redirect>
                    </Switch>
                </div>
            </section>
        );
    }
}