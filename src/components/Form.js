import React from "react";
import styled from "styled-components";
class Form extends React.Component {
  render() {
    // const Div = styled.div`
    //   width: 50%;
    //   height: 40vh;
    //   margin: 2rem auto;
    // `;
    return (
      <div className="my-5">
        <div className="h1 text-center">Login</div>
        <form onSubmit={this.props.submitHandler}>
          <div className="form-group my-2">
            <label htmlFor="inputFirstName">Enter your First Name</label>
            <input
              onChange={this.props.firstNameHandler}
              type="text"
              className="form-control my-2"
              id="inputFirstName"
              placeholder="First Name"
            ></input>
          </div>
          <div className="form-group my-2">
            <label htmlFor="inputLastName">Enter your Last Name</label>
            <input
              onChange={this.props.lastNameHandler}
              type="text"
              className="form-control my-2"
              id="inputLastName"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="form-group my-2">
            <label htmlFor="inputEmail">Email Address</label>
            <input
              onChange={this.props.emailHandler}
              type="email"
              className="form-control my-2"
              id="inputEmail"
              placeholder="Enter Your Email"
            ></input>
            <small d="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group my-2">
            <label htmlFor="inputPassword">Password</label>
            <input
              onChange={this.props.passwordHandler}
              type="password"
              className="form-control my-2"
              id="inputPassword"
              placeholder="Password"
            ></input>
          </div>
          <div className="form-check my-2">
            <input
              onChange={this.props.rememberMeHandler}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label
              type="checkbox"
              className="form-check-label"
              htmlFor="exampleCheck1"
            >
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
