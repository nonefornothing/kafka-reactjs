import axios from 'axios';

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/kafka/publish/";
// http://localhost:8080/kafka/publish/

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    CreateEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    

    // getEmployeeById(employeeId){
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
    
    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' +  employeeId);
    // }

    // getEmployeeBySearch(search){
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/search' , {params:{inquiry: search}});
    // }    

}

export default new EmployeeService()