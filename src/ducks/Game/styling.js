import styled from 'styled-components'
import { FONT } from '../../utils/constants';

export const GameCard = styled.div`
width: fit-content;
margin: 10px;
border-left: 5px solid;
border-right: 5px solid;
border-left-color: ${(props) => props.leftColor};
border-right-color: ${(props) => props.rightColor};
padding: 10px;
background: white;
border-radius: 5px;
transition: all 0.25s ease;
display: grid;
grid-template-rows: auto 30px;
grid-gap: 5px;
`

export const Info = styled.div`
display: grid;
align-items: center;
grid-template-columns: 120px 64px 120px;
`

export const Team = styled.div`
text-align:center;
`


export const AdditionalInfo = styled.div`
font-size: 12px;
text-align: center;
`

export const VS = styled.div`
text-align: center;
display: flex;
align-items: center;
font-weight: 700;
justify-content: center;
`

export const TeamTitle = styled.div`
font-weight: 700;
margin-top: 10px;
font-size: 14px;
`

export const SeachVODButton = styled.button`
background: ${(props) => props.background};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
font-family: ${(props) => FONT};
font-size: 12px;
`

export const ShowResults = styled.div`
background: ${(props) => props.background};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
font-size: 12px;
width: fit-content;
display: flex;
align-items: center;
`

export const Checkbox = styled.input`
margin: 0;
margin-left: 5px;
`

export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`


export const TeamLogo = styled.div`
background-image: url( ${(props) => props.logoUrl});
width: 32px;
height: 32px;
background-repeat: no-repeat;
background-size: cover;
margin: 0 auto;
`