import React from 'react'

import { Link  } from 'react-router-dom'
import { Container, Row, Col, Card } from 'reactstrap'


import Logo from '../Images/LOGO.svg'
import Boy from '../Images/boy_1.png'
import Burger from '../Images/image_12.png'

import '../Styles/Main.css'
import Routers from '../Routers/Routers'

const SideBar = () => {
  return (
    <>

      <Container>
        <Row>
          <Col>
            <div className='left-div'>
              <div className='logo'>
                <Link to ='/'> <img src={Logo} alt="Logo"/> </Link>
              </div>

              <div className='burger'>
                <img src={Burger} alt="Burger"/> 
              </div>

              <div className='content'>
                <h2> Good Food for <br/> Everyone </h2> 
              </div>

              <div className='boy'>
                <img src={Boy} alt="Boy"/> 
              </div>
            </div>
          </Col>
          <Col>
            <div className='right-div'>
              <Routers/>
            </div>
            
          </Col>
        </Row>
      </Container>

    </>

  )
}

export default SideBar
