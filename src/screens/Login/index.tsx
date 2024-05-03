import React from 'react'
import { Bold, CompanyLogo, Container, ForgetPassword, Input, InputContainer, Logo, RegisterText } from './styled'
import BackIcon from '../../components/common/backicon'
import DefaultButton from '../../components/common/defaultbutton';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';

const logo = require("../../../assets/images/darling.png");
const company = require("../../../assets/images/Group.png");


const Login = () => {
  const navigation = useNavigation<PropsStack>();
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
      <RegisterText onPress={() => {
        navigation.navigate("Register");
      }}>Você ainda não tem conta ? <Bold>Registre-se</Bold> </RegisterText>
      <CompanyLogo source={company} />
    </Container>
  )
}

export default Login;