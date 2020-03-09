import React from 'react';
import '../styles/addplantmodal.css';

export default class AddPlantModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleCancel() {
        this.props.closeModal();
    }
    render() {
        return (
            <div className="addPlantBox">
                <div className="addPlantWindow">
                    <div id="newPlantNameBox">
                        <input type="text" placeholder="What's your new plant's name?" />
                    </div>
                    <div id="midPlaceHolder">
                        <ul id="newPlantSeedBox">
                            <li>
                                <div className="left">
                                    <img src={require('../assets/plant/plant_O_seed.png')} alt="" />
                                </div>
                                <div className="right">
                                    <div className="up">Seed Name: Plant_A_seed</div>
                                    <div className="down">
                                        <div>Select</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src={require('../assets/plant/plant_O_seed.png')} alt="" />
                                </div>
                                <div className="right">
                                    <div className="up">Seed Name: Plant_A_seed</div>
                                    <div className="down">
                                        <div>Select</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src={require('../assets/plant/plant_O_seed.png')} alt="" />
                                </div>
                                <div className="right">
                                    <div className="up">Seed Name: Plant_A_seed</div>
                                    <div className="down">
                                        <div>Select</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul id="newPlantPotBox">
                            <li>
                                <div className="left">
                                    <img src={require('../assets/pot/pot0.png')} alt="" />
                                </div>
                                <div className="right">
                                    <div className="up">Pot Name: Pot1</div>
                                    <div className="down">
                                        <div>Select</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src={require('../assets/pot/pot0.png')} alt="" />
                                </div>
                                <div className="right">
                                    <div className="up">Pot Name: Pot1</div>
                                    <div className="down">
                                        <div>Select</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src={require('../assets/pot/pot0.png')} alt="" />
                                </div>
                                <div className="right">
                                    <div className="up">Pot Name: Pot1</div>
                                    <div className="down">
                                        <div>Select</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="buttonBox">
                        <button id="con">Confirm</button>
                        <button id="can" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}