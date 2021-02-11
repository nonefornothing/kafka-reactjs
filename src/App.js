import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';
import FooterComponent from './Components/FooterComponent';
// import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
function App() {
  return (
    <div>
        <HeaderComponent/>
        <Router>
                <div className="container">
                  <Switch>
                      <Route path= "/" exact component = {ListEmployeeComponent}/>
                      <Route path= "/employees" component = {ListEmployeeComponent}/>
                      <Route path= "/add-employee/:id" component={CreateEmployeeComponent}/>
                      <Route path= "/view-employee/:id" component={ViewEmployeeComponent} />
                      {/* <Route path= "/update-employee/:id" component={UpdateEmployeeComponent}/> */}
                  </Switch>
                </div>
        </Router>
        <FooterComponent/>
    </div>
    
  );
}

export default App;
