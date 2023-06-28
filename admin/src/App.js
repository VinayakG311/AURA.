// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.css";
// import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Route,
//   Navigate,
//   Routes,
//   Link
// } from "react-router-dom";

// import { useSelector } from "react-redux";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Admin from "./pages/Admin";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";



// function App() {
//   const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

//   const currentUser = user && JSON.parse(user).currentUser;
//   const admin = currentUser?.isAdmin;

//   console.log(currentUser);
//   // const admin = useSelector((state) => state.user.currentUser);
//   // console.log(admin)

//   return (
//     <Router>
//       <Routes>

//         <Route path="/login" element={<Login />} />

//         <Route element={<Sidebar />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<UserList />} />
//         <Route path="/user/:userId" element={<User />} />
//         <Route path="/newUser" element={<NewUser />} />
//         <Route path="/products" element={<ProductList />} />
//         <Route path="/product/:productId" element={<Product />} />
//         <Route path="/newproduct" element={<NewProduct />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>

//     </Router>



//   );
// }

// export default App;


import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  Link
} from "react-router-dom";

import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import NavHider from "./pages/NavHider";



function App() {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const admin = currentUser;

  // const admin = useSelector((state) => state.user.currentUser);
  // console.log(admin)

  return (
    <Router>
      <>
        <Topbar />
        <div className="container">
          <NavHider>
            <Sidebar />
          </NavHider>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        </div>
      </>


    </Router>



  );
}

export default App;

