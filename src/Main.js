import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import Palace from "./Palace";
import Tower from "./Tower";
import Village from "./Village";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Seoul Landmarks</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Gyeongbokgung Palace</NavLink></li>
                        <li><NavLink to="/tower">N Seoul Tower</NavLink></li>
                        <li><NavLink to="/village">Bukchon Hanok Village</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Palace />} />
                            <Route path="/tower" element={<Tower />} />
                            <Route path="/village" element={<Village />} />
                        </Routes>
                        
                    </div>
                        
                </div>
            </HashRouter>
        );
    }
}

export default Main;