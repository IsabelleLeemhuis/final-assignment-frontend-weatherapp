import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header/header-component";
import './contact.styles.css';

function Contact () {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();

    const selectedReferrer = watch('found-through');

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <div className='contact-container'>
            <Header />
            <h1>Contact</h1>
            <p>Heb je een vraag of opmerking over onze weersite? Of loop je tegen problemen aan bij het aanmaken van een account of bij het inloggen?</p>
            <p>Vul dan onderstaand contactformulier in. We nemen zo snel mogelijk contact met jou op.</p>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Gegevens</legend>

                    <label htmlFor="details-name">
                        Naam:
                        <input
                            type="text"
                            id="details-name"
                            {...register("name", {
                                required: "Je moet een naam invullen",
                            })}
                        />
                        {errors.name && <p>{errors.name.message}</p> }
                    </label>

                    <label htmlFor="details-email">
                        Email:
                        <input
                            type="text"
                            id="details-email"
                            {...register("email", {pattern: /^\S+@\S+$/})}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Jouw bericht</legend>

                    <label htmlFor="comments" className='comments'>
                    <textarea
                        {...register("comments", {
                            required: "Als dit veld leeg blijft ontvangen wij geen bericht",
                            maxLength: {
                                value: 500,
                                message: "Je mag maximaal 500 karakters gebruiken",
                            },
                        })}
                        id="website-comments"
                        rows="25"
                        cols="75"
                        placeholder="Typ hier jouw bericht"
                    >
                    </textarea>
                    </label>
                    {errors.comments && <p>{errors.comments.message}</p> }

                    <label htmlFor="referrer" className='referrer'>
                        Hoe heb je ons gevonden?
                        <select id="referrer" {...register("found-through")} >
                            <option value="socials">Social Media</option>
                            <option value="friends">Vrienden</option>
                            <option value="google">Google</option>
                            <option value="other">Anders</option>
                        </select>
                    </label>

                    {selectedReferrer === "other" &&
                        <input
                            type="text"
                            {...register("found-through-other")}
                        />
                    }

                    <label htmlFor="website-newsletter">
                        <input
                            type="checkbox"
                            {...register("newsletter")}
                        />
                        Schrijf mij in voor de nieuwsbrief!
                    </label>

                    <button type="submit">
                        Versturen
                    </button>

                </fieldset>
            </form>
        </div>
    );
}

export default Contact;