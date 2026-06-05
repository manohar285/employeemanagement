import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ListEmployeeComponent from "./assets/Components/ListEmployeeComponent";
import HeaderComponent from "./assets/Components/HeaderComponent";
import FooterComponent from "./assets/Components/FooterComponent";
import Login from "./assets/Components/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import EmployeeComponent from "./assets/Components/EmployeeComponent";
import Signup from "./assets/Components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
        {/*<Route path="/" element={<Login/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>*/}
          {/*<Route path="/" element={<ListEmployeeComponent/>}></Route>*/}
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
          {/*http://localhost:3000/edit-employee/1*/}
          <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
