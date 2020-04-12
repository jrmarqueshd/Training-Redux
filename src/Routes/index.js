import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Menu from "../Components/Menu";
import Checkout from "../Pages/Checkout";

const Routes = () => (
	<BrowserRouter>
		<Menu />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/carrinho" component={Checkout} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
