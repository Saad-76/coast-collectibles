import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

 // basename="profile_project"

ReactDOM.render(
	<BrowserRouter>
	<div className="main-background-color">
	<App />
	</div>
	
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
