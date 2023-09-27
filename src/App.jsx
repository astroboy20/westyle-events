
import { useRef } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Content } from './containers/Content'

function App() {
const aboutRef = useRef(null)
const contactRef = useRef(null)
  return (
    <>
      <Header aboutRef={aboutRef} contactRef={contactRef}/>
      <Content aboutRef={aboutRef} contactRef={contactRef}/>
      <Footer/>
    </>
  )
}

export default App
