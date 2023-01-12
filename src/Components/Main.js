import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
// import About from "./About"

export default function Main(){
    return(
        <div>
            <h1>Main</h1>
            <ul>
                <li>
                    <Link to="/test">TEST</Link>
                </li>
            </ul>

            <switch>
                <Route path="/test">
                    <test />
                </Route>
            </switch>

        </div>
    )
}


function test(){
    return(
        <div>
            <h1>test</h1>
        </div>
    )
}