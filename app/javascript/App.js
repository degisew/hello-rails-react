import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import {Greeting} from "./components/greetings";

const App = () => {
    return (
        <>
            <h1>Rails with React</h1>
            <Routes>
                <Route path="/" element={<Greeting />} />
            </Routes>
        </>
    );
}

export default App;