import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navigation.styles.css';

function Navigation () {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    Home
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/sign-up'>
                        Create Account
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Log In
                    </Link>
                    <Link classname='nav-link' to='/profile'>
                        Profile
                    </Link>
                    <Link className='nav-link' to='/choose-your-weather'>
                        Choose Your Weather
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact Us
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;