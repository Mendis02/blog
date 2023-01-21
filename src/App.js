import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar"
import PostsMain from "./Screens/Posts";
import PostDetails from "./Screens/PostsDetails";

export default function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    {/* what does the switch do? Cause on click the pages switches without errors even without the 'Switch' */}

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