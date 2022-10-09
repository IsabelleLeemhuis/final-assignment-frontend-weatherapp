import { useState } from "react";

import FormInput from "../../Components/Form input/form-input";
import Button from "../../Components/Button/button-component";

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../Context/AuthContext/Firebase/firebase.utils";

import './signIn-form-styles.css';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Het ingevoerde wachtwoord is onjuist");
                    break
                case 'auth/user-not-found':
                    alert("Er bestaat geen account met dit email adres");
                    break;
                default:
                    alert("Er is een fout opgetreden");
            }
        }
    };

        const handleChange = (event) => {
            const {name, value} = event.target;
            setFormFields({...formFields, [name]: value});
        };

        return (
            <div>
                <h2>Meld je aan met email adres & password</h2>
                <form onSubmit={handleSubmit}>

                    <FormInput
                        label='Email'
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                    />

                    <FormInput
                        label='Wachtwoord'
                        type='password'
                        required
                        onChange={handleChange}
                        name='password'
                        value={password}
                    />

                    <div className='buttons-container'>
                        <Button type='submit'>
                            Sign In!
                        </Button>
                        <Button type='button' buttonType='google-sign-in' onClick={signInWithGoogle}>
                            Google Sign In
                        </Button>
                    </div>

                </form>
            </div>
        );
    };

export default SignInForm;