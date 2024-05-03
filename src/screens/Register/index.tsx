import React from 'react'
import { AcceptTerms, CompanyLogo, Container, Title } from './styled'
import BackIcon from '../../components/common/backicon'
import Form from '../../components/Register/Form'
import DefaultButton from '../../components/common/defaultbutton'
import { useNavigation } from '@react-navigation/native'
import { PropsStack } from '../../routes'

const companyLogo = require("../../../assets/images/Group.png");


const Register = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container contentContainerStyle={{paddingBottom: 60}}>
      <BackIcon marginLeft={20} />
      <Title>CRIAR UMA CONTA </Title>
      <Form/>
      <DefaultButton buttonText="FAZER REGISTRO" buttonType="primary" marginVertical={30}buttonHandle={() => {}} />
      <AcceptTerms>Ao fazer o registro aceito{"\n"}os termos de política de privacidade</AcceptTerms>
      <DefaultButton buttonText="FAZER LOGIN" buttonType="secondary" marginVertical={30}buttonHandle={() => {navigation.navigate("Login"); }} />
      <CompanyLogo source={companyLogo}  />
    </Container>
  )
}

export default Register;