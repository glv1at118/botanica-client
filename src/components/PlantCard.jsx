import React from 'react';
import '../styles/plantcard.css';

export default class PlantCard extends React.Component {
    render() {
        return (
            <div className="plantcard">
                <div className="plantInfo">
                    <div className="textInfo"><b><u>Cactus B01</u></b></div>
                    <div className="textInfo"><b>Current:</b> Ripe</div>
                    <div className="textInfo"><b>Next Stage:</b> 200</div>
                    <div className="textInfo"><b>Value:</b> 25</div>
                    <div className="textInfo"><b>Speciality:</b> News</div>
                    <div className="textInfo"><b>Hydration:</b> 10/10</div>
                    <div className="textInfo"><b>Yield:</b> 35/35</div>
                    <button className="operateBtn water"><b>Water</b></button><br />
                    <button className="operateBtn harvest"><b>Harvest</b></button><br />
                    <button className="operateBtn sell"><b>Sell</b></button><br />
                </div>
                <div className="plantImg">
                    <div className="plantBody">
                        <img src={require("../assets/plant/plant_A_4.png")} alt="plant body not accessible" />
                    </div>
                    <div className="plantPot">
                        <img src={require("../assets/pot/pot2.png")} alt="plant pot not accessible" />
                    </div>
                </div>
            </div>
        );

    }
}

// react里面竟然不允许常规方式引入 img 的 src，我操你妈的！