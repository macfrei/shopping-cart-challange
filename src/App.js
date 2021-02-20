import styled from 'styled-components'
import Header from './components/AppHeader'

function App() {
  return (
    <AppGrid>
      <Header>Shopping Cart 👛</Header>
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
