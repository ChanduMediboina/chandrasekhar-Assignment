// In this component I developed the yourTab component

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CardItem from '../CardItem'

import Header from '../Header'

import './index.css'

const httpStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class YourTab extends Component {
  state = {yourTabList: [], apiStatus: httpStatus.initial}

  componentDidMount() {
    this.fetchApi()
  }

  // Api fetching
  fetchApi = async () => {
    this.setState({apiStatus: httpStatus.loading})
    const response = await fetch(
      'https://636efb4bbb9cf402c80d191b.mockapi.io/cards',
    )
    const data = await response.json()
    const filterWithOwnerId = data.filter(each => each.ownerId === '1')
    console.log(filterWithOwnerId)
    this.setState({
      yourTabList: [...filterWithOwnerId],
      apiStatus: httpStatus.success,
    })
  }

  // when the API fetch is SUCCESSFUL
  successfulApiFetch = () => {
    const {yourTabList} = this.state
    return (
      <div className="all-cards-container">
        {yourTabList.map(eachCard => (
          <CardItem key={eachCard.id} getCardItem={eachCard} />
        ))}
      </div>
    )
  }
  // Before fetch we display the loading function

  isLoading = () => (
    <div className="loading-container">
      <Loader type="ThreeDots" color="#0993de" height={50} width={60} />
    </div>
  )
  // By using this function we get status regarding API fetch

  apiFetchingStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.successfulApiFetch()
      case 'LOADING':
        return this.isLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="your-card-container">
        <Header />
        {this.apiFetchingStatus()}
      </div>
    )
  }
}
export default YourTab
