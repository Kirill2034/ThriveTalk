import React from 'react';
import styles from './Home.module.css';
import {NavLink} from 'react-router-dom';

function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.HomeNav}>
                <div className={styles.Logo}>
                    <p>Thrivetalk</p>
                </div>
                <div className={styles.Navbar}>
                    <NavLink to='/Home'><p>Home</p></NavLink>
                    <NavLink to='/about'><p>About</p></NavLink>
                    <NavLink to='/services'><p>Services</p></NavLink>
                    <p>Blog</p>
                </div>
                <div className={styles.CountactBtn}>
                    <p>Contuct us</p>
                </div>
            </div>
            <div className={styles.HomeContent}>
                <div className={styles.HomeContentText}>
                    <div className={styles.HomeContentTextLogo}>
                        <p>Thivetalk</p>
                    </div>
                    <div className={styles.HomeContentTextUpperText}>
                        <p>HELPING YOU THRIVE IN ALL AREAS OF LIFE</p>
                    </div>
                    <div className={styles.HomeContentTextPar}>
                        <p>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                    </div>
                    <div className={styles.HomeContentTextBtn}>
                        <p>Who am i</p>
                        <p>What do i do</p>
                    </div>
                </div>
                <div className={styles.HomeContentImage}>
                    <img src='./img/Rectangle.png' alt='text'/>
                </div>
            </div>
        </div>
    )
}
export default Home;