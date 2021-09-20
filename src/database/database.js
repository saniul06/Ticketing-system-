import employeeData from './data'

const loadDatabase = () => {
    localStorage.setItem('employees', JSON.stringify(employeeData))
}

export default loadDatabase