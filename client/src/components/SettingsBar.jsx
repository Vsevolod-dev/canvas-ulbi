import React from 'react';
import toolState from "../store/toolState";

const SettingsBar = () => {
    return (
        <div className={'setting-bar'}>
            <label style={{margin: "0 10px"}} htmlFor="line-width">Line width</label>
            <input
                onChange={(e) => toolState.setLineWidth(e.target.value)}
                style={{margin: "0 10px"}}
                id="line-width"
                type="number"
                defaultValue={1}
                min={1}
                max={50}
            />
            <label style={{margin: "0 10px"}} htmlFor="stroke-color">Stroke color</label>
            <input
                id="stroke-color"
                type="color"
                style={{marginLeft: 10}}
                onChange={e => toolState.setStrokeColor(e.target.value)}
            />
            <label style={{margin: "0 10px"}} htmlFor="stroke-color-erase">Erase color</label>
            <input
                id="stroke-color-erase"
                type="color"
                style={{marginLeft: 10}}
                onChange={e => toolState.setStrokeColorErase(e.target.value)}
            />
        </div>
    );
};

export default SettingsBar;
