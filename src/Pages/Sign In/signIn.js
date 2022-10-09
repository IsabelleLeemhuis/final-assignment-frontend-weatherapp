import Header from "../../Components/Header/header-component";
import SignInForm from "./signIn-form";
import './signIn.styles.css';

const SignIn = () => {

    return (
        <div>
            <Header />

            <div className='sign-in-container'>
                <h1>Sign In</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa doloribus eos fugit qui? Animi
                    beatae debitis distinctio dolorum, expedita hic incidunt labore odio placeat quae quidem quis rem
                    similique?
                </p>
                <SignInForm />
            </div>

        </div>
    );
};

export default SignIn;