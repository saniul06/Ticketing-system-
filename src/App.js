import './App.css';
import loadDatabase from './database/database'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import EmployeesList from './pages/employeesList'
import CreateTicket from './pages/createTicket'
import TicketsList from './pages/ticketsList'
import EmployeeTickets from './pages/employeeTickets'

loadDatabase()

function App() {
	return (
		<Router>
			<div className="App">
				<Route path='/' component={Dashboard} exact />
				<Route path='/employees-list' component={EmployeesList} exact />
				<Route path='/create-ticket' component={CreateTicket} exact />
				<Route path='/tickets-list' component={TicketsList} exact />
				<Route path='/employee/:id' component={EmployeeTickets} exact />
			</div>
		</Router>
	);
}

export default App;
