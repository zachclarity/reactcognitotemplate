import * as React from "react"
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import LoggedIn from "./components/pages/LoggedIn";

export default function Routes() {

    return (<Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/loggedIn">
                <LoggedIn/>
            </Route>
            <Route>
                <div>NOT FOUND</div>
            </Route>
        </Switch>
    );
}
