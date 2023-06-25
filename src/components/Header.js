import { Link} from "react-router-dom";
const Logo = () =>(
  <a href="/">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgmeS5gZETpqMgposOpgZvl7YlWxk5dPBaA&usqp=CAU" alt="foodvilla"/> 
    </a>
)

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
