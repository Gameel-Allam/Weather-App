import React from 'react'
import styles from "./Forecast.module.css";

const Forecast = ({ forecastData }) => {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = new Date().getDay();
    const nextWeekDays = days.slice(day, days.length).concat(days.slice(0, day));
    const nextWeekForecast = forecastData.list.slice(0, 7);
    console.log(nextWeekForecast);

    return (
        <div className={styles.card}>
            <div className={styles.description}>
                <div className={styles.item}>
                    <label>PRECIPITATION</label>
                    <p>0 %</p>
                </div>
                <div className={styles.item}>
                    <label>HUMIDITY</label>
                    <p>34 %</p>
                </div>
                <div className={styles.item}>
                    <label>WIND</label>
                    <p>0 km/h</p>
                </div>
            </div>
            <div className={styles.week}>
                {nextWeekForecast.map((ele, idx) => {
                    return (
                        <div className={styles.day} key={idx}>
                            <img src={`assets/${ele.weather[0].icon}.png`} alt='icon' />
                            <label>{nextWeekDays[idx]}</label>
                            <p>{ele.main.temp}°C</p>
                        </div>)
                })}
            </div>
            <button>Change the location</button>
        </div>
    )
}

export default Forecast