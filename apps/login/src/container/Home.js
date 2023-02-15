import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { isTokenValid, getWelocomeText } from "../utils/login";

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user?.id || !isTokenValid(user)) {
            handleLogout();
        }
        setUser(user);
    }, []);
    //[] : executes once at time of mount
    // without second param: execute every time component loads
    // [param]: on mount and if any changes to param

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div>
            Hello, Am from Home {getWelocomeText(user)}
            <button style={{ float: 'right' }} type="button" onClick={handleLogout}>
                Logout
            </button>
            <div>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact Us </Link>
            </div>
        </div>
    );
};

export default Home;


