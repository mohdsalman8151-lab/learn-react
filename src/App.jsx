import { BrowserRouter, Routes, Route , Link, useParams} from "react-router-dom";
import CardList from "./components/CardList";
import Counter from "./components/Counter";
import User from "./components/User";
import Products from "./components/Products";
import Phone from "./components/Phone";
import Laptop from "./components/Laptop";
import TodoApp from "./components/TodoApp";
import UseEffecEvent from "./components/UseEffecEvent";
import AutoSaveForm from "./components/AutoSaveForm";

import ToggleTheme from "./components/ToggleTheme";

const App = () => {
  function NotFound(){
    return <h2>404 - Page Not Found!</h2>
  }
  return (
  
    <div className='flex flex-wrap justify-center gap-3 bg-gray-500 h-screen text-black'>
      <BrowserRouter>
        {/* <a className="text-amber-50 " href="/">Card</a> | 
        <a className="text-amber-50 " href="/counter">Counter</a> |  */}
        <nav className="text-blue-900">
         <Link  to="/card">Card</Link> | 
        <Link  to="/counter">Counter</Link> | 
        <Link  to="/user/100">User</Link> | 
        <Link  to="/products">Products</Link> | 
        <Link  to="/todos">Todos</Link> | 
        <Link  to="/">Use Effect Event</Link> | 
        <Link  to="/autoSaveForm">Auto Save Form</Link> | 
        <Link  to="/toggle">Toggle Theme</Link> | 

        </nav>
        <Routes>
            <Route  path="/card" element={<CardList />}/>
            <Route path="/counter" element={<Counter/>} />
            <Route path="/todos" element={<TodoApp/>} />
            <Route path="/user/:id" element={<User/>} />
            <Route path="/" element={<UseEffecEvent/>} />
            <Route path="/autoSaveForm" element={<AutoSaveForm/>} />
            <Route path="/toggle" element={<ToggleTheme/>} />
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