

import './App.css'
import { Route, BrowserRouter as Router , Routes, Link } from 'react-router-dom'

import Saludo from './Components/Saludo'
import Eventos from './Components/Eventos'
import Iteracion from './Components/Iteracion'
import Fetching from './Components/Fetching'
import Usuarios from './Components/Usuarios'
import Navbar from './Components/Navbar'
import UlVertical from './Components/UlVertical'
import { withUlComponent } from './Components/withUlComponent'
import UlHorizontal from './Components/UlHorizontal'

function App() {
  
  const rsList = [

    {id: 1, name: "GitHub" , icon : "FaGithub" },
    {id: 2, name: "Twiter" , icon : "FaTwitter" },
    {id: 2, name: "Linkedin" , icon : "FaLinkedin"},
    {id: 2, name: "Naomi" , icon : "FaShieldDog"},
    {id: 2, name: "WhatsApp" , icon : "FaSquareWhatsapp"}

  ]
  const RsHoc = withUlComponent(UlVertical,rsList)

  //const RsHOC = withUlComponent (UlHorizontal, rsList)



  return (
    <>
    
      <Router>
        <Navbar></Navbar>
        <div className='container'>
          <div className='row'>

            <div className='col-4'><Link to={"/"}>Principal</Link></div>
            <div className='col-4'><Link to={"/Saludo/"}>Experiencia</Link></div>
            <div className='col-4'><Link to={"/Contacto/"}>Contacto</Link></div>
            <div className='col-4'><Link to={"/Searching/"}>Searching</Link></div>

          </div>
        </div>

        <div className='container'>
          <Routes>
            <Route path='/'element={<Fetching ></Fetching>}></Route>
            <Route path='/saludo/' element={ <Eventos></Eventos>}></Route>
            <Route path='/contacto' element={<Iteracion></Iteracion>}></Route>
            <Route path='/Searching' element={<Usuarios></Usuarios>}></Route>


          </Routes>
        </div>

      <footer>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'></div>
          <div className='col-4'>
            <UlVertical  list ={rsList}></UlVertical>
            {/*<RsHoc></RsHoc>*/}

          </div>

        </div>


      </footer>

      </Router>
    
    </>
  )
}

export default App