//Component To ADD DATA With Stepper Form
import React, { Component } from "react";
import { connect } from "react-redux";
import PersonalInfoComponent from "./PersonalInfoComponent";
import CompanyInfoComponent from "./CompanyInfoComponent";
import ConfirmFormComponent from "./ConfirmFormComponent";
import SuccessComponent from "./SuccessComponent";
import { increment, decrement, addData } from "../actions/actions";

class AddFormComponent extends Component {
  state = {
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    website: "",
  };
  // forward
  nextStep = () => {
    this.props.incrementValue();
    // const { step } = this.state;
    // this.setState({
    //   step: step + 1,
    // });
  };

  // backward
  prevStep = () => {
    this.props.decrementValue();
    // const { step } = this.state;
    // this.setState({
    //   step: step - 1,
    // });
  };

  // Handle Input
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { id, name, username, email, phone, city, website } = this.state;
    const values = { id, name, username, email, phone, city, website };
    switch (this.props.count) {
      case 1:
        return (
          <PersonalInfoComponent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CompanyInfoComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmFormComponent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <SuccessComponent values={values} />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementValue: () => {
      dispatch(increment());
    },
    decrementValue: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFormComponent);
