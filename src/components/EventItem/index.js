// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, eventRegistrationDetails, isActive} = props
  const {imageUrl, name, location, id} = eventItemDetails

  const activeImg = isActive ? 'event-img active' : 'event-img'

  const eventBtnValue = () => {
    eventRegistrationDetails(id)
  }

  return (
    <li className="event-list">
      <button type="button" className="btn" onClick={eventBtnValue}>
        <img src={imageUrl} alt="event" className={activeImg} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
