import React, {useEffect, useState} from 'react';
import '../styles/toolbar.scss'
import Brush from "../tools/Brush";
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Erase from "../tools/Erase";
import Line from "../tools/Line";

const Toolbar = () => {
    const [tool, setTool] = useState('brush');

    useEffect(() => {

        const tools = document.getElementsByClassName('toolbar')[0].childNodes
        for (let i = 0; i < 6; ++i) {
            tools[i].classList.remove("active");
        }

        const currentTool = document.getElementsByClassName(tool)[0]
        currentTool.classList.add("active");
    }, [tool]);

    const download = () => {
        const dataUrl = canvasState.canvas.toDataURL()
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = `${canvasState.sessionId}.jpg`
        document.body.append(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div className={'toolbar'}>
            <button className="toolbar__btn brush" onClick={() => {
                setTool('brush')
                toolState.setTool(new Brush(canvasState.canvas))
            }}/>
            <button className="toolbar__btn rect" onClick={() => {
                setTool('rect')
                toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionId))
            }}/>
            <button className="toolbar__btn circle" onClick={() => {
                setTool('circle')
                toolState.setTool(new Circle(canvasState.canvas))
            }}/>
            <button className="toolbar__btn eraser" onClick={() => {
                setTool('eraser')
                toolState.setTool(new Erase(canvasState.canvas))
            }}/>
            <button className="toolbar__btn line" onClick={() => {
                setTool('line')
                toolState.setTool(new Line(canvasState.canvas))
            }}/>
            <input
                type="color"
                style={{marginLeft: 10}}
                onChange={e => toolState.setFillColor(e.target.value)}
            />
            
            <button
                className="toolbar__btn undo"
                onClick={() => canvasState.undo()}
            />
            <button
                className="toolbar__btn redo"
                onClick={() => canvasState.redo()}
            />
            <button
                className="toolbar__btn save"
                onClick={download}
            />
        </div>
    );
};

export default Toolbar;
