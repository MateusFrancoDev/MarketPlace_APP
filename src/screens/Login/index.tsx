import React from 'react'
import { Container, ForgetPassword, Input, InputContainer, Logo } from './styled'
import BackIcon from '../../components/common/backicon'
import DefaultButton from '../../components/common/defaultbutton';
import { Alert } from 'react-native';

const logo = require("../../../assets/images/darling.png");


const Login = () => {
  const handleLogin = ()=> {
    Alert.alert("Botão de login")
  };

  return (
    <Container>
      <BackIcon marginLeft={30} />
      <Logo source={logo} />
      <InputContainer>
      <Input placeholder=" Email" placeholderTextColor="white" />
      </InputContainer>
      <InputContainer>
      <Input placeholder=" Senha" placeholderTextColor="white" secureTextEntry={true}/>
      </InputContainer>
      <ForgetPassword>Esqueceu sua senha ?</ForgetPassword>
      <DefaultButton buttonText="Fazer login" buttonType="primary" marginVertical={40} buttonHendle={() => {handleLogin()}} />
    </Container>
  )
}

export default Login;