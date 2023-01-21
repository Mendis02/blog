import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
<<<<<<< HEAD
=======
    Link
>>>>>>> master
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
<<<<<<< HEAD
                    {/* what does the switch do? Cause on click the pages switches without errors even without the 'Switch' */}
=======
                    <Route path="/:id" children={<PostDetails />}>
                    </Route>
>>>>>>> master

                    <Route exact path="/" >
                        <PostsMain />
                    </Route>
<<<<<<< HEAD
                    <Route path="/:id" >
                        <PostDetails />
                    </Route>
                </Switch>
            </Router>
        </div >
=======
                </Switch>
            </Router>
        </div>
>>>>>>> master
    )
}