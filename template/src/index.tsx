import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {awsSetup} from "./AuthUtil";
import {BrowserRouter as Router} from 'react-router-dom';
import WithSplashScreen from "./components/pages/withSplashScreen";

awsSetup()

ReactDOM.render(
        <Router>
            <WithSplashScreen SplashScreen={<>works</>} ForComponent={<App/>}/>
        </Router>,
    document.getElementById('root')
);

reportWebVitals(console.log);
