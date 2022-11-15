import Popup from 'reactjs-popup'

import {BiFilter} from 'react-icons/bi'
import './index.css'

const FilterPopup = () => (
  <div>
    <Popup
      trigger={
        <div className="filter-container">
          <BiFilter />
          <p className="filter-heading">Filter</p>
        </div>
      }
      position="bottom right"
    >
      {close => (
        <div className="filter-content-container">
          <p className="filter-name">Filters</p>
          <hr className="popup-hr-line" />
          <p className="filter-name">Type</p>
          <div className="burner-subscriber-container">
            <div className="checkbox-card-type-container">
              <input className="checkbox" type="checkbox" id="burner" />
              <span className="burner-checkbox" htmlFor="burner">
                Burner
              </span>
            </div>
            <div className="checkbox-card-type-container">
              <input type="checkbox" id="subscription" />
              <span className="burner-checkbox" htmlFor="subscription">
                Subscription
              </span>
            </div>
          </div>
          <p className="filter-name">Cardholder</p>
          <select className="drop-down-btn">
            <option>Select cardholder</option>
          </select>
          <div>
            <button type="button" className="apply-btn">
              Apply
            </button>
            <button
              className="cancel-btn"
              onClick={() => close()}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
  </div>
)
export default FilterPopup
