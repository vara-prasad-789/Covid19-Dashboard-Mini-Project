import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchListPage = props => {
  const {item} = props
  const stateCode = item.state_code
  const stateName = item.state_name
  return (
    <li className="search-list-item2">
      <Link to={`/state/${stateCode}`}>
        <div className="search-list-item3">
          <h2 className="search-list-state-name">{stateName}</h2>
          <button type="button" className="search-list-state-button">
            <p className="search-list-state-code">{stateCode}</p>
            <BiChevronRightSquare />
          </button>
        </div>
      </Link>
    </li>
  )
}
export default SearchListPage
