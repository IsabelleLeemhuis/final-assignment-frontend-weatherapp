import { useState } from "react";
import FormInput from "../../Components/Form input/form-input";
import Button from "../../Components/Button/button-component";
import { createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../Context/AuthContext/Firebase/firebase.utils";

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { username, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("De opgegeven wachtwoorden komen niet overeen");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

        await createUserDocumentFromAuth(user, { username });
        resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("Dit email adres is al in gebruik");
            } else {
                alert("Er is een fout opgetreden");
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h2>Maak een account aan</h2>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Username'
                    type='text'
                    required
                    onChange={handleChange}
                    name='username'
                    value={username}
                />

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

                <FormInput
                    label='Wachtwoord herhalen'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type='submit'>
                    Sign Up!
                </Button>

            </form>
        </div>
    );
};

export default SignUpForm;