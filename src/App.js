import './App.css';
import EmployeeInput from './Pages/EmployeeInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import { Routes, Route, Link } from "react-router-dom";
import AllEmployee from './Pages/AllEmployee';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<AllEmployee></AllEmployee>}></Route>
        <Route path='/addemployee' element={<EmployeeInput></EmployeeInput>}></Route>
      </Routes>

    </div>
  );
}

export default App;
