import React from "react";
import Form from "./components/Form";
import SuccessMessage from "./components/SuccessMessage";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.setState({
      emailIsValid: regex.test(this.state.email),
    });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.setState({ passwordIsValid: this.state.password.length > 5 });
  }
  handleRememberMeChange(event) {
    this.setState({ rememberMe: event.target.checked });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.emailIsValid && this.state.passwordIsValid)
      this.setState({ isSubmitted: true });
    console.log(this.state);
  }
  handleFirstName(event) {
    this.setState({ firstName: event.target.value });
  }
  handleLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  render() {
    return (
      <div className="container">
        {!this.state.isSubmitted ? (
          <Form
            emailHandler={this.handleEmailChange.bind(this)}
            passwordHandler={this.handlePasswordChange.bind(this)}
            rememberMeHandler={this.handleRememberMeChange.bind(this)}
            submitHandler={this.handleSubmit.bind(this)}
            firstNameHandler={this.handleFirstName.bind(this)}
            lastNameHandler={this.handleLastName.bind(this)}
          />
        ) : (
          <SuccessMessage
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
          />
        )}
      </div>
    );
  }
}
export default App;
