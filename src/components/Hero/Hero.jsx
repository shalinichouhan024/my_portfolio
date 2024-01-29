import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { getPdfUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shalini</h1>
        <p className={styles.description}>
        Software engineer with 2+ years of experience in developing software applications. Reach out if you'd like to learn more!
        </p>
      
        <a
        href={getPdfUrl("hero/cv.pdf")}
        download="Shalini_Chouhan_SWE"
        target="_blank"
        rel="noreferrer"
        className={styles.contactBtn}
        > 
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/Shalini.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
