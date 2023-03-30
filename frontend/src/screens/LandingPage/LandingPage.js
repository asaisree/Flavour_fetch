import React /*{ useEffect }*/ from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css';

const LandingPage = () => {
   /* useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            history.push("/mykitchen");
        }
    }, [history]);*/
  return (
      <div className='main'>
          <Container>
              <Row>
                  <div className="intro-text">
                      <div>
                          <h1 className='title'>Welcome to FlavourFetch</h1>
                          <p className='subtitle'>Order in, Dine on</p>
                      </div>
                      <div className='buttonContainer'>
                            <a href='/login'>
                              <Button size='lg' className='landingbutton' variant='outline-primary'>Login</Button>
                          </a>
                          <a href='/register'>
                              <Button size='lg' className='landingbutton' variant='outline-primary'>Register</Button>
                          </a>
                      </div>
                  </div>
              </Row>
          </Container>
    </div>
  )
}

export default LandingPage;