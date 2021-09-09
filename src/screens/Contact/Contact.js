import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.Contact}>
      <div className={styles.ContactContent}>
        <div className={styles.ContactContentText}>
          <div className={styles.ContactContentTextWrapper}>
            <p>CONTACT US</p>
            <p>Ready. Set. Smile</p>
            <p>
              Take the free online assessment to see if you are a candidate and
              get started on your journey.
            </p>
            <p>GET HELP NOW</p>
          </div>
        </div>
        <div className={styles.ContactContentImage}>
          <img src="./img/charles-etoroma-390119.png" alt="charles" />
        </div>
      </div>
      <div className={styles.ContactInfo}>
        <div className={styles.ContactInfoImage}>
          <img src="./img/autumn-goodman-242825.png" alt="autumn" />
        </div>
        <div className={styles.ContactInfoText}>
          <div>
            <p>SOME INFO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula.
            </p>
          </div>
          <div>
            <p>ENFOLD HEALTH</p>
            <p>
              Main Street 1, Olcott Buffalo, United States +555 283 784 333
              office@enfold-health.com
            </p>
          </div>
          <div>
            <p>OFFICE HOURS</p>
            <p>
              Mo-Fr: 8:00-19:00 <br /> Sa: 8:00-14:00
              <br /> Su: closed
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ContactFooter}>
        <p>© Copyright - ThriveTalk 2017</p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default Contact;
