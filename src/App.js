import './App.css';
import loadDatabase from './database/database'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

loadDatabase()

function App() {
	return (
		<Router>
			<div className="App">
				<Route path='/' component={Dashboard} exact />
			</div>
		</Router>
	);
}

export default App;
