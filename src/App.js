import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route
} from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./assets/scss/main.scss";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<div>
					<Header />
					<main className="main">
						<h2>main content</h2>
					</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
