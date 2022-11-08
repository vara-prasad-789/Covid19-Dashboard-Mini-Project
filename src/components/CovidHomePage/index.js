import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import StateList from '../StateList'
import SearchListPage from '../SearchListPage'
import './index.css'

const statesList = [
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
]

class CovidHomePage extends Component {
  state = {covidList: [], onSearch: false, searchList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    const data = await response.json()
    const newCovidList = statesList.map(item => {
      const stateCode = item.state_code
      const stateName = item.state_name
      const {total, meta} = data[stateCode]
      const {population} = meta
      return {...total, population, stateCode, stateName}
    })
    this.setState({covidList: newCovidList, isLoading: false})
  }

  addPage = () => {
    this.setState({onSearch: false})
  }

  searchInput = event => {
    this.setState({onSearch: true})
    const searchInput = event.target.value
    const searchedList = statesList.filter(item =>
      item.state_name.toLowerCase().includes(searchInput),
    )
    this.setState({searchList: searchedList})
  }

  renderHomePage = () => {
    const {covidList, onSearch, searchList} = this.state

    return (
      <div className="page">
        <div className="search-container">
          <BsSearch testid="searchIcon" className="search" />
          <input
            type="search"
            placeholder="Enter the State"
            className="search-input"
            onFocus={this.searchInput}
            onBlur={this.addPage}
            onChange={this.searchInput}
          />
        </div>
        {onSearch ? (
          <ul
            className="search-list"
            //   testid="searchResultsUnorderedList"
          >
            {searchList.length ? (
              searchList.map(item => (
                <SearchListPage key={item.state_code} item={item} />
              ))
            ) : (
              <h1>No Results</h1>
            )}
          </ul>
        ) : (
          <li>
            <div>
              <div className="group1">
                <div
                  className="confirm"
                  // testid="countryWideConfirmedCases"
                >
                  <p>Confirmed</p>
                  <img
                    src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882139/check-mark_1_2x_lvvtkm.png"
                    alt="country wide confirmed cases pic"
                  />
                  <p>34285612</p>
                </div>
                <div
                  className="active"
                  // testid="countryWideActiveCases"
                >
                  <p>Active</p>
                  <img
                    src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882252/protection_1_2x_c7hvqf.png"
                    alt="country wide active cases pic"
                  />
                  <p>165803</p>
                </div>
                <div
                  className="recover"
                  // testid="countryWideRecoveredCases"
                >
                  <p>Recovered</p>
                  <img
                    src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882352/recovered_1_2x_ysvwan.png"
                    alt="country wide recovered cases pic"
                  />
                  <p>33661339</p>
                </div>
                <div
                  className="deceased"
                  // testid="countryWideDeceasedCases"
                >
                  <p>Deceased</p>
                  <img
                    src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882464/breathing_1_2x_fer6ey.png"
                    alt="country wide deceased cases pic"
                  />
                  <p>458470</p>
                </div>
              </div>
            </div>
            <div
            // testid="stateWiseCovidDataTable"
            >
              <ul className="unordered-list">
                <li className="item1">
                  <div className="sort-state">
                    <h4>States/UT</h4>
                    <button
                      type="button"
                      // testid="ascendingSort"
                    >
                      <FcGenericSortingAsc />
                    </button>
                    <button type="button">
                      <FcGenericSortingDesc />
                    </button>
                  </div>
                  <p>Confirmed</p>
                  <p>Active</p>
                  <p>Recovered</p>
                  <p>Deceased</p>
                  <p className="people">Population</p>
                </li>
                {covidList.map(item => (
                  <StateList key={item.stateCode} states={item} />
                ))}
              </ul>
            </div>
          </li>
        )}
      </div>
    )
  }

  renderLoadingView = () => (
    <div
      className="products-loader-container"
      // testid="homeRouteLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoadingView() : this.renderHomePage()}</>
  }
}
export default CovidHomePage
