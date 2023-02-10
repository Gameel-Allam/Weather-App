import React, { useEffect, useState } from 'react'
import styles from "./Forecast.module.css";

const Forecast = ({ forecastData }) => {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const nextWeekDays = days.slice(new Date().getDay(), days.length).concat(days.slice(0, new Date().getDay()));
    const nextWeekForecast = forecastData.list.slice(0, 7);

    const [description, setDescription] = useState(forecastData.list[0].main);
    const [activeId, setActiveId] = useState(0);

    const handleSelect = (idx) => {
        setDescription(nextWeekForecast[idx].main);
        setActiveId(idx);
    }

    console.log("mounted");

    useEffect(() => {
        setDescription(forecastData.list[0].main)
    }, [forecastData])

    return (
        <div className={styles.card}>
            <div className={styles.description}>
                <div className={styles.item}>
                    <label>Feels like</label>
                    <p>{description.feels_like}°C</p>
                </div>
                <div className={styles.item}>
                    <label>Humidity</label>
                    <p>{description.humidity} %</p>
                </div>
                <div className={styles.item}>
                    <label>Pressure</label>
                    <p>{description.pressure} Pa</p>
                </div>
            </div>
            <div className={styles.week}>
                {nextWeekForecast.map((ele, idx) => {
                    return (
                        <div className={`${styles.day} ${idx === activeId ? styles.active : ""}`} key={idx} onClick={() => handleSelect(idx)}>
                            <img src={`assets/${ele.weather[0].icon}.png`} alt='icon' />
                            <label>{nextWeekDays[idx]}</label>
                            <p>{ele.main.temp}° C</p>
                        </div>)
                })}
            </div>
            <p className={styles.quote}>Have a nice day ❤️</p>
        </div >
    )
}

export default Forecast