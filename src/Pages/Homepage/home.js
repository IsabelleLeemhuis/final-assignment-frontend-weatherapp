import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './home.styles.css';
import Header from "../../Components/Header/header-component";


function Home() {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=34dfa14c6a1f1c5a94f51b1618994e50&lang=nl`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        }
    }

    return (
        <div className="home">
            <Header />
            <p className='quote'>There's no such thing as good weather, or bad weather.</p>
            <p className='quote'>There's just weather and your attitude towards it.</p>
            <div className="searchbar">
                <input className='search-style'
                       value={location}
                       onChange={event => setLocation(event.target.value)}
                       onKeyPress={searchLocation}
                       placeholder='Zoek direct een stad'
                       type="text"/>
            </div>
            <div className="container">
                <section className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temperature">
                        {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>
                </section>

                {data.name !== undefined &&
                    <section className="bottom">
                        <article className="gevoelstemperatuur">
                            <h4>gevoeld</h4>
                            <p>{data.main ? <h3>{data.main.feels_like.toFixed()}°C</h3> : null}</p>
                        </article>
                        <article className="luchtvochtigheid">
                            <h4>luchtvochtigheid</h4>
                            <p>{data.main ? <h3>{data.main.humidity}%</h3> : null}</p>
                        </article>
                        <article className="wind">
                            <h4>windsterkte</h4>
                            <p>{data.wind ? <h3>{data.wind.speed}km/h</h3> : null}</p>
                        </article>
                    </section>
                }
            </div>
            <section>
                <h3>Wil je weten waar in je buurt het weer het beste matcht met jouw plannen voor vandaag?</h3>
                <p>Maak dan <Link to='/sign-up'>hier</Link> een account aan en krijg toegang tot alle functionaliteiten van onze site!</p>
                <p>Heb je al een account en ben je ingelogd? Bekijk dan <Link to='/profile'>hier</Link> jouw profielpagina of kies <Link to='/choose-your-weather'>hier</Link> jouw perfecte plek voor vandaag.</p>

            </section>

        </div>
    );
}

export default Home;