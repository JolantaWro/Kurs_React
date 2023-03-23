import React from "react";
import {Link, NavLink} from "react-router-dom";
const Navigation = () => {
    const activeStyle = {
        border: "1px solid green"
    };


    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><NavLink end to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink end to='/hello/Jan' style={({ isActive }) => isActive ? activeStyle : undefined}>HelloYou</NavLink></li>
                <li><NavLink end to='/checkage/50' style={({ isActive }) => isActive ? activeStyle : undefined}>CheckAge</NavLink></li>
            </ul>
        </div>
    );
}
export default Navigation;