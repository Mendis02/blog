import React from "react"
import Navbar from "./Components/Navbar"
import PostsMain from "./Components/Posts";
import PostDetails from "./Components/PostsDetails";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default function App(){
    return(
        <div>
            
            <Navbar />
            <Router>
                <Switch>
                    <Route path = "/:id" children={<PostDetails />}>
                    </Route>

                    <Route exact path ="/" >
                        <PostsMain/>
                    </Route>
                </Switch>   
            </Router>
            
            //router
        
        </div>
    )
}