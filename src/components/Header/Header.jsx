/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import Logo from "../../assets/WeStyle-white.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({aboutRef, contactRef}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.body}>
          <img src={Logo} className={styles.image} alt="logo" />

          <div className={styles["nav-lists"]}>
            <ul>
              <li className={styles["list-p"]}>
                <a href="/">Home</a>
              </li>
              <li className={styles["list-p"]}>
                <a href="#about" onClick={aboutRef.current?.scrollIntoView()}>About</a>
              </li>

              <li className={styles["list-p"]}>
                <a href="">Gallery</a>
              </li>

              <li className={styles["list-p"]}>
                <Link to="/blog/">Blog</Link>
              </li>

              <span className={styles.contact}>
                <a href="#contact" onClick={contactRef.current?.scrollIntoView()}> Contact us</a>
              </span>
            </ul>
          </div>
          <div onClick={handleClick} className={styles.hamburger}>
          {isOpen ? <>&#10005;</> : <>&#8801;</>}
        </div>
        
        </div>

        <div style={{ display: "block", }}>
          {isOpen && (
            <div className={styles.hamburgerList}>
              <ul>
                <li className={styles["list-p"]}>
                  <a href="" onClick={handleClick}>Home</a>
                </li>
                <li className={styles["list-p"]}>
                  <a href="#about" onClick={handleClick}>About</a>
                </li>

                <li className={styles["list-p"]}>
                  <a href="" onClick={handleClick}>Gallery</a>
                </li>

                <li className={styles["list-p"]}>
                  <Link to="/blog/" onClick={handleClick}>Blog</Link>
                </li>

                <span className={styles["list-p"]}>
                  <a href="#contact" onClick={handleClick}> Contact us</a>
                </span>
              </ul>
            </div>
          )}
        </div>
       
      </header>
    </>
  );
};

export { Header };
