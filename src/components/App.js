import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const PageOne = () => {
	return (
		<div>
			Page One
			<a href="/pagetwo">Page 2</a>
		</div>
	);
};

const PageTwo = () => {
	return (
		<div>
			Page Two
			<button>Click Me</button>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={PageOne} />
					<Route path="/pagetwo" component={PageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
