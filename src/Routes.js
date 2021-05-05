import {
    BrowserRouter as Router,
    Route,
    Switch, 
} from 'react-router-dom';

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import List from "./pages/List";
import Sheet from "./pages/Sheet";

function Routes(props){

        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/List" component={List} />
                    <Route path="/Sheet" component={Sheet} />
                </Switch>
            </Router>
        );
}

export default Routes;