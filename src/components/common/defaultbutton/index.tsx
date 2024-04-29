import React from 'react'
import { ButtonContainer, ButtonText } from './styled';

type props = {
  buttonText: string;
  buttonType: string;
  marginVertical: number;
  buttonHendle: Function;
}

const DefaultButton = ({buttonText, buttonType, marginVertical, buttonHendle}: props) => {
  return (
    <ButtonContainer type={buttonType} marginVertical={marginVertical} onPress={() => {buttonHendle}}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  )
}

export default DefaultButton;