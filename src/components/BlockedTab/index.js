// By using this component i display the blocked cards

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import CardItem from '../CardItem'

import './index.css'

const httpStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class BlockedTab extends Component {
  state = {blockedCardList: [], apiStatus: httpStatus.initial}

  componentDidMount() {
    this.getBlockedCards()
  }
  // getting blocked cards data

  getBlockedCards = async () => {
    this.setState({apiStatus: httpStatus.loading})

    const response = await fetch(
      'https://636efb4bbb9cf402c80d191b.mockapi.io/cards',
    )
    const data = await response.json()
    const filterBlockedCards = data.filter(
      eachCard => eachCard.status === 'block',
    )
    console.log(filterBlockedCards)
    this.setState({
      blockedCardList: [...filterBlockedCards],
      apiStatus: httpStatus.success,
    })
  }

  isLoading = () => (
    <div className="loading-container">
      <Loader type="ThreeDots" color="#0993de" height={50} width={60} />
    </div>
  )

  getSuccessfulApiCall = () => {
    const {blockedCardList} = this.state
    return (
      <div className="all-cards-container">
        {blockedCardList.map(each => (
          <CardItem key={each.id} getCardItem={each} />
        ))}
      </div>
    )
  }

  apiFetchingStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.getSuccessfulApiCall()
      case 'LOADING':
        return this.isLoading()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="blocked-cards-container">
        <Header />
        {this.apiFetchingStatus()}
      </div>
    )
  }
}
export default BlockedTab
