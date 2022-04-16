import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from "@expo/vector-icons"

export const Container = styled.View `
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px ;
    
`
export const Header = styled.View `
    flex-direction: row;
    justify-content: space-between;

`; 

export const Title = styled.Text `
    font-family: ${({ theme }) => theme.fonts.regular} ;
    font-size: ${RFValue(14)}px;
`; 

export const Icon = styled(Feather) `
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(40)}px;
`; 

export const Footer = styled.View ``; 

export const Amount = styled.Text `
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(32)}px;
    margin-top: ${RFValue(45)}px;

`;

export const LastTransaction = styled.Text `
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(12)}px;
`;