// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    submited: false,
    firstName: '',
    lastName: '',
    firstNameEmpty: false,
    lastNameEmpty: false,
  }

  clickingResponseButton = () => {
    this.setState({submited: false})
  }

  submittingForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const trimmedFirstName = firstName.trim(' ')
    const trimmedLastName = lastName.trim(' ')

    if (trimmedFirstName === '') {
      this.setState({firstNameEmpty: true})
    }
    if (trimmedLastName === '') {
      this.setState({lastNameEmpty: true})
    }
    const isYes = trimmedFirstName !== '' && trimmedLastName !== ''
    if (isYes) {
      this.setState({
        firstNameEmpty: false,
        lastNameEmpty: false,
        submited: true,
        firstName: '',
        lastName: '',
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = event => {
    const enteredValue = event.target.value
    if (enteredValue.trim('') === '') {
      this.setState({lastNameEmpty: true})
    } else {
      this.setState({lastNameEmpty: false})
    }
  }

  onBlurFirstName = event => {
    const enteredValue = event.target.value
    if (enteredValue.trim('') === '') {
      this.setState({firstNameEmpty: true})
    } else {
      this.setState({firstNameEmpty: false})
    }
  }

  renderFormElement = () => {
    const {firstName, lastName, firstNameEmpty, lastNameEmpty} = this.state
    return (
      <>
        <form className="form-container" onSubmit={this.submittingForm}>
          <div className="form-inside-ele-cont">
            <label className="label-element" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              className="input-element"
              type="text"
              id="firstName"
              value={firstName}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {firstNameEmpty && <p className="required-style">Required</p>}

            <label className="label-element" htmlFor="firstName">
              LAST NAME
            </label>
            <input
              className="input-element"
              type="text"
              id="firstName"
              value={lastName}
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {lastNameEmpty && <p className="required-style">Required</p>}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  renderRegistrationSuccessful = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="successful-para">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-response-btn"
        onClick={this.clickingResponseButton}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {submited} = this.state
    return (
      <div className="registration-form-bg-container">
        <h1 className="registration-title">Registration</h1>
        <div className="registration-form-inner-container">
          {!submited && this.renderFormElement()}
          {submited && this.renderRegistrationSuccessful()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
