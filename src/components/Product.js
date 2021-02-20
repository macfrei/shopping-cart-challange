import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'

export default function Product({
  name,
  details,
  onHandleClick,
  setCart,
  product,
  cart,
}) {
  const [position, setPosition] = useState({ left: 0, top: 0 })

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setPosition({
        left: node.getBoundingClientRect().left,
        top: node.getBoundingClientRect().top,
      })
    }
  }, [])
  console.log(position)
  return (
    <ProductContainer>
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <Button ref={measuredRef} onClick={() => handleClick()}>
        Add to Cart
      </Button>
    </ProductContainer>
  )

  function handleClick() {
    setCart([...cart, product])
    onHandleClick(position)
  }
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
