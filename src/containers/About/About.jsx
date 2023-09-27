/* eslint-disable react/prop-types */
import styles from "./About.module.css";
import Protection from "../../assets/protection.png";
import Approved from "../../assets/approved.png";
import Success from "../../assets/success.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = ({aboutRef}) => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section className={styles.section} ref={aboutRef} id="about" data-aos="fade-right">
        <div className={styles["section-head"]}>
          <h1>Why us</h1>
          <p>
            As a leading event management company, we have well structured
            offers that stands us out and here are reasons why you should
            consider working with us
          </p>
        </div>

        <div className={styles.ball}>
          <div className={styles.a}>
            <img src={Protection} alt="ggg" />
            <h3>Top-notch Standard</h3>
            <p>
              Getting the best possible result is the least you can always
              expect from us.
            </p>
          </div>
          <div className={styles.b}>
            <div className={styles["b-one"]}>
              <img src={Success} alt="ggg" />
              <h3>Excellent Track record</h3>
              <p>
                Offering the best service obtainable to all our numerous
                clients.
              </p>
            </div>

            <div className={styles["b-two"]}>
              <img src={Approved} alt="ggg" />
              <h3>Proven integrity</h3>
              <p>
                Testimonies can do the talking but much more are the wonderful
                memories we give.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { About };
