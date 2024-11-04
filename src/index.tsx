import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import ApolloProviderComponent from "./apollo/ApolloProvider"
import "./index.css"
import store from "./store/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<Provider store={store}>
		<ApolloProviderComponent>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ApolloProviderComponent>
	</Provider>
)
