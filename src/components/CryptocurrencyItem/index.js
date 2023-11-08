// Write your JS code here
const CryptocurrencyItem = props => {
  const {currencyItemDetails} = props
  const {currencyLogo, usdValue, euroValue, currencyName} = currencyItemDetails
  return (
    <div>
      <li>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </li>
    </div>
  )
}

export default CryptocurrencyItem
