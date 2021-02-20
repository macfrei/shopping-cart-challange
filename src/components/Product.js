import { useRef, useState } from 'react'
import styled from 'styled-components/macro'

export default function Product({
  name,
  details,
  product,
  handleClick,
  addToCart,
  spanPosition,
}) {
  const buttonRef = useRef(null)

  return (
    <ProductContainer>
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <Button ref={buttonRef} onClick={() => handleClick(product, buttonRef)}>
        Add to Cart
        {addToCart && (
          <AnimatedSpan top={spanPosition.top} left={spanPosition.left} />
        )}
      </Button>
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
  z-index: 1;
`
const AnimatedSpan = styled.span`
  position: absolute;
  top: ${(props) => props.top || '5'}px;
  left: ${(props) => props.left || '5'}px;
  transition: top 0.8s, left 0.8s;
  background-color: #badaba;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
`
