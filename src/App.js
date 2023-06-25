import "./styles.css";
// import Header from "./component/Header.js"
//Named export 
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {createBrowserRouter,Outlet} from "react-router-dom";
function AppLayout(){
  return(
    <div className="app">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
       path:"/about",
      element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ]
  }
])
export default appRouter;







  
  