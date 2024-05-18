// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  CardHeading,
  HorizontalRule,
  CardDetailsContainer,
  UserDetailsContainer,
  FormContainer,
  FormHeading,
  InputContainer,
  CardNumber,
  CardHolderNameHeading,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const changeCardNumber = event => {
    setNumber(event.target.value)
  }

  const changeCardHolderName = event => {
    setName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <HorizontalRule />

        <CardDetailsContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
          <CardHolderName>{name.toUpperCase()}</CardHolderName>
        </CardDetailsContainer>
      </CreditCardContainer>

      <UserDetailsContainer>
        <FormContainer>
          <FormHeading>Payment Method</FormHeading>

          <InputContainer
            type="text"
            placeholder="Card Number"
            onChange={changeCardNumber}
            value={number}
          />

          <InputContainer
            type="text"
            placeholder="Cardholder Name"
            onChange={changeCardHolderName}
            value={name}
          />
        </FormContainer>
      </UserDetailsContainer>
    </AppContainer>
  )
}

export default CreditCard
