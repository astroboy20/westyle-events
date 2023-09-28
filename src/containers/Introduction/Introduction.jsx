/* eslint-disable react/prop-types */
import styles from "./Introduction.module.css";
const Introduction = ({aboutRef, contactRef}) => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.text}>
          <h1>We organize grandiose events.</h1>
          <p>
            WeStyle is created to organize and manage events. Whether it is
            corporate, <br/> small parties in apartments or even fashion events. Our
            aim is to take care of everything from beginning to end, <br/> including
            choosing the right location, booking equipment and promoting it on
            social media!
          </p>
          <br />
          
          <a onClick={aboutRef.current?.scrollIntoView()} href="#contact" className={styles["btn-one"]}>
            {" "}
            Contact us
          </a>
          <a onClick={contactRef.current?.scrollIntoView()} href="#about" className={styles["btn-two"]}>
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
