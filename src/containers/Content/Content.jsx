/* eslint-disable react/prop-types */
import { About } from "../About"
import { Contact } from "../Contact"
import { Introduction } from "../Introduction"


const Content = ({aboutRef,contactRef}) => {
  return (
    <>
      <Introduction aboutRef={aboutRef} contactRef={contactRef}/>
      <About aboutRef={aboutRef}/>
      <Contact contactRef={contactRef}/>
    </>
  )
}

export  {Content}
