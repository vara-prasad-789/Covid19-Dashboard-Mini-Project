import {Link} from 'react-router-dom'
import './index.css'

const StateList = props => {
  const {states} = props
  const {stateCode} = states
  const {confirmed, recovered, deceased} = states
  const active = confirmed - (recovered + deceased)
  return (
    <li>
      <Link to={`/state/${stateCode}`}>
        <div className="item">
          <h3 className="state-name-head">{states.stateName}</h3>
          <p className="confirmed">{confirmed}</p>
          <p className="active">{active}</p>
          <p className="recovered">{recovered}</p>
          <p className="deceased">{deceased}</p>
          <p className="population">{states.population}</p>
        </div>
      </Link>
    </li>
  )
}
export default StateList
