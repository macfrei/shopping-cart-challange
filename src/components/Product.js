import styled from 'styled-components/macro'

export default function Product({
  name,
  details,
  product,
  onHandleClick,
  buttonPosition,
}) {
  return (
    <ProductContainer>
      <div>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
      <Button
        position={buttonPosition && 'static'}
        onClick={(event) => handleClick(event, product)}
      >
        Add to Cart
        {buttonPosition && (
          <AnimatedSpan top={buttonPosition.top} left={buttonPosition.left} />
        )}
      </Button>
    </ProductContainer>
  )

  function handleClick(event, product) {
    const top = event.target.offsetTop
    const left = event.target.offsetLeft

    onHandleClick(product, top, left)
  }
}

const ProductContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`

const Button = styled.button`
  position: ${(props) => props.position || 'relative'};
  padding: 16px;
  background-color: #badaba;
  border-radius: 8px;
  border: 1px solid black;
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
  z-index: -10;
`
