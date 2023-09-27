import styles from "./Contact.module.css";
import contactImg from "../../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section className={styles.section} id="contact" data-aos="fade-right">
        <div className={styles["section-head"]}>
          <h1>Ready to organize your next event ?</h1>
          <p>
            Our main goal is to create every event as if it were our own and
            make each event special, unique and unforgettable for both the
            organizers and their guests.
          </p>
          <a
            href="https://wa.me/message/QYK7ICKJBLN6C1"
            target="_blank"
            className={styles["btn-one"]}
            rel="noreferrer"
          >
            {" "}
            Contact us
          </a>
        </div>

        <div className={styles.img}>
          <img src={contactImg} alt="ff" />
        </div>
      </section>
    </>
  );
};

export { Contact };
