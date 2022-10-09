import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './../../Context/AuthContext/user.context';
import Header from "../../Components/Header/header-component";
import './profile.page.styles.css';


function Profile () {

    return (
        <>
            <Header />
            <h1>Profiel pagina</h1>
            <p>Hoi!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus earum iusto minima necessitatibus officiis optio, perspiciatis quo repellendus?</p>

            <section>
                <h2>Jouw gegevens</h2>
                <h3>Naam: </h3>
                <h3>Email: </h3>
            </section>
            <article className='profile-text'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa distinctio dolorum, ducimus eaque eos expedita fugiat laboriosam modi nesciunt nostrum omnis perspiciatis praesentium quo reiciendis, saepe, unde veritatis voluptatem!</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illo in neque non rerum sequi.</h5>
            </article>
            <article className='profile-text'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</h4>
            </article>

            <p>Terug naar de <Link to='/'>homepagina</Link></p>

            <button type="button">
                Uitloggen
            </button>
        </>
    );

}

export default Profile;