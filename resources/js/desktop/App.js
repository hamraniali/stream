import React from 'react';
import ReactDOM from 'react-dom';
import Content from "./Content";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Link,
//     Route
// } from 'react-router-dom'
import Header from './Header'

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    );
}
if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}

