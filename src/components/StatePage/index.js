import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ChartsList from '../ChartsList'
import Header from '../Header'
import './index.css'
import TopDistricts from '../TopDistricts'
import Footer from '../Footer'

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

class StatePage extends Component {
  state = {
    STATE: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    const data = await response.json()
    const stateData = data[stateCode]
    const getStateName = statesList.filter(
      item => item.state_code === stateCode,
    )
    const newData = [stateData]
    const newerData = [...newData, ...getStateName]
    this.setState({
      STATE: newerData,
      isLoading: false,
    })
  }

  renderLoadingView = () => (
    <div
      className="products-loader-container"
      // testid="stateDetailsLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderStatePage = () => {
    const {STATE} = this.state
    const stateData = STATE[0]
    const stateName = STATE[1]
    const date = new Date(stateData.meta.last_updated)
    const getDate = `Sep ${date.getDate()} ${date.getFullYear()}`
    const {total} = stateData
    const active = total.confirmed - (total.deceased + total.recovered)
    const {districts} = stateData
    const distList = Object.entries(districts)

    return (
      <div className="body1">
        <div className="top-state-name">
          <h3 className="state-name">{stateName.state_name}</h3>
          <div className="tested-value">
            <p>Tested</p>
            <h3>{stateData.total.tested}</h3>
          </div>
        </div>
        <p className="last-updated">Last Update on {getDate}</p>
        <div>
          <ul className="group2">
            <li
              className="confirm1"
              //   testid="stateSpecificConfirmedCasesContainer"
            >
              <p>Confirmed</p>
              <img
                src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882139/check-mark_1_2x_lvvtkm.png"
                alt="state specific confirmed cases pic"
              />
              <p>{total.confirmed}</p>
            </li>
            <li
              className="active1"
              // testid="stateSpecificActiveCasesContainer"
            >
              <p>Active</p>
              <img
                src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882252/protection_1_2x_c7hvqf.png"
                alt="state specific active cases pic"
              />
              <p>{active}</p>
            </li>
            <li
              className="recover1"
              //   testid="stateSpecificRecoveredCasesContainer"
            >
              <p>Recovered</p>
              <img
                src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882352/recovered_1_2x_ysvwan.png"
                alt="state specific recovered cases pic"
              />
              <p>{total.recovered}</p>
            </li>
            <li
              className="deceased1"
              //   testid="stateSpecificDeceasedCasesContainer"
            >
              <p>Deceased</p>
              <img
                src="https://res.cloudinary.com/dhvj2hlgm/image/upload/v1666882464/breathing_1_2x_fer6ey.png"
                alt="state specific deceased cases pic"
              />
              <p>{total.deceased}</p>
            </li>
          </ul>
        </div>
        <div
        // testid="lineChartsContainer"
        >
          <h1 className="head1">Top Districts</h1>
          <ul
            className="top-dist"
            //   testid="topDistrictsUnorderedList"
          >
            {distList.map(item => (
              <TopDistricts item={item} key={item[0]} />
            ))}
          </ul>
        </div>
        <div>
          <ChartsList stateCode={stateName.state_code} category="confirmed" />
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="state-page">
        <Header />
        {isLoading ? this.renderLoadingView() : this.renderStatePage()}
        <Footer />
      </div>
    )
  }
}

export default StatePage
