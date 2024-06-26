import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";

export const InputContainer = styled.View`
width: 90%;
height: 50px;
border: 1px solid ${({theme}) => theme.colors.borderColor};
background-color:${({theme}) => theme.colors.background};
border-radius: 5px;
margin: 0 auto;
margin-top: 20px;
`;

export const Input = styled.TextInput`
flex: 1;
font-size: 20px;
color: ${({theme}) => theme.colors.primaryText};
`;

export const InputMaks = styled(TextInputMask)`
flex: 1;
font-size: 20px;
color: ${({theme}) => theme.colors.primaryText};
`;

