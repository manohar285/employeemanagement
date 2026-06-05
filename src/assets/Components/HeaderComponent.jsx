import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-dark">
        <Link to="/employees" className="navbar-brand">
          Employee Management System
        </Link>
      </nav>
    </div>
  );
};

export default HeaderComponent;









// import React from "react";

// const HeaderComponent = () => {
//   return (
//     <div>
//       <footer>
//         <nav className="navbar bg-dark navbar-dark">
//         <Link to="/employees" className="navbar-brand">Employee Management System</Link>
//       </footer>
//     </div>
//   );
// };

// export default HeaderComponent;
