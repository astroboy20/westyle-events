/* eslint-disable react/prop-types */
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { About } from "../About";
import { Contact } from "../Contact";
import { useRef } from "react";
import { Introduction } from "../Introduction/Introduction";

const Content = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Header aboutRef={aboutRef} contactRef={contactRef} />
      <Introduction aboutRef={aboutRef} contactRef={contactRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export { Content };
