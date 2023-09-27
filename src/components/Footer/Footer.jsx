import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles["logo-left"]}>
          <h1 className={styles.logo}>Westyle</h1>
          <p className={styles["section-p2"]}>We began in 2018, with the goal of serving  <br/> clients better by delivering unexpected creativity.</p>
        </div>

        <div className={styles.features}>
          <h1 className={styles["section-h1"]}>Pages</h1>
          <p className={styles["section-p"]}><a href="">Home</a></p>
          <p className={styles["section-p"]}> <a href="#about">About</a></p>
          <p className={styles["section-p"]}><a href="#contact">Gallery</a></p>
          <p className={styles["section-p"]}><a href="#contact"> Contact</a></p>
        </div>

        <div className={styles.resources}>
          <h1 className={styles["section-h1"]}>Address</h1>
          <p className={styles["section-p2"]}>Barracks Road | +234 70 3824 5205 | eventwestyle.gmail.com</p>
        </div>

        
      </section>
    </>
  );
};




export { Footer };
