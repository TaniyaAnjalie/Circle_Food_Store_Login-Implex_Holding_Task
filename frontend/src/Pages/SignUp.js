import React, { useState } from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { signUp } from '../Service/UserService'
import '../Styles/SignUp.css'



const SignUp = () => {

  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      validateConfirmPassword();

      if (confirmPasswordError) {
        return;
      }

      const response = await signUp(email, phonenumber,password, confirmpassword);
      console.log(response);

      setEmail('');
      setPhonenumber('');
      setPassword('');
      setConfirmpassword('');
    } catch (error) {
      setError(error);
    }
  }

  const validateConfirmPassword = () => {
    if (password !== confirmpassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className='signup_container d-flex justify-content-between'>
              <div className='signup_form'>

                <h2>Sign Up</h2>

                {error && <p>{error}</p>}

                <Form onSubmit={handleSignUp}>

                  <FormGroup>
                    <label className='fw-bold'>
                      Email
                      <input 
                        type='email' 
                        required
                        autofocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                  </FormGroup>

                  <FormGroup>
                    <label className='fw-bold'>
                      Mobile Number
                      <input 
                        type='tel' 
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                      />
                    </label>
                  </FormGroup>

                  <FormGroup>
                    <label className='fw-bold'>
                      Password
                      <input 
                        type='password' 
                        minLength={5}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                  </FormGroup>

                  <FormGroup>
                  <label className='fw-bold text-align-left'>
                    Confirm Password
                      <input 
                        type='password' 
                        minLength={5}
                        required
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </label>
                    {confirmPasswordError && <p className='error'>{confirmPasswordError}</p>}
                  </FormGroup>
                
                  <Button className='btn primary_btn' type='submit'>Sign Up</Button>
                </Form>
                
                <p>If you have an account <Link to='/login' className='login'>Login</Link></p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignUp

