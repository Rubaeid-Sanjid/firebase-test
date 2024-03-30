import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/login'}>Log In</Link></li>
        </div>
    );
};

export default Header;