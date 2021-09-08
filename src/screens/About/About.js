import React from 'react';
import styles from './About.module.css';
import {Blocks} from '../../components/Blocks';

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.AboutContentWhy}>
                <div className={styles.AboutContentWhyText}>
                    <div className={styles.AboutContentWhyContext}>
                        <p>Why Thrive?</p>
                        <p><strong>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?</strong>  Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
                    </div>
                    <div></div>
                </div>
                <div className={styles.AboutContentWhyImage}>
                    <img src='./img/christopher-campbell-40367.png' alt='Christopher-Campbell'/>
                </div>
            </div>
            <div className={styles.AboutContentAboutUs}>
                <div className={styles.AboutContentAboutUsLogo}>
                    <p>About Us</p>
                </div>
                <div className={styles.AboutContentAboutUsText}>
                    <p>
                        We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
                    </p>
                    <p>WE CAN HELP YOU WITH</p>
                </div>
                <div></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Blocks width='360px' height='360px' background='#FFE2DE' text='Weight Lifting'/>
                <Blocks width='360px' height='360px' background='#C4E769' text='Running & Spinning'/>
                <Blocks width='360px' height='360px' background='#62D0DF' text='Pumping Iron'/>
                <Blocks width='360px' height='360px' background='#0052C1' text='Pumping Iron'/>
            </div>
        </div>
    ) 
}

export default About;