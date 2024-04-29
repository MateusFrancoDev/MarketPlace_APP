import React from 'react'
import { Container, Logo } from './styled'
import BackIcon from '../../components/common/backicon'

const logo = require("../../../assets/images/darling.png");


const Login = () => {
  return (
    <Container>
      <BackIcon marginLeft={30} />
      <Logo source={logo} />
    </Container>
  )
}

export default Login;