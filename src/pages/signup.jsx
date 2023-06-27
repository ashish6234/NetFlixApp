import React from 'react'
import styled from 'styled-components'
import Backgroundimage from '../components/Backgroundimage';
import Header from '../components/Header';

export default function signup() {

  return <Container>

<Backgroundimage />
<Header />
<div className="body flex column a-center j-center">
  <div className="text flex column">
    <h1>Unlimited Movies, Tv Shows and More</h1>
    <h4>Watch Anywhere, Cancel Anytime.</h4>
    <h6>Ready to Watch? Enter Your Email to create or Restart Membership</h6>
  </div>
  <div className="form">
    <input type="email" placeholder='Email Address' name='email' />
    <input type="password" placeholder='Password' name='password' />
    <button>Get Start</button>
    <button>Log In</button>

  </div>
</div>
  </Container>

}

const Container = styled.div``;