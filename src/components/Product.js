import styled from 'styled-components/macro'

export default function Product({ name, details, handleClick }) {
  return (
    <ProductContainer>
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <Button onClick={handleClick}>Add to Cart</Button>
    </ProductContainer>
  )
}

const ProductContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`

const Button = styled.button`
  padding: 16px;
  background-color: #badaba;
  border-radius: 8px;
  border: 1px solid black;
`
