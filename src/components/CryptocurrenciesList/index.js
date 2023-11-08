// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptoCurrencyList extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.displayComponentsList()
  }

  displayComponentsList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedList = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyName: eachItem.currency_name,
    }))
    this.setState({list: updatedList, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {list.map(eachItem => (
          <CryptocurrencyItem
            currencyItemDetails={eachItem}
            key={eachItem.id}
          />
        ))}
      </div>
    )
  }
}
export default CryptoCurrencyList
