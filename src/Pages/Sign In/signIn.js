import {useContext, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../Components/Header/header-component";
import {AuthContext} from "../../Context/AuthContext/AuthContext";


function SignIn () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function loginRequest (e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(response.data.accessToken);
            login(response.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <div>
            <Header />
            <h1>Login page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa doloribus eos fugit qui? Animi
                beatae debitis distinctio dolorum, expedita hic incidunt labore odio placeat quae quidem quis rem
                similique?</p>

            <form onSubmit={loginRequest}>
                <label htmlFor="username">
                    Gebruikersnaam:
                    <input
                        type="username"
                        id="username-field"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                {error && <p>Combinatie van username en wachtwoord is onjuist.</p>}

                <button
                    type="submit"
                    onClick={loginRequest}
                    className="form-button"
                >
                    Inloggen
                </button>

            </form>

            <h4>Heb je nog geen account?</h4>
            <p>Klik <Link to='/sign-up'>hier</Link> om je te registreren.</p>
        </div>
    );
}

export default SignIn;