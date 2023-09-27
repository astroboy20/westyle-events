import styles from "./Header.module.css";
import Logo from '../../assets/WeStyle-white.png'
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] =useState(false)
  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} className={styles.image} alt="logo"/>

        <div className={styles["nav-lists"]}>
          <ul>
            <li className={styles["list-p"]}>
              <a href="">Home</a>
            </li>
            <li className={styles["list-p"]}>
              <a href="#about">About</a>
            </li>

            <li className={styles["list-p"]}>
              <a href="">Gallery</a>
            </li>

            <li className={styles["list-p"]}>
              <a href="{%url 'Blog' %}">Blog</a>
            </li>

            <span className={styles.contact}>
              <a href="#contact"> Contact us</a>
            </span>
          </ul>
        </div>
        <div onClick={handleClick} className={styles.hamburger}>
          {isOpen ? <>&#10005;</> : <>&#8801;</>}
        </div>
      </header>

      {isOpen && (
        <div className={styles.hamburgerList}>
          <ul>
            <li className={styles["list-p"]}>
              <a href="">Home</a>
            </li>
            <li className={styles["list-p"]}>
              <a href="#about">About</a>
            </li>

            <li className={styles["list-p"]}>
              <a href="">Gallery</a>
            </li>

            <li className={styles["list-p"]}>
              <a href="{%url 'Blog' %}">Blog</a>
            </li>

            <span className={styles.contact}>
              <a href="#contact"> Contact us</a>
            </span>
          </ul>
        </div>
      )}
    </>
  );
};

export { Header };
