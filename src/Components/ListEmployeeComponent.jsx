import React, { Component } from 'react';

import SockJsClient from 'react-stomp';
import '../styles/listComponent.css';
import EmployeeService from '../services/EmployeeService';
import {Button} from 'react-bootstrap';
import chatAPI from '../services/chatapi';

const SOCKET_URL = 'http://localhost:8080/ws-chat/';
class ListEmployeeComponent extends Component {

    

    constructor(props){
        super(props)
 
        this.state = {
            employees: [],
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    onConnected = () => {
        console.log("Connected!!")
    }
    
    onMessageReceived = (msg) => {
        console.log('New Message Received!!', msg);
        // setMessages(messages.concat(msg));
        chatAPI.getMessages(groupId).then(res => {
            console.log('Received data' , res);
            this.setState({ employees: msg.data});
        });
    }
    
    // onSendMessage = (msgText) => {
    //     chatAPI.sendMessage(user.username, msgText).then(res => {
    //       console.log('Sent', res);
    //     }).catch(err => {
    //       console.log('Error Occured while sending message to api');
    //     })
    // }

    // viewEmployee(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }

    addEmployee(){
        this.props.history.push("/add-employee/_add");
    }

    componentDidMount(){
        // EmployeeService.getEmployees().then((res) => {
        //     this.setState({ employees: res.data});
        // });
    }

    render() {
        return (
            <div>

                <h2 className="text-center">employees List</h2>

                <div class="d-flex list-function">

                    <div class="mr-auto p-2">
                        <Button size="sm" variant="primary" onClick={this.addEmployee}>Add Employee</Button>
                    </div>

                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>employee First Name</th>
                                <th>employee Last Name</th>
                                <th>employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>
                                        <td>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.viewEmployee(employee.id)} 
                                            className="btn btn-info">View</button>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;