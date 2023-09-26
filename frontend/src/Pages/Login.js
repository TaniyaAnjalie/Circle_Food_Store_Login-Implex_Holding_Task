import React , {useState} from 'react'

import { Container, Row, Col, Form, FormGroup,Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { login } from '../Service/UserService'

import '../Styles/Login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response);
    } catch (error) {
      setError(error);
    }
  };

  return (
      
    <section>
      <Container>
        <Row>
          <Col>
          <div className='login_container d-flex justify-content-between'>
            <div className='login_form'>

              <h2>LOGIN</h2>

              {error && <p>{error}</p>}

              <Form onSubmit={handleLogin}>

                <FormGroup>
                  <label className='fw-bold'>
                    Email
                      <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      /> 
                  </label>
                </FormGroup>
                
                <FormGroup>
                  <label className='fw-bold'>
                    Password
                    <input 
                      type='password' 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    /> 
                  </label>
                </FormGroup>

                <Button className='btn primary_btn' type='submit'> LOGIN </Button>
              </Form>

              <p>If you haven't account <Link to='/signup'> Sign Up </Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Login
