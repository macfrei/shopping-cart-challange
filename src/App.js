import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import Product from './components/Product'
import products from './assets/products.json'
import { useCallback, useLayoutEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const [buttonPosition, setButtonPosition] = useState('')
  const [currentProduct, setCurrentProduct] = useState('')

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setPosition({
        left: node.getBoundingClientRect().left,
        top: node.getBoundingClientRect().top,
      })
    }
  }, [])

  function onHandleClick(product, top, left) {
    setButtonPosition({ top, left })
    setCurrentProduct(product)
  }

  useLayoutEffect(() => {
    if (buttonPosition) {
      setTimeout(() => {
        setButtonPosition(position)
      }, 1000)
      setTimeout(() => {
        updateCart(currentProduct)
      }, 1500)
    }
    //setButtonPosition('')
  }, [buttonPosition])

  function updateCart(product) {
    setCart([...cart, product])
  }
  return (
    <AppGrid>
      <Header>
        Shopping Cart <Cart ref={measuredRef}>{cart.length}</Cart>
      </Header>
      <Main>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            details={product.details}
            position={position}
            onHandleClick={onHandleClick}
            cart={cart}
            setCard={setCart}
            product={product}
            setPosition={setPosition}
            buttonPosition={buttonPosition}
          />
        ))}
      </Main>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  height: 100vh;
`

const Main = styled.main`
  overflow: scroll;
`
const Cart = styled.span`
  text-align: center;
  width: 20px;
  height: 20px;
  background-color: #badaba;
`
