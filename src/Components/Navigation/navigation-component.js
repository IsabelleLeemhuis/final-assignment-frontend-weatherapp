import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext/user.context";
import { signOutUser } from "../../Context/AuthContext/Firebase/firebase.utils";
import './navigation.styles.css';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <nav>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    Home
                </Link>
                <ul className='nav-links-container'>
                    <Link className='nav-link' to='/sign-up'>
                        Create Account
                    </Link>
                    {
                        currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            Log Out
                        </span>
                        ) : (
                            <Link className='nav-link' to='/sign-in'>
                            Log In
                            </Link>
                        )}
                    <Link classname='nav-link' to='/profile'>
                        Profile
                    </Link>
                    <Link className='nav-link' to='/choose-your-weather'>
                        Choose Your Weather
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact Us
                    </Link>
                </ul>
            </div>
            <Outlet />
        </nav>
    );
}

export default Navigation;