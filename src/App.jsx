import { BrowserRouter, Routes, Route , Link, useParams} from "react-router-dom";
import CardList from "./components/CardList";
import Counter from "./components/Counter";
import User from "./components/User";
import Products from "./components/Products";
import Phone from "./components/Phone";
import Laptop from "./components/Laptop";

const App = () => {
  function NotFound(){
    return <h2>404 - Page Not Found!</h2>
  }
  return (
    <div className='flex flex-wrap justify-center gap-3 bg-gray-900 min-h-screen'>
      <BrowserRouter>
        {/* <a className="text-amber-50 " href="/">Card</a> | 
        <a className="text-amber-50 " href="/counter">Counter</a> |  */}
        <nav>
         <Link className="text-amber-50 " to="/">Card</Link> | 
        <Link className="text-amber-50 " to="/counter">Counter</Link> | 
        <Link className="text-amber-50 " to="/user/100">User</Link> | 
        <Link className="text-amber-50 " to="/products">Products</Link> | 

        </nav>
        <Routes>
            <Route  path="/" element={<CardList />}/>
            <Route path="/counter" element={<Counter/>} />
            <Route path="/user/:id" element={<User/>} />
            <Route path="/products" element={<Products/>} >
                <Route path="phone" element={<Phone/>} />
                <Route path="laptop" element={<Laptop/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;