import React from 'react'
import styles from './Weather.module.css';

const Weather = () => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.day}>Tuesday<span> 15 Jan 2019</span></div>
                <div className={styles.city}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>Paris, FR</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.icon}>
                    <img src="assets/01d.png" alt="Sunny" />
                </div>
                <div className={styles.temperature}>29°C <span>Sunny</span></div>
            </div>
        </div>
    )
}

export default Weather;