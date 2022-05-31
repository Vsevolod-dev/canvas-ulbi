import React from "react";
import '../src/styles/app.scss'
import Toolbar from "../src/components/Toolbar";
import SettingsBar from "../src/components/SettingsBar";
import Canvas from "../src/components/Canvas";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={'app'}>
                <Routes>
                    <Route path={'/:id'} element={
                        <div>
                            <Toolbar/>
                            <SettingsBar/>
                            <Canvas/>
                        </div>
                    }/>
                    <Route path={'*'} element={<Navigate to={`f${(+new Date).toString(16)}`} />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
