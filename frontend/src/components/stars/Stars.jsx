
const Stars = ({numb}) => {

  const processNumber = (numb) => {
    if (typeof numb !== 'number' || isNaN(numb) || numb < 0) {
      return 0
    }
    return numb
  }

  const hasDecimalPlace = (numb) => {
    return !Number.isInteger(numb)
  }

  const validNumb = processNumber(numb)
  const hasDecimal = hasDecimalPlace(validNumb)

  if (validNumb === 0) {
    return <p></p>;
  }

  const integerPart = Math.floor(validNumb)
  const stars = Array(integerPart).fill(null).map((_, index) => (
    <i key={index} className="bi bi-star-fill"></i>
  ))

  const decimalStar = hasDecimal ? (
    <i key='decimal' className="bi bi-star-half"></i>
  ) : null

  return (
    <div className='stars d-flex'>
      {stars}
      {decimalStar}
    </div>
  )
}

export default Stars
