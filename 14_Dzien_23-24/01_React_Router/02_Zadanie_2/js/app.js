import React from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./Home";
import HelloYou from "./HelloYou";
import CheckAge from "./CheckAge";


const Navigation = () => {
    return (
        <>
            <div>
                <h1>Menu</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/hello/Jan'>HelloYou</Link></li>
                    <li><Link to='/checkage/50'>CheckAge</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>

    );
}
const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/hello/:name' element={<HelloYou />}/>
                    <Route path='/checkage/:age' element={<CheckAge />}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);