import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import Header from "../../Components/Header/header-component";
import './profile.page.styles.css';


function Profile () {
    const [userData, setUserData] = useState({});
    const { user } = useContext(AuthContext);

    const { logout } = useContext(AuthContext);

    useEffect(() => {
        async function getUserData() {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/test/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setUserData(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        getUserData();
    }, []);

    return (
        <>
            <Header />
            <h1>Profiel pagina</h1>
            <p>Hoi !</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus earum iusto minima necessitatibus officiis optio, perspiciatis quo repellendus?</p>

            <section>
                <h2>Jouw gegevens</h2>
                <h3>Naam: {user.username}</h3>
                <h3>Email: {user.email}</h3>
            </section>
            <article className='profile-text'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa distinctio dolorum, ducimus eaque eos expedita fugiat laboriosam modi nesciunt nostrum omnis perspiciatis praesentium quo reiciendis, saepe, unde veritatis voluptatem!</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illo in neque non rerum sequi.</h5>
            </article>
            <article className='profile-text'>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</h4>
            </article>

            {Object.keys(userData).length > 0 &&
                <section>
                    <h3>Geheime profiel content</h3>
                    <h4>Jouw ID is</h4>
                    <p>{user.id}</p>
                </section>
            }

            <p>Terug naar de <Link to='/'>homepagina</Link></p>

            <button type="button" onClick={logout}>
                Uitloggen
            </button>
        </>
    );

}

export default Profile;