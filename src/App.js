import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar"
import PostsMain from "./Components/Posts";
import PostDetails from "./Components/PostsDetails";

export default function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <PostsMain />
                    </Route>
                    <Route path="/:id" >
                        <PostDetails />
                    </Route>
                </Switch>
            </Router>
        </div >
    )
}