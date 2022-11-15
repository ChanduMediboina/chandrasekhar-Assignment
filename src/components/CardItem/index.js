// Each card functionality was developed in this Component

import {ImFire} from 'react-icons/im'

import {GoSync} from 'react-icons/go'

import './index.css'

// We are getting the Props from all,your,blocked tabs

const CardItem = props => {
  const {getCardItem} = props
  const {
    availableToSpend,
    budgetName,
    cardType,
    expiry,
    name,
    spent,
    limit,
  } = getCardItem
  // In this OBJECT we get expiry date. In that we splitting date, month and year
  const date = new Date(expiry)
  const month = date.toLocaleString('default', {month: 'short'})

  //   console.log(getCardItem)
  const displayDateOrExpiry =
    cardType === 'burner'
      ? `Expires: ${date.getDate()} ${month} ${date.getFullYear()}`
      : `Limit: ${limit}`

  // Based on card type we display the logo
  const logo =
    cardType === 'burner' ? (
      <ImFire className="fire-icon" />
    ) : (
      <GoSync className="fire-icon" />
    )
  console.log(
    (spent.value / (spent.value + availableToSpend.value)) * 100 +
      (availableToSpend.value / (availableToSpend.value + spent.value)) * 100,
  )

  return (
    <li className="card-container">
      <div className="name-card-icon-container">
        <div className="name-budget-container">
          <h1 className="card-name-heading">{name}</h1>
          <p className="budget-name-heading">{budgetName} Subscription</p>
        </div>
        {logo}
      </div>
      <div className="name-card-icon-container">
        <button type="button" className="card-type">
          {cardType}
        </button>
        <p className="spend">{displayDateOrExpiry}</p>
      </div>
      <div className="line-container">
        <hr
          width={`${
            (spent.value / (spent.value + availableToSpend.value)) * 100
          }%`}
          className="used-space-line"
        />
        <hr
          width={`${
            (availableToSpend.value / (availableToSpend.value + spent.value)) *
            100
          }%`}
          className="available-space-line"
        />
      </div>
      <div className="spend-container">
        <p className="spend">
          <span className="red-dot">c</span>
          Spend
        </p>
        <p className="value">
          {spent.value} {spent.currency}
        </p>
      </div>
      <div className="spend-container">
        <p className="spend">
          <span className="green-dot">c</span>Available to spend
        </p>
        <p className="value">
          {availableToSpend.value} {spent.currency}
        </p>
      </div>
    </li>
  )
}
export default CardItem
