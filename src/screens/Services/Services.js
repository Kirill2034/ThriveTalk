import React from "react";
import styles from "./Services.module.css";
import { Blocks } from "../../components/Blocks";

function Services() {
  return (
    <div className={styles.Services}>
      <div className={styles.ServicesBlocks}>
        <Blocks
          width="480px"
          height="480px"
          background="#22356F"
          text="Physical Health"
        />
        <Blocks
          width="480px"
          height="480px"
          background="#0052C1"
          text="Mental Health"
        />
        <Blocks
          width="480px"
          height="480px"
          background="#FFE2DE"
          text="Nutrition"
        />
        <Blocks
          width="480px"
          height="480px"
          background="#62D0DF"
          text="Gymnastics"
        />
        <Blocks
          width="480px"
          height="480px"
          background="#DEE1FF"
          text="Crossfit"
        />
        <Blocks
          width="480px"
          height="480px"
          background="#8F00FF"
          text="Aerobics"
        />
      </div>
      <div className={styles.ServicesBlocksText}>
        <div>
          <p>Nutritional Plans</p>
          <p>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </p>
        </div>
        <div>
          <p>Weight Loss</p>
          <p>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </p>
        </div>
        <div>
          <p>Mental Peace</p>
          <p>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </p>
        </div>
        <div>
          <p>Home Training</p>
          <p>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </p>
        </div>
        <div>
          <p>Work/Life Balance</p>
          <p>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </p>
        </div>
        <div>
          <p>Cardio</p>
          <p>
            Nutritional Facts on some shitty things that you don’t care about
            and even we don’t , I need to replace this copy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
