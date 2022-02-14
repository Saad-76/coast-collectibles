import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';


 // basename="profile_project"

ReactDOM.render(
	<BrowserRouter>
	  <StyledEngineProvider injectFirst>

	<div className="main-background-color">
	<App />
	</div>
	</StyledEngineProvider>
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
