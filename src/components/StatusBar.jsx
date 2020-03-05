import React from 'react';
import '../styles/statusbar.css';

export default class StatusBar extends React.Component {
    render() {
        return (
            <div className="statusbar">
                <div className="status"><b>Total Plants:</b> 21</div>
                <div className="status"><b>Land Slots Used:</b> 10/15</div>
                <div className="status"><b>Buckets of Water:</b> 30</div>
            </div>
        );

    }
}