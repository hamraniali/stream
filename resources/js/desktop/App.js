import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Index from "./Index";
import Register from "./Register";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

export default function App() {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route path='//' component={Index} />
                    <Route path='/register' component={Register} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}

