import { Link, Outlet } from "react-router-dom";

export default function Products(){
   
    return (
        <div>
        <h1 className="text-2xl text-white">  Products  </h1>
         <nav>
            <Link className="text-amber-50 " to="phone">Phone</Link> |
            <Link className="text-amber-50 " to="laptop">Laptop</Link> 
        </nav>
        <Outlet/>
        </div>
    )
}