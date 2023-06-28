import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={admin ? <Home /> : <Navigate to={"/admin"} />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/newproduct" element={<NewProduct />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </div>
    );
}
