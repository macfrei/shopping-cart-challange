import styled from 'styled-components/macro'
import Header from './components/AppHeader'
import Product from './components/Product'
import productData from './assets/products.json'

function App() {
  return (
    <AppGrid>
      <Header>Shopping Cart </Header>
      <Main>
        {productData.map(({ name, details }, index) => (
          <Product
            key={index}
            name={name}
            details={details}
            handleClick={() => console.log(name)}
          />
        ))}
      </Main>
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 40px auto;
  grid-gap: 20px;
  height: 100vh;
`

const Main = styled.main`
  overflow: scroll;
`
