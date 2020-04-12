import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import persistStore from "./Store";

ReactDOM.render(
	<Provider store={persistStore().store}>
		<PersistGate loading={false} persistor={persistStore().persistor}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
