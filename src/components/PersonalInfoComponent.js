import React, { Component } from "react";
// import  from "@material-ui/core/Dialog";
// import  from "@material-ui/core/TextField";
// import  from "@material-ui/core/Button";
import { Container, Button, TextField, Dialog } from "@material-ui/core";

export class PersonalInfo extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Dialog open fullWidth maxWidth='sm'>
        <Container>
          <TextField
            label='Name'
            onChange={handleChange("name")}
            defaultValue={values.name}
            margin='normal'
            fullWidth
            variant='outlined'
          />
          <br />
          <TextField
            label='Phone'
            onChange={handleChange("phone")}
            defaultValue={values.phone}
            margin='normal'
            fullWidth
            variant='outlined'
          />
          <br />
          <TextField
            label='City'
            onChange={handleChange("city")}
            defaultValue={values.city}
            margin='normal'
            fullWidth
            variant='outlined'
          />
          <br />
          <Button
            style={{ margin: 10 }}
            color='primary'
            variant='contained'
            onClick={this.next}
          >
            Next
          </Button>
        </Container>
      </Dialog>
    );
  }
}

export default PersonalInfo;
