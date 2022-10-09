import { Link } from "react-router-dom";
import Header from "../../Components/Header/header-component";
import './signUp.styles.css';

import SignUpForm from "./signUp-form";

function SignUp () {

    return (
        <div>
            <Header />

            <div className='sign-up-container'>
            <p className='intro-signup'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi culpa delectus laudantium neque non obcaecati odio qui quidem voluptatibus? Ad aliquam autem commodi cupiditate dolor est expedita, fugit incidunt ipsa iste molestiae nesciunt nostrum perferendis placeat quod quos sint!
            </p>

            <h2>Heb je al een account?</h2>
            <h2>Of wil je inloggen met jouw Google account?</h2>
            <p>Klik dan <Link to='/sign-in'>hier</Link> om in te loggen.</p>

            <p className='intro-signup'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error ipsam ipsum porro quas veritatis.
            </p>

            <SignUpForm />
            </div>
        </div>
    )
}



export default SignUp;