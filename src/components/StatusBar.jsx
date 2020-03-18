import React from 'react';
import '../styles/statusbar.css';
import { reduxStore } from '../redux/store.js';

export default class StatusBar extends React.Component {
    render() {
        return (
            <div className="statusbar">
                <div className="status"><b>Total Plants:</b> {reduxStore.getState().userData.plantPotList.length}</div>
                <div className="status"><b>Land Slots Used:</b> {reduxStore.getState().userData.usedLand}/{reduxStore.getState().userData.ownedLandMax}</div>
                <div className="status"><b>Buckets of Water:</b> {reduxStore.getState().userData.ownedWater}</div>
            </div>
        );

    }
}