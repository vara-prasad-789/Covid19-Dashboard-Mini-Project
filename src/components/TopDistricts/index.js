import './index.css'

const TopDistricts = props => {
  const {item} = props
  item.sort()
  return (
    <li>
      <div className="item3">
        <h2>{item[1].total.confirmed}</h2>
        <p>{item[0]}</p>
      </div>
    </li>
  )
}
export default TopDistricts
