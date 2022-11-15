// By using this component i created the functionalities regarding ALL TAB

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {BiSearchAlt2} from 'react-icons/bi'

import FilterPopup from '../FilterPopup'

import CardItem from '../CardItem'

import Header from '../Header'

import './index.css'

// By using this content we get API Fetching status
const httpStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class AllTab extends Component {
  state = {cardsList: [], searchContent: '', apiStatus: httpStatus.initial}

  componentDidMount() {
    this.getCardsData()
  }

  // By using this function we fetch the API

  getCardsData = async () => {
    this.setState({apiStatus: httpStatus.loading})
    const {searchContent} = this.state
    console.log(searchContent)
    const response = await fetch(
      `https://636efb4bbb9cf402c80d191b.mockapi.io/cards?search=${searchContent}`,
    )
    console.log(response.ok)
    const data = await response.json()
    this.setState({cardsList: [...data], apiStatus: httpStatus.success})
    console.log(data)
  }

  // we get user search input
  getSearchInput = event => {
    this.setState({searchContent: event.target.value}, this.getCardsData)
  }

  // When the API call is Successful then we call this function. In case that API provides Empty Array then we shows the no search data image also
  onSuccessfulApiCall = () => {
    const {cardsList} = this.state
    return (
      <>
        {cardsList.length > 0 ? (
          <div className="all-cards-container">
            {cardsList.map(eachCard => (
              <CardItem key={eachCard.id} getCardItem={eachCard} />
            ))}
          </div>
        ) : (
          <div className="search-empty-container">
            <img
              className="no-search-img"
              alt="no search"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
          </div>
        )}
      </>
    )
  }
  // page loading

  isLoading = () => (
    <div className="loading-container">
      <Loader type="ThreeDots" color="#0993de" height={50} width={60} />
    </div>
  )

  // Based on fetched data it displays the content
  apiFetchingStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.onSuccessfulApiCall()
      case 'LOADING':
        return this.isLoading()
      default:
        return null
    }
  }

  render() {
    const {searchContent} = this.state
    return (
      <>
        <Header />
        <div className="search-filter-container">
          <div className="search-input-icon-container">
            <input
              value={searchContent}
              onChange={this.getSearchInput}
              className="input"
              type="search"
              placeholder="Search"
            />
            <BiSearchAlt2 className="search-icon" />
          </div>
          <FilterPopup />
        </div>
        {this.apiFetchingStatus()}
      </>
    )
  }
}

export default AllTab
