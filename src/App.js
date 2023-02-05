import React, { useState, useEffect } from "react";
import Home from "./components/NavbarRoutes/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Routes,
    useNavigate,
    useAsyncError,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dev from "./components/NavbarRoutes/Dev";
import Photos from "./components/NavbarRoutes/Photos";
import Links from "./components/NavbarRoutes/Links";
import Error from "./components/Error.js";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/dev" element={<Dev/>} />
                    <Route exact path="/links" element={<Links/>} /> */}
                    <Route path={"*"} element={<Error />} />
                    <Route exact path="/photos" element={<Photos />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
