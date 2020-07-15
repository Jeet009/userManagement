//Component To ADD DATA With Stepper Form
import React, { Component } from "react";
import PersonalInfoComponent from "./PersonalInfoComponent";
import CompanyInfoComponent from "./CompanyInfoComponent";
import ConfirmFormComponent from "./ConfirmFormComponent";
import SuccessComponent from "./SuccessComponent";

export default class AddFormComponent extends Component {
  state = {
    step: 1,
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
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // backward
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle Input
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      id,
      name,
      username,
      email,
      phone,
      city,
      website,
    } = this.state;
    const values = { id, name, username, email, phone, city, website };
    switch (step) {
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
