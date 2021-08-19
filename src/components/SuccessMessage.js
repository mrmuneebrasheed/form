import React from "react";
import styled from "styled-components";
class SuccessMessage extends React.Component {
  render() {
    // const Div = styled.div`
    //   width: 50%;
    //   height: 40vh;
    //   margin: 2rem auto;
    //   font-size: 10em;
    //   text-align: center;
    // `;
    return (
      <>
        <h1 className="my-5 text-center">Submitted Successfully</h1>
        <h2 className="my-2 text-center">
          Welcome {this.props.firstName} {this.props.lastName}
        </h2>
        <h3 className="text-center">{this.props.email}</h3>
      </>
    );
  }
}
export default SuccessMessage;
