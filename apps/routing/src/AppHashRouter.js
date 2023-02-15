import { Outlet, Link, NavLink } from "react-router-dom";

const AppHashRouter = () => {
    const highlight = {
        color: 'green'
    };
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink
                            to="home"
                            style={({ isActive }) => {
                                return isActive ? highlight : undefined
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="contact"
                            style={({ isActive }) => {
                                return isActive ? highlight : undefined
                            }}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    )
};

export default AppHashRouter;