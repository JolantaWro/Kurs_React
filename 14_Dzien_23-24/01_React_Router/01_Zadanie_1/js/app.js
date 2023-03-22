import React from "react";
import { createRoot } from "react-dom";
import {HashRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Pricing from "./Pricing";

const Navigation = () => {
    return (
        <>
            <div>
                <h1>Aplikacja React z React Router</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/pricing">Cennik</Link></li>
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
                    <Route path='/blog' element={<Blog />}/>
                    <Route path='/pricing' element={<Pricing />}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}


// const routing = (
//         <HashRouter>
//             <Routes>
//                 <Route path='/' element={<Navigation />}>
//                     <Route path='/' element={<Home />}/>
//                     <Route path='/blog' element={<Blog />}/>
//                     <Route path='/pricing' element={<Pricing />}/>
//                 </Route>
//             </Routes>
//         </HashRouter>
// )

// ReactDOM.render(routing, document.getElementById("app"));

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
