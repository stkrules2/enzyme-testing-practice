import React from 'react';

import './app.scss';

import Header from './header/header.componenet';
import Headline from './headline/headline.component';

function App() {
	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline header="Posts" desc="Click the button to render posts" />
			</section>
		</div>
	);
}

export default App;
