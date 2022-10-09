import React from "react";
import Header from "../../Components/Header/header-component";
import './choose.your.weather.styles.css';

function ChooseYourWeather () {

//    const url = `https://api.openweathermap.org/data/3.0/weather?q=${location}&units=metric&appid=34dfa14c6a1f1c5a94f51b1618994e50&lang=nl`
    // temperatuur main.temperature
    // bewolking weather.0.description
    // windsterkte wind.speed

    return (
        <div>
            <Header />
            <div className='outer-container'>
                <h1>Kies hier het meest geschikte weer voor jou plannen vandaag</h1>
                <article className='inner-container'>
                    <h2>Liever koud of warm?</h2>
                    <p className='explanation'>Je kan kiezen voor onder 0 graden, 0-5, 5-10, 10-15, 15-20, 20-25, 25-30 of boven 30 graden</p>

                    <label htmlFor="temperature-choice" className='temperature-choice-menu'>
                        Kies hier de temperatuur die vandaag het beste bij jou past

                        <select id="temperature">
                            <option value="<0">Onder 0 graden</option>
                            <option value="0-5">0 tot 5 graden</option>
                            <option value="5-10">5 tot 10 graden</option>
                            <option value="10-15">10 tot 15 graden</option>
                            <option value="15-20">15 tot 20 graden</option>
                            <option value="20-25">20 tot 25 graden</option>
                            <option value="25-30">25 tot 30 graden</option>
                            <option value=">30">Boven 30 graden</option>
                        </select>
                    </label>
                </article>

                <article className='inner-container'>
                    <h2>Ga je in de regen dansen of kan het beter droog blijven?</h2>
                    <p>Droog, een buitje of écht regen</p>
                    <label htmlFor="rain-choice">
                        Kies hier

                        <select id="rain">
                            <option value="<0">Droog</option>
                            <option value="0-5">Af en toe buien</option>
                            <option value="5-10">Regen</option>
                        </select>
                    </label>
                </article>

                <article className='inner-container'>
                    <h2>Hoe hard mag het waaien?</h2>
                    <p>De keuze gaat van windstil tot en met zware storm (omdat we cyclonen toch voorlopig niet mee gaan maken in Nederland... hopelijk)</p>
                    <label htmlFor="windspeed-choice">
                        Kies hier de windsterkte die voor jou acceptabel is

                        <select id="windspeed">
                            <option value="<1">Windstil - geen briesje te bekennen</option>
                            <option value="1-11">Zwakke wind - je merkt er niet veel van</option>
                            <option value="12-28">Matige wind - de bladeren dansen... en zwerfvuil</option>
                            <option value="29-38">Vrij krachtige wind - je ziet de takken bewegen</option>
                            <option value="39-49">Krachtige wind - de grote takken doen ook mee</option>
                            <option value="50-61">Harde wind - bewegen de bomen nou?</option>
                            <option value="62-74">Stormachtig - kleine takjes kunnen vallen</option>
                            <option value="75-88">Storm - kijk beter naar indoor activiteiten, er kunnen takken vallen</option>
                            <option value=">89">Zware storm en erger - blijf thuis</option>
                        </select>
                    </label>
                </article>

                <article className='inner-container'>
                    <h2>En vanuit welke richting heb je de wind het liefst?</h2>
                    <p>Noord, oost, zuid of west?</p>
                    <label htmlFor="winddirection-choice">
                        Kies hier de windrichting

                        <select id="winddirection">
                            <option value="north">Vanuit het Noorden</option>
                            <option value="east">Vanuit het Oosten</option>
                            <option value="south">Vanuit het Zuiden</option>
                            <option value="west">Vanuit het Westen</option>
                        </select>
                    </label>
                </article>

                <article className='inner-container'>
                    <h2>Lekker zonnetje of gaat een beetje bewolking de pret niet bederven?</h2>
                    <p>De keuze varieert tussen een klare hemel en veel bewolking</p>
                    <label htmlFor="sky-choice">
                        Kies hier hoe de hemel eruit moet zien

                        <select id="sky-choice">
                            <option value="clear">Een prachtige klare hemel</option>
                            <option value="few clouds">Enkele wolken</option>
                            <option value="scattered clouds">Her en der bewolking</option>
                            <option value="broken clouds">Vooral bewolking</option>
                        </select>
                    </label>
                </article>

            </div>

        </div>
    )
}

export default ChooseYourWeather;