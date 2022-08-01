import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/header-component";

function ErrorPage () {
    return (
        <div>
            <Header />
            <h1>
                De pagina die je zocht bestaat niet.
            </h1>
            <p>Terug naar de <Link to='/'>homepagina</Link></p>
        </div>
    )
}

export default ErrorPage;