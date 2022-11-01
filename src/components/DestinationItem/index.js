import './components/DestinationItem/index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li>
      <div className="item">
        <img src={imgUrl} className="photo" alt="photo" />
        <h1 className="place">{name}</h1>
      </div>
    </li>
  )
}

export default DestinationItem
