import React from 'react';
import StatusBar from '../components/StatusBar.jsx';
import PlantCard from '../components/PlantCard.jsx';
import AddPlantModal from '../components/AddPlantModal.jsx';
import { reduxStore } from '../redux/store.js';

import '../styles/garden.css';

export default class Garden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleObj: {
                display: "none"
            }
        };
        this.addNewPlant = this.addNewPlant.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    addNewPlant() {
        this.setState({
            styleObj: {
                display: "block"
            }
        });
    }
    closeModal() {
        this.setState({
            styleObj: {
                display: "none"
            }
        });
    }
    render() {
        return (
            <div className="garden">
                <div style={this.state.styleObj}>
                    <AddPlantModal closeModal={this.closeModal}></AddPlantModal>
                </div>
                <StatusBar></StatusBar>
                <ul className="cards">
                    {
                        reduxStore.getState().userData.plantList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <PlantCard plantName={item.plantName} customName={item.customName} speciality={item.speciality}></PlantCard>
                                </li>
                            );
                        })
                    }
                    <li>
                        <div className="addNewPlant">
                            <img src={require("../assets/misc/add_plant.png")}  alt="" onClick={this.addNewPlant} />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

}