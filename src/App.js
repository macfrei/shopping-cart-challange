import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import Product from './components/Product'
import products from './assets/products.json'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [cartPosition, setCartPosition] = useState({ left: 0, top: 0 })
  const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 })
  const [addToCart, setAddToCart] = useState(false)
  const cartRef = useRef(null)

  useEffect(() => {
    if (cartRef) {
      setCartPosition({
        left: cartRef.current.getBoundingClientRect().left,
        top: cartRef.current.getBoundingClientRect().top,
      })
    }
  }, [spanPosition])

  function onHandleClick(product, buttonRef) {
    setSpanPosition({
      left: buttonRef.current.getBoundingClientRect().left + 2,
      top: buttonRef.current.getBoundingClientRect().top + 2,
    })

    setAddToCart(!addToCart)

    setTimeout(() => {
      updateCart(product)
      setAddToCart(false)
    }, 1100)
  }

  useLayoutEffect(() => {
    if (spanPosition) {
      setTimeout(() => {
        setSpanPosition({
          left: cartPosition.left,
          top: cartPosition.top,
        })
      }, 1000)
    }
  }, [spanPosition])

  function updateCart(product) {
    setCart([...cart, product])
  }

  return (
    <AppGrid>
      <Header>
        Shopping Cart <Cart ref={cartRef}>{cart.length}</Cart>
      </Header>
      <Main>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            details={product.details}
            handleClick={onHandleClick}
            product={product}
            spanPosition={spanPosition}
            addToCart={addToCart}
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
  margin-left: 5px;
  border-radius: 4px;
  padding: 4px;
  background-color: #badaba;
  z-index: 10;
  min-width: 20px;
`
