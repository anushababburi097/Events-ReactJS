// Write your code here
import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-register-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-view-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="register-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="icon"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )
  const renderRegistrationsClosedView = () => (
    <div className="registration-closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-view-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="description">Stay tuned. We will reopen</p>
    </div>
  )

  const renderActiveEventRegistrationView = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status">
      {renderActiveEventRegistrationView()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
