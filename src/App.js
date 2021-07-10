import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { PostsList } from "./components/PostsList/PostsList";
import { Post } from "./components/Post/Post";
import { Footer } from "./components/Footer/Footer";

import "./assets/scss/main.scss";

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<div>
					<Header />
					<main className="main">
						<Router>
							<Switch>
								<Route path="/post/:postId">
									<Post />
								</Route>
								<Route path="/author/:authorId">
									<PostsList />
								</Route>
								<Route>
									<PostsList />
								</Route>
							</Switch>
						</Router>
					</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
