import React from 'react';
import Navigation from '../containers/Navigation';
import MainContent from '../containers/MainContent';
import { Footer } from './Footer';

const App = () => {
	return(
		<div>
			<Navigation />
			<MainContent />
			<Footer />
		</div>
	);
};

export default App;
