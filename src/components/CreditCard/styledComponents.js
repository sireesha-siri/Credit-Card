// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;

  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  min-height: 120vh;
  padding: 20px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 567px) {
    min-height: 50vh;
    width: 100vw;
    padding: 30px;
  }
`

export const CardHeading = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-family: 'Roboto';
  line-height: 0.5;

  @media screen and (max-width: 567px) {
    font-size: 20px;
  }
`

export const HorizontalRule = styled.hr`
  border: 2px solid #ffd773;
  width: 33%;
  margin-left: 28%;
`

export const CardDetailsContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 90%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardNumber = styled.p`
  font-size: 40px;
  color: white;
  font-family: 'Roboto';
  margin-top: 50px;
  font-weight: bold;
`

export const CardHolderNameHeading = styled.p`
  font-size: 13px;
  color: white;
  font-family: 'Roboto';
  line-height: 0.3;
`

export const CardHolderName = styled.p`
  line-height: 0.3;
  font-size: 17px;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
`

export const UserDetailsContainer = styled.div`
  background-color: #ffffff;
  min-height: 120vh;
  padding: 20px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 567px) {
    min-height: 50vh;
    padding: 30px;
    width: 100vw;
  }
`

export const FormContainer = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #c3cad9;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const FormHeading = styled.h1`
  color: #344e7a;
  font-size: 25px;
  font-family: 'Roboto';
  line-height: 0.5;
  margin-bottom: 20px;

  @media screen and (max-width: 567px) {
    font-size: 15px;
  }
`

export const InputContainer = styled.input`
  width: 80%;
  height: 40px;
  padding: 5px;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid #d3d9e0;
  margin-top: 20px;
  outline: none;
`
