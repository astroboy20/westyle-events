import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.text}>
          <h1>We organize grandiose events.</h1>
          <p>
            WeStyle is created to organize and manage events. Whether it is
            corporate, small parties in apartments or even fashion events. Our
            aim is to take care of everything from beginning to end, including
            choosing the right location, booking equipment and promoting it on
            social media!
          </p>
          <br />
          
          <a href="#" className={styles["btn-one"]}>
            {" "}
            Contact us
          </a>
          <a href="#" className={styles["btn-two"]}>
            {" "}
            About us
          </a>
        </div>
      </section>

      <section className="section2"></section>
    </div>
  );
};

export  {Introduction}
