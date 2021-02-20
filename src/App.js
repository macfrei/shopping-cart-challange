import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import Product from './components/Product'
import products from './assets/products.json'
import { useCallback, useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [position, setPosition] = useState({ left: 0, top: 0 })

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setPosition({
        left: node.getBoundingClientRect().left,
        top: node.getBoundingClientRect().top,
      })
    }
  }, [])

  function onHandleClick(position) {
    setPosition(position)
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
            onHandleClick={onHandleClick}
            setCart={setCart}
            product={product}
            cart={cart}
          />
        ))}
        <AnimatedSpan top={position.top} left={position.left} />
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

const AnimatedSpan = styled.span`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transition: top 0.6s, left 0.6s;
  background-color: transparent;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
`
