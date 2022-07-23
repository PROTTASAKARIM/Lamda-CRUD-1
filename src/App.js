import './App.css';
import EmployeeInput from './Pages/EmployeeInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import { Routes, Route, Link } from "react-router-dom";
import AllEmployee from './Pages/AllEmployee';
import EmployeeDetail from './Pages/EmployeeDetail';
import UpdateEmployee from './Pages/UpdateEmployee';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<AllEmployee></AllEmployee>}></Route>
        <Route path='/addemployee' element={<EmployeeInput></EmployeeInput>}></Route>
        <Route path='/employees/:id' element={<EmployeeDetail></EmployeeDetail>}></Route>
        <Route path='/update/:id' element={<UpdateEmployee></UpdateEmployee>}></Route>
      </Routes>

    </div>
  );
}

export default App;
