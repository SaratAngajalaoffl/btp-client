import React from 'react';
import './App.css';
import MainComponent from './screens/Main';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<MainComponent />
			</Router>
		</Provider>
	);
}

export default App;
