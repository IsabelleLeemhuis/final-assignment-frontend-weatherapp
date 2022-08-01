import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import Header from "../../Components/Header/header-component";
import './signUp.styles.css';

function SignUp () {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const { registration } = useContext(AuthContext);

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        setRole('user');

        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                username: username,
                email: email,
                password: password,
                role: ['user'],
            });
            registration();
            navigate('/sign-in')
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <Header />
            <h1>Account aanmaken</h1>
            <p className='intro-signup'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi culpa delectus laudantium neque non obcaecati odio qui quidem voluptatibus? Ad aliquam autem commodi cupiditate dolor est expedita, fugit incidunt ipsa iste molestiae nesciunt nostrum perferendis placeat quod quos sint!
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {!email.includes('@') && <p>Jouw email moet een @ bevatten.</p>}
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {password.length < 6 && <p>Jouw wachtwoord dient minstens 6 tekens te bevatten.</p>}
                </label>
                {error && <p className="error">Dit account bestaat al.</p>}

                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Registreren
                </button>

            </form>

            <h3>Heb je al een account?</h3>
            <p>Klik <Link to='/sign-in'>hier</Link> om in te loggen.</p>
        </>
    );
}

export default SignUp;